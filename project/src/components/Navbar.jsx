import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/analysis', label: 'Image Analysis', protected: true },
    { path: '/risk-and-symptoms', label: 'Risk & Symptoms', protected: true },
    { path: '/food-recommendations', label: 'Health Guide', protected: true },
    { path: '/stories', label: 'Stories', protected: true },
    { path: '/team', label: 'Our Team', protected: true }
  ];

  const handleNavClick = (path, isProtected) => {
    if (isProtected && !user) {
      navigate('/signin');
      return;
    }
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-700">ASD Screening</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path, item.protected)}
                className="text-gray-700 hover:text-purple-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            {user ? (
              <button
                onClick={signOut}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => navigate('/signin')}
                className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;