const TAGS = [
  "전략형",
  "액션형",
  "스토리형",
  "탐험형",
  "생존형",
  "창작형",
  "협동형",
  "경쟁형",
  "도전형",
  "힐링형",
  "공포형",
  "반복성장형",
  "카드형",
  "수집형",
  "전술형",
  "퍼즐형",
  "건축형",
  "관리형",
  "오픈월드형",
  "RPG형",
  "레이싱형",
  "격투형",
  "자동화형",
  "시뮬레이션형",
  "인디형"
];

const games = [
  {
    "id": "counter-strike-2",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg",
    "store": "https://store.steampowered.com/app/730/CounterStrike_2/",
    "title": "Counter-Strike 2",
    "genre": "경쟁 FPS",
    "difficulty": "높음",
    "playTime": "반복",
    "tags": [
      "경쟁형",
      "전술형",
      "협동형",
      "도전형"
    ],
    "summary": "팀 단위 전술과 정밀한 조준 실력이 중요한 대표적인 경쟁 FPS 게임.",
    "reason": "경쟁, 팀플레이, 순간 판단, 실력 향상을 중시하는 사람에게 잘 맞습니다."
  },
  {
    "id": "dota-2",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg",
    "store": "https://store.steampowered.com/app/570/Dota_2/",
    "title": "Dota 2",
    "genre": "MOBA 전략",
    "difficulty": "높음",
    "playTime": "반복",
    "tags": [
      "전략형",
      "경쟁형",
      "협동형",
      "전술형"
    ],
    "summary": "영웅 조합, 라인 운영, 팀 전투가 핵심인 깊이 있는 MOBA 게임.",
    "reason": "복잡한 전략과 팀 단위 운영, 실력 기반 경쟁을 좋아하는 사람에게 적합합니다."
  },
  {
    "id": "pubg",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg",
    "store": "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/",
    "title": "PUBG: BATTLEGROUNDS",
    "genre": "배틀로얄 슈팅",
    "difficulty": "높음",
    "playTime": "반복",
    "tags": [
      "경쟁형",
      "생존형",
      "전술형",
      "협동형"
    ],
    "summary": "넓은 전장에서 장비를 파밍하고 마지막까지 살아남는 배틀로얄 게임.",
    "reason": "생존 판단, 긴장감 있는 전투, 팀 단위 전략을 좋아한다면 추천됩니다."
  },
  {
    "id": "apex-legends",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg",
    "store": "https://store.steampowered.com/app/1172470/Apex_Legends/",
    "title": "Apex Legends",
    "genre": "히어로 배틀로얄 FPS",
    "difficulty": "높음",
    "playTime": "반복",
    "tags": [
      "액션형",
      "경쟁형",
      "협동형",
      "전술형"
    ],
    "summary": "캐릭터별 능력과 빠른 전투가 결합된 팀 기반 배틀로얄 FPS.",
    "reason": "속도감 있는 교전, 캐릭터 능력 조합, 팀플레이를 선호한다면 잘 맞습니다."
  },
  {
    "id": "destiny-2",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1085660/header.jpg",
    "store": "https://store.steampowered.com/app/1085660/Destiny_2/",
    "title": "Destiny 2",
    "genre": "루터 슈터 MMO",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "액션형",
      "협동형",
      "수집형",
      "반복성장형"
    ],
    "summary": "SF 세계관에서 장비를 모으고 미션과 레이드를 반복하는 온라인 슈팅 게임.",
    "reason": "총기 액션, 장비 파밍, 협동 미션을 꾸준히 즐기고 싶다면 추천됩니다."
  },
  {
    "id": "warframe",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/230410/header.jpg",
    "store": "https://store.steampowered.com/app/230410/Warframe/",
    "title": "Warframe",
    "genre": "협동 액션 RPG",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "액션형",
      "협동형",
      "수집형",
      "반복성장형"
    ],
    "summary": "빠른 이동과 전투, 장비 수집, 캐릭터 성장 요소가 강한 협동 액션 게임.",
    "reason": "속도감 있는 액션과 파밍, 다양한 캐릭터 수집을 좋아하는 사람에게 맞습니다."
  },
  {
    "id": "war-thunder",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/236390/header.jpg",
    "store": "https://store.steampowered.com/app/236390/War_Thunder/",
    "title": "War Thunder",
    "genre": "전쟁 장비 시뮬레이션",
    "difficulty": "높음",
    "playTime": "반복",
    "tags": [
      "전술형",
      "경쟁형",
      "시뮬레이션형",
      "도전형"
    ],
    "summary": "전차, 전투기, 함선을 조종하며 대규모 전투를 즐기는 밀리터리 게임.",
    "reason": "장비 이해와 위치 선정, 전술적인 교전을 선호한다면 잘 맞습니다."
  },
  {
    "id": "team-fortress-2",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/440/header.jpg",
    "store": "https://store.steampowered.com/app/440/Team_Fortress_2/",
    "title": "Team Fortress 2",
    "genre": "클래스 기반 FPS",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": [
      "액션형",
      "협동형",
      "경쟁형",
      "전술형"
    ],
    "summary": "개성 강한 병과들이 팀 목표를 두고 싸우는 오래된 인기 팀 기반 FPS.",
    "reason": "캐주얼하면서도 역할 분담이 있는 팀 전투를 좋아한다면 추천됩니다."
  },
  {
    "id": "elden-ring",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
    "store": "https://store.steampowered.com/app/1245620/ELDEN_RING/",
    "title": "ELDEN RING",
    "genre": "오픈월드 액션 RPG",
    "difficulty": "높음",
    "playTime": "장기",
    "tags": [
      "탐험형",
      "액션형",
      "도전형",
      "오픈월드형",
      "RPG형"
    ],
    "summary": "광대한 세계를 탐험하며 강한 적과 보스를 극복하는 오픈월드 액션 RPG.",
    "reason": "자유로운 탐험과 높은 난이도, 성취감 있는 전투를 원한다면 추천됩니다."
  },
  {
    "id": "baldurs-gate-3",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg",
    "store": "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/",
    "title": "Baldur's Gate 3",
    "genre": "턴제 RPG",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "스토리형",
      "전략형",
      "탐험형",
      "협동형",
      "RPG형"
    ],
    "summary": "선택과 대화, 전투 전략에 따라 이야기가 달라지는 깊이 있는 턴제 RPG.",
    "reason": "몰입도 높은 서사와 전략적 전투, 선택의 결과를 좋아한다면 잘 맞습니다."
  },
  {
    "id": "cyberpunk-2077",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
    "store": "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
    "title": "Cyberpunk 2077",
    "genre": "오픈월드 액션 RPG",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "스토리형",
      "액션형",
      "탐험형",
      "오픈월드형",
      "RPG형"
    ],
    "summary": "거대한 미래 도시에서 임무와 선택을 따라가는 사이버펑크 오픈월드 RPG.",
    "reason": "강한 분위기, 캐릭터 서사, 액션과 탐험을 함께 원하는 사람에게 추천됩니다."
  },
  {
    "id": "red-dead-redemption-2",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
    "store": "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/",
    "title": "Red Dead Redemption 2",
    "genre": "오픈월드 어드벤처",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "스토리형",
      "탐험형",
      "오픈월드형"
    ],
    "summary": "서부 개척 시대를 배경으로 한 거대한 오픈월드 서사 어드벤처.",
    "reason": "느린 호흡의 몰입감, 강한 캐릭터 서사, 자유로운 탐험을 원한다면 추천됩니다."
  },
  {
    "id": "the-witcher-3",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    "store": "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
    "title": "The Witcher 3: Wild Hunt",
    "genre": "오픈월드 RPG",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "스토리형",
      "탐험형",
      "오픈월드형",
      "전략형",
      "RPG형"
    ],
    "summary": "거대한 판타지 세계에서 선택과 결과가 이어지는 오픈월드 RPG.",
    "reason": "깊은 서사, 인물 관계, 자유로운 탐험을 긴 호흡으로 즐기고 싶다면 추천됩니다."
  },
  {
    "id": "god-of-war",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg",
    "store": "https://store.steampowered.com/app/1593500/God_of_War/",
    "title": "God of War",
    "genre": "액션 어드벤처",
    "difficulty": "중간",
    "playTime": "중간",
    "tags": [
      "액션형",
      "스토리형",
      "도전형"
    ],
    "summary": "강렬한 전투와 부자 서사가 결합된 액션 어드벤처 게임.",
    "reason": "묵직한 액션과 영화적인 연출, 캐릭터 중심 서사를 좋아한다면 추천됩니다."
  },
  {
    "id": "sekiro",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/814380/header.jpg",
    "store": "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/",
    "title": "Sekiro: Shadows Die Twice",
    "genre": "고난도 액션",
    "difficulty": "높음",
    "playTime": "중간",
    "tags": [
      "액션형",
      "도전형",
      "반복성장형"
    ],
    "summary": "정확한 타이밍과 패링을 요구하는 고난도 액션 게임.",
    "reason": "죽으면서 패턴을 익히고 실력으로 돌파하는 경험을 좋아한다면 잘 맞습니다."
  },
  {
    "id": "black-myth-wukong",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2358720/header.jpg",
    "store": "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
    "title": "Black Myth: Wukong",
    "genre": "액션 RPG",
    "difficulty": "높음",
    "playTime": "중간",
    "tags": [
      "액션형",
      "도전형",
      "스토리형",
      "RPG형"
    ],
    "summary": "동양 판타지 분위기와 보스전 중심 액션이 강조된 액션 RPG.",
    "reason": "화려한 전투, 보스 공략, 신화적 분위기를 선호한다면 추천됩니다."
  },
  {
    "id": "monster-hunter-world",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/582010/header.jpg",
    "store": "https://store.steampowered.com/app/582010/Monster_Hunter_World/",
    "title": "Monster Hunter: World",
    "genre": "헌팅 액션 RPG",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "액션형",
      "협동형",
      "도전형",
      "반복성장형",
      "RPG형"
    ],
    "summary": "거대한 몬스터를 사냥하고 장비를 제작하며 성장하는 헌팅 액션 게임.",
    "reason": "친구와 함께 강적을 공략하고 장비를 맞춰가는 플레이를 좋아한다면 어울립니다."
  },
  {
    "id": "monster-hunter-wilds",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2246340/header.jpg",
    "store": "https://store.steampowered.com/app/2246340/Monster_Hunter_Wilds/",
    "title": "Monster Hunter Wilds",
    "genre": "헌팅 액션 RPG",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "액션형",
      "협동형",
      "도전형",
      "탐험형",
      "RPG형"
    ],
    "summary": "광활한 환경에서 몬스터를 추적하고 사냥하는 헌팅 액션 RPG.",
    "reason": "탐험과 협동 사냥, 장비 성장의 재미를 함께 원한다면 추천됩니다."
  },
  {
    "id": "tekken-8",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1778820/header.jpg",
    "store": "https://store.steampowered.com/app/1778820/TEKKEN_8/",
    "title": "TEKKEN 8",
    "genre": "대전 격투",
    "difficulty": "높음",
    "playTime": "반복",
    "tags": [
      "격투형",
      "경쟁형",
      "액션형",
      "도전형"
    ],
    "summary": "캐릭터별 콤보와 심리전이 중요한 대표적인 3D 대전 격투 게임.",
    "reason": "실력 향상, 1대1 승부, 콤보 연습을 좋아하는 사람에게 잘 맞습니다."
  },
  {
    "id": "street-fighter-6",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1364780/header.jpg",
    "store": "https://store.steampowered.com/app/1364780/Street_Fighter_6/",
    "title": "Street Fighter 6",
    "genre": "대전 격투",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": [
      "격투형",
      "경쟁형",
      "액션형",
      "도전형"
    ],
    "summary": "입문자도 접근하기 쉬운 시스템과 깊은 심리전이 있는 대전 격투 게임.",
    "reason": "깔끔한 승부 구조와 캐릭터 숙련도를 쌓는 플레이를 선호한다면 추천됩니다."
  },
  {
    "id": "rust",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg",
    "store": "https://store.steampowered.com/app/252490/Rust/",
    "title": "Rust",
    "genre": "온라인 생존",
    "difficulty": "높음",
    "playTime": "장기",
    "tags": [
      "생존형",
      "경쟁형",
      "건축형",
      "협동형"
    ],
    "summary": "자원을 모아 거점을 만들고 다른 플레이어와 경쟁하는 하드코어 생존 게임.",
    "reason": "위험한 생존 환경, 건축, 약탈과 방어의 긴장감을 좋아한다면 추천됩니다."
  },
  {
    "id": "ark-survival-ascended",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2399830/header.jpg",
    "store": "https://store.steampowered.com/app/2399830/ARK_Survival_Ascended/",
    "title": "ARK: Survival Ascended",
    "genre": "공룡 생존 샌드박스",
    "difficulty": "높음",
    "playTime": "장기",
    "tags": [
      "생존형",
      "수집형",
      "건축형",
      "오픈월드형"
    ],
    "summary": "공룡을 길들이고 거점을 만들며 살아남는 오픈월드 생존 게임.",
    "reason": "수집과 육성, 건축, 거친 생존 플레이를 오래 즐기고 싶다면 어울립니다."
  },
  {
    "id": "subnautica",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/264710/header.jpg",
    "store": "https://store.steampowered.com/app/264710/Subnautica/",
    "title": "Subnautica",
    "genre": "해양 생존 탐험",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "탐험형",
      "생존형",
      "공포형",
      "오픈월드형"
    ],
    "summary": "외계 행성의 바다를 탐험하며 자원을 모으고 생존하는 해양 탐험 게임.",
    "reason": "아름다운 탐험과 미지의 공포, 생존 요소가 섞인 경험을 원한다면 추천됩니다."
  },
  {
    "id": "project-zomboid",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/108600/header.jpg",
    "store": "https://store.steampowered.com/app/108600/Project_Zomboid/",
    "title": "Project Zomboid",
    "genre": "좀비 생존 시뮬레이션",
    "difficulty": "높음",
    "playTime": "장기",
    "tags": [
      "생존형",
      "관리형",
      "전략형",
      "공포형"
    ],
    "summary": "현실적인 생존 관리와 장기 플레이가 핵심인 좀비 아포칼립스 게임.",
    "reason": "식량, 부상, 소음, 거점 운영까지 신중하게 관리하는 플레이를 좋아한다면 추천됩니다."
  },
  {
    "id": "valheim",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/892970/header.jpg",
    "store": "https://store.steampowered.com/app/892970/Valheim/",
    "title": "Valheim",
    "genre": "바이킹 생존 탐험",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "생존형",
      "탐험형",
      "건축형",
      "협동형"
    ],
    "summary": "북유럽 신화풍 세계에서 탐험, 건축, 보스 공략을 즐기는 생존 게임.",
    "reason": "친구와 함께 기지를 짓고 미지의 지역을 개척하는 재미를 원한다면 잘 맞습니다."
  },
  {
    "id": "dont-starve-together",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/322330/header.jpg",
    "store": "https://store.steampowered.com/app/322330/Dont_Starve_Together/",
    "title": "Don't Starve Together",
    "genre": "협동 생존",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": [
      "생존형",
      "협동형",
      "전략형",
      "공포형"
    ],
    "summary": "기묘한 세계에서 굶주림과 계절, 몬스터를 견디는 협동 생존 게임.",
    "reason": "불친절하지만 개성 강한 생존 시스템과 협동 플레이를 좋아한다면 추천됩니다."
  },
  {
    "id": "lethal-company",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1966720/header.jpg",
    "store": "https://store.steampowered.com/app/1966720/Lethal_Company/",
    "title": "Lethal Company",
    "genre": "협동 공포 생존",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": [
      "공포형",
      "협동형",
      "탐험형",
      "생존형"
    ],
    "summary": "친구들과 폐시설을 탐색하며 물건을 수집하고 위험에서 살아남는 협동 공포 게임.",
    "reason": "웃기면서도 긴장되는 협동 공포와 돌발 상황을 즐기는 사람에게 잘 맞습니다."
  },
  {
    "id": "phasmophobia",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/739630/header.jpg",
    "store": "https://store.steampowered.com/app/739630/Phasmophobia/",
    "title": "Phasmophobia",
    "genre": "협동 공포 조사",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": [
      "공포형",
      "협동형",
      "전술형",
      "탐험형"
    ],
    "summary": "친구들과 유령의 정체를 조사하며 증거를 모으는 협동 공포 게임.",
    "reason": "공포 분위기 속에서 단서를 모으고 역할을 나누는 플레이를 좋아한다면 잘 맞습니다."
  },
  {
    "id": "escape-the-backrooms",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1943950/header.jpg",
    "store": "https://store.steampowered.com/app/1943950/Escape_the_Backrooms/",
    "title": "Escape the Backrooms",
    "genre": "협동 공포 탐험",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": [
      "공포형",
      "협동형",
      "탐험형",
      "퍼즐형"
    ],
    "summary": "백룸을 배경으로 여러 공간을 탈출하는 협동 공포 탐험 게임.",
    "reason": "친구와 함께 길을 찾고 이상한 공간을 헤매는 긴장감을 원한다면 추천됩니다."
  },
  {
    "id": "sons-of-the-forest",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1326470/header.jpg",
    "store": "https://store.steampowered.com/app/1326470/Sons_Of_The_Forest/",
    "title": "Sons Of The Forest",
    "genre": "생존 공포",
    "difficulty": "높음",
    "playTime": "장기",
    "tags": [
      "생존형",
      "공포형",
      "건축형",
      "탐험형"
    ],
    "summary": "섬에서 자원을 모으고 기지를 지으며 위협적인 적들을 상대하는 생존 공포 게임.",
    "reason": "어두운 탐험, 기지 건축, 직접적인 위협이 있는 생존 게임을 선호한다면 어울립니다."
  },
  {
    "id": "rimworld",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/294100/header.jpg",
    "store": "https://store.steampowered.com/app/294100/RimWorld/",
    "title": "RimWorld",
    "genre": "생존 시뮬레이션",
    "difficulty": "높음",
    "playTime": "장기",
    "tags": [
      "전략형",
      "생존형",
      "창작형",
      "관리형",
      "반복성장형"
    ],
    "summary": "정착민을 관리하며 사건과 선택이 만들어내는 이야기를 즐기는 생존 시뮬레이션 게임.",
    "reason": "긴 호흡의 플레이, 자원 관리, 예측 불가능한 사건을 좋아하는 사람에게 어울립니다."
  },
  {
    "id": "factorio",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/427520/header.jpg",
    "store": "https://store.steampowered.com/app/427520/Factorio/",
    "title": "Factorio",
    "genre": "자동화 시뮬레이션",
    "difficulty": "높음",
    "playTime": "장기",
    "tags": [
      "전략형",
      "관리형",
      "창작형",
      "반복성장형",
      "자동화형"
    ],
    "summary": "공장을 설계하고 생산 라인을 자동화하며 효율을 높이는 관리형 시뮬레이션.",
    "reason": "복잡한 시스템을 설계하고 점점 최적화하는 과정을 좋아하는 사람에게 적합합니다."
  },
  {
    "id": "satisfactory",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/526870/header.jpg",
    "store": "https://store.steampowered.com/app/526870/Satisfactory/",
    "title": "Satisfactory",
    "genre": "공장 자동화 탐험",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "자동화형",
      "건축형",
      "탐험형",
      "창작형",
      "관리형"
    ],
    "summary": "외계 행성에서 거대한 공장을 짓고 생산 라인을 자동화하는 게임.",
    "reason": "직접 걷고 탐험하면서 대규모 구조물을 설계하는 재미를 원한다면 추천됩니다."
  },
  {
    "id": "cities-skylines-2",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/949230/header.jpg",
    "store": "https://store.steampowered.com/app/949230/Cities_Skylines_II/",
    "title": "Cities: Skylines II",
    "genre": "도시 건설 시뮬레이션",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "관리형",
      "건축형",
      "전략형",
      "시뮬레이션형"
    ],
    "summary": "도로, 구역, 공공시설을 설계하며 도시를 운영하는 건설 시뮬레이션.",
    "reason": "복잡한 도시 문제를 해결하고 큰 그림을 설계하는 플레이에 잘 맞습니다."
  },
  {
    "id": "crusader-kings-3",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1158310/header.jpg",
    "store": "https://store.steampowered.com/app/1158310/Crusader_Kings_III/",
    "title": "Crusader Kings III",
    "genre": "왕조 전략 시뮬레이션",
    "difficulty": "높음",
    "playTime": "장기",
    "tags": [
      "전략형",
      "스토리형",
      "관리형",
      "시뮬레이션형"
    ],
    "summary": "중세 왕조의 정치, 결혼, 전쟁, 음모를 다루는 대전략 시뮬레이션.",
    "reason": "시스템이 만든 드라마와 장기 전략 운영을 좋아한다면 강하게 추천됩니다."
  },
  {
    "id": "civilization-6",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/289070/header.jpg",
    "store": "https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/",
    "title": "Sid Meier’s Civilization VI",
    "genre": "턴제 문명 전략",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "전략형",
      "관리형",
      "반복성장형"
    ],
    "summary": "문명을 성장시키고 외교, 전쟁, 과학, 문화 승리를 노리는 턴제 전략 게임.",
    "reason": "긴 계획을 세우고 조금씩 제국을 키우는 플레이를 선호한다면 적합합니다."
  },
  {
    "id": "euro-truck-simulator-2",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/227300/header.jpg",
    "store": "https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/",
    "title": "Euro Truck Simulator 2",
    "genre": "운전 시뮬레이션",
    "difficulty": "낮음",
    "playTime": "장기",
    "tags": [
      "힐링형",
      "시뮬레이션형",
      "탐험형"
    ],
    "summary": "유럽 도로를 달리며 화물을 운송하는 느긋한 운전 시뮬레이션.",
    "reason": "편안한 주행과 라디오, 장거리 운전 감성을 즐기고 싶다면 추천됩니다."
  },
  {
    "id": "forza-horizon-5",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg",
    "store": "https://store.steampowered.com/app/1551360/Forza_Horizon_5/",
    "title": "Forza Horizon 5",
    "genre": "오픈월드 레이싱",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": [
      "레이싱형",
      "오픈월드형",
      "액션형",
      "탐험형"
    ],
    "summary": "넓은 오픈월드를 달리며 다양한 레이스와 차량 수집을 즐기는 레이싱 게임.",
    "reason": "속도감, 차량 수집, 자유 주행을 좋아한다면 잘 맞습니다."
  },
  {
    "id": "stardew-valley",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg",
    "store": "https://store.steampowered.com/app/413150/Stardew_Valley/",
    "title": "Stardew Valley",
    "genre": "농장 생활 시뮬레이션",
    "difficulty": "낮음",
    "playTime": "장기",
    "tags": [
      "힐링형",
      "창작형",
      "탐험형",
      "반복성장형"
    ],
    "summary": "농장을 가꾸고 마을 사람들과 관계를 쌓아가는 생활 시뮬레이션 게임.",
    "reason": "편안한 분위기, 꾸준한 성장, 자유로운 생활 플레이를 선호한다면 잘 맞습니다."
  },
  {
    "id": "dave-the-diver",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1868140/header.jpg",
    "store": "https://store.steampowered.com/app/1868140/DAVE_THE_DIVER/",
    "title": "DAVE THE DIVER",
    "genre": "해양 어드벤처 경영",
    "difficulty": "낮음",
    "playTime": "중간",
    "tags": [
      "힐링형",
      "탐험형",
      "관리형",
      "반복성장형"
    ],
    "summary": "낮에는 바다를 탐험하고 밤에는 초밥집을 운영하는 독특한 어드벤처 게임.",
    "reason": "가볍게 즐기면서도 탐험과 운영의 재미를 함께 느끼고 싶다면 추천됩니다."
  },
  {
    "id": "terraria",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg",
    "store": "https://store.steampowered.com/app/105600/Terraria/",
    "title": "Terraria",
    "genre": "샌드박스 어드벤처",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "탐험형",
      "창작형",
      "생존형",
      "건축형",
      "반복성장형"
    ],
    "summary": "탐험, 건축, 전투, 제작이 결합된 자유도 높은 2D 샌드박스 게임.",
    "reason": "자유롭게 세계를 탐험하고 자신만의 공간을 만드는 취향과 잘 맞습니다."
  },
  {
    "id": "palworld",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1623730/header.jpg",
    "store": "https://store.steampowered.com/app/1623730/Palworld/",
    "title": "Palworld",
    "genre": "오픈월드 생존",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "탐험형",
      "수집형",
      "생존형",
      "협동형",
      "오픈월드형"
    ],
    "summary": "생물을 수집하고 기지를 만들며 오픈월드를 탐험하는 생존형 게임.",
    "reason": "수집, 탐험, 기지 운영을 함께 즐기고 싶은 사람에게 어울립니다."
  },
  {
    "id": "no-mans-sky",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/275850/header.jpg",
    "store": "https://store.steampowered.com/app/275850/No_Mans_Sky/",
    "title": "No Man’s Sky",
    "genre": "우주 오픈월드 탐험",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "탐험형",
      "오픈월드형",
      "창작형",
      "수집형"
    ],
    "summary": "끝없이 이어지는 행성과 우주를 탐험하고 기지를 건설하는 SF 탐험 게임.",
    "reason": "미지의 행성을 발견하고 자신만의 여정을 만드는 플레이를 좋아한다면 추천됩니다."
  },
  {
    "id": "outer-wilds",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/753640/header.jpg",
    "store": "https://store.steampowered.com/app/753640/Outer_Wilds/",
    "title": "Outer Wilds",
    "genre": "우주 탐험 어드벤처",
    "difficulty": "중간",
    "playTime": "중간",
    "tags": [
      "탐험형",
      "퍼즐형",
      "스토리형",
      "오픈월드형"
    ],
    "summary": "시간 루프 속에서 우주의 비밀을 직접 추리하고 발견하는 탐험 게임.",
    "reason": "공략보다 관찰과 추리로 세계의 진실을 알아가는 경험을 좋아한다면 추천됩니다."
  },
  {
    "id": "hades",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1145360/header.jpg",
    "store": "https://store.steampowered.com/app/1145360/Hades/",
    "title": "Hades",
    "genre": "로그라이트 액션",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": [
      "액션형",
      "스토리형",
      "도전형",
      "반복성장형"
    ],
    "summary": "빠른 전투와 반복 도전 속에서도 캐릭터 서사가 이어지는 로그라이트 게임.",
    "reason": "액션성과 서사, 반복 성장의 균형을 원하는 사람에게 추천됩니다."
  },
  {
    "id": "hades-2",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1145350/header.jpg",
    "store": "https://store.steampowered.com/app/1145350/Hades_II/",
    "title": "Hades II",
    "genre": "로그라이트 액션",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": [
      "액션형",
      "스토리형",
      "도전형",
      "반복성장형"
    ],
    "summary": "그리스 신화를 바탕으로 한 반복 도전형 액션 로그라이트 후속작.",
    "reason": "짧은 도전 속에서 액션, 성장, 캐릭터 서사를 함께 즐기고 싶다면 추천됩니다."
  },
  {
    "id": "dead-cells",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/588650/header.jpg",
    "store": "https://store.steampowered.com/app/588650/Dead_Cells/",
    "title": "Dead Cells",
    "genre": "로그라이트 액션",
    "difficulty": "높음",
    "playTime": "반복",
    "tags": [
      "액션형",
      "도전형",
      "반복성장형"
    ],
    "summary": "빠른 이동과 전투, 매번 달라지는 진행이 특징인 로그라이트 액션 게임.",
    "reason": "실패를 반복하며 조작 실력과 판단력을 키우는 플레이를 좋아한다면 어울립니다."
  },
  {
    "id": "slay-the-spire",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/646570/header.jpg",
    "store": "https://store.steampowered.com/app/646570/Slay_the_Spire/",
    "title": "Slay the Spire",
    "genre": "덱빌딩 로그라이크",
    "difficulty": "중간",
    "playTime": "짧음",
    "tags": [
      "전략형",
      "카드형",
      "도전형",
      "반복성장형"
    ],
    "summary": "카드를 선택하고 덱을 구성하며 첨탑을 오르는 전략 중심 로그라이크 게임.",
    "reason": "짧은 판 안에서 깊은 선택과 전략을 즐기는 사람에게 추천됩니다."
  },
  {
    "id": "balatro",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2379780/header.jpg",
    "store": "https://store.steampowered.com/app/2379780/Balatro/",
    "title": "Balatro",
    "genre": "포커 로그라이크",
    "difficulty": "중간",
    "playTime": "짧음",
    "tags": [
      "전략형",
      "카드형",
      "반복성장형",
      "도전형"
    ],
    "summary": "포커 규칙을 바탕으로 조커와 시너지를 조합하는 덱빌딩 로그라이크.",
    "reason": "간단한 규칙 속에서 강력한 조합을 만드는 재미를 원한다면 추천됩니다."
  },
  {
    "id": "vampire-survivors",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1794680/header.jpg",
    "store": "https://store.steampowered.com/app/1794680/Vampire_Survivors/",
    "title": "Vampire Survivors",
    "genre": "생존 로그라이트",
    "difficulty": "낮음",
    "playTime": "짧음",
    "tags": [
      "액션형",
      "반복성장형",
      "수집형"
    ],
    "summary": "몰려오는 적을 피하며 무기를 성장시키는 간단하지만 중독성 강한 로그라이트.",
    "reason": "짧고 가볍게 반복 성장의 재미를 느끼고 싶다면 잘 맞습니다."
  },
  {
    "id": "hollow-knight",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
    "store": "https://store.steampowered.com/app/367520/Hollow_Knight/",
    "title": "Hollow Knight",
    "genre": "메트로배니아 액션",
    "difficulty": "높음",
    "playTime": "장기",
    "tags": [
      "탐험형",
      "액션형",
      "도전형",
      "스토리형"
    ],
    "summary": "어두운 지하 왕국을 탐험하며 보스전과 세계관을 즐기는 2D 액션 어드벤처.",
    "reason": "깊은 탐험, 숨겨진 서사, 어려운 전투를 즐기는 사람에게 좋습니다."
  },
  {
    "id": "celeste",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg",
    "store": "https://store.steampowered.com/app/504230/Celeste/",
    "title": "Celeste",
    "genre": "플랫포머 액션",
    "difficulty": "높음",
    "playTime": "중간",
    "tags": [
      "도전형",
      "액션형",
      "스토리형",
      "반복성장형"
    ],
    "summary": "정교한 점프 조작과 감정적인 이야기가 결합된 고난도 플랫포머.",
    "reason": "짧은 실패를 반복하며 조금씩 실력이 늘어나는 경험을 좋아한다면 추천됩니다."
  },
  {
    "id": "sanabi",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1562700/header.jpg",
    "store": "https://store.steampowered.com/app/1562700/SANABI/",
    "title": "SANABI",
    "genre": "와이어 액션 플랫포머",
    "difficulty": "중간",
    "playTime": "중간",
    "tags": [
      "액션형",
      "스토리형",
      "도전형"
    ],
    "summary": "빠른 와이어 액션과 강한 연출, 감정적인 서사가 있는 국산 액션 게임.",
    "reason": "스토리 연출과 속도감 있는 액션을 함께 원한다면 잘 맞습니다."
  },
  {
    "id": "skul",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1147560/header.jpg",
    "store": "https://store.steampowered.com/app/1147560/Skul_The_Hero_Slayer/",
    "title": "Skul: The Hero Slayer",
    "genre": "로그라이트 액션",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": [
      "액션형",
      "도전형",
      "반복성장형",
      "수집형"
    ],
    "summary": "머리를 바꿔가며 다양한 전투 스타일을 즐기는 2D 로그라이트 액션.",
    "reason": "매번 다른 조합으로 도전하는 액션 로그라이트를 좋아한다면 추천됩니다."
  },
  {
    "id": "portal-2",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/620/header.jpg",
    "store": "https://store.steampowered.com/app/620/Portal_2/",
    "title": "Portal 2",
    "genre": "퍼즐 어드벤처",
    "difficulty": "중간",
    "playTime": "중간",
    "tags": [
      "퍼즐형",
      "스토리형",
      "협동형"
    ],
    "summary": "포털 장치를 활용해 공간 퍼즐을 풀어나가는 퍼즐 어드벤처 게임.",
    "reason": "전투보다 발상 전환, 공간 이해, 유머 있는 스토리를 좋아한다면 잘 맞습니다."
  },
  {
    "id": "inscryption",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1092790/header.jpg",
    "store": "https://store.steampowered.com/app/1092790/Inscryption/",
    "title": "Inscryption",
    "genre": "카드 퍼즐 호러",
    "difficulty": "중간",
    "playTime": "중간",
    "tags": [
      "카드형",
      "퍼즐형",
      "공포형",
      "스토리형"
    ],
    "summary": "카드 게임, 퍼즐, 메타 호러 연출이 결합된 독특한 게임.",
    "reason": "평범하지 않은 구조와 불길한 분위기, 카드 전략을 좋아한다면 추천됩니다."
  },
  {
    "id": "disco-elysium",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/632470/header.jpg",
    "store": "https://store.steampowered.com/app/632470/Disco_Elysium__The_Final_Cut/",
    "title": "Disco Elysium",
    "genre": "서사형 RPG",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": [
      "스토리형",
      "전략형",
      "RPG형"
    ],
    "summary": "전투보다 대화, 사고, 선택이 중심이 되는 서사형 RPG.",
    "reason": "문장과 선택, 인물의 내면을 깊게 읽는 게임을 좋아한다면 강력 추천됩니다."
  },
  {
    "id": "cult-of-the-lamb",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1313140/header.jpg",
    "store": "https://store.steampowered.com/app/1313140/Cult_of_the_Lamb/",
    "title": "Cult of the Lamb",
    "genre": "컬트 경영 액션",
    "difficulty": "중간",
    "playTime": "중간",
    "tags": [
      "관리형",
      "액션형",
      "창작형",
      "반복성장형"
    ],
    "summary": "던전 액션과 교단 운영을 결합한 독특한 분위기의 게임.",
    "reason": "귀여운 외형과 어두운 설정, 운영과 액션의 조합을 원한다면 잘 맞습니다."
  },
  {
    "id": "deep-rock-galactic",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/548430/header.jpg",
    "store": "https://store.steampowered.com/app/548430/Deep_Rock_Galactic/",
    "title": "Deep Rock Galactic",
    "genre": "협동 채굴 FPS",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": [
      "협동형",
      "액션형",
      "탐험형",
      "전술형"
    ],
    "summary": "드워프 광부들이 동굴을 탐사하며 자원을 캐고 벌레 떼와 싸우는 협동 FPS.",
    "reason": "역할 분담이 뚜렷한 협동 전투와 반복 미션을 좋아한다면 추천됩니다."
  },
  {
    "id": "undertale",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/391540/header.jpg",
    "store": "https://store.steampowered.com/app/391540/UNDERTALE/",
    "title": "UNDERTALE",
    "genre": "인디 RPG",
    "difficulty": "낮음",
    "playTime": "중간",
    "tags": ["인디형", "스토리형", "RPG형", "도전형"],
    "summary": "전투와 선택, 캐릭터 대화가 강하게 기억에 남는 독특한 인디 RPG.",
    "reason": "전투보다 이야기와 캐릭터, 선택의 의미를 중요하게 보는 사람에게 추천됩니다."
  },
  {
    "id": "omori",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1150690/header.jpg",
    "store": "https://store.steampowered.com/app/1150690/OMORI/",
    "title": "OMORI",
    "genre": "심리 서사 RPG",
    "difficulty": "중간",
    "playTime": "중간",
    "tags": ["인디형", "스토리형", "RPG형", "공포형"],
    "summary": "밝은 꿈과 어두운 심리가 교차하는 분위기의 서사 중심 RPG.",
    "reason": "감정적인 서사와 심리적 분위기, 인물의 내면을 따라가는 게임을 원한다면 잘 맞습니다."
  },
  {
    "id": "risk-of-rain-2",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/632360/header.jpg",
    "store": "https://store.steampowered.com/app/632360/Risk_of_Rain_2/",
    "title": "Risk of Rain 2",
    "genre": "로그라이크 액션",
    "difficulty": "높음",
    "playTime": "반복",
    "tags": ["인디형", "액션형", "협동형", "반복성장형", "도전형"],
    "summary": "시간이 지날수록 강해지는 적을 상대로 빌드를 완성해가는 3D 로그라이크 액션.",
    "reason": "반복 플레이, 강해지는 빌드, 친구와 함께하는 액션을 선호한다면 추천됩니다."
  },
  {
    "id": "binding-of-isaac-rebirth",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/250900/header.jpg",
    "store": "https://store.steampowered.com/app/250900/The_Binding_of_Isaac_Rebirth/",
    "title": "The Binding of Isaac: Rebirth",
    "genre": "로그라이크 슈팅",
    "difficulty": "높음",
    "playTime": "반복",
    "tags": ["인디형", "반복성장형", "도전형", "수집형", "액션형"],
    "summary": "무작위 아이템 조합과 던전 구조로 매번 다른 플레이가 만들어지는 로그라이크.",
    "reason": "아이템 조합 연구와 반복 도전, 예측하기 어려운 변수를 좋아한다면 잘 맞습니다."
  },
  {
    "id": "enter-the-gungeon",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/311690/header.jpg",
    "store": "https://store.steampowered.com/app/311690/Enter_the_Gungeon/",
    "title": "Enter the Gungeon",
    "genre": "탄막 로그라이크",
    "difficulty": "높음",
    "playTime": "반복",
    "tags": ["인디형", "액션형", "도전형", "반복성장형"],
    "summary": "총기와 회피, 탄막 액션을 중심으로 한 빠른 템포의 던전 로그라이크.",
    "reason": "반사신경과 회피, 짧고 강한 도전 플레이를 좋아한다면 추천됩니다."
  },
  {
    "id": "cuphead",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/268910/header.jpg",
    "store": "https://store.steampowered.com/app/268910/Cuphead/",
    "title": "Cuphead",
    "genre": "보스 러시 액션",
    "difficulty": "높음",
    "playTime": "반복",
    "tags": ["인디형", "액션형", "도전형", "협동형"],
    "summary": "고전 애니메이션풍 비주얼과 높은 난이도의 보스전이 특징인 액션 게임.",
    "reason": "어려운 보스를 반복해서 공략하는 성취감을 좋아한다면 잘 맞습니다."
  },
  {
    "id": "ori-and-the-will-of-the-wisps",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1057090/header.jpg",
    "store": "https://store.steampowered.com/app/1057090/Ori_and_the_Will_of_the_Wisps/",
    "title": "Ori and the Will of the Wisps",
    "genre": "메트로배니아 액션",
    "difficulty": "중간",
    "playTime": "중간",
    "tags": ["인디형", "탐험형", "액션형", "스토리형"],
    "summary": "아름다운 비주얼과 부드러운 이동, 감성적인 서사가 결합된 탐험 액션 게임.",
    "reason": "맵 탐험과 감성적인 연출, 조작감 좋은 액션을 함께 원한다면 추천됩니다."
  },
  {
    "id": "a-short-hike",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1055540/header.jpg",
    "store": "https://store.steampowered.com/app/1055540/A_Short_Hike/",
    "title": "A Short Hike",
    "genre": "힐링 탐험",
    "difficulty": "낮음",
    "playTime": "짧음",
    "tags": ["인디형", "힐링형", "탐험형"],
    "summary": "섬을 자유롭게 돌아다니며 산 정상으로 향하는 짧고 따뜻한 탐험 게임.",
    "reason": "부담 없는 플레이와 편안한 탐험, 짧은 완성도를 원한다면 잘 맞습니다."
  },
  {
    "id": "baba-is-you",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/736260/header.jpg",
    "store": "https://store.steampowered.com/app/736260/Baba_Is_You/",
    "title": "Baba Is You",
    "genre": "규칙 조작 퍼즐",
    "difficulty": "높음",
    "playTime": "중간",
    "tags": ["인디형", "퍼즐형", "전략형", "도전형"],
    "summary": "문장을 바꿔 게임의 규칙 자체를 바꾸는 독창적인 퍼즐 게임.",
    "reason": "정해진 답을 찾기보다 발상을 뒤집는 퍼즐을 좋아한다면 추천됩니다."
  },
  {
    "id": "return-of-the-obra-dinn",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/653530/header.jpg",
    "store": "https://store.steampowered.com/app/653530/Return_of_the_Obra_Dinn/",
    "title": "Return of the Obra Dinn",
    "genre": "추리 어드벤처",
    "difficulty": "높음",
    "playTime": "중간",
    "tags": ["인디형", "퍼즐형", "스토리형", "전략형"],
    "summary": "유령선의 과거 장면을 단서로 승무원들의 운명을 추리하는 게임.",
    "reason": "관찰과 논리 추론, 조각난 이야기를 맞추는 경험을 좋아한다면 잘 맞습니다."
  },
  {
    "id": "papers-please",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/239030/header.jpg",
    "store": "https://store.steampowered.com/app/239030/Papers_Please/",
    "title": "Papers, Please",
    "genre": "검문 시뮬레이션",
    "difficulty": "중간",
    "playTime": "중간",
    "tags": ["인디형", "관리형", "전략형", "스토리형", "시뮬레이션형"],
    "summary": "입국 심사관이 되어 서류를 확인하고 도덕적 선택을 마주하는 시뮬레이션.",
    "reason": "단순 작업 속 선택의 무게와 관리형 플레이를 좋아한다면 추천됩니다."
  },
  {
    "id": "hotline-miami",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/219150/header.jpg",
    "store": "https://store.steampowered.com/app/219150/Hotline_Miami/",
    "title": "Hotline Miami",
    "genre": "하드코어 액션",
    "difficulty": "높음",
    "playTime": "반복",
    "tags": ["인디형", "액션형", "도전형", "반복성장형"],
    "summary": "빠른 판단과 즉사 구조가 강렬한 탑다운 하드코어 액션 게임.",
    "reason": "짧고 강렬한 액션, 반복 공략으로 실력이 느는 게임을 원한다면 잘 맞습니다."
  },
  {
    "id": "katana-zero",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/460950/header.jpg",
    "store": "https://store.steampowered.com/app/460950/Katana_ZERO/",
    "title": "Katana ZERO",
    "genre": "스타일리시 액션",
    "difficulty": "중간",
    "playTime": "짧음",
    "tags": ["인디형", "액션형", "스토리형", "도전형"],
    "summary": "한 번의 실수가 죽음으로 이어지는 빠른 액션과 네온 누아르 서사가 특징인 게임.",
    "reason": "스타일리시한 연출과 빠른 액션, 짧지만 강한 스토리를 원한다면 추천됩니다."
  },
  {
    "id": "noita",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/881100/header.jpg",
    "store": "https://store.steampowered.com/app/881100/Noita/",
    "title": "Noita",
    "genre": "물리 로그라이크",
    "difficulty": "높음",
    "playTime": "반복",
    "tags": ["인디형", "탐험형", "도전형", "반복성장형", "창작형"],
    "summary": "모든 픽셀이 물리적으로 반응하는 세계에서 마법 조합을 실험하는 로그라이크.",
    "reason": "예측 불가능한 실험, 탐험, 실패를 통한 학습을 좋아한다면 추천됩니다."
  },
  {
    "id": "spiritfarer",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/972660/header.jpg",
    "store": "https://store.steampowered.com/app/972660/Spiritfarer_Farewell_Edition/",
    "title": "Spiritfarer",
    "genre": "힐링 관리 어드벤처",
    "difficulty": "낮음",
    "playTime": "중간",
    "tags": ["인디형", "힐링형", "관리형", "스토리형", "창작형"],
    "summary": "영혼들을 배에 태우고 돌보며 이별을 준비하는 따뜻한 관리형 어드벤처.",
    "reason": "편안한 제작과 관리, 감정적인 이야기를 함께 느끼고 싶다면 추천됩니다."
  },
  {
    "id": "gris",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/683320/header.jpg",
    "store": "https://store.steampowered.com/app/683320/GRIS/",
    "title": "GRIS",
    "genre": "감성 플랫폼 어드벤처",
    "difficulty": "낮음",
    "playTime": "짧음",
    "tags": ["인디형", "스토리형", "힐링형", "탐험형"],
    "summary": "수채화 같은 비주얼과 음악으로 감정을 표현하는 짧은 예술적 어드벤처.",
    "reason": "어려운 조작보다 분위기와 감정, 시각적 연출을 중시한다면 잘 맞습니다."
  },
  {
    "id": "cocoon",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1497440/header.jpg",
    "store": "https://store.steampowered.com/app/1497440/COCOON/",
    "title": "COCOON",
    "genre": "세계 전환 퍼즐",
    "difficulty": "중간",
    "playTime": "짧음",
    "tags": ["인디형", "퍼즐형", "탐험형", "도전형"],
    "summary": "세계 안에 또 다른 세계를 담아 이동하며 문제를 푸는 독창적인 퍼즐 어드벤처.",
    "reason": "짧고 밀도 있는 퍼즐, 말보다 구조로 이해하는 게임을 좋아한다면 추천됩니다."
  },
  {
    "id": "tunic",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/553420/header.jpg",
    "store": "https://store.steampowered.com/app/553420/TUNIC/",
    "title": "TUNIC",
    "genre": "탐험 액션 어드벤처",
    "difficulty": "중간",
    "playTime": "중간",
    "tags": ["인디형", "탐험형", "액션형", "퍼즐형"],
    "summary": "작은 여우가 낯선 세계를 탐험하며 숨겨진 규칙과 비밀을 찾아가는 게임.",
    "reason": "설명 없이 세계를 해석하고 비밀을 발견하는 플레이를 좋아한다면 추천됩니다."
  },
  {
    "id": "dredge",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1562430/header.jpg",
    "store": "https://store.steampowered.com/app/1562430/DREDGE/",
    "title": "DREDGE",
    "genre": "낚시 공포 어드벤처",
    "difficulty": "중간",
    "playTime": "중간",
    "tags": ["인디형", "탐험형", "공포형", "관리형"],
    "summary": "낮에는 낚시와 업그레이드, 밤에는 기묘한 바다의 공포를 마주하는 어드벤처.",
    "reason": "잔잔한 관리와 탐험 속에서 서서히 불안해지는 분위기를 좋아한다면 추천됩니다."
  },
  {
    "id": "slime-rancher",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/433340/header.jpg",
    "store": "https://store.steampowered.com/app/433340/Slime_Rancher/",
    "title": "Slime Rancher",
    "genre": "농장 탐험 시뮬레이션",
    "difficulty": "낮음",
    "playTime": "중간",
    "tags": ["인디형", "힐링형", "탐험형", "관리형", "수집형"],
    "summary": "귀여운 슬라임을 수집하고 목장을 확장하는 밝은 분위기의 탐험 게임.",
    "reason": "귀여운 수집과 목장 운영, 부담 없는 탐험을 좋아한다면 추천됩니다."
  },
  {
    "id": "oxygen-not-included",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/457140/header.jpg",
    "store": "https://store.steampowered.com/app/457140/Oxygen_Not_Included/",
    "title": "Oxygen Not Included",
    "genre": "기지 관리 시뮬레이션",
    "difficulty": "높음",
    "playTime": "장기",
    "tags": ["인디형", "관리형", "생존형", "전략형", "시뮬레이션형"],
    "summary": "산소, 온도, 자원 순환을 관리하며 지하 기지를 유지하는 생존 시뮬레이션.",
    "reason": "복잡한 자원 관리와 시스템 최적화를 좋아한다면 강하게 추천됩니다."
  },
  {
    "id": "against-the-storm",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1336490/header.jpg",
    "store": "https://store.steampowered.com/app/1336490/Against_the_Storm/",
    "title": "Against the Storm",
    "genre": "로그라이트 도시 건설",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": ["인디형", "건축형", "관리형", "전략형", "반복성장형"],
    "summary": "매번 다른 조건의 정착지를 운영하는 로그라이트 도시 건설 게임.",
    "reason": "도시 건설과 반복 도전, 제한된 자원 속 최적화를 좋아한다면 잘 맞습니다."
  },
  {
    "id": "loop-hero",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1282730/header.jpg",
    "store": "https://store.steampowered.com/app/1282730/Loop_Hero/",
    "title": "Loop Hero",
    "genre": "덱 기반 자동전투 RPG",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": ["인디형", "전략형", "카드형", "반복성장형", "RPG형"],
    "summary": "카드를 배치해 세계를 구성하고 자동 전투를 통해 성장하는 독특한 루프형 RPG.",
    "reason": "직접 조작보다 빌드 설계와 반복 성장을 즐긴다면 추천됩니다."
  },
  {
    "id": "darkest-dungeon",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/262060/header.jpg",
    "store": "https://store.steampowered.com/app/262060/Darkest_Dungeon/",
    "title": "Darkest Dungeon",
    "genre": "고난도 턴제 RPG",
    "difficulty": "높음",
    "playTime": "장기",
    "tags": ["인디형", "전략형", "도전형", "RPG형", "공포형"],
    "summary": "스트레스와 죽음, 파티 관리가 중요한 어두운 분위기의 턴제 RPG.",
    "reason": "위험한 선택, 캐릭터 손실, 긴장감 있는 전략 플레이를 좋아한다면 잘 맞습니다."
  },
  {
    "id": "geometry-dash",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/322170/header.jpg",
    "store": "https://store.steampowered.com/app/322170/Geometry_Dash/",
    "title": "Geometry Dash",
    "genre": "리듬 플랫폼 액션",
    "difficulty": "높음",
    "playTime": "반복",
    "tags": ["인디형", "액션형", "도전형", "반복성장형"],
    "summary": "음악에 맞춰 장애물을 피하며 반복 도전하는 리듬 기반 플랫폼 게임.",
    "reason": "짧은 실패와 재도전을 반복하며 실력이 늘어나는 게임을 선호한다면 추천됩니다."
  },
  {
    "id": "pizza-tower",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2231450/header.jpg",
    "store": "https://store.steampowered.com/app/2231450/Pizza_Tower/",
    "title": "Pizza Tower",
    "genre": "고속 플랫폼 액션",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": ["인디형", "액션형", "도전형", "반복성장형"],
    "summary": "광기 어린 속도감과 개성 강한 애니메이션이 특징인 플랫폼 액션 게임.",
    "reason": "빠른 이동과 랭크 도전, 과장된 연출의 액션을 좋아한다면 잘 맞습니다."
  },
  {
    "id": "ultrakill",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1229490/header.jpg",
    "store": "https://store.steampowered.com/app/1229490/ULTRAKILL/",
    "title": "ULTRAKILL",
    "genre": "하이퍼 FPS 액션",
    "difficulty": "높음",
    "playTime": "반복",
    "tags": ["인디형", "액션형", "도전형", "반복성장형"],
    "summary": "빠른 이동과 무기 조합, 스타일 점수가 핵심인 초고속 FPS 액션.",
    "reason": "속도감, 실력 향상, 공격적인 플레이를 중시한다면 추천됩니다."
  },
  {
    "id": "case-of-the-golden-idol",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1677770/header.jpg",
    "store": "https://store.steampowered.com/app/1677770/The_Case_of_the_Golden_Idol/",
    "title": "The Case of the Golden Idol",
    "genre": "추리 퍼즐",
    "difficulty": "중간",
    "playTime": "중간",
    "tags": ["인디형", "퍼즐형", "스토리형", "전략형"],
    "summary": "사건 현장을 관찰하고 단어를 조합해 진상을 완성하는 추리 퍼즐 게임.",
    "reason": "단서 해석과 논리적 추리, 기묘한 사건 기록을 좋아한다면 추천됩니다."
  },
  {
    "id": "animal-well",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/813230/header.jpg",
    "store": "https://store.steampowered.com/app/813230/ANIMAL_WELL/",
    "title": "ANIMAL WELL",
    "genre": "비밀 탐험 퍼즐",
    "difficulty": "중간",
    "playTime": "중간",
    "tags": ["인디형", "탐험형", "퍼즐형", "도전형"],
    "summary": "어두운 우물 속에서 도구와 관찰력으로 비밀을 찾아가는 퍼즐 탐험 게임.",
    "reason": "전투보다 관찰과 비밀 찾기, 분위기 있는 탐험을 좋아한다면 잘 맞습니다."
  },
  {
    "id": "nine-sols",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1809540/header.jpg",
    "store": "https://store.steampowered.com/app/1809540/Nine_Sols/",
    "title": "Nine Sols",
    "genre": "패링 액션 메트로배니아",
    "difficulty": "높음",
    "playTime": "중간",
    "tags": ["인디형", "액션형", "도전형", "스토리형", "탐험형"],
    "summary": "동양 SF 분위기와 패링 중심 전투가 특징인 고난도 액션 탐험 게임.",
    "reason": "정교한 보스전과 세계관, 탐험형 액션을 함께 원한다면 추천됩니다."
  },
  {
    "id": "chants-of-sennaar",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1931770/header.jpg",
    "store": "https://store.steampowered.com/app/1931770/Chants_of_Sennaar/",
    "title": "Chants of Sennaar",
    "genre": "언어 해독 퍼즐",
    "difficulty": "중간",
    "playTime": "중간",
    "tags": ["인디형", "퍼즐형", "스토리형", "탐험형"],
    "summary": "낯선 문자를 해독하며 탑의 여러 문화를 연결하는 언어 퍼즐 어드벤처.",
    "reason": "세계관을 해석하고 언어의 의미를 추리하는 게임을 좋아한다면 추천됩니다."
  }
  ,
  {
    "id": "helldivers-2",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/553850/header.jpg",
    "store": "https://store.steampowered.com/app/553850/HELLDIVERS_2/",
    "title": "HELLDIVERS 2",
    "genre": "협동 슈팅",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": ["협동형", "액션형", "전술형", "도전형"],
    "summary": "분대원과 함께 임무를 수행하고 대규모 적을 상대하는 협동 PvE 슈팅 게임.",
    "reason": "친구와 역할을 나누고 혼란스러운 전장을 함께 돌파하는 플레이를 좋아한다면 추천됩니다."
  },
  {
    "id": "path-of-exile-2",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2694490/header.jpg",
    "store": "https://store.steampowered.com/app/2694490/Path_of_Exile_2/",
    "title": "Path of Exile 2",
    "genre": "액션 RPG",
    "difficulty": "높음",
    "playTime": "장기",
    "tags": ["RPG형", "액션형", "반복성장형", "도전형"],
    "summary": "복잡한 빌드와 장비 파밍, 액션 전투를 중심으로 한 핵앤슬래시 RPG.",
    "reason": "깊은 성장 시스템과 반복 파밍, 캐릭터 빌드 연구를 좋아한다면 잘 맞습니다."
  },
  {
    "id": "lies-of-p",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1627720/header.jpg",
    "store": "https://store.steampowered.com/app/1627720/Lies_of_P/",
    "title": "Lies of P",
    "genre": "소울라이크 액션",
    "difficulty": "높음",
    "playTime": "중간",
    "tags": ["액션형", "도전형", "스토리형", "RPG형"],
    "summary": "피노키오 모티브의 어두운 세계관과 정교한 전투가 특징인 소울라이크 액션 게임.",
    "reason": "강한 보스전, 어두운 분위기, 성장형 액션을 선호한다면 추천됩니다."
  },
  {
    "id": "no-mans-sky",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/275850/header.jpg",
    "store": "https://store.steampowered.com/app/275850/No_Mans_Sky/",
    "title": "No Man's Sky",
    "genre": "우주 탐험 생존",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": ["탐험형", "생존형", "창작형", "오픈월드형"],
    "summary": "수많은 행성을 탐험하고 기지를 건설하며 우주를 여행하는 오픈월드 생존 게임.",
    "reason": "자유로운 탐험과 건축, 긴 호흡의 우주 여행을 좋아한다면 잘 맞습니다."
  },
  {
    "id": "sea-of-thieves",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1172620/header.jpg",
    "store": "https://store.steampowered.com/app/1172620/Sea_of_Thieves_2024_Edition/",
    "title": "Sea of Thieves",
    "genre": "해적 협동 어드벤처",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": ["협동형", "탐험형", "오픈월드형", "액션형"],
    "summary": "해적이 되어 항해, 보물 사냥, 해상 전투를 즐기는 협동 어드벤처 게임.",
    "reason": "친구와 함께 예측 불가능한 모험과 역할 분담을 즐기고 싶다면 추천됩니다."
  },
  {
    "id": "manor-lords",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1363080/header.jpg",
    "store": "https://store.steampowered.com/app/1363080/Manor_Lords/",
    "title": "Manor Lords",
    "genre": "중세 도시 건설 전략",
    "difficulty": "중간",
    "playTime": "장기",
    "tags": ["전략형", "건축형", "관리형", "시뮬레이션형"],
    "summary": "중세 마을을 건설하고 자원과 전투를 관리하는 도시 건설 전략 게임.",
    "reason": "도시 운영, 자원 관리, 성장 과정을 차분히 설계하는 플레이를 좋아한다면 추천됩니다."
  },
  {
    "id": "dave-the-diver",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1868140/header.jpg",
    "store": "https://store.steampowered.com/app/1868140/DAVE_THE_DIVER/",
    "title": "DAVE THE DIVER",
    "genre": "해양 탐험 경영",
    "difficulty": "낮음",
    "playTime": "중간",
    "tags": ["인디형", "탐험형", "관리형", "힐링형"],
    "summary": "낮에는 바다를 탐험하고 밤에는 초밥집을 운영하는 탐험 경영 게임.",
    "reason": "부담 없는 탐험과 수집, 가벼운 경영 요소를 함께 즐기고 싶다면 추천됩니다."
  },
  {
    "id": "brotato",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/1942280/header.jpg",
    "store": "https://store.steampowered.com/app/1942280/Brotato/",
    "title": "Brotato",
    "genre": "아레나 로그라이트",
    "difficulty": "중간",
    "playTime": "단기",
    "tags": ["인디형", "반복성장형", "액션형", "도전형"],
    "summary": "짧은 웨이브 전투 속에서 무기와 능력을 조합하는 아레나 로그라이트 게임.",
    "reason": "짧고 빠른 반복 플레이와 빌드 조합의 재미를 좋아한다면 추천됩니다."
  },
  {
    "id": "the-finals",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2073850/header.jpg",
    "store": "https://store.steampowered.com/app/2073850/THE_FINALS/",
    "title": "THE FINALS",
    "genre": "팀 기반 FPS",
    "difficulty": "중간",
    "playTime": "반복",
    "tags": ["경쟁형", "협동형", "액션형", "전술형"],
    "summary": "파괴 가능한 전장에서 팀 단위 목표를 수행하는 빠른 템포의 경쟁 FPS.",
    "reason": "팀 전술과 역동적인 전투, 경쟁적인 슈팅을 선호한다면 추천됩니다."
  },
  {
    "id": "content-warning",
    "image": "https://cdn.akamai.steamstatic.com/steam/apps/2881650/header.jpg",
    "store": "https://store.steampowered.com/app/2881650/Content_Warning/",
    "title": "Content Warning",
    "genre": "협동 공포",
    "difficulty": "중간",
    "playTime": "단기",
    "tags": ["인디형", "공포형", "협동형", "탐험형"],
    "summary": "친구와 함께 괴이한 장소를 촬영하고 살아 돌아오는 협동 공포 게임.",
    "reason": "친구와 웃기면서도 무서운 상황을 함께 겪는 플레이를 좋아한다면 추천됩니다."
  }

];

