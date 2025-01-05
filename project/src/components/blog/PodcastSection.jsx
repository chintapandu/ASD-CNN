import { useState } from 'react';
import { motion } from 'framer-motion';
import PodcastPlayer from './PodcastPlayer';

function PodcastSection({ podcasts }) {
  const [selectedLanguage, setSelectedLanguage] = useState('all');

  const filteredPodcasts = selectedLanguage === 'all'
    ? podcasts
    : podcasts.filter(podcast => podcast.language === selectedLanguage);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Eye Health Podcasts</h2>
      
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSelectedLanguage('all')}
          className={`px-4 py-2 rounded-md ${
            selectedLanguage === 'all'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedLanguage('english')}
          className={`px-4 py-2 rounded-md ${
            selectedLanguage === 'english'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setSelectedLanguage('telugu')}
          className={`px-4 py-2 rounded-md ${
            selectedLanguage === 'telugu'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Telugu
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredPodcasts.map((podcast) => (
          <PodcastPlayer
            key={podcast.id}
            audioUrl={podcast.audioUrl}
            title={podcast.title}
            speaker={podcast.author}
          />
        ))}
      </div>
    </div>
  );
}

export default PodcastSection;