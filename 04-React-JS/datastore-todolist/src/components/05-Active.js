import React from 'react';

function ActiveTask(props) {


    return (
        <button
            id="btn-active"
            className="btn btn-sm"
            onClick={props.onClick}
        >
            active
        </button>
    );
}

export default ActiveTask;