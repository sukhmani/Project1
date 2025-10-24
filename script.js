const questions = [
  { text: "1. What is 12 × 8?", correctAnswer: "96" },
  { text: "2. Solve: (15 + 5) ÷ 4", correctAnswer: "5" },
  { text: "3. What is the square root of 81?", correctAnswer: "9" },
  { text: "4. What is 7 × 6?", correctAnswer: "42" },
  { text: "5. What is 100 ÷ 25?", correctAnswer: "4" },
  { text: "6. What is 9²?", correctAnswer: "81" },
  { text: "7. What is 45 + 55?", correctAnswer: "100" },
  { text: "8. What is 144 ÷ 12?", correctAnswer: "12" },
  { text: "9. What is 11 × 11?", correctAnswer: "121" },
  { text: "10. What is 10% of 200?", correctAnswer: "20" }
];

let currentIndex = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentIndex];
  document.getElementById("questionContainer").innerHTML = `
    <label>${q.text}</label><br />
    <input type="text" id="answerInput" /><br /><br />
  `;
  document.getElementById("result").innerText = "";
}

function submitAnswer(event) {
  event.preventDefault();
  const userAnswer = document.getElementById("answerInput").value.trim();
  const correct = questions[currentIndex].correctAnswer;

  if (userAnswer === correct) {
    score++;
    document.getElementById("result").innerText = "✅ Correct!";
  } else {
    document.getElementById("result").innerText = `❌ Incorrect. Correct answer: ${correct}`;
  }
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("testForm").style.display = "none";
    document.getElementById("result").innerHTML = `<h3>Test complete! Your score: ${score}/10</h3>`;
  }
}

loadQuestion();
