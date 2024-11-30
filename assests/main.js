// main.js
// e4fgg
// Project Started: November 27, 2024
// Project Finished: 

// Getting some of the IDs from the elements in HTML file.
// Questions. 
const question = document.getElementById('question');

// Answer choices.
const choices = Array.from(document.querySelectorAll('.choice'));

// Timer.
const timerEl = document.getElementById('timer');

// Countdown. 
const countdownEl = document.getElementById('countdown');

// Defining the score and question index.
let score = 0;
let currentQuestionIndex = 0;

// Amount of time given to user. 
let seconds = 120;


// Questions for the quiz.
const quizQuestions = [
    {
        // Answer: Japan
        question: "Where was Hello Kitty invented?",
        choices: ["Spain", "Japan", "Korea", "Mexico"],
        correctAnswer: "Japan"
    }, 
    {
        // Answer: 1974
        question: "When was Hello Kitty created?",
        choices: ["1974", "1980", "1965", "1990"],
        correctAnswer: "1974"   
    },
    {
        // Answer: Mimi White
        question: "What is the name of Hello Kitty's twin sister?",
        choices: ["Kitty Jr.", "Mimi White", "Cathy White", "Lily White"],
        correctAnswer: "Mimi White"
    },
    {   
        // Answer: Dear Daniel
        question: "Who is Hello Kitty's best friend? (Hint: it is her boyfriend)",
        choices: ["My Melody", "Badtz-Maru", "Cinnamoroll", "Dear Daniel"],
        correctAnswer: "Dear Daniel"
    },
    {
        // Answer: Ikuko Shimizu
        question: "Who designed Hello Kitty?",
        choices: ["Yuko Shimizu", "Sanrio Team", "Ikuko Shimizu", "Takashi Murakami"],
        correctAnswer: "Ikuko Shimizu"
    }, 
    {
        // Answer: None, she loves all animals equally
        question: "What is Hello Kitty's favorite animal?",
        choices: ["Bunny", "Dog", "Bear", "None, she loves all animals equally"],
        correctAnswer: "None, she loves all animals equally"
    },
    {
        // Answer: A bow
        question: "What does Hello Kitty always wear on her left ear?",
        choices: ["A flower", "A bow", "A hat", "A crown"],
        correctAnswer: "A bow"
    },
    {
        // Answer: O
        question: "What is Hello Kitty's blood type?",
        choices: ["A", "B", "O", "AB"],
        correctAnswer: "O"
    },
    {
        // Answer: Apple pie
        question: "What is Hello Kitty’s favorite food?",
        choices: ["Apple pie", "Sushi", "Pancakes", "Ice cream"],
        correctAnswer: "Apple pie"
    },
    {
        // Answer: Pink
        question: "What is Hello Kitty’s favorite color?",
        choices: ["Red", "Pink", "Yellow", "Blue"],
        correctAnswer: "Pink"
    }
];

// Function that will display the elements. 
function displayQuestions() {
    // Checking if quiz is finished. 
    if (currentQuestionIndex >= quizQuestions.length) {
        endQuiz();
    }

    // Displaying the questions.
    const currentQuestion = quizQuestions[currentQuestionIndex]
    question.textContent = currentQuestion.question;

    // Iterates for each element.
    // Displaying each answer choice. 
    choices.forEach((choice, index) => {
        choice.textContent = currentQuestion.choices[index];
    });
}

// Function that checks the user's answer.
function checkAnswer(userSelected) {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    // If user gets answer correct..
    if (userSelected === currentQuestion.correctAnswer) {
        alert("Great Job! You have earned yourself a cookie 🍪.")

        // Increments user's score. 
        score++
    } else {
        // If user gets answer wrong...
        alert(`Your answer choice was wrong... ❌`)
    }

    // Moves onto next question.
    currentQuestionIndex++
    // Displays next question.
    displayQuestions();
}

// Function to handle if the quiz ends. 
function endQuiz() {
    // Message will be displayed at end of quiz.
    question.textContent = "Quiz Finished! Refresh the screen if you would like to play again...";
    choices.forEach(choice => (choice.textContent = "")); // Clear choices
    // This will pop up.
    alert(`You scored ${score} out of ${quizQuestions.length}. Great job! 🎉`);
}

// Adding an event listener for clicking. 
choices.forEach(choice => {
    // Question will be answered if answer choice is clicked. 
    choice.addEventListener("click", () => checkAnswer(choice.textContent));
});

// Setting a timer. 
function setTimer() {
    let timer = setInterval(function() {
        // Amount of seconds decreases. 
        seconds--;
        // Tells user how many seconds are left. 
        countdownEl.textContent = seconds + " seconds left (don't take tooooo long 👀)";
        
        // If amount of seconds is less than 0, the timer will stop.
        if (seconds === 0) {
            // Stops timer.
            clearInterval(timer);
            endQuiz();
        }
    }, 1000)
}
// Displays questions.
displayQuestions();

// Sets timer.
setTimer();
