import { motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';

function DietaryTips() {
  const tips = [
    {
      category: "Meal Timing",
      tips: [
        "Eat at regular intervals to maintain stable blood sugar",
        "Have small, frequent meals instead of large ones",
        "Don't skip breakfast",
        "Avoid eating close to bedtime"
      ]
    },
    {
      category: "Portion Control",
      tips: [
        "Use smaller plates to control portions",
        "Fill half your plate with vegetables",
        "Measure servings of high-calorie foods",
        "Practice mindful eating"
      ]
    },
    {
      category: "Food Preparation",
      tips: [
        "Steam or grill instead of frying",
        "Use herbs and spices instead of salt",
        "Prepare meals in advance",
        "Include a variety of colors in each meal"
      ]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Helpful Dietary Tips</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tips.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaLightbulb className="text-yellow-500 text-xl" />
              <h3 className="text-lg font-semibold">{category.category}</h3>
            </div>
            <ul className="space-y-2">
              {category.tips.map((tip, tipIndex) => (
                <li key={tipIndex} className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span className="text-gray-600">{tip}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default DietaryTips;