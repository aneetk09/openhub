
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Code, Link, Image, List, Check, Copy, Download } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from '../hooks/use-toast';

const ReadmeGenerator = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    installation: '',
    usage: '',
    features: [] as string[],
    technologies: [] as string[],
    contributing: '',
    license: 'MIT',
    repositoryUrl: '',
    demoUrl: '',
    logoUrl: '',
  });
  
  const [newFeature, setNewFeature] = useState('');
  const [newTechnology, setNewTechnology] = useState('');
  const [previewMarkdown, setPreviewMarkdown] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'preview'>('form');
  
  const addFeature = () => {
    if (newFeature.trim()) {
      setFormData({
        ...formData,
        features: [...formData.features, newFeature.trim()]
      });
      setNewFeature('');
    }
  };
  
  const removeFeature = (index: number) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index)
    });
  };
  
  const addTechnology = () => {
    if (newTechnology.trim()) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, newTechnology.trim()]
      });
      setNewTechnology('');
    }
  };
  
  const removeTechnology = (index: number) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter((_, i) => i !== index)
    });
  };
  
  const generateReadme = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const markdown = `
# ${formData.projectName}

${formData.logoUrl ? `<p align="center">
  <img src="${formData.logoUrl}" alt="${formData.projectName} logo" width="200">
</p>` : ''}

## Description

${formData.description}

${formData.demoUrl ? `## Demo

[View Live Demo](${formData.demoUrl})` : ''}

${formData.features.length > 0 ? `## Features

${formData.features.map(feature => `- ${feature}`).join('\n')}` : ''}

${formData.technologies.length > 0 ? `## Technologies

${formData.technologies.map(tech => `- ${tech}`).join('\n')}` : ''}

## Installation

\`\`\`bash
${formData.installation}
\`\`\`

## Usage

${formData.usage}

${formData.contributing ? `## Contributing

${formData.contributing}` : ''}

## License

This project is licensed under the ${formData.license} License${formData.license === 'MIT' ? ' - see the [LICENSE](LICENSE) file for details.' : '.'}

${formData.repositoryUrl ? `## Repository

