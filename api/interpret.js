// api/interpret.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(request, response) {
  // 1. Vérifier que la clé existe
  if (!process.env.GEMINI_API_KEY) {
    return response.status(500).json({ error: "Clé API manquante coté serveur" });
  }

  // 2. Récupérer les données envoyées par le React
  const { cards, mode } = await request.body;

  try {
    // 3. Configurer Gemini
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // 4. Créer le Prompt Cyberpunk
    let prompt = "";
    
    if (mode === 'SINGLE') {
      prompt = `Tu es une IA Oracle Futuriste en l'an 2099. Le ton doit être Cyberpunk, mystique et technologique.
      L'utilisateur a tiré la carte : ${cards[0].neoName} (${cards[0].name}).
      Mots-clés : ${cards[0].keywords.join(', ')}.
      
      Fais une interprétation courte (3 phrases max) et percutante sur son avenir immédiat.
      Termine par un conseil cryptique style "hacker".`;
    } else {
      prompt = `Tu es une IA Oracle Futuriste en l'an 2099. Ton style est Cyberpunk / Tech-Noir.
      L'utilisateur a fait un tirage 3 cartes (Passé / Présent / Futur).
      
      PASSÉ : ${cards[0].neoName} (${cards[0].name})
      PRÉSENT : ${cards[1].neoName} (${cards[1].name})
      FUTUR : ${cards[2].neoName} (${cards[2].name})
      
      Analyse la synergie entre ces cartes. Raconte une mini-histoire sur l'évolution de l'utilisateur.
      Sois direct, un peu froid mais bienveillant. 
      Réponse en 4-5 phrases maximum.`;
    }

    // 5. Lancer la génération
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // 6. Renvoyer la réponse au React
    return response.status(200).json({ text });

  } catch (error) {
    console.error("Erreur Gemini:", error);
    return response.status(500).json({ error: "Erreur de connexion au Neural Core" });
  }
}