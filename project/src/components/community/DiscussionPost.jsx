import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaComment, FaHeart, FaShare, FaTrash, FaFlag } from 'react-icons/fa';
import PropTypes from 'prop-types';

function DiscussionPost({ post, onDelete, onLike, onComment }) {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onComment(post.id, newComment);
      setNewComment('');
    }
  };

  return (
    <motion.div
      layout
      className="border-b pb-6 last:border-b-0 last:pb-0"
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
            <div className="flex items-center gap-2">
              {post.isAuthor && (
                <button
                  onClick={() => onDelete(post.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <FaTrash />
                </button>
              )}
              <button className="text-gray-500 hover:text-gray-600">
                <FaFlag />
              </button>
            </div>
          </div>
          <p className="text-gray-600 mb-3">{post.content}</p>
          
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>{post.author}</span>
            <span>{post.date}</span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowComments(!showComments)}
                className="flex items-center gap-1 hover:text-green-600"
              >
                <FaComment /> {post.comments?.length || 0}
              </button>
              <button
                onClick={() => onLike(post.id)}
                className={`flex items-center gap-1 ${
                  post.liked ? 'text-red-500' : 'hover:text-red-500'
                }`}
              >
                <FaHeart /> {post.likes}
              </button>
              <button className="flex items-center gap-1 hover:text-blue-600">
                <FaShare />
              </button>
            </div>
          </div>

          {showComments && (
            <div className="mt-4 space-y-4">
              <form onSubmit={handleSubmitComment} className="flex gap-2">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Post
                </button>
              </form>

              {post.comments?.map((comment) => (
                <div key={comment.id} className="pl-4 border-l-2 border-gray-200">
                  <p className="text-sm text-gray-600">{comment.content}</p>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                    <span>{comment.author}</span>
                    <span>•</span>
                    <span>{comment.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

DiscussionPost.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    likes: PropTypes.number.isRequired,
    liked: PropTypes.bool,
    isAuthor: PropTypes.bool,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
      })
    )
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onLike: PropTypes.func.isRequired,
  onComment: PropTypes.func.isRequired
};

export default DiscussionPost;