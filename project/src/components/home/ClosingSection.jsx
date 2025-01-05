import { motion } from 'framer-motion';
import closeUpEye from '../../assets/Close-up-of-human-eye.jpg';

function ClosingSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-lg p-8"
    >
      <h2 className="text-4xl font-bold italic flex-1">
        Eyes on the Future: Empowering Diabetic Care for a Brighter Tomorrow!
      </h2>
      <div className="w-full md:w-1/3">
        <img
          src={closeUpEye}
          alt="Close up of human eye"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </motion.section>
  );
}

export default ClosingSection;