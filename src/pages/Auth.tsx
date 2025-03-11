
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Github, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const { login, signup, isLoading } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLogin) {
      await login(email, password);
    } else {
      await signup(username, email, password);
    }
  };

  const handleDemoLogin = async () => {
    setEmail('demo@example.com');
    setPassword('password');
    await login('demo@example.com', 'password');
  };
  
  return (
    <div className="min-h-screen pt-20 px-6 flex items-center justify-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="neon-border">
          <div className="bg-dark-card p-8 rounded-xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold bg-gradient-blue-purple bg-clip-text text-transparent">
                {isLogin ? 'Welcome Back' : 'Join the Community'}
              </h2>
              <p className="text-white/70 mt-2">
                {isLogin 
                  ? 'Sign in to continue your journey' 
                  : 'Create an account to get started'}
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="relative">
                  <label className="text-sm text-white/70 mb-1 block">Username</label>
                  <div className="flex items-center">
                    <div className="absolute left-3 text-white/50">
                      <User size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Username" 
                      className="bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 w-full 
                              focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                              transition-colors"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}
              
              <div className="relative">
                <label className="text-sm text-white/70 mb-1 block">Email</label>
                <div className="flex items-center">
                  <div className="absolute left-3 text-white/50">
                    <Mail size={18} />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 w-full 
                             focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                             transition-colors"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="text-sm text-white/70 mb-1 block">Password</label>
                <div className="flex items-center">
                  <div className="absolute left-3 text-white/50">
                    <Lock size={18} />
                  </div>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 w-full 
                             focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary
                             transition-colors"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              {isLogin && (
                <div className="text-right">
                  <a href="#" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isLoading}
                className="btn btn-primary w-full group flex items-center justify-center"
              >
                <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                {isLoading ? (
                  <svg className="animate-spin ml-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <ArrowRight size={16} className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>

              {isLogin && (
                <button 
                  type="button"
                  onClick={handleDemoLogin}
                  className="btn btn-ghost w-full flex items-center justify-center gap-2 text-primary"
                >
                  Try with demo account
                </button>
              )}
              
              <div className="relative flex items-center justify-center my-4">
                <div className="border-t border-white/10 absolute w-full"></div>
                <span className="bg-dark-card text-white/50 text-sm px-2 relative">Or continue with</span>
              </div>
              
              <button 
                type="button"
                className="btn btn-ghost w-full flex items-center justify-center gap-2"
              >
                <Github size={18} />
                <span>GitHub</span>
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-white/70">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-primary hover:underline ml-1"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
