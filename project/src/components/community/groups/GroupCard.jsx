import { motion, AnimatePresence } from 'framer-motion';
import { FaUsers, FaComments, FaClock, FaCheck, FaTimes, FaInfoCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import GroupStats from './GroupStats';

function GroupCard({ group, isSelected, onSelect, onJoinGroup, onWatchGroup }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            {group.name}
            <button
              onClick={() => onSelect(isSelected ? null : group.id)}
              className="text-gray-400 hover:text-gray-600"
            >
              <FaInfoCircle />
            </button>
          </h3>
          
          <AnimatePresence>
            {isSelected && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-gray-600 mb-4"
              >
                {group.description}
                {group.adminMembers && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Group Admins:</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.adminMembers.map((admin) => (
                        <span key={admin.id} className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm">
                          {admin.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
          
          <GroupStats
            members={group.members}
            topics={group.topics}
            lastActive={group.lastActive}
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <button
            onClick={() => onJoinGroup(group.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              group.isJoined
                ? 'bg-red-100 text-red-600 hover:bg-red-200'
                : 'bg-green-600 text-white hover:bg-green-700'
            }`}
          >
            {group.isJoined ? (
              <>
                <FaTimes /> Leave
              </>
            ) : (
              <>
                <FaCheck /> Join
              </>
            )}
          </button>
          
          <button
            onClick={() => onWatchGroup(group.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              group.isWatched
                ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {group.isWatched ? (
              <>
                <FaEyeSlash /> Unwatch
              </>
            ) : (
              <>
                <FaEye /> Watch
              </>
            )}
          </button>
        </div>
      </div>

      {isSelected && group.recentMessages && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 border-t pt-4"
        >
          <h4 className="font-semibold mb-3">Recent Messages</h4>
          <div className="space-y-3">
            {group.recentMessages.map((message) => (
              <div key={message.id} className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{message.author}</span>
                  <span className="text-sm text-gray-500">{message.time}</span>
                </div>
                <p className="text-gray-700">{message.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

GroupCard.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    members: PropTypes.number.isRequired,
    topics: PropTypes.number.isRequired,
    lastActive: PropTypes.string.isRequired,
    isJoined: PropTypes.bool.isRequired,
    isWatched: PropTypes.bool,
    adminMembers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      })
    ),
    recentMessages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired
      })
    )
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  onJoinGroup: PropTypes.func.isRequired,
  onWatchGroup: PropTypes.func.isRequired
};

export default GroupCard;