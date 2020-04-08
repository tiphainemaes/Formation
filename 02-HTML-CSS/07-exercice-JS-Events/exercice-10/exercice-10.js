function addNewTask() {
    let tab = document.getElementById("tab-task");

    let row = tab.insertRow(0);

    var valid = row.insertCell(0)
    let task = row.insertCell(1);
    let trash = row.insertCell(2);

    task.innerHTML = document.getElementById("new-task").value;

    let buttonValid = document.createElement("button");
    let buttonTrash = document.createElement("button");


    buttonTrash.innerHTML = "U";
    buttonTrash.setAttribute('onclick', 'deleteRow(this)');
    buttonTrash.setAttribute('id', 'delete-button')
    trash.setAttribute('id', 'delete-task')
    trash.appendChild(buttonTrash);

    buttonValid.innerHTML = "+";
    buttonValid.setAttribute('id', 'valid-button');
    valid.setAttribute('id', 'valid-task');
    valid.appendChild(buttonValid);
}

function deleteAll() {
    let tab = document.getElementById("tab-task");

    while (tab.rows.length > 0) {
        tab.deleteRow(0);
    }
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tab-task").deleteRow(i);
}