import { GoogleGenAI } from "@google/genai";
import "dotenv/config";

async function generateNaturalLanguage(candidate) {
  try {
    const API = process.env.LNG_API;

    if (!API) {
      throw new Error("API key isn't working");
    }

    const ai = new GoogleGenAI({ apiKey: API });
    const start = Date.now()

    const candidateData = {
      domain: candidate.metadata.domain,
      difficulty: candidate.metadata.level,
      interventions: candidate.interventions,
      environmentalEffects: candidate.knowledge.envEffects,
      personalBenefits: candidate.knowledge.personalBenifits,
      environmentalBenefits: candidate.knowledge.envBenifits
    };

    const prompt = ` You create weekly environmental challenges for Green Path.

      Use the supplied information to write a short challenge
      that explains the action, why it matters, and how it
      connects to the user's goals.

      Rules:
      - Use clear, natural, grounded language.
      - Avoid exaggerated enthusiasm, slang, and guilt.
      - Do not invent statistics or benefits.
      - Do not change the recommended action.
      - Keep the response under 100 words.

      Challenge information:
      ${JSON.stringify(candidateData, null, 2)}
      Return only the challenge text.
      `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash-lite",
      contents: prompt
    });

    console.log(`Generation took ${(Date.now() - start) / 1000} seconds`);
    console.log(response.text);

  } catch (error) {

    console.error(error.message);
  }
}

const candidate = {
  id: 'plastic_bottles_reduction_high',
  metadata: {
    score: 73,
    cost: 4.5,
    source: 'bottles',
    domain: 'plastic',
    level: 'high',
    estimatedMonthlySavings: 300,
    assignedAt: "2026-10-27T11:51:18.936Z"
  },
  interventions: [
    'Invest in a high-quality reusable water bottle to drastically cut down on daily plastic waste.'
  ],
  knowledge: {
    envEffects: ["landfill overflow", "microplastic contamination", "water pollution", "soil degradation"],
    personalBenifits: ["save money", "microplastic-free food and water", "decluttered home"],
    envBenifits: ["reduced landfill mass", "cleaner oceans", "protection of marine wildlife"]
  }
}

generateNaturalLanguage(candidate);