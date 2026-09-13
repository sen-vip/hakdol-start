const tools = [
  {
    id: "monthly-tasks",
    name: "일정",
    category: "일정·루틴",
    description: "이번 달 학교 행정업무와 학사일정을 한 화면에서 확인하고 처리상태까지 관리합니다.",
    tags: ["일정", "월별업무", "업무판", "달력", "학사일정"],
    status: "운영중",
    icon: "📅",
    url: "https://sen-vip.github.io/hakdol-monthly-tasks/",
    updated: "2026.08"
  },
  {
    id: "routine",
    name: "루틴",
    category: "일정·루틴",
    description: "시기별·상황별 반복업무를 찾아보고 우리 학교 주기까지 정리하는 업무 탐색 도구입니다.",
    tags: ["루틴", "반복업무", "주기", "업무탐색", "체크"],
    status: "운영중",
    icon: "🧭",
    url: "https://sen-vip.github.io/hakdol-routine/",
    updated: "2026.08"
  },
  {
    id: "annual-contract",
    name: "연간계약보드",
    category: "일정·루틴",
    description: "연간 계약과 만료일, 금액, 업체 정보를 한눈에 관리하는 계약 일정 보드입니다.",
    tags: ["계약", "만료일", "자동이체", "연간계약", "일정"],
    status: "운영중",
    icon: "📋",
    url: "https://sen-vip.github.io/annual-contract-board/",
    updated: "2026.06"
  },
  {
    id: "gongmun-fit",
    name: "공문핏",
    category: "문서·업무지원",
    description: "공문의 관련·본문·가나다 순번·붙임 번호를 빠르게 정리하는 공문 작성 보조 도구입니다.",
    tags: ["공문", "공문정리", "기안", "가나다", "순번", "붙임", "문서"],
    status: "운영중",
    icon: "📝",
    url: "https://sen-vip.github.io/gongmun-fit/",
    updated: "2026.08",
    isNew: false
  },
  {
    id: "jechul-moa",
    name: "제출모아",
    category: "문서·업무지원",
    description: "제출 파일을 모으고 미제출·보완대상을 확인하며 파일 정리를 돕는 도구입니다.",
    tags: ["제출", "파일정리", "미제출", "수합", "취합"],
    status: "운영중",
    icon: "📥",
    url: "https://sen-vip.github.io/jechul-moa/",
    updated: "2026.07"
  },
  {
    id: "inside-travel-kockgum",
    name: "관내여비콕검",
    category: "문서·업무지원",
    description: "출장지와 학교 사이 거리를 바탕으로 관내여비 확인 포인트를 빠르게 점검합니다.",
    tags: ["관내여비", "출장", "거리", "여비", "콕검"],
    status: "운영중",
    icon: "📍",
    url: "https://inside-travel-kockgum.vercel.app/",
    updated: "2026.08"
  },
  {
    id: "overtime",
    name: "초근누구",
    category: "인사·급여",
    description: "초과근무 자료와 특근매식비 사용내역을 비교해 확인할 대상을 빠르게 찾습니다.",
    tags: ["초과근무", "초근", "특근매식비", "급여", "확인"],
    status: "운영중",
    icon: "🌙",
    url: "https://sen-vip.github.io/chogeun-nugu/",
    updated: "2026.08"
  },
  {
    id: "career-certificate",
    name: "경력증명 자동화",
    category: "인사·급여",
    description: "경력대장 엑셀을 불러와 자료를 점검하고 경력증명서를 자동 작성·출력합니다.",
    tags: ["경력증명", "경력대장", "발령대장", "증명서", "인사"],
    status: "NEW",
    icon: "📄",
    url: "https://sen-vip.github.io/career-certificate/",
    updated: "2026.08",
    isNew: true
  },
  {
    id: "payroll-overtime-converter",
    name: "급여용 초과근무 변환기",
    category: "인사·급여",
    description: "세콤매니저 출입기록을 급여·초과근무 확인에 쓰기 좋은 형식으로 변환합니다. 상세 설명은 블로그에서 연결할 예정입니다.",
    tags: ["급여", "초과근무", "세콤", "에스원", "변환", "블로그"],
    status: "준비중",
    icon: "⏱️",
    url: "",
    updated: "준비중"
  },
  {
    id: "contract-kockgum",
    name: "계약콕검",
    category: "계약·구매",
    description: "계약 구비서류를 기준 순서대로 빠르게 확인하는 계약 서류 점검 도구입니다.",
    tags: ["계약", "구비서류", "서류", "점검", "콕검"],
    status: "운영중",
    icon: "📑",
    url: "https://sen-vip.github.io/contract-kockgum/",
    updated: "2026.08"
  },
  {
    id: "contract-doc-support",
    name: "계약서류 작성지원(업체용)",
    category: "계약·구매",
    description: "업체가 계약 단계에서 제출할 서약서·체크리스트·동의서 등을 입력하고 출력하도록 돕습니다.",
    tags: ["계약서류", "업체용", "서약서", "체크리스트", "계약"],
    status: "운영중",
    icon: "✍️",
    url: "https://sen-vip.github.io/contract-doc-support/",
    updated: "2026.08"
  },
  {
    id: "poomshot",
    name: "품샷",
    category: "계약·구매",
    description: "견적서 PDF를 바탕으로 품의서 본문과 에듀파인 업로드용 엑셀 작성을 돕는 도구입니다.",
    tags: ["품샷", "견적서", "품의", "에듀파인", "엑셀", "구매"],
    status: "비공개",
    icon: "📸",
    url: "",
    updated: "비공개"
  },
  {
    id: "insur-kockgum",
    name: "보험콕검",
    category: "계약·구매",
    description: "화재·배상·여행자보험 등 주요 보험 서류 확인을 돕는 체크 도구입니다.",
    tags: ["보험", "체크리스트", "서류", "점검", "콕검"],
    status: "운영중",
    icon: "🛡️",
    url: "https://sen-vip.github.io/boheom-kockgum/",
    updated: "2026.06"
  },
  {
    id: "bus-kockgum",
    name: "버스콕검",
    category: "계약·구매",
    description: "현장체험학습·수련활동 버스 임차 제출서류를 단계별로 확인합니다.",
    tags: ["버스", "수련활동", "현장체험학습", "서류점검", "콕검"],
    status: "운영중",
    icon: "🚌",
    url: "https://sen-vip.github.io/bus-kockgum/",
    updated: "2026.06"
  },
  {
    id: "budget-visualizer",
    name: "학교회계 예산현황판",
    category: "예산·회계",
    description: "복잡한 학교예산을 시각화해 예산 현황·집행·예상 잔액을 더 쉽게 확인합니다.",
    tags: ["학교회계", "예산", "예산현황판", "예산잔액", "잔액", "예상잔액", "집행", "결산", "사업관리카드", "102-2"],
    status: "운영중",
    icon: "📊",
    url: "https://budget-visualizer-delta.vercel.app/",
    updated: "2026.09"
  },
  {
    id: "school-card-map",
    name: "학교카드(서울)",
    category: "예산·회계",
    description: "서울 학교 업무에 맞춰 학교카드 사용처와 관련 정보를 빠르게 확인하는 도구입니다.",
    tags: ["학교카드", "서울", "카드", "업무추진비", "법카"],
    status: "운영중",
    icon: "💳",
    url: "https://school-card-map.vercel.app/",
    updated: "2026.08"
  },
  {
    id: "edu-card-map",
    name: "교육청 법카맵(서울)",
    category: "예산·회계",
    description: "서울교육 업무추진비 공개자료를 지도와 표로 확인하는 도구입니다.",
    tags: ["교육청", "법카", "서울", "업무추진비", "지도"],
    status: "운영중",
    icon: "🏛️",
    url: "https://edu-card-map.vercel.app/",
    updated: "2026.08"
  },
  {
    id: "construction-hub",
    name: "공사허브",
    category: "공사·시설",
    description: "학교 공사의 계약·착공·준공·하자 단계별 행정서류를 한 흐름에서 확인하고 작성합니다.",
    tags: ["공사", "시설", "착공", "준공", "준공서류", "하자", "행정서류"],
    status: "운영중",
    icon: "🏗️",
    url: "https://construction-info-hub.vercel.app/",
    updated: "2026.08"
  },
  {
    id: "today-school",
    name: "오늘학교",
    category: "학교생활",
    description: "오늘의 시간표·급식·학사일정을 한 화면에서 확인하는 학교생활 도구입니다.",
    tags: ["오늘학교", "학사일정", "급식", "시간표", "학생"],
    status: "운영중",
    icon: "🏫",
    url: "https://sen-vip.github.io/school-life-calendar/",
    updated: "2026.08"
  },
  {
    id: "my-child-school",
    name: "우리아이 오늘",
    category: "학교생활",
    description: "자녀의 학교를 등록해 오늘 일정·급식·시간표를 빠르게 확인하는 학부모용 도구입니다.",
    tags: ["우리아이", "학부모", "급식", "시간표", "학사일정"],
    status: "운영중",
    icon: "🏡",
    url: "https://sen-vip.github.io/my-child-today/",
    updated: "2026.08"
  },
  {
    id: "ansa",
    name: "안 샀다",
    category: "🧪 실험실",
    description: "가짜 쇼핑과 배송 시뮬레이션으로 소비 충동을 잠깐 식히는 개인 실험 도구입니다.",
    tags: ["실험", "소비", "시뮬레이션", "안샀다"],
    status: "실험중",
    icon: "🛍️",
    url: "https://sen-vip.github.io/ansa/",
    updated: "2026.07"
  }
];

