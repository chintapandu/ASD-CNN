import { motion } from 'framer-motion';
import ASD2 from '../../assets/ASD2.png';

function SignsSection() {
  const signs = [
    {
      category: "Social Communication",
      items: [
        "Delayed speech development or no speech",
        "Difficulty starting or maintaining conversations",
        "Using few or no gestures (pointing, waving)",
        "Not responding to their name by 12 months",
        "Avoiding eye contact or limited eye contact"
      ]
    },
    {
      category: "Social Interaction",
      items: [
        "Preferring to play alone",
        "Difficulty understanding others' feelings",
        "Not sharing enjoyment or interests with others",
        "Struggling with turn-taking and sharing",
        "Limited interest in peer relationships"
      ]
    },
    {
      category: "Behavioral Patterns",
      items: [
        "Repetitive movements (hand flapping, rocking)",
        "Strong attachment to specific routines",
        "Intense focus on particular interests",
        "Unusual reactions to sensory experiences",
        "Resistance to minor changes in routine"
      ]
    }
  ];

  return (
    <div className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-purple-700 mb-8"
        >
          Signs of Autism Spectrum Disorder
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Content on Left */}
          <div className="lg:w-3/5">
            <div className="space-y-8">
              {signs.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold text-purple-600 mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-purple-500 mt-1">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image on Right */}
          <div className="lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="sticky top-24"
            >
              <img
                src={ASD2}
                alt="Signs of Autism Spectrum Disorder"
                className="w-full rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignsSection;