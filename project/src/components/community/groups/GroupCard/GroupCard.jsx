import { motion, AnimatePresence } from 'framer-motion';
import { FaUsers, FaComments, FaClock, FaCheck, FaTimes, FaInfoCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import GroupStats from '../GroupStats';
import GroupMessages from './GroupMessages';
import GroupAdmins from './GroupAdmins';
import { groupCardPropTypes } from './GroupCard.propTypes';

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
                {group.adminMembers && <GroupAdmins admins={group.adminMembers} />}
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
        <GroupMessages messages={group.recentMessages} />
      )}
    </motion.div>
  );
}

GroupCard.propTypes = groupCardPropTypes;

export default GroupCard;