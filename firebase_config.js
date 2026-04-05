// ============================================================
// Firebase Configuration — Espace Devoirs
// ============================================================
// SETUP STEPS:
// 1. Go to https://console.firebase.google.com
// 2. Click "Add project" → name it (ex: mes-devoirs) → Continue
// 3. Disable Google Analytics (not needed) → Create project
// 4. Click "</> Web" to add a web app → name it → Register app
// 5. Copy the firebaseConfig values below
// 6. In left menu: Build → Firestore Database → Create database
//    → Start in TEST mode → Choose a region (us-east1) → Enable
// 7. Save this file and push to GitHub
// ============================================================

var FIREBASE_CONFIG = {
  apiKey:            "",   // ← paste your values here
  authDomain:        "",
  projectId:         "",
  storageBucket:     "",
  messagingSenderId: "",
  appId:             ""
};

// ---- Init (do not edit below this line) ----------------------
var db = null;
(function () {
  if (!FIREBASE_CONFIG.apiKey) return; // not configured yet
  try {
    firebase.initializeApp(FIREBASE_CONFIG);
    db = firebase.firestore();
    console.log('[Firebase] Connected to project:', FIREBASE_CONFIG.projectId);
  } catch (e) {
    console.warn('[Firebase] Init failed:', e.message);
  }
})();
