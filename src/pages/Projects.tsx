
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { Search, Filter, Code, Star, GitBranch, Calendar } from 'lucide-react';

// Mock data for projects
const MOCK_PROJECTS = [
  {
    id: 1,
    name: 'react',
    description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    stars: 189000,
    forks: 38500,
    watchers: 6700,
    lastUpdated: '2 days ago',
    owner: {
      name: 'facebook',
      avatar: 'https://github.com/facebook.png',
    },
  },
  {
    id: 2,
    name: 'tensorflow',
    description: 'An end-to-end open source platform for machine learning.',
    language: 'C++',
    languageColor: '#f34b7d',
    stars: 167000,
    forks: 87000,
    watchers: 9800,
    lastUpdated: '1 day ago',
    owner: {
      name: 'tensorflow',
      avatar: 'https://github.com/tensorflow.png',
    },
  },
  {
    id: 3,
    name: 'vscode',
    description: 'Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.',
    language: 'TypeScript',
    languageColor: '#2b7489',
    stars: 138000,
    forks: 23700,
    watchers: 3100,
    lastUpdated: '5 days ago',
    owner: {
      name: 'microsoft',
      avatar: 'https://github.com/microsoft.png',
    },
  },
  {
    id: 4,
    name: 'flutter',
    description: 'Flutter makes it easy and fast to build beautiful apps for mobile and beyond.',
    language: 'Dart',
    languageColor: '#00B4AB',
    stars: 142000,
    forks: 23100,
    watchers: 3400,
    lastUpdated: '3 days ago',
    owner: {
      name: 'flutter',
      avatar: 'https://github.com/flutter.png',
    },
  },
  {
    id: 5,
    name: 'pytorch',
    description: 'Tensors and Dynamic neural networks in Python with strong GPU acceleration.',
    language: 'Python',
    languageColor: '#3572A5',
    stars: 56000,
    forks: 15800,
    watchers: 2100,
    lastUpdated: '4 days ago',
    owner: {
      name: 'pytorch',
      avatar: 'https://github.com/pytorch.png',
    },
  },
  {
    id: 6,
    name: 'kubernetes',
    description: 'Production-Grade Container Scheduling and Management.',
    language: 'Go',
    languageColor: '#00ADD8',
    stars: 90200,
    forks: 33100,
    watchers: 3300,
    lastUpdated: '1 day ago',
    owner: {
      name: 'kubernetes',
      avatar: 'https://github.com/kubernetes.png',
    },
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(MOCK_PROJECTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState('stars');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterToggle = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  // Apply filters and search
  const filteredProjects = projects
    .filter(project => 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'stars') {
        return b.stars - a.stars;
      } else if (sortOption === 'forks') {
        return b.forks - a.forks;
      } else if (sortOption === 'recent') {
        // For demo purposes, sort by ID as a proxy for recency
        return b.id - a.id;
      }
      return 0;
    });

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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-blue-purple bg-clip-text text-transparent">
              Explore Projects
            </h1>
            <p className="text-white/80">
              Discover and contribute to open source projects from around the world
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10"
          >
            <div className="glass rounded-xl p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={18} className="text-white/50" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="pl-10 pr-4 py-2 w-full rounded-lg bg-white/5 border border-white/10 
                             text-white placeholder-white/50 focus:outline-none focus:ring-2 
                             focus:ring-primary/50 focus:border-transparent"
                  />
                </div>
                
                {/* Filters */}
                <div className="flex flex-wrap gap-2">
                  <button 
                    className={`px-3 py-2 rounded-lg border transition-colors duration-300 
                              flex items-center gap-2 text-sm
                              ${selectedFilters.includes('frontend') 
                                ? 'bg-primary/20 border-primary/50 text-white' 
                                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'}`}
                    onClick={() => handleFilterToggle('frontend')}
                  >
                    <Code size={16} />
                    Frontend
                  </button>
                  <button 
                    className={`px-3 py-2 rounded-lg border transition-colors duration-300 
                              flex items-center gap-2 text-sm
                              ${selectedFilters.includes('backend') 
                                ? 'bg-primary/20 border-primary/50 text-white' 
                                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'}`}
                    onClick={() => handleFilterToggle('backend')}
                  >
                    <Code size={16} />
                    Backend
                  </button>
                  <button 
                    className={`px-3 py-2 rounded-lg border transition-colors duration-300 
                              flex items-center gap-2 text-sm
                              ${selectedFilters.includes('mobile') 
                                ? 'bg-primary/20 border-primary/50 text-white' 
                                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'}`}
                    onClick={() => handleFilterToggle('mobile')}
                  >
                    <Code size={16} />
                    Mobile
                  </button>
                </div>
                
                {/* Sort Options */}
                <div className="flex items-center gap-2">
                  <span className="text-white/70 text-sm">Sort by:</span>
                  <select
                    value={sortOption}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="bg-white/5 border border-white/10 text-white rounded-lg px-3 py-2 
                               focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  >
                    <option value="stars" className="bg-dark-bg">Most Stars</option>
                    <option value="forks" className="bg-dark-bg">Most Forks</option>
                    <option value="recent" className="bg-dark-bg">Recently Updated</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index * 0.05} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/70">No projects found matching your search criteria.</p>
            </div>
          )}

          <div className="flex justify-center mt-10">
            <button className="btn btn-ghost">
              Load More Projects
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
