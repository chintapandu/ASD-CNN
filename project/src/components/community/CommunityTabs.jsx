import { motion } from 'framer-motion';
import { FaComments, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

function CommunityTabs({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'discussions', label: 'Discussions', icon: FaComments },
    { id: 'groups', label: 'Groups', icon: FaUsers },
    { id: 'events', label: 'Events', icon: FaCalendarAlt },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
      <div className="flex gap-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Icon />
              <span>{tab.label}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

CommunityTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired
};

export default CommunityTabs;