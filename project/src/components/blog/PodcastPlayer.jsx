import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

function PodcastPlayer({ audioUrl, title, speaker }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const time = e.target.value;
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-4 rounded-lg shadow-md"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <FaPlay className="text-green-600" />
        </div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{speaker}</p>
        </div>
      </div>

      <div className="space-y-4">
        <audio
          ref={audioRef}
          src={audioUrl}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />

        <div className="flex items-center gap-4">
          <button
            onClick={handlePlayPause}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="flex-1"
          />

          <button
            onClick={toggleMute}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>

          <span className="text-sm text-gray-600">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default PodcastPlayer;