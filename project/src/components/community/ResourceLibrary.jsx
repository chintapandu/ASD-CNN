import { motion } from 'framer-motion';
import { FaDownload, FaPlay, FaBook } from 'react-icons/fa';

function ResourceLibrary({ resources }) {
  const getIcon = (type) => {
    switch (type) {
      case 'PDF': return FaDownload;
      case 'Video': return FaPlay;
      case 'Article': return FaBook;
      default: return FaBook;
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {resources.map((resource, index) => {
        const Icon = getIcon(resource.type);
        return (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Icon className="text-2xl text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-3">Type: {resource.type}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  {resource.downloads && <span>{resource.downloads} downloads</span>}
                  {resource.views && <span>{resource.views} views</span>}
                  {resource.reads && <span>{resource.reads} reads</span>}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default ResourceLibrary;