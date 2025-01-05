import { motion } from 'framer-motion';
import { developmentalMilestones } from '../../data/autismData';

function DevelopmentalMilestones() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6">Developmental Milestones</h2>
      <div className="space-y-4">
        {developmentalMilestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg"
          >
            <div className="w-24 flex-shrink-0">
              <span className="font-semibold text-purple-700">{milestone.age}</span>
            </div>
            <p className="text-gray-700">{milestone.milestone}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default DevelopmentalMilestones;