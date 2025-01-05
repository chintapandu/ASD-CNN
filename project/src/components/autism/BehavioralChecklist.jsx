import { motion } from 'framer-motion';

function BehavioralChecklist({ behaviors, onBehaviorChange }) {
  return (
    <div className="space-y-4">
      {behaviors.map((behavior, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start gap-3"
        >
          <input
            type="checkbox"
            checked={behavior.checked}
            onChange={(e) => onBehaviorChange(index, e.target.checked)}
            className="mt-1 rounded text-purple-600 focus:ring-purple-500"
          />
          <label className="text-gray-700">{behavior.label}</label>
        </motion.div>
      ))}
    </div>
  );
}

export default BehavioralChecklist;