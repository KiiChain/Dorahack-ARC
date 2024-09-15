import { GoogleGenerativeAIStream, StreamingTextResponse } from "ai"

import { GoogleGenerativeAI } from "@google/generative-ai"

export const runtime = "edge"
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function POST(req: Request) {
  const { messages } = await req.json()
  // Ask Google Generative AI for a streaming completion given the prompt
  //   const content = Array.isArray(messages)
  //   ? messages.map((msg) => ({ text: msg }))
  //   : [{ text: messages }];
  // console.log("cnt ",content)
  const response = await genAI.getGenerativeModel({ model: "gemini-pro" }).generateContentStream({
    contents: messages,
  })
  const stream = GoogleGenerativeAIStream(response)
  // {
  // contents: [{ role: 'user', parts: [{ text: prompt }] }],
  //   }

  return new StreamingTextResponse(stream)
}