const WORK_GROUPS = [
  {
    id: "routine",
    name: "업무 시작·루틴",
    description: "오늘과 연간 업무 흐름을 먼저",
    toolIds: ["monthly-tasks", "routine", "annual-contract"]
  },
  {
    id: "budget",
    name: "예산·회계",
    description: "예산·카드·업무추진비를 판단하기 쉽게",
    toolIds: ["budget-visualizer", "school-card-map", "edu-card-map"]
  },
  {
    id: "contract",
    name: "계약·공사·보험",
    description: "계약부터 공사·보험·버스 서류까지",
    toolIds: ["contract-kockgum", "contract-doc-support", "poomshot", "construction-hub", "insur-kockgum", "bus-kockgum"]
  },
  {
    id: "document",
    name: "문서·인사",
    description: "공문·제출·출장·초과근무·경력 실무",
    toolIds: ["gongmun-fit", "jechul-moa", "inside-travel-kockgum", "overtime", "career-certificate", "payroll-overtime-converter"]
  }
];

const LIFE_TOOL_IDS = ["today-school", "my-child-school"];
const LAB_TOOL_IDS = ["ansa"];

const FEATURED_IDS = [
  "monthly-tasks",
  "gongmun-fit",
  "budget-visualizer",
  "construction-hub",
  "contract-kockgum",
  "insur-kockgum"
];

