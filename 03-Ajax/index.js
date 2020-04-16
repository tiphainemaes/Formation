$('#button-users').click(function() {
    $.get("http://localhost:4000/users", function(
        users,
        status
    ) {
        console.log(users)
            // const ul = $('#list-users');

        // users.forEach(user => {
        //     const li = $('<li/>');
        //     li.append(user.name);
        //     ul.append(li);


        const div = $('#list-users');

        users.forEach(user => {
            const btn = $('<button/>', {
                text: user.name, //set text 1 to 10
                id: user.id,
                click: function() {

                    $.get("http://localhost:4000/posts",
                        function(
                            posts,
                            status
                        ) {
                            const ul = $('#list-posts');
                            posts.forEach(post => {
                                if (post.userId == user.id) {
                                    const li = $('<li/>');
                                    li.append(post.body);
                                    ul.append(li);
                                }
                            });

                        });


                }
            });

            div.append(btn);

        });



        // });
    });
});

function loadPost(id) {
    console.log(id);
}


$('#button-posts').click(function() {
    $.get("http://localhost:4000/posts", function(
        posts,
        status
    ) {
        console.log(posts)
        const ul = $('#list-posts');

        posts.forEach(post => {
            const li = $('<li/>');
            li.append(post.body);
            li.append(post.title);
            ul.append(li);
        });
    });
});