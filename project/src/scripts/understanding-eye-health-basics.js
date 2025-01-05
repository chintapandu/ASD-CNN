import OpenAI from 'openai';
import axios from 'axios';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID_1 = "ErXwobaYiN019PkySvjV"; 
const VOICE_ID_2 = "VR6AewLTigWG4xSOukaG"; 

async function generateScript() {
  const prompt = `Create a natural dialogue script between Dr. James (a senior ophthalmologist) and Dr. Michael (a medical researcher) discussing eye health basics. 
  The conversation should cover:
  - Basic eye anatomy
  - Common eye problems
  - Prevention tips
  - The importance of regular check-ups
  Format it as a conversation with speaker labels.
  Keep it engaging, informative, and around 5 minutes when spoken.`;

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  return completion.choices[0].message.content;
}

async function generateAudio(text, voiceId) {
  const response = await axios.post(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    {
      text: text,
      model_id: "eleven_monolingual_v1",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.5
      }
    },
    {
      headers: {
        'Accept': 'audio/mpeg',
        'xi-api-key': ELEVENLABS_API_KEY,
        'Content-Type': 'application/json'
      },
      responseType: 'arraybuffer'
    }
  );

  return response.data;
}

async function createPodcast() {
  try {

    const script = await generateScript();
    console.log("Script generated successfully");

    const drJamesParts = script
      .split('\n')
      .filter(line => line.startsWith('Dr. James:'))
      .map(line => line.replace('Dr. James:', '').trim());

    const drMichaelParts = script
      .split('\n')
      .filter(line => line.startsWith('Dr. Michael:'))
      .map(line => line.replace('Dr. Michael:', '').trim());

    const drJamesAudio = await generateAudio(drJamesParts.join(' '), VOICE_ID_1);
    const drMichaelAudio = await generateAudio(drMichaelParts.join(' '), VOICE_ID_2);
    
    console.log("Podcast created successfully");
    return {
      script,
      audioFiles: {
        drJames: drJamesAudio,
        drMichael: drMichaelAudio
      }
    };
  } catch (error) {
    console.error("Error creating podcast:", error);
    throw error;
  }
}

export { createPodcast };