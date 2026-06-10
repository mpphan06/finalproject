// ── Room scene art ──
const ROOM_SCENES = {
  living_room: `
    <div class="scene-curtain-l" style="height:160px;"></div>
    <div class="scene-curtain-r" style="height:160px;"></div>
    <div class="scene-floor"></div>
    <div class="scene-fireplace" style="width:80px;height:70px;left:30px;bottom:40px;"></div>
    <div class="scene-painting" style="width:50px;height:36px;top:16px;left:56px;"></div>
    <div class="scene-sofa" style="width:130px;height:48px;left:150px;bottom:62px;"></div>
    <div class="scene-armchair" style="width:44px;height:44px;left:295px;bottom:60px;"></div>
    <div class="scene-rug" style="width:160px;height:75px;left:140px;bottom:40px;"></div>
    <div class="scene-table" style="width:55px;height:32px;left:210px;bottom:52px;"></div>
    <div class="scene-window" style="width:52px;height:65px;top:18px;right:55px;"></div>
    <div class="scene-lamp" style="width:3px;height:52px;left:358px;bottom:80px;"></div>
    <div class="scene-sideboard" style="width:90px;height:32px;right:10px;bottom:40px;"></div>
  `,
  kitchen: `
    <div class="scene-floor"></div>
    <div class="scene-counter" style="width:130px;height:38px;left:10px;bottom:40px;"></div>
    <div class="scene-counter" style="width:60px;height:38px;left:10px;top:10px;"></div>
    <div class="scene-cabinet" style="width:28px;height:28px;left:18px;top:18px;"></div>
    <div class="scene-cabinet" style="width:28px;height:28px;left:52px;top:18px;"></div>
    <div class="scene-table" style="width:110px;height:52px;left:170px;bottom:42px;"></div>
    <div class="scene-chair" style="width:36px;height:36px;left:178px;bottom:94px;"></div>
    <div class="scene-chair" style="width:36px;height:36px;left:228px;bottom:94px;"></div>
    <div class="scene-chair" style="width:36px;height:36px;left:178px;bottom:42px;"></div>
    <div class="scene-window" style="width:45px;height:52px;top:14px;right:75px;"></div>
    <div class="scene-door" style="width:38px;height:56px;right:18px;bottom:40px;"></div>
  `,
  dining_room: `
    <div class="scene-curtain-l" style="height:120px;"></div>
    <div class="scene-curtain-r" style="height:120px;"></div>
    <div class="scene-floor"></div>
    <div class="scene-table" style="width:210px;height:64px;left:85px;bottom:52px;"></div>
    <div class="scene-chair" style="width:32px;height:32px;left:92px;bottom:116px;"></div>
    <div class="scene-chair" style="width:32px;height:32px;left:140px;bottom:116px;"></div>
    <div class="scene-chair" style="width:32px;height:32px;left:193px;bottom:116px;"></div>
    <div class="scene-chair" style="width:32px;height:32px;left:246px;bottom:116px;"></div>
    <div class="scene-chair" style="width:32px;height:32px;left:115px;bottom:42px;"></div>
    <div class="scene-chair" style="width:32px;height:32px;left:218px;bottom:42px;"></div>
    <div class="scene-sideboard" style="width:100px;height:34px;left:10px;bottom:40px;"></div>
    <div class="scene-painting" style="width:60px;height:44px;top:12px;left:150px;"></div>
    <div class="scene-window" style="width:44px;height:56px;top:14px;left:50px;"></div>
    <div class="scene-window" style="width:44px;height:56px;top:14px;right:50px;"></div>
  `,
  storage_closet: `
    <div class="scene-floor"></div>
    <div class="scene-closet-shelves" style="width:150px;height:110px;left:20px;top:18px;"></div>
    <div style="position:absolute;left:28px;top:28px;font-size:8px;color:rgba(255,255,255,0.25);letter-spacing:2px;">— shelf —</div>
    <div style="position:absolute;left:28px;top:62px;font-size:8px;color:rgba(255,255,255,0.25);letter-spacing:2px;">— shelf —</div>
    <div style="position:absolute;left:28px;top:96px;font-size:8px;color:rgba(255,255,255,0.25);letter-spacing:2px;">— shelf —</div>
    <div class="scene-boxes" style="bottom:50px;left:195px;">
      <div class="scene-box" style="width:38px;height:32px;"></div>
      <div class="scene-box" style="width:30px;height:44px;"></div>
      <div class="scene-box" style="width:42px;height:26px;"></div>
    </div>
    <div class="scene-door" style="width:38px;height:54px;right:14px;bottom:40px;"></div>
  `,
  bathroom_1: `
    <div class="scene-floor"></div>
    <div class="scene-bathtub" style="width:130px;height:52px;left:16px;bottom:48px;"></div>
    <div class="scene-toilet" style="width:38px;height:44px;right:90px;bottom:40px;"></div>
    <div class="scene-sink-unit" style="width:54px;height:36px;right:20px;bottom:40px;"></div>
    <div class="scene-mirror" style="width:44px;height:36px;right:27px;top:14px;"></div>
    <div class="scene-window" style="width:40px;height:46px;top:14px;left:80px;"></div>
  `,
  master_bedroom: `
    <div class="scene-curtain-l" style="height:170px;"></div>
    <div class="scene-curtain-r" style="height:170px;"></div>
    <div class="scene-floor"></div>
    <div class="scene-bed" style="width:150px;height:84px;left:90px;bottom:48px;"></div>
    <div class="scene-pillow" style="width:36px;height:14px;left:100px;bottom:118px;"></div>
    <div class="scene-pillow" style="width:36px;height:14px;left:198px;bottom:118px;"></div>
    <div class="scene-nightstand" style="width:30px;height:30px;left:56px;bottom:68px;"></div>
    <div class="scene-nightstand" style="width:30px;height:30px;left:250px;bottom:68px;"></div>
    <div class="scene-desk" style="width:72px;height:42px;right:20px;bottom:40px;"></div>
    <div class="scene-bookshelf" style="width:50px;height:75px;left:16px;bottom:40px;"></div>
    <div class="scene-window" style="width:52px;height:64px;top:14px;left:200px;"></div>
    <div class="scene-lamp" style="width:3px;height:48px;right:76px;bottom:82px;"></div>
    <div class="scene-painting" style="width:44px;height:34px;top:16px;left:80px;"></div>
  `,
  olivers_bedroom: `
    <div class="scene-floor"></div>
    <div class="scene-bed" style="width:116px;height:72px;left:50px;bottom:48px;"></div>
    <div class="scene-pillow" style="width:32px;height:12px;left:60px;bottom:106px;"></div>
    <div class="scene-desk" style="width:95px;height:40px;right:16px;bottom:40px;"></div>
    <div class="scene-window" style="width:46px;height:56px;top:14px;left:36px;"></div>
    <div class="scene-nightstand" style="width:28px;height:28px;left:22px;bottom:68px;"></div>
  `,
  viviennes_bedroom: `
    <div class="scene-floor"></div>
    <div class="scene-bed" style="width:105px;height:68px;left:30px;bottom:48px;"></div>
    <div class="scene-pillow" style="width:30px;height:12px;left:40px;bottom:102px;"></div>
    <div class="scene-desk" style="width:84px;height:38px;left:170px;bottom:40px;"></div>
    <div class="scene-corkboard" style="width:78px;height:56px;left:172px;top:8px;"></div>
    <div class="scene-bookshelf" style="width:60px;height:82px;right:16px;bottom:40px;"></div>
    <div class="scene-suitcase" style="width:52px;height:36px;left:148px;bottom:40px;"></div>
    <div class="scene-window" style="width:46px;height:56px;top:14px;left:110px;"></div>
  `,
  bathroom_2: `
    <div class="scene-floor"></div>
    <div class="scene-bathtub" style="width:138px;height:54px;left:24px;bottom:48px;"></div>
    <div class="scene-toilet" style="width:40px;height:46px;right:88px;bottom:40px;"></div>
    <div class="scene-sink-unit" style="width:56px;height:38px;right:20px;bottom:40px;"></div>
    <div class="scene-mirror" style="width:46px;height:38px;right:27px;top:12px;"></div>
    <div class="scene-window" style="width:40px;height:46px;top:14px;right:145px;"></div>
  `,
  supply_closet: `
    <div class="scene-floor"></div>
    <div class="scene-closet-shelves" style="width:165px;height:115px;left:16px;top:12px;"></div>
    <div style="position:absolute;left:24px;top:22px;font-size:8px;color:rgba(255,255,255,0.2);letter-spacing:2px;">towels</div>
    <div style="position:absolute;bottom:42px;right:50px;width:6px;height:80px;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.2);"></div>
    <div style="position:absolute;bottom:42px;right:36px;width:22px;height:22px;background:rgba(255,255,255,0.08);border:2px solid rgba(255,255,255,0.2);border-radius:50%;"></div>
  `,
  attic: `
    <div class="scene-floor" style="background:var(--bg3);height:32px;border-top:1px solid rgba(255,255,255,0.1);"></div>
    <div class="scene-trunk" style="width:84px;height:48px;left:32px;bottom:40px;"></div>
    <div class="scene-trunk" style="width:64px;height:38px;left:136px;bottom:40px;"></div>
    <div style="position:absolute;bottom:40px;left:220px;width:54px;height:54px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.15);"></div>
    <div class="scene-hatch" style="width:72px;height:58px;right:28px;top:18px;"></div>
    <div style="position:absolute;top:0;left:0;right:0;height:22px;background:linear-gradient(to bottom,rgba(0,0,0,0.6),transparent);"></div>
  `
};

