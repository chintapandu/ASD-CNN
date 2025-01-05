import PropTypes from 'prop-types';

function GroupsFilter({ filter, onFilterChange }) {
  const filters = [
    { id: 'all', label: 'All Groups' },
    { id: 'joined', label: 'Joined' },
    { id: 'available', label: 'Available' }
  ];

  return (
    <div className="flex gap-2">
      {filters.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onFilterChange(id)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === id
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

GroupsFilter.propTypes = {
  filter: PropTypes.oneOf(['all', 'joined', 'available']).isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default GroupsFilter;