import React, { useState } from 'react';
import Delete from './01-1-Delete';




function Todo() {

  const [task, setTask] = useState('');
  const [taskArray, setTaskArray] = useState([]);

  const addTask = event => {
    event.preventDefault();

    setTaskArray(taskArray.concat(task));
  }

  const deleteTask = event => {
    event.preventDefault();

    console.log('hello');

  }

  return (
    <div className="container">
      <div class="form-group">
        <div class="row">
          <div class="col-sm-3"></div>
          <div id='todolist' class="col-sm-6 border p-4">

            <span>
              <input
                type="text"
                class="col-sm-6 my-2"
                placeholder="Add a task..."
                onChange={event => setTask(event.target.value)}
              />
            </span>

            <span>
              <input type="button"
                value="+"
                id='btn-add'
                class="btn btn-outline-dark float-right p-1"
                onClick={addTask}
              />
            </span>

            <div>
              <ul class=" col-sm-12 list-group list-group-flush my-4 p-1">
                {taskArray.map((item, i) =>
                  <li
                    class='list-group-item p-2'
                    key={i}> {item}
                    <Delete onClick={deleteTask} />
                  </li>
                )}
              </ul>
            </div>

            <div class="col-sm-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;