[GitHub Repository](${formData.repositoryUrl})` : ''}
`;
      
      setPreviewMarkdown(markdown);
      setActiveTab('preview');
      setIsGenerating(false);
      
      toast({
        title: "README Generated!",
        description: "Your README has been generated successfully.",
      });
    }, 1500);
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(previewMarkdown);
    toast({
      title: "Copied to clipboard!",
      description: "README markdown has been copied to your clipboard.",
    });
  };
  
  const downloadReadme = () => {
    const element = document.createElement('a');
    const file = new Blob([previewMarkdown], {type: 'text/markdown'});
    element.href = URL.createObjectURL(file);
    element.download = 'README.md';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Downloaded!",
      description: "README.md file has been downloaded.",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-6 pb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-blue-purple bg-clip-text text-transparent">
              README Generator
            </h1>
            <p className="text-white/80">
              Create professional README files for your GitHub projects with our interactive generator.
              Fill in the form below and we'll create a markdown file for you.
            </p>
          </motion.div>
          
          <div className="glass-card p-6 md:p-8">
            <div className="flex mb-6 border-b border-white/10">
              <button
                onClick={() => setActiveTab('form')}
                className={`pb-3 px-4 font-medium text-sm ${
                  activeTab === 'form' 
                    ? 'text-primary border-b-2 border-primary -mb-px' 
                    : 'text-white/70 hover:text-white/90'
                }`}
              >
                <span className="flex items-center gap-2">
                  <FileText size={18} />
                  Editor
                </span>
              </button>
              <button
                onClick={() => setActiveTab('preview')}
                disabled={!previewMarkdown}
                className={`pb-3 px-4 font-medium text-sm ${
                  activeTab === 'preview' 
                    ? 'text-primary border-b-2 border-primary -mb-px' 
                    : previewMarkdown 
                      ? 'text-white/70 hover:text-white/90' 
                      : 'text-white/30 cursor-not-allowed'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Code size={18} />
                  Preview
                </span>
              </button>
            </div>
            
            {activeTab === 'form' ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    {/* Basic Information */}
                    <div>
                      <h3 className="font-medium mb-4 flex items-center gap-2">
                        <FileText size={18} className="text-primary" />
                        Basic Information
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-white/70 mb-1">
                            Project Name*
                          </label>
                          <input 
                            type="text" 
                            value={formData.projectName}
                            onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                            placeholder="My Awesome Project" 
                            className="bg-white/5 border border-white/10 rounded-lg p-2 w-full 
                                    focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm text-white/70 mb-1">
                            Description*
                          </label>
                          <textarea 
                            value={formData.description}
                            onChange={(e) => setFormData({...formData, description: e.target.value})}
                            placeholder="A brief description of what your project does and its purpose" 
                            rows={3}
                            className="bg-white/5 border border-white/10 rounded-lg p-2 w-full 
                                    focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Features and Technologies */}
                    <div>
                      <h3 className="font-medium mb-4 flex items-center gap-2">
                        <List size={18} className="text-primary" />
                        Features & Technologies
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-white/70 mb-1">
                            Features
                          </label>
                          <div className="flex gap-2">
                            <input 
                              type="text" 
                              value={newFeature}
                              onChange={(e) => setNewFeature(e.target.value)}
                              placeholder="Add a feature" 
                              className="bg-white/5 border border-white/10 rounded-lg p-2 flex-grow 
                                      focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                              onKeyDown={(e) => e.key === 'Enter' && addFeature()}
                            />
                            <button 
                              onClick={addFeature}
                              className="btn btn-primary px-3"
                            >
                              Add
                            </button>
                          </div>
                          
                          {formData.features.length > 0 && (
                            <div className="mt-2 space-y-1">
                              {formData.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                                  <Check size={14} className="text-green-500 flex-shrink-0" />
                                  <span className="text-sm flex-grow">{feature}</span>
                                  <button 
                                    onClick={() => removeFeature(index)}
                                    className="text-red-400 hover:text-red-300"
                                  >
                                    Remove
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm text-white/70 mb-1">
                            Technologies
                          </label>
                          <div className="flex gap-2">
                            <input 
                              type="text" 
                              value={newTechnology}
                              onChange={(e) => setNewTechnology(e.target.value)}
                              placeholder="Add a technology" 
                              className="bg-white/5 border border-white/10 rounded-lg p-2 flex-grow 
                                      focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                              onKeyDown={(e) => e.key === 'Enter' && addTechnology()}
                            />
                            <button 
                              onClick={addTechnology}
                              className="btn btn-primary px-3"
                            >
                              Add
                            </button>
                          </div>
                          
                          {formData.technologies.length > 0 && (
                            <div className="mt-2 space-y-1">
                              {formData.technologies.map((tech, index) => (
                                <div key={index} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg">
                                  <Code size={14} className="text-neon-blue flex-shrink-0" />
                                  <span className="text-sm flex-grow">{tech}</span>
                                  <button 
                                    onClick={() => removeTechnology(index)}
                                    className="text-red-400 hover:text-red-300"
                                  >
                                    Remove
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Installation and Usage */}
                    <div>
                      <h3 className="font-medium mb-4 flex items-center gap-2">
                        <Code size={18} className="text-primary" />
                        Installation & Usage
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-white/70 mb-1">
                            Installation Steps*
                          </label>
                          <textarea 
                            value={formData.installation}
                            onChange={(e) => setFormData({...formData, installation: e.target.value})}
                            placeholder="npm install\nnpm start" 
                            rows={3}
                            className="bg-white/5 border border-white/10 rounded-lg p-2 w-full font-mono text-sm
                                    focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm text-white/70 mb-1">
                            Usage Instructions*
                          </label>
                          <textarea 
                            value={formData.usage}
                            onChange={(e) => setFormData({...formData, usage: e.target.value})}
                            placeholder="How to use your project, with examples if possible." 
                            rows={3}
                            className="bg-white/5 border border-white/10 rounded-lg p-2 w-full
                                    focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* URLs and License */}
                    <div>
                      <h3 className="font-medium mb-4 flex items-center gap-2">
                        <Link size={18} className="text-primary" />
                        Links & License
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm text-white/70 mb-1">
                            GitHub Repository URL
                          </label>
                          <input 
                            type="url" 
                            value={formData.repositoryUrl}
                            onChange={(e) => setFormData({...formData, repositoryUrl: e.target.value})}
                            placeholder="https://github.com/username/repo" 
                            className="bg-white/5 border border-white/10 rounded-lg p-2 w-full 
                                    focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm text-white/70 mb-1">
                            Demo URL
                          </label>
                          <input 
                            type="url" 
                            value={formData.demoUrl}
                            onChange={(e) => setFormData({...formData, demoUrl: e.target.value})}
                            placeholder="https://your-demo-url.com" 
                            className="bg-white/5 border border-white/10 rounded-lg p-2 w-full 
                                    focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm text-white/70 mb-1">
                            Logo URL
                          </label>
                          <input 
                            type="url" 
                            value={formData.logoUrl}
                            onChange={(e) => setFormData({...formData, logoUrl: e.target.value})}
                            placeholder="https://url-to-your-logo.png" 
                            className="bg-white/5 border border-white/10 rounded-lg p-2 w-full 
                                    focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm text-white/70 mb-1">
                            License
                          </label>
                          <select 
                            value={formData.license}
                            onChange={(e) => setFormData({...formData, license: e.target.value})}
                            className="bg-white/5 border border-white/10 rounded-lg p-2 w-full 
                                    focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                          >
                            <option value="MIT">MIT</option>
                            <option value="Apache-2.0">Apache 2.0</option>
                            <option value="GPL-3.0">GPL 3.0</option>
                            <option value="BSD-3-Clause">BSD 3-Clause</option>
                            <option value="BSD-2-Clause">BSD 2-Clause</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button 
                    onClick={generateReadme}
                    disabled={isGenerating || !formData.projectName || !formData.description || !formData.installation || !formData.usage}
                    className="btn btn-primary px-8 py-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isGenerating ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating...
                      </>
                    ) : (
                      <>
                        <span>Generate README</span>
                        <FileText size={16} className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {previewMarkdown ? (
                  <>
                    <div className="flex justify-end gap-2 mb-4">
                      <button 
                        onClick={copyToClipboard}
                        className="btn btn-ghost btn-sm flex items-center gap-2"
                      >
                        <Copy size={14} />
                        <span>Copy</span>
                      </button>
                      <button 
                        onClick={downloadReadme}
                        className="btn btn-primary btn-sm flex items-center gap-2"
                      >
                        <Download size={14} />
                        <span>Download</span>
                      </button>
                    </div>
                    
                    <div className="bg-dark-bg border border-white/10 rounded-lg p-6 markdown-preview font-mono text-sm whitespace-pre-wrap overflow-auto max-h-[60vh]">
                      {previewMarkdown}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <FileText size={48} className="mx-auto mb-4 text-white/30" />
                    <h3 className="text-lg font-medium mb-1">No README generated yet</h3>
                    <p className="text-white/50">
                      Fill out the form and click "Generate README" to see the preview.
                    </p>
                    <button 
                      onClick={() => setActiveTab('form')}
                      className="btn btn-ghost mt-4"
                    >
                      Back to Editor
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReadmeGenerator;
