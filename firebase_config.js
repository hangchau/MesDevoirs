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
  apiKey:            "AIzaSyBDUPVPSJPryo66mFA3dQRR8QaJN8HZ4mo",
  authDomain:        "mesdevoirs-8888.firebaseapp.com",
  projectId:         "mesdevoirs-8888",
  storageBucket:     "mesdevoirs-8888.firebasestorage.app",
  messagingSenderId: "863943607954",
  appId:             "1:863943607954:web:3265757970b2c6708b084b"
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
