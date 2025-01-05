import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

function StoryCard({ story, isExpanded, onToggle }) {
  return (
    <motion.div
      layout
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-green-500">
          <img
            src={story.image}
            alt={story.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-xl font-semibold">{story.name}, {story.age}</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaCalendarAlt />
              <span>{story.date}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <FaMapMarkerAlt />
            <span>{story.location}</span>
          </div>

          <motion.div layout>
            {isExpanded ? (
              <p className="text-gray-600 leading-relaxed mb-4">{story.fullStory}</p>
            ) : (
              <p className="text-gray-600 mb-4">{story.preview}</p>
            )}
          </motion.div>

          <button
            onClick={onToggle}
            className="text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default StoryCard;