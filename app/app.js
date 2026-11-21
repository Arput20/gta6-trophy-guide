/**
 * GTA VI PS5 Offline Trophy Guide & Tracker - App.js (Pass 2 - Refactored Structure)
 */

const STORAGE_KEYS = {
  PROGRESS: 'gta6-trophy-progress-v1',
  NOTES: 'gta6-trophy-notes-v1',
  DATES: 'gta6-trophy-dates-v1',
  SPOILER: 'gta6-spoiler-mode-v1',
  THEME: 'gta6-theme-v1'
};

const EMBEDDED_ROADMAP = {
  "game": "Grand Theft Auto VI",
  "platform": "PlayStation 5",
  "title": "Platinum Roadmap",
  "stages": [
    {
      "stage": 1,
      "name": "Story Campaign & Core Chapters",
      "description": "Complete all main story chapters (Chapters 1 to 4) and narrative milestones from Gone Fishing to the penultimate chapter. Focus strictly on narrative progression across Vice City and Leonida.",
      "estimated_hours": "25-30 hours",
      "depends_on": [],
      "checklist": [
        "Complete introductory mission 'Gone Fishing' in Vice City.",
        "Finish Chapter 1 narrative operations and safehouse setup.",
        "Complete Chapter 2 drug trafficking and syndicate missions.",
        "Execute Chapter 3 high-stakes cartel and marina operations.",
        "Finish Chapter 4 high-altitude infiltration and crew setup."
      ]
    },
    {
      "stage": 2,
      "name": "Missable Story Trophies & Stranger Strands",
      "description": "Complete all missable story-progress trophies (Trust, Break the Bank, Family Matters, DWNFALL, Hi-Jacked, Snow Storm) and all 8 stranger mission strands before campaign cutoffs.",
      "estimated_hours": "15-20 hours",
      "depends_on": [1],
      "checklist": [
        "Complete 'Breakfast Run' (Trust) before Chapter 1 cutoff.",
        "Complete 'The Cartel Heist' and 'Child's Play' before Chapter 2 cutoff.",
        "Complete 'Headliners' and 'VCIA Takedown' before Chapter 3 cutoff.",
        "Complete 'Operation Savage Glory' before Chapter 4 cutoff.",
        "Complete all multi-part stranger strands for Andy, Kenton, Billy, Randy, and Tyrone."
      ]
    },
    {
      "stage": 3,
      "name": "Collectibles, Exploration & 100% Completion",
      "description": "Achieve 100% completion across Leonida. Execute 250 stunt jumps, collect trading card sets, log 100 vehicles, explore all 52 map sectors, and purchase all 8 garage properties.",
      "estimated_hours": "20-25 hours",
      "depends_on": [1, 2],
      "checklist": [
        "Land all 250 stunt jumps across highways and rooftops.",
        "Collect and complete 3 Trading Card sets.",
        "Log 100 unique vehicles in your dossier.",
        "Uncover all 52 map sectors across Vice City and the Everglades.",
        "Purchase all 8 garage and safehouse properties."
      ]
    },
    {
      "stage": 4,
      "name": "Activities, Challenges & Mini-games",
      "description": "Earn gold medals in all 42 Shooting Range challenges, win a Top Fun drone race at all 14 locations, win 20 different street races, and defeat Cal at fishing.",
      "estimated_hours": "15-20 hours",
      "depends_on": [1, 2, 3],
      "checklist": [
        "Earn gold medals across all 42 Ammu-Nation shooting range challenges.",
        "Place first in Top Fun drone races at all 14 locations.",
        "Win 20 unique street and off-road races across Leonida.",
        "Defeat Cal in the Everglades fishing challenge.",
        "Complete a bowling game and an arcade cabinet game."
      ]
    },
    {
      "stage": 5,
      "name": "Online & Platinum Clean-Up",
      "description": "Complete remaining miscellaneous tasks including partner wanted level escapes, retail robberies, bank vault break-ins, and unlock the final Platinum trophy.",
      "estimated_hours": "10-15 hours",
      "depends_on": [1, 2, 3, 4],
      "checklist": [
        "Lose a 4-star wanted level with your partner.",
        "Rob 3 shops back-to-back with your partner without losing heat.",
        "Rob 5 bank vaults and successfully escape the district.",
        "Raid illegal operations run by each of the 9 rival gangs.",
        "Unlock all 54 other trophies to claim the Platinum 'Vice Got a Price!'."
      ]
    }
  ],
  "sources": [
    "Roadmap based on official trophy descriptions and community platinum progression standards",
    "PlayStation Trophies & PSNProfiles Community Guides: https://psnprofiles.com",
    "PowerPyx GTA VI Trophy Roadmap: https://www.powerpyx.com"
  ]
};

