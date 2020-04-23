import React from 'react';

function Select(props) {


  return (
    <button
      type="button"
      id="btn-select"
      className="btn btn-outline-warning"
      onClick={props.onClick}
    >
      V
    </button>
  );
}

export default Select;