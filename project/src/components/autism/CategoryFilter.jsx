import { motion } from 'framer-motion';

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category, index) => (
        <motion.button
          key={category}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === category
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}

export default CategoryFilter;