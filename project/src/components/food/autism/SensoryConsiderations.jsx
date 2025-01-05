import { motion } from 'framer-motion';
import { FaUtensils, FaPalette, FaThermometerHalf } from 'react-icons/fa';

function SensoryConsiderations() {
  const considerations = [
    {
      title: "Texture Adaptations",
      icon: FaUtensils,
      tips: [
        "Offer foods with preferred textures",
        "Gradually introduce new textures",
        "Consider smooth vs. crunchy preferences",
        "Respect texture aversions",
        "Use food bridges to expand acceptance"
      ]
    },
    {
      title: "Visual Presentation",
      icon: FaPalette,
      tips: [
        "Use consistent plating methods",
        "Separate different foods on plate",
        "Consider color preferences",
        "Make food visually appealing",
        "Use familiar presentation styles"
      ]
    },
    {
      title: "Temperature & Taste",
      icon: FaThermometerHalf,
      tips: [
        "Serve food at preferred temperature",
        "Consider sensitivity to spices",
        "Introduce new flavors gradually",
        "Respect temperature preferences",
        "Monitor food temperature consistency"
      ]
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {considerations.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <item.icon className="text-2xl text-purple-600" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
          <ul className="space-y-2">
            {item.tips.map((tip, tipIndex) => (
              <li key={tipIndex} className="flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

export default SensoryConsiderations;