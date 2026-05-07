# Espace Devoirs — Claude Code Instructions

## Project Overview
Educational web app for two children studying under the Quebec PFEQ curriculum:
- **Child 1:** 13 years old, Secondaire 1 (sec1)
- **Child 2:** 11 years old, 5e Année primaire (pri5)

Static single-page app deployed via GitHub Pages. No backend, no build step.

## Live URLs
- **Production:** https://hangchau.github.io/MesDevoirs/devoirs.html
- **Staging:**    https://hangchau.github.io/MesDevoirs/staging/devoirs.html

## Repository & Local Paths
- **GitHub:** https://github.com/hangchau/MesDevoirs
- **Local git repo:** `c:\Users\hangc\OneDrive\Documents\My Project\Git_MesDevoirs`  ← always work here
- **Working copy (non-git):** `c:\Users\hangc\OneDrive\Documents\My Project\MesDevoirs` ← do NOT use

## Branch Workflow
- All changes go on **`staging`** branch — never commit directly to `main`
- Push staging → GitHub Actions deploys to `/staging/` URL automatically
- Merge to `main` only after the user validates on staging

## File Structure
```
Git_MesDevoirs/
├── devoirs.html              — Main app (all UI, quiz engine, exam engine, profiles, stats)
├── questions_exam.js         — EXAM_MATH_A_POOL (Partie A) + EXAM_MATH_B_POOL (Partie B)
├── questions_francais.js     — EXAM_FR_POOL (Français)
├── questions_connaissance.js — EXAM_CG_POOL (Connaissances générales)
├── questions_logique.js      — EXAM_LQ_POOL (Logique)
├── questions_sec1.js         — SEC1 daily quiz question bank
├── questions_pri5.js         — PRI5 daily quiz question bank
├── data_subjects.js          — Subject definitions (SEC1[], PRI5[])
├── profiles.js               — ProfileManager singleton
├── firebase_config.js        — Firebase config (cloud sync)
├── index.html                — Redirect to devoirs.html
├── .github/workflows/deploy.yml — CI/CD: push staging → gh-pages/staging/
└── CLAUDE.md                 — This file
```

## Version Bumping (MANDATORY after every commit)
Every functional commit must include a version bump in `devoirs.html` footer:
- **Format:** `v{YYYYMMDD}.{HHMM}` in **Eastern Time**
- **Location:** last `<div>` before `</body>`: `<div style="text-align:center;...">v20260506.2331</div>`
- **PowerShell command to get ET timestamp:**
  ```powershell
  [System.TimeZoneInfo]::ConvertTimeBySystemTimeZoneId([DateTime]::UtcNow, 'Eastern Standard Time').ToString('yyyyMMdd.HHmm')
  ```

---

## Daily Quiz System

### Architecture
- Questions loaded from `questions_sec1.js` / `questions_pri5.js` into globals `SEC1` / `PRI5_*`
- Subject cards built by `buildCards()` — each card runs a quiz modal
- Stats tracked per profile in `localStorage` keys `dv-stats-{pid}` / `dv-hist-{pid}`

### Question Format (daily quiz)
```json
{
  "subtopic": "Grammaire",
  "type": "mcq",
  "question": "...",
  "choices": ["A", "B", "C", "D"],
  "answer": "exact text of correct choice",
  "solution": "pedagogical explanation"
}
```
- `type: "open"` → free-text answer (fuzzy match, 85% word-similarity threshold)
- `choices: null` for open questions

---

## Exam d'Admission System

### EX Object (global state)
```javascript
var EX = {
  phase: null,         // 'A' | 'B' | 'FR' | 'CG' | 'LQ'
  mode: null,          // 'math' | 'francais' | 'cg' | 'lq'
  qi: 0,               // current question index
  score: {A:0, B:0, FR:0, CG:0, LQ:0},
  timerInterval: null,
  timeLeft: 0,
  qs: [],              // shuffled question list [{q, revisit}]
  skipCount: 0,
  origCount: 0,
  finished: false      // true once results screen is shown (prevents false abandon)
};
```

