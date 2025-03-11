
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface ToolCardProps {
  tool: {
    id: number;
    name: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    gradient: string;
  };
  index: number;
}

const ToolCard = ({ tool, index }: ToolCardProps) => {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden rounded-xl cursor-pointer group"
      onClick={() => navigate(tool.link)}
    >
      {/* Gradient Border */}
      <div className="absolute inset-0 rounded-xl" style={{ background: tool.gradient }}></div>
      
      {/* Content */}
      <div className="relative m-[1px] bg-dark-card rounded-xl p-6 h-full">
        <div className="flex flex-col h-full">
          <div className="mb-4">
            <div className="p-3 bg-white/5 rounded-lg w-fit">
              {tool.icon}
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
            {tool.name}
          </h3>
          
          <p className="text-white/70 text-sm mb-4 flex-grow">
            {tool.description}
          </p>
          
          <div className="flex items-center text-sm text-primary font-medium">
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
              className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ToolCard;
