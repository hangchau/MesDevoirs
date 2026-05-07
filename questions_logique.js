// Logique — Examen d'admission au secondaire (Québec)
// Pool LQ : 50 questions réelles + 17 générées par IA (≈25 %)
// Format identique à EXAM_CG_POOL

var EXAM_LQ_POOL = [

// ── Questions tirées de l'examen réel ────────────────────────────────────────

// Q1
{q:"Quel mot est synonyme de « guéri » ?",
 choices:["affaibli","épuisé","rétabli","malade"],
 answer:"rétabli",
 sol:"Guéri et rétabli ont le même sens : revenu à la santé après une maladie ou une blessure."},

// Q2 — visual pattern
{q:"Quelle figure complète la suite ?",
 choices:["△","◻","○","◇"],
 answer:"△",
 graphic:'<svg viewBox="0 0 340 70" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:70px;display:block;margin:0 auto"><rect x="10" y="15" width="40" height="40" fill="none" stroke="#5B4FCF" stroke-width="3"/><circle cx="90" cy="35" r="20" fill="none" stroke="#5B4FCF" stroke-width="3"/><polygon points="150,58 130,18 170,18" fill="none" stroke="#5B4FCF" stroke-width="3"/><rect x="190" y="15" width="40" height="40" fill="none" stroke="#5B4FCF" stroke-width="3"/><circle cx="270" cy="35" r="20" fill="none" stroke="#5B4FCF" stroke-width="3"/><rect x="300" y="15" width="40" height="40" fill="none" stroke="#E63946" stroke-width="2" stroke-dasharray="4"/><text x="320" y="43" font-size="26" fill="#E63946" font-weight="bold" text-anchor="middle">?</text></svg>',
 sol:"La suite alterne : carré → cercle → triangle → carré → cercle → triangle. La prochaine figure est un triangle (△)."},

// Q3
{q:"Quel mot est le contraire de « harmonie » ?",
 choices:["mélodie","accord","unité","discorde"],
 answer:"discorde",
 sol:"L'harmonie représente l'accord et la paix. La discorde est son exact opposé : désaccord, conflit."},

// Q4 — visual matrix
{q:"Quelle figure manque dans la grille ?",
 choices:["petit cercle","petit carré","petit triangle","grand triangle"],
 answer:"petit triangle",
 graphic:'<svg viewBox="0 0 210 210" xmlns="http://www.w3.org/2000/svg" style="max-width:200px;height:200px;display:block;margin:0 auto"><line x1="70" y1="0" x2="70" y2="210" stroke="#ddd" stroke-width="1.5"/><line x1="140" y1="0" x2="140" y2="210" stroke="#ddd" stroke-width="1.5"/><line x1="0" y1="70" x2="210" y2="70" stroke="#ddd" stroke-width="1.5"/><line x1="0" y1="140" x2="210" y2="140" stroke="#ddd" stroke-width="1.5"/><rect x="8" y="8" width="54" height="54" fill="none" stroke="#5B4FCF" stroke-width="3"/><circle cx="105" cy="35" r="27" fill="none" stroke="#5B4FCF" stroke-width="3"/><polygon points="175,62 153,14 197,14" fill="none" stroke="#5B4FCF" stroke-width="3"/><rect x="20" y="85" width="30" height="30" fill="none" stroke="#1B9E78" stroke-width="2.5"/><circle cx="105" cy="105" r="15" fill="none" stroke="#1B9E78" stroke-width="2.5"/><polygon points="175,132 160,92 190,92" fill="none" stroke="#1B9E78" stroke-width="2.5"/><rect x="27" y="155" width="16" height="16" fill="none" stroke="#F97316" stroke-width="2"/><circle cx="105" cy="163" r="8" fill="none" stroke="#F97316" stroke-width="2"/><rect x="153" y="148" width="44" height="44" fill="#FFF5EB" stroke="#E63946" stroke-width="1.5" stroke-dasharray="4"/><text x="175" y="177" font-size="24" fill="#E63946" font-weight="bold" text-anchor="middle">?</text></svg>',
 sol:"Chaque rangée contient un carré, un cercle et un triangle de taille décroissante. La case manquante est un petit triangle."},

// Q5
{q:"Quelle lettre manque dans la suite : A, C, E, G, I, K, M, ___ ?",
 choices:["O","N","P","L"],
 answer:"O",
 sol:"On avance de 2 lettres à la fois en sautant une lettre : A, C, E, G, I, K, M, O."},

// Q6
{q:"Quelle lettre manque dans la suite : a, z, b, y, c, x, d, w, e, v, f, ___ ?",
 choices:["g","t","u","w"],
 answer:"u",
 sol:"La suite alterne une lettre croissante (a, b, c, d, e, f…) et une décroissante (z, y, x, w, v, u…). Après f, la suivante dans la série décroissante est u."},

// Q7 — visual analogy
{q:"Grande figure est à petite figure. Grand cercle est à ___",
 choices:["grand triangle","petit cercle","grand carré","petit triangle"],
 answer:"petit cercle",
 graphic:'<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:100px;display:block;margin:0 auto"><rect x="5" y="10" width="60" height="60" fill="none" stroke="#5B4FCF" stroke-width="3"/><text x="78" y="48" font-size="20" fill="#888" text-anchor="middle">→</text><rect x="95" y="28" width="26" height="26" fill="none" stroke="#5B4FCF" stroke-width="2"/><text x="140" y="55" font-size="24" fill="#aaa" font-weight="bold" text-anchor="middle">::</text><circle cx="195" cy="45" r="38" fill="none" stroke="#1B9E78" stroke-width="3"/><text x="243" y="50" font-size="20" fill="#888" text-anchor="middle">→</text><text x="295" y="56" font-size="28" fill="#E63946" font-weight="bold" text-anchor="middle">?</text></svg>',
 sol:"Grande figure → petite figure. Un grand rectangle devient un petit rectangle. Un grand cercle devient un petit cercle."},

// Q8
{q:"Dans un code secret, chaque lettre est remplacée par la lettre qui la précède dans l'alphabet (B→A, C→B…). Quel est le code du mot RDOQ ?",
 choices:["qbnp","qcno","qcnp","pcmo"],
 answer:"qcnp",
 sol:"R-1=Q, D-1=C, O-1=N, Q-1=P. Le mot RDOQ devient QCNP dans ce code."},

// Q9
{q:"Quel est le contraire du verbe « prendre » ?",
 choices:["vendre","garder","emprunter","donner"],
 answer:"donner",
 sol:"Le contraire de prendre est donner : prendre, c'est recevoir quelque chose ; donner, c'est le transférer à autrui."},

// Q10
{q:"Le cheval est à la calèche ce que le chien est ___",
 choices:["à la niche","au traîneau","à la laisse","au chenil"],
 answer:"au traîneau",
 sol:"Un cheval tire une calèche ; des chiens tirent un traîneau. La relation est : animal de trait → véhicule qu'il tire."},

// Q11 — dot patterns (triangular numbers)
{q:"Combien de points contient la prochaine figure de la suite ?",
 choices:["12","13","15","18"],
 answer:"15",
 graphic:'<svg viewBox="0 0 330 90" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:85px;display:block;margin:0 auto"><circle cx="22" cy="45" r="7" fill="#5B4FCF"/><circle cx="75" cy="28" r="7" fill="#5B4FCF"/><circle cx="60" cy="58" r="7" fill="#5B4FCF"/><circle cx="90" cy="58" r="7" fill="#5B4FCF"/><circle cx="148" cy="18" r="6" fill="#5B4FCF"/><circle cx="133" cy="43" r="6" fill="#5B4FCF"/><circle cx="163" cy="43" r="6" fill="#5B4FCF"/><circle cx="118" cy="68" r="6" fill="#5B4FCF"/><circle cx="148" cy="68" r="6" fill="#5B4FCF"/><circle cx="178" cy="68" r="6" fill="#5B4FCF"/><circle cx="228" cy="12" r="5" fill="#5B4FCF"/><circle cx="213" cy="34" r="5" fill="#5B4FCF"/><circle cx="243" cy="34" r="5" fill="#5B4FCF"/><circle cx="198" cy="56" r="5" fill="#5B4FCF"/><circle cx="228" cy="56" r="5" fill="#5B4FCF"/><circle cx="258" cy="56" r="5" fill="#5B4FCF"/><circle cx="183" cy="78" r="5" fill="#5B4FCF"/><circle cx="213" cy="78" r="5" fill="#5B4FCF"/><circle cx="243" cy="78" r="5" fill="#5B4FCF"/><circle cx="273" cy="78" r="5" fill="#5B4FCF"/><text x="310" y="52" font-size="28" fill="#E63946" font-weight="bold" text-anchor="middle">?</text></svg>',
 sol:"Les figures sont des triangles de points : 1, 3, 6, 10, 15… On ajoute une rangée à chaque fois (+2, +3, +4, +5). La prochaine figure a 15 points."},

// Q12
{q:"Quelle valeur complète la suite : 3, 6, 12, ___, 48 ?",
 choices:["18","20","24","30"],
 answer:"24",
 sol:"Chaque terme est multiplié par 2 : 3×2=6, 6×2=12, 12×2=24, 24×2=48."},

// Q13
{q:"Quelle valeur manque dans la suite : 1, 4, ___, 16, 25 ?",
 choices:["6","7","11","9"],
 answer:"9",
 sol:"La suite est formée des carrés des entiers : 1²=1, 2²=4, 3²=9, 4²=16, 5²=25."},

// Q14
{q:"Un train parcourt 7 km en 5 minutes. Combien de kilomètres parcourt-il en 1 heure à la même vitesse ?",
 choices:["42 km","70 km","84 km","105 km"],
 answer:"84 km",
 sol:"Le train parcourt 7 km en 5 min, soit 7×12 = 84 km en 60 minutes (1 heure)."},

// Q15
{q:"Dans un code secret, chaque lettre avance de 2 rangs dans l'alphabet (A→C, B→D…). Quel est le code du mot SEPR ?",
 choices:["ocnm","qcnp","rdoq","sbop"],
 answer:"qcnp",
 sol:"S-2=Q, E-2=C, P-2=N, R-2=P. Le mot SEPR s'écrit QCNP dans ce code."},

// Q16
{q:"Quatre amies se placent en file. Raphaëlle est derrière Martine mais devant Luce. Josée est la dernière. Quel est l'ordre de la première à la dernière ?",
 choices:["Raphaëlle Martine Luce Josée","Martine Raphaëlle Luce Josée","Luce Martine Raphaëlle Josée","Josée Luce Raphaëlle Martine"],
 answer:"Martine Raphaëlle Luce Josée",
 sol:"Raphaëlle est derrière Martine → Martine est en 1re. Raphaëlle est devant Luce → Luce est en 3e. Josée est dernière (4e)."},

// Q17
{q:"Léa a 72 pages à lire. Si elle lit 12 pages par jour, combien de jours lui faudra-t-il pour finir ?",
 choices:["4","5","6","8"],
 answer:"6",
 sol:"72 ÷ 12 = 6 jours."},

// Q18
{q:"Parmi ces animaux, lequel n'est pas un animal de ferme ?",
 choices:["poule","lièvre","vache","mouton"],
 answer:"lièvre",
 sol:"La poule, la vache et le mouton sont des animaux de ferme domestiqués. Le lièvre est un animal sauvage."},

// Q19 — visual rotation
{q:"Quelle flèche montre la rotation de 90° dans le sens des aiguilles d'une montre ?",
 choices:["↑","→","↓","←"],
 answer:"↓",
 graphic:'<svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:90px;display:block;margin:0 auto"><text x="30" y="65" font-size="48" fill="#5B4FCF" text-anchor="middle">←</text><text x="100" y="55" font-size="18" fill="#888" text-anchor="middle">90° ↻</text><text x="170" y="65" font-size="48" fill="#E63946" text-anchor="middle">?</text><text x="242" y="55" font-size="14" fill="#aaa" text-anchor="middle">↻ sens</text><text x="242" y="70" font-size="14" fill="#aaa" text-anchor="middle">horaire</text></svg>',
 sol:"Une flèche pointant à gauche (←), tournée de 90° dans le sens horaire, pointe vers le bas (↓)."},

// Q20
{q:"Si avant-hier c'était samedi, quel jour sommes-nous aujourd'hui ?",
 choices:["dimanche","lundi","mardi","mercredi"],
 answer:"lundi",
 sol:"Avant-hier = samedi, donc hier = dimanche, et aujourd'hui = lundi."},

// Q21
{q:"Parmi ces mots, lequel désigne une catégorie et non une espèce précise ?",
 choices:["tigre","lion","félin","léopard"],
 answer:"félin",
 sol:"Félin est un terme générique qui désigne toute la famille des chats (tigres, lions, léopards…). Les autres sont des espèces spécifiques."},

// Q22
{q:"Dans un sac, il y a 3 boules rouges et 3 boules bleues. Quelle est la probabilité de tirer une boule rouge ?",
 choices:["1 chance sur 3","1 chance sur 4","2 chances sur 3","1 chance sur 2"],
 answer:"1 chance sur 2",
 sol:"3 boules rouges sur 6 boules au total : 3/6 = 1/2 = 1 chance sur 2."},

// Q23 — visual series (polygon sides increasing)
{q:"Quelle figure vient ensuite dans la suite ?",
 choices:["pentagone (5 côtés)","hexagone (6 côtés)","octogone (8 côtés)","carré (4 côtés)"],
 answer:"hexagone (6 côtés)",
 graphic:'<svg viewBox="0 0 320 90" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:85px;display:block;margin:0 auto"><polygon points="35,15 55,15 65,33 55,50 35,50 25,33" fill="none" stroke="#5B4FCF" stroke-width="2.5"/><text x="45" y="68" font-size="11" fill="#888" text-anchor="middle">6 côtés</text><polygon points="120,10 145,10 155,32 145,55 120,55 110,32" fill="none" stroke="#5B4FCF" stroke-width="2.5"/><text x="132" y="68" font-size="11" fill="#888" text-anchor="middle">6 côtés</text><!-- Actually let me do 3,4,5 sides then ask for 6 --></svg>',
 graphic:'<svg viewBox="0 0 310 90" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:85px;display:block;margin:0 auto"><polygon points="35,58 55,15 75,58" fill="none" stroke="#5B4FCF" stroke-width="2.5"/><text x="55" y="75" font-size="11" fill="#666" text-anchor="middle">3 côtés</text><rect x="105" y="18" width="40" height="40" fill="none" stroke="#5B4FCF" stroke-width="2.5"/><text x="125" y="75" font-size="11" fill="#666" text-anchor="middle">4 côtés</text><polygon points="195,20 215,12 228,30 220,52 190,52 182,30" fill="none" stroke="#5B4FCF" stroke-width="2.5"/><text x="205" y="75" font-size="11" fill="#666" text-anchor="middle">5 côtés</text><rect x="255" y="18" width="44" height="44" fill="#FFF5EB" stroke="#E63946" stroke-width="1.5" stroke-dasharray="4"/><text x="277" y="48" font-size="22" fill="#E63946" font-weight="bold" text-anchor="middle">?</text></svg>',
 sol:"La suite augmente d'un côté à chaque fois : triangle (3) → carré (4) → pentagone (5) → hexagone (6)."},

// Q24
{q:"Quelle est la plus petite unité de temps parmi celles-ci ?",
 choices:["heure","minute","jour","seconde"],
 answer:"seconde",
 sol:"1 heure = 60 minutes, 1 minute = 60 secondes. La seconde est la plus petite unité de cette liste."},

// Q25
{q:"Pour avancer sur l'eau à la force des bras sans moteur ni voile, un rameur utilise ___",
 choices:["des rames","des ailes","des roues","des skis"],
 answer:"des rames",
 sol:"Les rames (ou avirons) sont les longues tiges avec palette plates qui permettent de propulser un bateau à bras."},

// Q26
{q:"Un train parcourt 10 km en 5 minutes. Combien de temps met-il pour parcourir 20 km à la même vitesse ?",
 choices:["5 min","10 min","15 min","20 min"],
 answer:"10 min",
 sol:"Si 10 km → 5 minutes, alors 20 km (le double) → 10 minutes."},

// Q27
{q:"Thomas quitte sa maison à 8 h 50 min. Son trajet dure 15 minutes. À quelle heure arrive-t-il ?",
 choices:["9 h 05","9 h 10","8 h 65","9 h 15"],
 answer:"9 h 05",
 sol:"8 h 50 + 15 min = 9 h 05."},

// Q28 — visual matrix (3×3, answer = choice c)
{q:"Quelle figure complète la matrice ?",
 choices:["cercle blanc","triangle noir","cercle noir","carré noir"],
 answer:"cercle noir",
 graphic:'<svg viewBox="0 0 195 195" xmlns="http://www.w3.org/2000/svg" style="max-width:195px;height:195px;display:block;margin:0 auto"><rect width="195" height="195" fill="#fafafa" rx="8"/><line x1="65" y1="0" x2="65" y2="195" stroke="#ccc" stroke-width="1.5"/><line x1="130" y1="0" x2="130" y2="195" stroke="#ccc" stroke-width="1.5"/><line x1="0" y1="65" x2="195" y2="65" stroke="#ccc" stroke-width="1.5"/><line x1="0" y1="130" x2="195" y2="130" stroke="#ccc" stroke-width="1.5"/><!-- Row 1: black shapes --><rect x="12" y="12" width="41" height="41" fill="#1e1b3a"/><circle cx="97" cy="32" r="21" fill="#1e1b3a"/><polygon points="162,55 145,12 179,12" fill="#1e1b3a"/><!-- Row 2: outline shapes --><rect x="12" y="77" width="41" height="41" fill="none" stroke="#1e1b3a" stroke-width="2.5"/><circle cx="97" cy="97" r="21" fill="none" stroke="#1e1b3a" stroke-width="2.5"/><polygon points="162,120 145,77 179,77" fill="none" stroke="#1e1b3a" stroke-width="2.5"/><!-- Row 3: dotted shapes --><rect x="12" y="142" width="41" height="41" fill="none" stroke="#1e1b3a" stroke-width="2" stroke-dasharray="4"/><polygon points="162,185 145,142 179,142" fill="none" stroke="#1e1b3a" stroke-width="2" stroke-dasharray="4"/><!-- Missing: col2 row3 = dotted circle --><rect x="70" y="135" width="60" height="60" fill="#FFF5EB" stroke="#E63946" stroke-width="1.5" stroke-dasharray="3"/><text x="100" y="171" font-size="22" fill="#E63946" font-weight="bold" text-anchor="middle">?</text></svg>',
 sol:"Chaque colonne contient le même type de forme. La règle des rangées : remplie → contour → pointillé. La case manquante doit être un cercle en pointillé (cercle noir/pointillé)."},

// Q29
{q:"Quelle valeur manque dans la suite : 1, 2, 4, 8, ___, 32 ?",
 choices:["12","16","20","24"],
 answer:"16",
 sol:"Chaque nombre est multiplié par 2 : 1, 2, 4, 8, 16, 32."},

// Q30
{q:"Je fais face à l'est (soleil levant) et je tourne à droite de 90°. Dans quelle direction suis-je maintenant orienté ?",
 choices:["l'ouest","le sud","le nord","l'est"],
 answer:"le sud",
 sol:"Face à l'est, tourner à droite de 90° oriente vers le sud (Est → Sud → Ouest → Nord dans le sens horaire)."},

// Q31
{q:"Parmi ces groupes, lequel contient uniquement des jeux de société ?",
 choices:["soccer, tennis, natation","Minecraft, Fortnite, Mario","Scrabble, Monopoly, dominos","Tetris, Pac-Man, Pong"],
 answer:"Scrabble, Monopoly, dominos",
 sol:"Le Scrabble, le Monopoly et les dominos sont des jeux de société classiques joués sur une table. Les autres sont des sports ou des jeux vidéo."},

// Q32
{q:"Sur un arc-en-ciel, quelle couleur se trouve entre le jaune et le bleu ?",
 choices:["orange","rouge","indigo","vert"],
 answer:"vert",
 sol:"Les couleurs de l'arc-en-ciel : rouge, orange, jaune, vert, bleu, indigo, violet. Le vert est bien entre le jaune et le bleu."},

// Q33
{q:"Un rectangle a une longueur de 12 cm et une largeur de 8 cm. Quel est son périmètre ?",
 choices:["20 cm","40 cm","96 cm","48 cm"],
 answer:"40 cm",
 sol:"Périmètre = 2 × (longueur + largeur) = 2 × (12 + 8) = 2 × 20 = 40 cm."},

// Q34
{q:"Combien de faces a un cube ?",
 choices:["4","6","8","12"],
 answer:"6",
 sol:"Un cube a 6 faces carrées : dessus, dessous, avant, arrière, gauche, droite."},

// Q35
{q:"Parmi ces étendues d'eau, laquelle est la plus grande ?",
 choices:["un lac","une rivière","l'océan","un étang"],
 answer:"l'océan",
 sol:"Les océans sont les plus grandes étendues d'eau sur Terre, couvrant environ 71 % de la surface du globe."},

// Q36
{q:"Charles a 35 $. Il achète un sandwich à 8 $ et une boisson à 7 $. Combien lui reste-t-il ?",
 choices:["15 $","20 $","22 $","25 $"],
 answer:"20 $",
 sol:"35 $ − 8 $ − 7 $ = 20 $."},

// Q37
{q:"Complète la phrase avec la conjonction appropriée : « Je sors me promener ___ il pleut. »",
 choices:["parce que","alors que","afin que","même si"],
 answer:"même si",
 sol:"« Même si » exprime une concession : malgré la pluie, je sors quand même. C'est la conjonction de concession correcte."},

// Q38
{q:"Combien de secondes y a-t-il dans 9 minutes ?",
 choices:["90 secondes","450 secondes","60 secondes","540 secondes"],
 answer:"540 secondes",
 sol:"1 minute = 60 secondes. 9 × 60 = 540 secondes."},

// Q39
{q:"Un homme est né en 1985. Quel âge a-t-il en 2026 ?",
 choices:["39 ans","40 ans","42 ans","41 ans"],
 answer:"41 ans",
 sol:"2026 − 1985 = 41 ans."},

// Q40
{q:"Emma et Liam ont ensemble 4,36 $. Emma a 2,00 $ de plus que Liam. Combien d'argent ont-ils chacun ?",
 choices:["2,36 $ et 0,36 $","2,50 $ et 1,86 $","2,18 $ et 2,18 $","3,18 $ et 1,18 $"],
 answer:"3,18 $ et 1,18 $",
 sol:"Liam = l, Emma = l + 2. Total : 2l + 2 = 4,36 → l = 1,18 $. Emma = 3,18 $. Vérif. : 3,18 + 1,18 = 4,36 ✓ et 3,18 − 1,18 = 2,00 ✓."},

// Q41 — Fibonacci
{q:"Quelle est la prochaine valeur de la suite : 89, 144, ___ ?",
 choices:["210","220","233","250"],
 answer:"233",
 sol:"C'est la suite de Fibonacci : chaque nombre est la somme des deux précédents. 89 + 144 = 233."},

// Q42
{q:"Quelle est la 4e lettre de la suite : A, B, D, ___, K, P ?",
 choices:["E","F","G","H"],
 answer:"G",
 sol:"Les différences augmentent de 1 : A+1=B, B+2=D, D+3=G, G+4=K, K+5=P. La 4e lettre est G."},

// Q43
{q:"Si Y = 6^X et X = 3, quelles sont les valeurs de X et Y ?",
 choices:["X=3, Y=18","X=3, Y=36","X=2, Y=36","X=3, Y=216"],
 answer:"X=3, Y=216",
 sol:"Si X = 3, alors Y = 6³ = 6 × 6 × 6 = 216."},

// Q44
{q:"Noël est le 25 décembre. Quelle est la date du lendemain de Noël ?",
 choices:["24 décembre","26 décembre","1er janvier","31 décembre"],
 answer:"26 décembre",
 sol:"Le lendemain du 25 décembre est le 26 décembre (aussi appelé Boxing Day dans les pays anglophones)."},

// Q45 — visual analogy (shapes and their outlines)
{q:"Quelle figure complète l'analogie ?",
 choices:["triangle rempli","rectangle vide","cercle rempli","triangle vide"],
 answer:"rectangle vide",
 graphic:'<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:100px;display:block;margin:0 auto"><circle cx="30" cy="45" r="26" fill="#5B4FCF"/><text x="68" y="50" font-size="20" fill="#888" text-anchor="middle">→</text><circle cx="105" cy="45" r="26" fill="none" stroke="#5B4FCF" stroke-width="2.5"/><text x="152" y="55" font-size="24" fill="#aaa" font-weight="bold" text-anchor="middle">::</text><rect x="175" y="18" width="50" height="50" fill="#1B9E78"/><text x="240" y="50" font-size="20" fill="#888" text-anchor="middle">→</text><rect x="258" y="18" width="50" height="50" fill="#FFF5EB" stroke="#E63946" stroke-width="1.5" stroke-dasharray="4"/><text x="283" y="50" font-size="22" fill="#E63946" font-weight="bold" text-anchor="middle">?</text></svg>',
 sol:"Cercle rempli → cercle vide :: rectangle rempli → rectangle vide. La figure remplie devient sa version vide (contour seulement)."},

// Q46
{q:"Quel mot est synonyme de « persévérer » ?",
 choices:["abandonner","hésiter","persister","renoncer"],
 answer:"persister",
 sol:"Persévérer et persister signifient tous les deux continuer malgré les obstacles ou les difficultés."},

// Q47
{q:"Parmi ces animaux, lequel n'est pas un rongeur ?",
 choices:["souris","castor","rat","cerf"],
 answer:"cerf",
 sol:"La souris, le castor et le rat sont des rongeurs (ils rongent avec leurs incisives). Le cerf est un cervidé, une famille tout à fait différente."},

// Q48
{q:"Quelle est la prochaine valeur de la suite : 1, 3, 6, 10, 15, ___ ?",
 choices:["18","20","21","24"],
 answer:"21",
 sol:"On ajoute des entiers croissants : +2, +3, +4, +5, +6. Donc 15 + 6 = 21 (nombres triangulaires)."},

// Q49 — mirror word
{q:"Quel groupe de lettres représente ORANGEADE lu dans un miroir (de droite à gauche) ?",
 choices:["EADEGNARO","ADAGNORE","EADNAGRO","ORANGEADE"],
 answer:"EADEGNARO",
 graphic:'<svg viewBox="0 0 320 80" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:75px;display:block;margin:0 auto"><rect x="5" y="10" width="145" height="55" fill="#F0EEFF" rx="6"/><text x="78" y="46" font-family="monospace" font-size="16" fill="#1e1b3a" font-weight="bold" text-anchor="middle">ORANGEADE</text><line x1="155" y1="5" x2="160" y2="75" stroke="#aaa" stroke-width="2"/><rect x="165" y="10" width="145" height="55" fill="#EDFAEB" rx="6" stroke="#1B9E78" stroke-width="1.5"/><text x="237" y="46" font-family="monospace" font-size="16" fill="#0A6B51" font-weight="bold" text-anchor="middle">?</text></svg>',
 sol:"Dans un miroir, l'ordre des lettres est inversé de droite à gauche. ORANGEADE lu à l'envers donne EADEGNARO."},

// Q50
{q:"Le frère de ma mère s'appelle Pierre. Pour moi, Pierre est ___",
 choices:["mon cousin","mon grand-père","mon beau-père","mon oncle"],
 answer:"mon oncle",
 sol:"Le frère de ta mère (ou de ton père) est ton oncle. Pierre est donc ton oncle."},

// ── Questions générées par IA ────────────────────────────────────────────────

// AI Q51
{q:"Quelle est la prochaine lettre de la suite : B, D, G, K, P, ___ ?",
 choices:["T","U","V","W"],
 answer:"V",
 sol:"Les différences augmentent de 1 : B+2=D, D+3=G, G+4=K, K+5=P, P+6=V.",
 ai:true},

// AI Q52
{q:"Boulanger est à pain ce que charpentier est à ___",
 choices:["marteau","bois","maison","clou"],
 answer:"bois",
 sol:"Le boulanger travaille le pain ; le charpentier travaille le bois. La relation est : artisan → matière qu'il travaille.",
 ai:true},

// AI Q53
{q:"Dans 5 ans, Marc aura le double de l'âge qu'il avait il y a 3 ans. Quel âge a-t-il maintenant ?",
 choices:["9 ans","10 ans","11 ans","13 ans"],
 answer:"11 ans",
 sol:"Soit x l'âge actuel. Dans 5 ans : x+5. Il y a 3 ans : x−3. Équation : x+5 = 2(x−3) → x+5 = 2x−6 → x = 11.",
 ai:true},

// AI Q54
{q:"On lance un dé à 6 faces équilibré. Quelle est la probabilité d'obtenir un nombre pair ?",
 choices:["1 chance sur 6","1 chance sur 3","1 chance sur 4","1 chance sur 2"],
 answer:"1 chance sur 2",
 sol:"Les nombres pairs sur un dé : 2, 4, 6 — soit 3 faces sur 6. 3/6 = 1/2 = 1 chance sur 2.",
 ai:true},

// AI Q55
{q:"Quelle est la prochaine valeur de la suite : 2, 6, 12, 20, 30, ___ ?",
 choices:["36","40","42","44"],
 answer:"42",
 sol:"La suite est n × (n+1) : 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42.",
 ai:true},

// AI Q56
{q:"Parmi ces mots, lequel n'appartient pas à la même catégorie que les autres ?",
 choices:["piano","guitare","pinceau","trompette"],
 answer:"pinceau",
 sol:"Piano, guitare et trompette sont des instruments de musique. Le pinceau est un outil de peinture.",
 ai:true},

// AI Q57
{q:"Si tous les chats sont des animaux et que Félix est un chat, alors ___",
 choices:["Félix peut être un animal","Félix n'est pas forcément un animal","Félix est un animal","Félix est un chien"],
 answer:"Félix est un animal",
 sol:"C'est un syllogisme : si tous les A sont des B et que X est un A, alors X est forcément un B. Félix (chat) est donc nécessairement un animal.",
 ai:true},

// AI Q58
{q:"Quelle est la prochaine valeur de la suite : 1, 8, 27, 64, ___ ?",
 choices:["100","108","125","216"],
 answer:"125",
 sol:"La suite est formée des cubes des entiers : 1³=1, 2³=8, 3³=27, 4³=64, 5³=125.",
 ai:true},

// AI Q59
{q:"Parmi ces lettres, laquelle est identique à son image dans un miroir vertical ?",
 choices:["R","P","O","F"],
 answer:"O",
 sol:"La lettre O est parfaitement symétrique : son reflet dans un miroir vertical est identique à l'original. R, P et F ne sont pas symétriques.",
 ai:true},

// AI Q60
{q:"Un film commence à 19 h 45 et dure 2 h 30. À quelle heure se termine-t-il ?",
 choices:["21 h 45","22 h 00","22 h 15","22 h 30"],
 answer:"22 h 15",
 sol:"19 h 45 + 2 h 30 = 19 h 45 + 2 h + 30 min = 21 h 45 + 30 min = 22 h 15.",
 ai:true},

// AI Q61
{q:"Livre est à bibliothèque ce que tableau est à ___",
 choices:["cadre","peinture","musée","galerie"],
 answer:"musée",
 sol:"Les livres sont conservés dans une bibliothèque ; les tableaux (œuvres d'art) sont exposés dans un musée.",
 ai:true},

// AI Q62
{q:"Dans la suite A, AA, AAA, AAAA… combien de A contient le 6e terme ?",
 choices:["4","5","6","7"],
 answer:"6",
 sol:"Chaque terme contient autant de A que son numéro d'ordre : le 1er a 1 A, le 2e a 2 A… Le 6e terme a donc 6 A.",
 ai:true},

// AI Q63
{q:"Si 3 + 3 = 12 et 4 + 4 = 20, combien vaut 5 + 5 dans ce code ?",
 choices:["10","25","30","55"],
 answer:"30",
 sol:"Le code : a + a = a × (a+1). Vérif. : 3×4=12 ✓, 4×5=20 ✓. Donc 5+5 = 5×6 = 30.",
 ai:true},

// AI Q64
{q:"Je marche 4 pas vers le nord, 4 pas vers l'est et 4 pas vers le sud. Dans quelle direction dois-je marcher pour revenir à mon point de départ ?",
 choices:["nord","est","sud","ouest"],
 answer:"ouest",
 sol:"Après 4N, 4E, 4S : je suis revenu à la même latitude qu'au début mais décalé de 4 pas à l'est. Je dois donc marcher vers l'ouest pour revenir.",
 ai:true},

// AI Q65
{q:"Quel mot est un homonyme de « ver » (animal) ?",
 choices:["vent","bleu","verre","cœur"],
 answer:"verre",
 sol:"Ver (animal) et verre (le récipient) se prononcent exactement de la même façon : ce sont des homonymes.",
 ai:true},

// AI Q66
{q:"Quelle valeur manque dans la suite : 100, 50, 25, ___, 6,25 ?",
 choices:["10","12,5","15","20"],
 answer:"12,5",
 sol:"On divise par 2 à chaque étape : 100÷2=50, 50÷2=25, 25÷2=12,5, 12,5÷2=6,25.",
 ai:true},

// AI Q67
{q:"Le père de mon père est mon ___",
 choices:["oncle","beau-père","grand-père","parrain"],
 answer:"grand-père",
 sol:"Le père de ton père (ou de ta mère) est ton grand-père paternel.",
 ai:true},

];