const questions = [
  {
    title: "게임에서 가장 중요하게 보는 요소는?",
    answers: [
      { text: "깊이 있는 전략과 선택", scores: { "전략형": 3, "전술형": 1 }, genres: { "전략": 2 } },
      { text: "빠르고 시원한 액션", scores: { "액션형": 3, "도전형": 1 }, genres: { "액션": 2 } },
      { text: "몰입되는 스토리와 연출", scores: { "스토리형": 3, "RPG형": 1 }, genres: { "스토리": 2, "RPG": 1 } },
      { text: "자유로운 탐험과 발견", scores: { "탐험형": 3, "오픈월드형": 1 }, genres: { "어드벤처": 2 } }
    ]
  },
  {
    title: "선호하는 플레이 방식은?",
    answers: [
      { text: "혼자 오래 몰입하기", scores: { "스토리형": 1, "탐험형": 1 }, playTime: { "장기": 2, "중간": 1 } },
      { text: "친구와 함께 즐기기", scores: { "협동형": 3 }, playTime: { "반복": 1 }, genres: { "협동": 2 } },
      { text: "다른 유저와 경쟁하기", scores: { "경쟁형": 3, "전술형": 1 }, playTime: { "반복": 2 }, genres: { "FPS": 1, "MOBA": 1 } },
      { text: "짧게 여러 번 도전하기", scores: { "반복성장형": 3, "도전형": 1 }, playTime: { "단기": 2, "반복": 2 } }
    ]
  },
  {
    title: "입문 난이도는 어느 정도가 좋은가?",
    answers: [
      { text: "낮은 난이도로 편안하게 즐기고 싶다", scores: { "힐링형": 3 }, difficulty: { "낮음": 3 } },
      { text: "적당히 배우면서 즐기고 싶다", scores: { "탐험형": 1, "스토리형": 1 }, difficulty: { "중간": 3 } },
      { text: "어려워도 성취감이 있으면 좋다", scores: { "도전형": 3 }, difficulty: { "높음": 2, "중간": 1 } },
      { text: "진입장벽이 높아도 깊이가 있으면 좋다", scores: { "전략형": 2, "도전형": 2 }, difficulty: { "높음": 3 } }
    ]
  },
  {
    title: "가장 끌리는 분위기는?",
    answers: [
      { text: "밝고 여유로운 분위기", scores: { "힐링형": 3, "창작형": 1 }, genres: { "힐링": 2 } },
      { text: "어둡고 긴장감 있는 분위기", scores: { "공포형": 2, "생존형": 2 }, genres: { "공포": 2, "생존": 1 } },
      { text: "감정적인 서사가 있는 분위기", scores: { "스토리형": 3, "인디형": 1 }, genres: { "스토리": 2, "인디": 1 } },
      { text: "내가 직접 이야기를 만드는 분위기", scores: { "창작형": 3, "관리형": 1 }, genres: { "시뮬레이션": 1 } }
    ]
  },
  {
    title: "게임 속에서 가장 해보고 싶은 행동은?",
    answers: [
      { text: "기지를 만들고 자원을 관리한다", scores: { "관리형": 2, "생존형": 2, "건축형": 1 }, genres: { "생존": 1, "시뮬레이션": 1 } },
      { text: "강한 적에게 계속 도전한다", scores: { "액션형": 2, "도전형": 3 }, genres: { "액션": 2 } },
      { text: "맵 구석구석을 탐험한다", scores: { "탐험형": 3, "오픈월드형": 1 }, genres: { "어드벤처": 1 } },
      { text: "카드, 장비, 빌드를 조합한다", scores: { "카드형": 3, "전략형": 2 }, genres: { "카드": 2, "전략": 1 } }
    ]
  },
  {
    title: "한 번 플레이할 때 선호하는 시간은?",
    answers: [
      { text: "짧게 한 판씩 끝나는 게임", scores: { "반복성장형": 2 }, playTime: { "단기": 3, "반복": 1 } },
      { text: "30분에서 1시간 정도 적당히", scores: { "액션형": 1, "탐험형": 1 }, playTime: { "중간": 3 } },
      { text: "몇 시간씩 깊게 몰입하는 게임", scores: { "RPG형": 1, "스토리형": 1 }, playTime: { "장기": 3 } },
      { text: "매번 다시 시작해도 재미있는 게임", scores: { "반복성장형": 3, "도전형": 1 }, playTime: { "반복": 3 } }
    ]
  },
  {
    title: "친구와 게임을 한다면 어떤 쪽이 좋은가?",
    answers: [
      { text: "같이 목표를 달성하는 협동", scores: { "협동형": 3 }, genres: { "협동": 2 } },
      { text: "서로 실력을 겨루는 경쟁", scores: { "경쟁형": 3, "전술형": 1 }, genres: { "FPS": 1, "MOBA": 1 } },
      { text: "같이 무서운 곳을 탐험", scores: { "공포형": 2, "협동형": 2 }, genres: { "공포": 2, "협동": 1 } },
      { text: "혼자 하는 편이 더 좋다", scores: { "스토리형": 1, "전략형": 1 }, playTime: { "장기": 1 } }
    ]
  },
  {
    title: "가장 마음에 드는 보상은?",
    answers: [
      { text: "강력한 장비와 캐릭터 성장", scores: { "반복성장형": 2, "RPG형": 2 }, genres: { "RPG": 2 } },
      { text: "새로운 이야기와 엔딩", scores: { "스토리형": 3 }, genres: { "스토리": 2 } },
      { text: "새로운 지역과 숨겨진 발견", scores: { "탐험형": 3 }, genres: { "어드벤처": 1 } },
      { text: "효율적인 빌드와 시스템 완성", scores: { "전략형": 2, "자동화형": 2 }, genres: { "전략": 1, "시뮬레이션": 1 } }
    ]
  },
  {
    title: "대형 인기작과 인디게임 중 더 끌리는 쪽은?",
    answers: [
      { text: "완성도 높은 대형 인기작", scores: { "오픈월드형": 1, "RPG형": 1 }, genres: { "AAA": 2 } },
      { text: "개성이 강한 인디게임", scores: { "인디형": 3, "스토리형": 1 }, genres: { "인디": 2 } },
      { text: "상관없이 추천이 정확하면 된다", scores: { "탐험형": 1, "전략형": 1 }, genres: { "균형": 1 } },
      { text: "유명하지 않아도 독특한 시스템이면 좋다", scores: { "인디형": 2, "퍼즐형": 1, "자동화형": 1 }, genres: { "인디": 1, "퍼즐": 1 } }
    ]
  },
  {
    title: "반복 플레이에 대한 선호는?",
    answers: [
      { text: "한 번의 강한 경험과 엔딩이 중요하다", scores: { "스토리형": 3, "인디형": 1 }, playTime: { "중간": 1, "장기": 1 }, genres: { "스토리": 2 } },
      { text: "반복하면서 빌드와 실력이 쌓이는 게 좋다", scores: { "반복성장형": 3, "도전형": 1 }, playTime: { "반복": 3 }, genres: { "액션": 1 } },
      { text: "매판 다른 변수가 생기는 게임이 좋다", scores: { "전략형": 1, "카드형": 1, "반복성장형": 2 }, playTime: { "반복": 2 }, genres: { "전략": 1, "카드": 1 } },
      { text: "꾸준히 키우고 관리하는 장기 플레이가 좋다", scores: { "관리형": 2, "창작형": 1, "시뮬레이션형": 1 }, playTime: { "장기": 3 }, genres: { "시뮬레이션": 2 } }
    ]
  },
  {
    title: "게임의 자유도는 어느 정도가 좋은가?",
    answers: [
      { text: "정해진 흐름을 따라가는 구성이 좋다", scores: { "스토리형": 2, "액션형": 1 }, genres: { "스토리": 1, "액션": 1 } },
      { text: "목표는 있지만 선택지는 여러 개였으면 좋겠다", scores: { "RPG형": 2, "탐험형": 1 }, genres: { "RPG": 1, "어드벤처": 1 } },
      { text: "넓은 세계를 자유롭게 돌아다니고 싶다", scores: { "오픈월드형": 3, "탐험형": 2 }, genres: { "어드벤처": 2, "RPG": 1 } },
      { text: "내가 직접 만들고 실험하는 자유도가 좋다", scores: { "창작형": 2, "건축형": 2, "자동화형": 1 }, genres: { "시뮬레이션": 2 } }
    ]
  },
  {
    title: "가장 피하고 싶은 요소는?",
    answers: [
      { text: "너무 복잡한 시스템과 높은 진입장벽", scores: { "힐링형": 2, "스토리형": 1 }, difficulty: { "낮음": 2, "중간": 1 } },
      { text: "반응속도와 피지컬을 많이 요구하는 전투", scores: { "전략형": 2, "퍼즐형": 1 }, genres: { "전략": 1, "퍼즐": 1 } },
      { text: "혼자 오래 해야 하는 고립감", scores: { "협동형": 2, "경쟁형": 1 }, genres: { "협동": 1 } },
      { text: "느린 진행과 반복 작업", scores: { "액션형": 2, "도전형": 1 }, playTime: { "단기": 1, "반복": 1 }, genres: { "액션": 1 } }
    ]
  }

];