import { motion } from 'framer-motion';

function SymptomsSection({ title, questions, responses, onChange }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-6">{title}</h2>
      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={index}>
            <p className="text-gray-700 mb-3">{question.text}</p>
            <div className="grid grid-cols-3 gap-4">
              {['Yes', 'No', 'Sometimes'].map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name={`${question.id}`}
                    value={option.toLowerCase()}
                    checked={responses[question.id] === option.toLowerCase()}
                    onChange={(e) => onChange(question.id, e.target.value)}
                    className="text-purple-600 focus:ring-purple-500"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default SymptomsSection;