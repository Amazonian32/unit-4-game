$(document).ready(function () {
    var randomNumber = Math.floor((Math.random() * 120) + 19);
    $("#random-number").text(randomNumber);

    var diamond = Math.floor((Math.random() * 12) + 1);
    var emerald = Math.floor((Math.random() * 12) + 1);
    var ruby = Math.floor((Math.random() * 12) + 1);
    var topaz = Math.floor((Math.random() * 12) + 1);
    $("#diamond").val(diamond);
    $("#emerald").val(emerald);
    $("#ruby").val(ruby);
    $("#topaz").val(topaz);
    console.log(randomNumber, diamond, emerald, ruby, topaz);
    $("button").on("click", function () {
        console.log("clicked: " + $(this).attr("id") + " " + $(this).attr("value"));
    })


})