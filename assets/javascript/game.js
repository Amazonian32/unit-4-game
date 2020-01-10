$(document).ready(function(){
    var randomNumber = Math.floor((Math.random() *120) + 19);
    $("#random-number").text(randomNumber);
    console.log(randomNumber);
    $("button").on("click", function() {
        console.log("clicked: " + $(this).attr("id"));
    })
})