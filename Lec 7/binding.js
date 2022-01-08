function Todo(){
    console.log("Handling Todo Button");
}

function doBindings(){
    console.log("Handle Bindings");
    var btn = document.getElementById("btnAdd");
    btn.onclick = Todo;
}
