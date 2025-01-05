import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import GroupCard from './groups/GroupCard';
import GroupsFilter from './groups/GroupsFilter';
import GroupsSearch from './groups/GroupsSearch';
import useGroups from './groups/useGroups';

function GroupsList({ groups: initialGroups, onJoinGroup }) {
  const {
    groups,
    selectedGroup,
    filter,
    searchQuery,
    setSelectedGroup,
    setFilter,
    setSearchQuery,
    handleJoinGroup
  } = useGroups(initialGroups);

  return (
    <div className="space-y-6">
      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <GroupsSearch
          value={searchQuery}
          onChange={setSearchQuery}
        />
        <GroupsFilter
          filter={filter}
          onFilterChange={setFilter}
        />
      </div>

      {/* Groups Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((group) => (
          <GroupCard
            key={group.id}
            group={group}
            isSelected={selectedGroup === group.id}
            onSelect={setSelectedGroup}
            onJoinGroup={(id) => {
              handleJoinGroup(id);
              onJoinGroup(id);
            }}
          />
        ))}
      </div>

      {groups.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-8 text-gray-500"
        >
          No groups found matching your criteria
        </motion.div>
      )}
    </div>
  );
}

GroupsList.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      members: PropTypes.number.isRequired,
      topics: PropTypes.number.isRequired,
      lastActive: PropTypes.string.isRequired
    })
  ).isRequired,
  onJoinGroup: PropTypes.func.isRequired
};

export default GroupsList;