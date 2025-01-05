import { motion } from 'framer-motion';

function TopicCard({ title, description, imageSrc, imageAlt, video, isVideoCard }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-6 p-6">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{description}</p>
        </div>
        <div className="flex items-center justify-center">
          {isVideoCard ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-lg shadow-md max-h-[300px] w-full object-cover"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-lg shadow-md max-h-[300px] object-cover"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default TopicCard;