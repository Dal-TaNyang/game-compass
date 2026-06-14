const questionTitle = document.getElementById("questionTitle");
const answerList = document.getElementById("answerList");
const questionCount = document.getElementById("questionCount");
const progressPercent = document.getElementById("progressPercent");
const progressBar = document.getElementById("progressBar");

let currentQuestion = 0;
let userProfile = {
  tagScores: {},
  difficultyScores: {
    "낮음": 0,
    "중간": 0,
    "높음": 0
  },
  playTimeScores: {
    "단기": 0,
    "중간": 0,
    "장기": 0,
    "반복": 0
  },
  genreScores: {}
};

function initScores() {
  TAGS.forEach(tag => {
    userProfile.tagScores[tag] = 0;
  });
}

function addScores(target, scores = {}) {
  Object.entries(scores).forEach(([key, score]) => {
    target[key] = (target[key] || 0) + score;
  });
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const progress = Math.round((currentQuestion / questions.length) * 100);

  questionTitle.textContent = question.title;
  questionCount.textContent = `${currentQuestion + 1} / ${questions.length}`;
  progressPercent.textContent = `${progress}%`;
  progressBar.style.width = `${progress}%`;

  answerList.innerHTML = question.answers.map((answer, index) => `
    <button class="answer-btn" data-index="${index}">
      <span>${String.fromCharCode(65 + index)}</span>
      ${answer.text}
    </button>
  `).join("");

  document.querySelectorAll(".answer-btn").forEach(button => {
    button.addEventListener("click", handleAnswer);
  });
}

function handleAnswer(event) {
  const answerIndex = Number(event.currentTarget.dataset.index);
  const selectedAnswer = questions[currentQuestion].answers[answerIndex];

  addScores(userProfile.tagScores, selectedAnswer.scores);
  addScores(userProfile.difficultyScores, selectedAnswer.difficulty);
  addScores(userProfile.playTimeScores, selectedAnswer.playTime);
  addScores(userProfile.genreScores, selectedAnswer.genres);

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    progressBar.style.width = "100%";
    progressPercent.textContent = "100%";

    // 예전 결과 페이지와의 호환성을 위해 태그 점수도 따로 저장합니다.
    localStorage.setItem("gameCompassScores", JSON.stringify(userProfile.tagScores));
    localStorage.setItem("gameCompassProfile", JSON.stringify(userProfile));
    location.href = "result.html";
  } else {
    renderQuestion();
  }
}

initScores();
renderQuestion();