### Exam Modes & Parameters
| Mode    | Phase | Pool variable    | Questions | Time   | Theme  |
|---------|-------|------------------|-----------|--------|--------|
| math    | A     | EXAM_MATH_A_POOL | 15        | 5 min  | Orange |
| math    | B     | EXAM_MATH_B_POOL | 35        | 35 min | Orange |
| francais| FR    | EXAM_FR_POOL     | 50        | 30 min | Blue/Purple |
| cg      | CG    | EXAM_CG_POOL     | 50        | 30 min | Green  |
| lq      | LQ    | EXAM_LQ_POOL     | 50        | 35 min | Indigo |

### Exam Question Format
```javascript
{
  q: "Question text (HTML allowed)",
  choices: ["choice A", "choice B", "choice C", "choice D"],
  answer: "exact string matching one choice",
  sol: "Explanation shown after answering",
  graphic: '<svg ...>...</svg>',  // optional inline SVG
  ai: true                         // optional, marks AI-generated questions
}
```

### LocalStorage Keys (profile-scoped)
- `exam-hist-math-{pid}` — array (max 5) of `{sA, sB, tot, pct, d, abandoned?, qi?, phase?}`
- `exam-hist-fr-{pid}`   — array (max 5) of `{sFR, tot, pct, d, abandoned?, qi?}`
- `exam-hist-cg-{pid}`   — array (max 5) of `{sCG, tot, pct, d, abandoned?, qi?}`
- `exam-hist-lq-{pid}`   — array (max 5) of `{sLQ, tot, pct, d, abandoned?, qi?}`
- Newest entry first. `abandoned:true` recorded when user exits mid-exam via ✕.

### Key Exam Functions
- `startExam()` / `startExamFR()` / `startExamCG()` / `startExamLQ()` — launch each exam
- `_examPhase(ph)` — shuffle pool, set timer, show first question
- `_examShowQ(i)` — render question i
- `_ansExam(btn, chosen, correct, i)` — handle answer, update score
- `_skipExam()` — push current question to end of queue
- `_examTransition()` — shown between Part A and Part B (math only)
- `_examResults()` — show results, save history, update card
- `closeExam()` — save abandoned entry if mid-exam, close modal
- `_examUpdateCard()` / `_examUpdateCardFR()` / `_examUpdateCardCG()` / `_examUpdateCardLQ()` — refresh card badge

---

## Profile System

### ProfileManager (profiles.js)
- `ProfileManager.getActive()` — returns active profile object `{name, avatar, grade, hist}`
- `ProfileManager.getActiveId()` — returns active profile ID string
- `ProfileManager.getAll()` — all profiles map `{id → profile}`
- `ProfileManager.setActive(id)` — switch active profile
- All localStorage keys are **profile-scoped** with `{pid}` suffix

### Parent Dashboard
- Opened via 📊 button → shows per-profile stats
- Clé API button moved into parent header `#parent-hd`
- Shows: overall avg, exam admission history (Math/FR/CG/LQ), current grade breakdown, previous years
- Password access for parent section: **9394**

---

## Question Pool Composition
Each pool targets ≈25% AI-generated (`ai:true`) mixed with real exam questions:
- `EXAM_MATH_A_POOL` — 15-question mental math pool
- `EXAM_MATH_B_POOL` — 35-question full math pool
- `EXAM_FR_POOL`     — 67 questions (50 real + 17 AI)
- `EXAM_CG_POOL`     — 67 questions (50 real + 17 AI) — sciences, géo, histoire, culture
- `EXAM_LQ_POOL`     — 67 questions (50 real + 17 AI) — logique, suites, analogies, proba

Visual questions use inline SVG in the `graphic` field.

---

## Development Rules
1. **Never commit to `main`** — staging branch only, merge after user validation
2. **Always bump version** in the footer with Eastern Time timestamp (same commit)
3. **Single-file constraint** — no new external JS libraries; keep app self-contained
4. **Profile-scope all localStorage** — use `ProfileManager.getActiveId()||'default'` as key suffix
5. **No external APIs** — the Claude API integration has been removed; app runs fully offline
6. **French québécois** — all UI text, questions, and solutions in Canadian French
