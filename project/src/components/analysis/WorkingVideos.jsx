import { motion } from 'framer-motion';

function WorkingVideos() {
  const videos = [
    { id: 1, src: '/src/assets/dia1.mp4', title: 'Diabetic Retinopathy Detection Process' },
    { id: 2, src: '/src/assets/dia2.mp4', title: 'AI Analysis Workflow' },
    { id: 3, src: '/src/assets/dia3.mp4', title: 'Image Processing Steps' }
  ];

  return (
    <div className="mt-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold mb-6"
      >
        Working
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: video.id * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <video
              className="w-full aspect-video object-cover"
              controls
              playsInline
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-800">{video.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WorkingVideos;