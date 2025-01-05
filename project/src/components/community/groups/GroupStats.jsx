import { FaUsers, FaComments, FaClock } from 'react-icons/fa';
import PropTypes from 'prop-types';

function GroupStats({ members, topics, lastActive }) {
  return (
    <div className="flex items-center gap-6 text-sm text-gray-500 mt-4">
      <div className="flex items-center gap-2">
        <FaUsers />
        <span>{members} members</span>
      </div>
      <div className="flex items-center gap-2">
        <FaComments />
        <span>{topics} topics</span>
      </div>
      <div className="flex items-center gap-2">
        <FaClock />
        <span>Active {lastActive}</span>
      </div>
    </div>
  );
}

GroupStats.propTypes = {
  members: PropTypes.number.isRequired,
  topics: PropTypes.number.isRequired,
  lastActive: PropTypes.string.isRequired
};

export default GroupStats;