
import { motion } from 'framer-motion';
import { FileText, Award, GitBranch } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import CommandLine from '../components/CommandLine';

const Tools = () => {
  // Define tools data according to the ToolCard component's expected props
  const tools = [
    {
      id: 1,
      name: "README Generator",
      description: "Create professional README files for your projects with our interactive generator.",
      icon: <FileText size={24} className="text-neon-blue" />,
      link: "/tools/readme-generator",
      gradient: "linear-gradient(135deg, rgba(0,112,243,0.5), rgba(0,112,243,0))"
    },
    {
      id: 2,
      name: "License Selector",
      description: "Choose the right open source license for your project with our comparison tool.",
      icon: <Award size={24} className="text-neon-purple" />,
      link: "/tools/license-selector",
      gradient: "linear-gradient(135deg, rgba(170,0,255,0.5), rgba(170,0,255,0))"
    },
    {
      id: 3,
      name: "Git Learning Hub",
      description: "Learn Git commands with interactive challenges and visual explanations.",
      icon: <GitBranch size={24} className="text-neon-blue" />,
      link: "/tools/git-learning-hub",
      gradient: "linear-gradient(135deg, rgba(0,112,243,0.5), rgba(0,112,243,0))"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-6 pb-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-blue-purple bg-clip-text text-transparent"
            >
              Interactive Tools
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Explore our collection of tools designed to help you contribute to open source projects
              more effectively and learn essential skills.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <CommandLine
              title="opensource@explorer"
              commands={[
                "ls tools",
                "cd readme-generator",
                "cd ..",
                "cd license-selector",
                "cd ..",
                "cd git-learning-hub"
              ]}
              className="max-w-3xl mx-auto"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>
          
          <div className="glass-card p-6 text-center">
            <h2 className="text-xl font-bold mb-2">Have a tool suggestion?</h2>
            <p className="text-white/70 mb-4">We're constantly expanding our toolset to help open source contributors.</p>
            <button className="btn btn-primary">Suggest a Tool</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
