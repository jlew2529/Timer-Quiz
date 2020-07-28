// List of questions that will be on the quiz
var questions = [{
    "question": "Which player has the most NBA championships?",
    "option1": "Bill Russell",
    "option2": "Michael Jordan",
    "option3": "Earvin Magic Johnson",
    "option4": "Kareem Abdul-Jabbar",
    "answer": "1"
}, {
    "question": "Which NBA franchise has the most championships?",
    "option1": "Chicago Bulls",
    "option2": "Los Angeles Lakers",
    "option3": "Boston Celtics",
    "option4": "Golden State Warriors",
    "answer": "3"
}, {
    "question": "Who has won the most NBA Dunk Contests?",
    "option1": "Jason Richardson",
    "option2": "Dominique Wilkins",
    "option3": "Michael Jordan",
    "option4": "Nate Robinson",
    "answer": "4"
}, {
    "question": "Who is the all time scoring leader in NBA history?",
    "option1": "Lebron James",
    "option2": "Kareem Abdul-Jabbar",
    "option3": "Kobe Bryant",
    "option4": "Karl Malone",
    "answer": "2"
}, {
    "question": "Who has scored the most 3pt baskets in NBA history?",
    "option1": "Kyle Korver",
    "option2": "Steph Curry",
    "option3": "Ray Allen",
    "option4": "Reggie Miller",
    "answer": "3"
}, {
    "question": "Which player has the most rebounds in NBA history?",
    "option1": "Bill Russell",
    "option2": "Wilt Chamberlain",
    "option3": "Elvin Hayes",
    "option4": "Kareem Abdul-Jabbar",
    "answer": "2"
}, {
    "question": "Who has the most steals in NBA history?",
    "option1": "John Stockton",
    "option2": "Jason Kidd",
    "option3": "Michael Jordan",
    "option4": "Gary Payton",
    "answer": "1"
}, {
    "question": "Which player has the most blocks in NBA history?",
    "option1": "Dikembe Mutombo",
    "option2": "Kareem Abdul-Jabbar",
    "option3": "Mark Eaton",
    "option4": "Hakeem Olajuwon",
    "answer": "4"
}, {
    "question": "Who is the greatest dunker of all time?",
    "option1": "Michael Jordan",
    "option2": "LeBron James",
    "option3": "Vince Carter",
    "option4": "Dominique Wilkins",
    "answer": "3"
}, {
    "question": "Who is the greatest player of all time?",
    "option1": "LeBron James",
    "option2": "Michael Jordan",
    "option3": "Kobe Bryant",
    "option4": "Kareem Abdul-Jabbar",
    "answer": "2"
}]

// Set Assignments
var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");
var startButton = document.getElementById("startButton");


// Once the start button is clicked then the timer starts the countdown
function startQuiz() {
    console.log("Started");
    var countDown = 60;
    var timerId = setInterval(function() {
    console.log(--countDown);
    if (countDown === 0) {
        clearInterval(timerId);
        if (currentQuestion === totalQuestions){
            console.log("Complete"); 
        } 
        else {
            console.log("Incomplete");
        }
    }
    else {
        if (currentQuestion === totalQuestions){
            clearInterval(timerId);
            console.log("Complete"); 
        } 
    }
    document.querySelector(".timeCountDown").textContent = countDown;
}, 1000)
}

// This function loads the questions and answers into the container while loading each answer into the labels
function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + ". " + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

// When an option is selected and the next button is clicked then another question will come up
function loadNextQuestion () {
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if (!selectedOption){
        alert("Please select your answer.");
        return;
    }
    var answer = selectedOption.value;
    if (questions[currentQuestion].answer === answer) {
        score += 10;
        alert("Correct!");
    }
    else {
        if (questions[currentQuestion].answer != answer) {
            alert("Wrong Answer.");
        }
    }
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion === totalQuestions - 1){
        nextButton.textContent = "Finish";
    }
    if (currentQuestion === totalQuestions){
        container.style.display = "none";
        resultCont.style.display = "inline";
        resultCont.textContent = "Your Score: " + score;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);