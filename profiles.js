// ============================================================
// Espace Devoirs — Profile Manager
// ============================================================
// All profile data stored in localStorage under 'dv-profiles'
// Active profile ID stored under 'dv-active-profile'
// ============================================================

var ProfileManager = (function () {

  var STORAGE_KEY  = 'dv-profiles';
  var ACTIVE_KEY   = 'dv-active-profile';

  var AVATARS = [
    '🦊','🐻','🦁','🐼','🐨','🐯','🐺','🦋',
    '🐬','🦅','🦄','🐸','🐧','🦖','🐙','🐝',
    '🌟','🎯','🚀','🎨','⚽','🎵','🌈','🏆'
  ];

  // ---- CRUD -------------------------------------------------------

  function getAll() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  }

  function saveAll(profiles) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
  }

  function getActive() {
    var id = localStorage.getItem(ACTIVE_KEY);
    var profiles = getAll();
    return (id && profiles[id]) ? profiles[id] : null;
  }

  function getActiveId() {
    return localStorage.getItem(ACTIVE_KEY) || null;
  }

  function setActive(id) {
    localStorage.setItem(ACTIVE_KEY, id);
  }

  function clearActive() {
    localStorage.removeItem(ACTIVE_KEY);
  }

  function create(name, avatar, grade) {
    var id = 'p-' + Date.now();
    var profiles = getAll();
    profiles[id] = {
      id:        id,
      name:      name,
      avatar:    avatar,
      grade:     grade,   // 'sec1' | 'pri5' | 'both'
      createdAt: new Date().toLocaleDateString('fr-CA'),
      stats:     { total: 0, ok: 0, wrong: 0, streak: 0, best: 0 },
      hist:      {}
    };
    saveAll(profiles);
    return id;
  }

  function update(id, name, avatar, grade) {
    var profiles = getAll();
    if (!profiles[id]) return;
    profiles[id].name   = name;
    profiles[id].avatar = avatar;
    profiles[id].grade  = grade;
    saveAll(profiles);
  }

  function remove(id) {
    var profiles = getAll();
    delete profiles[id];
    saveAll(profiles);
    if (getActiveId() === id) clearActive();
  }

  // ---- Stats ------------------------------------------------------

  function saveStats(stats, hist) {
    var id = getActiveId();
    if (!id) return;
    var profiles = getAll();
    if (!profiles[id]) return;
    profiles[id].stats = stats;
    profiles[id].hist  = hist;
    saveAll(profiles);
  }

  function loadStats() {
    var p = getActive();
    if (!p) return null;
    return { stats: p.stats, hist: p.hist };
  }

  // ---- Summary helpers -------------------------------------------

  function totalSessions(p) {
    var count = 0;
    Object.values(p.hist).forEach(function (arr) { count += arr.length; });
    return count;
  }

  function lastSession(p) {
    var latest = null;
    Object.values(p.hist).forEach(function (arr) {
      arr.forEach(function (r) {
        if (!latest || r.d > latest) latest = r.d;
      });
    });
    return latest;
  }

  function avgScore(p) {
    var total = 0, count = 0;
    Object.values(p.hist).forEach(function (arr) {
      arr.forEach(function (r) {
        total += Math.round(r.score / r.total * 100);
        count++;
      });
    });
    return count ? Math.round(total / count) : null;
  }

  // ---- Public API ------------------------------------------------

  return {
    AVATARS:       AVATARS,
    getAll:        getAll,
    getActive:     getActive,
    getActiveId:   getActiveId,
    setActive:     setActive,
    clearActive:   clearActive,
    create:        create,
    update:        update,
    remove:        remove,
    saveStats:     saveStats,
    loadStats:     loadStats,
    totalSessions: totalSessions,
    lastSession:   lastSession,
    avgScore:      avgScore
  };

})();
