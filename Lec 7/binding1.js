console.log("Starting");
function handleAddNewTodo(){
    console.log("Handling Add New Todo Button");
}

function doBindings(){
    console.log("Bindings");
    console.log("Handle Bindings");
    var btn = document.getElementById("btnAdd");
    btn.onclick = handleAddNewTodo;
}
window.onload = doBindings;
console.log("Finished");
