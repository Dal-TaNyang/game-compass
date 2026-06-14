const gameGrid = document.getElementById("gameGrid");
const searchInput = document.getElementById("searchInput");
const tagFilter = document.getElementById("tagFilter");
const difficultyFilter = document.getElementById("difficultyFilter");
const randomBtn = document.getElementById("randomBtn");
const tagGuideBtn = document.getElementById("tagGuideBtn");
const resetBtn = document.getElementById("resetBtn");
const modal = document.getElementById("gameModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

const TAG_DESCRIPTIONS = {
  "전략형": "자원 관리, 빌드 선택, 장기 계획처럼 판단력이 중요한 게임입니다.",
  "액션형": "전투 조작, 반응 속도, 타격감처럼 손맛이 중요한 게임입니다.",
  "스토리형": "서사, 연출, 캐릭터 몰입을 중요하게 보는 게임입니다.",
  "탐험형": "넓은 맵, 숨겨진 장소, 발견의 재미가 중심인 게임입니다.",
  "생존형": "자원 부족, 위협, 위험 지역에서 버티는 재미가 중심입니다.",
  "창작형": "건축, 제작, 배치처럼 나만의 결과물을 만드는 재미가 있는 게임입니다.",
  "협동형": "친구나 다른 유저와 함께할 때 재미가 커지는 게임입니다.",
  "경쟁형": "다른 유저와 실력을 겨루는 PvP 중심 게임입니다.",
  "도전형": "높은 난이도와 반복 도전을 통해 성취감을 주는 게임입니다.",
  "힐링형": "느긋한 플레이, 안정적인 분위기, 부담 없는 진행이 특징입니다.",
  "공포형": "긴장감, 불안감, 생존 압박을 즐기는 게임입니다.",
  "반복성장형": "실패와 재도전을 반복하며 실력이나 빌드가 성장하는 게임입니다.",
  "카드형": "카드 선택, 덱 구성, 조합 시너지가 중요한 게임입니다.",
  "수집형": "장비, 캐릭터, 아이템을 모으고 성장시키는 재미가 있는 게임입니다.",
  "전술형": "순간 판단보다 위치 선정, 정보 활용, 팀 운영이 중요한 게임입니다.",
  "퍼즐형": "규칙을 이해하고 문제를 풀어내는 사고력이 중심인 게임입니다.",
  "건축형": "기지, 도시, 구조물처럼 공간을 직접 설계하고 확장하는 게임입니다.",
  "관리형": "자원, 인력, 일정, 시스템을 조율하며 운영하는 게임입니다.",
  "오픈월드형": "정해진 길보다 자유롭게 이동하고 선택하는 재미가 큰 게임입니다.",
  "RPG형": "캐릭터 성장, 장비, 선택, 역할 수행이 중요한 게임입니다.",
  "레이싱형": "속도감, 차량 조작, 기록 경쟁이 중심인 게임입니다.",
  "격투형": "캐릭터별 기술, 콤보, 심리전이 중요한 대전 게임입니다.",
  "자동화형": "생산 라인, 효율, 반복 작업 최적화가 핵심인 게임입니다.",
  "시뮬레이션형": "현실 또는 가상의 시스템을 관찰하고 조작하는 재미가 있는 게임입니다.",
  "인디형": "대형 게임보다 독창적인 아이디어와 개성이 강한 게임입니다."
};

function initTagFilter() {
  TAGS.forEach(tag => {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    tagFilter.appendChild(option);
  });
}

function renderGames() {
  const keyword = searchInput.value.trim().toLowerCase();
  const selectedTag = tagFilter.value;
  const selectedDifficulty = difficultyFilter.value;

  const filteredGames = games.filter(game => {
    const matchKeyword = game.title.toLowerCase().includes(keyword);
    const matchTag = selectedTag === "all" || game.tags.includes(selectedTag);
    const matchDifficulty = selectedDifficulty === "all" || game.difficulty === selectedDifficulty;
    return matchKeyword && matchTag && matchDifficulty;
  });

  if (filteredGames.length === 0) {
    gameGrid.innerHTML = `<p class="empty-message">조건에 맞는 게임이 없습니다.</p>`;
    return;
  }

  gameGrid.innerHTML = filteredGames.map(createGameCard).join("");
  bindCardButtons();
}

function bindCardButtons() {
  document.querySelectorAll(".favorite-btn").forEach(button => {
    button.addEventListener("click", event => {
      const gameId = event.currentTarget.dataset.id;
      toggleFavorite(gameId);
      renderGames();
    });
  });

  document.querySelectorAll(".detail-btn").forEach(button => {
    button.addEventListener("click", event => {
      const gameId = event.currentTarget.dataset.id;
      openGameModal(gameId);
    });
  });
}

function getGameDetailHTML(game, label = "GAME DETAIL") {
  return `
    <div class="modal-cover">
      <img src="${getGameImage(game)}" alt="${game.title} 타이틀 이미지" onerror="imageFallback(this, this.alt.replace(' 타이틀 이미지', ''))">
    </div>
    <p class="eyebrow">${label}</p>
    <h2>${game.title}</h2>
    <p class="modal-summary">${game.summary}</p>
    <div class="detail-table">
      <div><strong>장르</strong><span>${game.genre}</span></div>
      <div><strong>입문 난이도</strong><span>${game.difficulty}</span></div>
      <div><strong>플레이 시간</strong><span>${game.playTime}</span></div>
    </div>
    <h3>추천 이유</h3>
    <p>${game.reason}</p>
    <div class="tag-list">${createTagHTML(game.tags)}</div>
    <a class="btn primary modal-store" href="${getGameStoreLink(game)}" target="_blank" rel="noopener noreferrer">공식/스토어 페이지 열기</a>
  `;
}

function openGameModal(gameId, label = "GAME DETAIL") {
  const game = games.find(item => item.id === gameId);
  if (!game) return;

  modalBody.innerHTML = getGameDetailHTML(game, label);
  openModal();
}

function openRandomGame() {
  const randomIndex = Math.floor(Math.random() * games.length);
  const game = games[randomIndex];
  modalBody.innerHTML = getGameDetailHTML(game, "RANDOM PICK");
  openModal();
}

function openTagGuide() {
  const tagRows = TAGS.map(tag => `
    <div class="tag-guide-row">
      <strong>${tag}</strong>
      <span>${TAG_DESCRIPTIONS[tag] || "게임의 특징을 구분하기 위한 태그입니다."}</span>
    </div>
  `).join("");

  modalBody.innerHTML = `
    <p class="eyebrow">TAG GUIDE</p>
    <h2>태그 설명</h2>
    <p class="modal-summary">게임 목록의 태그는 취향 테스트와 추천 결과 계산에 함께 사용됩니다. 검색은 게임 제목만 찾고, 태그는 필터로 따로 선택할 수 있습니다.</p>
    <div class="tag-guide-list">${tagRows}</div>
  `;
  openModal();
}

function openModal() {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

searchInput.addEventListener("input", renderGames);
tagFilter.addEventListener("change", renderGames);
difficultyFilter.addEventListener("change", renderGames);
randomBtn.addEventListener("click", openRandomGame);
tagGuideBtn.addEventListener("click", openTagGuide);
resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  tagFilter.value = "all";
  difficultyFilter.value = "all";
  renderGames();
});
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

initTagFilter();
renderGames();
