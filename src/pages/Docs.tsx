
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight, FileText, BookOpen, GitBranch, Code } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Docs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-6">
        <div className="container mx-auto">
          <DocsHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
            <DocsSidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <DocsContent activeCategory={activeCategory} searchQuery={searchQuery} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const DocsHeader = ({ searchQuery, setSearchQuery }: { searchQuery: string, setSearchQuery: (query: string) => void }) => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-blue-purple bg-clip-text text-transparent">
          Documentation
        </h1>
        <p className="text-white/80 mb-8">
          Comprehensive guides and resources for open source contribution.
        </p>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white/50">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            placeholder="Search documentation..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-3 w-full bg-white/5 border border-white/10 rounded-lg 
                     focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                     transition-colors"
          />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mt-8"
      >
        {['Getting Started', 'Contribution Guides', 'Version Control', 'Open Source Licenses'].map((tag, index) => (
          <div 
            key={index}
            className="bg-white/5 border border-white/10 rounded-full px-4 py-1 text-sm hover:bg-white/10 transition-colors cursor-pointer"
          >
            {tag}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const DocsSidebar = ({ 
  activeCategory, 
  setActiveCategory 
}: { 
  activeCategory: string, 
  setActiveCategory: (category: string) => void 
}) => {
  const categories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: <BookOpen size={18} />,
      topics: ['Introduction', 'Installation', 'Quick Start Guide']
    },
    {
      id: 'git-basics',
      name: 'Git Basics',
      icon: <GitBranch size={18} />,
      topics: ['Basic Commands', 'Branching Strategy', 'Pull Requests']
    },
    {
      id: 'contribution-guides',
      name: 'Contribution Guides',
      icon: <FileText size={18} />,
      topics: ['Code Standards', 'Documentation', 'Testing']
    },
    {
      id: 'advanced-topics',
      name: 'Advanced Topics',
      icon: <Code size={18} />,
      topics: ['CI/CD Integration', 'GitHub Actions', 'Community Building']
    }
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:col-span-1"
    >
      <div className="glass-card p-6 sticky top-24">
        <h3 className="font-bold mb-4 text-lg">Documentation</h3>
        
        <nav className="space-y-1">
          {categories.map((category) => (
            <div key={category.id} className="mb-4">
              <button
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 w-full text-left p-2 rounded-lg transition-colors ${
                  activeCategory === category.id 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-white/80 hover:bg-white/5'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
              
              {activeCategory === category.id && (
                <div className="mt-2 ml-6 space-y-1 border-l border-white/10 pl-2">
                  {category.topics.map((topic, index) => (
                    <a 
                      key={index}
                      href={`#${topic.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center text-sm py-1 text-white/70 hover:text-white transition-colors"
                    >
                      <ChevronRight size={14} className="mr-1" />
                      {topic}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

const DocsContent = ({ 
  activeCategory,
  searchQuery
}: { 
  activeCategory: string,
  searchQuery: string
}) => {
  // Simulated documentation content
  const content = {
    'getting-started': {
      title: 'Getting Started with Open Source',
      description: 'Learn the basics of contributing to open source projects.',
      sections: [
        {
          id: 'introduction',
          title: 'Introduction',
          content: `
            <p>Open source software is code that is designed to be publicly accessible—anyone can see, modify, and distribute the code as they see fit. Open source software is developed in a decentralized and collaborative way, relying on peer review and community production.</p>
            <p>Contributing to open source can be a rewarding way to learn, teach, and build experience in just about any skill you can imagine. Open source projects that are friendly to new contributors usually have issues labeled "first-timers-only", "good first issue", or "beginner".</p>
          `
        },
        {
          id: 'installation',
          title: 'Installation',
          content: `
            <p>Before contributing to open source projects, you'll need to set up your development environment. This typically includes:</p>
            <ul>
              <li>Install Git for version control</li>
              <li>Setup a GitHub account</li>
              <li>Configure your SSH keys</li>
              <li>Install relevant programming languages and dependencies</li>
            </ul>
            <div class="glass-card p-4 my-4">
              <p class="font-mono text-sm">
                # Install Git<br>
                $ sudo apt install git-all<br><br>
                # Configure Git<br>
                $ git config --global user.name "Your Name"<br>
                $ git config --global user.email "your.email@example.com"
              </p>
            </div>
          `
        },
        {
          id: 'quick-start-guide',
          title: 'Quick Start Guide',
          content: `
            <p>Follow these steps to make your first contribution:</p>
            <ol>
              <li>Find a project you're interested in</li>
              <li>Fork the repository</li>
              <li>Clone your fork locally</li>
              <li>Create a new branch</li>
              <li>Make your changes</li>
              <li>Commit and push your changes</li>
              <li>Create a pull request</li>
            </ol>
            <div class="glass-card p-4 my-4">
              <p class="font-mono text-sm">
                # Clone repository<br>
                $ git clone https://github.com/username/repository.git<br><br>
                # Create and checkout a new branch<br>
                $ git checkout -b feature/amazing-feature<br><br>
                # Commit changes<br>
                $ git commit -m "Add amazing feature"<br><br>
                # Push to the branch<br>
                $ git push origin feature/amazing-feature
              </p>
            </div>
          `
        }
      ]
    },
    'git-basics': {
      title: 'Git Basics',
      description: 'Learn essential Git commands and workflows for effective collaboration.',
      sections: [
        {
          id: 'basic-commands',
          title: 'Basic Commands',
          content: `
            <p>Git is a distributed version control system that tracks changes in any set of computer files. Here are some essential Git commands:</p>
            <div class="glass-card p-4 my-4 font-mono text-sm space-y-2">
              <p><strong>$ git init</strong> - Initialize a new Git repository</p>
              <p><strong>$ git clone [url]</strong> - Clone a repository</p>
              <p><strong>$ git add [file]</strong> - Add files to staging area</p>
              <p><strong>$ git commit -m "[message]"</strong> - Commit changes</p>
              <p><strong>$ git push</strong> - Push changes to remote repository</p>
              <p><strong>$ git pull</strong> - Fetch and merge changes from remote</p>
              <p><strong>$ git status</strong> - Check status of working directory</p>
              <p><strong>$ git log</strong> - View commit history</p>
            </div>
          `
        },
        {
          id: 'branching-strategy',
          title: 'Branching Strategy',
          content: `
            <p>A good branching strategy keeps your codebase organized and facilitates collaboration:</p>
            <ul>
              <li><strong>Main/Master branch</strong>: Always deployable, contains production code</li>
              <li><strong>Development branch</strong>: Integration branch for features</li>
              <li><strong>Feature branches</strong>: For developing new features</li>
              <li><strong>Hotfix branches</strong>: For critical bug fixes in production</li>
              <li><strong>Release branches</strong>: For preparing new production releases</li>
            </ul>
            <div class="glass-card p-4 my-4">
              <p class="font-mono text-sm">
                # Create a feature branch<br>
                $ git checkout -b feature/user-authentication<br><br>
                # Create a hotfix branch from master<br>
                $ git checkout -b hotfix/critical-security-bug master
              </p>
            </div>
          `
        },
        {
          id: 'pull-requests',
          title: 'Pull Requests',
          content: `
            <p>Pull requests let you inform others about changes you've pushed to a branch in a repository. Once a pull request is opened, you can discuss and review the potential changes with collaborators before your changes are merged into the base branch.</p>
            <p>When creating a pull request:</p>
            <ul>
              <li>Add a descriptive title and detailed description</li>
              <li>Reference any related issues</li>
              <li>Assign reviewers</li>
              <li>Add relevant labels</li>
              <li>Include screenshots or demos if applicable</li>
            </ul>
          `
        }
      ]
    },
    'contribution-guides': {
      title: 'Contribution Guides',
      description: 'Learn the best practices for contributing to open source projects.',
      sections: []
    },
    'advanced-topics': {
      title: 'Advanced Topics',
      description: 'Explore advanced concepts in open source development.',
      sections: []
    }
  };
  
  const currentContent = content[activeCategory as keyof typeof content];
  
  if (!currentContent) {
    return <div>Content not found</div>;
  }
  
  let sectionsToShow = currentContent.sections;
  
  // Filter based on search query
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    sectionsToShow = currentContent.sections.filter(section => 
      section.title.toLowerCase().includes(query) || 
      section.content.toLowerCase().includes(query)
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="lg:col-span-3"
    >
      <div className="glass-card p-8">
        <h2 className="text-2xl font-bold mb-2">{currentContent.title}</h2>
        <p className="text-white/70 mb-8">{currentContent.description}</p>
        
        {sectionsToShow.length > 0 ? (
          <div className="space-y-12">
            {sectionsToShow.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-32">
                <h3 className="text-xl font-bold mb-4 text-primary">{section.title}</h3>
                <div 
                  className="prose prose-invert prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: section.content }} 
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-white/50 text-lg mb-2">Content coming soon!</div>
            <p className="text-white/70">
              This section is currently under development. Check back later for updates.
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Docs;
