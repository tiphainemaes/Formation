import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Delete from './02-Delete';
import Select from './03-Select';
import DeleteCompleted from './04-DeleteCompleted';
import ActiveTask from './05-Active';
import CompletedTask from './06-Completed';
import SeeAll from './07-SeeAll';


function Todo() {

    const [task, setTask] = useState({ id: 0, title: '', completed: false });
    const [taskArray, setTaskArray] = useState([]);
    //const [count, setCount] = useState(0);

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
    }


    const deleteCompleted = () => {
        taskArray.forEach(item => {
            if (item.completed === true) {
                deleteTask(item);
            }
        });
    }

    const seeAllTask = () => {
        // taskArray.forEach(item => {
        //     document.getElementById(item.id).hidden = false;
        // });
        fetchTodos();
    }

    const activeTask = async () => {
        // taskArray.forEach(item => {
        //     if (item.completed === true) {
        //         document.getElementById(item.id).hidden = true;
        //     } else if (item.completed === false) {
        //         document.getElementById(item.id).hidden = false;
        //     }
        // });

        const result = await fetch("http://localhost:4000/todos/?completed=false");
        const data = await result.json();

        setTaskArray(data);
        taskArray.forEach(item => {
            //setCount(count +1)
        });

    }

    const completedTask = async () => {
        // taskArray.forEach(item => {
        //     if (item.completed === true) {
        //         document.getElementById(item.id).hidden = false;
        //     } else if (item.completed === false) {
        //         document.getElementById(item.id).hidden = true;
        //     }
        // });

        const result = await fetch("http://localhost:4000/todos/?completed=true");
        const data = await result.json();
        setTaskArray(data);
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
                                        key={i}
                                        id={item.id}
                                        className={item.completed ? 'barred' : ''}
                                    >
                                        <Select onClick={() => selectTask(item)} />
                                        {item.title}
                                        <Delete onClick={() => deleteTask(item)} />
                                    </li>
                                )}
                                <div>
                                    <SeeAll onClick={() => seeAllTask()} />
                                    <ActiveTask onClick={() => activeTask()} />
                                    <CompletedTask onClick={() => completedTask()} />
                                    <DeleteCompleted onClick={() => deleteCompleted()} />
                                </div>
                                <div className="text-secondary font-weight-light text-center mt-4">
                                    {/* {count} task(s) left */}
                                </div>
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
