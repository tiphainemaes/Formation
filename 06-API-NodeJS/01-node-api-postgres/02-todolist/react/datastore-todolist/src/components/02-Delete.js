import React from 'react';

function Delete(props) {


  return (
    <button
      type="button"
      id="btn-delete"
      className="btn btn-light float-right"
      onClick={props.onClick}
    >
      X
    </button>
  );
}

export default Delete;