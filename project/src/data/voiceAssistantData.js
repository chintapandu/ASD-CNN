// Comprehensive knowledge base for voice assistant
export const voiceAssistantData = {
  greetings: {
    initial: "Hi, this is DR Locana. How can I help you today?",
    followUp: "Is there anything specific you'd like to know about eye health or diabetic retinopathy?"
  },

  diabeticRetinopathy: {
    definition: "Diabetic Retinopathy is a diabetes-related eye condition that affects the retina, the light-sensitive tissue at the back of the eye. It occurs when high blood sugar (glucose) levels damage the blood vessels in the retina, leading to vision problems. Diabetic retinopathy is one of the most common causes of blindness in adults, but it is often preventable with early detection and proper management.",
    
    stages: {
      overview: "Stages:\n\nNon-proliferative: Early stage with weak blood vessels leaking fluid.\nProliferative: Abnormal blood vessels grow, causing bleeding and vision problems.\nMacular Edema: Fluid leaks into the macula, leading to vision loss.",
    },

    riskFactors: "Poor Blood Sugar Control: High blood sugar levels can damage the blood vessels over time.\nDuration of Diabetes: The longer someone has diabetes, the higher the risk of developing retinopathy.\nHigh Blood Pressure: Increases the likelihood of blood vessel damage.\nHigh Cholesterol: Contributes to the thickening and narrowing of blood vessels.\nPregnancy: Pregnant women with diabetes are at higher risk of developing retinopathy.\nSmoking: Smoking can increase the risk of developing diabetic retinopathy.",

    symptoms: "Blurred or distorted vision.\nDifficulty seeing at night.\nSeeing floaters or dark spots.\nSudden vision loss.\nPoor color vision.",

    treatment: "Laser therapy, injections, and sometimes surgery to prevent vision loss.",

    prevention: "Regular eye exams, good blood sugar control, managing blood pressure, and avoiding smoking."
  }
};

export const voiceCommands = {
  triggers: {
    diabeticRetinopathy: [
      "diabetic retinopathy",
      "what is diabetic retinopathy",
      "tell me about diabetic retinopathy"
    ],
    stages: [
      "stages",
      "stages of diabetic retinopathy"
    ],
    risks: [
      "risks",
      "risk factors",
      "risk factors of diabetic retinopathy"
    ],
    symptoms: [
      "symptoms",
      "symptoms of diabetic retinopathy"
    ],
    treatment: [
      "treatment",
      "treatment of diabetic retinopathy"
    ],
    prevention: [
      "prevention",
      "prevention of diabetic retinopathy"
    ]
  }
};