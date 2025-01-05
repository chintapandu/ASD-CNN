import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import SignUpForm from '../../components/auth/SignUpForm';
import SuccessMessage from '../../components/auth/SuccessMessage';
import logo from '../../assets/logo1.jpg';

function SignUp() {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/signin');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-purple-400 to-purple-300 py-12">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden relative">
    
        <div className="hidden md:flex flex-col items-center justify-center bg-purple-700 text-white p-12">
          <div className="w-72 h-72 rounded-full border-8 border-white/30 p-4 mb-8">
            <img
              src={logo}
              alt="Autism Support Logo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-center mb-4">Autism Support Platform</h2>
          <p className="text-center mb-8">Already part of our community? Sign in here</p>
          <Link
            to="/signin"
            className="px-8 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-purple-700 transition-colors"
          >
            Sign In
          </Link>
        </div>

        {/* Right Side - Form */}
        <div className="p-8 md:p-12 bg-white relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <h1 className="text-3xl font-bold text-center mb-4">Join Our Community</h1>
            <p className="text-center text-gray-600 mb-8">Create an account to access support resources and connect with others</p>
            
            <SignUpForm onSubmit={handleSubmit} />
          </motion.div>
        </div>

        <AnimatePresence>
          {showSuccess && (
            <SuccessMessage message="Welcome to our autism support community!" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SignUp;