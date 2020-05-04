import React, { useState, useEffect } from 'react';
import Post from './02-posts';
import Comment from './03-comments';



function Blog() {

    const [userArray, setUserArray] = useState([]);
    const [currentUser, setCurrentUser] = useState({ id: 0, name: '', username: '', image: '' });
    const [postArray, setPostArray] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]);
    const [commentArray, setCommentArray] = useState([]);
    const [currentComments, setCurrentComments] = useState([]);


    useEffect(() => {
        fetchUsers();
    }, []);
    async function fetchUsers() {
        const result = await fetch('http://localhost:4000/users');
        const data = await result.json();
        setUserArray(data);
    }

    useEffect(() => {
        fetchPosts();
    }, []);
    async function fetchPosts() {
        const result = await fetch('http://localhost:4000/posts');
        const data = await result.json();
        setPostArray(data);
    }

    useEffect(() => {
        fetchComments();
    }, []);
    async function fetchComments() {
        const result = await fetch('http://localhost:4000/comments');
        const data = await result.json();
        setCommentArray(data);
    }

    const getPosts = (user) => {
        let tabPost = [];
        setCurrentUser({ id: user.id, name: user.name, username: user.username, image: user.image });
        postArray.forEach(post => {
            if (post.userId === user.id) {
                tabPost.push(post);
            }
        });
        setCurrentPosts(tabPost);
    }

    const getComments = (post) => {
        let tabComment = [];
        commentArray.forEach(comment => {
            if (comment.postId === post.id) {
                tabComment.push(comment);
            }
        });
        setCurrentComments(tabComment);
    }

    
    return (

        <div>
            <div className="row" id="btn-users">
                <div className="col text-center">

                    <div id="header-list-users"></div>
                    <span className="text-center" id="list-users">
                        {userArray.map((user, i) =>
                            <button key={i} id={user.id} onClick={() => getPosts(user)} className="nav-item">
                                {user.name}
                            </button>
                        )}
                    </span>

                </div>
            </div>

            <div className="row">
                <div className="col text-center">
                    <h3 id='username-post'>{currentUser.username}</h3>
                    <p id='name-post'>{currentUser.name}</p>
                    <img src={currentUser.image}></img>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {currentPosts.map((post, i) =>
                        <div className="col col-sm-4">
                            
                                <Post
                                    key={i}
                                    id={post.id}
                                    title={post.title}
                                    body={post.body}
                                />

                                <p id='comment' onClick={() => getComments(post)}>Comments</p>
                                {currentComments.map((comment, i) =>
                                    <Comment
                                        key={i}
                                        id={comment.id}
                                        name={comment.name}
                                        email={comment.email}
                                        body={comment.body}
                                        postId={post.id}
                                        commentPostId={comment.postId}
                                    />)}
                           
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}

export default Blog;