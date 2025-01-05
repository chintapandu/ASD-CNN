import { motion } from 'framer-motion';
import { FaBell, FaEnvelope, FaMedal } from 'react-icons/fa';

function CommunityHeader({ notifications = [], onNotificationClick }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-green-700">Community Forum</h1>
          <p className="text-gray-600 mt-2">Connect, share, and learn with others</p>
        </div>
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="relative cursor-pointer"
          >
            <FaBell className="text-2xl text-gray-600 hover:text-green-600" />
            {notifications.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <FaEnvelope className="text-2xl text-gray-600 hover:text-green-600 cursor-pointer" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <FaMedal className="text-2xl text-gray-600 hover:text-green-600 cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default CommunityHeader;