import model from "../config/gemini.config.js";

export async function chat(clientMessage: string): Promise<string> {
  const result = await model.generateContent([clientMessage]);
  return result.response.text();
};