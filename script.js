let questions = [
    {
        question: 'Which HTML tag is used to define an inline style?',
        choices: ['script', 'css', 'style', 'span'],
        answer: 2,
    },
    {
        question: 'Which property is used to change the text color in CSS?',
        choices: ['text-color', 'font-color', 'text-style', 'color'],
        answer: 3,
    },
    {
        question: 'Which HTML tag is used to define an inline style?',
        choices: ['script', 'css', 'style', 'span'],
        answer: 2,
    },
    {
        question: 'Which property is used to change the text color in CSS?',
        choices: ['text-color', 'font-color', 'text-style', 'color'],
        answer: 3,
    },
    {
        question: 'Which HTML tag is used to define an inline style?',
        choices: ['script', 'css', 'style', 'span'],
        answer: 2,
    },
];
let totalQues = questions.length;
let totalScore=0;
let currentQuestion;
let visited=1;
let clicked=false;

function generateQuestion() {
    if (questions.length === 1) {
        document.getElementById("next-Question").innerHTML="END QUIZ";
    }

    let ques = document.getElementById("question");
    let currentQuestionIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[currentQuestionIndex];
    document.getElementById("quesNumber").innerHTML="Questions: "+visited+"/"+totalQues;
    visited++;
    updateProgressBar();
    ques.innerHTML = currentQuestion.question;

    document.getElementById("0").querySelector('p').innerHTML = currentQuestion.choices[0];
    document.getElementById("1").querySelector('p').innerHTML = currentQuestion.choices[1];
    document.getElementById("2").querySelector('p').innerHTML = currentQuestion.choices[2];
    document.getElementById("3").querySelector('p').innerHTML = currentQuestion.choices[3];
    
    document.getElementById("0").onclick = () => updateColors(0);
    document.getElementById("1").onclick = () => updateColors(1);
    document.getElementById("2").onclick = () => updateColors(2);
    document.getElementById("3").onclick = () => updateColors(3);

    questions.splice(currentQuestionIndex, 1);
}

function updateColors(ansIdx) {
    if(!clicked){
        if (currentQuestion.answer === ansIdx) {
            document.getElementById(ansIdx.toString()).style.backgroundColor = "green";
            totalScore+=10;
            localStorage.setItem('score',totalScore);
        } else {
            document.getElementById(ansIdx.toString()).style.backgroundColor = "red";
            document.getElementById(currentQuestion.answer.toString()).style.backgroundColor = "green";
        }
        
        document.getElementById("total").innerHTML=totalScore;
        clicked=true;
    }
}

function resetColor() {
    document.getElementById("0").style.backgroundColor = "cadetblue";
    document.getElementById("1").style.backgroundColor = "cadetblue";
    document.getElementById("2").style.backgroundColor = "cadetblue";
    document.getElementById("3").style.backgroundColor = "cadetblue";
}

function ended() {
    document.getElementById("quiz-section").innerHTML = "Ended";
}

document.getElementById("next-Question").onclick = function () {
    if(questions.length==0){
        window.location.href="end.html";
        return;
    }
    clicked=false;  
    resetColor();
    generateQuestion();
};

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressPercentage = ((visited-1) / totalQues) * 100;
    progressBar.style.width = progressPercentage + "%";
}



generateQuestion();


