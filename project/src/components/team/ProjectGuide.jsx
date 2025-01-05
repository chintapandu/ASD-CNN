import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import guidePhoto from '../../assets/guide-photo.jpg';

function ProjectGuide({ guide }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-8 mb-12 text-center"
    >
      <div className="flex justify-center mb-6">
        <img
          src={guidePhoto}
          alt={guide.name}
          className="w-56 h-56 rounded-full object-cover border-4 border-green-600" // Increased from w-48 h-48 to w-56 h-56
        />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-blue-400">{guide.name}</h2>
      <p className="text-green-600 font-medium mb-6">{guide.role}</p>
      <p className="text-gray-600 mb-6 text-justify">{guide.bio}</p>
      <p className="text-sm text-gray-500">
        <strong>Specialization:</strong> {guide.specialization}
      </p>
    </motion.div>
  );
}

ProjectGuide.propTypes = {
  guide: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired
  }).isRequired
};

export default ProjectGuide;