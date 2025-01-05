import { voiceAssistantData, voiceCommands } from '../data/voiceAssistantData';

export function processVoiceCommand(transcript) {
  const normalizedTranscript = transcript.toLowerCase();
  
  if (voiceCommands.triggers.diabeticRetinopathy.some(trigger => 
    normalizedTranscript.includes(trigger))) {
    return voiceAssistantData.diabeticRetinopathy.definition;
  }

  if (voiceCommands.triggers.stages.some(trigger => 
    normalizedTranscript.includes(trigger))) {
    return voiceAssistantData.diabeticRetinopathy.stages.overview;
  }

  if (voiceCommands.triggers.risks.some(trigger => 
    normalizedTranscript.includes(trigger))) {
    return voiceAssistantData.diabeticRetinopathy.riskFactors;
  }

  if (voiceCommands.triggers.symptoms.some(trigger => 
    normalizedTranscript.includes(trigger))) {
    return voiceAssistantData.diabeticRetinopathy.symptoms;
  }

  if (voiceCommands.triggers.treatment.some(trigger => 
    normalizedTranscript.includes(trigger))) {
    return voiceAssistantData.diabeticRetinopathy.treatment;
  }

  if (voiceCommands.triggers.prevention.some(trigger => 
    normalizedTranscript.includes(trigger))) {
    return voiceAssistantData.diabeticRetinopathy.prevention;
  }

  return "I can help you understand diabetic retinopathy. You can ask about its definition, stages, risk factors, symptoms, treatment, or prevention. What would you like to know?";
}