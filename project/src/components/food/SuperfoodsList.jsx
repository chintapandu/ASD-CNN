import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

function SuperfoodsList() {
  const superfoods = [
    {
      name: "Leafy Greens",
      examples: ["Spinach", "Kale", "Swiss Chard"],
      benefits: "Rich in lutein and zeaxanthin, essential for retinal health",
      servingSize: "2-3 cups daily"
    },
    {
      name: "Fatty Fish",
      examples: ["Salmon", "Mackerel", "Sardines"],
      benefits: "High in omega-3 fatty acids and vitamin D",
      servingSize: "2-3 servings per week"
    },
    {
      name: "Colorful Berries",
      examples: ["Blueberries", "Goji Berries", "Blackberries"],
      benefits: "Packed with antioxidants and vitamin C",
      servingSize: "1 cup daily"
    },
    {
      name: "Nuts and Seeds",
      examples: ["Almonds", "Chia Seeds", "Walnuts"],
      benefits: "Contain vitamin E and healthy fats",
      servingSize: "1/4 cup daily"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Superfoods for Eye Health</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {superfoods.map((food, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaStar className="text-yellow-500 text-xl" />
              <h3 className="text-lg font-semibold">{food.name}</h3>
            </div>
            <div className="space-y-2">
              <p><strong>Examples:</strong> {food.examples.join(", ")}</p>
              <p><strong>Benefits:</strong> {food.benefits}</p>
              <p><strong>Recommended Serving:</strong> {food.servingSize}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SuperfoodsList;