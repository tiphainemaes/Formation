import React from 'react';

function Delete(props) {


  return (
    <button
      type="button"
      id="btn-delete"
      class="btn btn-light float-right"
      onClick={props.onClick}
    >
      U
    </button>
  );
}

export default Delete;