const ROOM_ICONS = {
  living_room: '🛋️', kitchen: '🍳', dining_room: '🍽️',
  storage_closet: '📦', bathroom_1: '🚿', master_bedroom: '🛏️',
  olivers_bedroom: '🎲', viviennes_bedroom: '📚', bathroom_2: '🛁',
  supply_closet: '🧹', attic: '🕯️'
};

// ── Core helpers ──
function $(id) { return document.getElementById(id); }

function on(id, event, fn) {
  const el = $(id);
  if (el) el.addEventListener(event, fn);
}

let _fading = false;

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const s = $(id);
  if (s) s.classList.add('active');
}

function fadeToScreen(id, callback) {
  if (_fading) return;
  _fading = true;
  const overlay = $('fade-overlay');
  overlay.classList.remove('blinking', 'fading-out');
  overlay.classList.add('fading-in');
  setTimeout(() => {
    if (callback) callback();
    if (id) showScreen(id);
    overlay.classList.remove('fading-in');
    overlay.classList.add('blinking');
    setTimeout(() => {
      overlay.classList.remove('blinking');
      _fading = false;
    }, 520);
  }, 420);
}

function showToast(msg, isError = false, duration = 2200) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.remove('hidden', 'error');
  if (isError) t.classList.add('error');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.add('hidden'), duration);
}

