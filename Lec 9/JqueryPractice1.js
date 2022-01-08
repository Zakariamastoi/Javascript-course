$(function(){
    // Jq will excute this function aftar page load 
    // so do your bindings here
    $("#addButton").click(handleBtnClick);
});

function handleBtnClick(){
    $("#todos").append("<li> New To Do will appear here</li>")
}
