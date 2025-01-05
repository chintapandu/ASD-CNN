// Comprehensive eye health and diabetic retinopathy information
export const eyeHealthData = {
  eyeStructure: {
    basic: [
      "Cornea - Clear front layer that focuses light",
      "Iris - Colored part that controls pupil size",
      "Lens - Focuses light onto retina",
      "Retina - Light-sensitive layer that sends signals to brain",
      "Optic Nerve - Carries visual information to brain",
      "Macula - Central part of retina for sharp vision",
      "Vitreous - Clear gel filling the eye"
    ],
    detailed: "The eye is a complex organ with multiple layers and components..."
  },
  
  healthyFoods: [
    {
      category: "Antioxidant-Rich Foods",
      items: ["Leafy greens", "Berries", "Orange bell peppers"],
      benefits: "Protect retinal cells from oxidative stress"
    },
    {
      category: "Omega-3 Rich Foods",
      items: ["Salmon", "Sardines", "Flaxseeds"],
      benefits: "Support retinal function and reduce inflammation"
    },
    {
      category: "Vitamin A Sources",
      items: ["Sweet potatoes", "Carrots", "Spinach"],
      benefits: "Essential for night vision and eye moisture"
    }
  ],

  diabeticRetinopathy: {
    stages: [
      {
        name: "Mild Nonproliferative",
        description: "Small areas of balloon-like swelling in retina's blood vessels",
        symptoms: ["May have no symptoms", "Microaneurysms present"]
      },
      {
        name: "Moderate Nonproliferative",
        description: "Some blood vessels that nourish retina become blocked",
        symptoms: ["Blurred vision may begin", "Dark spots may appear"]
      },
      {
        name: "Severe Nonproliferative",
        description: "Many more blood vessels blocked, signaling retina for new vessels",
        symptoms: ["More extensive blurring", "Dark spots increase", "Peripheral vision may be affected"]
      },
      {
        name: "Proliferative",
        description: "New blood vessels grow but are fragile and abnormal",
        symptoms: ["Severe vision loss possible", "Floaters increase", "Risk of retinal detachment"]
      }
    ],
    riskFactors: [
      "Duration of diabetes",
      "Poor blood sugar control",
      "High blood pressure",
      "High cholesterol",
      "Smoking",
      "Pregnancy",
      "Obesity"
    ]
  },

  systemicDiseases: [
    {
      disease: "Hypertension",
      eyeEffects: ["Retinal damage", "Blood vessel changes", "Vision loss"]
    },
    {
      disease: "Multiple Sclerosis",
      eyeEffects: ["Optic neuritis", "Double vision", "Eye movement problems"]
    },
    {
      disease: "Rheumatoid Arthritis",
      eyeEffects: ["Dry eyes", "Scleritis", "Retinal inflammation"]
    }
  ],

  preventiveMeasures: [
    "Regular comprehensive eye exams",
    "Blood sugar control for diabetics",
    "Protective eyewear in bright conditions",
    "Regular exercise",
    "Balanced diet rich in eye-healthy nutrients",
    "Adequate sleep",
    "Proper hydration"
  ]
};

export const chatbotResponses = {
  greetings: [
    "Hello! I'm D R Locana, your eye health assistant. How can I help you today?",
    "Welcome! I'm here to help you understand eye health and diabetic retinopathy better.",
    "Hi there! Let's talk about your eye health concerns."
  ],
  
  eyeStructure: {
    query: ["tell me about eye structure", "how does the eye work", "eye anatomy"],
    response: "The eye is a complex organ with several key components..."
  },
  
  // Add more structured responses
};

export const voiceCommands = {
  triggers: {
    eyeHealth: ["tell me about", "what is", "how does", "explain"],
    symptoms: ["symptoms", "signs", "problems"],
    treatment: ["treatment", "cure", "help", "manage"]
  },
  
  responses: {
    // Structured responses for voice commands
  }
};