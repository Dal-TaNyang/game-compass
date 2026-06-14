document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }
});

function getFavorites() {
  return JSON.parse(localStorage.getItem("gameCompassFavorites")) || [];
}

function saveFavorites(favorites) {
  localStorage.setItem("gameCompassFavorites", JSON.stringify(favorites));
}

function isFavorite(gameId) {
  return getFavorites().includes(gameId);
}

function toggleFavorite(gameId) {
  let favorites = getFavorites();

  if (favorites.includes(gameId)) {
    favorites = favorites.filter(id => id !== gameId);
  } else {
    favorites.push(gameId);
  }

  saveFavorites(favorites);
}

function createTagHTML(tags) {
  return tags.map(tag => `<span class="tag">${tag}</span>`).join("");
}

function getGameImage(game) {
  return game.image || `images/${game.id}.svg`;
}

function getGameStoreLink(game) {
  return game.store || "#";
}

function imageFallback(img, title) {
  img.outerHTML = `<div class="image-fallback">${title}</div>`;
}

function createGameCard(game) {
  const favoriteText = isFavorite(game.id) ? "★ 저장됨" : "☆ 저장";

  return `
    <article class="game-card" data-id="${game.id}">
      <a class="game-thumb" href="${getGameStoreLink(game)}" target="_blank" rel="noopener noreferrer" aria-label="${game.title} 공식/스토어 페이지 열기">
        <img src="${getGameImage(game)}" alt="${game.title} 타이틀 이미지" onerror="imageFallback(this, this.alt.replace(' 타이틀 이미지', ''))">
        <span>${game.genre}</span>
      </a>
      <div class="game-card-body">
        <div class="game-card-head">
          <h3>${game.title}</h3>
          <span class="difficulty">입문 난이도: ${game.difficulty}</span>
        </div>
        <p>${game.summary}</p>
        <div class="tag-list">${createTagHTML(game.tags)}</div>
        <div class="card-actions">
          <button class="btn small detail-btn" data-id="${game.id}">상세 보기</button>
          <a class="btn small ghost" href="${getGameStoreLink(game)}" target="_blank" rel="noopener noreferrer">스토어 이동</a>
          <button class="btn small ghost favorite-btn" data-id="${game.id}">${favoriteText}</button>
        </div>
      </div>
    </article>
  `;
}
