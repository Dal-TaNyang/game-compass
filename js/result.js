const scoreList = document.getElementById("scoreList");
const recommendList = document.getElementById("recommendList");
const resultSummary = document.getElementById("resultSummary");
const recalculateBtn = document.getElementById("recalculateBtn");
let alternativeMode = false;

const savedProfile = JSON.parse(localStorage.getItem("gameCompassProfile"));
const savedScores = JSON.parse(localStorage.getItem("gameCompassScores"));
const userProfile = savedProfile || {
  tagScores: savedScores,
  difficultyScores: {},
  playTimeScores: {},
  genreScores: {}
};
const userScores = userProfile?.tagScores;

const GENRE_KEYWORDS = {
  "FPS": ["FPS", "슈팅", "배틀로얄"],
  "MOBA": ["MOBA"],
  "RPG": ["RPG", "오픈월드", "액션 RPG"],
  "전략": ["전략", "시뮬레이션", "전술", "카드"],
  "액션": ["액션", "로그라이크", "플랫포머", "격투"],
  "스토리": ["스토리", "어드벤처", "추리", "서사"],
  "어드벤처": ["어드벤처", "탐험", "오픈월드"],
  "공포": ["공포", "호러"],
  "생존": ["생존", "서바이벌"],
  "협동": ["협동", "멀티"],
  "카드": ["카드", "덱빌딩"],
  "퍼즐": ["퍼즐", "추리"],
  "시뮬레이션": ["시뮬레이션", "경영", "자동화", "건설"],
  "인디": ["인디"]
};

const RELATED_TAGS = {
  "전략형": ["카드형", "관리형", "자동화형", "시뮬레이션형", "전술형"],
  "액션형": ["도전형", "격투형", "반복성장형", "경쟁형"],
  "스토리형": ["RPG형", "인디형", "탐험형", "퍼즐형"],
  "탐험형": ["오픈월드형", "생존형", "수집형", "RPG형"],
  "생존형": ["공포형", "관리형", "건축형", "탐험형"],
  "창작형": ["건축형", "관리형", "시뮬레이션형", "힐링형"],
  "협동형": ["공포형", "생존형", "전술형", "액션형"],
  "경쟁형": ["전술형", "액션형", "도전형"],
  "도전형": ["액션형", "반복성장형", "격투형"],
  "힐링형": ["창작형", "관리형", "수집형"],
  "공포형": ["생존형", "협동형", "탐험형"],
  "반복성장형": ["카드형", "액션형", "도전형", "인디형"],
  "인디형": ["스토리형", "퍼즐형", "카드형", "반복성장형"],
  "RPG형": ["스토리형", "탐험형", "오픈월드형"],
  "오픈월드형": ["탐험형", "수집형", "RPG형"],
  "자동화형": ["전략형", "관리형", "시뮬레이션형"],
  "퍼즐형": ["전략형", "스토리형", "인디형"],
  "카드형": ["전략형", "반복성장형", "인디형"]
};

function getRelatedTagResult(game) {
  const relatedMatches = [];
  let bonus = 0;

  Object.entries(userScores || {}).forEach(([userTag, score]) => {
    if (score <= 0) return;
    const related = RELATED_TAGS[userTag] || [];

    game.tags.forEach(gameTag => {
      if (gameTag === userTag || !related.includes(gameTag)) return;
      const weight = Math.max(1, Math.round(score * 0.45));
      bonus += weight;
      relatedMatches.push({ userTag, gameTag, weight });
    });
  });

  const unique = [];
  const seen = new Set();
  relatedMatches.forEach(item => {
    const key = `${item.userTag}-${item.gameTag}`;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(item);
    }
  });

  return {
    bonus,
    relatedMatches: unique
  };
}

function getTopKey(scoreObject = {}) {
  const entries = Object.entries(scoreObject).filter(([, score]) => score > 0);
  if (entries.length === 0) return "없음";
  return entries.sort((a, b) => b[1] - a[1])[0][0];
}

function getTopEntries(scoreObject = {}, limit = 3) {
  return Object.entries(scoreObject)
    .filter(([, score]) => score > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit);
}

