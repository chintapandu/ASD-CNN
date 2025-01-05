import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

function EventsList({ events }) {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock />
              <span>{event.time}</span>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Register Now
          </button>
        </motion.div>
      ))}
    </div>
  );
}

export default EventsList;