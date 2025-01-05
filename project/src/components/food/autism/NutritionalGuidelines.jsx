import { motion } from 'framer-motion';
import { FaAppleAlt, FaCarrot, FaFish, FaSeedling } from 'react-icons/fa';

function NutritionalGuidelines() {
  const nutrients = [
    {
      name: "Omega-3 Fatty Acids",
      foods: ["Fatty fish", "Chia seeds", "Flaxseeds", "Walnuts"],
      benefits: "Supports brain development and reduces inflammation",
      dailyValue: "1-2g EPA/DHA combined",
      icon: FaFish
    },
    {
      name: "Vitamin B6",
      foods: ["Bananas", "Chickpeas", "Potatoes", "Turkey"],
      benefits: "Supports neurotransmitter function and brain development",
      dailyValue: "Age-dependent, consult healthcare provider",
      icon: FaCarrot
    },
    {
      name: "Magnesium",
      foods: ["Spinach", "Pumpkin seeds", "Black beans", "Almonds"],
      benefits: "Supports nervous system function and reduces anxiety",
      dailyValue: "Age-dependent, consult healthcare provider",
      icon: FaSeedling
    },
    {
      name: "Vitamin D",
      foods: ["Fortified milk", "Egg yolks", "Mushrooms", "Fatty fish"],
      benefits: "Supports immune function and brain health",
      dailyValue: "600-800 IU daily",
      icon: FaAppleAlt
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {nutrients.map((item, index) => {
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
              <Icon className="text-2xl text-blue-600" />
              <h3 className="text-xl font-semibold">{item.name}</h3>
            </div>
            <ul className="space-y-2">
              <li><strong>Food Sources:</strong> {item.foods.join(", ")}</li>
              <li><strong>Benefits:</strong> {item.benefits}</li>
              <li><strong>Recommended Intake:</strong> {item.dailyValue}</li>
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}

export default NutritionalGuidelines;