// ── Suspect folder ──
function openFolder() {
  $('overlay-folder').classList.remove('hidden');
  buildFolderTabs();
}
function closeFolder() { $('overlay-folder').classList.add('hidden'); }

function buildFolderTabs(activeId) {
  const ids = Object.keys(SUSPECTS);
  const first = activeId || ids[0];
  const tabs = $('folder-tabs');
  tabs.innerHTML = '';
  ids.forEach(id => {
    const btn = document.createElement('button');
    btn.className = 'folder-tab' + (id === first ? ' active' : '');
    btn.textContent = SUSPECTS[id].name.split(' ')[0];
    btn.addEventListener('click', () => buildFolderTabs(id));
    tabs.appendChild(btn);
  });
  const s = SUSPECTS[first];
  $('folder-content').innerHTML = `
    <div><div class="suspect-name">${s.name}</div><div class="suspect-role">${s.role}</div></div>
    <hr class="suspect-divider"/>
    <p class="suspect-account">${s.account}</p>`;
}

// ── HUD ──
function updateHUD() {
  const run = State.getRun();
  const p = State.getPersistent();
  $('hud-day').textContent = p.day;
  const sl = $('hud-slot-list');
  sl.innerHTML = '';
  for (let i = 0; i < 4; i++) {
    const d = document.createElement('div');
    d.className = 'slot' + (run.collectedClues[i] ? ' filled' : '');
    d.textContent = (i + 1).toString();
    if (run.collectedClues[i]) d.setAttribute('data-name', run.collectedClues[i].name);
    sl.appendChild(d);
  }
  const btn = $('btn-conclude');
  if (btn) { btn.disabled = run.itemCount < 4; btn.style.opacity = run.itemCount < 4 ? '0.4' : '1'; }
}

function updateFloorNav() {
  const f3 = $('floor-btn-3');
  if (!f3) return;
  f3.disabled = !State.hasAtticAccess();
  f3.title = f3.disabled ? 'Locked — find the key' : '';
}