const legacyFavorites = localStorage.getItem("hakdolham:favorites");
const state = {
  query: "",
  favoriteOnly: false,
  favorites: new Set(JSON.parse(localStorage.getItem("hakdol-start:favorites") || legacyFavorites || "[]").filter(id => tools.some(tool => tool.id === id)))
};

const featuredGrid = document.querySelector("#featuredGrid");
const grid = document.querySelector("#toolGrid");
const lifeGrid = document.querySelector("#lifeToolGrid");
const labGrid = document.querySelector("#labToolGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#searchInput");
const clearSearchBtn = document.querySelector("#clearSearchBtn");
const searchResults = document.querySelector("#searchResults");
const searchResultList = document.querySelector("#searchResultList");
const searchResultCount = document.querySelector("#searchResultCount");
const searchNoResult = document.querySelector("#searchNoResult");
const favoriteOnlyBtn = document.querySelector("#favoriteOnlyBtn");
const totalCount = document.querySelector("#totalCount");
const favoriteCount = document.querySelector("#favoriteCount");

function disabledLabel(tool) {
  if (tool.status === "비공개") return "비공개";
  if (tool.status === "링크 준비중") return "링크 준비중";
  return "준비중";
}

function saveFavorites() {
  localStorage.setItem("hakdol-start:favorites", JSON.stringify([...state.favorites]));
}

function normalize(text) {
  return String(text).toLowerCase().replace(/\s+/g, "");
}

function matchesQuery(tool, query = state.query) {
  if (!query) return true;
  const haystack = normalize([
    tool.name,
    tool.category,
    tool.description,
    tool.status,
    ...tool.tags
  ].join(" "));
  return haystack.includes(normalize(query));
}

