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

// Question Array
var quizQuestions = [
    { question: "Question 1",
      a: "Yes",
      b: "No",
      c: "Maybe",
      d: "None",
      correctAnswer: AEl,
      wrongAnswer: [BEl, CEl, DEl]
    },
    { question: "Question 2",
      a: "No",
      b: "None",
      c: "Yes",
      d: "Maybe",
      correctAnswer: CEl,
      wrongAnswer: [AEl, BEl, DEl]
    },
    { question: "Question 3",
      a: "No",
      b: "None",
      c: "Yes",
      d: "Maybe",
      correctAnswer: CEl,
      wrongAnswer: [AEl, BEl, DEl]
    },
    { question: "Question 4",
      a: "No",
      b: "None",
      c: "Yes",
      d: "Maybe",
      correctAnswer: CEl,
      wrongAnswer: [AEl, BEl, DEl]
    }
];
// console.log(quizQuestions[0].wrongAnswer[0])
// console.log(quizQuestions[0].wrongAnswer.every())
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



var timeLeft = 100


var quizTimer = function () {

    var timerInterval = setInterval( function() {
        countdownEL.textContent = timeLeft
        timeLeft--;
    if (timeLeft <= -1) {
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
var i = 0 
var correctBtn = null
console.log(i)
var addQuestion = function() {
    // i = i + 1
    console.log(i)
    questionEl.textContent = quizQuestions[i].question;
    console.log(quizQuestions[i].question)
    AEl.textContent = quizQuestions[i].a;
    BEl.textContent = quizQuestions[i].b;
    CEl.textContent = quizQuestions[i].c;
    DEl.textContent = quizQuestions[i].d;
    var correctBtn = quizQuestions[i].correctAnswer;
    console.log(correctBtn)
    var wrongBtn = quizQuestions[i].wrongAnswer;
    quizEl.appendChild(questionEl);
    quizEl.appendChild(answersEL);
    answersEL.appendChild(AEl);
    answersEL.appendChild(BEl);
    answersEL.appendChild(CEl);
    answersEL.appendChild(DEl);
    // Correct Button Clicked
    correctBtn.addEventListener("click", function() {
        console.log("correct");
        console.log(quizQuestions[i].correctAnswer)
        
        removeQuestion();
        addQuestion(i = i + 1);
        
    });
    
    // Incorret Button Clicked
    // wrongBtn[0].addEventListener("click", function() {
    //     console.log("wrong")
    //     removeQuestion();
    //     addQuestion();
        // timeLeft = timeLeft - 10;
    // })


};
var removeQuestion = function () {
    quizEl.removeChild(questionEl);
    answersEL.removeChild(AEl);
    answersEL.removeChild(BEl);
    answersEL.removeChild(CEl);
    answersEL.removeChild(DEl);
}

var removeInstructions = function() {
    instructionsEl.removeChild(instDivEl)
};

startButtonEl.addEventListener("click", function() {
startQuiz();
quizTimer();
removeInstructions();
addQuestion();
}); 