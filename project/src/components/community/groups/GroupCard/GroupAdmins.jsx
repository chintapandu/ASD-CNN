import PropTypes from 'prop-types';

function GroupAdmins({ admins }) {
  return (
    <div className="mt-4">
      <h4 className="font-semibold mb-2">Group Admins:</h4>
      <div className="flex flex-wrap gap-2">
        {admins.map((admin) => (
          <span key={admin.id} className="inline-flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm">
            {admin.name}
          </span>
        ))}
      </div>
    </div>
  );
}

GroupAdmins.propTypes = {
  admins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default GroupAdmins;