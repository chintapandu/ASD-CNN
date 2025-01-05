import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';

function SupplementInfo() {
  const supplements = [
    {
      name: "Multivitamin/Mineral",
      description: "Comprehensive nutrient support",
      considerations: [
        "Choose hypoallergenic formulas",
        "Consider liquid or chewable forms",
        "Look for ones without artificial colors/flavors",
        "Ensure appropriate dosage for age"
      ]
    },
    {
      name: "Probiotics",
      description: "Gut health support",
      considerations: [
        "Select strains researched for ASD",
        "Start with lower doses",
        "Monitor digestive response",
        "Choose dairy-free options if needed"
      ]
    },
    {
      name: "Additional Supplements",
      description: "Based on individual needs",
      considerations: [
        "Consult healthcare provider first",
        "Consider vitamin D levels",
        "Assess omega-3 needs",
        "Monitor for interactions"
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {supplements.map((supplement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <FaInfoCircle className="text-green-600" />
            <h3 className="text-xl font-semibold">{supplement.name}</h3>
          </div>
          <p className="text-gray-600 mb-4">{supplement.description}</p>
          <ul className="space-y-2">
            {supplement.considerations.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start gap-2">
                <span className="text-green-600">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

export default SupplementInfo;