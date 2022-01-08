window.onload = function(){
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAdd;
};

function handleAdd(){
    //var newTodo = document.getElementById("newToDo");
    var newTodo = document.getElementById("newtoDo").value;
    //console.log(newTodo.value);
    var todos = document.getElementById("todos");
    var newTodoText = document.createTextNode(newTodo);
    var newLi = document.createElement("li");
    newLi.appendChild(newTodoText);
    todos.appendChild(newLi);
}

function handleDelete(e){
    var  tag = e.target;
    var li = tag.parentNode;
    //tag.parentNode.removeChild(tag)
    li.parentNode.removeChild(li);
}