// ── Floor navigation ──
function setFloor(floor) {
  const run = State.getRun();
  run.currentFloor = floor;
  run.currentRoom = null;
  document.querySelectorAll('.floor-btn').forEach(btn => {
    const f = parseInt(btn.dataset.floor);
    btn.classList.toggle('active', f === floor);
    if (f === 3) { btn.disabled = !State.hasAtticAccess(); btn.title = btn.disabled ? 'Locked — find the key' : ''; }
  });
  $('room-map').classList.remove('hidden');
  $('room-view').classList.add('hidden');
  playFootsteps();
  const map = $('room-map');
  map.classList.add('floor-out');
  setTimeout(() => {
    showRoomMap(floor);
    map.classList.remove('floor-out');
    map.classList.add('floor-in');
    setTimeout(() => map.classList.remove('floor-in'), 220);
  }, 200);
}

function showRoomMap(floor) {
  const map = $('room-map');
  map.innerHTML = '';
  Object.values(ROOMS).filter(r => r.floor === floor).forEach(room => {
    const locked = room.id === 'attic' && !State.hasAtticAccess();
    const card = document.createElement('div');
    card.className = 'room-card' + (locked ? ' locked' : '');
    const avail = State.getAvailableCluesForRoom(room.id);
    const hasKey = room.hasKey && !State.getPersistent().atticKeyFound && !State.getRun().hasAtticKey;
    card.innerHTML = `
      <div class="room-card-icon">${ROOM_ICONS[room.id] || '[ ]'}</div>
      <div class="room-card-name">${room.name}</div>
      <div class="room-card-floor">Floor ${room.floor}</div>
      <div class="room-card-clue-count">${locked ? 'Locked' : `${avail.length} / ${room.clues.length} clues`}${hasKey ? ' + Key' : ''}</div>`;
    if (!locked) card.addEventListener('click', () => enterRoom(room.id));
    map.appendChild(card);
  });
}

// ── Room view ──
function enterRoom(roomId) {
  const room = ROOMS[roomId];
  State.getRun().currentRoom = roomId;
  playFootsteps();
  $('room-map').classList.add('hidden');
  $('room-view').classList.remove('hidden');
  $('room-title').textContent = room.name;
  $('room-floor-label').textContent = `Floor ${room.floor}`;
  $('room-scene').innerHTML = buildScene(room);
  attachSceneListeners(room);
  $('room-description').textContent = room.description;
  dismissThought();
  buildClueList(room);
}

function buildScene(room) {
  const run = State.getRun();
  const art = ROOM_SCENES[room.id] || '';
  const positions = [
    { left: '8%', top: '55%' }, { left: '25%', top: '30%' }, { left: '45%', top: '60%' },
    { left: '62%', top: '35%' }, { left: '78%', top: '55%' }
  ];
  const avail = State.getAvailableCluesForRoom(room.id);
  let clueHTML = avail.map((clue, i) => {
    const pos = positions[i % positions.length];
    const collected = State.isClueCollectedThisRun(clue.id);
    const rh = State.isKnownRedHerring(clue.id);
    let cls = 'scene-clue';
    if (collected) cls += ' collected';
    else if (rh) cls += ' red-herring';
    return `<div class="${cls}" style="left:${pos.left};top:${pos.top};" data-clue-id="${clue.id}">
      <span class="clue-marker">&#9670;</span>
      <span class="clue-tooltip">${clue.name}</span>
    </div>`;
  }).join('');
  let keyHTML = '';
  if (room.hasKey && !run.hasAtticKey) {
    keyHTML = `<div class="scene-key" style="left:48%;top:72%;" id="scene-key-marker">
      <span class="key-marker">&#128273;</span>
      <span class="clue-tooltip">Attic Key</span>
    </div>`;
  }
  return art + clueHTML + keyHTML;
}

function attachSceneListeners(room) {
  document.querySelectorAll('.scene-clue:not(.collected)').forEach(el => {
    const clue = room.clues.find(c => c.id === el.dataset.clueId);
    if (!clue) return;
    el.addEventListener('click', () => {
      if (el.classList.contains('red-herring')) { showThought(clue); return; }
      pickupClue(clue, room);
    });
  });
  const keyEl = $('scene-key-marker');
  if (keyEl) keyEl.addEventListener('click', () => grabKey(room));
}

