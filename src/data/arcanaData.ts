// ==========================================
// 🔮 FICHIER : src/data/arcanaData.ts
// ==========================================

export type CardType = 'MAJOR' | 'ENERGY' | 'BIO' | 'NET' | 'HARDWARE';

export interface Arcana {
  id: string;
  name: string;
  neoName: string;
  type: CardType;
  keywords: string[];
  element: string;
  color: string;
  icon: string;
  interpretation: {
    general: string;
    love: string;
    work: string;
    advice: string;
    warning: string;
  };
}

// --- 1. ARCANES MAJEURS (22) ---
export const MAJOR_ARCANA: Arcana[] = [
  {
    id: "0",
    name: "Le Mat",
    neoName: "THE GLITCH",
    type: 'MAJOR',
    element: "VOID",
    color: "text-purple-500",
    icon: "Ghost",
    keywords: ["Liberté Absolue", "Inconnu", "Instinct"],
    interpretation: {
      general: "Le Glitch est une anomalie libératrice. Saut dans le vide sans filet.",
      love: "Liberté radicale, refus des étiquettes.",
      work: "Sortez du système, innovez radicalement.",
      advice: "Faites confiance à votre folie.",
      warning: "Errance sans but."
    }
  },
  {
    id: "1",
    name: "Le Bateleur",
    neoName: "THE ARCHITECT",
    type: 'MAJOR',
    element: "AETHER",
    color: "text-cyan-400",
    icon: "Cpu",
    keywords: ["Potentiel", "Initiative", "Outils"],
    interpretation: {
      general: "Vous possédez les clés d'admin. Tout est possible.",
      love: "Nouveau jeu de séduction.",
      work: "Lancement de projet, compétence technique.",
      advice: "Codez votre propre réalité.",
      warning: "Ne vous dispersez pas."
    }
  },
  {
    id: "2",
    name: "La Papesse",
    neoName: "THE ORACLE",
    type: 'MAJOR',
    element: "DATA",
    color: "text-blue-600",
    icon: "Binary",
    keywords: ["Intuition", "Secret", "Savoir"],
    interpretation: {
      general: "Accès à la base de données secrète. Silence et intuition.",
      love: "Relation cachée ou platonique.",
      work: "Analyse stratégique, patience.",
      advice: "Écoutez les données silencieuses.",
      warning: "Isolement excessif."
    }
  },
  {
    id: "3",
    name: "L'Impératrice",
    neoName: "MOTHERBOARD",
    type: 'MAJOR',
    element: "CREATION",
    color: "text-green-400",
    icon: "Network",
    keywords: ["Créativité", "Abondance", "Flux"],
    interpretation: {
      general: "Expansion du réseau. Créativité débridée et fertilité.",
      love: "Charme, communication fluide.",
      work: "Productivité maximale, succès organique.",
      advice: "Connectez-vous aux autres.",
      warning: "Frivolité."
    }
  },
  {
    id: "4",
    name: "L'Empereur",
    neoName: "THE ADMIN",
    type: 'MAJOR',
    element: "CONTROL",
    color: "text-red-500",
    icon: "ShieldCheck",
    keywords: ["Autorité", "Structure", "Stabilité"],
    interpretation: {
      general: "Contrôle total du système. Rigueur et protection.",
      love: "Relation stable et protectrice.",
      work: "Leadership, consolidation.",
      advice: "Sécurisez vos acquis.",
      warning: "Rigidité excessive."
    }
  },
  {
    id: "5",
    name: "Le Pape",
    neoName: "THE ENCRYPTOR",
    type: 'MAJOR',
    element: "KEY",
    color: "text-yellow-500",
    icon: "Key",
    keywords: ["Sagesse", "Conseil", "Contrat"],
    interpretation: {
      general: "Transmission de clés de cryptage moral. Enseignement.",
      love: "Union légitime, loyauté.",
      work: "Signature de contrat, médiation.",
      advice: "Suivez le protocole éthique.",
      warning: "Dogmatisme."
    }
  },
  {
    id: "6",
    name: "L'Amoureux",
    neoName: "BINARY CHOICE",
    type: 'MAJOR',
    element: "FORK",
    color: "text-pink-500",
    icon: "GitFork",
    keywords: ["Choix", "Désir", "Hésitation"],
    interpretation: {
      general: "Erreur binaire : 0 ou 1 ? Un choix de cœur s'impose.",
      love: "Début d'idylle ou choix cornélien.",
      work: "Association ou décision difficile.",
      advice: "Écoutez votre cœur, pas la logique.",
      warning: "L'hésitation prolonge le chargement."
    }
  },
  {
    id: "7",
    name: "Le Chariot",
    neoName: "THE DRIVE",
    type: 'MAJOR',
    element: "MOTION",
    color: "text-orange-500",
    icon: "Rocket",
    keywords: ["Succès", "Vitesse", "Action"],
    interpretation: {
      general: "Accélération maximale. La victoire par la volonté.",
      love: "Conquête rapide et dynamique.",
      work: "Progression fulgurante.",
      advice: "Foncez.",
      warning: "Vitesse sans contrôle."
    }
  },
  {
    id: "8",
    name: "La Justice",
    neoName: "THE PROTOCOL",
    type: 'MAJOR',
    element: "BALANCE",
    color: "text-indigo-400",
    icon: "Scale",
    keywords: ["Équilibre", "Loi", "Karma"],
    interpretation: {
      general: "Exécution du Smart Contract. Conséquence logique des actes.",
      love: "Équilibre ou légalisation.",
      work: "Jugement, bilan, contrats.",
      advice: "Soyez impartial.",
      warning: "Manque d'empathie."
    }
  },
  {
    id: "9",
    name: "L'Hermite",
    neoName: "OFFLINE MODE",
    type: 'MAJOR',
    element: "ISOLATION",
    color: "text-gray-400",
    icon: "EyeOff",
    keywords: ["Solitude", "Recherche", "Temps"],
    interpretation: {
      general: "Déconnexion volontaire. Recherche intérieure.",
      love: "Célibat ou introspection nécessaire.",
      work: "Recherche approfondie, patience.",
      advice: "Coupez le réseau pour voir clair.",
      warning: "Isolement définitif."
    }
  },
  {
    id: "10",
    name: "La Roue",
    neoName: "THE LOOP",
    type: 'MAJOR',
    element: "CYCLE",
    color: "text-teal-400",
    icon: "RefreshCw",
    keywords: ["Destin", "Changement", "Chance"],
    interpretation: {
      general: "Mise à jour aléatoire. Tout change, saisissez l'occasion.",
      love: "Rencontre surprise, karma.",
      work: "Instabilité porteuse de chance.",
      advice: "Acceptez le mouvement.",
      warning: "Résistance inutile."
    }
  },
  {
    id: "11",
    name: "La Force",
    neoName: "THE FIREWALL",
    type: 'MAJOR',
    element: "POWER",
    color: "text-red-600",
    icon: "Flame",
    keywords: ["Courage", "Maîtrise", "Volonté"],
    interpretation: {
      general: "Défense impénétrable. Maîtrise des pulsions par la volonté.",
      love: "Passion intense mais contrôlée.",
      work: "Détermination sans faille.",
      advice: "Domptez la bête.",
      warning: "Orgueil."
    }
  },
  {
    id: "12",
    name: "Le Pendu",
    neoName: "SUSPENDED",
    type: 'MAJOR',
    element: "WAIT",
    color: "text-blue-300",
    icon: "Hourglass",
    keywords: ["Attente", "Sacrifice", "Blocage"],
    interpretation: {
      general: "Processus en pause. Changez de perspective.",
      love: "Situation bloquée, lâcher-prise.",
      work: "Retard, attente.",
      advice: "Ne forcez pas le système.",
      warning: "Victimisation."
    }
  },
  {
    id: "13",
    name: "Sans Nom",
    neoName: "THE WIPE",
    type: 'MAJOR',
    element: "ENTROPY",
    color: "text-slate-200",
    icon: "Skull",
    keywords: ["Fin", "Renouveau", "Formatage"],
    interpretation: {
      general: "Formatage complet. Fin nécessaire pour un renouveau.",
      love: "Rupture ou transformation radicale.",
      work: "Fin de contrat, changement total.",
      advice: "Laissez mourir l'ancien code.",
      warning: "Douleur du changement."
    }
  },
  {
    id: "14",
    name: "Tempérance",
    neoName: "THE FLOW",
    type: 'MAJOR',
    element: "HARMONY",
    color: "text-indigo-300",
    icon: "Waves",
    keywords: ["Équilibre", "Douceur", "Flux"],
    interpretation: {
      general: "Optimisation des flux. Guérison et harmonie.",
      love: "Réconciliation, douceur.",
      work: "Diplomatie, ambiance détendue.",
      advice: "Trouvez le juste milieu.",
      warning: "Tiédeur."
    }
  },
  {
    id: "15",
    name: "Le Diable",
    neoName: "THE MALWARE",
    type: 'MAJOR',
    element: "DESIRE",
    color: "text-red-700",
    icon: "Biohazard",
    keywords: ["Passion", "Addiction", "Instinct"],
    interpretation: {
      general: "Virus du désir. Ambition et pulsions incontrôlables.",
      love: "Passion dévorante, jalousie.",
      work: "Succès financier, manipulation.",
      advice: "Acceptez votre ombre sans vous y perdre.",
      warning: "Dépendance."
    }
  },
  {
    id: "16",
    name: "Maison Dieu",
    neoName: "CRITICAL ERROR",
    type: 'MAJOR',
    element: "CRASH",
    color: "text-orange-600",
    icon: "AlertTriangle",
    keywords: ["Choc", "Chute", "Révélation"],
    interpretation: {
      general: "Crash système imminent. La vérité éclate brutalement.",
      love: "Coup de foudre ou rupture soudaine.",
      work: "Faillite ou changement brutal.",
      advice: "Reconstruisez sur du vrai.",
      warning: "S'accrocher au passé."
    }
  },
  {
    id: "17",
    name: "L'Étoile",
    neoName: "THE LINK",
    type: 'MAJOR',
    element: "HOPE",
    color: "text-yellow-200",
    icon: "Star",
    keywords: ["Espoir", "Inspiration", "Guide"],
    interpretation: {
      general: "Connexion rétablie. Espoir et protection cosmique.",
      love: "Romance tendre, harmonie.",
      work: "Inspiration artistique, reconnaissance.",
      advice: "Suivez votre bonne étoile.",
      warning: "Rêverie passive."
    }
  },
  {
    id: "18",
    name: "La Lune",
    neoName: "THE PHANTOM",
    type: 'MAJOR',
    element: "ILLUSION",
    color: "text-purple-300",
    icon: "Moon",
    keywords: ["Rêve", "Illusion", "Inconscient"],
    interpretation: {
      general: "Navigation en mode furtif. Attention aux illusions.",
      love: "Romantisme trouble, secrets.",
      work: "Flou, rumeurs.",
      advice: "Méfiez-vous des apparences.",
      warning: "Paranoïa."
    }
  },
  {
    id: "19",
    name: "Le Soleil",
    neoName: "THE CORE",
    type: 'MAJOR',
    element: "LIGHT",
    color: "text-yellow-400",
    icon: "Sun",
    keywords: ["Succès", "Joie", "Clarté"],
    interpretation: {
      general: "Surchauffe positive. Succès total et rayonnement.",
      love: "Bonheur, couple solaire.",
      work: "Gloire, réussite.",
      advice: "Brillez.",
      warning: "Éblouissement."
    }
  },
  {
    id: "20",
    name: "Le Jugement",
    neoName: "THE UPDATE",
    type: 'MAJOR',
    element: "AWAKE",
    color: "text-cyan-200",
    icon: "Siren",
    keywords: ["Renouveau", "Appel", "Nouvelle"],
    interpretation: {
      general: "Mise à jour majeure. Renaissance et appel du destin.",
      love: "Retrouvailles, nouvelle inattendue.",
      work: "Vocation, promotion.",
      advice: "Répondez à l'appel.",
      warning: "Refus d'évoluer."
    }
  },
  {
    id: "21",
    name: "Le Monde",
    neoName: "THE NETWORK",
    type: 'MAJOR',
    element: "COMPLETE",
    color: "text-emerald-400",
    icon: "Globe",
    keywords: ["Totalité", "Succès", "Voyage"],
    interpretation: {
      general: "Connexion mondiale. Accomplissement absolu.",
      love: "Plénitude, ouverture.",
      work: "Réussite internationale.",
      advice: "Vous êtes complet.",
      warning: "Enfermement dans la perfection."
    }
  }
];

