// Connaissances générales — Examen d'admission au secondaire (Québec)
// Pool CG : 50 questions réelles + 17 générées par IA (≈25 %)
// Format identique à EXAM_FR_POOL / EXAM_MATH_B_POOL

var EXAM_CG_POOL = [

// ── Questions tirées de l'examen réel ────────────────────────────────────────

{q:"Lequel de ces arbres est un <strong>conifère</strong> ?",
 choices:["chêne","peuplier","bouleau","mélèze"],
 answer:"mélèze",
 sol:"Le mélèze (mélèze laricin) est un conifère — il produit des cônes. Le chêne, le peuplier et le bouleau sont des feuillus."},

{q:"Laquelle des classes animales suivantes <strong>n'est pas ovipare</strong> ?",
 choices:["les poissons","les oiseaux","les insectes","les mammifères"],
 answer:"les mammifères",
 sol:"Les mammifères sont vivipares (ils donnent naissance à des petits vivants). Poissons, oiseaux et insectes pondent des œufs."},

{q:"Qu'est-ce qu'une <strong>bibliographie</strong> ?",
 choices:["une personne qui travaille à la bibliothèque","une liste d'ouvrages","une bibliothèque","un écrit sur la vie de quelqu'un"],
 answer:"une liste d'ouvrages",
 sol:"Une bibliographie est une liste organisée de livres, articles ou autres sources consultées dans un travail."},

{q:"Quelle <strong>planète</strong> continue la suite&nbsp;? Mercure, Vénus, Terre…",
 choices:["Saturne","Mars","Neptune","Uranus"],
 answer:"Mars",
 sol:"L'ordre des planètes du système solaire depuis le Soleil : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune."},

{q:"Quelle est la <strong>ville la plus ancienne</strong> d'Amérique du Nord ?",
 choices:["Montréal","Québec","New York","Trois-Rivières"],
 answer:"Québec",
 sol:"La ville de Québec, fondée en 1608 par Samuel de Champlain, est considérée comme la plus ancienne ville d'Amérique du Nord au nord du Mexique."},

{q:"Dans le conte <em>Les Trois Petits Cochons</em>, de quel matériau est construite la maison du <strong>deuxième</strong> petit cochon ?",
 choices:["en paille","en brique","en bois","en pierre"],
 answer:"en bois",
 sol:"Dans le conte traditionnel : le premier cochon construit en paille, le deuxième en bois, le troisième en briques."},

{q:"Qu'est-ce qu'un <strong>centurion</strong> ?",
 choices:["un officier dans la légion romaine","un souverain de l'Égypte ancienne","un être mi-homme, mi-cheval","un fou du roi"],
 answer:"un officier dans la légion romaine",
 sol:"Un centurion commandait une centuria (environ 80 soldats) dans l'armée romaine."},

{q:"Lequel des ponts suivants <strong>n'est pas situé</strong> dans la province de Québec ?",
 choices:["pont Champlain","pont Pierre-Laporte","pont de la Confédération","pont Jacques-Cartier"],
 answer:"pont de la Confédération",
 sol:"Le pont de la Confédération relie l'Île-du-Prince-Édouard au Nouveau-Brunswick. Les trois autres ponts enjambent le fleuve Saint-Laurent au Québec."},

{q:"En quelle année a été construit le <strong>métro de Montréal</strong> ?",
 choices:["1952","1966","1967","1976"],
 answer:"1966",
 sol:"Le métro de Montréal a été inauguré le 14 octobre 1966, à temps pour l'Exposition universelle de 1967."},

{q:"Lequel des mots suivants <strong>ne désigne pas un océan</strong> ?",
 choices:["Atlantique","Arctique","Indien","Océanie"],
 answer:"Océanie",
 sol:"L'Océanie est une région géographique (ensemble d'îles du Pacifique). Les cinq océans sont : Pacifique, Atlantique, Indien, Arctique et Austral."},

{q:"Quel sport <strong>n'appartient pas</strong> à l'<strong>athlétisme</strong> ?",
 choices:["le lancer du javelot","le sprint","le triple saut","le plongeon"],
 answer:"le plongeon",
 sol:"Le plongeon est une discipline de natation. Le javelot, le sprint et le triple saut font partie de l'athlétisme."},

{q:"Quelle ville est connue sous le nom de « <strong>Ville Lumière</strong> » ?",
 choices:["Montréal","Paris","Londres","Ottawa"],
 answer:"Paris",
 sol:"Paris est surnommée « Ville Lumière » en raison de son rôle dans le siècle des Lumières et de son éclairage public avant-gardiste au XIXe siècle."},

{q:"Quel organe permet la fonction de <strong>l'olfaction</strong> ?",
 choices:["l'œil","la langue","le nez","la main"],
 answer:"le nez",
 sol:"L'olfaction est le sens de l'odorat. C'est le nez (et ses récepteurs olfactifs) qui permet de détecter les odeurs."},

{q:"Quel lac est relié au fleuve Saint-Laurent par la rivière Saguenay ?",
 choices:["le lac Saint-Jean","le lac Ontario","le lac Mistassini","le lac Huron"],
 answer:"le lac Saint-Jean",
 sol:"La rivière Saguenay prend sa source au lac Saint-Jean et se jette dans le fleuve Saint-Laurent à Tadoussac."},

{q:"En musique, quel mot signifie <strong>tempo rapide et gai</strong> ?",
 choices:["lento","staccato","decrescendo","allegro"],
 answer:"allegro",
 sol:"«Allegro» est une indication de tempo en musique classique signifiant «vif et animé». «Lento» signifie lent, «staccato» désigne un jeu détaché, et «decrescendo» indique une diminution du volume."},

{q:"Où est située <strong>l'Amérique du Nord</strong> ?",
 choices:["à l'est de l'océan Pacifique","au sud de l'Amérique du Sud","à l'est de l'océan Atlantique","au nord de l'océan Arctique"],
 answer:"à l'est de l'océan Pacifique",
 sol:"L'Amérique du Nord est bordée à l'ouest par l'océan Pacifique et à l'est par l'océan Atlantique. Elle est donc située à l'est du Pacifique."},

{q:"À quoi servent les <strong>fuseaux horaires</strong> ?",
 choices:["à partager la Terre en deux hémisphères","à déterminer les climats","à déterminer l'heure","aucune de ces réponses"],
 answer:"à déterminer l'heure",
 sol:"Les 24 fuseaux horaires divisent la Terre en zones où l'heure est la même. Ils permettent de coordonner l'heure à l'échelle mondiale."},

{q:"Dans quelle région du Québec se trouve le <strong>rocher Percé</strong> ?",
 choices:["Charlevoix","Saguenay–Lac-Saint-Jean","Outaouais","Gaspésie"],
 answer:"Gaspésie",
 sol:"Le rocher Percé est situé à l'extrémité est de la péninsule gaspésienne, dans la région de la Gaspésie."},

{q:"Qui a inventé le <strong>paratonnerre</strong> ?",
 choices:["Benjamin Franklin","Isaac Newton","Albert Einstein","Alexander Graham Bell"],
 answer:"Benjamin Franklin",
 sol:"Benjamin Franklin a inventé le paratonnerre vers 1752, après ses expériences sur la foudre avec un cerf-volant."},

{q:"Quel moyen de transport a été le premier à utiliser la <strong>vapeur</strong> ?",
 choices:["la voiture","le bateau","le train","le tramway"],
 answer:"le bateau",
 sol:"Le bateau à vapeur (steamboat) précède la locomotive à vapeur. Le premier bateau à vapeur commercial, le Clermont, a navigué en 1807."},

{q:"Comment appelle-t-on un animal qui <strong>capture ses proies vivantes</strong> pour s'alimenter ou pour nourrir ses petits ?",
 choices:["un carnivore","un destructeur","un oppresseur","un prédateur"],
 answer:"un prédateur",
 sol:"Un prédateur chasse et capture des proies vivantes. Le terme «carnivore» désigne plus généralement un animal qui mange de la viande, vivante ou non."},

{q:"Complète le <strong>proverbe</strong> suivant. « Mieux vaut tard que… »",
 choices:["plus tôt.","jamais.","pour toujours.","le matin."],
 answer:"jamais.",
 sol:"Le proverbe complet est : «Mieux vaut tard que jamais», signifiant qu'il vaut mieux agir avec retard que de ne pas agir du tout."},

{q:"Qui était <strong>Louis-Joseph Papineau</strong> ?",
 choices:["un acteur","un peintre","un sculpteur","un homme politique"],
 answer:"un homme politique",
 sol:"Louis-Joseph Papineau (1786–1871) était un avocat et homme politique québécois, chef du Parti patriote et figure centrale de la Rébellion des Patriotes de 1837–1838."},

{q:"<strong>Combien de gagnants</strong> montent sur le podium lors d'une épreuve aux Jeux olympiques ?",
 choices:["2","3","4","5"],
 answer:"3",
 sol:"Le podium olympique comporte trois marches : or (1er), argent (2e) et bronze (3e). Trois athlètes y montent."},

{q:"Combien <strong>mesure le Canada</strong> d'est en ouest ?",
 choices:["4 000 km","5 500 km","7 000 km","4 600 km"],
 answer:"5 500 km",
 sol:"Le Canada s'étend sur environ 5 514 km d'est en ouest, faisant de lui le deuxième plus grand pays du monde par sa superficie."},

{q:"Quel autre nom désigne un <strong>ver de terre</strong> ?",
 choices:["un ombilic","un fennec","un lombric","un agave"],
 answer:"un lombric",
 sol:"Le lombric est le nom scientifique du ver de terre commun. L'ombilic est le nombril, le fennec est un renard du désert, et l'agave est une plante."},

{q:"Quelle grande ville d'Italie est célèbre pour sa « <strong>tour penchée</strong> » ?",
 choices:["Rome","Milan","Pise","Venise"],
 answer:"Pise",
 sol:"La tour de Pise, construite entre le XIIe et le XIVe siècle, est célèbre pour son inclinaison causée par un affaissement du sol."},

{q:"Que signifie le mot latin <strong>post-scriptum</strong> ?",
 choices:["à envoyer par la poste","écrit après","après la poste","ne pas oublier"],
 answer:"écrit après",
 sol:"«Post» signifie «après» et «scriptum» signifie «écrit» en latin. Le post-scriptum (P.-S.) est une note ajoutée après la signature d'une lettre."},

{q:"Qu'est-ce qu'un <strong>farfadet</strong> ?",
 choices:["un outil","un être imaginaire","un tambour","un pot"],
 answer:"un être imaginaire",
 sol:"Un farfadet est un petit être imaginaire espiègle du folklore européen, semblable à un lutin ou un elfe."},

{q:"Quelles sont les <strong>couleurs primaires</strong> ?",
 choices:["bleu, blanc, rouge","jaune, rouge, vert","jaune, bleu, rouge","rouge, vert, bleu"],
 answer:"jaune, bleu, rouge",
 sol:"En peinture (modèle RJB), les trois couleurs primaires sont le jaune, le bleu et le rouge. Elles ne peuvent pas être obtenues par mélange d'autres couleurs."},

{q:"Quel personnage d'un conte célèbre a dit : « S'il vous plaît… <strong>dessine-moi un mouton !</strong> » ?",
 choices:["Pinocchio","Cendrillon","Blanche-Neige","Le Petit Prince"],
 answer:"Le Petit Prince",
 sol:"Cette phrase célèbre est tirée du livre <em>Le Petit Prince</em> d'Antoine de Saint-Exupéry (1943)."},

{q:"Combien de temps la <strong>Terre</strong> prend-elle pour faire le tour du Soleil ?",
 choices:["365 jours","366 jours","24 heures","365 jours ¼"],
 answer:"365 jours ¼",
 sol:"La Terre met exactement 365,25 jours pour orbiter autour du Soleil. C'est pourquoi on ajoute un jour tous les 4 ans (année bissextile)."},

{q:"Qui est l'auteur d'<strong>Harry Potter</strong> ?",
 choices:["Joanne Kathleen Rowling","John Ronald Reuel Tolkien","Anne Robillard","Bryan Perro"],
 answer:"Joanne Kathleen Rowling",
 sol:"J. K. Rowling est l'auteure britannique de la saga Harry Potter, publiée entre 1997 et 2007. Tolkien a écrit Le Seigneur des anneaux ; Anne Robillard et Bryan Perro sont des auteurs québécois."},

{q:"Qu'est-ce qu'un <strong>archipel</strong> ?",
 choices:["une partie de mer qui avance dans les terres","la partie terminale d'un fleuve qui se jette dans la mer","un groupe d'îles","une pointe de terre élevée qui s'avance dans la mer"],
 answer:"un groupe d'îles",
 sol:"Un archipel est un ensemble d'îles proches les unes des autres. Ex. : l'archipel des Canaries, l'archipel de Mingan au Québec."},

{q:"À quelle partie du corps appartient <strong>l'iris</strong> ?",
 choices:["à la cuisse","à l'oreille","au cerveau","à l'œil"],
 answer:"à l'œil",
 sol:"L'iris est la partie colorée de l'œil. Il régule la quantité de lumière qui entre dans l'œil en contrôlant la taille de la pupille."},

{q:"Qu'est-ce qu'un <strong>tamia</strong> ?",
 choices:["un ustensile de cuisson","un instrument de musique","un animal","un ingrédient"],
 answer:"un animal",
 sol:"Le tamia rayé (ou suisse) est un petit rongeur d'Amérique du Nord appartenant à la famille des écureuils."},

{q:"Quelle est la <strong>température</strong> de l'eau qui <strong>bout</strong> ?",
 choices:["20 °C","0 °C","100 °C","32 °C"],
 answer:"100 °C",
 sol:"L'eau bout à 100 °C au niveau de la mer (pression atmosphérique normale). À 0 °C, l'eau gèle ; à 32 °F = 0 °C."},

{q:"À quelle fonction s'applique le terme <strong>pontificat</strong> ?",
 choices:["professeur","psychologue","pape","politicien"],
 answer:"pape",
 sol:"Le pontificat désigne la durée du règne d'un pape. «Pontife» vient du latin <em>pontifex</em>, titre des grands prêtres romains."},

{q:"Quel animal <strong>coasse</strong> ?",
 choices:["la grenouille","le dindon","le hibou","le corbeau"],
 answer:"la grenouille",
 sol:"La grenouille coasse. Le dindon glougloute, le hibou ulule et le corbeau croasse."},

{q:"Qui est <strong>Marie Curie</strong> ?",
 choices:["une célèbre musicienne","une célèbre physicienne","une célèbre institutrice","une célèbre exploratrice"],
 answer:"une célèbre physicienne",
 sol:"Marie Curie (1867–1934) est une physicienne et chimiste polonaise naturalisée française. Elle a découvert le polonium et le radium et est la première femme à avoir remporté un prix Nobel."},

{q:"Où est située la partie <strong>boréale</strong> du globe ?",
 choices:["au nord","au sud","à l'est","à l'ouest"],
 answer:"au nord",
 sol:"«Boréal» vient de Borée, dieu grec du vent du nord. La forêt boréale, par exemple, se trouve dans les régions nordiques du globe."},

{q:"Quel est le nom de la fée dans <em><strong>La Belle au bois dormant</strong></em> ?",
 choices:["la fée Clochette","la fée Marraine","la fée Carabosse","la fée Bleue"],
 answer:"la fée Carabosse",
 sol:"Dans le conte de Perrault, la fée Carabosse est la méchante fée qui maudit la princesse Aurore à sa naissance."},

{q:"À quel mois de l'année est associée la petite plante appelée <strong>muguet</strong> ?",
 choices:["avril","mai","juin","juillet"],
 answer:"mai",
 sol:"Le muguet est offert le 1er mai en France et au Québec comme porte-bonheur. Il fleurit au printemps."},

{q:"Sous quel nom la ville de <strong>Montréal</strong> a-t-elle été fondée ?",
 choices:["Lachine","Hochelaga","Maisonneuve","Ville-Marie"],
 answer:"Ville-Marie",
 sol:"Paul de Chomedey de Maisonneuve a fondé la ville en 1642 sous le nom de Ville-Marie. Hochelaga était le nom du village iroquois qui s'y trouvait auparavant."},

{q:"Qui est <strong>Jupiter</strong> ?",
 choices:["le dieu des Vents","le maître des dieux romains","le dieu de la Médecine","le maître des dieux grecs"],
 answer:"le maître des dieux romains",
 sol:"Jupiter est le roi des dieux dans la mythologie romaine, équivalent de Zeus dans la mythologie grecque. Éole est le dieu des vents ; Esculape, celui de la médecine."},

{q:"Que tenait en son bec <strong>Maître Corbeau</strong> ?",
 choices:["un fruit","un ver","un fromage","une noix"],
 answer:"un fromage",
 sol:"Dans la fable de La Fontaine «Le Corbeau et le Renard», Maître Corbeau tenait en son bec un fromage. Le renard le flatte pour qu'il chante et le fromage tombe."},

{q:"Durant quelle saison survient <strong>l'été des Indiens</strong> ?",
 choices:["l'été","l'automne","l'hiver","le printemps"],
 answer:"l'automne",
 sol:"L'été des Indiens (ou été indien) désigne une période de temps doux et ensoleillé qui survient à la fin de l'automne, après les premières gelées."},

{q:"En musique, combien de temps vaut <strong>une noire</strong> ?",
 choices:["un temps","un demi-temps","deux temps","quatre temps"],
 answer:"un temps",
 sol:"La noire vaut 1 temps dans une mesure à 4/4. La blanche vaut 2 temps, la ronde vaut 4 temps, et la croche vaut ½ temps."},

{q:"Qu'est-ce qu'un <strong>fez</strong> ?",
 choices:["un chapeau","un outil","un ustensile","un tissu"],
 answer:"un chapeau",
 sol:"Le fez est un bonnet cylindrique rouge à gland, traditionnellement porté dans les pays du Maghreb et du Moyen-Orient."},

{q:"Comment se nomment les habitants de <strong>Trois-Rivières</strong> ?",
 choices:["Trois-Riverains","Trois-Rivièrens","Trifluviens","Triflaviens"],
 answer:"Trifluviens",
 sol:"Les habitants de Trois-Rivières se nomment Trifluviens. Ce nom vient du latin <em>Tres Fluvii</em> (trois rivières), car la ville est située à la confluence du Saint-Laurent et de trois chenaux du fleuve."},

// ── Questions générées par IA (style identique) ──────────────────────────────

{q:"Quel est le <strong>plus grand océan</strong> du monde ?",
 choices:["l'océan Atlantique","l'océan Indien","l'océan Pacifique","l'océan Arctique"],
 answer:"l'océan Pacifique",
 sol:"L'océan Pacifique couvre environ 165 millions de km², soit plus que toutes les terres émergées réunies. C'est le plus grand et le plus profond des océans.",
 ai:true},

{q:"Quelle est la <strong>capitale</strong> du Canada ?",
 choices:["Toronto","Montréal","Vancouver","Ottawa"],
 answer:"Ottawa",
 sol:"Ottawa, en Ontario, est la capitale fédérale du Canada depuis 1857. Elle abrite le Parlement canadien et le siège du gouvernement fédéral.",
 ai:true},

{q:"Combien y a-t-il de <strong>continents</strong> sur la Terre ?",
 choices:["5","6","7","8"],
 answer:"7",
 sol:"Les 7 continents sont : l'Afrique, l'Antarctique, l'Asie, l'Australie/Océanie, l'Europe, l'Amérique du Nord et l'Amérique du Sud.",
 ai:true},

{q:"Quel est le <strong>plus grand mammifère terrestre</strong> ?",
 choices:["la girafe","l'éléphant d'Afrique","le rhinocéros","l'hippopotame"],
 answer:"l'éléphant d'Afrique",
 sol:"L'éléphant d'Afrique peut peser jusqu'à 7 000 kg et mesurer 4 m au garrot. C'est le plus grand animal terrestre vivant.",
 ai:true},

{q:"En quelle année la <strong>Confédération canadienne</strong> a-t-elle été créée ?",
 choices:["1867","1791","1840","1900"],
 answer:"1867",
 sol:"Le 1er juillet 1867, l'Acte de l'Amérique du Nord britannique crée le Dominion du Canada, réunissant l'Ontario, le Québec, la Nouvelle-Écosse et le Nouveau-Brunswick.",
 ai:true},

{q:"Qui a peint <strong>La Joconde</strong> (Mona Lisa) ?",
 choices:["Michel-Ange","Raphaël","Léonard de Vinci","Pablo Picasso"],
 answer:"Léonard de Vinci",
 sol:"Léonard de Vinci a peint La Joconde entre 1503 et 1519. Ce tableau est exposé au musée du Louvre à Paris.",
 ai:true},

{q:"Quel animal est le <strong>symbole</strong> du Canada ?",
 choices:["l'orignal","le castor","l'ours polaire","l'aigle"],
 answer:"le castor",
 sol:"Le castor est l'emblème national du Canada depuis le XVIIe siècle. Il figure sur la pièce de cinq cents canadienne.",
 ai:true},

{q:"Combien d'<strong>os</strong> compte le squelette humain adulte ?",
 choices:["106","206","306","406"],
 answer:"206",
 sol:"Le squelette humain adulte est composé de 206 os. Un nouveau-né, lui, possède environ 270 os qui fusionnent avec la croissance.",
 ai:true},

{q:"Quelle planète est la <strong>plus proche du Soleil</strong> ?",
 choices:["Vénus","Mars","Mercure","Terre"],
 answer:"Mercure",
 sol:"Mercure est la première planète du système solaire. Elle se trouve à environ 58 millions de km du Soleil en moyenne.",
 ai:true},

{q:"Dans quel pays se trouvent les <strong>pyramides de Gizeh</strong> ?",
 choices:["en Irak","en Grèce","en Égypte","au Maroc"],
 answer:"en Égypte",
 sol:"Les pyramides de Gizeh, dont la Grande Pyramide de Khéops, sont situées près du Caire en Égypte. Elles font partie des Sept Merveilles du monde antique.",
 ai:true},

{q:"Quel est le <strong>fleuve le plus long</strong> du monde ?",
 choices:["l'Amazone","le Nil","le Mississippi","le Yang-Tsé"],
 answer:"le Nil",
 sol:"Le Nil, avec ses 6 650 km, est traditionnellement considéré comme le plus long fleuve du monde. Il traverse dix pays d'Afrique avant de se jeter dans la Méditerranée.",
 ai:true},

{q:"Combien de côtés a un <strong>hexagone</strong> ?",
 choices:["5","6","7","8"],
 answer:"6",
 sol:"Un hexagone est un polygone à 6 côtés. Le rayon en alvéoles d'abeilles en est l'exemple le plus connu dans la nature.",
 ai:true},

{q:"Quel gaz les plantes absorbent-elles pour réaliser la <strong>photosynthèse</strong> ?",
 choices:["l'oxygène","l'azote","le dioxyde de carbone","l'hydrogène"],
 answer:"le dioxyde de carbone",
 sol:"La photosynthèse transforme le dioxyde de carbone (CO₂) et l'eau en glucose et en oxygène, grâce à l'énergie lumineuse.",
 ai:true},

{q:"Quelle est la <strong>monnaie</strong> utilisée au Canada ?",
 choices:["le dollar américain","le dollar canadien","l'euro","la livre sterling"],
 answer:"le dollar canadien",
 sol:"Le dollar canadien (CAD, symbole $) est la monnaie officielle du Canada depuis 1858. Il est subdivisé en 100 cents.",
 ai:true},

{q:"Quel est le <strong>sport national d'été</strong> du Canada ?",
 choices:["le football","le baseball","la crosse","le hockey"],
 answer:"la crosse",
 sol:"La crosse est le sport national d'été du Canada depuis 1859. Le hockey sur glace est le sport national d'hiver depuis 1994.",
 ai:true},

{q:"Quel est le <strong>plus grand pays du monde</strong> par sa superficie ?",
 choices:["le Canada","les États-Unis","la Chine","la Russie"],
 answer:"la Russie",
 sol:"La Russie couvre environ 17,1 millions de km², soit presque deux fois la superficie du Canada, qui est le deuxième plus grand pays du monde.",
 ai:true},

{q:"Qui a <strong>découvert l'Amérique</strong> pour les Européens en 1492 ?",
 choices:["Jacques Cartier","Christophe Colomb","Vasco de Gama","Marco Polo"],
 answer:"Christophe Colomb",
 sol:"Christophe Colomb a atteint les Amériques le 12 octobre 1492 pour le compte de la couronne d'Espagne. Jacques Cartier, lui, a exploré le Saint-Laurent en 1534 pour la France.",
 ai:true}

];
