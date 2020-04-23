import React, { useState } from 'react';
import Delete from './01-1-Delete';
import Select from './01-2-Select';
import DeleteAll from './01-3-DeleteAll';



function Todo() {

  const [task, setTask] = useState('');
  const [taskArray, setTaskArray] = useState([]);
  const addTask = event => {
    event.preventDefault();
    setTaskArray(taskArray.concat(task));
  }

  function deleteTask(index) {
    setTaskArray(taskArray.filter((_, i) => i !== index));
  }

  function selectTask(id) {
    if (document.getElementById(id).style.color === 'lightseagreen') {
      document.getElementById(id).style.color = '#343a40';
      document.getElementById(id).style.textDecoration = 'none'
    } else {
      document.getElementById(id).style.color = 'lightseagreen'
      document.getElementById(id).style.textDecoration = 'line-through'
    }
  }

  function deleteAll() {
    const tab = [];
    setTaskArray(tab);
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
                onChange={event => setTask(event.target.value)}
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
                {taskArray.map((item, index) =>
                  <li
                    id={index}
                    className='list-group-item p-2'
                    key={index}
                  >
                    <Select onClick={() => selectTask(index)} />
                    {item}
                    <Delete onClick={() => deleteTask(index)} />
                  </li>
                )}

                <DeleteAll onClick={() => deleteAll()} />

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
