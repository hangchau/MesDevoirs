// ============================================================
// Espace Devoirs — Profile Manager (with Firebase sync)
// ============================================================
// localStorage  → fast local cache, works offline
// Firestore     → cloud sync across all devices (optional)
// Strategy      : write to both; on load fetch from Firestore
//                 and overwrite local cache (cloud = source of truth)
// ============================================================

var ProfileManager = (function () {

  var STORAGE_KEY = 'dv-profiles';
  var ACTIVE_KEY  = 'dv-active-profile';
  var COLLECTION  = 'dv_profiles';

  var AVATARS = [
    '🦊','🐻','🦁','🐼','🐨','🐯','🐺','🦋',
    '🐬','🦅','🦄','🐸','🐧','🦖','🐙','🐝',
    '🌟','🎯','🚀','🎨','⚽','🎵','🌈','🏆'
  ];

  // ---- Local storage helpers ----------------------------------

  function getAll() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  }
  function _saveLocal(profiles) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
  }

  // ---- Firebase helpers ---------------------------------------

  function _fbSave(profile) {
    if (!db) return;
    db.collection(COLLECTION).doc(profile.id).set(profile)
      .catch(function (e) { console.warn('[Firebase] save error:', e); });
  }

  function _fbDelete(id) {
    if (!db) return;
    db.collection(COLLECTION).doc(id).delete()
      .catch(function (e) { console.warn('[Firebase] delete error:', e); });
  }

  function _fbUpdateStats(id, stats, hist) {
    if (!db) return;
    db.collection(COLLECTION).doc(id)
      .update({ stats: stats, hist: hist })
      .catch(function (e) { console.warn('[Firebase] stats update error:', e); });
  }

  // Load all profiles from Firestore → merge into localStorage
  // Calls callback(profiles) when done (or on error falls back to local)
  function syncFromCloud(callback) {
    if (!db) { callback(getAll()); return; }
    db.collection(COLLECTION).get()
      .then(function (snapshot) {
        var remote = {};
        snapshot.forEach(function (doc) { remote[doc.id] = doc.data(); });
        // Merge: remote wins, but keep any local-only profiles too
        var local = getAll();
        var merged = Object.assign({}, local, remote);
        _saveLocal(merged);
        callback(merged);
      })
      .catch(function (e) {
        console.warn('[Firebase] sync error, using local data:', e);
        callback(getAll());
      });
  }

  // ---- Public: active profile ---------------------------------

  function getActive() {
    var id = localStorage.getItem(ACTIVE_KEY);
    var profiles = getAll();
    return (id && profiles[id]) ? profiles[id] : null;
  }
  function getActiveId() { return localStorage.getItem(ACTIVE_KEY) || null; }
  function setActive(id) { localStorage.setItem(ACTIVE_KEY, id); }
  function clearActive() { localStorage.removeItem(ACTIVE_KEY); }

  // ---- Public: CRUD -------------------------------------------

  function create(name, avatar, grade) {
    var id = 'p-' + Date.now();
    var profile = {
      id:        id,
      name:      name,
      avatar:    avatar,
      grade:     grade,
      createdAt: new Date().toLocaleDateString('fr-CA'),
      stats:     { total: 0, ok: 0, wrong: 0, streak: 0, best: 0 },
      hist:      {}
    };
    var profiles = getAll();
    profiles[id] = profile;
    _saveLocal(profiles);
    _fbSave(profile);
    return id;
  }

  function update(id, name, avatar, grade) {
    var profiles = getAll();
    if (!profiles[id]) return;
    profiles[id].name   = name;
    profiles[id].avatar = avatar;
    profiles[id].grade  = grade;
    _saveLocal(profiles);
    _fbSave(profiles[id]);
  }

  function remove(id) {
    var profiles = getAll();
    delete profiles[id];
    _saveLocal(profiles);
    _fbDelete(id);
    if (getActiveId() === id) clearActive();
  }

  // ---- Public: stats ------------------------------------------

  function saveStats(stats, hist) {
    var id = getActiveId();
    if (!id) return;
    var profiles = getAll();
    if (!profiles[id]) return;
    profiles[id].stats = stats;
    profiles[id].hist  = hist;
    _saveLocal(profiles);
    _fbUpdateStats(id, stats, hist);
  }

  function loadStats() {
    var p = getActive();
    if (!p) return null;
    return { stats: p.stats, hist: p.hist };
  }

  // ---- Summary helpers ----------------------------------------

  function totalSessions(p) {
    var count = 0;
    Object.values(p.hist || {}).forEach(function (arr) { count += arr.length; });
    return count;
  }

  function avgScore(p) {
    var total = 0, count = 0;
    Object.values(p.hist || {}).forEach(function (arr) {
      arr.forEach(function (r) {
        total += Math.round(r.score / r.total * 100);
        count++;
      });
    });
    return count ? Math.round(total / count) : null;
  }

  // ---- Public API ---------------------------------------------

  return {
    AVATARS:        AVATARS,
    getAll:         getAll,
    getActive:      getActive,
    getActiveId:    getActiveId,
    setActive:      setActive,
    clearActive:    clearActive,
    create:         create,
    update:         update,
    remove:         remove,
    saveStats:      saveStats,
    loadStats:      loadStats,
    syncFromCloud:  syncFromCloud,
    totalSessions:  totalSessions,
    avgScore:       avgScore
  };

})();
