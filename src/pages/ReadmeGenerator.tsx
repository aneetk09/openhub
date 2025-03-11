import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileEdit, Sparkles, BookOpen, GitBranch, 
  Star, Link2, Code, Terminal 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const ReadmeGenerator = () => {
  const [formState, setFormState] = useState({
    projectName: '',
    description: '',
    installation: '',
    usage: '',
    license: 'MIT',
    includeContributing: true,
    includeScreenshot: false,
    badges: ['npm', 'license'],
  });
  
  const [generatedReadme, setGeneratedReadme] = useState<string | null>(null);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormState(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleBadgeToggle = (badge: string) => {
    setFormState(prev => ({
      ...prev,
      badges: prev.badges.includes(badge)
        ? prev.badges.filter(b => b !== badge)
        : [...prev.badges, badge]
    }));
  };
  
  const generateReadme = () => {
    // Simple README template generation based on form state
    let readme = `# ${formState.projectName}\n\n`;
    
    // Add badges
    if (formState.badges.length > 0) {
      formState.badges.forEach(badge => {
        if (badge === 'npm') {
          readme += `[![npm](https://img.shields.io/npm/v/${formState.projectName.toLowerCase()})](https://www.npmjs.com/package/${formState.projectName.toLowerCase()}) `;
        } else if (badge === 'license') {
          readme += `[![License](https://img.shields.io/badge/license-${formState.license}-blue.svg)](LICENSE) `;
        }
      });
      readme += '\n\n';
    }
    
    readme += `${formState.description}\n\n`;
    
    if (formState.includeScreenshot) {
      readme += `## Screenshot\n\n![${formState.projectName}](screenshot.png)\n\n`;
    }
    
    readme += `## Installation\n\n\`\`\`bash\n${formState.installation || 'npm install ' + formState.projectName.toLowerCase()}\n\`\`\`\n\n`;
    
    readme += `## Usage\n\n\`\`\`javascript\n${formState.usage || '// Example usage code\n'}\n\`\`\`\n\n`;
    
    if (formState.includeContributing) {
      readme += `## Contributing\n\n1. Fork the project\n2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)\n3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)\n4. Push to the branch (\`git push origin feature/amazing-feature\`)\n5. Open a Pull Request\n\n`;
    }
    
    readme += `## License\n\nThis project is licensed under the ${formState.license} License - see the [LICENSE](LICENSE) file for details.\n`;
    
    setGeneratedReadme(readme);
  };
  
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
              README Generator
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Create professional README files for your open source projects
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FileEdit className="text-primary" size={20} />
                Project Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="projectName" className="block text-sm font-medium mb-1">
                    Project Name
                  </label>
                  <Input
                    id="projectName"
                    name="projectName"
                    value={formState.projectName}
                    onChange={handleChange}
                    placeholder="awesome-project"
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formState.description}
                    onChange={handleChange}
                    placeholder="A brief description of your project"
                    rows={3}
                  />
                </div>
                
                <div>
                  <label htmlFor="installation" className="block text-sm font-medium mb-1">
                    Installation Instructions
                  </label>
                  <Textarea
                    id="installation"
                    name="installation"
                    value={formState.installation}
                    onChange={handleChange}
                    placeholder="npm install my-package"
                    rows={2}
                  />
                </div>
                
                <div>
                  <label htmlFor="usage" className="block text-sm font-medium mb-1">
                    Usage Example
                  </label>
                  <Textarea
                    id="usage"
                    name="usage"
                    value={formState.usage}
                    onChange={handleChange}
                    placeholder="// Example code showing how to use your project"
                    rows={4}
                  />
                </div>
                
                <div>
                  <label htmlFor="license" className="block text-sm font-medium mb-1">
                    License
                  </label>
                  <select
                    id="license"
                    name="license"
                    value={formState.license}
                    onChange={handleChange}
                    className="w-full p-2 bg-muted rounded-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="MIT">MIT</option>
                    <option value="Apache-2.0">Apache 2.0</option>
                    <option value="GPL-3.0">GPL 3.0</option>
                    <option value="BSD-3-Clause">BSD 3-Clause</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">README Sections</label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="includeContributing" 
                        checked={formState.includeContributing}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange('includeContributing', checked as boolean)
                        }
                      />
                      <label 
                        htmlFor="includeContributing"
                        className="text-sm cursor-pointer"
                      >
                        Contributing Guidelines
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="includeScreenshot" 
                        checked={formState.includeScreenshot}
                        onCheckedChange={(checked) => 
                          handleCheckboxChange('includeScreenshot', checked as boolean)
                        }
                      />
                      <label 
                        htmlFor="includeScreenshot"
                        className="text-sm cursor-pointer"
                      >
                        Screenshot Placeholder
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Badges</label>
                  <div className="flex flex-wrap gap-2">
                    {['npm', 'license', 'stars', 'forks'].map(badge => (
                      <button
                        key={badge}
                        onClick={() => handleBadgeToggle(badge)}
                        className={`px-3 py-1 text-xs rounded-full transition-colors
                          ${formState.badges.includes(badge) 
                            ? 'bg-primary text-white' 
                            : 'bg-muted text-white/70 hover:bg-white/10'}
                        `}
                      >
                        {badge.charAt(0).toUpperCase() + badge.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4 gap-2" 
                  onClick={generateReadme}
                  disabled={!formState.projectName}
                >
                  <Sparkles size={16} />
                  Generate README
                </Button>
              </div>
            </motion.div>
            
            {/* Preview Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="text-primary" size={20} />
                README Preview
              </h2>
              
              {generatedReadme ? (
                <div className="bg-dark-bg rounded-lg p-4 font-mono text-sm h-[500px] overflow-y-auto">
                  <pre className="whitespace-pre-wrap">{generatedReadme}</pre>
                </div>
              ) : (
                <div className="bg-dark-bg rounded-lg p-4 h-[500px] flex items-center justify-center text-white/50">
                  Fill in the form and click "Generate README" to see a preview here
                </div>
              )}
              
              {generatedReadme && (
                <div className="mt-4 flex justify-end space-x-2">
                  <Button 
                    variant="secondary" 
                    onClick={() => {
                      navigator.clipboard.writeText(generatedReadme);
                      alert("README copied to clipboard!");
                    }}
                  >
                    Copy to Clipboard
                  </Button>
                  <Button onClick={() => {
                    const blob = new Blob([generatedReadme], {type: 'text/markdown'});
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'README.md';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                  }}>
                    Download README.md
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
          
          <div className="glass-card p-6 mb-12">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Star className="text-primary" size={20} />
              README Best Practices
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-white/5">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Link2 className="text-neon-blue" size={16} />
                  Clear Structure
                </h3>
                <p className="text-sm text-white/70">Use headings to organize your README and make information easy to find.</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Code className="text-neon-blue" size={16} />
                  Code Examples
                </h3>
                <p className="text-sm text-white/70">Include clear code examples that show how to use your project.</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <Terminal className="text-neon-blue" size={16} />
                  Installation Steps
                </h3>
                <p className="text-sm text-white/70">Provide detailed installation instructions with command-line examples.</p>
              </div>
              <div className="p-4 rounded-lg bg-white/5">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <GitBranch className="text-neon-blue" size={16} />
                  Contributing Guidelines
                </h3>
                <p className="text-sm text-white/70">Explain how others can contribute to your project to encourage collaboration.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReadmeGenerator;
