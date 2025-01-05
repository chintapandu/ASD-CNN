import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function TeamMember({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-1 text-blue-400">{member.name}</h2>
        <p className="text-green-600 font-medium mb-2">{member.id}</p>
        <p className="text-gray-600 mb-4">{member.bio}</p>
        <p className="text-sm text-gray-500 mb-4">
          <strong></strong> {member.specialization}
        </p>
        <div className="flex justify-center space-x-4">
          <a href={member.social.linkedin} className="text-blue-600 hover:text-blue-700">
            <FaLinkedin size={24} />
          </a>
          <a href={member.social.github} className="text-gray-700 hover:text-gray-800">
            <FaGithub size={24} />
          </a>
          <a href={`mailto:${member.social.email}`} className="text-red-600 hover:text-red-700">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

TeamMember.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired,
    social: PropTypes.shape({
      linkedin: PropTypes.string.isRequired,
      github: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default TeamMember;