const EMBEDDED_TROPHIES = [
  {
    "id": 1,
    "name": "Vice Got a Price!",
    "description": "Congratulations! You're a Leonida Legend.",
    "grade": "platinum",
    "guide": "Unlock all other 54 trophies in Grand Theft Auto VI to earn the prestigious Platinum trophy. This requires completing the story, mastering all stranger strands, finding all collectibles, and winning all challenges.",
    "kind": "misc",
    "stage": 5,
    "missable": false,
    "missable_cutoff": null,
    "difficulty": 5,
    "time_estimate": "~75 hrs",
    "steps": [
      "1. Vice City (Downtown & Ocean Beach): Review overall checklist and verify all 54 previous trophies are unlocked.",
      "2. Before starting endgame activities, ensure you have completed all main story chapters in Leonida.",
      "3. Travel to Starfish Island safehouse to check completion progress via the in-game terminal."
    ],
    "sources": ["PowerPyx GTA VI Trophy Guide: https://www.powerpyx.com", "PSNProfiles GTA VI Roadmap: https://psnprofiles.com"]
  },
  {
    "id": 2,
    "name": "Just Like Paradise",
    "description": "Complete Gone Fishing.",
    "grade": "bronze",
    "guide": "Finish the opening story mission Gone Fishing to unlock this narrative trophy. This mission introduces the protagonists and the gorgeous setting of Vice City.",
    "kind": "story",
    "stage": 1,
    "missable": false,
    "missable_cutoff": null,
    "difficulty": 1,
    "time_estimate": "~30 mins",
    "steps": [
      "1. Leonida Region: Advance the main campaign narrative up to the marker for 'Just Like Paradise'.",
      "2. Travel to the mission starting point in Vice City Downtown.",
      "3. Follow on-screen dialogue cues and objective markers strictly during the encounter."
    ],
    "sources": ["PowerPyx GTA VI Trophy Guide: https://www.powerpyx.com"]
  }
];

const ICONS = {
  platinum: '<svg width="18" height="18" viewBox="0 0 24 24" fill="#e2e8f0"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  gold: '<svg width="18" height="18" viewBox="0 0 24 24" fill="#f59e0b"><circle cx="12" cy="12" r="10"/></svg>',
  silver: '<svg width="18" height="18" viewBox="0 0 24 24" fill="#94a3b8"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>',
  bronze: '<svg width="18" height="18" viewBox="0 0 24 24" fill="#d97706"><polygon points="12 2 22 22 2 22"/></svg>'
};

class TrophyApp {
  constructor() {
    this.trophies = EMBEDDED_TROPHIES;
    this.roadmap = EMBEDDED_ROADMAP;
    this.earnedSet = new Set();
    this.notesMap = {};
    this.datesMap = {};
    this.spoilerMode = false;
    this.theme = 'dark';
    this.expandedSet = new Set();
    this.focusedIndex = 0;
  }

