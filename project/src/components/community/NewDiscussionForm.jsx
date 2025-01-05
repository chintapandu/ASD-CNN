import { useState } from 'react';
import { motion } from 'framer-motion';

function NewDiscussionForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: '', content: '', tags: '' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-md mb-8"
    >
      <h2 className="text-xl font-semibold mb-4">Start a New Discussion</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows="4"
            className="w-full px-3 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            className="w-full px-3 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Post Discussion
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default NewDiscussionForm;