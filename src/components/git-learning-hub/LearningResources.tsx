
import { BookOpen, GitBranch, GitCommit, GitMerge } from 'lucide-react';

const LearningResources = () => {
  return (
    <div className="glass-morphism rounded-lg p-6 mb-12">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-primary">
        <BookOpen size={20} />
        Further Learning Resources
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a 
          href="https://git-scm.com/doc" 
          target="_blank" 
          rel="noopener noreferrer"
          className="neo-blur rounded-lg p-4 hover:bg-white/10 transition-colors"
        >
          <h3 className="font-bold mb-2 flex items-center gap-2 text-primary">
            <GitBranch size={16} />
            Official Git Documentation
          </h3>
          <p className="text-sm text-muted-foreground">Comprehensive reference guide for all Git commands and features.</p>
        </a>
        <a 
          href="https://learngitbranching.js.org/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="neo-blur rounded-lg p-4 hover:bg-white/10 transition-colors"
        >
          <h3 className="font-bold mb-2 flex items-center gap-2 text-primary">
            <GitCommit size={16} />
            Learn Git Branching
          </h3>
          <p className="text-sm text-muted-foreground">Interactive visualizations to challenge and strengthen your Git skills.</p>
        </a>
        <a 
          href="https://www.atlassian.com/git/tutorials" 
          target="_blank" 
          rel="noopener noreferrer"
          className="neo-blur rounded-lg p-4 hover:bg-white/10 transition-colors"
        >
          <h3 className="font-bold mb-2 flex items-center gap-2 text-primary">
            <GitMerge size={16} />
            Atlassian Git Tutorials
          </h3>
          <p className="text-sm text-muted-foreground">Beginner to advanced Git tutorials with practical examples.</p>
        </a>
      </div>
    </div>
  );
};

export default LearningResources;