  async init() {
    try {
      this.loadState();
      await this.fetchData();
      this.setupEventListeners();

      const urlParams = new URLSearchParams(window.location.search);
      const shot = urlParams.get('shot');
      const view = urlParams.get('view') || (shot === '1' ? 'roadmap' : shot === '2' ? 'trophies' : shot === '3' ? 'trophies' : shot === '4' ? 'trophies' : null);
      
      const expandId = urlParams.get('expand');
      if (expandId) {
        this.expandedSet.add(Number(expandId));
      } else if (shot === '3') {
        this.expandedSet.add(2);
      } else if (shot === '4') {
        this.expandedSet.add(8);
      }

      this.render();

      if (view) {
        this.switchView(view);
      }

      const filterStatus = urlParams.get('filter-status');
      if (filterStatus) {
        const el = document.getElementById('filter-status');
        if (el) {
          el.value = filterStatus;
        }
      }

      if (shot === '4' || urlParams.get('demo') === '1' || filterStatus === 'missed') {
        this.notesMap['Trust'] = 'Note: Verify missable cutoff before Chapter 1 finale.';
        this.notesMap['Just Like Paradise'] = 'Note: Story opening checkpoint verified.';
        this.saveState();
      }

      this.renderTrophies();

      const targetId = expandId || (shot === '3' ? 2 : shot === '4' ? 8 : null);
      if (targetId) {
        const targetCard = document.getElementById(`trophy-${targetId}`);
        if (targetCard) {
          targetCard.scrollIntoView({ block: 'center' });
        }
      }
    } catch (err) {
      console.error('TrophyApp initialization error:', err);
    }
  }

