// window.setTimeout(
// function() {


var todos = []

var input = prompt("what would you like to do?")

while (input !== "quit") {
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    input = prompt("what would you like to do?")
}
console.log("app stopped")
// }, 500
function listTodos() {
    console.log("***");
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
    })
    console.log("***");
}
function addTodo() {
    var newTodo = prompt("enter new todo:");
    todos.push(newTodo);
    console.log("added todo");
}
function deleteTodo() {
    // get index of todo
    var index = prompt("enter idxof todo to delete")
    // delete that todo
    todos.splice(index, 1);
    console.log("deleted todo " + index);
}

// )