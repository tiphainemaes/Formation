$('#button-users').click(function() {
    $.get("http://localhost:4000/users", function(
        users,
        status
    ) {
        console.log(users)

        const divListUser = $('#list-users');

        users.forEach(user => {
            const btn = $('<button/>', {
                text: user.name,
                id: user.id,
                click: function() {
                    $.get("http://localhost:4000/users",
                        function(
                            users,
                            status) {
                            const divUserPosts = $('#user-posts');
                            const userPost = $('<h1/>');
                            userPost.append(user.name);
                            divUserPosts.append(userPost);
                        })

                    $.get("http://localhost:4000/posts",
                        function(
                            posts,
                            status
                        ) {
                            const divListPosts = $('#list-posts');

                            posts.forEach(post => {
                                if (post.userId == user.id) {
                                    const h3 = $('<h3/>');
                                    const p = $('<p/>');
                                    const divComment = $('<div/>')
                                    const btnComments = $('<button/>', {
                                        text: 'Comments',
                                        id: post.id,
                                        click: function() {
                                            $.get("http://localhost:4000/comments",
                                                function(
                                                    comments,
                                                    status
                                                ) {
                                                    comments.forEach(comment => {

                                                        if (comment.postId == post.id) {
                                                            const nameComment = $('<h6/>');
                                                            const emailComment = $('<p/>');
                                                            const bodyComment = $('<p/>');

                                                            nameComment.append(comment.name);
                                                            emailComment.append('by ' + comment.email);
                                                            bodyComment.append(comment.body);

                                                            divComment.append(nameComment);
                                                            divComment.append(emailComment)
                                                            divComment.append(bodyComment);
                                                        }
                                                    });
                                                });
                                        }
                                    });

                                    h3.append(post.title);
                                    p.append(post.body);

                                    divListPosts.append(h3);
                                    divListPosts.append(p);
                                    divListPosts.append(btnComments);
                                    divListPosts.append(divComment)

                                }
                            });
                        });
                }
            });
            divListUser.append(btn);
        });
    });
});