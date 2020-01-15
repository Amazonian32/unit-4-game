
var wins = 0
var losses = 0


$(document).ready(function playGame() {
    $("#restart").remove();
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
    console.log(randomNumber, diamond, emerald, ruby, topaz);

    function restart() {
        let restart = $("<button>").attr("id", "restart").text("Play Again?");
        $("body").append(restart);
        $(restart).on("click", function () {
            return playGame();
        })
    };


    $(".button").on("click", function(event) {
        console.log("clicked: " + $(this).attr("id") + " " + $(this).attr("value"));
        // event.preventDefault();
        let buttonVal = $(this).attr("value")
        buttonVal = parseInt(buttonVal);
        console.log(buttonVal);
        score += buttonVal;
        console.log(score);
        $("#score").text(score);

        if (score == randomNumber) {
            console.log("Winner")
            wins++
            return playGame();
        } else if (score > randomNumber) {
            console.log("Loser")
            losses++;
            return restart();
        }

    })
    
})
