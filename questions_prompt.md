# Prompt — Générateur de questions pour Espace Devoirs

Copie le bloc ci-dessous dans Claude (claude.ai), remplace les champs entre `[ ]`, et colle le résultat dans `questions_db.js`.

---

## Prompt à copier

```
Tu es un enseignant québécois expérimenté. Génère exactement 20 questions de révision en français québécois pour :

- Niveau : [Secondaire 1 (13 ans) OU 5e Année primaire (11 ans)]
- Matière : [ex. Mathématique]
- Clé JSON : [ex. "sec1_1"]
- Sous-sujets à couvrir : [ex. Arithmétique, Algèbre, Fractions & décimaux, Géométrie, Mesures, Probabilités, Statistiques]

Règles :
- 14 questions MCQ (4 choix) et 6 questions ouvertes
- Couvre tous les sous-sujets listés (au moins 2 questions par sous-sujet)
- Difficulté variée (facile, moyen, difficile)
- Pour les MCQ : la bonne réponse DOIT figurer mot pour mot dans "choices"
- Pour les questions ouvertes : "choices" doit être null
- Questions alignées au programme PFEQ Québec
- Pour l'anglais : les questions ET les réponses peuvent être en anglais

Retourne UNIQUEMENT un tableau JSON valide, sans texte avant ou après, dans ce format exact :

[
  {
    "subtopic": "Arithmétique",
    "type": "mcq",
    "question": "...",
    "choices": ["...", "...", "...", "..."],
    "answer": "texte exact du bon choix",
    "solution": "explication pédagogique en 1-2 phrases"
  },
  {
    "subtopic": "Rédaction",
    "type": "open",
    "question": "...",
    "choices": null,
    "answer": "réponse modèle ou critères d'évaluation",
    "solution": "ce qu'une bonne réponse doit contenir"
  }
]
```

---

## Sujets par niveau et matière

### Secondaire 1 (sec1)

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

### 5e Année primaire (pri5)

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

## Comment coller dans questions_db.js

Après avoir reçu le tableau JSON de Claude, ajoute les nouvelles questions dans le bon tableau de `questions_db.js` :

```javascript
// Avant :
"sec1_1": [
  { ...question existante... },
  { ...question existante... }
],

// Après (ajoute à la fin du tableau) :
"sec1_1": [
  { ...question existante... },
  { ...question existante... },
  { ...nouvelles questions collées ici... }
],
```

Puis sauvegarde et pousse sur GitHub :
```bash
git add questions_db.js
git commit -m "Add 20 questions to sec1_1 (Mathématique)"
git push
```
