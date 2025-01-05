
export function matchCommand(transcript) {
  const normalizedInput = transcript.toLowerCase().trim();
  

  if (normalizedInput.includes('diabetic retinopathy') || 
      normalizedInput.includes('what is diabetic retinopathy')) {
    return 'definition';
  }
  
  if (normalizedInput.includes('stages')) {
    return 'stages';
  }
  
  if (normalizedInput.includes('risks') || 
      normalizedInput.includes('risk factors')) {
    return 'risks';
  }
  
  if (normalizedInput.includes('symptoms')) {
    return 'symptoms';
  }
  
  if (normalizedInput.includes('treatment')) {
    return 'treatment';
  }
  
  if (normalizedInput.includes('prevention')) {
    return 'prevention';
  }
  
  return null;
}