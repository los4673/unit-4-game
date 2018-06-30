$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var currentScore = 0;
    var target = Math.floor(Math.random() * (19 - 121) + 121);
    var button1Score = Math.floor(Math.random() * (1 - 13) + 13);
    var button2Score = Math.floor(Math.random() * (1 - 13) + 13);
    var button3Score = Math.floor(Math.random() * (1 - 13) + 13);
    var button4Score = Math.floor(Math.random() * (1 - 13) + 13);

    function checker(currentScore) {

        if (currentScore < target) {
            $("#luckyNum").html("Target: " + target);
            $("#verdict").text("Keep Trying!");
            $("#currentScore").html("Current Score: " + currentScore)

        } else if (currentScore === target) {
            wins++;
            $("#verdict").text("Winner! Winner! Play Again?");
            $("#currentScore").html("Final Score: " + currentScore)
            reset();

        } else if (currentScore > target) {
            losses++;
            $("#verdict").html("Better luck next time! Try again!");
            $("#currentScore").html("Final Score: " + currentScore)
            reset();

        }
    }

    function reset() {
        currentScore = 0;
        target = Math.floor(Math.random() * (19 - 121) + 121);
        button1Score = Math.floor(Math.random() * (1 - 13) + 13);
        button2Score = Math.floor(Math.random() * (1 - 13) + 13);
        button3Score = Math.floor(Math.random() * (1 - 13) + 13);
        button4Score = Math.floor(Math.random() * (1 - 13) + 13);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);

    }

    $("#button1").on("click", function () {
        currentScore += button1Score;
        checker(currentScore);

    });
    $("#button2").on("click", function () {
        currentScore += button2Score;
        checker(currentScore);

    });
    $("#button3").on("click", function () {
        currentScore += button3Score;
        checker(currentScore);

    });
    $("#button4").on("click", function () {
        currentScore += button4Score;
        checker(currentScore);

    });
});