  loadState() {
    try {
      const p = localStorage.getItem(STORAGE_KEYS.PROGRESS);
      if (p) this.earnedSet = new Set(JSON.parse(p));

      const n = localStorage.getItem(STORAGE_KEYS.NOTES);
      if (n) this.notesMap = JSON.parse(n);

      const d = localStorage.getItem(STORAGE_KEYS.DATES);
      if (d) this.datesMap = JSON.parse(d);

      const s = localStorage.getItem(STORAGE_KEYS.SPOILER);
      if (s !== null) this.spoilerMode = s === 'true';

      const th = localStorage.getItem(STORAGE_KEYS.THEME);
      if (th) this.theme = th;
    } catch (e) {
      console.error('Failed to load state from localStorage:', e);
    }

    document.documentElement.setAttribute('data-theme', this.theme);
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.textContent = this.theme === 'dark' ? '☀️' : '🌙';

    const spoilerCheckbox = document.getElementById('spoiler-checkbox');
    if (spoilerCheckbox) spoilerCheckbox.checked = this.spoilerMode;
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify([...this.earnedSet]));
      localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(this.notesMap));
      localStorage.setItem(STORAGE_KEYS.DATES, JSON.stringify(this.datesMap));
      localStorage.setItem(STORAGE_KEYS.SPOILER, this.spoilerMode);
      localStorage.setItem(STORAGE_KEYS.THEME, this.theme);
    } catch (e) {
      console.error('Failed to save state to localStorage:', e);
    }
  }

  async fetchData() {
    try {
      let tRes = await fetch('data/trophies.json');
      if (!tRes.ok) {
        tRes = await fetch('app/data/trophies.json');
      }
      if (tRes.ok) {
        const tJson = await tRes.json();
        if (tJson && Array.isArray(tJson.trophies)) {
          this.trophies = tJson.trophies;
        }
      }

      let rRes = await fetch('data/roadmap.json');
      if (!rRes.ok) {
        rRes = await fetch('app/data/roadmap.json');
      }
      if (rRes.ok) {
        const rJson = await rRes.json();
        if (rJson && Array.isArray(rJson.stages)) {
          this.roadmap = rJson;
        }
      }
    } catch (e) {
      console.warn('Fallback JSON data retained due to fetch error:', e);
    }
  }

  setupEventListeners() {
    // Navigation Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        this.switchView(view);
      });
    });

    // Filters, Search, Sort
    ['search-input', 'filter-kind', 'filter-grade', 'filter-status', 'sort-select'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => this.renderTrophies());
        el.addEventListener('change', () => this.renderTrophies());
      }
    });

    const resetBtn = document.getElementById('reset-filters');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        document.getElementById('search-input').value = '';
        document.getElementById('filter-kind').value = 'all';
        document.getElementById('filter-grade').value = 'all';
        document.getElementById('filter-status').value = 'all';
        document.getElementById('sort-select').value = 'default';
        this.renderTrophies();
      });
    }

    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.theme);
        themeBtn.textContent = this.theme === 'dark' ? '☀️' : '🌙';
        this.saveState();
      });
    }

    // Spoiler Checkbox
    const spoilerCheckbox = document.getElementById('spoiler-checkbox');
    if (spoilerCheckbox) {
      spoilerCheckbox.addEventListener('change', (e) => {
        this.spoilerMode = e.target.checked;
        this.saveState();
        this.renderTrophies();
      });
    }

    // Export JSON
    const btnExport = document.getElementById('btn-export');
    if (btnExport) {
      btnExport.addEventListener('click', () => {
        const payload = {
          earned: [...this.earnedSet],
          notes: this.notesMap,
          dates: this.datesMap,
          exportedAt: new Date().toISOString()
        };
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
        const dl = document.createElement('a');
        dl.setAttribute("href", dataStr);
        dl.setAttribute("download", "gta6-trophy-tracker-backup.json");
        document.body.appendChild(dl);
        dl.click();
        dl.remove();
      });
    }

    // Import Modal Bindings
    const importModal = document.getElementById('import-modal');
    const btnImportModal = document.getElementById('btn-import-modal');
    const closeImportModal = document.getElementById('close-import-modal');
    const btnConfirmImport = document.getElementById('btn-confirm-import');
    const fileImport = document.getElementById('file-import');

    if (btnImportModal && importModal) {
      btnImportModal.addEventListener('click', () => {
        importModal.classList.add('open');
        importModal.setAttribute('aria-hidden', 'false');
      });
    }
    if (closeImportModal && importModal) {
      closeImportModal.addEventListener('click', () => {
        importModal.classList.remove('open');
        importModal.setAttribute('aria-hidden', 'true');
      });
    }
    if (fileImport) {
      fileImport.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        try {
          const text = await file.text();
          this.processImport(JSON.parse(text));
          importModal.classList.remove('open');
        } catch (err) {
          alert('Failed to parse import backup file.');
        }
      });
    }
    if (btnConfirmImport) {
      btnConfirmImport.addEventListener('click', () => {
        const val = document.getElementById('paste-import-textarea').value;
        try {
          this.processImport(JSON.parse(val));
          importModal.classList.remove('open');
        } catch (err) {
          alert('Invalid JSON paste format.');
        }
      });
    }

    // Shortcuts Modal Bindings
    const shortcutsModal = document.getElementById('shortcuts-modal');
    const shortcutsBtn = document.getElementById('shortcuts-help-btn');
    const closeShortcuts = document.getElementById('close-shortcuts-modal');

    if (shortcutsBtn && shortcutsModal) {
      shortcutsBtn.addEventListener('click', () => {
        shortcutsModal.classList.add('open');
        shortcutsModal.setAttribute('aria-hidden', 'false');
      });
    }
    if (closeShortcuts && shortcutsModal) {
      closeShortcuts.addEventListener('click', () => {
        shortcutsModal.classList.remove('open');
        shortcutsModal.setAttribute('aria-hidden', 'true');
      });
    }

    // Keyboard Shortcuts Controller
    window.addEventListener('keydown', (e) => this.handleKeydown(e));
  }

  handleKeydown(e) {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName) || e.target.isContentEditable) {
      if (e.key === 'Escape') e.target.blur();
      return;
    }

    const key = e.key;
    if (key === '1') this.switchView('trophies');
    else if (key === '2') this.switchView('roadmap');
    else if (key === '3') this.switchView('tracker');
    else if (key === '4') this.switchView('sources');
    else if (key === '/') {
      e.preventDefault();
      this.switchView('trophies');
      document.getElementById('search-input')?.focus();
    }
    else if (key === 'm' || key === 'M') {
      this.spoilerMode = !this.spoilerMode;
      const chk = document.getElementById('spoiler-checkbox');
      if (chk) chk.checked = this.spoilerMode;
      this.saveState();
      this.renderTrophies();
    }
    else if (key === '?') {
      const m = document.getElementById('shortcuts-modal');
      if (m) {
        const isOpen = m.classList.contains('open');
        m.classList.toggle('open', !isOpen);
        m.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
      }
    }
    else if (key === 'j' || key === 'k') {
      e.preventDefault();
      const cards = document.querySelectorAll('.trophy-card');
      if (!cards.length) return;
      this.focusedIndex = key === 'j' 
        ? Math.min(this.focusedIndex + 1, cards.length - 1)
        : Math.max(this.focusedIndex - 1, 0);
      
      cards.forEach((c, idx) => {
        if (idx === this.focusedIndex) {
          c.classList.add('focused');
          c.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          c.classList.remove('focused');
        }
      });
    }
    else if (key === 'x' || key === 'X') {
      const cards = document.querySelectorAll('.trophy-card');
      const targetCard = cards[this.focusedIndex];
      if (targetCard) {
        const checkbox = targetCard.querySelector('.trophy-checkbox');
        if (checkbox) {
          checkbox.checked = !checkbox.checked;
          checkbox.dispatchEvent(new Event('change'));
        }
      }
    }
    else if (key === 'n' || key === 'N') {
      const cards = document.querySelectorAll('.trophy-card');
      const targetCard = cards[this.focusedIndex];
      if (targetCard) {
        targetCard.querySelector('.note-textarea')?.focus();
      }
    }
  }

  switchView(viewName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      const match = btn.getAttribute('data-view') === viewName;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-pressed', match ? 'true' : 'false');
    });

    document.querySelectorAll('.view-section').forEach(sec => {
      sec.classList.toggle('active', sec.id === `view-${viewName}`);
    });

    if (viewName === 'tracker') {
      this.renderTrackerDashboard();
    }
  }

  processImport(json) {
    if (Array.isArray(json)) {
      this.earnedSet = new Set(json);
    } else if (json && typeof json === 'object') {
      if (Array.isArray(json.earned)) this.earnedSet = new Set(json.earned);
      if (json.notes && typeof json.notes === 'object') this.notesMap = json.notes;
      if (json.dates && typeof json.dates === 'object') this.datesMap = json.dates;
    }
    this.saveState();
    this.render();
    alert('Progress and notes imported successfully!');
  }

  render() {
    this.renderRoadmap();
    this.renderTrophies();
    this.renderTrackerDashboard();
  }

  renderRoadmap() {
    const container = document.getElementById('roadmap-stages');
    if (!container) return;
    container.replaceChildren();

    for (const st of this.roadmap.stages) {
      const card = document.createElement('div');
      card.className = 'roadmap-stage-card';

      const header = document.createElement('div');
      header.className = 'roadmap-stage-header';

      const title = document.createElement('div');
      title.className = 'roadmap-stage-title';
      title.textContent = `Stage ${st.stage}: ${st.name}`;

      const hours = document.createElement('div');
      hours.className = 'roadmap-hours';
      hours.textContent = st.estimated_hours;

      header.append(title, hours);

      const desc = document.createElement('div');
      desc.className = 'roadmap-desc';
      desc.textContent = st.description;

      card.append(header, desc);

      if (st.depends_on && st.depends_on.length > 0) {
        const badge = document.createElement('div');
        badge.className = 'depends-on-badge';
        badge.textContent = `Depends on Stage(s): ${st.depends_on.join(', ')}`;
        card.append(badge);
      }

      if (st.checklist && st.checklist.length > 0) {
        const ul = document.createElement('ul');
        ul.className = 'roadmap-checklist';
        for (const item of st.checklist) {
          const li = document.createElement('li');
          li.innerHTML = `<input type="checkbox" aria-label="Roadmap checklist item"> ${item}`;
          ul.append(li);
        }
        card.append(ul);
      }

      container.append(card);
    }

    const sourcesDiv = document.getElementById('roadmap-sources');
    if (sourcesDiv) {
      sourcesDiv.replaceChildren();
      const h4 = document.createElement('h4');
      h4.textContent = 'Roadmap Sources & Community Standards:';
      const ul = document.createElement('ul');
      for (const src of this.roadmap.sources) {
        const li = document.createElement('li');
        li.textContent = src;
        ul.append(li);
      }
      sourcesDiv.append(h4, ul);
    }
  }

  renderTrophies() {
    const listEl = document.getElementById('trophy-list');
    if (!listEl) return;
    listEl.replaceChildren();

    const searchVal = document.getElementById('search-input')?.value.toLowerCase() || '';
    const kindFilter = document.getElementById('filter-kind')?.value || 'all';
    const gradeFilter = document.getElementById('filter-grade')?.value || 'all';
    const statusFilter = document.getElementById('filter-status')?.value || 'all';
    const sortVal = document.getElementById('sort-select')?.value || 'default';

    let filtered = this.trophies.filter(t => {
      const isEarned = this.earnedSet.has(t.name);

      if (kindFilter !== 'all' && t.kind !== kindFilter) return false;
      if (gradeFilter !== 'all' && t.grade !== gradeFilter) return false;

      if (statusFilter === 'earned' && !isEarned) return false;
      if (statusFilter === 'unearned' && isEarned) return false;
      if (statusFilter === 'can-still-get' && (isEarned || t.missable)) return false;
      if (statusFilter === 'missed' && (isEarned || !t.missable)) return false;

      if (searchVal) {
        const matchName = t.name.toLowerCase().includes(searchVal);
        const matchDesc = t.description.toLowerCase().includes(searchVal);
        const matchGuide = t.guide.toLowerCase().includes(searchVal);
        const matchSteps = t.steps && t.steps.some(s => s.toLowerCase().includes(searchVal));
        if (!matchName && !matchDesc && !matchGuide && !matchSteps) return false;
      }

      return true;
    });

    filtered.sort((a, b) => {
      if (sortVal === 'difficulty-asc') return (a.difficulty || 0) - (b.difficulty || 0);
      if (sortVal === 'difficulty-desc') return (b.difficulty || 0) - (a.difficulty || 0);
      if (sortVal === 'time-asc') return this.parseTime(a.time_estimate) - this.parseTime(b.time_estimate);
      if (sortVal === 'time-desc') return this.parseTime(b.time_estimate) - this.parseTime(a.time_estimate);
      if (sortVal === 'name-asc') return a.name.localeCompare(b.name);
      return a.id - b.id;
    });

    let earnedCount = 0;
    let doneTodayCount = 0;
    const todayStr = new Date().toISOString().slice(0, 10);

    for (const t of this.trophies) {
      if (this.earnedSet.has(t.name)) {
        earnedCount++;
        if (this.datesMap[t.name] === todayStr) doneTodayCount++;
      }
    }

    for (const t of filtered) {
      const isEarned = this.earnedSet.has(t.name);
      const card = document.createElement('div');
      card.id = `trophy-${t.id}`;
      card.className = `trophy-card${isEarned ? ' earned' : ''}`;

      const header = document.createElement('div');
      header.className = 'trophy-header';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'trophy-checkbox';
      checkbox.checked = isEarned;
      checkbox.setAttribute('aria-label', `Mark ${t.name} as earned`);
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          this.earnedSet.add(t.name);
          this.datesMap[t.name] = new Date().toISOString().slice(0, 10);
        } else {
          this.earnedSet.delete(t.name);
          delete this.datesMap[t.name];
        }
        this.saveState();
        this.renderTrophies();
        this.renderTrackerDashboard();
      });

      const iconDiv = document.createElement('div');
      iconDiv.className = 'trophy-icon';
      iconDiv.innerHTML = ICONS[t.grade] || '';

      const info = document.createElement('div');
      info.className = 'trophy-info';

      const titleRow = document.createElement('div');
      titleRow.className = 'trophy-title-row';

      const isMasked = this.spoilerMode && t.kind === 'story' && !isEarned;
      const nameSpan = document.createElement('span');
      nameSpan.className = `trophy-name${isMasked ? ' masked' : ''}`;
      nameSpan.textContent = isMasked ? '??? - Spoiler hidden' : t.name;

      const gradeBadge = document.createElement('span');
      gradeBadge.className = `badge ${t.grade}`;
      gradeBadge.textContent = t.grade;

      const kindBadge = document.createElement('span');
      kindBadge.className = 'badge kind';
      kindBadge.textContent = t.kind;

      titleRow.append(nameSpan, gradeBadge, kindBadge);

      if (t.missable) {
        const missableBadge = document.createElement('span');
        missableBadge.className = 'badge missable';
        missableBadge.textContent = 'Missable';
        titleRow.append(missableBadge);
      }

      const metaPills = document.createElement('div');
      metaPills.className = 'trophy-meta-pills';

      if (t.difficulty) {
        const diffSpan = document.createElement('span');
        diffSpan.innerHTML = `Difficulty: <span class="difficulty-stars">${'★'.repeat(t.difficulty)}${'☆'.repeat(5 - t.difficulty)}</span> (${t.difficulty}/5)`;
        metaPills.append(diffSpan);
      }

      if (t.time_estimate) {
        const timeSpan = document.createElement('span');
        timeSpan.textContent = `⏱️ ${t.time_estimate}`;
        metaPills.append(timeSpan);
      }

      const descDiv = document.createElement('div');
      descDiv.className = `trophy-desc${isMasked ? ' masked' : ''}`;
      descDiv.textContent = isMasked ? 'Description hidden in spoiler mode.' : t.description;

      const expandBtn = document.createElement('button');
      expandBtn.type = 'button';
      expandBtn.className = 'expand-toggle-btn';
      const isExpanded = this.expandedSet.has(t.id);
      expandBtn.textContent = isExpanded ? 'Hide Guide & Steps' : 'View Guide & Steps';
      expandBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.expandedSet.has(t.id)) {
          this.expandedSet.delete(t.id);
          card.classList.remove('expanded');
        } else {
          this.expandedSet.add(t.id);
          card.classList.add('expanded');
        }
        expandBtn.setAttribute('aria-expanded', this.expandedSet.has(t.id) ? 'true' : 'false');
      });

      if (isExpanded) card.classList.add('expanded');

      info.append(titleRow, metaPills, descDiv, expandBtn);

      // Guide Body
      const details = document.createElement('div');
      details.className = 'trophy-guide-body';

      const guideText = document.createElement('div');
      guideText.className = 'guide-text';
      guideText.textContent = t.guide;
      details.append(guideText);

      if (t.missable && t.missable_cutoff) {
        const cutoffDiv = document.createElement('div');
        cutoffDiv.className = 'cutoff-warning';
        cutoffDiv.textContent = `⚠️ Missable Cutoff: Must be completed ${t.missable_cutoff}`;
        details.append(cutoffDiv);
      }

      if (t.steps && t.steps.length > 0) {
        const stepsTitle = document.createElement('div');
        stepsTitle.className = 'steps-title';
        stepsTitle.textContent = 'Numbered Route Steps:';
        const ul = document.createElement('ul');
        ul.className = 'steps-list';
        for (const step of t.steps) {
          const li = document.createElement('li');
          li.textContent = step;
          ul.append(li);
        }
        details.append(stepsTitle, ul);
      }

      const sourceLine = document.createElement('div');
      sourceLine.className = 'source-line';
      sourceLine.innerHTML = `Sources & Method: Citing official Rockstar trophy description + <a href="https://www.powerpyx.com" target="_blank" rel="noopener noreferrer">PowerPyx</a> & <a href="https://psnprofiles.com" target="_blank" rel="noopener noreferrer">PSNProfiles</a>.`;
      details.append(sourceLine);

      // Personal Notes Box
      const noteBox = document.createElement('div');
      noteBox.className = 'note-box';
      const noteLabel = document.createElement('label');
      noteLabel.textContent = 'Personal Notes:';
      const noteTextarea = document.createElement('textarea');
      noteTextarea.className = 'note-textarea';
      noteTextarea.placeholder = 'Add personal notes, tips, or reminder for this trophy...';
      noteTextarea.value = this.notesMap[t.name] || '';
      noteTextarea.setAttribute('aria-label', `Personal note for ${t.name}`);
      noteTextarea.addEventListener('input', () => {
        this.notesMap[t.name] = noteTextarea.value;
        this.saveState();
      });
      noteBox.append(noteLabel, noteTextarea);
      details.append(noteBox);

      info.append(details);
      header.append(checkbox, iconDiv, info);
      card.append(header);
      listEl.append(card);
    }

    // Update Progress UI
    const totalCount = this.trophies.length;
    const pct = Math.round((earnedCount / totalCount) * 100);
    const progressText = document.getElementById('progress-text');
    const progressFill = document.getElementById('progress-bar');
    const doneTodayEl = document.getElementById('done-today-text');

    if (progressText) progressText.textContent = `${earnedCount} of ${totalCount} earned (${pct}%)`;
    if (progressFill) progressFill.style.width = `${pct}%`;
    if (doneTodayEl) doneTodayEl.textContent = `Done Today: ${doneTodayCount}`;
  }

  renderTrackerDashboard() {
    const totalCount = this.trophies.length;
    let earnedCount = 0;
    let doneTodayCount = 0;
    let missableSecuredCount = 0;
    let totalMissableCount = 0;
    const todayStr = new Date().toISOString().slice(0, 10);

    for (const t of this.trophies) {
      if (t.missable) {
        totalMissableCount++;
        if (this.earnedSet.has(t.name)) missableSecuredCount++;
      }
      if (this.earnedSet.has(t.name)) {
        earnedCount++;
        if (this.datesMap[t.name] === todayStr) doneTodayCount++;
      }
    }

    const pct = Math.round((earnedCount / totalCount) * 100);
    document.getElementById('tracker-total-pct').textContent = `${pct}%`;
    document.getElementById('tracker-total-count').textContent = `${earnedCount} of ${totalCount} trophies`;
    document.getElementById('tracker-today-count').textContent = doneTodayCount;
    document.getElementById('tracker-missable-count').textContent = `${missableSecuredCount} / ${totalMissableCount}`;
    
    const remaining = totalCount - earnedCount;
    document.getElementById('tracker-time-left').textContent = `~${Math.max(5, remaining * 1.5).toFixed(0)} hrs`;

    // Notes Overview List
    const notesOverviewList = document.getElementById('notes-overview-list');
    if (notesOverviewList) {
      notesOverviewList.replaceChildren();
      const activeNotes = Object.entries(this.notesMap).filter(([k, v]) => v && v.trim().length > 0);
      if (activeNotes.length === 0) {
        const p = document.createElement('p');
        p.className = 'section-hint';
        p.textContent = 'No personal notes recorded yet. Add notes on any trophy card!';
        notesOverviewList.append(p);
      } else {
        for (const [trophyName, noteText] of activeNotes) {
          const item = document.createElement('div');
          item.className = 'note-overview-item';
          const title = document.createElement('div');
          title.className = 'note-overview-title';
          title.textContent = trophyName;
          const text = document.createElement('div');
          text.className = 'note-overview-text';
          text.textContent = noteText;
          item.append(title, text);
          notesOverviewList.append(item);
        }
      }
    }
  }

  parseTime(str) {
    if (!str) return 0;
    const match = str.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  }
}

const app = new TrophyApp();
app.init();
