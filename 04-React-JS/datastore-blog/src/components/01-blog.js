import React, { useState, useEffect } from 'react';


function Blog() {

    const [user, setUser] = useState({ id: 0, name: '', username: '', email: '', adress: { street: '', suite: '', city: '', zipcode: 0, geo: { lat: 0, lng: 0 } }, phone: 0, website: '', company: { name: '', catchPhrase: '', bs: '' } });
    const [userArray, setUserArray] = useState([]);
    const [currentUser, setCurrentUser] = useState({ id: 0, name: '', username: '' });
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



    const getPosts = (item) => {
        let tabPost = [];
        setCurrentUser({ id: item.id, name: item.name, username: item.username });
        postArray.forEach(post => {
            if (post.userId === item.id) {
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
        setCurrentComments(tabComment)
    }


    return (
        <div className="container">
            <div className="row">
               
                <div className="col-sm-3 ">
                    <p id="title-users">Users</p>

                    <ul className="text-center" id="list-users">
                        {userArray.map((item, i) =>
                            <li key={i} id={item.id} onClick={() => getPosts(item)}>
                                {item.name}
                            </li>
                        )}
                    </ul>
                </div>

                <div className="col-sm-1"></div>

                <div className="col-sm-7 ">
                    <div id="user-posts">

                        <h3 id='username-post'>{currentUser.username}</h3>
                        <p id='name-post'>{currentUser.name}</p>

                        {currentPosts.map((post, i) =>
                            <div id='post'>

                                <h4 key={i} id={post.id}>
                                    {post.title}
                                </h4>
                                <p key={i} id={post.id}>
                                    {post.body}
                                </p>

                                <div>
                                    <p id='comment' onClick={() => getComments(post)}>Comments</p>

                                    {currentComments.map((comment, i) =>
                                        <div>
                                            <h6 key={i} id={comment.id}>
                                                {comment.name}
                                            </h6>
                                            <p key={i} id={comment.id}>
                                                {comment.email}
                                            </p>
                                            <p key={i} id={comment.id}>
                                                {comment.body}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <div id="list-posts" className="list-unstyled text-justify my-5"></div>
                </div>
            </div>
        </div>
    );
}

export default Blog;