function buildClueList(room) {
  const list = $('clue-list');
  list.innerHTML = '';
  if (room.hasKey && !State.getRun().hasAtticKey) {
    const ke = document.createElement('div');
    ke.className = 'key-entry';
    ke.innerHTML = `<div class="key-entry-name"><span>&#128273; ${ATTIC_KEY.name}</span><span class="take-hint">Take key (free)</span></div>
      <div class="key-entry-desc">${ATTIC_KEY.description}</div>`;
    ke.addEventListener('click', () => grabKey(room));
    list.appendChild(ke);
  }
  const avail = State.getAvailableCluesForRoom(room.id);
  if (!avail.length) {
    const p = document.createElement('p');
    p.style.cssText = 'color:var(--text-faint);font-size:12px;padding:8px 0;';
    p.textContent = 'No evidence remaining in this room.';
    list.appendChild(p); return;
  }
  avail.forEach(clue => {
    const collected = State.isClueCollectedThisRun(clue.id);
    const rh = State.isKnownRedHerring(clue.id);
    const el = document.createElement('div');
    el.className = 'clue-entry' + (collected ? ' collected' : rh ? ' red-herring' : '');
    el.innerHTML = `<div class="clue-entry-name"><span>${clue.name}</span>
      <span class="take-hint">${collected ? 'Already taken' : rh ? 'Dead end' : 'Take evidence'}</span></div>
      <div class="clue-entry-desc">${clue.description}</div>`;
    if (!collected && !rh) el.addEventListener('click', () => pickupClue(clue, room));
    else if (!collected && rh) el.addEventListener('click', () => showThought(clue));
    list.appendChild(el);
  });
}

function grabKey(room) {
  State.pickupKey();
  showToast('You take the attic key. It does not count toward your evidence limit.');
  enterRoom(room.id);
  updateHUD();
  updateFloorNav();
}

function pickupClue(clue, room) {
  if (!State.canPickupClue()) { showToast('Evidence slots full. File your report.', true); return; }
  if (State.pickupClue(clue)) {
    if (!clue.suspect && !clue.isTruthEvidence) State.markRedHerring(clue.id);
    showToast(`Collected: ${clue.name}`);
    updateHUD();
    $('room-scene').innerHTML = buildScene(room);
    attachSceneListeners(room);
    buildClueList(room);
  }
}

// ── Red herring thought panel ──
let _typingInterval = null;
let _thoughtState = 'idle';

function dismissThought() {
  if (_typingInterval) { clearInterval(_typingInterval); _typingInterval = null; }
  _thoughtState = 'idle';
  $('room-thought').classList.add('hidden');
  $('room-thought-dismiss').classList.remove('ready');
}

function showThought(clue) {
  const panel = $('room-thought');
  const textEl = $('room-thought-text');
  const dismiss = $('room-thought-dismiss');
  const full = clue.deduction ? `"${clue.deduction}"` : '"I already looked at this. It doesn\'t lead anywhere."';
  if (_typingInterval) clearInterval(_typingInterval);
  _thoughtState = 'typing';
  textEl.textContent = '';
  dismiss.classList.remove('ready');
  panel.classList.remove('hidden');
  panel.style.animation = 'none'; panel.offsetHeight; panel.style.animation = '';
  let i = 0;
  _typingInterval = setInterval(() => {
    textEl.textContent += full[i]; i++;
    if (i >= full.length) {
      clearInterval(_typingInterval); _typingInterval = null;
      _thoughtState = 'done'; dismiss.classList.add('ready');
    }
  }, 18);
  panel.onclick = () => {
    if (_thoughtState === 'typing') {
      clearInterval(_typingInterval); _typingInterval = null;
      textEl.textContent = full; _thoughtState = 'done'; dismiss.classList.add('ready');
    } else if (_thoughtState === 'done') {
      dismissThought();
    }
  };
}

