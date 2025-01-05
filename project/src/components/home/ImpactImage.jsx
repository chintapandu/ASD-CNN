import { motion } from 'framer-motion';
import ASD5 from '../../assets/ASD5.jpg';

function ImpactImage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto px-4 mb-12"
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl overflow-hidden shadow-2xl"
      >
        <img
          src={ASD5}
          alt="Autism Spectrum Disorder Impact"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

export default ImpactImage;