import { motion } from 'framer-motion';
import { FaBrain, FaChartLine, FaUsers, FaHandHoldingHeart } from 'react-icons/fa';

function FeatureSection() {
  const features = [
    {
      icon: FaBrain,
      title: "Behavioral Analysis",
      description: "Advanced AI-powered analysis of behavioral patterns and social interactions",
      delay: 0.2
    },
    {
      icon: FaChartLine,
      title: "Progress Tracking",
      description: "Monitor development and track improvements over time",
      delay: 0.4
    },
    {
      icon: FaUsers,
      title: "Community Support",
      description: "Connect with other families and share experiences",
      delay: 0.6
    },
    {
      icon: FaHandHoldingHeart,
      title: "Expert Guidance",
      description: "Access professional resources and recommendations",
      delay: 0.8
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: feature.delay }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Icon className="text-2xl text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default FeatureSection;