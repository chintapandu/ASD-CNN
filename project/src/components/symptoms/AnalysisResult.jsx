import { motion } from 'framer-motion';

function AnalysisResult({ analysis }) {
  if (!analysis) return null;

  const stageColors = {
    Severe: 'bg-red-100 text-red-800',
    Moderate: 'bg-yellow-100 text-yellow-800',
    Early: 'bg-orange-100 text-orange-800',
    'Minimal Risk': 'bg-green-100 text-green-800'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className={`mb-6 p-4 rounded-lg ${stageColors[analysis.stage]}`}>
        <h2 className="text-xl font-semibold mb-2">Analysis Result: {analysis.stage} Stage</h2>
        <p>{analysis.description}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Recommended Actions:</h3>
        {analysis.recommendations.map((rec, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center">
              {index + 1}
            </span>
            <p className="text-gray-700">{rec}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default AnalysisResult;