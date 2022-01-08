function zarb(){
    const first = document.getElementById("firstNumber").value;
    const second = document.getElementById("secondNumber").value;
    const results = document.getElementById("output");
    results.innerHTML = first * second;
}


function taqseem(){
    const first = document.getElementById("firstNumber").value;
    const second = document.getElementById("secondNumber").value;
    const results = document.getElementById("output");
    results.innerHTML = first / second;
}


function jama(){
    const first = parseInt(document.getElementById("firstNumber").value);
    const second = parseInt(document.getElementById("secondNumber").value);
    
    const results = document.getElementById("output");
    results.innerHTML = first + second;
    console.log("kam kr rha h");
}

function minus(){
    const first = document.getElementById("firstNumber").value;
    const second = document.getElementById("secondNumber").value;
    const results = document.getElementById("output");
    results.innerHTML = first - second;
}

