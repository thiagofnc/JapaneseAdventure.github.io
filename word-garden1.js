const questions = [
    {
        question: "Question 1: What is 2+2?",
        answers: [
            {text: "3", correct: false},
            {text: "4", correct: true},
            {text: "5", correct: false},
            {text: "6", correct: false},
        ]
    },
    {
        question: "Question 2: What is the capital of France?",
        answers: [
            {text: "Berlin", correct: false},
            {text: "Madrid", correct: false},
            {text: "Paris", correct: true},
            {text: "Rome", correct: false},
        ]
    },
    {
        question: "Question 3: What is the boiling point of water?",
        answers: [
            {text: "50°C", correct: false},
            {text: "100°C", correct: true},
            {text: "150°C", correct: false},
            {text: "200°C", correct: false},
        ]
    },
    {
        question: "Question 4: What is the capital of Japan?",
        answers: [
            {text: "Seoul", correct: false},
            {text: "Beijing", correct: false},
            {text: "Tokyo", correct: true},
            {text: "Bangkok", correct: false},
        ]
    },
    {
        question: "Question 5: What is the largest planet in our solar system?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Mars", correct: false},
            {text: "Jupiter", correct: true},
            {text: "Saturn", correct: false},
        ]
    },
    {
        question: "Question 6: What is the chemical symbol for water?",
        answers: [
            {text: "HO", correct: false},
            {text: "O2", correct: false},
            {text: "H2O", correct: true},
            {text: "CO2", correct: false},
        ]
    },
    {
        question: "Question 7: What is the speed of light?",
        answers: [
            {text: "300,000 km/s", correct: true},
            {text: "150,000 km/s", correct: false},
            {text: "450,000 km/s", correct: false},
            {text: "600,000 km/s", correct: false},
        ]
    },
    {
        question: "Question 8: What is the largest ocean on Earth?",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Pacific Ocean", correct: true},
            {text: "Arctic Ocean", correct: false},
        ]
    },
    {
        question: "Question 9: What is the square root of 16?",
        answers: [
            {text: "2", correct: false},
            {text: "3", correct: false},
            {text: "4", correct: true},
            {text: "5", correct: false},
        ]
    },
    {
        question: "Question 10: What is the currency of the United States?",
        answers: [
            {text: "Euro", correct: false},
            {text: "Pound", correct: false},
            {text: "Dollar", correct: true},
            {text: "Yen", correct: false},
        ]
    },
    {
        question: "Question 11: What is the smallest prime number?",
        answers: [
            {text: "0", correct: false},
            {text: "1", correct: false},
            {text: "2", correct: true},
            {text: "3", correct: false},
        ]
    },
    {
        question: "Question 12: What is the capital of Canada?",
        answers: [
            {text: "Toronto", correct: false},
            {text: "Vancouver", correct: false},
            {text: "Ottawa", correct: true},
            {text: "Montreal", correct: false},
        ]
    },
    {
        question: "Question 13: What element does 'O' represent on the periodic table?",
        answers: [
            {text: "Gold", correct: false},
            {text: "Oxygen", correct: true},
            {text: "Osmium", correct: false},
            {text: "Oganesson", correct: false},
        ]
    },
    {
        question: "Question 14: Who wrote 'Hamlet'?",
        answers: [
            {text: "Charles Dickens", correct: false},
            {text: "Jane Austen", correct: false},
            {text: "William Shakespeare", correct: true},
            {text: "Mark Twain", correct: false},
        ]
    },
    {
        question: "Question 15: What is the capital of Australia?",
        answers: [
            {text: "Sydney", correct: false},
            {text: "Melbourne", correct: false},
            {text: "Canberra", correct: true},
            {text: "Perth", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let questionsRemaining = 10; 

function startQuiz() {
    correctCount = 0;
    incorrectCount = 0;
    questionsRemaining = 10; 
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const questionIndices = Array.from({ length: questions.length }, (_, i) => i);
    questionIndices.splice(currentQuestionIndex, 1); 
    const randomIndex = questionIndices[Math.floor(Math.random() * questionIndices.length)];
    currentQuestionIndex = randomIndex;

    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        correctCount++;
    } else {
        selectedBtn.classList.add("incorrect");
        incorrectCount++;
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Correct: ${correctCount}<br>Incorrect: ${incorrectCount}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    questionsRemaining--;
    if (questionsRemaining > 0) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (questionsRemaining > 0) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
