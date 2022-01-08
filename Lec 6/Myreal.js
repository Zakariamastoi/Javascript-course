function Update(){
    console.log("Updating Results");
    var input = document.getElementById("myinput");
    var output = document.getElementById("output");
    output.innerHTML = input.value;
    console.log(input.value);
}