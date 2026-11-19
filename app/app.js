const STORAGE_KEY = 'gta6-trophy-progress-v1';
const SPOILER_KEY = 'gta6-spoiler-mode-v1';

let trophiesData = [];
let roadmapData = null;
let earnedSet = new Set();
let spoilerMode = false;
let expandedSet = new Set();

const ICONS = {
  platinum: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#e2e8f0"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  gold: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b"><circle cx="12" cy="12" r="10"/></svg>',
  silver: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#94a3b8"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>',
  bronze: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#d97706"><polygon points="12 2 22 22 2 22"/></svg>'
};

async function init() {
  try {
    const [tRes, rRes] = await Promise.all([
      fetch('data/trophies.json'),
      fetch('data/roadmap.json')
    ]);
    const tJson = await tRes.json();
    trophiesData = tJson.trophies;
    roadmapData = await rRes.json();

    loadState();
    setupEvents();
    renderRoadmap();
    renderTrophies();
  } catch (err) {
    console.error('Initialization error:', err);
  }
}

function loadState() {
  const urlParams = new URLSearchParams(window.location.search);
  const isDemo = urlParams.get('demo') === '1' || urlParams.get('demo') === 'true';

  if (isDemo) {
    // Seed demo progress (~80% = 44 trophies) and spoiler mode ON for screenshot 04
    earnedSet = new Set(trophiesData.slice(0, 44).map(t => t.name));
    spoilerMode = true;
  } else {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { earnedSet = new Set(JSON.parse(saved)); } catch {}
    }
    const savedSpoiler = localStorage.getItem(SPOILER_KEY);
    if (savedSpoiler !== null) {
      spoilerMode = savedSpoiler === 'true';
    }
  }

  const spoilerCheckbox = document.getElementById('spoiler-checkbox');
  if (spoilerCheckbox) {
    spoilerCheckbox.checked = spoilerMode;
  }

  // Handle tab URL param for screenshots
  const tab = urlParams.get('tab');
  if (tab === 'roadmap') {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
    const rBtn = document.querySelector('[data-tab="roadmap"]');
    if (rBtn) rBtn.classList.add('active');
    const rSec = document.getElementById('view-roadmap');
    if (rSec) rSec.classList.add('active');
  }

  // Handle expand URL param for screenshot 03
  const expandId = urlParams.get('expand');
  if (expandId) {
    expandedSet.add(Number(expandId));
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...earnedSet]));
  localStorage.setItem(SPOILER_KEY, spoilerMode);
}

function setupEvents() {
  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      const tabName = btn.getAttribute('data-tab');
      document.getElementById('view-' + tabName).classList.add('active');
    });
  });

  // Filters & Search
  ['filter-kind', 'filter-grade', 'search-input'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', renderTrophies);
      el.addEventListener('change', renderTrophies);
    }
  });

  // Spoiler checkbox
  const spoilerCheckbox = document.getElementById('spoiler-checkbox');
  if (spoilerCheckbox) {
    spoilerCheckbox.addEventListener('change', (e) => {
      spoilerMode = e.target.checked;
      saveState();
      renderTrophies();
    });
  }

  // Export JSON
  const btnExport = document.getElementById('btn-export');
  if (btnExport) {
    btnExport.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify([...earnedSet], null, 2));
      const dl = document.createElement('a');
      dl.setAttribute("href", dataStr);
      dl.setAttribute("download", "trophy-progress.json");
      document.body.appendChild(dl);
      dl.click();
      dl.remove();
    });
  }

  // Import JSON
  const fileImport = document.getElementById('file-import');
  if (fileImport) {
    fileImport.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        const text = await file.text();
        const json = JSON.parse(text);
        if (Array.isArray(json)) {
          earnedSet = new Set(json);
          saveState();
          renderTrophies();
          alert('Progress imported successfully!');
        }
      } catch (err) {
        alert('Failed to parse progress file.');
      }
    });
  }
}

function renderRoadmap() {
  if (!roadmapData) return;
  const stagesContainer = document.getElementById('roadmap-stages');
  if (!stagesContainer) return;
  stagesContainer.replaceChildren();

  for (const st of roadmapData.stages) {
    const card = document.createElement('div');
    card.className = 'roadmap-stage-card';

    const header = document.createElement('div');
    header.className = 'roadmap-stage-header';

    const title = document.createElement('div');
    title.className = 'roadmap-stage-title';
    title.textContent = `Stage ${st.stage}: ${st.name}`;

    const hours = document.createElement('div');
    hours.className = 'roadmap-stage-hours';
    hours.textContent = st.estimated_hours;

    header.append(title, hours);

    const desc = document.createElement('div');
    desc.className = 'roadmap-stage-desc';
    desc.textContent = st.description;

    card.append(header, desc);
    stagesContainer.append(card);
  }

  const sourcesDiv = document.getElementById('roadmap-sources');
  if (sourcesDiv) {
    sourcesDiv.replaceChildren();
    const strong = document.createElement('strong');
    strong.textContent = 'Roadmap Sources:';
    const ul = document.createElement('ul');
    for (const src of roadmapData.sources) {
      const li = document.createElement('li');
      li.textContent = src;
      ul.append(li);
    }
    sourcesDiv.append(strong, ul);
  }
}

