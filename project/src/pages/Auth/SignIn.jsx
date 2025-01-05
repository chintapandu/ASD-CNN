import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import SuccessMessage from '../../components/auth/SuccessMessage';
import logo from '../../assets/logo1.jpg';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

   
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === formData.email);

    if (!user) {
      setError('Account not found. Please sign up first.');
      return;
    }

    if (user.password !== formData.password) {
      setError('Invalid password.');
      return;
    }

    signIn(formData);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 via-purple-400 to-purple-300">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden relative">
      
        <div className="p-8 md:p-12 bg-white relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <h1 className="text-3xl font-bold text-center mb-8">Welcome Back</h1>
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border-l-4 border-red-500 p-4 mb-6"
              >
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter email ID"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Sign In
              </button>

              <p className="text-center text-gray-600">
                Don't have an account?{' '}
                <Link to="/signup" className="text-purple-600 hover:text-purple-800">
                  Sign Up
                </Link>
              </p>
            </form>
          </motion.div>
        </div>

        {/* Right Side - Logo */}
        <div className="hidden md:flex flex-col items-center justify-center bg-purple-700 text-white p-12">
          <div className="w-72 h-72 rounded-full border-8 border-white/30 p-4 mb-8">
            <img
              src={logo}
              alt="Autism Support Logo"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-center mb-4">Autism Support Platform</h2>
          <p className="text-center mb-8">Join our community for support and understanding</p>
          <Link
            to="/signup"
            className="px-8 py-2 border-2 border-white rounded-lg hover:bg-white hover:text-purple-700 transition-colors"
          >
            Create Account
          </Link>
        </div>

        <AnimatePresence>
          {showSuccess && (
            <SuccessMessage message="You have successfully signed in" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SignIn;