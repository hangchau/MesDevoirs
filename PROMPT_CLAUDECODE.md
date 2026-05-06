# BRIEFING — Espace Devoirs (Continue from claude.ai)

## Contexte du projet

Application web éducative pour deux enfants :
- **Enfant 1** : 13 ans, Secondaire 1 (1er cycle), programme PFEQ Québec
- **Enfant 2** : 11 ans, 5e année du primaire, programme PFEQ Québec

Fichier existant : `devoirs.html` (dans ce même dossier)

---

## Ce qui est déjà fait dans devoirs.html

- Interface avec deux onglets : Secondaire 1 / 5e Année
- 8 matières par niveau, chacune avec compétences PFEQ et sujets
- Sélecteur de sujets (chips cliquables pour cibler un sous-sujet)
- Sélecteur de nombre de questions : **5 / 10 / 20**
- Système de quiz : MCQ + questions ouvertes, feedback immédiat, solutions protégées par mot de passe **9394**
- Suivi des résultats : score par matière, historique des 5 dernières sessions, stats globales (localStorage)
- Clé API Anthropic stockée en localStorage (à SUPPRIMER — voir objectif ci-dessous)
- Design : Nunito + Fredoka One, couleurs par matière, responsive

---

## Objectif principal de cette session Claude Code

### Remplacer les appels API par une banque de questions locale

**Problème actuel** : le fichier appelle `api.anthropic.com` pour générer les questions.  
L'utilisateur a un abonnement claude.ai Pro mais PAS de crédits API séparés.

**Solution** : intégrer une banque de questions pré-générées directement dans le JS du fichier HTML.

### Spécifications de la banque

- **50 questions minimum par matière par niveau** (soit 800+ questions au total)
- **16 ensembles** : 8 matières × 2 niveaux (sec1 + pri5)
- Mix : ~70% MCQ (4 choix), ~30% questions ouvertes
- Questions adaptées au niveau scolaire québécois
- Couverture de TOUS les sous-sujets (topics) de chaque matière
- Langue : français québécois

### Matières Secondaire 1 (sec1)
| Clé | Matière | Sous-sujets |
|-----|---------|-------------|
| sec1_0 | Français | Lecture, Rédaction, Grammaire, Conjugaison, Orthographe, Expression orale, Analyse de texte |
| sec1_1 | Mathématique | Arithmétique, Algèbre, Fractions & décimaux, Géométrie, Mesures, Probabilités, Statistiques |
| sec1_2 | Science et technologie | Méthode scientifique, Matière & énergie, Vivant, Systèmes techniques, Environnement, Univers, Projets techno |
| sec1_3 | Géographie & histoire | Sociétés du monde, Grandes civilisations, Territoires, Cartes & atlas, Repères chronologiques, Droits & démocratie |
| sec1_4 | Anglais | Speaking & listening, Reading comprehension, Writing, Vocabulary, Grammar, Media texts |
| sec1_5 | Arts | Arts plastiques, Musique, Danse, Art dramatique |
| sec1_6 | Éducation physique | Sports collectifs, Activités rythmiques, Plein air, Condition physique, Hygiène & santé, Nutrition |
| sec1_7 | Culture et citoyenneté (CCQ) | Identité québécoise, Valeurs démocratiques, Diversité culturelle, Enjeux sociaux, Dialogue éthique, Droits & responsabilités |

### Matières 5e Année primaire (pri5)
| Clé | Matière | Sous-sujets |
|-----|---------|-------------|
| pri5_0 | Français | Lecture, Rédaction, Orthographe, Grammaire, Conjugaison, Vocabulaire, Compréhension |
| pri5_1 | Mathématique | Nombres naturels, Fractions & décimaux, Opérations (+−×÷), Géométrie, Mesures, Probabilités, Statistiques |
| pri5_2 | Science et technologie | Corps humain, Écosystèmes, Matière & énergie, Forces simples, Transformations, Projets de construction, Expériences |
| pri5_3 | Géographie & histoire | Sociétés autochtones, Nouvelle-France, Régime britannique, Cartes du Québec, Repères historiques, Droits & citoyenneté |
| pri5_4 | Anglais | Listening & speaking, Simple reading, Vocabulary, Short writing, Songs & poems, Basic grammar |
| pri5_5 | Arts | Arts plastiques, Dessin & peinture, Collage & sculpture, Art numérique, Musique, Appréciation culturelle |
| pri5_6 | Éducation physique | Sports & jeux, Habiletés motrices, Plein air, Condition physique, Saine alimentation, Hygiène personnelle |
| pri5_7 | Culture et citoyenneté (CCQ) | Traditions du Québec, Fêtes & cultures, Valeurs partagées, Respect des différences, Règles de vie, Dialogue |

---

## Format de chaque question (JSON)

