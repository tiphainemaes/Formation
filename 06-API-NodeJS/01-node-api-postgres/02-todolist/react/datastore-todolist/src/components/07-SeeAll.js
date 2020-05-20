import React from 'react';

function SeeAll(props) {


    return (
        <button
            id="btn-all"
            className="btn font-weight-bold"
            onClick={props.onClick}
        >
            All
        </button>
    );
}

export default SeeAll;