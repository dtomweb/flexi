export interface Arcana {
  id: number;
  name: string;
  neoName: string;
  keywords: string[];
  element: string;
  color: string;
  icon: string;
  interpretation: {
    general: string;
    love: string;
    work: string;
    advice: string;
    warning: string; // Ajout d'une section "Mise en garde"
  };
}

export const MAJOR_ARCANA: Arcana[] = [
  {
    id: 0,
    name: "Le Mat",
    neoName: "THE GLITCH",
    element: "VOID",
    color: "text-purple-500",
    icon: "Ghost",
    keywords: ["Liberté Absolue", "Inconnu", "Instinct", "Risque"],
    interpretation: {
      general: "Le Glitch est une anomalie dans le système, une libération des contraintes logiques. Vous êtes à l'aube d'un cycle totalement nouveau. C'est le saut dans le vide, sans filet de sécurité, guidé uniquement par votre instinct primal. Le système ne peut plus vous prédire.",
      love: "Une période de liberté radicale. Refus des étiquettes et des engagements conventionnels. Une rencontre imprévue pourrait bouleverser votre code source.",
      work: "Il est temps de sortir des sentiers battus. Les méthodes traditionnelles ne fonctionnent plus. Innovez, quittez la structure, osez l'impensable.",
      advice: "Faites confiance à votre folie. Ne regardez pas en arrière.",
      warning: "Attention à l'errance sans but. La liberté sans vision est un bug critique."
    }
  },
  {
    id: 1,
    name: "Le Bateleur",
    neoName: "THE ARCHITECT",
    element: "AETHER",
    color: "text-cyan-400",
    icon: "Cpu",
    keywords: ["Potentiel", "Initiative", "Outils", "Commencement"],
    interpretation: {
      general: "Vous possédez les clés d'admin. Tout est sur la table virtuelle devant vous. Vous avez le talent, l'énergie et les outils pour démarrer n'importe quel projet. Ce n'est pas le moment d'hésiter, c'est le moment d'écrire la première ligne de code.",
      love: "Un nouveau jeu de séduction commence. Tout est à construire. Prenez l'initiative, montrez vos talents, la communication est votre atout majeur.",
      work: "Lancement de projet favorisé. Vous avez la compétence technique et la créativité. Ne laissez pas vos idées en brouillon, compilez-les.",
      advice: "Agissez maintenant. L'hésitation est votre seul ennemi.",
      warning: "Ne vous dispersez pas. Avoir tous les outils ne sert à rien si on ne finit rien."
    }
  },
  {
    id: 2,
    name: "La Papesse",
    neoName: "THE ORACLE",
    element: "DATA",
    color: "text-blue-600",
    icon: "Binary",
    keywords: ["Intuition", "Secret", "Patience", "Savoir Caché"],
    interpretation: {
      general: "L'Oracle ne parle pas, elle traite les données silencieuses. La réponse n'est pas à l'extérieur, mais dans votre base de données interne (votre intuition). Une période de gestation et de réflexion est nécessaire avant toute action visible.",
      love: "Une relation secrète, platonique ou une période de solitude nécessaire pour comprendre vos vrais désirs. Écoutez les non-dits.",
      work: "Accumulez de la connaissance. Analysez le marché ou la situation sans révéler vos plans. La stratégie vaut mieux que l'action brute.",
      advice: "Gardez le silence et observez. Le savoir est une arme.",
      warning: "Ne vous isolez pas dans une tour d'ivoire numérique. Le savoir doit finir par être partagé."
    }
  },
  {
    id: 3,
    name: "L'Impératrice",
    neoName: "THE MOTHERBOARD",
    element: "CREATION",
    color: "text-green-400",
    icon: "Network",
    keywords: ["Créativité", "Communication", "Expansion", "Flux"],
    interpretation: {
      general: "Le réseau est en pleine expansion. C'est une carte d'abondance, de créativité et d'intelligence vive. Vos projets prennent vie et se connectent aux autres. L'énergie circule librement, profitez de cette bande passante illimitée.",
      love: "Charme, séduction, communication fluide. Une période propice aux rencontres ou à l'épanouissement d'un projet de couple (y compris la fertilité).",
      work: "Vos idées sont validées. C'est le moment de présenter vos projets, de réseauter et de créer. Le succès est organique.",
      advice: "Exprimez-vous. Ne gardez rien pour vous.",
      warning: "Gare à la frivolité ou à la dispersion superficielle."
    }
  },
  {
    id: 4,
    name: "L'Empereur",
    neoName: "THE ADMIN",
    element: "CONTROL",
    color: "text-red-500",
    icon: "ShieldCheck",
    keywords: ["Autorité", "Structure", "Stabilité", "Protection"],
    interpretation: {
      general: "Le système a besoin d'ordre. L'Admin est là pour structurer, protéger et diriger. Vous devez incarner cette stabilité. Construisez des bases solides, définissez les règles du pare-feu et ne dérogez pas à votre code de conduite.",
      love: "Une relation stable, protectrice, peut-être un peu dominatrice. On cherche à construire du durable, pas de l'éphémère.",
      work: "Prenez le leadership. Organisez, structurez, validez. C'est le moment de consolider votre position et d'imposer votre vision.",
      advice: "Soyez le pilier. La logique doit l'emporter sur l'émotion.",
      warning: "Attention à la rigidité. Un système trop fermé finit par casser."
    }
  },
  {
    id: 5,
    name: "Le Pape",
    neoName: "THE ENCRYPTOR",
    element: "KEY",
    color: "text-yellow-500",
    icon: "Key",
    keywords: ["Sagesse", "Transmission", "Conseil", "Tradition"],
    interpretation: {
      general: "Vous recevez ou transmettez les clés de cryptage moral. Cette carte symbolise l'enseignement, la bienveillance et les contrats spirituels. Cherchez un mentor ou devenez-en un. La solution passe par la voie officielle et éthique.",
      love: "Union légitime, mariage, ou loyauté indéfectible. On partage des valeurs communes avant de partager un lit.",
      work: "Signature de contrat, formation, enseignement. Faites appel à un expert ou un médiateur pour résoudre les conflits.",
      advice: "Restez fidèle à vos principes profonds.",
      warning: "Méfiez-vous des dogmes obsolètes. La tradition ne doit pas empêcher la mise à jour."
    }
  },
  {
    id: 6,
    name: "L'Amoureux",
    neoName: "BINARY CHOICE",
    element: "FORK",
    color: "text-pink-500",
    icon: "GitFork",
    keywords: ["Choix", "Désir", "Hésitation", "Carrefour"],
    interpretation: {
      general: "Erreur binaire : 0 ou 1 ? Vous êtes à un carrefour critique. Le cœur balance entre deux voies, deux personnes ou deux projets. Ce choix ne peut pas être fait par la logique seule, il engage votre code émotionnel.",
      love: "Le domaine principal de cette carte. Début d'une idylle, coup de foudre, ou choix douloureux entre la raison et la passion.",
      work: "Une décision d'association, un partenariat à valider. L'ambiance au travail dépendra de vos affinités humaines.",
      advice: "Écoutez votre cœur, l'algorithme ne peut pas décider pour vous.",
      warning: "L'hésitation prolonge le chargement. Décidez avant le timeout."
    }
  },
  {
    id: 7,
    name: "Le Chariot",
    neoName: "THE DRIVE",
    element: "MOTION",
    color: "text-orange-500",
    icon: "Rocket",
    keywords: ["Succès", "Action", "Maîtrise", "Vitesse"],
    interpretation: {
      general: "Tous les systèmes sont verts. Avancez à pleine vitesse. Le Drive symbolise la victoire par la volonté et l'action. Vous maîtrisez les forces opposées pour les faire avancer dans la même direction. Le triomphe est assuré si vous gardez les mains sur le volant.",
      love: "Une conquête amoureuse rapide. Une relation dynamique qui emporte tout sur son passage.",
      work: "Progression fulgurante. Mutation, déplacement, réussite d'un projet ambitieux. Ne laissez personne vous ralentir.",
      advice: "Foncez. L'audace est votre meilleure stratégie.",
      warning: "Attention à la sortie de route. La vitesse sans contrôle est dangereuse."
    }
  },
  {
    id: 8,
    name: "La Justice",
    neoName: "THE PROTOCOL",
    element: "BALANCE",
    color: "text-indigo-400",
    icon: "Scale",
    keywords: ["Équilibre", "Loi", "Vérité", "Karma"],
    interpretation: {
      general: "Exécution du contrat intelligent (Smart Contract). Pas de sentiment, juste la conséquence logique des actions passées. Si vous avez bien codé, le résultat sera parfait. Sinon, préparez-vous au débogage. C'est l'heure de la vérité.",
      love: "On officialise ou on rompt. La relation est jugée sur son équilibre et son honnêteté. Pas de place pour le flou.",
      work: "Affaires juridiques, contrats à signer, bilan de compétences. Soyez carré et irréprochable.",
      advice: "Tranchez avec lucidité. Acceptez la responsabilité.",
      warning: "La rigueur excessive peut tuer l'humain. Ne soyez pas un robot."
    }
  },
  {
    id: 9,
    name: "L'Hermite",
    neoName: "OFFLINE MODE",
    element: "ISOLATION",
    color: "text-gray-400",
    icon: "EyeOff",
    keywords: ["Introspection", "Solitude", "Temps", "Prudence"],
    interpretation: {
      general: "Déconnexion volontaire du réseau. Vous devez passer en mode hors-ligne pour faire le point. La lumière de votre écran intérieur est la seule qui compte. C'est une période de lenteur, de recherche et de maturation.",
      love: "Solitude (vécue ou ressentie). Une prise de distance nécessaire pour comprendre ce que vous voulez vraiment.",
      work: "Recherche approfondie, spécialisation, travail de longue haleine. Ne cherchez pas la reconnaissance immédiate.",
      advice: "Prenez votre temps. Mieux vaut être seul que mal connecté.",
      warning: "Ne coupez pas le lien définitivement. L'isolement prolongé mène à l'obsolescence."
    }
  },
  {
    id: 10,
    name: "La Roue de Fortune",
    neoName: "THE LOOP",
    element: "CYCLE",
    color: "text-teal-400",
    icon: "RefreshCw",
    keywords: ["Destin", "Changement", "Opportunité", "Imprévu"],
    interpretation: {
      general: "Mise à jour système aléatoire. La situation vous échappe, c'est le destin qui prend les commandes. La roue tourne : ce qui était en bas remonte. Soyez prêt à saisir l'opportunité au vol, car la fenêtre de tir est courte.",
      love: "Rencontre fortuite, retour d'un ex, changement soudain de dynamique. Laissez-vous porter par le mouvement.",
      work: "Instabilité temporaire mais porteuse de chance. Fin d'un cycle, début d'un autre. Restez mobile.",
      advice: "Acceptez l'inévitable changement. Adaptez-vous.",
      warning: "Ne résistez pas. Vouloir bloquer la roue vous briserait."
    }
  },
  {
    id: 11,
    name: "La Force",
    neoName: "THE FIREWALL",
    element: "POWER",
    color: "text-red-600",
    icon: "Flame",
    keywords: ["Courage", "Maîtrise", "Volonté", "Magnétisme"],
    interpretation: {
      general: "Votre pare-feu est impénétrable. La Force n'est pas physique, elle est mentale. Vous domptez vos instincts et les situations difficiles par une volonté douce mais inébranlable. Vous avez le contrôle total sur la 'bête'.",
      love: "Passion intense mais canalisée. Rapport de force érotique et magnétique. Vous séduisez par votre assurance.",
      work: "Vous surmonterez l'épreuve. Défendez votre position avec calme et détermination. Rien ne vous résiste.",
      advice: "Croyez en votre puissance intérieure.",
      warning: "L'orgueil et l'intransigeance sont vos risques. N'écrasez pas les autres."
    }
  },
  {
    id: 12,
    name: "Le Pendu",
    neoName: "SUSPENDED",
    element: "WAIT",
    color: "text-blue-300",
    icon: "Hourglass",
    keywords: ["Attente", "Sacrifice", "Lâcher-prise", "Blocage"],
    interpretation: {
      general: "Processus en pause. Le chargement est bloqué. Ne forcez pas, cela ne servirait à rien. Cette suspension est une chance pour voir le monde sous un autre angle (la tête en bas). Acceptez de perdre quelque chose pour gagner en lucidité.",
      love: "Relation en stand-by. Sacrifice nécessaire pour l'autre, ou attente d'un signe qui ne vient pas tout de suite.",
      work: "Projets retardés. Vous vous sentez pieds et poings liés. Profitez-en pour revoir vos plans.",
      advice: "Lâchez prise. L'action viendra plus tard.",
      warning: "Ne jouez pas la victime. Ce sacrifice doit être utile."
    }
  },
  {
    id: 13,
    name: "L'Arcane Sans Nom",
    neoName: "THE WIPE",
    element: "ENTROPY",
    color: "text-slate-200",
    icon: "Skull",
    keywords: ["Transformation", "Fin", "Renouveau", "Nettoyage"],
    interpretation: {
      general: "Formatage complet du disque dur. Ce n'est pas la mort physique, mais la fin d'un état. Il faut supprimer les vieux fichiers corrompus pour installer la nouvelle version. C'est radical, parfois douloureux, mais salutaire.",
      love: "Rupture nécessaire ou transformation profonde de la relation. On repart sur de nouvelles bases ou on se quitte.",
      work: "Fin de contrat, changement de métier, restructuration brutale. N'ayez pas peur du vide.",
      advice: "Coupez ce qui est mort. Regardez vers l'avenir.",
      warning: "La résistance au changement rendra l'opération plus douloureuse."
    }
  },
  {
    id: 14,
    name: "Tempérance",
    neoName: "THE FLOW",
    element: "HARMONY",
    color: "text-indigo-300",
    icon: "Waves",
    keywords: ["Équilibre", "Guérison", "Patience", "Communication"],
    interpretation: {
      general: "Optimisation des flux énergétiques. Après la crise, le calme revient. C'est la carte de la guérison, de la modération et des échanges fluides. Mettez de l'eau dans votre vin numérique. Tout s'arrange par la douceur.",
      love: "Réconciliation, communication apaisée, amitié amoureuse. On prend le temps de se comprendre.",
      work: "Diplomatie, ambiance détendue, vacances. Les projets avancent lentement mais sûrement.",
      advice: "Cherchez le juste milieu. Soyez le médiateur.",
      warning: "Évitez la tiédeur. L'harmonie ne doit pas devenir ennui."
    }
  },
  {
    id: 15,
    name: "Le Diable",
    neoName: "THE MALWARE",
    element: "DESIRE",
    color: "text-red-700",
    icon: "Biohazard",
    keywords: ["Passion", "Addiction", "Matérialisme", "Instinct"],
    interpretation: {
      general: "Alerte virus : Malware détecté. Vous êtes sous l'emprise de vos pulsions : désir, argent, pouvoir. C'est une énergie immense et créatrice, mais qui peut vous enchaîner. Utilisez ce feu pour créer, pas pour vous détruire.",
      love: "Passion dévorante, jalousie possessive, sexualité intense. Relation toxique mais irrésistible.",
      work: "Ambition démesurée, manipulation, gros succès financier possible par des moyens audacieux.",
      advice: "Acceptez votre ombre, mais ne la laissez pas prendre les commandes.",
      warning: "L'addiction (à une personne ou une substance) vous guette."
    }
  },
  {
    id: 16,
    name: "La Maison Dieu",
    neoName: "CRITICAL ERROR",
    element: "CRASH",
    color: "text-orange-600",
    icon: "AlertTriangle",
    keywords: ["Choc", "Destruction", "Révélation", "Libération"],
    interpretation: {
      general: "Erreur critique. Le système s'effondre. Ce que vous croyiez solide n'était qu'une illusion. C'est un choc brutal, mais c'est une libération ! Les murs de la prison tombent. La vérité éclate enfin au grand jour.",
      love: "Coup de foudre bouleversant ou rupture soudaine. Le statu quo est impossible.",
      work: "Faillite, licenciement ou démission spectaculaire. Il faut reconstruire ailleurs.",
      advice: "Laissez tomber les masques. Dansez sur les décombres.",
      warning: "Ne tentez pas de recoller les morceaux de l'ancien monde."
    }
  },
  {
    id: 17,
    name: "L'Étoile",
    neoName: "THE LINK",
    element: "HOPE",
    color: "text-yellow-200",
    icon: "Star",
    keywords: ["Espoir", "Protection", "Inspiration", "Vérité"],
    interpretation: {
      general: "Connexion rétablie avec le serveur central. C'est la carte de l'espoir, de la beauté et de la protection cosmique. Après la tempête, vous trouvez votre place dans l'univers. Suivez votre bonne étoile, elle ne ment jamais.",
      love: "Romance tendre, harmonie parfaite, confiance absolue. Vous pouvez vous montrer vulnérable.",
      work: "Inspiration artistique, reconnaissance, climat bienveillant. Croyez en vos rêves.",
      advice: "Ayez la foi. Vous êtes guidé.",
      warning: "Ne restez pas dans la rêverie passive. Agissez avec douceur."
    }
  },
  {
    id: 18,
    name: "La Lune",
    neoName: "THE PHANTOM",
    element: "ILLUSION",
    color: "text-purple-300",
    icon: "Moon",
    keywords: ["Imaginaire", "Angoisse", "Inconscient", "Passé"],
    interpretation: {
      general: "Vous naviguez dans le brouillard des données fantômes. Tout est flou, sujet à interprétation. C'est le domaine de l'inconscient, des rêves, mais aussi des peurs enfouies. Attention aux illusions et aux mensonges.",
      love: "Romantisme trouble, secrets de famille, relation cachée. On ne se dit pas tout.",
      work: "Climat confus, rumeurs, non-dits. Fiez-vous à votre intuition, pas aux apparences.",
      advice: "Affrontez vos fantômes pour les dissiper.",
      warning: "Ne vous noyez pas dans la mélancolie ou la paranoïa."
    }
  },
  {
    id: 19,
    name: "Le Soleil",
    neoName: "THE CORE",
    element: "LIGHT",
    color: "text-yellow-400",
    icon: "Sun",
    keywords: ["Succès", "Joie", "Clarté", "Rayonnement"],
    interpretation: {
      general: "Surchauffe positive du noyau. Tout s'éclaire ! C'est la réussite totale, la joie sans nuage, la chaleur humaine. Vous êtes au centre de l'attention et vous rayonnez. Profitez de ce moment de gloire.",
      love: "Bonheur conjugal, rencontre solaire, clarté des sentiments. On s'aime au grand jour.",
      work: "Réussite, célébrité, aboutissement des projets. Vous êtes leader naturel.",
      advice: "Montrez-vous. Partagez votre lumière.",
      warning: "L'éblouissement peut vous rendre aveugle aux besoins des autres."
    }
  },
  {
    id: 20,
    name: "Le Jugement",
    neoName: "THE UPDATE",
    element: "AWAKE",
    color: "text-cyan-200",
    icon: "Siren",
    keywords: ["Renouveau", "Appel", "Nouvelle", "Vocation"],
    interpretation: {
      general: "Mise à jour majeure disponible. Une nouvelle inattendue vient changer la donne et vous sort de votre torpeur. C'est une renaissance, un appel à vivre une vie plus haute. Le passé est pardonné, l'avenir s'ouvre.",
      love: "Retrouvailles, retour de l'être aimé, ou rencontre qui change la vie. On passe à une étape supérieure.",
      work: "Vocation trouvée, promotion surprise, reconnaissance du talent.",
      advice: "Répondez à l'appel. Ne restez pas endormi.",
      warning: "Refuser cette évolution bloquerait votre destin."
    }
  },
  {
    id: 21,
    name: "Le Monde",
    neoName: "THE NETWORK",
    element: "COMPLETE",
    color: "text-emerald-400",
    icon: "Globe",
    keywords: ["Accomplissement", "Totalité", "Voyage", "Succès"],
    interpretation: {
      general: "Synchronisation complète. Vous êtes connecté au tout. C'est la meilleure carte du jeu : réussite absolue, accomplissement, ouverture sur le monde. Le cycle est fini, vous avez gagné. Profitez de votre plénitude.",
      love: "Amour parfait, union cosmique, ouverture aux autres.",
      work: "Réussite internationale, aboutissement final, récompense.",
      advice: "Voyez grand. Le monde est votre terrain de jeu.",
      warning: "Ne vous enfermez pas dans votre bulle parfaite. Continuez à explorer."
    }
  }
];