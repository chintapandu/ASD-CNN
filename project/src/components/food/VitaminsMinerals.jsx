import { motion } from 'framer-motion';
import { FaAppleAlt, FaCarrot, FaFish, FaSeedling } from 'react-icons/fa';

function VitaminsMinerals() {
  const items = [
    {
      name: "Vitamin A",
      foods: ["Sweet potatoes", "Carrots", "Spinach", "Eggs"],
      benefits: "Essential for night vision and eye moisture",
      dailyValue: "900mcg for men, 700mcg for women",
      icon: FaCarrot
    },
    {
      name: "Omega-3 Fatty Acids",
      foods: ["Salmon", "Sardines", "Walnuts", "Flaxseeds"],
      benefits: "Reduces inflammation and supports retinal function",
      dailyValue: "250-500mg combined EPA and DHA",
      icon: FaFish
    },
    {
      name: "Vitamin C",
      foods: ["Oranges", "Strawberries", "Bell peppers", "Broccoli"],
      benefits: "Protects against cataracts and supports blood vessels",
      dailyValue: "90mg for men, 75mg for women",
      icon: FaAppleAlt
    },
    {
      name: "Vitamin E",
      foods: ["Almonds", "Sunflower seeds", "Avocados", "Olive oil"],
      benefits: "Protects cells from free radical damage",
      dailyValue: "15mg",
      icon: FaSeedling
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Essential Vitamins & Minerals</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Icon className="text-2xl text-green-600" />
                <h3 className="text-xl font-semibold">{item.name}</h3>
              </div>
              <ul className="space-y-2">
                <li><strong>Foods:</strong> {item.foods.join(", ")}</li>
                <li><strong>Benefits:</strong> {item.benefits}</li>
                <li><strong>Daily Value:</strong> {item.dailyValue}</li>
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default VitaminsMinerals;