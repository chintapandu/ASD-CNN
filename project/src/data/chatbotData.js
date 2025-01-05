// Comprehensive knowledge base for the D R Locana AI Assistant
export const chatbotKnowledge = {
  diabeticRetinopathy: {
    definition: {
      basic: "Diabetic Retinopathy is an eye condition caused by damage to the blood vessels of the retina due to high blood sugar levels associated with diabetes.",
      detailed: "It's a progressive condition that can lead to vision impairment and blindness if left untreated. The condition develops when high blood sugar levels damage the tiny blood vessels that supply the retina - the light-sensitive layer at the back of the eye."
    },
    causes: [
      "Prolonged high blood sugar levels damaging retinal blood vessels",
      "Damage to retinal microvasculature leading to fluid leakage",
      "Hemorrhaging and abnormal blood vessel growth",
      "Inadequate blood supply (hypoxia) triggering neovascularization"
    ],
    riskFactors: {
      diabetesDuration: "Longer duration of diabetes increases risk",
      bloodSugar: "Poor blood sugar control (high HbA1c levels)",
      hypertension: "High blood pressure accelerates vascular damage",
      cholesterol: "High cholesterol increases risk of vessel damage",
      kidneyDisease: "Diabetic nephropathy worsens prognosis",
      pregnancy: "Hormonal changes can worsen retinopathy",
      smoking: "Worsens vascular health and retinopathy"
    },
    stages: {
      mildNPDR: {
        name: "Mild Nonproliferative Diabetic Retinopathy",
        description: "Early stage with small microaneurysms",
        symptoms: ["Often asymptomatic", "Mild vision changes"]
      },
      moderateNPDR: {
        name: "Moderate Nonproliferative Diabetic Retinopathy",
        description: "Blocked vessels reduce oxygen supply",
        symptoms: ["Blurred vision", "Dark spots"]
      },
      severeNPDR: {
        name: "Severe Nonproliferative Diabetic Retinopathy",
        description: "More vessels blocked, retina starved of oxygen",
        symptoms: ["Increased vision problems", "More dark spots"]
      },
      pdr: {
        name: "Proliferative Diabetic Retinopathy",
        description: "Severe stage with fragile new blood vessels",
        symptoms: ["Severe vision loss", "Floaters", "Retinal detachment risk"]
      }
    },
    symptoms: {
      early: ["Often asymptomatic"],
      progressive: [
        "Blurry vision",
        "Floaters (dark spots)",
        "Flashes of light",
        "Difficulty seeing at night",
        "Distorted vision",
        "Sudden vision loss"
      ]
    },
    diagnosis: {
      methods: [
        {
          name: "Dilated Fundus Examination",
          description: "Comprehensive eye exam to detect retinal changes"
        },
        {
          name: "Fundus Photography",
          description: "Detailed retinal images to track progression"
        },
        {
          name: "Fluorescein Angiography",
          description: "Dye test to highlight blood vessel abnormalities"
        },
        {
          name: "Optical Coherence Tomography (OCT)",
          description: "Cross-sectional imaging for macular edema detection"
        }
      ]
    },
    treatments: {
      preventive: [
        "Tight blood sugar control",
        "Regular eye examinations",
        "Blood pressure management",
        "Healthy lifestyle choices"
      ],
      interventional: [
        {
          name: "Laser Therapy",
          types: [
            "Focal laser photocoagulation for leaking vessels",
            "Panretinal photocoagulation (PRP) for proliferative retinopathy"
          ]
        },
        {
          name: "Anti-VEGF Therapy",
          description: "Medications like Lucentis, Eylea, and Avastin to block abnormal vessel growth"
        },
        {
          name: "Steroid Injections",
          description: "Reduces inflammation and retinal swelling"
        },
        {
          name: "Vitrectomy",
          description: "Surgery for severe cases with hemorrhage or retinal detachment"
        }
      ]
    }
  },
  eyeAnatomy: {
    external: {
      cornea: {
        description: "Clear, dome-shaped surface covering eye front",
        function: "Focuses incoming light"
      },
      pupil: {
        description: "Dark circular opening in iris center",
        function: "Controls light amount entering eye"
      },
      iris: {
        description: "Colored part surrounding pupil",
        function: "Controls pupil size"
      },
      sclera: {
        description: "White part of eye",
        function: "Provides structure and protection"
      }
    },
    internal: {
      lens: {
        description: "Transparent, flexible structure",
        function: "Focuses light onto retina"
      },
      retina: {
        description: "Light-sensitive layer at back",
        function: "Converts light to electrical signals"
      },
      macula: {
        description: "Central retinal area",
        function: "Sharp central vision"
      },
      opticNerve: {
        description: "Nerve connecting eye to brain",
        function: "Transmits visual signals"
      }
    }
  }
};

export const commonQuestions = {
  diabeticRetinopathy: [
    {
      question: "What is diabetic retinopathy?",
      answer: chatbotKnowledge.diabeticRetinopathy.definition.basic
    },
    {
      question: "What causes diabetic retinopathy?",
      answer: "Diabetic retinopathy is caused by damage to retinal blood vessels due to high blood sugar levels. " +
        chatbotKnowledge.diabeticRetinopathy.causes.join(" ")
    },
    {
      question: "What are the symptoms of diabetic retinopathy?",
      answer: "Early stages often have no symptoms. Progressive symptoms include: " +
        chatbotKnowledge.diabeticRetinopathy.symptoms.progressive.join(", ")
    },
    {
      question: "How is diabetic retinopathy treated?",
      answer: "Treatment depends on the stage and severity. Options include: " +
        chatbotKnowledge.diabeticRetinopathy.treatments.interventional
          .map(t => t.name)
          .join(", ")
    }
  ],
  eyeAnatomy: [
    {
      question: "What are the main parts of the eye?",
      answer: "The eye has external parts like the cornea, pupil, and iris, and internal parts including the lens, retina, and optic nerve. Each plays a crucial role in vision."
    }
  ]
};