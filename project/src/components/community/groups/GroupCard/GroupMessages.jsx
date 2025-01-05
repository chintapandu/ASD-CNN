import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function GroupMessages({ messages }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-6 border-t pt-4"
    >
      <h4 className="font-semibold mb-3">Recent Messages</h4>
      <div className="space-y-3">
        {messages.map((message) => (
          <div key={message.id} className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium">{message.author}</span>
              <span className="text-sm text-gray-500">{message.time}</span>
            </div>
            <p className="text-gray-700">{message.content}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

GroupMessages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired
    })
  ).isRequired
};

export default GroupMessages;