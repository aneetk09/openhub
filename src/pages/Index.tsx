
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import { FileText, GitBranch, Code } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <TrendingProjects />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

const TrendingProjects = () => {
  const projects = [
    {
      id: 1,
      title: "React",
      description: "A JavaScript library for building user interfaces",
      icon: <Code size={24} className="text-neon-blue" />,
      stats: "189k stars • 40k forks"
    },
    {
      id: 2,
      title: "TensorFlow",
      description: "An end-to-end open source platform for machine learning",
      icon: <Code size={24} className="text-neon-purple" />,
      stats: "167k stars • 87k forks"
    },
    {
      id: 3,
      title: "VS Code",
      description: "Code editing redefined",
      icon: <Code size={24} className="text-neon-blue" />,
      stats: "138k stars • 24k forks"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-blue-purple bg-clip-text text-transparent"
          >
            Trending Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/80"
          >
            Discover popular open source projects and start contributing today
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6"
            >
              <div className="p-3 mb-4 rounded-full bg-white/5 w-fit">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-white/70 text-sm mb-4">{project.description}</p>
              <div className="text-white/50 text-xs">{project.stats}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="btn btn-ghost group"
          >
            <span>View all projects</span>
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
              className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto glass-card p-10 md:p-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full 
                           bg-white/5 border border-white/10 
                           text-sm font-medium text-white/80 backdrop-blur-sm">
              <span className="inline-block w-2 h-2 rounded-full 
                             bg-neon-purple mr-2 animate-pulse"></span>
              Join the community
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 
                     bg-gradient-blue-purple bg-clip-text text-transparent"
          >
            Ready to start your open source journey?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of developers who are contributing to open source projects.
            Get started with our interactive tools and guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="btn btn-primary group flex items-center justify-center gap-2">
              <span>Get Started</span>
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
            <button className="btn btn-ghost group flex items-center justify-center gap-2">
              <span>Learn More</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Index;
