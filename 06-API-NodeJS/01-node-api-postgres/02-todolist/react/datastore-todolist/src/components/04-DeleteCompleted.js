import React from 'react';

function DeleteCompleted(props) {


  return (
    <button
      type="button"
      id="btn-delete-all"      
      className="btn btn-outline-danger p-1 float-right"
      onClick={props.onClick}
    >
      X
    </button>
  );
}

export default DeleteCompleted;