import React from 'react';

function CompletedTask(props) {


    return (
        <button
            id="btn-completed"
            className="btn btn-sm"
            onClick={props.onClick}
        >
            completed
        </button>
    );
}

export default CompletedTask;