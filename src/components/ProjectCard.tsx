
import { motion } from 'framer-motion';
import { Star, GitFork, Eye, Clock } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    language: string;
    languageColor: string;
    stars: number;
    forks: number;
    watchers: number;
    lastUpdated: string;
    owner: {
      name: string;
      avatar: string;
    };
  };
  delay?: number;
}

const ProjectCard = ({ project, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="glass-card overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <img 
              src={project.owner.avatar} 
              alt={project.owner.name}
              className="w-8 h-8 rounded-full mr-3 border border-white/10"
            />
            <h3 className="font-bold text-white">{project.name}</h3>
          </div>
          <div className="flex items-center text-white/70 text-sm">
            <span className="inline-block w-3 h-3 rounded-full mr-1.5" style={{ backgroundColor: project.languageColor }}></span>
            {project.language}
          </div>
        </div>
        
        <p className="text-white/70 mb-6 text-sm line-clamp-3">{project.description}</p>
        
        <div className="flex items-center justify-between text-sm text-white/70">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <Star size={16} className="mr-1 text-yellow-400" />
              <span>{project.stars.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <GitFork size={16} className="mr-1" />
              <span>{project.forks.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <Eye size={16} className="mr-1" />
              <span>{project.watchers.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{project.lastUpdated}</span>
          </div>
        </div>
      </div>

      <div className="h-1.5 w-full bg-gradient-blue-purple"></div>
    </motion.div>
  );
};

export default ProjectCard;
