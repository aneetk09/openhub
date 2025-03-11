
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Check, Heart, AlertCircle, Code, 
  HelpCircle, Link2, FileText 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface License {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  limitations: string[];
  conditions: string[];
  popularity: number; // 1-10 scale
  content: string;
}

const LicenseSelector = () => {
  const licenses: License[] = [
    {
      id: 'mit',
      name: 'MIT License',
      description: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      limitations: ['Liability', 'Warranty'],
      conditions: ['License and copyright notice'],
      popularity: 9,
      content: `MIT License

Copyright (c) [year] [fullname]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    },
    {
      id: 'apache-2.0',
      name: 'Apache License 2.0',
      description: 'A permissive license whose main conditions require preservation of copyright and license notices.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Patent use', 'Private use'],
      limitations: ['Trademark use', 'Liability', 'Warranty'],
      conditions: ['License and copyright notice', 'State changes'],
      popularity: 8,
      content: `Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

[Full license text is too long for this example]`
    },
    {
      id: 'gpl-3.0',
      name: 'GNU GPLv3',
      description: 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Patent use', 'Private use'],
      limitations: ['Liability', 'Warranty'],
      conditions: ['License and copyright notice', 'State changes', 'Disclose source', 'Same license'],
      popularity: 7,
      content: `GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

[Full license text is too long for this example]`
    },
    {
      id: 'bsd-3-clause',
      name: 'BSD 3-Clause License',
      description: 'A permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name of the project or its contributors to promote derived products without written consent.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      limitations: ['Liability', 'Warranty'],
      conditions: ['License and copyright notice'],
      popularity: 6,
      content: `BSD 3-Clause License

Copyright (c) [year], [fullname]
All rights reserved.

[Full license text is too long for this example]`
    }
  ];
  
  const [selectedLicense, setSelectedLicense] = useState<License | null>(null);
  const [filters, setFilters] = useState({
    commercial: false,
    patent: false,
    copyleft: false,
    permissive: true,
  });
  
  const toggleFilter = (key: keyof typeof filters) => {
    setFilters(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const filteredLicenses = licenses.filter(license => {
    if (filters.commercial && !license.permissions.includes('Commercial use')) return false;
    if (filters.patent && !license.permissions.includes('Patent use')) return false;
    if (filters.copyleft && !license.conditions.includes('Same license')) return false;
    if (filters.permissive && license.conditions.includes('Same license')) return false;
    return true;
  });
  
  const handleLicenseSelect = (license: License) => {
    setSelectedLicense(license);
  };
  
  const getFeaturedTags = (license: License) => {
    const tags = [];
    
    if (license.permissions.includes('Commercial use')) {
      tags.push('Commercial friendly');
    }
    
    if (license.conditions.includes('Same license')) {
      tags.push('Copyleft');
    } else {
      tags.push('Permissive');
    }
    
    if (license.permissions.includes('Patent use')) {
      tags.push('Patent protection');
    }
    
    return tags;
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
              Open Source License Selector
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/70 max-w-2xl mx-auto"
            >
              Choose the right license for your open source project
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="glass-card p-6 mb-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <HelpCircle className="text-primary" size={20} />
                  What are you looking for?
                </h2>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <button
                      onClick={() => toggleFilter('commercial')}
                      className={`p-2 rounded-lg flex items-center gap-2 transition-colors w-full
                        ${filters.commercial ? 'bg-primary/20 text-primary' : 'bg-white/5 hover:bg-white/10'}`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center
                        ${filters.commercial ? 'bg-primary' : 'border border-white/30'}`}
                      >
                        {filters.commercial && <Check size={12} />}
                      </div>
                      <span>Commercial use</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center">
                    <button
                      onClick={() => toggleFilter('patent')}
                      className={`p-2 rounded-lg flex items-center gap-2 transition-colors w-full
                        ${filters.patent ? 'bg-primary/20 text-primary' : 'bg-white/5 hover:bg-white/10'}`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center
                        ${filters.patent ? 'bg-primary' : 'border border-white/30'}`}
                      >
                        {filters.patent && <Check size={12} />}
                      </div>
                      <span>Patent protection</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center">
                    <button
                      onClick={() => toggleFilter('permissive')}
                      className={`p-2 rounded-lg flex items-center gap-2 transition-colors w-full
                        ${filters.permissive ? 'bg-primary/20 text-primary' : 'bg-white/5 hover:bg-white/10'}`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center
                        ${filters.permissive ? 'bg-primary' : 'border border-white/30'}`}
                      >
                        {filters.permissive && <Check size={12} />}
                      </div>
                      <span>Permissive</span>
                    </button>
                  </div>
                  
                  <div className="flex items-center">
                    <button
                      onClick={() => toggleFilter('copyleft')}
                      className={`p-2 rounded-lg flex items-center gap-2 transition-colors w-full
                        ${filters.copyleft ? 'bg-primary/20 text-primary' : 'bg-white/5 hover:bg-white/10'}`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center
                        ${filters.copyleft ? 'bg-primary' : 'border border-white/30'}`}
                      >
                        {filters.copyleft && <Check size={12} />}
                      </div>
                      <span>Copyleft/Share alike</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <AlertCircle className="text-primary" size={20} />
                  Quick Guide
                </h2>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="font-bold mb-1">Permissive Licenses</h3>
                    <p className="text-white/70">
                      Allow for maximum freedom with few restrictions. Great for libraries and frameworks.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold mb-1">Copyleft Licenses</h3>
                    <p className="text-white/70">
                      Require derivative works to use the same license. Ensures software remains free.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-bold mb-1">Not a Lawyer?</h3>
                    <p className="text-white/70">
                      This tool is a starting point. For legal advice, consult with a professional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="glass-card p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">
                  Recommended Licenses
                </h2>
                
                <div className="space-y-4">
                  {filteredLicenses.length === 0 ? (
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <p>No licenses match your current filters</p>
                    </div>
                  ) : (
                    filteredLicenses.map(license => (
                      <div
                        key={license.id}
                        className={`
                          border rounded-lg p-4 transition-colors cursor-pointer
                          ${selectedLicense?.id === license.id 
                            ? 'border-primary bg-primary/10' 
                            : 'border-white/10 hover:border-white/30 bg-white/5'}
                        `}
                        onClick={() => handleLicenseSelect(license)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-lg">{license.name}</h3>
                          <div className="flex items-center">
                            {[...Array(Math.round(license.popularity / 2))].map((_, i) => (
                              <Heart
                                key={i}
                                size={12}
                                className="text-neon-purple fill-neon-purple"
                              />
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-sm text-white/70 mb-3">
                          {license.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {getFeaturedTags(license).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-white/10 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <h4 className="font-bold text-primary mb-1 flex items-center gap-1">
                              <Check size={12} />
                              Can
                            </h4>
                            <ul className="space-y-1">
                              {license.permissions.slice(0, 3).map((perm, i) => (
                                <li key={i} className="text-white/70 flex items-center gap-1">
                                  <Check size={10} className="text-green-400" />
                                  {perm}
                                </li>
                              ))}
                              {license.permissions.length > 3 && (
                                <li className="text-white/50 text-xs">+{license.permissions.length - 3} more</li>
                              )}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-bold text-neon-purple mb-1 flex items-center gap-1">
                              <AlertCircle size={12} />
                              Cannot
                            </h4>
                            <ul className="space-y-1">
                              {license.limitations.slice(0, 3).map((limit, i) => (
                                <li key={i} className="text-white/70 flex items-center gap-1">
                                  <AlertCircle size={10} className="text-red-400" />
                                  {limit}
                                </li>
                              ))}
                              {license.limitations.length > 3 && (
                                <li className="text-white/50 text-xs">+{license.limitations.length - 3} more</li>
                              )}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-bold text-neon-blue mb-1 flex items-center gap-1">
                              <Code size={12} />
                              Must
                            </h4>
                            <ul className="space-y-1">
                              {license.conditions.slice(0, 3).map((condition, i) => (
                                <li key={i} className="text-white/70 flex items-center gap-1">
                                  <Link2 size={10} className="text-blue-400" />
                                  {condition}
                                </li>
                              ))}
                              {license.conditions.length > 3 && (
                                <li className="text-white/50 text-xs">+{license.conditions.length - 3} more</li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
              
              {selectedLicense && (
                <div className="glass-card p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                      <FileText className="text-primary" size={20} />
                      License Preview: {selectedLicense.name}
                    </h2>
                    
                    <div className="flex gap-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                navigator.clipboard.writeText(selectedLicense.content);
                                alert("License copied to clipboard!");
                              }}
                            >
                              Copy
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Copy license text</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              size="sm"
                              onClick={() => {
                                const blob = new Blob([selectedLicense.content], {type: 'text/plain'});
                                const url = URL.createObjectURL(blob);
                                const a = document.createElement('a');
                                a.href = url;
                                a.download = 'LICENSE';
                                document.body.appendChild(a);
                                a.click();
                                document.body.removeChild(a);
                              }}
                            >
                              Download
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Download LICENSE file</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  
                  <div className="bg-dark-bg rounded-lg p-4 font-mono text-sm h-[300px] overflow-y-auto">
                    <pre className="whitespace-pre-wrap">{selectedLicense.content}</pre>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="glass-card p-6 text-center">
            <h2 className="text-xl font-bold mb-2">Need more guidance?</h2>
            <p className="text-white/70 mb-4">Check out these resources for more information about open source licenses.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://choosealicense.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Choose a License
              </a>
              <a 
                href="https://opensource.org/licenses/" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Open Source Initiative
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LicenseSelector;
