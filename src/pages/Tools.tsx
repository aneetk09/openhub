
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import { 
  FileText, 
  GitBranch, 
  Award, 
  BookOpen, 
  Code, 
  Settings, 
  Star 
} from 'lucide-react';

const TOOLS = [
  {
    id: 1,
    name: "README Generator",
    description: "Create professional README files for your projects with our interactive generator.",
    icon: <FileText size={24} className="text-neon-blue" />,
    link: "/tools/readme-generator",
    gradient: "linear-gradient(135deg, rgba(0, 240, 255, 0.5), rgba(0, 240, 255, 0.1))"
  },
  {
    id: 2,
    name: "Git Learning Hub",
    description: "Learn Git commands with interactive challenges and visual explanations.",
    icon: <GitBranch size={24} className="text-neon-purple" />,
    link: "/tools/git-learning",
    gradient: "linear-gradient(135deg, rgba(157, 78, 221, 0.5), rgba(157, 78, 221, 0.1))"
  },
  {
    id: 3,
    name: "License Selector",
    description: "Choose the right open source license for your project with our comparison tool.",
    icon: <Award size={24} className="text-neon-blue" />,
    link: "/tools/license-selector",
    gradient: "linear-gradient(135deg, rgba(0, 240, 255, 0.5), rgba(0, 240, 255, 0.1))"
  },
  {
    id: 4,
    name: "Documentation Tools",
    description: "Create and maintain comprehensive documentation for your open source projects.",
    icon: <BookOpen size={24} className="text-neon-purple" />,
    link: "/tools/documentation",
    gradient: "linear-gradient(135deg, rgba(157, 78, 221, 0.5), rgba(157, 78, 221, 0.1))"
  },
  {
    id: 5,
    name: "Project Explorer",
    description: "Discover and search for open source projects that match your interests and skills.",
    icon: <Code size={24} className="text-neon-blue" />,
    link: "/tools/project-explorer",
    gradient: "linear-gradient(135deg, rgba(0, 240, 255, 0.5), rgba(0, 240, 255, 0.1))"
  },
  {
    id: 6,
    name: "Contribution Tracker",
    description: "Track your open source contributions and visualize your progress over time.",
    icon: <Settings size={24} className="text-neon-purple" />,
    link: "/tools/contribution-tracker",
    gradient: "linear-gradient(135deg, rgba(157, 78, 221, 0.5), rgba(157, 78, 221, 0.1))"
  }
];

const Tools = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full 
                           bg-white/5 border border-white/10 
                           text-sm font-medium text-white/80 backdrop-blur-sm mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-neon-purple mr-2 animate-pulse"></span>
              Interactive Tools
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-blue-purple bg-clip-text text-transparent">
              Tools for Open Source Contributors
            </h1>
            <p className="text-white/80">
              Use our interactive tools to enhance your open source journey and make better contributions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {TOOLS.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-full bg-white/5 w-fit">
                <Star className="text-neon-purple" size={30} />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Request a New Tool
            </h2>
            <p className="text-white/80 mb-6">
              Don't see the tool you need? Let us know what would help you contribute better to open source.
            </p>
            <button className="btn btn-primary mx-auto">
              Suggest a Tool
            </button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tools;