// ── Deduction screen ──
function showDeductionScreen() {
  const run = State.getRun();
  if (!run.collectedClues.length) { showToast('Collect evidence first.', true); return; }
  $('deduction-day-label').textContent = `Day ${State.getPersistent().day}`;
  const cardsEl = $('deduction-cards');
  cardsEl.innerHTML = '';
  run.collectedClues.forEach((clue, i) => {
    const card = document.createElement('div');
    card.className = 'deduction-card';
    card.innerHTML = `<span class="deduction-card-num">${i + 1}</span>
      <span class="deduction-card-name">${clue.name}</span>
      <span class="deduction-card-hint">click to review</span>`;
    card.addEventListener('click', () => {
      document.querySelectorAll('#deduction-cards .deduction-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      card.querySelector('.deduction-card-hint').textContent = 'reviewed';
      if (!clue.suspect && !clue.isTruthEvidence) State.markRedHerring(clue.id);
      const d = $('deduction-dialogue');
      $('deduction-dialogue-name').textContent = clue.name;
      $('deduction-dialogue-text').textContent = clue.deduction || clue.description;
      d.classList.remove('hidden');
      d.style.animation = 'none'; d.offsetHeight; d.style.animation = '';
    });
    cardsEl.appendChild(card);
  });
  $('deduction-dialogue').classList.add('hidden');
  fadeToScreen('screen-deduction');
}

// ── Ending resolution ──
function concludeRun() {
  const endingId = State.resolveEnding();
  if (!endingId) { showInconclusiveScreen(); return; }
  const ending = ENDINGS[endingId];
  const p = State.getPersistent();
  $('ending-title').textContent = ending.title.replace('{day}', p.day);
  $('ending-accusation').textContent = ending.accusation;
  $('ending-narrative').textContent = ending.narrative;
  $('ending-key-evidence').innerHTML = `<div class="key-evidence-label">Evidence Retained</div>
    <div class="key-evidence-item">${ending.keyEvidenceLabel}</div>`;
  const prog = $('ending-progress');
  prog.innerHTML = '';
  ['margaret','oliver','vivienne','danny','rose'].forEach(eid => {
    const pip = document.createElement('div');
    const done = p.completedEndings.includes(eid);
    pip.className = 'progress-pip' + (done ? ' done' : '') + (eid === endingId && !done ? ' current' : '');
    pip.title = SUSPECTS[eid]?.name || eid;
    prog.appendChild(pip);
  });
  State.completeEnding(endingId, ending.keyEvidence, ending.keyEvidenceLabel);
  fadeToScreen('screen-ending');
}

function showInconclusiveScreen() {
  const clues = State.getRun().collectedClues;
  const hasRH = clues.some(c => !c.suspect && !c.isTruthEvidence);
  const suspects = [...new Set(clues.filter(c => c.suspect).map(c => c.suspect))];
  let msg = '';
  if (hasRH) msg = 'One or more of your chosen pieces of evidence doesn\'t point to any suspect. It\'s been marked for future reference. Return to the manor and look again.';
  else if (suspects.length > 1) msg = `Your evidence points toward ${suspects.map(s => SUSPECTS[s]?.name.split(' ')[0]).join(' and ')}. You need all four pointing at one person.`;
  else msg = 'Your evidence is incomplete. You need four pieces pointing to the same person.';
  $('inconclusive-narrative').textContent = msg;
  State.resetRun();
  fadeToScreen('screen-inconclusive');
}

// ── Day advancement ──
function advanceDay() {
  if (State.allMainEndingsComplete()) {
    buildOfficeScreen();
    showScreen('screen-office');
    return;
  }
  startDay();
}

function buildOfficeScreen() {
  const p = State.getPersistent();
  const cardsEl = $('office-evidence-cards');
  cardsEl.innerHTML = '';
  const deskSlots = ['desk-f1','desk-f2','desk-f3','desk-f4','desk-f5'];
  p.keyEvidence.forEach((ev, i) => { const s = $(deskSlots[i]); if (s) s.textContent = '[ ■ ]'; });
  let reviewed = 0;
  p.keyEvidence.forEach((ev, i) => {
    const piece = OFFICE_PIECES[ev.endingId];
    if (!piece) return;
    const card = document.createElement('div');
    card.className = 'deduction-card';
    card.innerHTML = `<span class="deduction-card-num">${i + 1}</span>
      <span class="deduction-card-name">${piece.label}</span>
      <span class="deduction-card-hint">click to review</span>`;
    card.addEventListener('click', () => {
      document.querySelectorAll('#office-evidence-cards .deduction-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const hint = card.querySelector('.deduction-card-hint');
      if (hint.textContent !== 'reviewed') { hint.textContent = 'reviewed'; reviewed++; }
      if (reviewed >= p.keyEvidence.length) $('btn-see-truth').disabled = false;
      $('office-dialogue-name').textContent = piece.label;
      $('office-dialogue-text').textContent = piece.piece;
      const d = $('office-dialogue');
      d.classList.remove('hidden');
      d.style.animation = 'none'; d.offsetHeight; d.style.animation = '';
    });
    cardsEl.appendChild(card);
  });
  $('btn-see-truth').disabled = true;
  $('office-dialogue').classList.add('hidden');
}

// ── Epilogue ──
const EPILOGUE_QUOTES = [
  `“I’m sorry.”`,
  `“You got too close.”`,
  `“If only you had stayed complacent.”`,
  `“Goodbye…”`,
  `“…old friend.”`
];

function runEpilogue() {
  showScreen('screen-epilogue');
  const el = $('epilogue-quote');
  let qi = 0;
  function next() {
    if (qi >= EPILOGUE_QUOTES.length) {
      el.textContent = '';
      const sfx = $('sfx-epilogue');
      fadeOutMusic(350, () => {
        if (!sfx) { setTimeout(() => fadeToScreen('screen-final'), 3000); return; }
        sfx.currentTime = 0; sfx.playbackRate = 1.5; sfx.volume = 1.0;
        sfx.play().catch(() => {});
        const go = () => {
          const ms = (sfx.duration / 1.5) * 1000 + 2000;
          setTimeout(() => { fadeInMusic(); fadeToScreen('screen-final'); }, ms);
        };
        sfx.readyState >= 1 ? go() : sfx.addEventListener('loadedmetadata', go, { once: true });
      });
      return;
    }
    const text = EPILOGUE_QUOTES[qi];
    el.style.opacity = '1';
    el.textContent = '';
    let i = 0;
    const t = setInterval(() => {
      el.textContent += text[i]; i++;
      if (i >= text.length) {
        clearInterval(t);
        const pause = qi === EPILOGUE_QUOTES.length - 1 ? 2800 : 1600;
        setTimeout(() => {
          el.style.opacity = '0';
          setTimeout(() => { el.textContent = ''; qi++; next(); }, 650);
        }, pause);
      }
    }, 40);
  }
  next();
}

function showTrueEnding() {
  const p = State.getPersistent();
  const board = $('true-ending-evidence');
  board.innerHTML = '<div style="font-size:10px;letter-spacing:2px;color:var(--gold);text-transform:uppercase;margin-bottom:8px;">Evidence Assembled</div>';
  p.keyEvidence.forEach(ev => {
    const d = document.createElement('div');
    d.className = 'true-evidence-item';
    d.innerHTML = `<strong>${SUSPECTS[ev.endingId]?.name || ev.endingId}:</strong> ${ev.label}`;
    board.appendChild(d);
  });
  $('true-ending-narrative').textContent = ENDINGS.croft.narrative;
}

// ── Day start ──
function startDay() {
  State.resetRun();
  const p = State.getPersistent();
  const day = p.day;
  $('briefing-day').textContent = `Day ${day}`;
  $('briefing-title').textContent = day === 1 ? 'The Hargrove Case' : `Return Visit — Day ${day}`;
  const msgs = [
    'Edmund Hargrove was found dead this morning. Your agency has been assigned the case by Inspector Croft. You have until the end of the day to gather what evidence you can. Time is short.',
    'You are returning to the manor. Some evidence from yesterday is gone — held as part of your report. The family is still present. The clock is still running.',
    'Third visit. The house feels different now. Smaller. The family has stopped pretending to be composed.',
    'Four days in. Croft keeps approving your reports. Something about his urgency bothers you. Go back. Look again.',
    'One more visit. Whatever you missed before — this is your last chance inside the manor.'
  ];
  $('briefing-body').textContent = msgs[Math.min(day - 1, msgs.length - 1)];
  $('btn-next-day').textContent = 'Return Tomorrow';
  showScreen('screen-briefing');
}

// ── Music ──
function fadeInMusic() {
  const m = $('bg-music');
  if (!m || m.muted) return;
  m.currentTime = 0; m.volume = 0;
  m.play().catch(() => {});
  let count = 0;
  const fade = setInterval(() => {
    count++;
    m.volume = Math.min(0.8, count * 0.04);
    if (count >= 20) clearInterval(fade);
  }, 60);
}

function fadeOutMusic(ms, cb) {
  const m = $('bg-music');
  if (!m || m.paused) { if (cb) cb(); return; }
  const start = m.volume;
  const steps = Math.ceil(ms / 50);
  let count = 0;
  const fade = setInterval(() => {
    count++;
    m.volume = Math.max(0, start - count * (start / steps));
    if (count >= steps) { clearInterval(fade); m.pause(); m.volume = 0; if (cb) cb(); }
  }, 50);
}

function playFootsteps() {
  const sfx = $('sfx-footsteps');
  if (!sfx) return;
  sfx.currentTime = 0; sfx.volume = 1.0;
  sfx.play().catch(() => {});
  setTimeout(() => { sfx.pause(); sfx.currentTime = 0; }, 2500);
}

function initMuteButton() {
  const btn = $('btn-mute');
  const m = $('bg-music');
  if (!btn || !m) return;
  btn.addEventListener('click', () => {
    m.muted = !m.muted;
    btn.textContent = m.muted ? '♪̶' : '♪';
    btn.classList.toggle('muted', m.muted);
  });
}

// ── Init ──
function init() {
  _fading = false;
  const overlay = $('fade-overlay');
  if (overlay) { overlay.className = 'fade-overlay'; overlay.style.cssText = ''; }
  fadeInMusic();
  State.load();
  const p = State.getPersistent();
  if (p.day > 1 || p.completedEndings.length > 0) {
    $('btn-continue').style.display = 'block';
    $('continue-day').textContent = p.day;
  } else {
    $('btn-continue').style.display = 'none';
  }
  showScreen('screen-title');
}

// ── Click SFX ──
const CLICK_SEL = ['button','.room-card:not(.locked)','.clue-entry:not(.collected)',
  '.scene-clue:not(.collected)','.scene-key:not(.taken)','.key-entry:not(.taken)',
  '.folder-tab','.deduction-card','.floor-btn:not(:disabled)'].join(',');

// ── Bootstrap ──
document.addEventListener('DOMContentLoaded', () => {
  initMuteButton();

  // Start music — try immediately, fall back to first click
  fadeInMusic();
  const unlock = () => { fadeInMusic(); document.removeEventListener('click', unlock); };
  document.addEventListener('click', unlock);

  // Click SFX
  document.addEventListener('click', e => {
    if (e.target.closest(CLICK_SEL)) {
      const sfx = $('sfx-click');
      if (sfx && !$('bg-music')?.muted) { sfx.currentTime = 0; sfx.volume = 0.7; sfx.play().catch(() => {}); }
    }
  });

  // Title
  on('btn-new-game', 'click', () => { State.resetAll(); startDay(); });
  on('btn-continue',  'click', () => startDay());
  on('btn-reset',     'click', () => { if (confirm('Reset all progress? This cannot be undone.')) { State.resetAll(); init(); } });

  // Briefing
  on('btn-open-folder',  'click', openFolder);
  on('btn-enter-manor',  'click', () => fadeToScreen('screen-manor', () => { setFloor(1); updateHUD(); }));

  // HUD / manor
  on('hud-folder-btn',  'click', openFolder);
  on('btn-conclude',    'click', showDeductionScreen);
  on('btn-file-report', 'click', concludeRun);
  on('btn-back-map',    'click', () => {
    $('room-map').classList.remove('hidden');
    $('room-view').classList.add('hidden');
    showRoomMap(State.getRun().currentFloor);
  });
  on('fab-folder', 'click', openFolder);

  document.querySelectorAll('.floor-btn').forEach(btn => {
    btn.addEventListener('click', () => { if (!btn.disabled) setFloor(parseInt(btn.dataset.floor)); });
  });

  // Folder
  on('btn-close-folder', 'click', closeFolder);
  on('overlay-folder', 'click', e => { if (e.target === $('overlay-folder')) closeFolder(); });

  // Inconclusive
  on('btn-try-again', 'click', () => fadeToScreen('screen-manor', () => { setFloor(1); updateHUD(); }));

  // Ending / day flow
  on('btn-next-day', 'click', () => fadeToScreen(null, advanceDay));

  // Office
  on('btn-see-truth', 'click', () => {
    if (!$('btn-see-truth').disabled) fadeToScreen('screen-true-ending', showTrueEnding);
  });

  // Epilogue / final
  on('btn-to-epilogue', 'click', () => fadeToScreen(null, runEpilogue));
  on('btn-play-again',  'click', () => { State.resetAll(); fadeToScreen(null, init); });
  on('btn-restart',     'click', () => { State.resetAll(); init(); });

  // Credits
  on('btn-credits',       'click', () => $('overlay-credits').classList.remove('hidden'));
  on('btn-close-credits', 'click', () => $('overlay-credits').classList.add('hidden'));
  on('overlay-credits',   'click', e => { if (e.target === $('overlay-credits')) $('overlay-credits').classList.add('hidden'); });

  init();
});
