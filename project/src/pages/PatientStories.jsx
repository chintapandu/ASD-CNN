import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';
import StoryCard from '../components/stories/StoryCard';
import { patientStories } from '../data/patientStoriesData';

function PatientStories() {
  const [expandedStory, setExpandedStory] = useState(null);
  const [ageFilter, setAgeFilter] = useState('all');

  const filteredStories = patientStories.filter(story => {
    if (ageFilter === 'all') return true;
    if (ageFilter === 'early') return story.age <= 5;
    if (ageFilter === 'school') return story.age > 5 && story.age <= 12;
    if (ageFilter === 'teen') return story.age > 12 && story.age <= 19;
    if (ageFilter === 'adult') return story.age > 19;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-center text-purple-700 mb-8"
      >
        Autism Success Stories
      </motion.h1>

      <div className="mb-8">
        <div className="flex items-center gap-4">
          <FaFilter className="text-gray-400" />
          <select
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="all">All Ages</option>
            <option value="early">Early Years (0-5)</option>
            <option value="school">School Age (6-12)</option>
            <option value="teen">Teenagers (13-19)</option>
            <option value="adult">Adults (20+)</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {filteredStories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            isExpanded={expandedStory === story.id}
            onToggle={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
          />
        ))}
        
        {filteredStories.length === 0 && (
          <p className="text-center text-gray-500">No stories found matching your criteria.</p>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 p-6 bg-purple-50 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-semibold text-purple-700 mb-4">Share Your Story</h2>
        <p className="text-gray-600">
          Your journey with autism can inspire others. If you'd like to share your story or your child's story,
          please contact us. Every story helps build understanding and acceptance in our community.
        </p>
      </motion.div>
    </div>
  );
}

export default PatientStories;