// --- 2. ARCANES MINEURS (56) ---

const MINOR_ARCANA: Arcana[] = [
  // === SUITE BÂTONS (ENERGY) ===
  {
    id: "ACE_NRG", name: "As de Bâton", neoName: "PLASMA IGNITION", type: 'ENERGY', element: "FIRE", color: "text-orange-500", icon: "Zap",
    keywords: ["Démarrage", "Énergie", "Impulsion"],
    interpretation: {
      general: "Surcharge d'énergie brute. L'étincelle qui lance le moteur.",
      love: "Désir soudain, passion.", work: "Nouveau projet, motivation.", advice: "Canalisez cette énergie.", warning: "Burn-out."
    }
  },
  {
    id: "2_NRG", name: "2 de Bâton", neoName: "FUTURE VISION", type: 'ENERGY', element: "FIRE", color: "text-orange-500", icon: "Globe",
    keywords: ["Planification", "Vision", "Choix"],
    interpretation: {
      general: "Vous regardez le monde depuis votre tour. Planification à long terme.",
      love: "Projets de couple lointains.", work: "Expansion, stratégie.", advice: "Voyez grand.", warning: "Peur de se lancer."
    }
  },
  {
    id: "3_NRG", name: "3 de Bâton", neoName: "EXPANSION", type: 'ENERGY', element: "FIRE", color: "text-orange-500", icon: "Rocket",
    keywords: ["Voyage", "Croissance", "Horizon"],
    interpretation: {
      general: "Vos vaisseaux sont lancés. Les premiers résultats arrivent.",
      love: "Aventure à deux, voyage.", work: "Commerce, premiers succès.", advice: "Explorez de nouveaux territoires.", warning: "Impatience."
    }
  },
  {
    id: "4_NRG", name: "4 de Bâton", neoName: "STABILITY FIELD", type: 'ENERGY', element: "FIRE", color: "text-orange-500", icon: "ShieldCheck",
    keywords: ["Célébration", "Stabilité", "Foyer"],
    interpretation: {
      general: "Structure stable et heureuse. Une étape validée avec succès.",
      love: "Vie commune, mariage, fête.", work: "Projet solidifié, bonne ambiance.", advice: "Célébrez vos victoires.", warning: "Complaisance."
    }
  },
  {
    id: "5_NRG", name: "5 de Bâton", neoName: "CONFLICT", type: 'ENERGY', element: "FIRE", color: "text-orange-500", icon: "AlertTriangle",
    keywords: ["Compétition", "Lutte", "Chaos"],
    interpretation: {
      general: "Bruit sur la ligne. Compétition saine ou conflit d'ego.",
      love: "Disputes, rivalité.", work: "Brainstorming intense, concurrence.", advice: "Affirmez-vous sans écraser.", warning: "Agression inutile."
    }
  },
  {
    id: "6_NRG", name: "6 de Bâton", neoName: "VICTORY", type: 'ENERGY', element: "FIRE", color: "text-orange-500", icon: "Star",
    keywords: ["Succès", "Reconnaissance", "Gloire"],
    interpretation: {
      general: "Triomphe public. Vous êtes sous le feu des projecteurs.",
      love: "Conquête réussie, admiration.", work: "Promotion, succès reconnu.", advice: "Profitez de la gloire.", warning: "Arrogance."
    }
  },
  {
    id: "7_NRG", name: "7 de Bâton", neoName: "DEFENSE MODE", type: 'ENERGY', element: "FIRE", color: "text-orange-500", icon: "Shield",
    keywords: ["Défense", "Persévérance", "Courage"],
    interpretation: {
      general: "Vous êtes attaqué de toutes parts, mais vous tenez bon.",
      love: "Défendre sa relation.", work: "Garder sa position face aux critiques.", advice: "Ne cédez pas de terrain.", warning: "Épuisement."
    }
  },
  {
    id: "8_NRG", name: "8 de Bâton", neoName: "FIBER OPTIC", type: 'ENERGY', element: "FIRE", color: "text-orange-500", icon: "Zap",
    keywords: ["Vitesse", "Nouvelles", "Mouvement"],
    interpretation: {
      general: "Tout va très vite. Flux d'informations rapide.",
      love: "Coup de foudre, messages rapides.", work: "Urgence, délais courts.", advice: "Réagissez vite.", warning: "Précipitation."
    }
  },
  {
    id: "9_NRG", name: "9 de Bâton", neoName: "RESILIENCE", type: 'ENERGY', element: "FIRE", color: "text-orange-500", icon: "Activity",
    keywords: ["Endurance", "Dernier effort", "Méfiance"],
    interpretation: {
      general: "Blessé mais debout. La dernière ligne de défense.",
      love: "Prudence après une blessure.", work: "Tenir bon malgré la fatigue.", advice: "Encore un effort.", warning: "Paranoïa."
    }
  },
  {
    id: "10_NRG", name: "10 de Bâton", neoName: "OVERLOAD", type: 'ENERGY', element: "FIRE", color: "text-orange-500", icon: "Battery",
    keywords: ["Surcharge", "Fardeau", "Stress"],
    interpretation: {
      general: "Système en surchauffe. Trop de responsabilités.",
      love: "Relation lourde à porter.", work: "Burn-out, trop de travail.", advice: "Déléguez ou lâchez.", warning: "Effondrement imminent."
    }
  },
  {
    id: "PAGE_NRG", name: "Valet de Bâton", neoName: "SPARK SCOUT", type: 'ENERGY', element: "FIRE", color: "text-orange-500", icon: "Flame",
    keywords: ["Messager", "Curiosité", "Début"],
    interpretation: {
      general: "Une nouvelle excitante ou une idée géniale.",
      love: "Message passionné, flirt.", work: "Nouvelle piste créative.", advice: "Soyez curieux.", warning: "Immaturité."
    }
  },
  {
    id: "KNI_NRG", name: "Cavalier de Bâton", neoName: "BLITZ RUNNER", type: 'ENERGY', element: "FIRE", color: "text-orange-500", icon: "Zap",
    keywords: ["Action", "Aventure", "Impulsivité"],
    interpretation: {
      general: "Action immédiate et audacieuse. On fonce.",
      love: "Passion soudaine et éphémère.", work: "Déplacement, prise de risque.", advice: "Agissez maintenant.", warning: "Manque de plan."
    }
  },
  {
    id: "QUE_NRG", name: "Reine de Bâton", neoName: "PLASMA QUEEN", type: 'ENERGY', element: "FIRE", color: "text-orange-500", icon: "Sun",
    keywords: ["Charisme", "Confiance", "Indépendance"],
    interpretation: {
      general: "Rayonnement personnel et confiance absolue.",
      love: "Séductrice, chaleureuse.", work: "Leader inspirante.", advice: "Ayez confiance en vous.", warning: "Jalousie."
    }
  },
  {
    id: "KIN_NRG", name: "Roi de Bâton", neoName: "ENERGY CEO", type: 'ENERGY', element: "FIRE", color: "text-orange-500", icon: "Cpu",
    keywords: ["Vision", "Leader", "Entrepreneur"],
    interpretation: {
      general: "Maîtrise de l'énergie créatrice. Grand visionnaire.",
      love: "Partenaire passionné et loyal.", work: "Entrepreneur, directeur.", advice: "Dirigez avec vision.", warning: "Autoritarisme."
    }
  },

  // === SUITE COUPES (BIO) ===
  {
    id: "ACE_BIO", name: "As de Coupe", neoName: "SEROTONIN FLOOD", type: 'BIO', element: "WATER", color: "text-pink-400", icon: "Heart",
    keywords: ["Amour", "Euphorie", "Début"],
    interpretation: {
      general: "Flux chimique de bonheur. Début émotionnel profond.",
      love: "Coup de foudre.", work: "Inspiration artistique.", advice: "Ouvrez votre cœur.", warning: "Illusion."
    }
  },
  {
    id: "2_BIO", name: "2 de Coupe", neoName: "CONNECTION", type: 'BIO', element: "WATER", color: "text-pink-400", icon: "Waves",
    keywords: ["Union", "Partenariat", "Rencontre"],
    interpretation: {
      general: "Connexion peer-to-peer parfaite. Entente mutuelle.",
      love: "Ame soeur, couple.", work: "Partenariat fructueux.", advice: "Unissez vos forces.", warning: "Dépendance."
    }
  },
  {
    id: "3_BIO", name: "3 de Coupe", neoName: "SOCIAL NETWORK", type: 'BIO', element: "WATER", color: "text-pink-400", icon: "Users",
    keywords: ["Fête", "Amitié", "Communauté"],
    interpretation: {
      general: "Joie partagée, célébration en groupe.",
      love: "Sorties, amis, légèreté.", work: "Bonne ambiance d'équipe.", advice: "Célébrez ensemble.", warning: "Excès."
    }
  },
  {
    id: "4_BIO", name: "4 de Coupe", neoName: "APATHY LOOP", type: 'BIO', element: "WATER", color: "text-pink-400", icon: "Coffee",
    keywords: ["Ennui", "Refus", "Routine"],
    interpretation: {
      general: "Rien ne vous intéresse. Blasé du système.",
      love: "Routine, désintérêt.", work: "Manque de motivation.", advice: "Ouvrez les yeux aux opportunités.", warning: "Dépression."
    }
  },
  {
    id: "5_BIO", name: "5 de Coupe", neoName: "DATA LOSS", type: 'BIO', element: "WATER", color: "text-pink-400", icon: "CloudRain",
    keywords: ["Regret", "Perte", "Tristesse"],
    interpretation: {
      general: "Fichiers corrompus. On pleure sur ce qui est perdu.",
      love: "Rupture, déception.", work: "Échec d'un projet.", advice: "Regardez ce qui reste.", warning: "Noyade émotionnelle."
    }
  },
  {
    id: "6_BIO", name: "6 de Coupe", neoName: "BACKUP RESTORE", type: 'BIO', element: "WATER", color: "text-pink-400", icon: "History",
    keywords: ["Nostalgie", "Passé", "Enfance"],
    interpretation: {
      general: "Retour aux anciennes versions. Nostalgie douce.",
      love: "Retour d'un ex, souvenirs.", work: "Renouer avec une passion.", advice: "Apprenez du passé.", warning: "Vivre dans le passé."
    }
  },
  {
    id: "7_BIO", name: "7 de Coupe", neoName: "VIRTUAL REALITY", type: 'BIO', element: "WATER", color: "text-pink-400", icon: "Eye",
    keywords: ["Illusion", "Choix", "Rêve"],
    interpretation: {
      general: "Trop d'options virtuelles. Confusion entre rêve et réalité.",
      love: "Fantasmes, indécision.", work: "Projets irréalistes.", advice: "Revenez au concret.", warning: "Fuite du réel."
    }
  },
  {
    id: "8_BIO", name: "8 de Coupe", neoName: "LOGOFF", type: 'BIO', element: "WATER", color: "text-pink-400", icon: "LogOut",
    keywords: ["Départ", "Abandon", "Quête"],
    interpretation: {
      general: "Quitter ce qui ne convient plus. Recherche de sens.",
      love: "Quitter une relation vide.", work: "Démission, reconversion.", advice: "Partez pour mieux trouver.", warning: "Fuite."
    }
  },
  {
    id: "9_BIO", name: "9 de Coupe", neoName: "SATISFACTION", type: 'BIO', element: "WATER", color: "text-pink-400", icon: "Smile",
    keywords: ["Voeu", "Bonheur", "Plaisir"],
    interpretation: {
      general: "Le Voeu exaucé. Satisfaction personnelle et confort.",
      love: "Plaisir sensuel, bonheur.", work: "Réussite, fierté.", advice: "Profitez de l'instant.", warning: "Égoïsme."
    }
  },
  {
    id: "10_BIO", name: "10 de Coupe", neoName: "HARMONY", type: 'BIO', element: "WATER", color: "text-pink-400", icon: "Heart",
    keywords: ["Famille", "Bonheur", "Totalité"],
    interpretation: {
      general: "L'harmonie parfaite. Le bonheur durable et partagé.",
      love: "Famille heureuse, mariage.", work: "Équipe soudée.", advice: "Partagez votre bonheur.", warning: "Idéalisme."
    }
  },
  {
    id: "PAGE_BIO", name: "Valet de Coupe", neoName: "EMPATH BOT", type: 'BIO', element: "WATER", color: "text-pink-400", icon: "MessageCircle",
    keywords: ["Message", "Douceur", "Intuition"],
    interpretation: {
      general: "Un message affectueux ou une nouvelle intuition.",
      love: "Déclaration, excuses.", work: "Idée créative.", advice: "Soyez ouvert.", warning: "Naïveté."
    }
  },
  {
    id: "KNI_BIO", name: "Cavalier de Coupe", neoName: "ROMANCE PROXY", type: 'BIO', element: "WATER", color: "text-pink-400", icon: "Heart",
    keywords: ["Romance", "Charme", "Proposition"],
    interpretation: {
      general: "Une invitation ou une avance romantique.",
      love: "Prince charmant, séduction.", work: "Offre intéressante.", advice: "Suivez votre cœur.", warning: "Manque de réalisme."
    }
  },
  {
    id: "QUE_BIO", name: "Reine de Coupe", neoName: "MOTHER BIO", type: 'BIO', element: "WATER", color: "text-pink-400", icon: "Droplet",
    keywords: ["Empathie", "Soin", "Intuition"],
    interpretation: {
      general: "Grande intelligence émotionnelle. Écoute et soin.",
      love: "Partenaire aimante et intuitive.", work: "Soutien, écoute.", advice: "Faites confiance à votre intuition.", warning: "Dépendance affective."
    }
  },
  {
    id: "KIN_BIO", name: "Roi de Coupe", neoName: "EMOTION CONTROL", type: 'BIO', element: "WATER", color: "text-pink-400", icon: "Anchor",
    keywords: ["Stabilité", "Conseil", "Diplomatie"],
    interpretation: {
      general: "Maîtrise des émotions. Calme et bienveillance.",
      love: "Partenaire stable et protecteur.", work: "Médiateur, conseiller.", advice: "Restez calme.", warning: "Froideur apparente."
    }
  },

  // === SUITE ÉPÉES (NET) ===
  {
    id: "ACE_NET", name: "As d'Épée", neoName: "ROOT ACCESS", type: 'NET', element: "AIR", color: "text-cyan-300", icon: "Terminal",
    keywords: ["Clarté", "Idée", "Vérité"],
    interpretation: {
      general: "Accès admin obtenu. Une idée tranchante et claire.",
      love: "Communication honnête.", work: "Victoire intellectuelle.", advice: "Soyez logique.", warning: "Manque d'empathie."
    }
  },
  {
    id: "2_NET", name: "2 d'Épée", neoName: "ACCESS DENIED", type: 'NET', element: "AIR", color: "text-cyan-300", icon: "XCircle",
    keywords: ["Blocage", "Déni", "Impasse"],
    interpretation: {
      general: "Refus de voir la vérité. Blocage mental.",
      love: "Cœur fermé, indécision.", work: "Situation bloquée.", advice: "Ouvrez les yeux.", warning: "Autruche."
    }
  },
  {
    id: "3_NET", name: "3 d'Épée", neoName: "HEART BLEED", type: 'NET', element: "AIR", color: "text-cyan-300", icon: "Scissors",
    keywords: ["Douleur", "Trahison", "Chagrin"],
    interpretation: {
      general: "Faille de sécurité critique. Cœur brisé ou trahison.",
      love: "Rupture, peine.", work: "Mauvaise nouvelle.", advice: "Acceptez la douleur pour guérir.", warning: "Amertume."
    }
  },
  {
    id: "4_NET", name: "4 d'Épée", neoName: "SLEEP MODE", type: 'NET', element: "AIR", color: "text-cyan-300", icon: "Moon",
    keywords: ["Repos", "Récupération", "Pause"],
    interpretation: {
      general: "Mise en veille nécessaire. Repos après la bataille.",
      love: "Pause dans la relation.", work: "Congés, burn-out évité.", advice: "Reposez-vous.", warning: "Stagnation."
    }
  },
  {
    id: "5_NET", name: "5 d'Épée", neoName: "TROLL WAR", type: 'NET', element: "AIR", color: "text-cyan-300", icon: "Frown",
    keywords: ["Défaite", "Conflit", "Ego"],
    interpretation: {
      general: "Victoire vide de sens ou défaite humiliante.",
      love: "Dispute mesquine.", work: "Conflit toxique.", advice: "Choisissez vos batailles.", warning: "Rancune."
    }
  },
  {
    id: "6_NET", name: "6 d'Épée", neoName: "MIGRATION", type: 'NET', element: "AIR", color: "text-cyan-300", icon: "Wind",
    keywords: ["Transition", "Voyage", "Calme"],
    interpretation: {
      general: "Migration vers un serveur plus calme. On laisse les ennuis derrière.",
      love: "S'éloigner des conflits.", work: "Changement de poste salutaire.", advice: "Avancez vers le calme.", warning: "Fuite."
    }
  },
  {
    id: "7_NET", name: "7 d'Épée", neoName: "STEALTH MODE", type: 'NET', element: "AIR", color: "text-cyan-300", icon: "EyeOff",
    keywords: ["Ruse", "Stratégie", "Vol"],
    interpretation: {
      general: "Agir en cachette. Ruse ou tromperie nécessaire.",
      love: "Secret, infidélité ?", work: "Stratégie solitaire.", advice: "Soyez malin.", warning: "Malhonnêteté."
    }
  },
  {
    id: "8_NET", name: "8 d'Épée", neoName: "GLITCH TRAP", type: 'NET', element: "AIR", color: "text-cyan-300", icon: "Lock",
    keywords: ["Prison", "Peur", "Impuissance"],
    interpretation: {
      general: "Prisonnier de ses propres pensées. Blocage mental.",
      love: "Se sentir coincé.", work: "Limites auto-imposées.", advice: "Libérez votre esprit.", warning: "Victimisation."
    }
  },
  {
    id: "9_NET", name: "9 d'Épée", neoName: "ANXIETY LOOP", type: 'NET', element: "AIR", color: "text-cyan-300", icon: "CloudLightning",
    keywords: ["Angoisse", "Cauchemar", "Stress"],
    interpretation: {
      general: "Boucle mentale négative. Insomnie et stress.",
      love: "Inquiétude excessive.", work: "Pression mentale.", advice: "Respirez, ce n'est que dans votre tête.", warning: "Panique."
    }
  },
  {
    id: "10_NET", name: "10 d'Épée", neoName: "FATAL ERROR", type: 'NET', element: "AIR", color: "text-cyan-300", icon: "Skull",
    keywords: ["Fin", "Échec", "Douleur"],
    interpretation: {
      general: "Fin brutale et définitive. Le pire est derrière vous.",
      love: "Rupture douloureuse.", work: "Licenciement, échec.", advice: "Relevez-vous, c'est fini.", warning: "Dramatisation."
    }
  },
  {
    id: "PAGE_NET", name: "Valet d'Épée", neoName: "DATA SPY", type: 'NET', element: "AIR", color: "text-cyan-300", icon: "Search",
    keywords: ["Curiosité", "Espion", "Vérité"],
    interpretation: {
      general: "Surveillance et curiosité. On cherche l'info.",
      love: "Stalking, observation.", work: "Recherche, audit.", advice: "Cherchez la vérité.", warning: "Indiscrétion."
    }
  },
  {
    id: "KNI_NET", name: "Cavalier d'Épée", neoName: "HACKER ATTACK", type: 'NET', element: "AIR", color: "text-cyan-300", icon: "Wind",
    keywords: ["Vitesse", "Logique", "Agressivité"],
    interpretation: {
      general: "Action rapide et tranchante. Intelligence vive.",
      love: "Débat intellectuel, froideur.", work: "Action décisive.", advice: "Soyez direct.", warning: "Agressivité."
    }
  },
  {
    id: "QUE_NET", name: "Reine d'Épée", neoName: "LOGIC QUEEN", type: 'NET', element: "AIR", color: "text-cyan-300", icon: "Feather",
    keywords: ["Indépendance", "Clarté", "Froideur"],
    interpretation: {
      general: "Intelligence pure sans filtre émotionnel.",
      love: "Célibataire endurcie ou partenaire lucide.", work: "Juge, critique, experte.", advice: "Utilisez votre tête.", warning: "Cynisme."
    }
  },
  {
    id: "KIN_NET", name: "Roi d'Épée", neoName: "NET ARCHITECT", type: 'NET', element: "AIR", color: "text-cyan-300", icon: "Server",
    keywords: ["Autorité", "Vérité", "Ethique"],
    interpretation: {
      general: "Maîtrise intellectuelle et éthique. Décision juste.",
      love: "Partenaire intellectuel et droit.", work: "Expert, juge, chef.", advice: "Soyez juste.", warning: "Rigidité."
    }
  },

  // === SUITE DENIERS (HARDWARE) ===
  {
    id: "ACE_HW", name: "As de Denier", neoName: "THE CHIP", type: 'HARDWARE', element: "EARTH", color: "text-emerald-400", icon: "Cpu",
    keywords: ["Opportunité", "Argent", "Concret"],
    interpretation: {
      general: "Nouvelle ressource matérielle. Le début de la prospérité.",
      love: "Relation stable.", work: "Nouveau contrat, argent.", advice: "Investissez.", warning: "Avidité."
    }
  },
  {
    id: "2_HW", name: "2 de Denier", neoName: "LOAD BALANCING", type: 'HARDWARE', element: "EARTH", color: "text-emerald-400", icon: "RefreshCcw",
    keywords: ["Équilibre", "Flexibilité", "Jeu"],
    interpretation: {
      general: "Jongler avec les ressources. Gérer les priorités.",
      love: "Prendre les choses à la légère.", work: "Gérer le budget.", advice: "Soyez flexible.", warning: "Instabilité."
    }
  },
  {
    id: "3_HW", name: "3 de Denier", neoName: "TEAMWORK", type: 'HARDWARE', element: "EARTH", color: "text-emerald-400", icon: "Users",
    keywords: ["Collaboration", "Expertise", "Construction"],
    interpretation: {
      general: "Travail d'équipe efficace. On bâtit ensemble.",
      love: "Construire un avenir.", work: "Collaboration, reconnaissance.", advice: "Travaillez avec les autres.", warning: "Manque de coordination."
    }
  },
  {
    id: "4_HW", name: "4 de Denier", neoName: "SECURITY VAULT", type: 'HARDWARE', element: "EARTH", color: "text-emerald-400", icon: "Lock",
    keywords: ["Conservation", "Sécurité", "Contrôle"],
    interpretation: {
      general: "On garde ses ressources. Sécurité mais blocage.",
      love: "Possessivité.", work: "Épargne, avarice.", advice: "Sécurisez, mais ne bloquez pas.", warning: "Radinerie."
    }
  },
  {
    id: "5_HW", name: "5 de Denier", neoName: "LOW BATTERY", type: 'HARDWARE', element: "EARTH", color: "text-emerald-400", icon: "BatteryLow",
    keywords: ["Manque", "Perte", "Isolement"],
    interpretation: {
      general: "Période de vache maigre. Sentiment d'abandon.",
      love: "Solitude, rejet.", work: "Perte financière, chômage.", advice: "Demandez de l'aide.", warning: "Désespoir."
    }
  },
  {
    id: "6_HW", name: "6 de Denier", neoName: "TRANSACTION", type: 'HARDWARE', element: "EARTH", color: "text-emerald-400", icon: "Repeat",
    keywords: ["Partage", "Générosité", "Équilibre"],
    interpretation: {
      general: "Donner et recevoir. Équilibre financier.",
      love: "Soutien mutuel.", work: "Mécénat, bonus, aide.", advice: "Soyez généreux.", warning: "Dettes."
    }
  },
  {
    id: "7_HW", name: "7 de Denier", neoName: "MINING", type: 'HARDWARE', element: "EARTH", color: "text-emerald-400", icon: "Clock",
    keywords: ["Patience", "Investissement", "Attente"],
    interpretation: {
      general: "Le travail a été fait, il faut attendre la récolte.",
      love: "Patience en amour.", work: "Investissement à long terme.", advice: "Attendez la récolte.", warning: "Découragement."
    }
  },
  {
    id: "8_HW", name: "8 de Denier", neoName: "CRAFTING", type: 'HARDWARE', element: "EARTH", color: "text-emerald-400", icon: "Hammer",
    keywords: ["Travail", "Détail", "Apprentissage"],
    interpretation: {
      general: "Travail minutieux et répétitif. Maîtrise technique.",
      love: "Efforts pour la relation.", work: "Perfectionnement, artisanat.", advice: "Soyez appliqué.", warning: "Perfectionnisme."
    }
  },
  {
    id: "9_HW", name: "9 de Denier", neoName: "INDEPENDENCE", type: 'HARDWARE', element: "EARTH", color: "text-emerald-400", icon: "UserCheck",
    keywords: ["Réussite", "Luxe", "Autonomie"],
    interpretation: {
      general: "Réussite personnelle et confort matériel. On profite.",
      love: "Bien seul ou en couple libre.", work: "Succès financier.", advice: "Profitez de vos acquis.", warning: "Solitude dorée."
    }
  },
  {
    id: "10_HW", name: "10 de Denier", neoName: "LEGACY SERVER", type: 'HARDWARE', element: "EARTH", color: "text-emerald-400", icon: "Database",
    keywords: ["Héritage", "Famille", "Richesse"],
    interpretation: {
      general: "Richesse durable et héritage. Solidité totale.",
      love: "Famille, mariage stable.", work: "Entreprise familiale, patrimoine.", advice: "Pensez au long terme.", warning: "Matérialisme."
    }
  },
  {
    id: "PAGE_HW", name: "Valet de Denier", neoName: "STUDENT DEV", type: 'HARDWARE', element: "EARTH", color: "text-emerald-400", icon: "BookOpen",
    keywords: ["Étude", "Début", "Pratique"],
    interpretation: {
      general: "Envie d'apprendre et de bâtir. Nouveau projet concret.",
      love: "Relation sérieuse qui débute.", work: "Formation, stage.", advice: "Apprenez les bases.", warning: "Lenteur."
    }
  },
  {
    id: "KNI_HW", name: "Cavalier de Denier", neoName: "STABLE UNIT", type: 'HARDWARE', element: "EARTH", color: "text-emerald-400", icon: "Truck",
    keywords: ["Prudence", "Travail", "Routine"],
    interpretation: {
      general: "Avancée lente mais sûre. Fiabilité absolue.",
      love: "Partenaire fidèle et routinier.", work: "Travailleur acharné.", advice: "Soyez constant.", warning: "Ennui."
    }
  },
  {
    id: "QUE_HW", name: "Reine de Denier", neoName: "RESOURCE MANAGER", type: 'HARDWARE', element: "EARTH", color: "text-emerald-400", icon: "Box",
    keywords: ["Confort", "Sécurité", "Soin"],
    interpretation: {
      general: "Prospérité et bon sens. Capacité à gérer le matériel.",
      love: "Partenaire attentionnée et sensuelle.", work: "Gestionnaire avisée.", advice: "Prenez soin de vous.", warning: "Possessivité."
    }
  },
  {
    id: "KIN_HW", name: "Roi de Denier", neoName: "CRYPTO TYCOON", type: 'HARDWARE', element: "EARTH", color: "text-emerald-400", icon: "Briefcase",
    keywords: ["Richesse", "Pouvoir", "Réussite"],
    interpretation: {
      general: "Sommet de la réussite matérielle. Puissance financière.",
      love: "Protecteur et généreux.", work: "PDG, Investisseur.", advice: "Gérez votre empire.", warning: "Avidité."
    }
  },
];

// --- EXPORT FINAL COMBINÉ (78 CARTES) ---
export const TAROT_DECK: Arcana[] = [...MAJOR_ARCANA, ...MINOR_ARCANA];