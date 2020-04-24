let buttonColours = ["red","blue","green","yellow"]

let gamePattern = []


function nextSequence() {
    //get a random number
    let randomNumber = Math.floor(Math.random() * 4)

    //put a random button color on variable
    let randomChosenColour = buttonColours[randomNumber]

    //push the random color to array
    gamePattern.push(randomChosenColour);

    //flash chosen clor
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)

    //play mp3
    var audio = new Audio("sounds/blue.mp3");
    audio.play();
}