function highlightText(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (!escaped) return text;
  return String(text).replace(new RegExp(`(${escaped})`, "ig"), "<mark>$1</mark>");
}

function renderFeaturedTools() {
  if (!featuredGrid) return;
  featuredGrid.innerHTML = FEATURED_IDS
    .map(id => tools.find(tool => tool.id === id))
    .filter(Boolean)
    .map(tool => `
      <a class="featured-card" href="${tool.url}" target="_blank" rel="noopener noreferrer" data-open-tool="${tool.id}">
        <span class="featured-icon" aria-hidden="true">${tool.icon}</span>
        <span class="featured-copy">
          <span class="featured-title-row">
            <strong>${tool.name}</strong>
            ${tool.isNew ? '<em class="new-badge">NEW</em>' : ''}
          </span>
          <small>${tool.description}</small>
        </span>
        <span class="featured-arrow" aria-hidden="true">→</span>
      </a>
    `).join("");
}

function renderToolCard(tool) {
  const isFavorite = state.favorites.has(tool.id);
  const action = tool.url
    ? `<a class="tool-card-link" href="${tool.url}" target="_blank" rel="noopener noreferrer" data-open-tool="${tool.id}">
        <span class="compact-tool-icon" aria-hidden="true">${tool.icon}</span>
        <span class="compact-tool-copy">
          <strong>${tool.name}${tool.isNew ? ' <em class="inline-new-badge">NEW</em>' : ''}</strong>
          <small>${tool.description}</small>
        </span>
        <span class="compact-tool-arrow" aria-hidden="true">→</span>
      </a>`
    : `<div class="tool-card-link is-disabled" title="${tool.name}은 현재 바로 열기 링크가 없습니다.">
        <span class="compact-tool-icon" aria-hidden="true">${tool.icon}</span>
        <span class="compact-tool-copy">
          <strong>${tool.name}</strong>
          <small>${tool.description}</small>
          <span class="compact-tool-status">${disabledLabel(tool)}</span>
        </span>
      </div>`;

  return `
    <article class="compact-tool-card ${tool.url ? "" : "is-unavailable"}" data-id="${tool.id}">
      ${action}
      <button class="favorite-btn compact-favorite ${isFavorite ? "active" : ""}" type="button" aria-label="${tool.name} 즐겨찾기" data-favorite="${tool.id}">
        ${isFavorite ? "★" : "☆"}
      </button>
    </article>
  `;
}

function renderGroupRow(group, groupTools) {
  return `
    <section class="tool-category-row" id="group-${group.id}" aria-labelledby="group-title-${group.id}">
      <div class="tool-category-label">
        <h3 id="group-title-${group.id}">${group.name}</h3>
        <p>${group.description}</p>
        <span>${groupTools.length}개</span>
      </div>
      <div class="category-tool-grid">
        ${groupTools.map(renderToolCard).join("")}
      </div>
    </section>
  `;
}

function renderSecondaryGrid(target, ids, visibleTools) {
  if (!target) return;
  const idSet = new Set(ids);
  const items = visibleTools.filter(tool => idSet.has(tool.id));
  target.innerHTML = items.map(renderToolCard).join("");
  target.closest(".secondary-tools")?.classList.toggle("is-empty", items.length === 0);
}

function renderToolBoard() {
  const visibleTools = tools.filter(tool => !state.favoriteOnly || state.favorites.has(tool.id));
  const visibleById = new Map(visibleTools.map(tool => [tool.id, tool]));

  grid.innerHTML = WORK_GROUPS.map(group => {
    const groupTools = group.toolIds.map(id => visibleById.get(id)).filter(Boolean);
    return groupTools.length ? renderGroupRow(group, groupTools) : "";
  }).join("");

  renderSecondaryGrid(lifeGrid, LIFE_TOOL_IDS, visibleTools);
  renderSecondaryGrid(labGrid, LAB_TOOL_IDS, visibleTools);

  emptyState.hidden = visibleTools.length !== 0;
  favoriteOnlyBtn.classList.toggle("active", state.favoriteOnly);
  favoriteOnlyBtn.setAttribute("aria-pressed", String(state.favoriteOnly));
  favoriteOnlyBtn.textContent = state.favoriteOnly ? "전체 도구 보기" : "즐겨찾기만";
}

