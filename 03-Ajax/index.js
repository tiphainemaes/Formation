$('button').click(function() {
    $.get("https://jsonplaceholder.typicode.com/users", function(
        users,
        status
    ) {
        console.log(users)
        const ul = $("ul");

        users.forEach(user => {
            const li = $('<li/>');
            li.append(user.name);
            ul.append(li);
        });


        // for (let i = 0; i < users.length; i++) {
        //     const li = $('<li/>');
        //     li.append(users[i].name);
        //     ul.append(li);
        // }
    });
});