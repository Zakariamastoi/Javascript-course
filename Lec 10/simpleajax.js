console.log("Code Starting");
$(function() {
    console.log("Doing Binding")
    $("#load").click(sendAjax);
});

function sendAjax(){
    console.log("sending ajax Request");
    //send request here
    $.get("student.txt",handleResponse );
    console.log("Request sent");
}

function handleResponse(response){
    console.log("response received");
    //console.log("response");
    $("#result").empty();
    $("#result").append(response);
}

console.log("Code Finished");