import { motion } from 'framer-motion';

function RiskHeader() {
  return (
    <div className="text-center mb-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-green-700 mb-6"
      >
        Diabetic Retinopathy Risk Assessment
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-md mx-auto mb-8"
      >
        <div className="relative">
          <svg
            className="w-full h-auto"
            viewBox="0 0 400 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Eye Shape */}
            <path
              d="M200 50C120 50 60 125 20 125C60 125 120 200 200 200C280 200 340 125 380 125C340 125 280 50 200 50Z"
              fill="#E5E7EB"
              stroke="#4B5563"
              strokeWidth="2"
            />
            {/* Iris */}
            <circle cx="200" cy="125" r="50" fill="#047857" />
            {/* Pupil */}
            <circle cx="200" cy="125" r="25" fill="#1F2937" />
            {/* Blood Vessels */}
            <path
              d="M140 125C160 105 180 95 200 95C220 95 240 105 260 125"
              stroke="#DC2626"
              strokeWidth="2"
            />
            <path
              d="M150 145C170 165 190 175 200 175C210 175 230 165 250 145"
              stroke="#DC2626"
              strokeWidth="2"
            />
            {/* Risk Indicators */}
            <circle cx="180" cy="115" r="5" fill="#DC2626" />
            <circle cx="220" cy="135" r="5" fill="#DC2626" />
            {/* Measurement Lines */}
            <line x1="100" y1="125" x2="300" y2="125" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="200" y1="25" x2="200" y2="225" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Early detection and assessment can help prevent vision loss
        </p>
      </motion.div>
    </div>
  );
}

export default RiskHeader;