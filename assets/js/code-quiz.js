var body = document.querySelector("body")
var countdownEL = document.getElementById("countdown");
var instructionsEl = document.getElementById("instructions-wrapper")
var quizEl = document.getElementById("quiz-wrapper")

//  Instruction section HTML
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

// Quiz Section HTML
var questionEl = document.createElement("h2");
var answersEL = document.createElement("div");
var AEl = document.createElement("button");
var BEl = document.createElement("button");
var CEl = document.createElement("button");
var DEl = document.createElement("button");

questionEl.textContent = "This is a question";
AEl.textContent = "Answer A";
BEl.textContent = "Answer B";
CEl.textContent = "Answer C";
DEl.textContent = "Answer D";

quizEl.appendChild(questionEl);
quizEl.appendChild(answersEL);
answersEL.appendChild(AEl);
answersEL.appendChild(BEl);
answersEL.appendChild(CEl);
answersEL.appendChild(DEl);

questionEl.setAttribute("class", "question", "id", "btnA");
answersEL.setAttribute("class", "answers");
AEl.className = "quiz-btn";
AEl.id = "btnA";
BEl.className = "quiz-btn";
BEl.id = "btnB";
CEl.className = "quiz-btn";
CEl.id = "btnC";
DEl.className = "quiz-btn";
DEl.id = "btnD";



var quizTimer = function () {
    var timeLeft = 10

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
};

var addInstructions = function() {
    instructionsEl.appendChild(instDivEl);
    instDivEl.appendChild(instH1El);
    instDivEl.appendChild(instPEl);
    instDivEl.appendChild(startButtonEl);
};

var addQuestion = function() {
    quizEl.appendChild(questionEl);
    quizEl.appendChild(answersEL);
    answersEL.appendChild(AEl);
    answersEL.appendChild(BEl);
    answersEL.appendChild(CEl);
    answersEL.appendChild(DEl);
};

var removeInstructions = function() {
    instructionsEl.removeChild(instDivEl)
};

startButtonEl.addEventListener("click", function() {
startQuiz();
quizTimer();
removeInstructions();
});
