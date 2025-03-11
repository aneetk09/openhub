
interface Command {
  title: string;
  description: string;
  syntax: string;
  example: string;
  explanation: string;
}

interface CommandDetailsProps {
  command: Command;
}

const CommandDetails = ({ command }: CommandDetailsProps) => {
  return (
    <div className="glass-morphism rounded-lg p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-primary">{command.title}</h2>
      <p className="text-muted-foreground mb-6">{command.description}</p>
      
      <div className="space-y-6">
        <div className="neo-blur rounded-lg p-4">
          <div className="text-muted-foreground mb-2">Syntax:</div>
          <div className="font-mono text-sm text-primary">{command.syntax}</div>
        </div>
        
        <div className="neo-blur rounded-lg p-4">
          <div className="text-muted-foreground mb-2">Example:</div>
          <div className="font-mono text-sm text-green-400">{command.example}</div>
        </div>
        
        <div className="neo-blur rounded-lg p-4">
          <div className="text-muted-foreground mb-2">Explanation:</div>
          <div className="text-sm text-foreground">{command.explanation}</div>
        </div>
      </div>
    </div>
  );
};

export default CommandDetails;
