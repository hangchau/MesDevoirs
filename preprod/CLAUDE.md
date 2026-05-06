# Espace Devoirs — Claude Code Instructions

## Project Overview
Educational web app for two children studying under the Quebec PFEQ curriculum:
- **Child 1:** 13 years old, Secondaire 1 (sec1)
- **Child 2:** 11 years old, 5e Année primaire (pri5)

Single-page app — everything runs from `devoirs.html` + `questions_db.js` opened directly in a browser (file:// or GitHub Pages).

## Live URL
https://hangchau.github.io/MesDevoirs/devoirs.html

## Repository
https://github.com/hangchau/MesDevoirs (branch: main)

## File Structure
```
MesDevoirs/
├── devoirs.html       — Main app (UI, quiz engine, stats, API calls)
├── questions_db.js    — Question bank (QUESTION_BANK object, loaded via <script src>)
├── index.html         — Redirect to devoirs.html (for GitHub Pages root URL)
└── CLAUDE.md          — This file
```

## Question Bank Architecture
- `questions_db.js` exports `var QUESTION_BANK` — object keyed by `"grade_subjectIndex"`
- Keys: `sec1_0` … `sec1_7` (Secondaire 1) and `pri5_0` … `pri5_7` (5e Année)
- Subject index order (same for both grades): 0=Français, 1=Mathématique, 2=Science et technologie, 3=Géographie & histoire, 4=Anglais, 5=Arts, 6=Éducation physique, 7=Culture et citoyenneté (CCQ)
- Question format:
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
  For open questions: `"type": "open"`, `"choices": null`
- Target: 50+ questions per subject (currently ~10 seed questions each)

## Hybrid Question System (75/25)
- **75%** drawn from `questions_db.js` merged with localStorage (`dv-qbank`)
- **25%** generated via Claude API (claude-sonnet-4-20250514) — saved to localStorage automatically
- If no API key: falls back to 100% local questions
- "Exporter BD" button downloads updated `questions_db.js` with all accumulated questions

## Key JS Functions (devoirs.html)
- `getMergedBank(key)` — merges QUESTION_BANK[key] + localStorage new questions
- `getLocalQuestions(key, topics, allTops, count)` — filtered + shuffled local pool
- `saveNewQuestions(key, newQs)` — persists API-generated questions to localStorage
- `exportQuestionsDB()` — downloads merged questions_db.js
- `startQuiz(key, si, grade, e)` — hybrid quiz entry point
- `retryQuiz()` — re-runs quiz with fresh hybrid selection

## Important Behaviors
- Clicking the gray overlay does NOT close the quiz (intentional — prevents accidental loss)
- Quiz can only be closed via the ✕ button
- Solution password: **9394** (parent access)
- Stats tracked in localStorage: `dv-stats`, `dv-hist`
- API key stored in localStorage: `dv-apikey`

## Design
- Fonts: Nunito + Fredoka One (Google Fonts)
- Color per subject (defined in SEC1/PRI5 data arrays as `.c`, `.l`, `.m`)
- Responsive, mobile-friendly
- No external dependencies beyond Google Fonts

## Development Rules
- Do NOT break the single-file constraint — no new external JS libraries
- Always test that devoirs.html works opened directly as file:// (local questions must work without API)
- When adding questions to questions_db.js: French québécois, aligned to PFEQ, mix ~70% MCQ / ~30% open
- Do not modify the solution password (9394) without confirming with user
- Commit and push to GitHub after every meaningful change
