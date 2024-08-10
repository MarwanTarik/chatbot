import { GoogleGenerativeAI } from "@google/generative-ai";
import config from "./main.config.js";

if (!config.geminKey) {
    throw new Error("Please provide a Gemin key");
}
const genAI = new GoogleGenerativeAI(config.geminKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default model;