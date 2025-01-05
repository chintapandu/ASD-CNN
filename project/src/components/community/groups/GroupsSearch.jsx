import PropTypes from 'prop-types';

function GroupsSearch({ value, onChange }) {
  return (
    <div className="flex-1">
      <input
        type="text"
        placeholder="Search groups..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
    </div>
  );
}

GroupsSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default GroupsSearch;