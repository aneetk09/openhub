
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Check, Terminal, Code, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from '@/hooks/use-toast';

const GitLearningHub = () => {
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
              Git Learning Hub
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Master Git with interactive challenges and visual explanations. Learn essential commands
              and workflows used in open source development.
            </motion.p>
          </div>
          
          <GitInteractiveChallenges />
          <GitCommandReference />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const challenges = [
  {
    id: 1,
    title: 'Initialize a Repository',
    description: 'Create a new Git repository and stage your first file.',
    commands: ['git init', 'git add <file>'],
    difficulty: 'beginner',
    xp: 10,
  },
  {
    id: 2,
    title: 'Make Your First Commit',
    description: 'Commit your changes with a meaningful message.',
    commands: ['git commit -m "message"'],
    difficulty: 'beginner',
    xp: 10,
  },
  {
    id: 3,
    title: 'Branch and Merge',
    description: 'Create a branch, make changes, and merge it back to main.',
    commands: ['git branch <name>', 'git checkout <name>', 'git merge <name>'],
    difficulty: 'intermediate',
    xp: 25,
  },
  {
    id: 4,
    title: 'Resolve a Merge Conflict',
    description: 'Fix conflicts that occur when merging branches with competing changes.',
    commands: ['git merge <branch>', '// Edit conflict files', 'git add <files>', 'git commit'],
    difficulty: 'advanced',
    xp: 50,
  },
];

const GitInteractiveChallenges = () => {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Interactive Challenges</h2>
        <span className="glass-card px-3 py-1 text-sm">
          <span className="text-neon-purple font-medium">85 XP</span> earned
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((challenge, index) => (
          <ChallengeCard 
            key={challenge.id}
            challenge={challenge}
            index={index}
            completed={index < 2}
          />
        ))}
      </div>
    </section>
  );
};

const ChallengeCard = ({ 
  challenge, 
  index,
  completed 
}: { 
  challenge: any,
  index: number,
  completed: boolean
}) => {
  const handleStartChallenge = () => {
    toast({
      title: "Challenge started",
      description: `You've started the "${challenge.title}" challenge.`,
    });
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 relative"
    >
      {completed && (
        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
          <Check size={14} className="text-green-500" />
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-full ${
          challenge.difficulty === 'beginner' 
            ? 'bg-blue-500/20 text-blue-400' 
            : challenge.difficulty === 'intermediate'
              ? 'bg-yellow-500/20 text-yellow-400'
              : 'bg-red-500/20 text-red-400'
        }`}>
          <GitBranch size={20} />
        </div>
        <div>
          <h3 className="font-bold text-lg">{challenge.title}</h3>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <span className={`capitalize ${
              challenge.difficulty === 'beginner' 
                ? 'text-blue-400' 
                : challenge.difficulty === 'intermediate'
                  ? 'text-yellow-400'
                  : 'text-red-400'
            }`}>{challenge.difficulty}</span>
            <span>•</span>
            <span>{challenge.xp} XP</span>
          </div>
        </div>
      </div>
      
      <p className="text-white/80 mb-4">{challenge.description}</p>
      
      <div className="glass-card p-3 mb-4 font-mono text-sm">
        {challenge.commands.map((cmd: string, i: number) => (
          <div key={i} className="flex items-start mb-1 last:mb-0">
            <span className="text-green-400 mr-2">$</span>
            <span>{cmd}</span>
          </div>
        ))}
      </div>
      
      <button
        onClick={handleStartChallenge}
        className={`btn ${completed ? 'btn-ghost' : 'btn-primary'} w-full`}
      >
        {completed ? 'Replay Challenge' : 'Start Challenge'}
      </button>
    </motion.div>
  );
};

const commands = [
  {
    category: 'Basics',
    commands: [
      { name: 'git init', description: 'Initialize a new Git repository' },
      { name: 'git clone <url>', description: 'Clone a repository from remote' },
      { name: 'git add <file>', description: 'Add file to staging area' },
      { name: 'git commit -m "message"', description: 'Commit staged changes' },
      { name: 'git status', description: 'Show working tree status' },
    ]
  },
  {
    category: 'Branching',
    commands: [
      { name: 'git branch', description: 'List all branches' },
      { name: 'git branch <name>', description: 'Create a new branch' },
      { name: 'git checkout <branch>', description: 'Switch to branch' },
      { name: 'git checkout -b <name>', description: 'Create and checkout new branch' },
      { name: 'git merge <branch>', description: 'Merge branch into current branch' },
    ]
  },
  {
    category: 'Remote',
    commands: [
      { name: 'git remote add <name> <url>', description: 'Add a remote repository' },
      { name: 'git push <remote> <branch>', description: 'Push changes to remote' },
      { name: 'git pull <remote> <branch>', description: 'Pull changes from remote' },
      { name: 'git fetch', description: 'Download objects and refs from remote' },
      { name: 'git remote -v', description: 'List all remotes' },
    ]
  },
];

const GitCommandReference = () => {
  const [activeCategory, setActiveCategory] = useState('Basics');
  
  return (
    <section>
      <h2 className="text-2xl font-bold mb-8">Command Reference</h2>
      
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {commands.map((category) => (
          <button
            key={category.category}
            onClick={() => setActiveCategory(category.category)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              activeCategory === category.category
                ? 'bg-primary text-white'
                : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>
      
      <div className="glass-card p-0 overflow-hidden">
        <div className="divide-y divide-white/10">
          {commands
            .find(c => c.category === activeCategory)?.commands
            .map((cmd, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="font-mono text-primary font-medium">
                    {cmd.name}
                  </div>
                  <div className="text-white/70">
                    {cmd.description}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default GitLearningHub;
