import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, StreamingTextResponse } from 'ai';


//export const runtime = "edge";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');


export async function POST(req: Request) {
  const { messages } = await req.json();
  // Ask Google Generative AI for a streaming completion given the prompt
//   const content = Array.isArray(messages) 
//   ? messages.map((msg) => ({ text: msg })) 
//   : [{ text: messages }];
// console.log("cnt ",content)
console.log(messages)
  const response = await genAI
    .getGenerativeModel({ model: 'gemini-pro' })
    .generateContentStream({
        contents:messages
    })
    console.log("this is res",response)
    const stream = GoogleGenerativeAIStream(response);
    // {
        // contents: [{ role: 'user', parts: [{ text: prompt }] }],
    //   }

    return new StreamingTextResponse(stream);
}