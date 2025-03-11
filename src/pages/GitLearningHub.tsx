import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommandLine from '../components/CommandLine';
import GitCommandList from '../components/git-learning-hub/GitCommandList';
import CommandDetails from '../components/git-learning-hub/CommandDetails';
import LearningResources from '../components/git-learning-hub/LearningResources';

const GitLearningHub = () => {
  const [activeCommand, setActiveCommand] = useState('init');
  
  const commands = {
    init: {
      title: 'Git Init',
      description: 'Initialize a new Git repository',
      syntax: 'git init [directory]',
      example: 'git init my-project',
      explanation: 'Creates a new Git repository in the specified directory or the current directory if none is specified.'
    },
    clone: {
      title: 'Git Clone',
      description: 'Clone a repository into a new directory',
      syntax: 'git clone [url] [directory]',
      example: 'git clone https://github.com/user/repository.git',
      explanation: 'Creates a copy of an existing Git repository, including all files, branches, and commits.'
    },
    add: {
      title: 'Git Add',
      description: 'Add file contents to the index',
      syntax: 'git add [file]',
      example: 'git add index.html',
      explanation: 'Stages changes in the working directory for the next commit.'
    },
    commit: {
      title: 'Git Commit',
      description: 'Record changes to the repository',
      syntax: 'git commit -m "[message]"',
      example: 'git commit -m "Fix navigation bug"',
      explanation: 'Creates a snapshot of the staged changes along with a descriptive message.'
    },
    push: {
      title: 'Git Push',
      description: 'Update remote refs along with associated objects',
      syntax: 'git push [remote] [branch]',
      example: 'git push origin main',
      explanation: 'Uploads local repository content to a remote repository.'
    }
  };
  
  const handleCommandExecution = (command: string): string => {
    const commandParts = command.split(' ');
    const mainCommand = commandParts[0];
    
    switch (mainCommand) {
      case 'help':
        return 'Available commands: init, clone, add, commit, push';
      case 'init':
        return 'Initialized empty Git repository';
      case 'clone':
        return commandParts[1] 
          ? `Cloning into '${commandParts[1]}'...` 
          : 'Error: Please specify a repository URL';
      case 'add':
        return commandParts[1]
          ? `Added ${commandParts[1]} to staging area`
          : 'Error: Please specify a file to add';
      case 'commit':
        if (commandParts[1] === '-m' && commandParts[2]) {
          return `[main] ${commandParts.slice(2).join(' ')}`;
        }
        return 'Error: Please provide a commit message with -m flag';
      case 'push':
        return 'Everything up-to-date';
      default:
        return `Command not found: ${mainCommand}. Type 'help' for available commands.`;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-24 px-4 md:px-6 pb-20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-primary"
            >
              Git Learning Hub
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Learn Git commands with interactive challenges and visual explanations
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-4">
              <GitCommandList 
                commands={commands} 
                activeCommand={activeCommand} 
                onCommandSelect={setActiveCommand} 
              />
            </div>
            
            <div className="lg:col-span-8">
              <CommandDetails command={commands[activeCommand as keyof typeof commands]} />
              <div className="glass-morphism rounded-lg">
                <CommandLine
                  title="Try it yourself"
                  onCommandEnter={handleCommandExecution}
                  className="h-full"
                />
              </div>
            </div>
          </div>
          
          <LearningResources />
          
          <div className="text-center">
            <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
              Interactive Challenges Coming Soon
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GitLearningHub;
