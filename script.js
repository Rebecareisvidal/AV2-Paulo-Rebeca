
const questions = [
    { question: "A IA pode aprender com os dados?", answer: 0 },  
    { question: "Os assistentes virtuais usam IA?", answer: 0 },  
    { question: "A IA pode pensar como um humano?", answer: 1 }  
];

let currentQuestion = 0;  
let score = 0;  


function loadQuestion() {
    
    document.getElementById("question").textContent = questions[currentQuestion].question;
}


function nextQuestion(userAnswer) {
    const correctAnswer = questions[currentQuestion].answer;  

    if (userAnswer === correctAnswer) {
        score++;  
        alert("Correto!"); 
    } else {
        alert("Errado! Tente novamente.");  
    }

   
    currentQuestion++;
    
    
    if (currentQuestion >= questions.length) {
        alert("Você terminou o quiz! Sua pontuação é: " + score + "/" + questions.length);
        currentQuestion = 0;  
        score = 0;  
    }

    loadQuestion(); 
}

loadQuestion();  