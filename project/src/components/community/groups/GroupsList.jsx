import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import GroupCard from './GroupCard';
import GroupsFilter from './GroupsFilter';
import GroupsSearch from './GroupsSearch';
import { useGroupActions, useGroupFilters, useGroupSelection } from './hooks';

function GroupsList({ groups: initialGroups, onJoinGroup, onWatchGroup }) {
  const { groups, handleJoinGroup, handleWatchGroup } = useGroupActions(initialGroups);
  const { selectedGroup, handleGroupSelect } = useGroupSelection();
  const { filter, searchQuery, setFilter, setSearchQuery, filteredGroups } = useGroupFilters(groups);

  return (
    <div className="space-y-6">
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

      <div className="grid md:grid-cols-2 gap-6">
        {filteredGroups.map((group) => (
          <GroupCard
            key={group.id}
            group={group}
            isSelected={selectedGroup === group.id}
            onSelect={handleGroupSelect}
            onJoinGroup={(id) => {
              handleJoinGroup(id);
              onJoinGroup(id);
            }}
            onWatchGroup={(id) => {
              handleWatchGroup(id);
              onWatchGroup(id);
            }}
          />
        ))}
      </div>

      {filteredGroups.length === 0 && (
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
  onJoinGroup: PropTypes.func.isRequired,
  onWatchGroup: PropTypes.func.isRequired
};

export default GroupsList;