function getGenreBonus(game) {
  const genreScores = userProfile.genreScores || {};
  let bonus = 0;
  const matchedGenres = [];

  Object.entries(genreScores).forEach(([genre, score]) => {
    if (score <= 0 || genre === "균형" || genre === "AAA") return;

    const keywords = GENRE_KEYWORDS[genre] || [genre];
    const matchGenreText = keywords.some(keyword => game.genre.includes(keyword));
    const matchTagText = game.tags.some(tag => keywords.some(keyword => tag.includes(keyword) || keyword.includes(tag.replace("형", ""))));

    if (matchGenreText || matchTagText) {
      bonus += score * 2;
      matchedGenres.push(genre);
    }
  });

  // 대형 인기작 선호는 인디 태그가 없는 게임에 약한 보너스를 줍니다.
  if ((genreScores["AAA"] || 0) > 0 && !game.tags.includes("인디형")) {
    bonus += genreScores["AAA"];
    matchedGenres.push("대형 인기작");
  }

  // 균형을 선택한 경우 특정 장르에 치우치지 않도록 작은 기본점을 부여합니다.
  if ((genreScores["균형"] || 0) > 0) {
    bonus += 1;
  }

  return { bonus, matchedGenres: [...new Set(matchedGenres)] };
}

function calculateRankedGames() {
  const scoredGames = games.map(game => {
    const matchedTags = game.tags.filter(tag => (userScores[tag] || 0) > 0);
    const exactTagScore = matchedTags.reduce((total, tag) => total + (userScores[tag] || 0), 0);
    const relatedResult = getRelatedTagResult(game);
    const tagScore = exactTagScore + relatedResult.bonus;

    const difficultyBonus = (userProfile.difficultyScores?.[game.difficulty] || 0) * 2;
    const playTimeBonus = (userProfile.playTimeScores?.[game.playTime] || 0) * 2;
    const genreResult = getGenreBonus(game);
    const diversityBonus = Math.min(game.tags.length, 5);
    const baseScore = tagScore + difficultyBonus + playTimeBonus + genreResult.bonus + diversityBonus;

    return {
      ...game,
      rawScore: baseScore,
      baseScore,
      tagScore,
      exactTagScore,
      relatedTagBonus: relatedResult.bonus,
      difficultyBonus,
      playTimeBonus,
      genreBonus: genreResult.bonus,
      matchedTags,
      relatedMatches: relatedResult.relatedMatches,
      matchedGenres: genreResult.matchedGenres
    };
  }).sort((a, b) => b.rawScore - a.rawScore);

  const maxScore = Math.max(...scoredGames.map(game => game.rawScore), 1);
  return scoredGames.map(game => ({
    ...game,
    matchRate: Math.min(99, Math.max(55, Math.round((game.rawScore / maxScore) * 100)))
  }));
}

