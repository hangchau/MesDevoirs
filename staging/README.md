# 📚 Espace Devoirs

Application web éducative pour réviser les matières scolaires selon le programme PFEQ du Québec.

**🌐 Accès en ligne :** https://hangchau.github.io/MesDevoirs/devoirs.html

---

## Niveaux couverts

| Niveau | Âge | Matières |
|--------|-----|----------|
| Secondaire 1 | 13 ans | Français, Mathématique, Science et technologie, Géographie & histoire, Anglais, Arts, Éducation physique, CCQ |
| 5e Année primaire | 11 ans | Français, Mathématique, Science et technologie, Géographie & histoire, Anglais, Arts, Éducation physique, CCQ |

---

## Fonctionnalités

- Quiz par matière avec choix du nombre de questions (5 / 10 / 20)
- Ciblage par sous-sujet (chips cliquables)
- Questions à choix multiples (MCQ) et questions ouvertes
- Feedback immédiat + solutions protégées par mot de passe parent
- Suivi des résultats et historique des 5 dernières sessions
- **Système hybride 75/25** : 75% depuis la banque locale, 25% générées par IA (Claude API)
- Les nouvelles questions générées sont sauvegardées automatiquement
- Bouton « Exporter BD » pour télécharger la banque mise à jour

---

## Fichiers

```
devoirs.html        — Application principale (interface + moteur de quiz)
questions_db.js     — Banque de questions locale (QUESTION_BANK)
questions_prompt.md — Prompt pour générer de nouvelles questions avec l'IA
index.html          — Redirection vers devoirs.html
CLAUDE.md           — Instructions pour Claude Code
```

---

## Ajouter des questions

1. Ouvre `questions_prompt.md`
2. Copie le prompt dans Claude (claude.ai) en précisant la matière souhaitée
3. Colle les questions générées dans `questions_db.js` dans le bon tableau
4. Sauvegarde et pousse sur GitHub (`git add`, `git commit`, `git push`)

Ou utilise le bouton **Exporter BD** dans l'app après une session pour récupérer la banque enrichie par l'IA.

---

## Mot de passe solutions (parent)

`9394`

---

## Technologies

- HTML / CSS / JavaScript vanilla (aucune dépendance externe)
- Google Fonts : Nunito + Fredoka One
- Claude API (Anthropic) pour la génération de questions
- GitHub Pages pour l'hébergement
