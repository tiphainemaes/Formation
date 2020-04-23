import React from 'react';

function DeleteAll(props) {


  return (
    <button
      type="button"
      id="btn-delete-all"      
      className="btn btn-outline-danger p-1"
      onClick={props.onClick}
    >
      X
    </button>
  );
}

export default DeleteAll;