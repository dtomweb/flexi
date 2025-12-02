import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(request, response) {
  // 1. Vérifier que la clé existe
  if (!process.env.GEMINI_API_KEY) {
    return response.status(500).json({ error: "Clé API manquante coté serveur" });
  }

  // 2. Récupérer les données envoyées par le React
  const { cards, mode } = await request.body;

  try {
    // 3. Configurer Gemini (Correction du modèle : 1.5-flash est la version actuelle rapide)
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // 4. Créer le Prompt (Consignes améliorées pour le grand public)
    let prompt = "";
    
    if (mode === 'SINGLE') {
      prompt = `
      Agis comme un Oracle sage et bienveillant de l'an 2099.
      L'utilisateur a tiré la carte : "${cards[0].neoName}" (Version futuriste de : ${cards[0].name}).
      Mots-clés : ${cards[0].keywords.join(', ')}.
      
      CONSIGNE :
      1. Donne une interprétation CLAIRE et CONCRÈTE de cette carte pour sa vie actuelle.
      2. Utilise un vocabulaire moderne mais compréhensible par tous (évite le jargon informatique trop technique).
      3. Sois positif et encourageant.
      4. Termine par une phrase de conseil direct.
      
      Longueur : 3 phrases maximum.
      `;
    } else {
      // MODE TRIPLE (PASSÉ / PRÉSENT / FUTUR)
      prompt = `
      Agis comme un Oracle sage et bienveillant de l'an 2099.
      L'utilisateur a fait un tirage temporel (Passé / Présent / Futur) pour comprendre son évolution.
      
      1. PASSÉ (L'origine) : "${cards[0].neoName}" (Base : ${cards[0].name})
      2. PRÉSENT (La situation) : "${cards[1].neoName}" (Base : ${cards[1].name})
      3. FUTUR (L'issue) : "${cards[2].neoName}" (Base : ${cards[2].name})
      
      CONSIGNE :
      Ne fais pas une liste carte par carte. Raconte une histoire fluide qui lie les trois temps.
      Explique comment le passé (carte 1) influence le présent (carte 2) et mène vers le futur (carte 3).
      
      Le ton doit être :
      - Clair et accessible au grand public.
      - Empathique et humain (pas robotique).
      - Une touche futuriste subtile dans l'ambiance, mais le message doit être terre-à-terre.
      
      Longueur : 4 à 5 phrases courtes.
      `;
    }

    // 5. Lancer la génération
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // 6. Renvoyer la réponse au React
    return response.status(200).json({ text });

  } catch (error) {
    console.error("Erreur Gemini:", error);
    // On renvoie une erreur propre sans faire planter le site
    return response.status(500).json({ error: "Erreur de connexion au Neural Core" });
  }
}