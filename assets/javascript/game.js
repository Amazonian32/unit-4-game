
var wins = 0
var losses = 0


$(document).ready(function playGame() {
    $(".restart").remove();
    var score = 0
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#score").text(score);
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
    console.log(randomNumber, diamond, emerald, ruby, topaz, score);



    function restart() {
        let restart = $("<button>").addClass("restart").text("Play Again?");
        $("#restart").prepend(restart);
        $(restart).on("click", function () {
            return playGame();
        })
    };


    $(".button").on("click", function () {
        console.log("clicked: " + $(this).attr("id") + " " + $(this).attr("value"));

        let buttonVal = $(this).attr("value")
        buttonVal = parseInt(buttonVal);
        console.log(buttonVal);
        score += buttonVal;
        console.log(score);
        $("#score").text(score);

        function checkScore() {
            if (score === randomNumber) {
                console.log("Winner")
                wins++
                restart();
            } else if (score >= randomNumber) {
                console.log("Loser")
                losses++;
                restart();
            } 
        }

        checkScore();
    })




})
