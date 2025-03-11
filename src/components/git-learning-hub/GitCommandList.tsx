
import { GitBranch } from 'lucide-react';

interface Command {
  title: string;
  description: string;
  syntax: string;
  example: string;
  explanation: string;
}

interface GitCommandListProps {
  commands: Record<string, Command>;
  activeCommand: string;
  onCommandSelect: (key: string) => void;
}

const GitCommandList = ({ commands, activeCommand, onCommandSelect }: GitCommandListProps) => {
  return (
    <div className="sticky top-24 glass-morphism rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4 text-primary">Git Commands</h2>
      <div className="space-y-2">
        {Object.entries(commands).map(([key, command]) => (
          <button
            key={key}
            onClick={() => onCommandSelect(key)}
            className={`w-full text-left p-3 rounded-lg transition-all flex items-center gap-3 
              ${activeCommand === key 
                ? 'bg-primary/10 text-primary' 
                : 'hover:bg-white/5 text-muted-foreground hover:text-primary'}`}
          >
            <GitBranch size={18} />
            <div>
              <div className="font-medium">{command.title}</div>
              <div className="text-sm text-muted-foreground">{command.description}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GitCommandList;
