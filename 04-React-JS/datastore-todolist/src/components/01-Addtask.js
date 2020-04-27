import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Delete from './02-Delete';
import Select from './03-Select';


function Todo() {

    const [task, setTask] = useState({ id: 0, title: '', completed: false });
    const [taskArray, setTaskArray] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    async function fetchTodos() {
        const result = await fetch('http://localhost:4000/todos');
        const data = await result.json();
        setTaskArray(data);
    }

    const addTask = event => {
        event.preventDefault();
        //setTaskArray(taskArray.concat(task));

        fetch('http://localhost:4000/todos', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task)
        }).then(() => fetchTodos());
    }

    const deleteTask = (item) => {
        //setTaskArray(taskArray.filter((currentItem) => currentItem.id !== item.id));

        fetch(`http://localhost:4000/todos/${item.id}`, {
            method: "DELETE",
        }).then(() => fetchTodos());
    }

    const selectTask = (item) => {
        //item.completed = !item.completed;
        fetch(`http://localhost:4000/todos/${item.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "completed": !item.completed })
        }).then(() => fetchTodos());


        if (item.completed === false) {
            document.getElementById(item.id).style.color = '#343a40';
            document.getElementById(item.id).style.textDecoration = 'none'
        } else {
            document.getElementById(item.id).style.color = 'lightseagreen'
            document.getElementById(item.id).style.textDecoration = 'line-through'
        }


    }

    return (
        <div className="container">
            <div className="form-group">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div id='todolist' className="col-sm-6 border border-secondary p-4">

                        <span>
                            <input
                                type="text"
                                id="input"
                                className="col-sm-6 my-2"
                                placeholder="Add a task..."
                                onChange={event => setTask({ id: uuidv4(), title: event.target.value, completed: false })}
                            />
                        </span>

                        <span>
                            <input type="button"
                                value="E"
                                id='btn-add'
                                className="btn btn-outline-dark float-right p-1"
                                onClick={addTask}
                            />
                        </span>

                        <div>
                            <ul className=" col-sm-12 list-group list-group-flush my-4 p-1">
                                {taskArray.map((item, i) =>
                                    <li
                                        className='list-group-item p-2'
                                        key={i}
                                        id={item.id}
                                    >
                                        <Select onClick={() => selectTask(item)} />
                                        {item.title}
                                        <Delete onClick={() => deleteTask(item)} />
                                    </li>
                                )}
                            </ul>
                        </div>

                        <div className="col-sm-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;
