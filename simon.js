var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

$('.btn').click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    (new Audio("sounds/" + userChosenColor + ".mp3")).play();
   
    $("#" + userChosenColor).addClass("pressed"+userChosenColor);
    setTimeout(function () {
        $("#" + userChosenColor).removeClass("pressed"+userChosenColor);
    },200);

    if (gamePattern[userClickedPattern.length - 1] === userClickedPattern[userClickedPattern.length - 1]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);

        }
    }
    else {
        (new Audio("sounds/wrong.mp3")).play();
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        level = 0;
        gamePattern = [];
        started = false;
    }
})

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNum = Math.random();
    randomNum = Math.floor(randomNum * 4);

    var randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor);

    (new Audio("sounds/" + randomChosenColor + ".mp3")).play();

    $("#" + randomChosenColor).addClass("pressed"+randomChosenColor);
    setTimeout(function () {
        $("#" + randomChosenColor).removeClass("pressed"+randomChosenColor);
    },200);
}




