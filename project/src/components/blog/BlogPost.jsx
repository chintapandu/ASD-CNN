import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function BlogPost({ post, isExpanded, onToggle }) {
  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener noreferrer');
  };

  return (
    <motion.div layout className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        <motion.div layout>
          {isExpanded ? (
            <div className="prose max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('- [')) {
                  return (
                    <ul key={index} className="list-disc pl-4">
                      {paragraph.split('\n').map((link, linkIndex) => {
                        const matches = link.match(/- \[(.*?)\]\((.*?)\)/);
                        if (matches) {
                          return (
                            <li key={linkIndex}>
                              <button
                                onClick={() => handleLinkClick(matches[2])}
                                className="text-green-600 hover:text-green-700 hover:underline"
                              >
                                {matches[1]}
                              </button>
                            </li>
                          );
                        }
                        return null;
                      })}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-600">{post.excerpt}</p>
          )}
        </motion.div>
      </div>
      <button
        onClick={onToggle}
        className="text-green-600 hover:text-green-700 font-medium"
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
    </motion.div>
  );
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired
  }).isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default BlogPost;