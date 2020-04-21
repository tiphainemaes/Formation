import React from 'react';

import Listtask from './Listtask';

function addTask() {
  alert('Add new task');
}

function Add() {
  return (
    <div className="container">

      <div class="form-group">

        <div class="row">
          <div class="col-sm-3"></div>
          <div id='todolist' class="col-sm-6 bg-light border p-4">
            
              <span><input type="text" class="col-sm-6 my-2" id="add" placeholder="Add task..." /></span>
              <span><button type="button" class="btn btn-outline-dark float-right my-1" onClick={addTask}>+</button></span>
              <Listtask />
            
          </div>
          <div class="col-sm-3"></div>
        </div>

      </div>

    </div>
  );
}

export default Add;

// <div>
//   <input type="text" id="new-task">
//     <input type="button" value="+" id="add" class="pointer" onclick="addNewTask()">
//     </div>
