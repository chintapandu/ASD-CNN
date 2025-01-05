import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';

function NutritionalFacts() {
  const facts = [
    {
      title: "Glycemic Index and Eye Health",
      content: "Foods with a low glycemic index help maintain stable blood sugar levels, reducing the risk of diabetic retinopathy progression.",
      tips: ["Choose whole grains over refined grains", "Pair carbohydrates with protein", "Include fiber-rich foods"]
    },
    {
      title: "Antioxidant Power",
      content: "Antioxidants protect retinal cells from oxidative stress and damage.",
      tips: ["Eat rainbow-colored fruits and vegetables", "Include dark leafy greens daily", "Consider berries for snacks"]
    },
    {
      title: "Hydration Impact",
      content: "Proper hydration is crucial for maintaining healthy eye function and preventing dry eyes.",
      tips: ["Drink 8-10 glasses of water daily", "Include hydrating foods", "Limit caffeine and alcohol"]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Important Nutritional Facts</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaInfoCircle className="text-green-600 text-xl" />
              <h3 className="text-lg font-semibold">{fact.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{fact.content}</p>
            <ul className="list-disc list-inside text-gray-600">
              {fact.tips.map((tip, tipIndex) => (
                <li key={tipIndex}>{tip}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default NutritionalFacts;