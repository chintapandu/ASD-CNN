import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

function DietaryStrategies() {
  const strategies = [
    {
      title: "GFCF Diet Approach",
      description: "Gluten-free and casein-free diet considerations",
      points: [
        "Eliminate wheat, barley, rye, and dairy products",
        "Focus on alternative grains like quinoa and rice",
        "Use dairy alternatives like almond or coconut milk",
        "Read labels carefully for hidden sources"
      ]
    },
    {
      title: "Food Sensitivity Management",
      description: "Identifying and managing food sensitivities",
      points: [
        "Keep a detailed food diary",
        "Introduce new foods gradually",
        "Watch for behavioral changes after meals",
        "Work with healthcare providers on elimination diets"
      ]
    },
    {
      title: "Balanced Nutrition",
      description: "Ensuring complete nutritional intake",
      points: [
        "Include protein at every meal",
        "Offer variety of colorful fruits and vegetables",
        "Ensure adequate fiber intake",
        "Balance macro and micronutrients"
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {strategies.map((strategy, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-3">{strategy.title}</h3>
          <p className="text-gray-600 mb-4">{strategy.description}</p>
          <ul className="space-y-2">
            {strategy.points.map((point, pointIndex) => (
              <li key={pointIndex} className="flex items-start gap-2">
                <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

export default DietaryStrategies;