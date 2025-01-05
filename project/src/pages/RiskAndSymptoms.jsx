import { useState } from 'react';
import { motion } from 'framer-motion';
import GeneralInfoForm from '../components/symptoms/GeneralInfoForm';
import SymptomsSection from '../components/symptoms/SymptomsSection';
import ResultsDisplay from '../components/symptoms/ResultsDisplay';

const symptomSections = {
  communication: {
    title: "Social Communication Symptoms",
    questions: [
      { id: 'conv', text: "Difficulty initiating or maintaining conversations" },
      { id: 'tone', text: "Struggling to understand tone, sarcasm, and idioms" },
      { id: 'expressions', text: "Trouble interpreting facial expressions and body language" }
    ]
  },
  interaction: {
    title: "Social Interaction Symptoms",
    questions: [
      { id: 'friends', text: "Difficulty making friends or connecting with peers" },
      { id: 'social', text: "Struggling to understand social cues and norms" },
      { id: 'outsider', text: "Feeling like an outsider or being misunderstood" }
    ]
  },
  behavior: {
    title: "Restricted and Repetitive Behavior Symptoms",
    questions: [
      { id: 'movements', text: "Repetitive movements, such as hand flapping or rocking" },
      { id: 'interests', text: "Strong interest in specific topics or activities" },
      { id: 'sensitivity', text: "Sensitivity to sounds, sights, or smells" }
    ]
  }
};

function RiskAndSymptoms() {
  const [generalInfo, setGeneralInfo] = useState({
    age: '',
    sex: '',
    yearsSinceSymptoms: ''
  });

  const [responses, setResponses] = useState({});
  const [results, setResults] = useState(null);

  const handleGeneralInfoChange = (e) => {
    setGeneralInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleResponseChange = (questionId, value) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const analyzeResponses = () => {
    // Count 'yes' and 'sometimes' responses
    const score = Object.values(responses).filter(v => v === 'yes' || v === 'sometimes').length;
    
    let stage, description, remedies, recommendations;

    if (score >= 7) {
      stage = "Severe";
      description = "Significant support needs identified across multiple areas.";
      remedies = [
        "Intensive behavioral therapy",
        "Comprehensive speech therapy",
        "Occupational therapy for sensory processing",
        "Social skills training programs"
      ];
      recommendations = [
        "Seek immediate professional evaluation",
        "Consider specialized educational support",
        "Join support groups for families",
        "Develop a structured daily routine"
      ];
    } else if (score >= 4) {
      stage = "Moderate";
      description = "Notable challenges in social communication and behavior patterns.";
      remedies = [
        "Regular behavioral therapy sessions",
        "Speech therapy for communication",
        "Social skills groups",
        "Sensory integration therapy"
      ];
      recommendations = [
        "Schedule professional assessment",
        "Implement consistent routines",
        "Practice social skills at home",
        "Consider occupational therapy"
      ];
    } else {
      stage = "Early";
      description = "Mild indicators present, early intervention may be beneficial.";
      remedies = [
        "Early intervention programs",
        "Parent-led therapy activities",
        "Developmental play groups",
        "Basic communication support"
      ];
      recommendations = [
        "Monitor development closely",
        "Maintain regular check-ups",
        "Engage in social activities",
        "Practice communication skills"
      ];
    }

    setResults({ stage, description, remedies, recommendations });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center text-purple-700 mb-8"
      >
        Autism Spectrum Disorder Assessment
      </motion.h1>

      <div className="space-y-8">
        <GeneralInfoForm 
          formData={generalInfo}
          onChange={handleGeneralInfoChange}
        />

        {Object.entries(symptomSections).map(([key, section]) => (
          <SymptomsSection
            key={key}
            title={section.title}
            questions={section.questions}
            responses={responses}
            onChange={handleResponseChange}
          />
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center"
        >
          <button
            onClick={analyzeResponses}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Analyze Symptoms
          </button>
        </motion.div>

        {results && <ResultsDisplay results={results} />}
      </div>
    </div>
  );
}

export default RiskAndSymptoms;