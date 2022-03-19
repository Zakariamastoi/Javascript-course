$(function(){
    // Jq will excute this function aftar page load 
    // so do your bindings here
    $("#addButton").click(handleBtnClick);
    // $("#todos li").click (function(e){
    //     $(this).remove();
    //$("#todos li").click (removeMe);
    $("#todos").on ("click" , "li" , removeMe);
});

function handleBtnClick(){
    //alert("btn clicked");
    //$("#todos").append("<li> New To Do will appear here</li>")
    var newTodo = $("#newTodo").val();
    if(!newTodo){
        $("newTodo").addClass("error");
        return;
    }
    $("newTodo").removeClass("error");
    $("#newTodo").val();
    $("#todos").append("<li>" + newTodo + "</li>");
   // $("#todos li").click(removeMe);
}

function removeMe() {
    $(this).fadeOut();
    //$(this).remove();
}