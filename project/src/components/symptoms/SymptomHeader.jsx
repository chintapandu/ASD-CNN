import { motion } from 'framer-motion';
import drSymptomsImage from '../../assets/dr-symptoms-diagram.svg';

function SymptomHeader() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-green-700 mb-4">
        Symptom Checker
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex justify-center"
      >
        <div className="relative w-full max-w-2xl">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={drSymptomsImage}
              alt="Diabetic Retinopathy Progression Diagram"
              className="rounded-lg shadow-lg object-contain w-full h-full bg-white"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-sm font-medium text-gray-700">
              Visual representation of diabetic retinopathy progression stages
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default SymptomHeader;