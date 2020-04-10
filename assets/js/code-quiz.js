var body = document.querySelector("body")
var countdownEL = document.getElementById("countdown");
var instructionsEl = document.getElementById("instructions-wrapper")

//  Instruction page HTML
var instDivEl = document.createElement("div");
var instH1El = document.createElement("h1");
var instPEl = document.createElement("p");
var startButtonEl = document.createElement("button");

instH1El.textContent = "Code Quiz Challenge";
instPEl.textContent = "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score time by 10 seconds.";
startButtonEl.textContent = "Start Quiz";

instructionsEl.appendChild(instDivEl);
instDivEl.appendChild(instH1El);
instDivEl.appendChild(instPEl);
instDivEl.appendChild(startButtonEl);


var quizTimer = function () {
    var timeLeft = 60

    var timerInterval = setInterval( function() {
        countdownEL.textContent = timeLeft
        timeLeft--;
    if (timeLeft === 0) {
        alert("You have run out of time!");
        clearInterval(timerInterval);
    }

    }, 1000);
};

var startQuiz = function() {
    console.log("start button was clicked")
}

var addInstructions = function() {

}


var removeInstructions = function() {
    instructionsEl.removeChild(instDivEl)
};

startButtonEl.addEventListener("click", function() {
startQuiz();
quizTimer();
removeInstructions();
});
