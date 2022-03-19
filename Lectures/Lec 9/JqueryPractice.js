$(function(){
    // Jq will excute this function aftar page load 
    // so do your bindings here
    $("#addButton").click(handleBtnClick);
});

function handleBtnClick(){
    alert("btn clicked");
}
