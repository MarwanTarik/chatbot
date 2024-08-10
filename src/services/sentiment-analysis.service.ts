import model from "../config/gemini.config.js";

export async function analyze(message: string): Promise<string> {
  if (!message) {
    throw new Error('Message is required');
  }
  const prompt = `Analyze the sentiment of the sentence given below.\n${message}\nThe output should be in the format- Semtiment: Value`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}