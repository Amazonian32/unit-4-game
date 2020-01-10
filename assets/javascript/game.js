$(document).ready(function(){
    $("button").on("click", function() {
        console.log("clicked: " + $(this).attr("id"));
    })
})