function renderSearchResults() {
  const query = state.query.trim();
  searchResults.hidden = !query;
  clearSearchBtn.classList.toggle("is-visible", Boolean(query));
  if (!query) {
    searchResultList.innerHTML = "";
    searchNoResult.hidden = true;
    return;
  }

  const normalizedQuery = normalize(query);
  const searchScore = tool => {
    const name = normalize(tool.name);
    const tags = tool.tags.map(normalize);
    const description = normalize(tool.description);
    const category = normalize(tool.category);
    let score = 0;
    if (name === normalizedQuery) score += 160;
    else if (name.startsWith(normalizedQuery)) score += 130;
    else if (name.includes(normalizedQuery)) score += 100;
    if (tags.some(tag => tag === normalizedQuery)) score += 80;
    else if (tags.some(tag => tag.includes(normalizedQuery))) score += 55;
    if (description.includes(normalizedQuery)) score += 25;
    if (category.includes(normalizedQuery)) score += 10;
    return score;
  };
  const matched = tools
    .filter(tool => matchesQuery(tool, query))
    .map((tool, index) => ({ tool, index, score: searchScore(tool) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 6)
    .map(item => item.tool);
  searchResultCount.textContent = matched.length;
  searchNoResult.hidden = matched.length !== 0;
  searchResultList.innerHTML = matched.map((tool, index) => {
    const title = highlightText(tool.name, query);
    const description = highlightText(tool.description, query);
    if (!tool.url) {
      return `
        <div class="search-result-item is-disabled" data-search-index="${index}">
          <span class="search-result-icon">${tool.icon}</span>
          <span class="search-result-copy"><strong>${title}</strong><small>${description}</small></span>
          <span class="search-result-meta">${disabledLabel(tool)}</span>
        </div>`;
    }
    return `
      <a class="search-result-item" href="${tool.url}" target="_blank" rel="noopener noreferrer" data-open-tool="${tool.id}" data-search-index="${index}">
        <span class="search-result-icon">${tool.icon}</span>
        <span class="search-result-copy"><strong>${title}</strong><small>${description}</small></span>
        <span class="search-result-meta">${tool.category}<b aria-hidden="true">→</b></span>
      </a>`;
  }).join("");
}

function render() {
  renderFeaturedTools();
  renderToolBoard();
  renderSearchResults();
  totalCount.textContent = tools.length;
  favoriteCount.textContent = state.favorites.size;
}

document.addEventListener("click", event => {
  const button = event.target.closest("[data-favorite]");
  if (button) {
    const id = button.dataset.favorite;
    if (state.favorites.has(id)) state.favorites.delete(id);
    else state.favorites.add(id);
    saveFavorites();
    render();
    return;
  }
});

searchInput.addEventListener("input", event => {
  state.query = event.target.value;
  renderSearchResults();
});

searchInput.addEventListener("keydown", event => {
  if (event.key !== "Enter" || !state.query.trim()) return;
  const firstLink = searchResultList.querySelector("a.search-result-item");
  if (!firstLink) return;
  event.preventDefault();
  firstLink.click();
});

clearSearchBtn.addEventListener("click", () => {
  state.query = "";
  searchInput.value = "";
  searchInput.focus();
  renderSearchResults();
});

document.querySelectorAll("[data-search-term]").forEach(button => {
  button.addEventListener("click", () => {
    const term = button.dataset.searchTerm || "";
    state.query = term;
    searchInput.value = term;
    renderSearchResults();
    searchInput.focus();
    searchResults.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});

favoriteOnlyBtn.addEventListener("click", () => {
  state.favoriteOnly = !state.favoriteOnly;
  renderToolBoard();
});

const amountInput = document.querySelector("#amountInput");
const amountOutput = document.querySelector("#amountOutput");
const copyAmountBtn = document.querySelector("#copyAmountBtn");

function formatNumberWithComma(value) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function numberToKoreanMoney(input) {
  const cleaned = String(input).replace(/[^\d]/g, "");
  if (!cleaned) return "";

  const normalized = cleaned.replace(/^0+/, "") || "0";
  if (normalized === "0") return "금영원";

  const digitUnits = ["", "십", "백", "천"];
  const groupUnits = ["", "만", "억", "조", "경"];
  const nums = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];

  const groups = [];
  let rest = normalized;

  while (rest.length > 0) {
    groups.unshift(rest.slice(-4));
    rest = rest.slice(0, -4);
  }

  let result = "";

  groups.forEach((group, index) => {
    const groupNum = Number(group);
    if (!groupNum) return;

    const padded = group.padStart(4, "0");
    let groupText = "";

    for (let i = 0; i < 4; i++) {
      const digit = Number(padded[i]);
      if (!digit) continue;

      const pos = 3 - i;
      groupText += nums[digit] + digitUnits[pos];
    }

    const unitIndex = groups.length - index - 1;
    result += groupText + groupUnits[unitIndex];
  });

  return "금" + result + "원";
}

function updateAmountConverter() {
  if (!amountInput || !amountOutput) return;

  const rawDigits = amountInput.value.replace(/[^\d]/g, "");
  if (!rawDigits) {
    amountOutput.textContent = "금액을 입력해보세요.";
    amountOutput.classList.remove("is-filled");
    return;
  }

  amountInput.value = formatNumberWithComma(rawDigits);
  amountOutput.textContent = numberToKoreanMoney(rawDigits);
  amountOutput.classList.add("is-filled");
}

if (amountInput) {
  amountInput.addEventListener("input", updateAmountConverter);
  amountInput.addEventListener("focus", event => event.target.select());
}

if (copyAmountBtn) {
  copyAmountBtn.addEventListener("click", async () => {
    if (!amountOutput || !amountOutput.classList.contains("is-filled")) return;

    const text = amountOutput.textContent;
    try {
      await navigator.clipboard.writeText(text);
      copyAmountBtn.textContent = "복사됨";
      setTimeout(() => {
        copyAmountBtn.textContent = "복사";
      }, 1200);
    } catch {
      copyAmountBtn.textContent = "복사 실패";
      setTimeout(() => {
        copyAmountBtn.textContent = "복사";
      }, 1200);
    }
  });
}


const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");
const todoEmpty = document.querySelector("#todoEmpty");
const clearDoneBtn = document.querySelector("#clearDoneBtn");
const quickMemo = document.querySelector("#quickMemo");
const clearMemoBtn = document.querySelector("#clearMemoBtn");

let todos = JSON.parse(localStorage.getItem("hakdol-start:todos") || localStorage.getItem("hakdolham:todos") || "[]");

function saveTodos() {
  localStorage.setItem("hakdol-start:todos", JSON.stringify(todos));
}

function makeId() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return String(Date.now()) + String(Math.random()).slice(2);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderTodos() {
  if (!todoList || !todoEmpty) return;

  todoList.innerHTML = todos.map(todo => `
    <li class="todo-item ${todo.done ? "done" : ""}" data-todo-id="${todo.id}">
      <label>
        <input type="checkbox" ${todo.done ? "checked" : ""} />
        <span>${escapeHtml(todo.text)}</span>
      </label>
      <button type="button" aria-label="할 일 삭제">×</button>
    </li>
  `).join("");

  todoEmpty.hidden = todos.length !== 0;
}

if (todoForm) {
  todoForm.addEventListener("submit", event => {
    event.preventDefault();
    const text = todoInput.value.trim();
    if (!text) return;

    todos.unshift({ id: makeId(), text, done: false });
    todoInput.value = "";
    saveTodos();
    renderTodos();
  });
}

if (todoList) {
  todoList.addEventListener("change", event => {
    const item = event.target.closest(".todo-item");
    if (!item) return;

    const target = todos.find(todo => todo.id === item.dataset.todoId);
    if (!target) return;

    target.done = event.target.checked;
    saveTodos();
    renderTodos();
  });

  todoList.addEventListener("click", event => {
    if (event.target.tagName !== "BUTTON") return;

    const item = event.target.closest(".todo-item");
    if (!item) return;

    todos = todos.filter(todo => todo.id !== item.dataset.todoId);
    saveTodos();
    renderTodos();
  });
}

if (clearDoneBtn) {
  clearDoneBtn.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.done);
    saveTodos();
    renderTodos();
  });
}

