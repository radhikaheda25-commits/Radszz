
import { GoogleGenAI, Type } from "@google/genai";
import { FoodItem } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getFoodRecommendations(currentCart: string[], allItems: FoodItem[]): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite-latest",
      contents: `Given the user has these items in their cart: ${currentCart.join(', ')}. 
      Recommend ONE item from our catalog: ${allItems.map(i => i.name).join(', ')}. 
      Explain why in 10 words or less. Return JSON format.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedItem: { type: Type.STRING },
            reason: { type: Type.STRING }
          },
          required: ["recommendedItem", "reason"]
        }
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return JSON.stringify({ recommendedItem: "Signature Cloud Pizza", reason: "Our most popular choice!" });
  }
}