```json
{
  "subtopic": "Grammaire",
  "type": "mcq",
  "question": "Quelle est la fonction du groupe nominal 'le chat' dans 'Le chat dort' ?",
  "choices": ["Sujet", "Complément direct", "Complément indirect", "Attribut"],
  "answer": "Sujet",
  "solution": "Le groupe nominal qui fait l'action est le sujet du verbe."
}
```

```json
{
  "subtopic": "Rédaction",
  "type": "open",
  "question": "Décris en 2-3 phrases ce que tu ferais si tu pouvais changer une règle à ton école.",
  "choices": null,
  "answer": "Réponse personnelle attendue avec justification et structure de phrases complètes.",
  "solution": "Une bonne réponse présente une règle claire, une raison valable et utilise des connecteurs logiques (parce que, donc, ainsi)."
}
```

---

## Modifications à apporter au code JS de devoirs.html

### 1. Supprimer complètement
- La fonction `generate()` qui appelle l'API
- La gestion de la clé API (variable, modal, bouton dans stats-bar)
- Le modal `#ak-ov` et tout son HTML
- Les fonctions : `getKey()`, `updateAkBar()`, `openAkModal()`, `closeAkModal()`, `saveApiKey()`, `toggleEye()`
- Le CSS des classes `.ak-pill`, `#ak-ov`, `#ak-box`, `#ak-in`, `#ak-eye`, `#ak-err`, `.ak-note`, `.ak-row`
- L'élément `<div id="ak-bar">` dans le stats-bar
- Les event listeners sur `#ak-in` et `#ak-ov`

### 2. Ajouter
- Une constante `QUESTION_BANK` (objet JS) contenant toutes les questions
- Une fonction `getQuestions(key, topics, nq)` qui :
  1. Filtre les questions du bank par `key` et par `topics` sélectionnés
  2. Mélange aléatoirement (Fisher-Yates shuffle)
  3. Retourne `nq` questions
- Modifier `startQuiz()` pour appeler `getQuestions()` au lieu de `generate()`
- Modifier `retryQuiz()` de même
- La fonction doit être **synchrone** (pas de Promise/fetch)

### 3. Garder intact
- Tout le système de quiz (renderMCQ, renderOpen, ansMCQ, subOpen, nextQ)
- Le suivi des résultats (localStorage : stats, hist)
- Le mot de passe solutions : **9394**
- Le sélecteur 5/10/20 questions
- Le sélecteur de sous-sujets (chips)
- Le design et le CSS

---

## Fonction getQuestions à implémenter

```javascript
function getQuestions(key, topics, nq) {
  var pool = QUESTION_BANK[key] || [];
  // Filter by selected topics if any
  if (topics && topics.length < /* total topics for subject */) {
    pool = pool.filter(function(q) { return topics.indexOf(q.subtopic) !== -1; });
  }
  // Fisher-Yates shuffle
  var arr = pool.slice();
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
  return arr.slice(0, nq || 10);
}
```

---

## Structure du startQuiz modifié

```javascript
function startQuiz(key, si, grade, e) {
  e.stopPropagation();
  var data = grade === 'sec1' ? SEC1 : PRI5, s = data[si];
  var sel = [].slice.call(document.querySelectorAll('#chips-' + key + ' .sel'));
  var topics = sel.length ? sel.map(function(c) { return c.dataset.t; }) : s.tops;
  var nq = qCounts[key] || 10;
  CQ = {key: key, si: si, grade: grade, s: s, topics: topics, nq: nq};
  qIdx = 0; qAns = false; qScore = 0;
  // ... setup modal header ...
  openQM();
  // Synchronous — no loading screen needed
  var qs = getQuestions(key, topics, nq);
  if (!qs.length) {
    // fallback: show message
    return;
  }
  CQ.qs = qs;
  showQ(0);
}
```

---

## Workflow suggéré pour Claude Code

1. Lire `devoirs.html` existant
2. Générer `QUESTION_BANK` complet (toutes les matières, 50 questions chacune)
3. Écrire la banque dans un fichier `questions_bank.js` séparé pour validation
4. Modifier `devoirs.html` :
   - Supprimer le code API
   - Insérer `QUESTION_BANK` comme constante JS inline
   - Implémenter `getQuestions()`
   - Modifier `startQuiz()` et `retryQuiz()`
   - Supprimer le HTML et CSS liés à l'API key
5. Valider que le HTML est bien formé
6. Tester en ouvrant dans le navigateur

---

## Notes importantes

- Le fichier final doit fonctionner en **ouvrant directement dans le navigateur** (`file://`) — plus besoin de `python3 -m http.server`
- Pas de dépendances externes sauf Google Fonts (déjà présent)
- Tout doit être dans **un seul fichier HTML**
- Les questions doivent être de vraie qualité pédagogique, alignées PFEQ
- Pour les questions d'anglais : les questions ET les réponses peuvent être en anglais
- Pour les questions ouvertes : `choices` doit être `null`