function renderTrophies() {
  const listEl = document.getElementById('trophy-list');
  if (!listEl) return;
  listEl.replaceChildren();

  const kindFilter = document.getElementById('filter-kind').value;
  const gradeFilter = document.getElementById('filter-grade').value;
  const searchVal = document.getElementById('search-input').value.toLowerCase();

  let earnedCount = 0;
  const totalCount = trophiesData.length;

  for (const t of trophiesData) {
    const isEarned = earnedSet.has(t.name);
    if (isEarned) earnedCount++;

    // Filter checks
    if (kindFilter !== 'all') {
      if (kindFilter === 'missable') {
        if (!t.missable) continue;
      } else {
        if (t.kind !== kindFilter) continue;
      }
    }
    if (gradeFilter !== 'all' && t.grade !== gradeFilter) continue;
    if (searchVal) {
      const matchName = t.name.toLowerCase().includes(searchVal);
      const matchDesc = t.description.toLowerCase().includes(searchVal);
      const matchGuide = t.guide.toLowerCase().includes(searchVal);
      if (!matchName && !matchDesc && !matchGuide) continue;
    }

    const card = document.createElement('div');
    card.className = 'trophy-card' + (isEarned ? ' earned' : '');

    const header = document.createElement('div');
    header.className = 'trophy-header';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'trophy-checkbox';
    checkbox.checked = isEarned;
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        earnedSet.add(t.name);
      } else {
        earnedSet.delete(t.name);
      }
      saveState();
      renderTrophies();
    });

    const iconDiv = document.createElement('div');
    iconDiv.className = 'trophy-icon';
    iconDiv.innerHTML = ICONS[t.grade] || '';

    const info = document.createElement('div');
    info.className = 'trophy-info';

    const titleRow = document.createElement('div');
    titleRow.className = 'trophy-title-row';

    const nameSpan = document.createElement('span');
    const isMasked = spoilerMode && t.kind === 'story' && !isEarned;
    nameSpan.className = 'trophy-name' + (isMasked ? ' masked' : '');
    nameSpan.textContent = isMasked ? '[Spoiler Hidden Story Trophy]' : t.name;

    const gradeBadge = document.createElement('span');
    gradeBadge.className = `badge ${t.grade}`;
    gradeBadge.textContent = t.grade;

    const kindBadge = document.createElement('span');
    kindBadge.className = `badge kind-${t.kind}`;
    kindBadge.textContent = t.kind;

    titleRow.append(nameSpan, gradeBadge, kindBadge);

    if (t.missable) {
      const missableBadge = document.createElement('span');
      missableBadge.className = 'badge missable-tag';
      missableBadge.textContent = 'Missable';
      titleRow.append(missableBadge);
    }

    const descDiv = document.createElement('div');
    descDiv.className = 'trophy-desc' + (isMasked ? ' masked' : '');
    descDiv.textContent = isMasked ? 'Description hidden in spoiler mode.' : t.description;

    const expandBtn = document.createElement('button');
    expandBtn.type = 'button';
    expandBtn.className = 'expand-toggle-btn';
    const isExpanded = expandedSet.has(t.id);
    expandBtn.textContent = isExpanded ? 'Hide Guide' : 'View Guide & Steps';
    expandBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (expandedSet.has(t.id)) {
        expandedSet.delete(t.id);
      } else {
        expandedSet.add(t.id);
      }
      renderTrophies();
    });

    info.append(titleRow, descDiv, expandBtn);

    const details = document.createElement('div');
    details.className = 'trophy-details' + (isExpanded ? ' open' : '');

    const guideText = document.createElement('div');
    guideText.className = 'guide-text';
    guideText.textContent = t.guide;
    details.append(guideText);

    if (t.steps && t.steps.length > 0) {
      const ul = document.createElement('ul');
      ul.className = 'steps-list';
      for (const step of t.steps) {
        const li = document.createElement('li');
        li.textContent = step;
        ul.append(li);
      }
      details.append(ul);
    }

    if (t.sources && t.sources.length > 0) {
      const src = document.createElement('div');
      src.className = 'source-line';
      src.textContent = 'Sources: ' + t.sources.join(' | ');
      details.append(src);
    }

    info.append(details);
    header.append(checkbox, iconDiv, info);
    card.append(header);
    listEl.append(card);
  }

  // Update progress bar
  const pct = Math.round((earnedCount / totalCount) * 100);
  const progressText = document.getElementById('progress-text');
  const progressFill = document.getElementById('progress-fill');
  if (progressText) progressText.textContent = `${earnedCount} of ${totalCount} earned (${pct}%)`;
  if (progressFill) progressFill.style.width = `${pct}%`;
}

init();
