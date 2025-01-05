import { motion } from 'framer-motion';

function AutismHeader() {
  return (
    <div className="text-center mb-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-purple-700 mb-6"
      >
        Autism Spectrum Disorder Assessment
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto text-gray-600"
      >
        Early identification and understanding of autism characteristics can lead to better support and outcomes. 
        Use these tools to assess potential signs and risk factors of autism spectrum disorder.
      </motion.p>
    </div>
  );
}

export default AutismHeader;