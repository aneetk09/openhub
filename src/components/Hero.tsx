
import { motion } from 'framer-motion';
import { Github, Code, GitBranch, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
        
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="grid grid-cols-10 grid-rows-10 gap-6 opacity-10">
            {Array.from({ length: 100 }).map((_, i) => (
              <div 
                key={i} 
                className="w-full h-full border border-white/10 rounded"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          {/* Animated Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 backdrop-blur-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-neon-purple mr-2 animate-pulse"></span>
              Discover. Contribute. Grow.
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-blue-purple bg-clip-text text-transparent"
          >
            Open Source <br className="md:hidden" />
            <span className="font-light">for Everyone</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mb-8"
          >
            Discover, contribute and learn about open source projects 
            with our interactive tools and guidance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button className="btn btn-primary group flex items-center justify-center gap-2 min-w-40">
              <span>Explore Projects</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="transform transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            <button className="btn btn-ghost group flex items-center justify-center gap-2 min-w-40">
              <Github size={16} />
              <span>Connect GitHub</span>
            </button>
          </motion.div>

          {/* Terminal-like Component */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-3xl mx-auto"
          >
            <div className="neon-border">
              <div className="p-1 bg-dark-card">
                <div className="bg-dark-bg rounded-lg overflow-hidden">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm text-white/70 font-mono">bash - explorer@opensource</div>
                    <div className="w-5"></div>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-4 font-mono text-sm overflow-hidden">
                    <div className="flex items-start mb-2">
                      <span className="text-green-400 mr-2">$</span>
                      <div className="typing-container">
                        <span className="typing-text">git clone https://github.com/opensource/explorer.git</span>
                      </div>
                    </div>
                    
                    <div className="text-white/70 mb-2 animate-fade-in" style={{ animationDelay: '3.5s', opacity: 0, animationFillMode: 'forwards' }}>
                      Cloning into 'explorer'...
                    </div>
                    
                    <div className="text-white/70 mb-2 animate-fade-in" style={{ animationDelay: '4s', opacity: 0, animationFillMode: 'forwards' }}>
                      remote: Counting objects: 100, done.
                    </div>
                    
                    <div className="text-white/70 mb-2 animate-fade-in" style={{ animationDelay: '4.5s', opacity: 0, animationFillMode: 'forwards' }}>
                      remote: Compressing objects: 100% (80/80), done.
                    </div>
                    
                    <div className="text-white/70 mb-2 animate-fade-in" style={{ animationDelay: '5s', opacity: 0, animationFillMode: 'forwards' }}>
                      Receiving objects: 100% (100/100), 1.2 MiB | 2.3 MiB/s, done.
                    </div>
                    
                    <div className="flex items-start animate-fade-in" style={{ animationDelay: '5.5s', opacity: 0, animationFillMode: 'forwards' }}>
                      <span className="text-green-400 mr-2">$</span>
                      <span className="cursor"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          <StatCard
            icon={<Code className="text-neon-blue" size={24} />}
            title="10K+"
            description="Open Source Projects"
          />
          <StatCard
            icon={<Github className="text-neon-purple" size={24} />}
            title="5K+"
            description="GitHub Repositories"
          />
          <StatCard
            icon={<GitBranch className="text-neon-blue" size={24} />}
            title="25K+"
            description="Pull Requests"
          />
          <StatCard
            icon={<Star className="text-neon-purple" size={24} />}
            title="100K+"
            description="GitHub Stars"
          />
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card p-6 flex flex-col items-center text-center"
    >
      <div className="p-3 mb-4 rounded-full bg-white/5">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-1 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

export default Hero;
