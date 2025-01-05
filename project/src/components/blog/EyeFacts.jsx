import { motion } from 'framer-motion';
import { FaEye, FaExclamationTriangle, FaHeartbeat, FaLightbulb, FaCheck, FaBan } from 'react-icons/fa';

function EyeFacts() {
  const facts = [
    {
      category: "General Eye Facts",
      icon: FaEye,
      items: [
        "The human eye can distinguish approximately 10 million different colors",
        "Your eyes focus on about 50 different objects every second",
        "The only cells that survive an entire lifetime are found in the eyes",
        "Eyes heal incredibly quickly. With proper care, a minor corneal scratch can heal in 24-48 hours",
        "The eye's cornea is the only tissue in the human body that doesn't contain blood vessels"
      ]
    },
    {
      category: "Eye Health Risks",
      icon: FaExclamationTriangle,
      items: [
        "Diabetes is the leading cause of blindness in working-age adults",
        "80% of vision problems worldwide are considered avoidable or curable",
        "UV exposure increases the risks of eye diseases including cataracts",
        "Smoking doubles the risk of developing age-related macular degeneration",
        "Regular eye exams can detect early signs of chronic diseases"
      ]
    },
    {
      category: "Systemic Connection",
      icon: FaHeartbeat,
      items: [
        "Eye health is directly connected to overall body health",
        "High blood pressure can damage blood vessels in the retina",
        "Autoimmune conditions often show early signs in the eyes",
        "Eye examinations can reveal over 200 systemic health conditions",
        "Changes in eye blood vessels can indicate cardiovascular disease"
      ]
    },
    {
      category: "Eye Care Tips",
      icon: FaLightbulb,
      items: [
        "The 20-20-20 rule: Every 20 minutes, look 20 feet away for 20 seconds",
        "Proper nutrition can reduce the risk of eye diseases by up to 25%",
        "Regular exercise improves blood circulation to the eyes",
        "Wearing sunglasses blocks harmful UV rays that can damage your eyes",
        "Adequate sleep allows your eyes to repair and recover from daily strain"
      ]
    },
    {
      category: "Eye Care Do's",
      icon: FaCheck,
      items: [
        "DO wash your hands before touching your eyes",
        "DO wear protective eyewear during sports",
        "DO take regular breaks from digital screens",
        "DO maintain good hygiene with contact lenses",
        "DO get regular eye check-ups",
        "DO protect your eyes from UV radiation",
        "DO eat a balanced diet rich in eye-healthy nutrients",
        "DO keep your eyes lubricated with artificial tears if needed"
      ]
    },
    {
      category: "Eye Care Don'ts",
      icon: FaBan,
      items: [
        "DON'T rub your eyes as it can damage blood vessels",
        "DON'T ignore eye pain or vision changes",
        "DON'T sleep with contact lenses unless approved",
        "DON'T use expired eye drops",
        "DON'T share eye makeup or contact lenses",
        "DON'T skip regular eye examinations",
        "DON'T strain your eyes in poor lighting",
        "DON'T touch or press your eyes frequently"
      ]
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Eye Facts</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {facts.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <category.icon className="text-2xl text-green-600" />
              <h3 className="text-xl font-semibold">{category.category}</h3>
            </div>
            <ul className="space-y-3">
              {category.items.map((fact, factIndex) => (
                <li key={factIndex} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span className="text-gray-700">{fact}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default EyeFacts;