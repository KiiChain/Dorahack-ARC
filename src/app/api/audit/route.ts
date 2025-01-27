import { GoogleGenerativeAIStream, StreamingTextResponse } from "ai"

import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function POST(req: Request) {
  // Agregar un log para debug
  console.log("API Key present:", !!process.env.GEMINI_API_KEY)

  const { messages } = await req.json()

  try {
    const response = await genAI.getGenerativeModel({ model: "gemini-pro" }).generateContentStream({
      contents: messages,
      generationConfig: {
        maxOutputTokens: 2048,
      },
    })

    const stream = GoogleGenerativeAIStream(response)
    return new StreamingTextResponse(stream)
  } catch (error) {
    console.error("Error details:", error)
    return new Response(JSON.stringify({ error: "Failed to generate response" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    })
  }
}
