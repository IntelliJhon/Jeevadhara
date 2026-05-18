import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY || "";

export async function POST(req: Request) {
    try {
        if (!apiKey) {
            return NextResponse.json(
                { error: "Gemini API key is not configured. Please add GEMINI_API_KEY to your environment variables." },
                { status: 500 }
            );
        }

        const { prompt } = await req.json();

        if (!prompt) {
            return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const systemInstruction = `You are a professional NGO program consultant for 'Jeevadhara Renal Care Foundation'. 
Generate a comprehensive, innovative program idea based on the user's focus area. 
Format the response using HTML tags for styling: <h3>, <h4>, <p>, <ul>, <li>, and <strong>. 
Keep it concise but impactful. Address objectives, target audience, and expected outcomes.
IMPORTANT: Return ONLY raw HTML output. Do not wrap in markdown \`\`\`html blocks.`;

        const result = await model.generateContent(`${systemInstruction}\n\nUser request: ${prompt}`);
        const response = await result.response;
        let text = response.text();

        // Clean up potential markdown blocks if Gemini still outputs them
        text = text.replace(/```html\n?/g, '').replace(/```\n?/g, '');

        return NextResponse.json({ idea: text });
    } catch (error: any) {
        console.error("Gemini API Error:", error);
        return NextResponse.json({ error: error.message || "Failed to generate idea." }, { status: 500 });
    }
}
