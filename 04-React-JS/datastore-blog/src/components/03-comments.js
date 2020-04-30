import React from 'react';


function Comment(props) {

    if (props.postId == props.commentPostId) {


        return (

            <div id="body-comment">
                <h6 key={props.key} id={props.id}>
                    {props.name}
                </h6>
                <p key={props.key} id={props.id}>
                    {props.email}
                </p>
                <p key={props.key} id={props.id}>
                    {props.body}
                </p>
            </div>

        );
    }
    else {
        return (
            null
        )
    }
}

export default Comment;