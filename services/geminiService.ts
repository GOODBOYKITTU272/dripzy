/// <reference types="vite/client" />
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize safely
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;

if (apiKey) {
  try {
    aiClient = new GoogleGenAI({ apiKey });
  } catch (error) {
    console.error("Failed to initialize Gemini client", error);
  }
}

export const askDripzyAI = async (userMessage: string): Promise<string> => {
  // 1. Try using Gemini API if client is initialized
  if (aiClient) {
    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: userMessage,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });
      return response.text || "Sorry, I didn't catch that drip. Try again?";
    } catch (error) {
      console.error("Gemini API Error:", error);
      // Fall through to demo mode on error
    }
  }

  // 2. DEMO MODE (Fallback if no API key or API fails)
  console.warn("Using Demo Mode (No API Key found)");
  const lowerMsg = userMessage.toLowerCase();

  if (lowerMsg.includes('earn') || lowerMsg.includes('cashback') || lowerMsg.includes('money')) {
    return "💰 **How to Earn:**\n1. **Community Cashback:** 15% of ALL weekly sales is shared equally among ALL buyers.\n2. **Referrals:** Get ₹200 instant cashback for every friend who buys.";
  }

  if (lowerMsg.includes('week') || lowerMsg.includes('cycle')) {
    return "📅 **The Weeks:**\n- **Week 1:** You join the pool.\n- **Week 2:** You + Week 2 buyers share revenue.\n- **Week 3:** You + Week 2 + Week 3 buyers share revenue.\nIt's an ongoing cycle! The earlier you join, the more weeks you earn from.";
  }

  if (lowerMsg.includes('product') || lowerMsg.includes('shirt') || lowerMsg.includes('polo')) {
    return "👕 **The Collection:**\nWe only master 2 things:\n1. **The Signature Round Neck** (₹999)\n2. **The Classic Polo** (₹999)\nBoth come with a 100% Cotton Bio-Wash finish.";
  }

  if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('yo')) {
    return "Yo! 👋 I'm the Dripzy AI (Demo Mode). Ask me about **earnings**, **weeks**, or **products**!";
  }

  return "I'm in **Demo Mode** (API Key missing). I can answer basic questions about:\n- 💰 Earnings & Cashback\n- 📅 Weekly Cycles\n- 👕 Products\n\nTo make me fully smart, add your `VITE_GEMINI_API_KEY` to the `.env` file!";
};
