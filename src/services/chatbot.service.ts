import model from "../config/gemini.config";

export async function chat(clientMessage: string): Promise<string> {
  const result = await model.generateContent([clientMessage]);
  return result.response.text();
};