if (quickMemo) {
  quickMemo.value = localStorage.getItem("hakdol-start:memo") ?? localStorage.getItem("hakdolham:memo") ?? "";
  quickMemo.addEventListener("input", event => {
    localStorage.setItem("hakdol-start:memo", event.target.value);
  });
}

if (clearMemoBtn && quickMemo) {
  clearMemoBtn.addEventListener("click", event => {
    event.preventDefault();
    quickMemo.value = "";
    localStorage.removeItem("hakdol-start:memo");
    localStorage.removeItem("hakdolham:memo");
    quickMemo.focus();
  });
}


// 작은책상 — 뽀모도로 타이머
const pomodoroTime = document.querySelector("#pomodoroTime");
const pomodoroLabel = document.querySelector("#pomodoroLabel");
const pomodoroStatus = document.querySelector("#pomodoroStatus");
const pomodoroToggleBtn = document.querySelector("#pomodoroToggleBtn");
const pomodoroResetBtn = document.querySelector("#pomodoroResetBtn");
const pomodoroModeBtn = document.querySelector("#pomodoroModeBtn");
const pomodoroSoundBtn = document.querySelector("#pomodoroSoundBtn");
const pomodoroSessions = document.querySelector("#pomodoroSessions");
const pomodoroCard = document.querySelector("#pomodoroCard");

