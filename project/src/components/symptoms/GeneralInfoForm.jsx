import { motion } from 'framer-motion';

function GeneralInfoForm({ formData, onChange }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-6">General Information</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Sex</label>
          <select
            name="sex"
            value={formData.sex}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Years Since Symptoms</label>
          <input
            type="number"
            name="yearsSinceSymptoms"
            value={formData.yearsSinceSymptoms}
            onChange={onChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
      </div>
    </motion.div>
  );
}

export default GeneralInfoForm;