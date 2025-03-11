
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Maximize2, Minimize2, X } from 'lucide-react';

interface CommandLineProps {
  title?: string;
  commands?: string[];
  initialCommand?: string;
  onCommandEnter?: (command: string) => void | string;
  className?: string;
}

const CommandLine: React.FC<CommandLineProps> = ({
  title = 'Terminal',
  commands = [],
  initialCommand = '',
  onCommandEnter,
  className = '',
}) => {
  const [command, setCommand] = useState(initialCommand);
  const [history, setHistory] = useState<string[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;
    
    setHistory([...history, `$ ${command}`]);
    
    if (onCommandEnter) {
      const output = onCommandEnter(command);
      // Check if output exists and is a string before adding to history
      if (output && typeof output === 'string') {
        setHistory(prev => [...prev, output]);
      }
    }
    
    setCommand('');
  };
  
  // Simulate typing for the initial commands
  useEffect(() => {
    if (commands.length === 0) return;
    
    let timeout: number;
    let currentIndex = 0;
    
    const typeNextCommand = () => {
      if (currentIndex < commands.length) {
        setHistory(prev => [...prev, `$ ${commands[currentIndex]}`]);
        currentIndex++;
        timeout = window.setTimeout(typeNextCommand, 1000);
      }
    };
    
    timeout = window.setTimeout(typeNextCommand, 500);
    
    return () => clearTimeout(timeout);
  }, [commands]);
  
  return (
    <div className={`glass-card overflow-hidden ${className}`}>
      <div className="p-0">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-900">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-sm text-white/70 font-mono flex items-center gap-2">
            <Terminal size={14} />
            <span>{title}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white/50 hover:text-white"
            >
              {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
            </button>
            <button className="text-white/50 hover:text-white">
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Terminal Content */}
        <motion.div
          animate={{ height: isMinimized ? 0 : 'auto', opacity: isMinimized ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="p-4 font-mono text-sm overflow-hidden bg-dark-bg">
            {history.map((line, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mb-2"
              >
                <span className={line.startsWith('$') ? 'text-green-400' : 'text-white/70'}>
                  {line}
                </span>
              </motion.div>
            ))}
            
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-green-400 mr-2">$</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                className="bg-transparent flex-grow focus:outline-none"
                placeholder="Enter command..."
                autoFocus
              />
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommandLine;
