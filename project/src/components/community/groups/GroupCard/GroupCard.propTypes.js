import PropTypes from 'prop-types';

export const groupCardPropTypes = {
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