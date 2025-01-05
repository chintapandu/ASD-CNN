import { motion } from 'framer-motion';

function HealthCard({ icon: Icon, title, items, benefitText, color = "green", itemKey = "items" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`text-2xl text-${color}-600`} />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2 mb-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className={`text-${color}-600`}>•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-gray-600 italic">
        <strong>{itemKey === "techniques" ? "Benefits:" : "Why it matters:"}</strong> {benefitText}
      </p>
    </motion.div>
  );
}

export default HealthCard;