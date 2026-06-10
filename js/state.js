const SAVE_KEY = 'hargrove_manor_save';
const MAX_EVIDENCE = 4;

const State = (() => {
  let persistent = {
    day: 1,
    completedEndings: [],
    keyEvidence: [],
    atticKeyFound: false,
    removedClues: [],
    knownRedHerrings: []   // clue IDs the player has confirmed are red herrings
  };

  let run = {
    collectedClues: [],
    hasAtticKey: false,
    itemCount: 0,
    currentRoom: null,
    currentFloor: 1
  };

  function load() {
    const saved = localStorage.getItem(SAVE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Migrate saves missing the new field
        if (!parsed.knownRedHerrings) parsed.knownRedHerrings = [];
        persistent = parsed;
      } catch (e) {
        resetAll();
      }
    }
  }

  function save() {
    localStorage.setItem(SAVE_KEY, JSON.stringify(persistent));
  }

  function resetAll() {
    persistent = {
      day: 1,
      completedEndings: [],
      keyEvidence: [],
      atticKeyFound: false,
      removedClues: [],
      knownRedHerrings: []
    };
    resetRun();
    save();
  }

  function resetRun() {
    run = {
      collectedClues: [],
      hasAtticKey: false,
      itemCount: 0,
      currentRoom: null,
      currentFloor: 1
    };
  }

  function canPickupClue() {
    return run.itemCount < MAX_EVIDENCE;
  }

  function pickupClue(clue) {
    if (!canPickupClue()) return false;
    if (run.collectedClues.find(c => c.id === clue.id)) return false;
    run.collectedClues.push(clue);
    run.itemCount++;
    return true;
  }

  function pickupKey() {
    run.hasAtticKey = true;
    persistent.atticKeyFound = true;
    save();
  }

  function isClueCollectedThisRun(clueId) {
    return run.collectedClues.some(c => c.id === clueId);
  }

  function isClueRemoved(clueId) {
    return persistent.removedClues.includes(clueId);
  }

  function markRedHerring(clueId) {
    if (!persistent.knownRedHerrings.includes(clueId)) {
      persistent.knownRedHerrings.push(clueId);
      save();
    }
  }

  function isKnownRedHerring(clueId) {
    return persistent.knownRedHerrings.includes(clueId);
  }

  // Returns suspect id if all collected clues agree, null if inconclusive
  function resolveEnding() {
    const clues = run.collectedClues.filter(c => !c.isTruthEvidence);
    if (clues.length < MAX_EVIDENCE) return null;

    // Any red herring = inconclusive
    if (clues.some(c => !c.suspect)) return null;

    // All must point to same suspect
    const first = clues[0].suspect;
    if (clues.every(c => c.suspect === first)) {
      // Don't re-do a completed ending — but still allow (player can see same ending twice)
      return first;
    }

    return null;
  }

  function completeEnding(endingId, keyEvidenceId, keyEvidenceLabel) {
    if (!persistent.completedEndings.includes(endingId)) {
      persistent.completedEndings.push(endingId);
    }
    if (keyEvidenceId && !persistent.keyEvidence.find(e => e.id === keyEvidenceId)) {
      persistent.keyEvidence.push({ id: keyEvidenceId, label: keyEvidenceLabel, endingId });
      persistent.removedClues.push(keyEvidenceId);
    }
    persistent.day++;
    save();
    resetRun();
  }

  function allMainEndingsComplete() {
    const mainEndings = ['margaret', 'oliver', 'vivienne', 'danny', 'rose'];
    return mainEndings.every(e => persistent.completedEndings.includes(e));
  }

  function isTrueEndingUnlocked() {
    return allMainEndingsComplete() && persistent.atticKeyFound;
  }

  function getAvailableCluesForRoom(roomId) {
    const room = ROOMS[roomId];
    if (!room) return [];
    return room.clues.filter(c => !isClueRemoved(c.id));
  }

  function hasAtticAccess() {
    return run.hasAtticKey;
  }

  return {
    load,
    save,
    resetAll,
    resetRun,
    canPickupClue,
    pickupClue,
    pickupKey,
    isClueCollectedThisRun,
    isClueRemoved,
    markRedHerring,
    isKnownRedHerring,
    resolveEnding,
    completeEnding,
    allMainEndingsComplete,
    isTrueEndingUnlocked,
    getAvailableCluesForRoom,
    hasAtticAccess,
    getPersistent: () => persistent,
    getRun: () => run
  };
})();