function calculateRecommendationSets(useAlternative = false) {
  const rankedGames = calculateRankedGames();

  if (!useAlternative) {
    return {
      topGames: rankedGames.slice(0, 6),
      extraGames: rankedGames.slice(6, 10)
    };
  }

  // 같은 취향으로 다시 추천할 때는 점수 자체는 고정하고,
  // 상위 후보군 안에서 노출되는 게임만 바꿉니다.
  // 그래서 같은 게임이 다시 등장해도 추천 일치도는 변하지 않습니다.
  const topPool = rankedGames.slice(0, 18);
  const topGames = shuffleArray(topPool).slice(0, 6).sort((a, b) => b.rawScore - a.rawScore);
  const selectedIds = new Set(topGames.map(game => game.id));
  const extraPool = rankedGames.slice(6, 36).filter(game => !selectedIds.has(game.id));
  const extraGames = shuffleArray(extraPool).slice(0, 4).sort((a, b) => b.rawScore - a.rawScore);

  return { topGames, extraGames };
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function renderScores() {
  const sortedScores = getTopEntries(userScores, 5);
  const preferredDifficulty = getTopKey(userProfile.difficultyScores);
  const preferredPlayTime = getTopKey(userProfile.playTimeScores);
  const preferredGenres = getTopEntries(userProfile.genreScores, 3).map(([genre]) => genre).join(" · ") || "없음";

  if (sortedScores.length === 0) {
    scoreList.innerHTML = `<p class="empty-message">점수 정보가 없습니다.</p>`;
    return;
  }

  scoreList.innerHTML = `
    <div class="preference-summary compact">
      <div><strong>난이도</strong><span>${preferredDifficulty}</span></div>
      <div><strong>플레이</strong><span>${preferredPlayTime}</span></div>
      <div><strong>장르</strong><span>${preferredGenres}</span></div>
    </div>
    <div class="score-chip-list">
      ${sortedScores.map(([tag, score]) => `
        <span class="score-chip"><b>${tag}</b>${score}</span>
      `).join("")}
    </div>
  `;
}

function createReasonText(game) {
  const mainTags = game.matchedTags.slice(0, 3);
  const relatedTags = game.relatedMatches.slice(0, 2).map(match => match.gameTag);
  const tagText = [...new Set([...mainTags, ...relatedTags])].slice(0, 3).join(" · ");

  if (tagText) {
    return `${tagText} 성향과 잘 맞는 게임입니다.`;
  }

  if (game.difficultyBonus > 0 || game.playTimeBonus > 0) {
    return `선호한 입문 난이도와 플레이 방식에 가까운 게임입니다.`;
  }

  return game.reason || `테스트 결과와 가까운 조건을 가진 게임입니다.`;
}

function renderRecommendations(useAlternative = false) {
  const { topGames, extraGames } = calculateRecommendationSets(useAlternative);
  const topTags = getTopEntries(userScores, 3).map(([tag]) => tag).join(" · ") || "없음";
  const preferredDifficulty = getTopKey(userProfile.difficultyScores);
  const preferredPlayTime = getTopKey(userProfile.playTimeScores);

  const modeText = useAlternative ? " / 같은 취향 조건에서 다른 후보를 골라봤습니다." : "";
  resultSummary.textContent = `주요 취향: ${topTags} / 난이도: ${preferredDifficulty} / 플레이: ${preferredPlayTime}${modeText}`;

  const topHTML = topGames.map((game, index) => `
    <article class="recommend-card rank-${index + 1}">
      <div class="recommend-thumb">
        <img src="${getGameImage(game)}" alt="${game.title} 타이틀 이미지" onerror="imageFallback(this, this.alt.replace(' 타이틀 이미지', ''))">
        <div class="rank-badge">TOP ${index + 1}</div>
      </div>
      <h2>${game.title}</h2>
      <p class="match-rate">추천 일치도 ${game.matchRate}%</p>
      <div class="meter"><span style="width:${game.matchRate}%"></span></div>
      <p>${createReasonText(game)}</p>
      <div class="match-breakdown">
        <span>태그 ${game.exactTagScore}</span>
        <span>관련 +${game.relatedTagBonus}</span>
        <span>난이도 +${game.difficultyBonus}</span>
        <span>플레이 +${game.playTimeBonus}</span>
        <span>장르 +${game.genreBonus}</span>
      </div>
      <div class="tag-list">${createTagHTML(game.tags)}</div>
      <div class="card-actions">
        <a class="btn small ghost" href="${getGameStoreLink(game)}" target="_blank" rel="noopener noreferrer">스토어 이동</a>
        <button class="btn small favorite-btn" data-id="${game.id}">
          ${isFavorite(game.id) ? "★ 저장됨" : "☆ 즐겨찾기 저장"}
        </button>
      </div>
    </article>
  `).join("");

  const extraHTML = extraGames.length ? `
    <section class="extra-recommend-section">
      <div class="compact-head">
        <div>
          <p class="eyebrow">MORE PICKS</p>
          <h2>이런 게임은 어떤가요?</h2>
        </div>
        <p>비슷한 취향 후보에서 4개를 더 골라봤습니다.</p>
      </div>
      <div class="extra-recommend-list">
        ${extraGames.map(game => `
          <article class="extra-recommend-card">
            <div class="extra-thumb">
              <img src="${getGameImage(game)}" alt="${game.title} 타이틀 이미지" onerror="imageFallback(this, this.alt.replace(' 타이틀 이미지', ''))">
            </div>
            <div class="extra-info">
              <h3>${game.title}</h3>
              <p>${game.genre}</p>
              <span>${game.matchRate}%</span>
              <small>${createReasonText(game)}</small>
            </div>
            <div class="extra-actions">
              <a class="btn small ghost" href="${getGameStoreLink(game)}" target="_blank" rel="noopener noreferrer">스토어</a>
              <button class="btn small favorite-btn" data-id="${game.id}">${isFavorite(game.id) ? "★" : "☆"}</button>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  ` : "";

  recommendList.innerHTML = topHTML + extraHTML;

  document.querySelectorAll(".favorite-btn").forEach(button => {
    button.addEventListener("click", event => {
      toggleFavorite(event.currentTarget.dataset.id);
      renderRecommendations(alternativeMode);
    });
  });
}

if (!userScores) {
  scoreList.innerHTML = "";
  recommendList.innerHTML = `
    <div class="empty-state">
      <h2>테스트 결과가 없습니다.</h2>
      <p>먼저 취향 테스트를 진행해주세요.</p>
      <a href="test.html" class="btn primary">테스트 시작하기</a>
    </div>
  `;
} else {
  renderScores();
  renderRecommendations();

  recalculateBtn?.addEventListener("click", () => {
    alternativeMode = true;
    renderRecommendations(true);
    recalculateBtn.textContent = "같은 취향으로 다시 추천";
  });
}
