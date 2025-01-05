import { motion } from 'framer-motion';
import { FaBook, FaVideo, FaUsers, FaClinicMedical } from 'react-icons/fa';

function ResourceLinks() {
  const resources = [
    {
      icon: FaBook,
      title: "Educational Resources",
      description: "Free learning materials and guides",
      link: "#"
    },
    {
      icon: FaVideo,
      title: "Video Resources",
      description: "Helpful videos and tutorials",
      link: "#"
    },
    {
      icon: FaUsers,
      title: "Support Groups",
      description: "Connect with other families",
      link: "#"
    },
    {
      icon: FaClinicMedical,
      title: "Find Specialists",
      description: "Locate autism specialists near you",
      link: "#"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {resources.map((resource, index) => {
        const Icon = resource.icon;
        return (
          <motion.a
            key={index}
            href={resource.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Icon className="text-xl text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{resource.title}</h3>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
}

export default ResourceLinks;