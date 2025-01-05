import { motion } from 'framer-motion';
import { FaUsers, FaChild, FaGraduationCap, FaHeart } from 'react-icons/fa';

function StatisticsSection() {
  const stats = [
    {
      icon: FaUsers,
      number: "1 in 36",
      label: "Children Diagnosed with ASD",
      description: "According to recent CDC data"
    },
    {
      icon: FaChild,
      number: "40%",
      label: "Early Intervention Success",
      description: "Show significant improvement"
    },
    {
      icon: FaGraduationCap,
      number: "50%",
      label: "Educational Support",
      description: "Receive specialized education"
    },
    {
      icon: FaHeart,
      number: "85%",
      label: "Family Support",
      description: "Report better outcomes with support"
    }
  ];

  return (
    <div className="bg-purple-50 py-16 px-4 rounded-xl">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Understanding the Impact
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <Icon className="text-4xl text-purple-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold text-purple-600 mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default StatisticsSection;