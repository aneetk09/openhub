
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, LogOut, Settings, Github } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) {
    return (
      <Link to="/auth" className="btn btn-primary">
        Sign In
      </Link>
    );
  }
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const initials = user?.username.slice(0, 2).toUpperCase();
  
  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center gap-2"
      >
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-blue-purple text-white font-semibold">
          {initials}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40"
              onClick={closeMenu}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-64 glass-card p-2 rounded-lg shadow-lg z-50"
              style={{ backdropFilter: 'blur(16px)' }}
            >
              <div className="p-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-blue-purple text-white font-semibold">
                    {initials}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{user?.username}</div>
                    <div className="text-sm text-white/70">{user?.email}</div>
                  </div>
                </div>
              </div>
              
              <div className="p-1 mt-1">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 w-full p-2 rounded-md hover:bg-white/10 transition-colors"
                  onClick={closeMenu}
                >
                  <User size={18} className="text-neon-blue" />
                  <span>Dashboard</span>
                </Link>
                
                <Link
                  to="#"
                  className="flex items-center gap-2 w-full p-2 rounded-md hover:bg-white/10 transition-colors"
                  onClick={closeMenu}
                >
                  <Github size={18} className="text-neon-purple" />
                  <span>My Projects</span>
                </Link>
                
                <Link
                  to="#"
                  className="flex items-center gap-2 w-full p-2 rounded-md hover:bg-white/10 transition-colors"
                  onClick={closeMenu}
                >
                  <Settings size={18} className="text-neon-blue" />
                  <span>Settings</span>
                </Link>
                
                <button
                  onClick={() => {
                    closeMenu();
                    logout();
                  }}
                  className="flex items-center gap-2 w-full p-2 rounded-md hover:bg-white/10 transition-colors text-red-400"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserMenu;
