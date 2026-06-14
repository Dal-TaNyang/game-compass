const favoriteGrid = document.getElementById("favoriteGrid");
const clearFavoritesBtn = document.getElementById("clearFavoritesBtn");
const modal = document.getElementById("gameModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

function renderFavorites() {
  const favoriteIds = getFavorites();
  const favoriteGames = games.filter(game => favoriteIds.includes(game.id));

  if (favoriteGames.length === 0) {
    favoriteGrid.innerHTML = `
      <div class="empty-state full-width">
        <h2>저장한 게임이 없습니다.</h2>
        <p>게임 목록이나 추천 결과에서 마음에 드는 게임을 저장해보세요.</p>
        <a href="games.html" class="btn primary">게임 목록 보기</a>
      </div>
    `;
    return;
  }

  favoriteGrid.innerHTML = favoriteGames.map(createGameCard).join("");
  bindFavoriteCards();
}

function bindFavoriteCards() {
  document.querySelectorAll(".favorite-btn").forEach(button => {
    button.addEventListener("click", event => {
      const gameId = event.currentTarget.dataset.id;
      toggleFavorite(gameId);
      renderFavorites();
    });
  });

  document.querySelectorAll(".detail-btn").forEach(button => {
    button.addEventListener("click", event => {
      const gameId = event.currentTarget.dataset.id;
      openGameModal(gameId);
    });
  });
}

function getGameDetailHTML(game) {
  return `
    <div class="modal-cover">
      <img src="${getGameImage(game)}" alt="${game.title} 타이틀 이미지" onerror="imageFallback(this, this.alt.replace(' 타이틀 이미지', ''))">
    </div>
    <p class="eyebrow">FAVORITE GAME</p>
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

function openGameModal(gameId) {
  const game = games.find(item => item.id === gameId);
  if (!game) return;

  modalBody.innerHTML = getGameDetailHTML(game);
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

clearFavoritesBtn.addEventListener("click", () => {
  if (confirm("즐겨찾기를 모두 삭제할까요?")) {
    saveFavorites([]);
    renderFavorites();
  }
});

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

renderFavorites();
