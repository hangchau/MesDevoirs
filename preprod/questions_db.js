// Espace Devoirs — Base de questions PFEQ Québec
// Mise à jour : 2026-04-05 — 112 questions

var QUESTION_BANK = {
  "sec1_0": [
    {
      "subtopic": "Grammaire",
      "type": "mcq",
      "question": "Quelle est la fonction du groupe nominal 'le professeur' dans la phrase : 'Le professeur explique la leçon' ?",
      "choices": ["Sujet","Complément direct du verbe","Complément indirect du verbe","Attribut du sujet"],
      "answer": "Sujet",
      "solution": "Le groupe nominal qui fait l'action est le sujet. On peut vérifier en posant la question 'Qui est-ce qui explique ?' → le professeur."
    },
    {
      "subtopic": "Grammaire",
      "type": "mcq",
      "question": "Dans la phrase 'Marie mange une pomme', quel est le complément direct du verbe ?",
      "choices": ["Marie","mange","une pomme","une"],
      "answer": "une pomme",
      "solution": "Le complément direct (CD) répond à la question 'Quoi ?' après le verbe : mange quoi ? → une pomme. Il n'est pas précédé d'une préposition."
    },
    {
      "subtopic": "Grammaire",
      "type": "open",
      "question": "Explique la différence entre un groupe nominal sujet et un complément direct du verbe. Donne un exemple pour chacun.",
      "choices": null,
      "answer": "Le GNS fait l'action et répond à 'Qui est-ce qui... ?'. Le CD reçoit l'action et répond à 'Quoi ?' ou 'Qui ?'. Ex. : 'Le chien (GNS) mord l'os (CD).'",
      "solution": "La distinction se fait par questionnement : le GNS précède généralement le verbe tandis que le CD le suit sans préposition."
    },
    {
      "subtopic": "Conjugaison",
      "type": "mcq",
      "question": "Quelle est la conjugaison correcte du verbe 'aller' à la 1re personne du pluriel, présent de l'indicatif ?",
      "choices": ["allons","allez","vont","allaient"],
      "answer": "allons",
      "solution": "'Aller' est un verbe irrégulier. Au présent : je vais, tu vas, il va, nous allons, vous allez, ils vont."
    },
    {
      "subtopic": "Conjugaison",
      "type": "mcq",
      "question": "Conjugue le verbe 'finir' à l'imparfait, 3e personne du pluriel.",
      "choices": ["finissaient","finiraient","finissont","finisseraient"],
      "answer": "finissaient",
      "solution": "À l'imparfait, les verbes du 2e groupe (en -ir) s'écrivent avec le radical -issai- : ils finissaient, vous finissiez, nous finissions."
    },
    {
      "subtopic": "Lecture",
      "type": "mcq",
      "question": "Dans un texte narratif, qu'est-ce que le schéma narratif désigne ?",
      "choices": ["L'ensemble des personnages","La structure du récit en 5 étapes","Le style d'écriture de l'auteur","Le vocabulaire utilisé"],
      "answer": "La structure du récit en 5 étapes",
      "solution": "Le schéma narratif comprend : situation initiale, élément déclencheur, péripéties, dénouement, situation finale. C'est la structure classique d'un récit."
    },
    {
      "subtopic": "Lecture",
      "type": "open",
      "question": "À quoi sert l'inférence dans la lecture d'un texte ? Donne un exemple concret.",
      "choices": null,
      "answer": "L'inférence permet de comprendre ce qui n'est pas dit explicitement, en combinant les informations du texte et ses connaissances. Ex. : 'Elle prit son parapluie' → on infère qu'il pleut.",
      "solution": "Faire une inférence, c'est lire entre les lignes. C'est une compétence essentielle en lecture pour comprendre le sens implicite."
    },
    {
      "subtopic": "Orthographe",
      "type": "mcq",
      "question": "Quel est l'accord correct dans la phrase : 'Les élèves sont _____ contents.' ?",
      "choices": ["très","trés","trez","très"],
      "answer": "très",
      "solution": "'Très' est un adverbe invariable. Il ne prend jamais d'accent grave : très, pas trés. L'adjectif 'contents' s'accorde avec 'élèves' (masc. plur.)."
    },
    {
      "subtopic": "Rédaction",
      "type": "open",
      "question": "Rédige un paragraphe de 4 à 5 phrases décrivant ton endroit préféré, en utilisant au moins trois adjectifs qualificatifs.",
      "choices": null,
      "answer": "Réponse personnelle. Critères : présence d'au moins 3 adjectifs bien placés, phrases complètes, cohérence et ponctuation soignée.",
      "solution": "Un bon paragraphe descriptif situe le lieu, décrit ses caractéristiques avec des adjectifs variés et précise pourquoi ce lieu est apprécié."
    },
    {
      "subtopic": "Analyse de texte",
      "type": "mcq",
      "question": "Dans un texte, les connecteurs 'donc', 'ainsi' et 'par conséquent' expriment quel type de lien ?",
      "choices": ["Une cause","Une conséquence","Une opposition","Une énumération"],
      "answer": "Une conséquence",
      "solution": "Ces connecteurs logiques marquent la conséquence ou la conclusion : 'Il pleut, donc je prends mon parapluie.' Ils introduisent le résultat d'une cause."
    }
  ],
  "sec1_1": [
    {
      "subtopic": "Arithmétique",
      "type": "mcq",
      "question": "Quel est le PGCD (plus grand commun diviseur) de 24 et 36 ?",
      "choices": ["6","8","12","18"],
      "answer": "12",
      "solution": "Les diviseurs de 24 : 1,2,3,4,6,8,12,24. Les diviseurs de 36 : 1,2,3,4,6,9,12,18,36. Le plus grand commun est 12."
    },
    {
      "subtopic": "Arithmétique",
      "type": "mcq",
      "question": "Combien vaut 2³ × 3² ?",
      "choices": ["36","48","72","54"],
      "answer": "72",
      "solution": "2³ = 8 et 3² = 9. Donc 8 × 9 = 72. La notation exponentielle signifie une multiplication répétée."
    },
    {
      "subtopic": "Algèbre",
      "type": "mcq",
      "question": "Résous l'équation : 3x + 7 = 22",
      "choices": ["x = 5","x = 6","x = 4","x = 7"],
      "answer": "x = 5",
      "solution": "3x + 7 = 22 → 3x = 22 - 7 → 3x = 15 → x = 15 ÷ 3 = 5. On isole x en effectuant les opérations inverses."
    },
    {
      "subtopic": "Algèbre",
      "type": "open",
      "question": "Traduis cette situation en équation, puis résous-la : 'J'ai le double de l'âge de mon frère plus 3. J'ai 17 ans. Quel âge a mon frère ?'",
      "choices": null,
      "answer": "Équation : 2x + 3 = 17 → 2x = 14 → x = 7. Mon frère a 7 ans.",
      "solution": "On pose x = âge du frère. La relation 'double de x plus 3 égale 17' donne 2x + 3 = 17. On résout pas à pas."
    },
    {
      "subtopic": "Fractions & décimaux",
      "type": "mcq",
      "question": "Quelle est la somme de 3/4 + 1/6 ?",
      "choices": ["4/10","11/12","5/12","2/5"],
      "answer": "11/12",
      "solution": "On trouve le PPCM de 4 et 6 = 12. Donc 3/4 = 9/12 et 1/6 = 2/12. La somme est 9/12 + 2/12 = 11/12."
    },
    {
      "subtopic": "Géométrie",
      "type": "mcq",
      "question": "Quelle est l'aire d'un triangle de base 8 cm et de hauteur 5 cm ?",
      "choices": ["20 cm²","40 cm²","13 cm²","80 cm²"],
      "answer": "20 cm²",
      "solution": "Aire d'un triangle = (base × hauteur) ÷ 2 = (8 × 5) ÷ 2 = 40 ÷ 2 = 20 cm²."
    },
    {
      "subtopic": "Géométrie",
      "type": "open",
      "question": "Explique comment calculer le périmètre et l'aire d'un rectangle dont la longueur est 9 cm et la largeur est 4 cm.",
      "choices": null,
      "answer": "Périmètre = 2 × (longueur + largeur) = 2 × (9 + 4) = 26 cm. Aire = longueur × largeur = 9 × 4 = 36 cm².",
      "solution": "Le périmètre est la somme de tous les côtés. L'aire est la surface intérieure. Pour un rectangle : P = 2(l+L) et A = l×L."
    },
    {
      "subtopic": "Probabilités",
      "type": "mcq",
      "question": "On lance un dé à 6 faces. Quelle est la probabilité d'obtenir un nombre pair ?",
      "choices": ["1/6","1/3","1/2","2/3"],
      "answer": "1/2",
      "solution": "Les nombres pairs sur un dé sont : 2, 4, 6 → 3 cas favorables sur 6 cas possibles = 3/6 = 1/2."
    },
    {
      "subtopic": "Statistiques",
      "type": "mcq",
      "question": "Quelle est la médiane de la série : 3, 7, 5, 12, 9 ?",
      "choices": ["5","7","9","6"],
      "answer": "7",
      "solution": "On ordonne d'abord : 3, 5, 7, 9, 12. La médiane est la valeur centrale, c'est-à-dire le 3e terme : 7."
    },
    {
      "subtopic": "Mesures",
      "type": "open",
      "question": "Convertis 2,5 km en mètres, en centimètres et en millimètres. Montre tes calculs.",
      "choices": null,
      "answer": "2,5 km = 2 500 m = 250 000 cm = 2 500 000 mm.",
      "solution": "1 km = 1 000 m ; 1 m = 100 cm ; 1 cm = 10 mm. On multiplie à chaque conversion par le facteur approprié."
    }
  ],
  "sec1_2": [
    {
      "subtopic": "Méthode scientifique",
      "type": "mcq",
      "question": "Quelle est la première étape de la démarche scientifique ?",
      "choices": ["Formuler une hypothèse","Observer et poser une question","Analyser les résultats","Réaliser l'expérience"],
      "answer": "Observer et poser une question",
      "solution": "La démarche scientifique commence par l'observation d'un phénomène et la formulation d'une question de recherche. On émet ensuite une hypothèse."
    },
    {
      "subtopic": "Méthode scientifique",
      "type": "open",
      "question": "Décris les étapes de la démarche expérimentale en utilisant l'exemple suivant : 'Les plantes poussent-elles mieux avec de la lumière artificielle qu'avec la lumière du soleil ?'",
      "choices": null,
      "answer": "1. Observation/question ; 2. Hypothèse (ex. : la lumière naturelle favorise mieux la croissance) ; 3. Expérimentation (2 groupes de plantes) ; 4. Analyse ; 5. Conclusion.",
      "solution": "Une expérience valide comporte un groupe témoin (lumière solaire) et un groupe expérimental (lumière artificielle), toutes autres conditions égales."
    },
    {
      "subtopic": "Matière & énergie",
      "type": "mcq",
      "question": "Quel changement d'état se produit lorsque l'eau liquide devient de la vapeur ?",
      "choices": ["Fusion","Solidification","Vaporisation","Condensation"],
      "answer": "Vaporisation",
      "solution": "La vaporisation (ou évaporation/ébullition) est le passage de l'état liquide à l'état gazeux. Le point d'ébullition de l'eau est 100 °C à pression normale."
    },
    {
      "subtopic": "Vivant",
      "type": "mcq",
      "question": "Quelle est la fonction principale de la chlorophylle dans les plantes ?",
      "choices": ["Absorber l'eau","Capter l'énergie lumineuse pour la photosynthèse","Transporter les nutriments","Produire des graines"],
      "answer": "Capter l'énergie lumineuse pour la photosynthèse",
      "solution": "La chlorophylle est le pigment vert des plantes. Elle absorbe la lumière (surtout rouge et bleue) et la convertit en énergie chimique lors de la photosynthèse."
    },
    {
      "subtopic": "Environnement",
      "type": "open",
      "question": "Nomme deux conséquences des changements climatiques sur les écosystèmes québécois et explique brièvement chacune.",
      "choices": null,
      "answer": "Ex. : 1) Fonte des glaces → perte d'habitat pour les espèces polaires. 2) Déplacement des espèces vers le nord → perturbation des écosystèmes locaux.",
      "solution": "Les changements climatiques modifient les habitats, les cycles de reproduction et la biodiversité. Il existe de nombreuses réponses valides."
    },
    {
      "subtopic": "Systèmes techniques",
      "type": "mcq",
      "question": "Dans un système de levier du 1er genre, où se trouve le point d'appui ?",
      "choices": ["Du même côté que la charge","Du même côté que la force","Entre la force et la charge","Toujours au centre"],
      "answer": "Entre la force et la charge",
      "solution": "Dans un levier du 1er genre (ex. : balançoire, ciseau), le point d'appui est entre la force appliquée et la charge à déplacer."
    },
    {
      "subtopic": "Univers",
      "type": "mcq",
      "question": "Combien de temps la lumière du Soleil met-elle pour atteindre la Terre ?",
      "choices": ["1 seconde","8 minutes","1 heure","1 jour"],
      "answer": "8 minutes",
      "solution": "La lumière voyage à environ 300 000 km/s. La distance Terre-Soleil est d'environ 150 millions de km, soit environ 8 minutes de trajet lumineux."
    },
    {
      "subtopic": "Projets techno",
      "type": "open",
      "question": "Tu dois concevoir un pont en papier capable de supporter le plus de poids possible. Décris 2 principes d'ingénierie que tu utiliserais et explique pourquoi.",
      "choices": null,
      "answer": "Ex. : 1) Triangulation → structure plus rigide car le triangle ne se déforme pas facilement. 2) Répartition du poids → poutres en I distribuent la charge uniformément.",
      "solution": "En ingénierie, la forme et la disposition des matériaux déterminent la résistance d'une structure. Le triangle est la forme la plus stable."
    }
  ],
  "sec1_3": [
    {
      "subtopic": "Sociétés du monde",
      "type": "mcq",
      "question": "Quel fleuve est considéré comme le berceau de la civilisation égyptienne antique ?",
      "choices": ["Le Tigre","L'Euphrate","Le Nil","Le Congo"],
      "answer": "Le Nil",
      "solution": "La civilisation égyptienne s'est développée le long du Nil. Les crues annuelles fertilisaient les terres, permettant l'agriculture et le développement d'une société organisée."
    },
    {
      "subtopic": "Sociétés du monde",
      "type": "open",
      "question": "Compare deux aspects (économie et gouvernement) entre la démocratie athénienne et la société féodale médiévale européenne.",
      "choices": null,
      "answer": "Athènes : économie basée sur le commerce maritime, gouvernement démocratique direct. Moyen Âge : économie agricole et féodale, gouvernement monarchique/seigneurial.",
      "solution": "La comparaison doit porter sur des critères précis (économie, politique). Les deux sociétés ont des structures de pouvoir et des bases économiques très différentes."
    },
    {
      "subtopic": "Grandes civilisations",
      "type": "mcq",
      "question": "Quel peuple a construit le Colisée à Rome ?",
      "choices": ["Les Grecs","Les Romains","Les Égyptiens","Les Mayas"],
      "answer": "Les Romains",
      "solution": "Le Colisée (Colosseum) a été construit à Rome entre 72 et 80 apr. J.-C. sous les empereurs Vespasien et Titus. Il pouvait accueillir jusqu'à 80 000 spectateurs."
    },
    {
      "subtopic": "Territoires",
      "type": "mcq",
      "question": "Quel type de territoire est caractérisé par une forte densité de population et une économie diversifiée ?",
      "choices": ["Territoire rural","Territoire métropolitain","Territoire forestier","Territoire autochtone"],
      "answer": "Territoire métropolitain",
      "solution": "Un territoire métropolitain (grande ville et sa banlieue) se caractérise par une forte concentration de population, des activités économiques variées et des infrastructures développées."
    },
    {
      "subtopic": "Cartes & atlas",
      "type": "open",
      "question": "Explique la différence entre la latitude et la longitude. Comment ces coordonnées permettent-elles de localiser un point sur la Terre ?",
      "choices": null,
      "answer": "La latitude mesure la distance en degrés au nord ou au sud de l'équateur (0° à 90°). La longitude mesure la distance à l'est ou à l'ouest du méridien de Greenwich (0° à 180°). Ensemble, elles donnent la position exacte de tout point.",
      "solution": "Le réseau de méridiens (longitude) et de parallèles (latitude) forme une grille de coordonnées géographiques. Chaque point a une adresse unique."
    },
    {
      "subtopic": "Repères chronologiques",
      "type": "mcq",
      "question": "En quelle année Christophe Colomb atteint-il les Amériques pour la première fois ?",
      "choices": ["1492","1496","1502","1488"],
      "answer": "1492",
      "solution": "Le 12 octobre 1492, Christophe Colomb, navigateur génois mandaté par l'Espagne, atteint une île des Bahamas, marquant le 'contact' entre l'Europe et les Amériques."
    },
    {
      "subtopic": "Droits & démocratie",
      "type": "mcq",
      "question": "Quel document fondamental adopté en 1948 définit les droits universels de toute personne humaine ?",
      "choices": ["La Charte canadienne","La Constitution américaine","La Déclaration universelle des droits de l'homme","Le Code civil du Québec"],
      "answer": "La Déclaration universelle des droits de l'homme",
      "solution": "La DUDH a été adoptée par l'ONU le 10 décembre 1948. Elle proclame des droits fondamentaux inaliénables pour tous les êtres humains, sans distinction."
    }
  ],
  "sec1_4": [
    {
      "subtopic": "Speaking & listening",
      "type": "mcq",
      "question": "Which expression is used to politely disagree with someone in English?",
      "choices": ["I totally agree!","You're wrong.","I see your point, but I think...","Whatever."],
      "answer": "I see your point, but I think...",
      "solution": "Polite disagreement acknowledges the other person's view before stating your own. 'I see your point, but...' is a respectful way to express a different opinion."
    },
    {
      "subtopic": "Reading comprehension",
      "type": "open",
      "question": "Read this sentence: 'Despite the heavy rain, the children played outside joyfully.' What does 'despite' tell us about the relationship between the rain and the children's behaviour?",
      "choices": null,
      "answer": "'Despite' shows a contrast or unexpected situation: usually rain would stop children from playing, but here they played anyway. It means 'even though' or 'in spite of'.",
      "solution": "'Despite' is a preposition showing contrast. Understanding such connecting words is key to reading comprehension."
    },
    {
      "subtopic": "Writing",
      "type": "mcq",
      "question": "Which sentence uses correct punctuation?",
      "choices": ["I like cats dogs and birds","I like cats, dogs, and birds.","I like cats dogs, and birds","I like: cats dogs and birds."],
      "answer": "I like cats, dogs, and birds.",
      "solution": "Items in a series (list) must be separated by commas. The sentence ends with a period. The Oxford comma before 'and' is standard in formal writing."
    },
    {
      "subtopic": "Vocabulary",
      "type": "mcq",
      "question": "What is the meaning of the word 'enormous'?",
      "choices": ["Very small","Very fast","Very large","Very quiet"],
      "answer": "Very large",
      "solution": "'Enormous' means extremely large or huge. It comes from Latin 'enormis' (out of the norm). Synonym: gigantic, massive, immense."
    },
    {
      "subtopic": "Grammar",
      "type": "mcq",
      "question": "Which sentence is in the simple past tense?",
      "choices": ["She is eating lunch.","She will eat lunch.","She ate lunch.","She has eaten lunch."],
      "answer": "She ate lunch.",
      "solution": "The simple past tense uses the past form of the verb (ate = past of eat). It describes a completed action in the past, without any auxiliary verb like 'has'."
    },
    {
      "subtopic": "Media texts",
      "type": "open",
      "question": "Look at an advertisement you know. Identify ONE persuasive technique it uses (e.g., celebrity endorsement, emotional appeal, repetition) and explain how it works.",
      "choices": null,
      "answer": "Personal answer expected. Example: 'The ad uses a celebrity to suggest that buying the product makes you cool like them (celebrity endorsement).'",
      "solution": "Media texts use persuasion strategies to influence the audience. Recognizing these techniques develops critical media literacy."
    }
  ],
  "sec1_5": [
    {
      "subtopic": "Arts plastiques",
      "type": "mcq",
      "question": "Quelles sont les trois couleurs primaires en arts plastiques (peinture) ?",
      "choices": ["Rouge, vert, bleu","Rouge, jaune, bleu","Orange, violet, vert","Noir, blanc, gris"],
      "answer": "Rouge, jaune, bleu",
      "solution": "En peinture (synthèse soustractive), les couleurs primaires sont le rouge, le jaune et le bleu. En mélangeant ces couleurs, on obtient les couleurs secondaires."
    },
    {
      "subtopic": "Arts plastiques",
      "type": "open",
      "question": "Décris la différence entre une ligne de contour et une texture dans une œuvre d'art plastique. Donne un exemple de chacune.",
      "choices": null,
      "answer": "La ligne de contour délimite la forme d'un objet (ex. : le trait qui dessine un visage). La texture imite ou représente la surface d'un matériau (ex. : des hachures pour simuler la rugosité du bois).",
      "solution": "En arts plastiques, les éléments du langage visuel incluent la ligne, la forme, la couleur, la texture et l'espace. Chacun joue un rôle dans l'expression artistique."
    },
    {
      "subtopic": "Musique",
      "type": "mcq",
      "question": "Combien de temps dure une noire (note de musique) dans une mesure à 4/4 ?",
      "choices": ["4 temps","2 temps","1 temps","1/2 temps"],
      "answer": "1 temps",
      "solution": "Dans une mesure à 4/4, la noire vaut 1 temps. La ronde vaut 4 temps, la blanche 2 temps, la croche 1/2 temps."
    },
    {
      "subtopic": "Danse",
      "type": "mcq",
      "question": "Quel terme désigne l'énergie et la qualité du mouvement en danse (fort, doux, saccadé, fluide) ?",
      "choices": ["Le rythme","Le temps","La dynamique","L'espace"],
      "answer": "La dynamique",
      "solution": "La dynamique décrit comment un mouvement est exécuté : son intensité, sa qualité (fluide, saccadée) et son énergie. C'est l'un des éléments fondamentaux du langage de la danse."
    },
    {
      "subtopic": "Art dramatique",
      "type": "open",
      "question": "Explique ce qu'est la 'tension dramatique' dans une pièce de théâtre et comment on peut la créer.",
      "choices": null,
      "answer": "La tension dramatique est le sentiment d'attente et de suspense ressenti par le public. On la crée par des conflits entre personnages, des mystères non résolus ou des situations dangereuses.",
      "solution": "La tension maintient l'intérêt du spectateur. Elle naît de l'incertitude : on ne sait pas comment la situation va se résoudre. Les acteurs peuvent la renforcer par leur jeu, leurs pauses et leur gestuelle."
    },
    {
      "subtopic": "Musique",
      "type": "mcq",
      "question": "Lequel de ces instruments fait partie de la famille des cordes frottées ?",
      "choices": ["Piano","Violon","Trompette","Flûte"],
      "answer": "Violon",
      "solution": "Le violon est un instrument à cordes frottées car on utilise un archet pour frotter les cordes et produire le son."
    },
    {
      "subtopic": "Musique",
      "type": "mcq",
      "question": "Combien de temps dure une noire dans une mesure 4/4 ?",
      "choices": ["1/4 de temps","1/2 temps","1 temps","2 temps"],
      "answer": "1 temps",
      "solution": "Dans une mesure 4/4, la noire vaut exactement 1 temps, ce qui en fait l'unité de base pour compter le rythme."
    },
    {
      "subtopic": "Musique",
      "type": "mcq",
      "question": "Sur quelle ligne de la portée en clé de sol se trouve la note SI ?",
      "choices": ["Première ligne","Deuxième ligne","Troisième ligne","Quatrième ligne"],
      "answer": "Troisième ligne",
      "solution": "En clé de sol, la note SI se trouve sur la troisième ligne de la portée en comptant de bas en haut."
    },
    {
      "subtopic": "Musique",
      "type": "open",
      "question": "Nomme trois caractéristiques principales de la musique classique et explique pourquoi ce genre musical est encore populaire aujourd'hui.",
      "choices": null,
      "answer": "Trois caractéristiques : utilisation d'orchestres symphoniques, structures complexes comme la sonate ou la symphonie, et techniques sophistiquées. La musique classique reste populaire car elle exprime des émotions universelles, développe la concentration et l'écoute, et influence encore la musique de films et la musique contemporaine.",
      "solution": "Une bonne réponse doit identifier des éléments techniques de la musique classique et expliquer son impact culturel actuel avec des exemples concrets."
    }
  ],
  "sec1_6": [
    {
      "subtopic": "Sports collectifs",
      "type": "mcq",
      "question": "Dans un match de basketball, combien de points vaut un panier réussi de l'extérieur de la ligne des 3 points ?",
      "choices": ["1 point","2 points","3 points","4 points"],
      "answer": "3 points",
      "solution": "En basketball, les paniers valent : 1 point (lancer franc), 2 points (intérieur de la ligne), 3 points (extérieur de la ligne des trois points)."
    },
    {
      "subtopic": "Sports collectifs",
      "type": "open",
      "question": "Explique l'importance de la communication dans une équipe sportive. Donne deux exemples concrets d'une bonne communication lors d'un match.",
      "choices": null,
      "answer": "La communication permet de coordonner les actions, d'éviter les erreurs et de renforcer l'esprit d'équipe. Ex. : 1) Appeler 'je l'ai !' au volleyball pour éviter les collisions. 2) Indiquer à un coéquipier s'il est marqué.",
      "solution": "Sans communication, chaque joueur agit seul. Une équipe efficace partage l'information en temps réel pour s'adapter aux situations de jeu."
    },
    {
      "subtopic": "Condition physique",
      "type": "mcq",
      "question": "Quel type d'exercice améliore principalement la capacité cardiovasculaire ?",
      "choices": ["La musculation lourde","La flexibilité (étirements)","L'exercice aérobique continu (course, vélo)","Les exercices d'équilibre"],
      "answer": "L'exercice aérobique continu (course, vélo)",
      "solution": "Les exercices aérobiques (cardio) sollicitent le cœur et les poumons sur une longue durée. Ils améliorent l'endurance cardiovasculaire, contrairement à la musculation qui développe surtout la force."
    },
    {
      "subtopic": "Hygiène & santé",
      "type": "mcq",
      "question": "Pourquoi est-il recommandé de dormir entre 8 et 10 heures par nuit à l'adolescence ?",
      "choices": ["Pour faire plaisir aux parents","Parce que le cerveau et le corps se développent durant le sommeil","Pour avoir l'énergie de regarder des films","Parce que l'école commence tôt"],
      "answer": "Parce que le cerveau et le corps se développent durant le sommeil",
      "solution": "Durant l'adolescence, le sommeil est essentiel à la croissance, à la consolidation de la mémoire et à la régulation des émotions. Le manque de sommeil nuit aux performances scolaires et à la santé."
    },
    {
      "subtopic": "Nutrition",
      "type": "open",
      "question": "Décris les caractéristiques d'une assiette équilibrée selon le Guide alimentaire canadien et explique l'importance de chaque groupe.",
      "choices": null,
      "answer": "La moitié de l'assiette : légumes et fruits (vitamines, fibres). Le quart : protéines (viande, légumineuses, œufs – construction musculaire). Le quart : grains entiers (énergie durable). Eau comme boisson principale.",
      "solution": "Le Guide alimentaire canadien (2019) mise sur les proportions plutôt que les portions. Une alimentation variée réduit les risques de maladies chroniques."
    },
    {
      "subtopic": "Plein air",
      "type": "mcq",
      "question": "Quel équipement est indispensable pour une randonnée sécuritaire en forêt au Québec ?",
      "choices": ["Un téléphone sans batterie","Une carte topographique et une boussole","Des vêtements de couleur vive seulement","Une tente de luxe"],
      "answer": "Une carte topographique et une boussole",
      "solution": "En forêt, une carte topographique et une boussole permettent de s'orienter sans signal cellulaire. Avec de l'eau, de la nourriture et des vêtements adaptés, ils constituent les éléments de base de la sécurité en plein air."
    }
  ],
  "sec1_7": [
    {
      "subtopic": "Identité québécoise",
      "type": "mcq",
      "question": "Quelle est la langue officielle du Québec selon la Charte de la langue française (Loi 101) ?",
      "choices": ["L'anglais","Le français et l'anglais","Le français","Le français, l'anglais et les langues autochtones"],
      "answer": "Le français",
      "solution": "La Charte de la langue française (1977), aussi appelée Loi 101, fait du français la seule langue officielle du Québec. Elle régit l'usage du français au travail, dans l'affichage et dans l'enseignement."
    },
    {
      "subtopic": "Identité québécoise",
      "type": "open",
      "question": "Nomme deux éléments qui caractérisent l'identité culturelle québécoise et explique leur importance.",
      "choices": null,
      "answer": "Ex. : 1) La langue française – véhicule de la culture, de la littérature et des arts québécois. 2) L'histoire de la Nouvelle-France – fondement de la mémoire collective et des institutions.",
      "solution": "L'identité culturelle est un ensemble de traits partagés (langue, histoire, valeurs, arts) qui définissent une communauté. Pour le Québec, la langue française est souvent au cœur de cette identité."
    },
    {
      "subtopic": "Valeurs démocratiques",
      "type": "mcq",
      "question": "Quel est le rôle principal d'un parlement dans une démocratie ?",
      "choices": ["Appliquer les lois","Voter et adopter les lois","Juger les citoyens","Diriger l'armée"],
      "answer": "Voter et adopter les lois",
      "solution": "Dans une démocratie, le parlement (assemblée de représentants élus) vote et adopte les lois. Le gouvernement les applique, et les tribunaux les interprètent (séparation des pouvoirs)."
    },
    {
      "subtopic": "Diversité culturelle",
      "type": "mcq",
      "question": "Qu'est-ce que l'interculturalisme québécois promeut ?",
      "choices": ["L'assimilation des immigrants à la culture québécoise","L'isolement de chaque communauté culturelle","Un échange et une intégration respectant la langue et les valeurs communes","L'interdiction de pratiquer d'autres cultures"],
      "answer": "Un échange et une intégration respectant la langue et les valeurs communes",
      "solution": "L'interculturalisme québécois favorise l'intégration à travers le dialogue et l'échange, tout en maintenant le français comme langue commune et les valeurs démocratiques partagées."
    },
    {
      "subtopic": "Enjeux sociaux",
      "type": "open",
      "question": "Explique ce qu'est l'intimidation (bullying) à l'école et décris deux conséquences qu'elle peut avoir sur la victime.",
      "choices": null,
      "answer": "L'intimidation est un comportement répété visant à blesser, humilier ou exclure une personne. Conséquences : anxiété/dépression, baisse des résultats scolaires, isolement social, perte de confiance en soi.",
      "solution": "L'intimidation peut être physique, verbale, sociale ou cybernétique. Ses impacts sur la santé mentale sont sérieux et documentés."
    },
    {
      "subtopic": "Dialogue éthique",
      "type": "mcq",
      "question": "Dans un dialogue éthique, qu'est-ce qu'un 'argument d'autorité' ?",
      "choices": ["Un argument basé sur des faits vérifiables","Un argument qui utilise les émotions","Un argument qui s'appuie sur l'opinion d'un expert ou d'une figure d'autorité","Un argument logique et rationnel"],
      "answer": "Un argument qui s'appuie sur l'opinion d'un expert ou d'une figure d'autorité",
      "solution": "L'argument d'autorité cite un expert, un texte ou une figure reconnue pour appuyer une position. Il est valide s'il est pertinent, mais peut être un sophisme s'il est utilisé à mauvais escient."
    }
  ],
  "pri5_0": [
    {
      "subtopic": "Grammaire",
      "type": "mcq",
      "question": "Dans la phrase 'Les chats dorment sur le sofa', quel est le sujet ?",
      "choices": ["dorment","sur le sofa","Les chats","le sofa"],
      "answer": "Les chats",
      "solution": "Le sujet est le groupe de mots qui fait l'action. On trouve le sujet en posant la question 'Qui est-ce qui dort ?' → Les chats."
    },
    {
      "subtopic": "Grammaire",
      "type": "mcq",
      "question": "Quel signe de ponctuation utilise-t-on à la fin d'une phrase interrogative ?",
      "choices": ["Un point (.)","Un point d'exclamation (!)","Un point d'interrogation (?)","Une virgule (,)"],
      "answer": "Un point d'interrogation (?)",
      "solution": "Une phrase interrogative pose une question. Elle se termine toujours par un point d'interrogation (?). Ex. : 'Quel temps fait-il ?'"
    },
    {
      "subtopic": "Conjugaison",
      "type": "mcq",
      "question": "Conjugue le verbe 'chanter' à la 1re personne du singulier, présent de l'indicatif.",
      "choices": ["je chante","je chantes","je chantais","je chanterai"],
      "answer": "je chante",
      "solution": "Au présent de l'indicatif, les verbes du 1er groupe (en -er) prennent la terminaison -e à la 1re personne du singulier : je chante, tu chantes, il chante."
    },
    {
      "subtopic": "Lecture",
      "type": "open",
      "question": "Décris en tes mots ce qu'est l'idée principale d'un texte et comment tu la trouves.",
      "choices": null,
      "answer": "L'idée principale est le message le plus important du texte, ce dont il parle globalement. Pour la trouver, on se demande : 'De quoi parle ce texte en une phrase ?'",
      "solution": "L'idée principale se distingue des détails. Elle est souvent dans la première ou la dernière phrase d'un paragraphe, ou on peut la formuler en résumant le texte."
    },
    {
      "subtopic": "Orthographe",
      "type": "mcq",
      "question": "Quel est l'accord correct : 'Les filles sont _____ heureuses.' ?",
      "choices": ["très","trés","trez","trais"],
      "answer": "très",
      "solution": "'Très' est un adverbe invariable qui s'écrit toujours de la même façon avec un accent grave sur le è. L'adjectif 'heureuses' s'accorde avec 'filles' (féminin pluriel)."
    },
    {
      "subtopic": "Vocabulaire",
      "type": "mcq",
      "question": "Quel est le synonyme du mot 'courageux' ?",
      "choices": ["Peureux","Brave","Timide","Paresseux"],
      "answer": "Brave",
      "solution": "Un synonyme est un mot qui a un sens identique ou très proche. 'Courageux' et 'brave' signifient tous les deux 'qui n'a pas peur'. D'autres synonymes : intrépide, audacieux."
    },
    {
      "subtopic": "Rédaction",
      "type": "open",
      "question": "Écris 3 phrases pour raconter ce que tu as fait hier soir. Utilise le passé composé.",
      "choices": null,
      "answer": "Réponse personnelle. Critères : 3 phrases au passé composé bien formées (auxiliaire avoir ou être + participe passé), cohérence et ponctuation.",
      "solution": "Le passé composé se forme avec l'auxiliaire avoir ou être suivi du participe passé du verbe. Ex. : 'J'ai mangé', 'Nous sommes allés'."
    },
    {
      "subtopic": "Compréhension",
      "type": "mcq",
      "question": "Dans un texte, qu'est-ce qu'un indice de temps ?",
      "choices": ["Un mot qui indique un lieu","Un mot ou groupe de mots qui situe l'action dans le temps","Un mot qui exprime une émotion","Un mot de liaison entre deux idées"],
      "answer": "Un mot ou groupe de mots qui situe l'action dans le temps",
      "solution": "Les indices de temps (hier, le lendemain, en 1867, à midi...) indiquent quand se passe l'action. Ils sont importants pour comprendre la chronologie dans un texte narratif."
    }
  ],
  "pri5_1": [
    {
      "subtopic": "Nombres naturels",
      "type": "mcq",
      "question": "Quel est le plus grand nombre : 34 567 ou 34 657 ?",
      "choices": ["34 567","34 657","Ils sont égaux","Impossible à dire"],
      "answer": "34 657",
      "solution": "On compare les chiffres de gauche à droite. Les milliers (34) sont identiques. On compare les centaines : 5 < 6, donc 34 657 > 34 567."
    },
    {
      "subtopic": "Nombres naturels",
      "type": "open",
      "question": "Écris en chiffres le nombre : 'deux cent mille trois cent quarante-huit'. Ensuite, indique la valeur du chiffre 3 dans ce nombre.",
      "choices": null,
      "answer": "200 348. Le chiffre 3 est à la position des centaines : sa valeur est 300.",
      "solution": "On lit les nombres en groupes : deux cent mille = 200 000 ; trois cent quarante-huit = 348. La valeur positionnelle dépend de la colonne."
    },
    {
      "subtopic": "Opérations (+−×÷)",
      "type": "mcq",
      "question": "Calcule : 48 ÷ 6 = ?",
      "choices": ["7","8","9","6"],
      "answer": "8",
      "solution": "La division est l'opération inverse de la multiplication. 6 × 8 = 48, donc 48 ÷ 6 = 8."
    },
    {
      "subtopic": "Fractions & décimaux",
      "type": "mcq",
      "question": "Quel nombre décimal correspond à la fraction 3/4 ?",
      "choices": ["0,25","0,50","0,75","0,34"],
      "answer": "0,75",
      "solution": "3/4 = 3 ÷ 4 = 0,75. On peut aussi penser que 1/4 = 0,25, donc 3/4 = 3 × 0,25 = 0,75."
    },
    {
      "subtopic": "Géométrie",
      "type": "mcq",
      "question": "Combien de côtés a un hexagone ?",
      "choices": ["4","5","6","8"],
      "answer": "6",
      "solution": "Un hexagone a 6 côtés et 6 angles. Le préfixe 'hexa' signifie six en grec."
    },
    {
      "subtopic": "Mesures",
      "type": "open",
      "question": "Un ruban mesure 1,5 mètre. Combien vaut-il en centimètres ? Montre ta démarche.",
      "choices": null,
      "answer": "1,5 m × 100 = 150 cm. Il y a 100 centimètres dans 1 mètre, donc 1,5 m = 150 cm.",
      "solution": "Pour convertir des mètres en centimètres, on multiplie par 100."
    },
    {
      "subtopic": "Probabilités",
      "type": "mcq",
      "question": "On tire une bille au hasard dans un sac contenant 3 billes rouges et 7 billes bleues. Quelle est la probabilité de tirer une bille rouge ?",
      "choices": ["3/10","7/10","3/7","1/2"],
      "answer": "3/10",
      "solution": "Il y a 3 billes rouges sur un total de 10 billes (3+7). La probabilité est 3/10, soit 30%."
    },
    {
      "subtopic": "Statistiques",
      "type": "mcq",
      "question": "Dans la série de données 4, 6, 6, 8, 10, quel est le mode ?",
      "choices": ["4","6","8","10"],
      "answer": "6",
      "solution": "Le mode est la valeur qui apparaît le plus souvent. Ici, 6 apparaît deux fois. Le mode est donc 6."
    }
  ],
  "pri5_2": [
    {
      "subtopic": "Corps humain",
      "type": "mcq",
      "question": "Quel organe pompe le sang dans tout le corps ?",
      "choices": ["Les poumons","Le foie","Le cœur","Les reins"],
      "answer": "Le cœur",
      "solution": "Le cœur est un muscle creux qui bat en moyenne 70 fois par minute. Il propulse le sang dans les artères et le reçoit par les veines."
    },
    {
      "subtopic": "Corps humain",
      "type": "open",
      "question": "Explique le rôle des poumons dans la respiration. Qu'échange-t-on entre l'air et le sang ?",
      "choices": null,
      "answer": "Les poumons permettent les échanges gazeux : le sang absorbe l'oxygène de l'air et rejette le dioxyde de carbone (CO₂). Ces échanges se font dans les alvéoles pulmonaires.",
      "solution": "La respiration a deux aspects : la ventilation (entrée/sortie de l'air) et les échanges gazeux. L'oxygène est indispensable à la vie des cellules."
    },
    {
      "subtopic": "Écosystèmes",
      "type": "mcq",
      "question": "Qu'est-ce qu'une chaîne alimentaire ?",
      "choices": ["Un circuit d'alimentation dans un supermarché","Une séquence montrant qui mange qui dans un milieu naturel","Un régime alimentaire pour animaux","Une liste de recettes de cuisine"],
      "answer": "Une séquence montrant qui mange qui dans un milieu naturel",
      "solution": "Une chaîne alimentaire représente le transfert d'énergie d'un organisme à l'autre. Ex. : herbe → lapin → renard."
    },
    {
      "subtopic": "Matière & énergie",
      "type": "mcq",
      "question": "Quelle est la propriété de la matière qui permet de distinguer le fer du bois ?",
      "choices": ["La couleur seulement","La masse volumique (densité)","La taille de l'objet","La température de la pièce"],
      "answer": "La masse volumique (densité)",
      "solution": "La masse volumique est la masse d'un matériau par unité de volume. Le fer est beaucoup plus dense que le bois."
    },
    {
      "subtopic": "Forces simples",
      "type": "open",
      "question": "Donne deux exemples de situations de la vie quotidienne où la force de friction (frottement) est utile. Explique pourquoi.",
      "choices": null,
      "answer": "1) Les semelles de chaussures : la friction empêche de glisser sur le sol. 2) Les freins de vélo : la friction entre les plaquettes et la roue ralentit le vélo.",
      "solution": "La friction est une force de résistance qui s'oppose au mouvement entre deux surfaces."
    },
    {
      "subtopic": "Expériences",
      "type": "mcq",
      "question": "Pourquoi utilise-t-on un 'groupe témoin' dans une expérience scientifique ?",
      "choices": ["Pour observer deux résultats différents en même temps","Pour avoir une référence de comparaison sans la variable testée","Pour accélérer l'expérience","Pour éviter de devoir répéter l'expérience"],
      "answer": "Pour avoir une référence de comparaison sans la variable testée",
      "solution": "Le groupe témoin ne reçoit pas le traitement expérimental. Il sert de point de comparaison."
    }
  ],
  "pri5_3": [
    {
      "subtopic": "Sociétés autochtones",
      "type": "mcq",
      "question": "Quel peuple autochtone habitait principalement la région du Saint-Laurent au moment des premiers contacts avec les Européens ?",
      "choices": ["Les Hurons-Wendats","Les Iroquois","Les Algonquins","Les Micmacs"],
      "answer": "Les Iroquois",
      "solution": "Les Iroquois (Haudenosaunee) occupaient la vallée du Saint-Laurent. Jacques Cartier les a rencontrés lors de ses voyages en 1534-1542."
    },
    {
      "subtopic": "Sociétés autochtones",
      "type": "open",
      "question": "Décris deux caractéristiques de la société des Algonquins (mode de vie, économie) avant l'arrivée des Européens.",
      "choices": null,
      "answer": "Les Algonquins étaient semi-nomades : ils se déplaçaient selon les saisons pour chasser, pêcher et cueillir. Leur organisation sociale était basée sur des bandes familiales.",
      "solution": "Les sociétés autochtones avaient des modes de vie adaptés à leur environnement."
    },
    {
      "subtopic": "Nouvelle-France",
      "type": "mcq",
      "question": "Quel explorateur a fondé la ville de Québec en 1608 ?",
      "choices": ["Jacques Cartier","Jean Talon","Samuel de Champlain","Louis Hébert"],
      "answer": "Samuel de Champlain",
      "solution": "Samuel de Champlain fonda l'Habitation de Québec le 3 juillet 1608. Ce poste de traite devint le berceau de la colonie française en Amérique du Nord."
    },
    {
      "subtopic": "Régime britannique",
      "type": "mcq",
      "question": "Quel traité, signé en 1763, cède officiellement la Nouvelle-France à la Grande-Bretagne ?",
      "choices": ["Le Traité de Paris (1763)","L'Acte de Québec (1774)","Le Traité d'Utrecht (1713)","La Proclamation royale (1763)"],
      "answer": "Le Traité de Paris (1763)",
      "solution": "À la suite de la défaite française sur les plaines d'Abraham (1759), le Traité de Paris (1763) cède officiellement le Canada à la Grande-Bretagne."
    },
    {
      "subtopic": "Cartes du Québec",
      "type": "open",
      "question": "Nomme deux régions administratives du Québec et indique une caractéristique géographique de chacune.",
      "choices": null,
      "answer": "Exemples : Montréal (île, fleuve Saint-Laurent, métropole) ; Abitibi-Témiscamingue (forêt boréale, mines, lacs) ; Gaspésie (péninsule, monts Chic-Chocs).",
      "solution": "Le Québec compte 17 régions administratives aux caractéristiques géographiques variées."
    },
    {
      "subtopic": "Repères historiques",
      "type": "mcq",
      "question": "En quelle année la Confédération canadienne a-t-elle été proclamée ?",
      "choices": ["1534","1760","1867","1980"],
      "answer": "1867",
      "solution": "Le 1er juillet 1867, l'Acte de l'Amérique du Nord britannique crée la Confédération canadienne."
    }
  ],
  "pri5_4": [
    {
      "subtopic": "Listening & speaking",
      "type": "mcq",
      "question": "What do you say in English when you meet someone for the first time?",
      "choices": ["See you later!","Nice to meet you!","Good night!","How are you doing?"],
      "answer": "Nice to meet you!",
      "solution": "'Nice to meet you' is the standard greeting when meeting someone for the first time."
    },
    {
      "subtopic": "Simple reading",
      "type": "mcq",
      "question": "Read: 'Tom has a red bike. He rides it to school every day.' What colour is Tom's bike?",
      "choices": ["Blue","Green","Red","Yellow"],
      "answer": "Red",
      "solution": "The text says 'Tom has a red bike.' The answer is directly stated in the first sentence."
    },
    {
      "subtopic": "Vocabulary",
      "type": "mcq",
      "question": "What is the opposite (antonym) of 'hot'?",
      "choices": ["Warm","Cold","Big","Fast"],
      "answer": "Cold",
      "solution": "Antonyms are words with opposite meanings. Hot ↔ Cold."
    },
    {
      "subtopic": "Short writing",
      "type": "open",
      "question": "Write 2 sentences about your favourite animal. Use simple present tense.",
      "choices": null,
      "answer": "Personal answer. Example: 'My favourite animal is a dog. Dogs are friendly and playful.'",
      "solution": "Simple present tense is used for facts and habits. Subject + verb (+ s for he/she/it)."
    },
    {
      "subtopic": "Basic grammar",
      "type": "mcq",
      "question": "Which sentence is correct?",
      "choices": ["She don't like pizza.","She doesn't likes pizza.","She doesn't like pizza.","She not like pizza."],
      "answer": "She doesn't like pizza.",
      "solution": "We use 'doesn't' (does not) for he/she/it in negative sentences. The main verb stays in its base form."
    },
    {
      "subtopic": "Songs & poems",
      "type": "open",
      "question": "In the song 'Twinkle Twinkle Little Star', what does the star look like? Use words from the song.",
      "choices": null,
      "answer": "The star looks like a diamond in the sky ('Like a diamond in the sky').",
      "solution": "Songs and poems use figurative language. A simile compares using 'like' or 'as'."
    }
  ],
  "pri5_5": [
    {
      "subtopic": "Arts plastiques",
      "type": "mcq",
      "question": "Qu'obtient-on en mélangeant les couleurs rouge et jaune ?",
      "choices": ["Violet","Vert","Orange","Brun"],
      "answer": "Orange",
      "solution": "En peinture, le mélange rouge + jaune donne l'orange. C'est une couleur secondaire."
    },
    {
      "subtopic": "Arts plastiques",
      "type": "open",
      "question": "Décris ce qu'est une 'composition' en arts plastiques. Quels éléments peut-on organiser dans une composition ?",
      "choices": null,
      "answer": "Une composition est l'organisation des éléments visuels dans l'espace de la feuille ou de la toile. On y place des formes, des couleurs, des lignes et des textures.",
      "solution": "La composition répond à des choix artistiques : centrer un sujet, créer un déséquilibre expressif, utiliser la règle des tiers, etc."
    },
    {
      "subtopic": "Dessin & peinture",
      "type": "mcq",
      "question": "Quelle technique consiste à appliquer de la peinture par petites touches de couleurs pures, sans les mélanger sur la toile ?",
      "choices": ["L'aquarelle","Le pointillisme","La fresque","Le lavis"],
      "answer": "Le pointillisme",
      "solution": "Le pointillisme utilise des petits points de couleurs pures. Vus à distance, les points se mélangent optiquement."
    },
    {
      "subtopic": "Musique",
      "type": "mcq",
      "question": "Comment appelle-t-on la hauteur d'un son (grave ou aigu) en musique ?",
      "choices": ["Le rythme","La durée","La hauteur (le pitch)","Le timbre"],
      "answer": "La hauteur (le pitch)",
      "solution": "La hauteur du son indique s'il est grave (basse fréquence) ou aigu (haute fréquence)."
    },
    {
      "subtopic": "Art numérique",
      "type": "open",
      "question": "Nomme deux différences entre l'art numérique et la peinture traditionnelle.",
      "choices": null,
      "answer": "1) L'art numérique se crée sur ordinateur/tablette, la peinture avec des pinceaux et de la toile. 2) L'art numérique peut être facilement modifié (annuler, copier-coller).",
      "solution": "L'art numérique utilise des outils technologiques mais applique les mêmes principes visuels."
    }
  ],
  "pri5_6": [
    {
      "subtopic": "Sports & jeux",
      "type": "mcq",
      "question": "Combien de joueurs y a-t-il dans une équipe de soccer (football) sur le terrain ?",
      "choices": ["9","10","11","12"],
      "answer": "11",
      "solution": "Une équipe de soccer est composée de 11 joueurs sur le terrain : 1 gardien de but et 10 joueurs de champ."
    },
    {
      "subtopic": "Sports & jeux",
      "type": "open",
      "question": "Explique les règles de base du jeu de balle-molle pour quelqu'un qui ne l'a jamais joué.",
      "choices": null,
      "answer": "Un frappeur essaie de frapper la balle lancée par le lanceur. S'il frappe, il court vers les buts. L'équipe en défense doit attraper la balle ou la lancer sur un but avant le coureur.",
      "solution": "L'explication doit inclure les rôles (frappeur, lanceur, défense) et l'objectif (marquer des points en complétant les buts)."
    },
    {
      "subtopic": "Habiletés motrices",
      "type": "mcq",
      "question": "Quelle habileté motrice de base est principalement sollicitée lors d'une passe au basketball ?",
      "choices": ["La course","Le lancer","Le saut","L'esquive"],
      "answer": "Le lancer",
      "solution": "La passe (au basketball) est une forme de lancer. Les habiletés motrices de base comprennent la locomotion et la manipulation."
    },
    {
      "subtopic": "Saine alimentation",
      "type": "mcq",
      "question": "Quelle est la boisson la plus recommandée pour s'hydrater lors d'une activité physique ?",
      "choices": ["Un jus de fruits sucré","Une boisson énergisante","De l'eau","Un lait au chocolat"],
      "answer": "De l'eau",
      "solution": "L'eau est la meilleure boisson pour s'hydrater. Elle n'apporte pas de sucre ajouté ni de caféine."
    },
    {
      "subtopic": "Condition physique",
      "type": "open",
      "question": "Nomme 3 activités physiques adaptées à un enfant de 11 ans et explique le bienfait principal de chacune.",
      "choices": null,
      "answer": "Ex. : 1) Natation → endurance cardiovasculaire. 2) Vélo → développement des jambes et cardio. 3) Yoga → flexibilité et gestion du stress.",
      "solution": "Les bienfaits de l'activité physique incluent la santé cardiovasculaire, la force musculaire, la flexibilité et le bien-être mental."
    }
  ],
  "pri5_7": [
    {
      "subtopic": "Traditions du Québec",
      "type": "mcq",
      "question": "Quelle fête nationale est célébrée au Québec le 24 juin ?",
      "choices": ["La fête du Canada","La fête de Noël","La Saint-Jean-Baptiste","La Toussaint"],
      "answer": "La Saint-Jean-Baptiste",
      "solution": "Le 24 juin est la fête nationale du Québec. Elle est célébrée par des feux de joie, des festivals et des rassemblements."
    },
    {
      "subtopic": "Traditions du Québec",
      "type": "open",
      "question": "Décris deux traditions québécoises que tu connais et explique leur importance pour la culture québécoise.",
      "choices": null,
      "answer": "Ex. : 1) La cabane à sucre – tradition liée à la récolte du sirop d'érable. 2) Le carnaval de Québec – célèbre la culture hivernale unique du Québec.",
      "solution": "Les traditions reflètent l'histoire, les valeurs et l'environnement d'une culture."
    },
    {
      "subtopic": "Valeurs partagées",
      "type": "mcq",
      "question": "Laquelle de ces valeurs est fondamentale dans la société québécoise et est protégée par la Charte des droits et libertés ?",
      "choices": ["La richesse","L'égalité entre les personnes","La compétition","La célébrité"],
      "answer": "L'égalité entre les personnes",
      "solution": "La Charte des droits et libertés de la personne du Québec (1975) garantit l'égalité de tous sans discrimination."
    },
    {
      "subtopic": "Respect des différences",
      "type": "mcq",
      "question": "Qu'est-ce que la discrimination ?",
      "choices": ["Aider quelqu'un qui en a besoin","Traiter des personnes de façon injuste à cause de leurs différences","Célébrer la diversité culturelle","Apprendre une nouvelle langue"],
      "answer": "Traiter des personnes de façon injuste à cause de leurs différences",
      "solution": "La discrimination consiste à traiter quelqu'un de manière injuste à cause de caractéristiques comme sa race, sa religion, son sexe ou son âge."
    },
    {
      "subtopic": "Règles de vie",
      "type": "open",
      "question": "Explique pourquoi les règles de vie sont importantes à l'école. Donne deux exemples de règles et la raison de chacune.",
      "choices": null,
      "answer": "Les règles permettent à tous de vivre ensemble dans le respect et la sécurité. Ex. : 1) Ne pas courir dans les couloirs → éviter les accidents. 2) Lever la main pour parler → permettre à tout le monde de s'exprimer.",
      "solution": "Les règles de vie collective servent à protéger les droits de chacun et à maintenir un environnement propice aux apprentissages."
    },
    {
      "subtopic": "Dialogue",
      "type": "mcq",
      "question": "Qu'est-ce que l'écoute active dans un dialogue ?",
      "choices": ["Parler le plus possible","Attendre son tour pour parler uniquement","Prêter une attention complète à son interlocuteur et montrer qu'on comprend","Donner son avis sans écouter l'autre"],
      "answer": "Prêter une attention complète à son interlocuteur et montrer qu'on comprend",
      "solution": "L'écoute active implique de regarder la personne, de ne pas l'interrompre, de reformuler ce qu'elle dit et de poser des questions."
    }
  ]
};