const POMODORO_DURATIONS = { focus: 25 * 60, rest: 5 * 60 };
const POMODORO_KEY = "hakdol-start:pomodoro";
const LEGACY_POMODORO_KEY = "hakdolham:pomodoro";

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function createPomodoroState(soundOn = false) {
  return {
    mode: "focus",
    remaining: POMODORO_DURATIONS.focus,
    running: false,
    endAt: null,
    sessions: 0,
    soundOn,
    dateKey: getLocalDateKey()
  };
}

function loadPomodoro() {
  const fallback = createPomodoroState();
  try {
    const saved = JSON.parse(localStorage.getItem(POMODORO_KEY) || localStorage.getItem(LEGACY_POMODORO_KEY) || "null");
    if (!saved || !["focus", "rest"].includes(saved.mode)) return fallback;
    if (saved.dateKey !== getLocalDateKey()) {
      return createPomodoroState(Boolean(saved.soundOn));
    }
    return { ...fallback, ...saved };
  } catch {
    return fallback;
  }
}

let pomodoro = loadPomodoro();
let pomodoroTimer = null;
let pomodoroDailyResetTimer = null;

function savePomodoro() {
  localStorage.setItem(POMODORO_KEY, JSON.stringify(pomodoro));
}

function resetPomodoroForNewDay() {
  if (pomodoro.dateKey === getLocalDateKey()) return false;
  const soundOn = pomodoro.soundOn;
  pomodoro = createPomodoroState(soundOn);
  stopPomodoroTicker();
  savePomodoro();
  return true;
}

function schedulePomodoroDailyReset() {
  if (pomodoroDailyResetTimer) window.clearTimeout(pomodoroDailyResetTimer);
  const now = new Date();
  const nextMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0, 0, 0, 100
  );

  pomodoroDailyResetTimer = window.setTimeout(() => {
    resetPomodoroForNewDay();
    renderPomodoro("새 하루가 시작되어 타이머를 초기화했어요.");
    schedulePomodoroDailyReset();
  }, nextMidnight.getTime() - now.getTime());
}

function pomodoroRemaining() {
  if (!pomodoro.running || !pomodoro.endAt) return Math.max(0, pomodoro.remaining);
  return Math.max(0, Math.ceil((pomodoro.endAt - Date.now()) / 1000));
}

function formatPomodoro(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function playPomodoroSound() {
  if (!pomodoro.soundOn) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.frequency.value = 660;
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.15, context.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.5);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.52);
  } catch {
    // Sound is optional; silently keep the timer working.
  }
}

function completePomodoro() {
  const completedMode = pomodoro.mode;
  if (completedMode === "focus") pomodoro.sessions += 1;
  pomodoro.mode = completedMode === "focus" ? "rest" : "focus";
  pomodoro.remaining = POMODORO_DURATIONS[pomodoro.mode];
  pomodoro.running = false;
  pomodoro.endAt = null;
  savePomodoro();
  playPomodoroSound();
  renderPomodoro(completedMode === "focus" ? "집중 1회 완료 · 5분 쉬어가요." : "휴식 완료 · 다시 집중할 준비가 됐어요.");
}

