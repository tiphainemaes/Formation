import React from 'react';

import Listtask from './Listtask';

function addTask() {
  alert('Add new task');
}

function Delete() {
  return (
    <button type="button" class="btn btn-secondary btn-sm">Delete</button>
  );
}

export default Delete;
