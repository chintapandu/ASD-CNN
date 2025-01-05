import { motion } from 'framer-motion';
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

function ResultsDisplay({ results }) {
  if (!results) return null;

  const stageColors = {
    early: { bg: 'bg-green-100', text: 'text-green-800', icon: FaCheckCircle },
    moderate: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: FaExclamationTriangle },
    severe: { bg: 'bg-red-100', text: 'text-red-800', icon: FaInfoCircle }
  };

  const { bg, text, icon: Icon } = stageColors[results.stage.toLowerCase()];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className={`${bg} ${text} p-4 rounded-lg mb-6`}>
        <div className="flex items-center gap-2 mb-2">
          <Icon className="text-2xl" />
          <h3 className="text-xl font-semibold">Stage: {results.stage} ASD</h3>
        </div>
        <p>{results.description}</p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold mb-4">Remedies</h4>
          <ul className="space-y-2">
            {results.remedies.map((remedy, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-gray-700">{remedy}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Recommendations</h4>
          <ul className="space-y-2">
            {results.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-gray-700">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          Note: This assessment is not a definitive diagnosis. Please consult healthcare professionals
          for an accurate diagnosis and personalized treatment plan.
        </p>
      </div>
    </motion.div>
  );
}

export default ResultsDisplay;