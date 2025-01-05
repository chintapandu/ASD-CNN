import { motion } from 'framer-motion';
import ProjectGuide from '../components/team/ProjectGuide';
import TeamMember from '../components/team/TeamMember';
import { teamData } from '../data/teamData';

function Team() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-green-700 mb-8"
      >
        Meet Our Team
      </motion.h1>

      {/* Project Guide Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">{teamData.projectGuide.name}</h2>
        <p className="text-green-600 font-medium mb-6">{teamData.projectGuide.role}</p>
        <p className="text-gray-600 mb-6 text-justify">{teamData.projectGuide.bio}</p>
        <p className="text-sm text-gray-500">
          <strong>Specialization:</strong> {teamData.projectGuide.specialization}
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {teamData.teamMembers.map((member, index) => (
          <TeamMember key={member.id} member={member} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Team;