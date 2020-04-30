import React from 'react';


function Post(props) {
    return (

        <div id='post'>
            <h4 key={props.key} id={props.id}>
                {props.title}
            </h4>
            <p key={props.key} id={props.id}>
                {props.body}
            </p>
        </div>

    );
}

export default Post;