function renderPomodoro(statusMessage = "") {
  if (!pomodoroTime) return;
  const dayChanged = resetPomodoroForNewDay();
  if (dayChanged) statusMessage = "새 하루가 시작되어 타이머를 초기화했어요.";
  const remaining = pomodoroRemaining();
  if (pomodoro.running && remaining <= 0) {
    completePomodoro();
    return;
  }

  pomodoro.remaining = remaining;
  const isFocus = pomodoro.mode === "focus";
  pomodoroTime.textContent = formatPomodoro(remaining);
  pomodoroLabel.textContent = isFocus ? "집중 시간" : "휴식 시간";
  pomodoroToggleBtn.textContent = pomodoro.running ? "일시정지" : (isFocus ? "집중 시작" : "휴식 시작");
  pomodoroModeBtn.textContent = isFocus ? "휴식 5분" : "집중 25분";
  pomodoroSoundBtn.textContent = pomodoro.soundOn ? "🔔" : "🔕";
  pomodoroSoundBtn.setAttribute("aria-label", pomodoro.soundOn ? "알림음 끄기" : "알림음 켜기");
  pomodoroSessions.textContent = `오늘 ${pomodoro.sessions}회 집중`;
  pomodoroStatus.textContent = statusMessage || (pomodoro.running ? "집중할 업무 하나만 남겨두세요." : "시작하면 다른 탭에서도 시간이 정확히 흘러요.");
  pomodoroCard.classList.toggle("is-running", pomodoro.running);
  pomodoroCard.classList.toggle("is-rest", !isFocus);
  document.title = pomodoro.running
    ? `${formatPomodoro(remaining)} · ${isFocus ? "집중 중" : "휴식 중"} | 학돌시작`
    : "학돌시작 v0.4.1 | 행정실에서 시작한 실무 도구";
}

function stopPomodoroTicker() {
  if (pomodoroTimer) window.clearInterval(pomodoroTimer);
  pomodoroTimer = null;
}

function startPomodoroTicker() {
  stopPomodoroTicker();
  pomodoroTimer = window.setInterval(() => renderPomodoro(), 500);
}

if (pomodoroToggleBtn) {
  pomodoroToggleBtn.addEventListener("click", () => {
    if (pomodoro.running) {
      pomodoro.remaining = pomodoroRemaining();
      pomodoro.running = false;
      pomodoro.endAt = null;
      stopPomodoroTicker();
    } else {
      pomodoro.running = true;
      pomodoro.endAt = Date.now() + pomodoro.remaining * 1000;
      startPomodoroTicker();
    }
    savePomodoro();
    renderPomodoro();
  });
}

if (pomodoroResetBtn) {
  pomodoroResetBtn.addEventListener("click", () => {
    pomodoro.running = false;
    pomodoro.endAt = null;
    pomodoro.remaining = POMODORO_DURATIONS[pomodoro.mode];
    stopPomodoroTicker();
    savePomodoro();
    renderPomodoro("타이머를 처음 시간으로 돌렸어요.");
  });
}

if (pomodoroModeBtn) {
  pomodoroModeBtn.addEventListener("click", () => {
    pomodoro.mode = pomodoro.mode === "focus" ? "rest" : "focus";
    pomodoro.running = false;
    pomodoro.endAt = null;
    pomodoro.remaining = POMODORO_DURATIONS[pomodoro.mode];
    stopPomodoroTicker();
    savePomodoro();
    renderPomodoro();
  });
}

if (pomodoroSoundBtn) {
  pomodoroSoundBtn.addEventListener("click", () => {
    pomodoro.soundOn = !pomodoro.soundOn;
    savePomodoro();
    renderPomodoro(pomodoro.soundOn ? "완료 알림음을 켰어요." : "완료 알림음을 껐어요.");
  });
}

window.addEventListener("storage", event => {
  if (event.key !== POMODORO_KEY) return;
  pomodoro = loadPomodoro();
  if (pomodoro.running) startPomodoroTicker();
  renderPomodoro();
});

window.addEventListener("focus", () => {
  renderPomodoro();
  schedulePomodoroDailyReset();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  renderPomodoro();
  schedulePomodoroDailyReset();
});

if (pomodoro.running) startPomodoroTicker();
savePomodoro();
schedulePomodoroDailyReset();
renderPomodoro();

renderTodos();
render();
