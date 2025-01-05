import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import SignInPrompt from '../auth/SignInPrompt';
import { useState } from 'react';

function HeroSection() {
  const { user } = useAuth();
  const [showSignInPrompt, setShowSignInPrompt] = useState(false);

  const handleAnalysisClick = (e) => {
    if (!user) {
      e.preventDefault();
      setShowSignInPrompt(true);
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-6">
            Understanding Autism Spectrum Disorders
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Early detection and support can make a significant difference in the lives of individuals with autism. 
            Our AI-powered tools help identify signs and provide guidance for better understanding and support.
          </p>
          <div className="flex justify-center">
            <Link
              to={user ? "/analysis" : "#"}
              onClick={handleAnalysisClick}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Assessment
            </Link>
          </div>
        </motion.div>
      </div>

      <SignInPrompt 
        isOpen={showSignInPrompt} 
        onClose={() => setShowSignInPrompt(false)} 
      />
    </div>
  );
}

export default HeroSection;