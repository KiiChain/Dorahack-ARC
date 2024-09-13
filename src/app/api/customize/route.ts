import { GoogleGenerativeAIStream, StreamingTextResponse } from "ai"

import { GoogleGenerativeAI } from "@google/generative-ai"

//export const runtime = "edge";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function POST(req: Request) {
  const { messages } = await req.json()
  console.log("Prompt: ", messages)
  const response = await genAI.getGenerativeModel({ model: "gemini-pro" }).generateContentStream({
    contents: messages,
  })
  console.log("Response from gemini: ", response)
  const stream = GoogleGenerativeAIStream(response)
  return new StreamingTextResponse(stream)
}
