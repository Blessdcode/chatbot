import { Configuration, OpenAIApi } from "openai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY; 
const openai = new OpenAIApi(
  new Configuration({
    apiKey,
  })
);

const model = "gpt-4"; 

async function run(prompt: string): Promise<string> {
  try {
    const response = await openai.createChatCompletion({
      model,
      messages: [{ role: "user", content: prompt }], 
      temperature: 0.7, 
      max_tokens: 200, 
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    
    return (
      response.data.choices[0]?.message?.content || "No response generated."
    );
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to fetch response from OpenAI.");
  }
}

export default run;
