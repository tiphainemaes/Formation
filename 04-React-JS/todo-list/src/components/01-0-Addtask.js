import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Delete from './01-1-Delete';
import Select from './01-2-Select';
//import DeleteCompleted from './01-3-DeleteCompleted';



function Todo() {

  const [task, setTask] = useState({ id: 0, title: '', completed: false });
  const [taskArray, setTaskArray] = useState([]);

  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState([]);


  const addTask = event => {
    event.preventDefault();
    setTaskArray(taskArray.concat(task));
    setCount(count + 1);
  }


  const deleteTask = (item) => {
    if (count < 1) {
      setCount(0)
    } else {
      setCount(count - 1);
    }

    setTaskArray(taskArray.filter((currentItem) => currentItem.id !== item.id));
  }


  const selectTask = (item) => {
    item.completed = !item.completed;

    if (item.completed === false) {
      setCount(count + 1);
      document.getElementById(item.id).style.color = '#343a40';
      document.getElementById(item.id).style.textDecoration = 'none'

      //setSelected(selected.filter((_, i) => i !== id));
    } else {
      setCount(count - 1);
      document.getElementById(item.id).style.color = 'lightseagreen'
      document.getElementById(item.id).style.textDecoration = 'line-through'

      //setSelected(selected.concat(id));
    }
  }


  function deleteCompleted() {
    let tab = [];
    tab = taskArray;
    selected.forEach(index => {
      console.log(index);
      tab.splice(index, 1);
    });
    console.log(tab);
    setTaskArray(tab);
    //  const tab = [];
    //  setSelected(tab);
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
                    id={item.id}>
                    <Select onClick={() => selectTask(item)} />
                    {item.title}
                    <Delete onClick={() => deleteTask(item)} />
                  </li>
                )}
                <span>
                  {/* <DeleteCompleted
                    onClick={() => deleteCompleted(item)} /> */}
                </span>
                <p id="count">{count} task(s) left</p>
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
