
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, Check, Shield, Users, CopyCheck, Download, Copy, HelpCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from '../hooks/use-toast';

interface License {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  limitations: string[];
  conditions: string[];
  popular: boolean;
}

const LicenseSelector = () => {
  const [selectedLicense, setSelectedLicense] = useState<License | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'finder' | 'comparison'>('finder');
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  
  const licenses: License[] = [
    {
      id: 'mit',
      name: 'MIT License',
      description: 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      limitations: ['Liability', 'Warranty'],
      conditions: ['License and copyright notice'],
      popular: true
    },
    {
      id: 'apache-2.0',
      name: 'Apache License 2.0',
      description: 'A permissive license that also provides an express grant of patent rights from contributors to users.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Patent use', 'Private use'],
      limitations: ['Trademark use', 'Liability', 'Warranty'],
      conditions: ['License and copyright notice', 'State changes', 'Disclosure of source'],
      popular: true
    },
    {
      id: 'gpl-3.0',
      name: 'GNU General Public License v3.0',
      description: 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Patent use', 'Private use'],
      limitations: ['Liability', 'Warranty'],
      conditions: ['License and copyright notice', 'State changes', 'Disclose source', 'Same license', 'Network use is distribution'],
      popular: true
    },
    {
      id: 'bsd-2-clause',
      name: 'BSD 2-Clause License',
      description: 'A permissive license that comes in two variants, the BSD 2-Clause and BSD 3-Clause.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      limitations: ['Liability', 'Warranty'],
      conditions: ['License and copyright notice'],
      popular: false
    },
    {
      id: 'bsd-3-clause',
      name: 'BSD 3-Clause License',
      description: 'A permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name of the contributor to promote derived products without written consent.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Private use'],
      limitations: ['Liability', 'Warranty'],
      conditions: ['License and copyright notice', 'No endorsement'],
      popular: false
    },
    {
      id: 'lgpl-3.0',
      name: 'GNU Lesser General Public License v3.0',
      description: 'Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications.',
      permissions: ['Commercial use', 'Modification', 'Distribution', 'Patent use', 'Private use'],
      limitations: ['Liability', 'Warranty'],
      conditions: ['License and copyright notice', 'Disclose source', 'State changes', 'Same license (library)'],
      popular: false
    }
  ];
  
  const filteredLicenses = licenses.filter(license => 
    license.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    license.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const getLicenseText = (licenseId: string): string => {
    // Simplified license text for demo purposes
    if (licenseId === 'mit') {
      return `MIT License

Copyright (c) ${new Date().getFullYear()} Your Name

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
SOFTWARE.`;
    }
    
    return `This is a placeholder for the ${licenseId.toUpperCase()} license text.
    
In a real application, this would contain the full text of the selected license.`;
  };
  
  const copyToClipboard = () => {
    if (!selectedLicense) return;
    
    navigator.clipboard.writeText(getLicenseText(selectedLicense.id));
    toast({
      title: "Copied to clipboard!",
      description: `${selectedLicense.name} has been copied to your clipboard.`,
    });
  };
  
  const downloadLicense = () => {
    if (!selectedLicense) return;
    
    const element = document.createElement('a');
    const file = new Blob([getLicenseText(selectedLicense.id)], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'LICENSE';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Downloaded!",
      description: "LICENSE file has been downloaded.",
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
              Open Source License Selector
            </h1>
            <p className="text-white/80">
              Choose the right license for your open source project.
              Compare different licenses and understand their permissions, conditions, and limitations.
            </p>
          </motion.div>
          
          <div className="flex mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('finder')}
              className={`pb-3 px-4 font-medium text-sm whitespace-nowrap ${
                activeTab === 'finder' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-white/70 hover:text-white/90'
              }`}
            >
              <span className="flex items-center gap-2">
                <Search size={18} />
                License Finder
              </span>
            </button>
            <button
              onClick={() => setActiveTab('comparison')}
              className={`pb-3 px-4 font-medium text-sm whitespace-nowrap ${
                activeTab === 'comparison' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-white/70 hover:text-white/90'
              }`}
            >
              <span className="flex items-center gap-2">
                <FileText size={18} />
                License Comparison
              </span>
            </button>
          </div>
          
          {activeTab === 'finder' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-6"
                >
                  <h2 className="text-lg font-bold mb-4">Find a License</h2>
                  
                  <div className="mb-6">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-white/50">
                        <Search size={18} />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Search licenses..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 pr-4 py-2 w-full bg-white/5 border border-white/10 rounded-lg 
                                 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary 
                                 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-white/50 uppercase">Popular Licenses</h3>
                    {filteredLicenses
                      .filter(license => license.popular)
                      .map((license) => (
                        <button
                          key={license.id}
                          onClick={() => setSelectedLicense(license)}
                          className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                            selectedLicense?.id === license.id 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-white/5 hover:bg-white/10 text-white'
                          }`}
                        >
                          <span>{license.name}</span>
                          {selectedLicense?.id === license.id && <Check size={16} />}
                        </button>
                      ))}
                    
                    {filteredLicenses.some(license => !license.popular) && (
                      <>
                        <h3 className="text-sm font-medium text-white/50 uppercase mt-4">Other Licenses</h3>
                        {filteredLicenses
                          .filter(license => !license.popular)
                          .map((license) => (
                            <button
                              key={license.id}
                              onClick={() => setSelectedLicense(license)}
                              className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors ${
                                selectedLicense?.id === license.id 
                                  ? 'bg-primary/20 text-primary' 
                                  : 'bg-white/5 hover:bg-white/10 text-white'
                              }`}
                            >
                              <span>{license.name}</span>
                              {selectedLicense?.id === license.id && <Check size={16} />}
                            </button>
                          ))}
                      </>
                    )}
                    
                    {filteredLicenses.length === 0 && (
                      <div className="text-center py-8">
                        <Search size={32} className="mx-auto mb-2 text-white/30" />
                        <p className="text-white/50">No licenses found matching your search.</p>
                      </div>
                    )}
                  </div>
                </motion.div>
                
                {selectedLicense && (
                  <div className="glass-card p-6 space-y-4">
                    <h3 className="font-bold">How to apply this license:</h3>
                    <ol className="space-y-2 text-white/80 list-decimal pl-4">
                      <li>Download the LICENSE file</li>
                      <li>Place it in the root of your project repository</li>
                      <li>Include a license notice in your README.md</li>
                      <li>Add copyright notices to your source files</li>
                    </ol>
                    
                    <div className="pt-4 flex flex-col sm:flex-row gap-2">
                      <button 
                        onClick={copyToClipboard}
                        className="btn btn-ghost flex-1 flex items-center justify-center gap-2"
                      >
                        <Copy size={16} />
                        <span>Copy License</span>
                      </button>
                      <button 
                        onClick={downloadLicense}
                        className="btn btn-primary flex-1 flex items-center justify-center gap-2"
                      >
                        <Download size={16} />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                {selectedLicense ? (
                  <div className="glass-card p-6">
                    <h2 className="text-2xl font-bold mb-2">{selectedLicense.name}</h2>
                    <p className="text-white/70 mb-6">{selectedLicense.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div>
                        <h3 className="flex items-center gap-2 font-medium mb-3 text-green-400">
                          <Check size={18} />
                          <span>Permissions</span>
                        </h3>
                        <ul className="space-y-2">
                          {selectedLicense.permissions.map((permission, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <span className="w-1 h-1 rounded-full bg-green-400"></span>
                              <span>{permission}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="flex items-center gap-2 font-medium mb-3 text-yellow-400">
                          <CopyCheck size={18} />
                          <span>Conditions</span>
                        </h3>
                        <ul className="space-y-2">
                          {selectedLicense.conditions.map((condition, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
                              <span>{condition}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="flex items-center gap-2 font-medium mb-3 text-red-400">
                          <Shield size={18} />
                          <span>Limitations</span>
                        </h3>
                        <ul className="space-y-2">
                          {selectedLicense.limitations.map((limitation, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm">
                              <span className="w-1 h-1 rounded-full bg-red-400"></span>
                              <span>{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-dark-bg border border-white/10 rounded-lg p-4 font-mono text-sm max-h-[400px] overflow-auto whitespace-pre-wrap">
                      {getLicenseText(selectedLicense.id)}
                    </div>
                  </div>
                ) : (
                  <div className="glass-card p-12 text-center h-full flex flex-col items-center justify-center">
                    <FileText size={64} className="text-white/20 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Select a License</h3>
                    <p className="text-white/60 max-w-md">
                      Choose a license from the list to see its details, permissions,
                      conditions, and limitations.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 overflow-hidden"
            >
              <h2 className="text-xl font-bold mb-4">License Comparison</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-3 px-4 font-medium sticky left-0 bg-dark-bg">License</th>
                      <th className="py-3 px-4 font-medium text-center">
                        <div className="flex items-center justify-center gap-1">
                          <span>Permissions</span>
                          <div className="relative">
                            <HelpCircle 
                              size={14} 
                              className="text-white/50 cursor-help"
                              onMouseEnter={() => setShowTooltip('permissions')}
                              onMouseLeave={() => setShowTooltip(null)}
                            />
                            {showTooltip === 'permissions' && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-dark-bg border border-white/10 rounded-lg text-xs z-10">
                                What you can do with the licensed material
                              </div>
                            )}
                          </div>
                        </div>
                      </th>
                      <th className="py-3 px-4 font-medium text-center">
                        <div className="flex items-center justify-center gap-1">
                          <span>Conditions</span>
                          <div className="relative">
                            <HelpCircle 
                              size={14} 
                              className="text-white/50 cursor-help"
                              onMouseEnter={() => setShowTooltip('conditions')}
                              onMouseLeave={() => setShowTooltip(null)}
                            />
                            {showTooltip === 'conditions' && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-dark-bg border border-white/10 rounded-lg text-xs z-10">
                                Requirements you must adhere to
                              </div>
                            )}
                          </div>
                        </div>
                      </th>
                      <th className="py-3 px-4 font-medium text-center">
                        <div className="flex items-center justify-center gap-1">
                          <span>Limitations</span>
                          <div className="relative">
                            <HelpCircle 
                              size={14} 
                              className="text-white/50 cursor-help"
                              onMouseEnter={() => setShowTooltip('limitations')}
                              onMouseLeave={() => setShowTooltip(null)}
                            />
                            {showTooltip === 'limitations' && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-dark-bg border border-white/10 rounded-lg text-xs z-10">
                                What you cannot do with the licensed material
                              </div>
                            )}
                          </div>
                        </div>
                      </th>
                      <th className="py-3 px-4 font-medium text-center">Required for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {licenses.map((license) => (
                      <tr 
                        key={license.id} 
                        className={`border-b border-white/10 hover:bg-white/5 ${
                          selectedLicense?.id === license.id ? 'bg-primary/10' : ''
                        }`}
                      >
                        <td 
                          className={`py-4 px-4 font-medium sticky left-0 bg-dark-bg ${
                            selectedLicense?.id === license.id ? 'text-primary' : ''
                          }`}
                        >
                          <button
                            onClick={() => {
                              setSelectedLicense(license);
                              setActiveTab('finder');
                            }}
                            className="text-left hover:underline flex items-center"
                          >
                            {license.name}
                            {license.popular && (
                              <span className="ml-2 text-xs bg-white/10 text-white/70 px-1.5 py-0.5 rounded-full">
                                Popular
                              </span>
                            )}
                          </button>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap justify-center gap-1">
                            {['Commercial use', 'Modification', 'Distribution', 'Private use', 'Patent use'].map((perm) => (
                              <span
                                key={perm}
                                className={`px-1.5 py-0.5 rounded-full text-xs ${
                                  license.permissions.includes(perm)
                                    ? 'bg-green-500/20 text-green-300'
                                    : 'bg-white/5 text-white/30'
                                }`}
                              >
                                {perm}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap justify-center gap-1">
                            {['License and copyright notice', 'State changes', 'Disclose source', 'Same license', 'Network use is distribution'].map((cond) => (
                              <span
                                key={cond}
                                className={`px-1.5 py-0.5 rounded-full text-xs ${
                                  license.conditions.includes(cond)
                                    ? 'bg-yellow-500/20 text-yellow-300'
                                    : 'bg-white/5 text-white/30'
                                }`}
                              >
                                {cond.length > 15 ? `${cond.substring(0, 15)}...` : cond}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap justify-center gap-1">
                            {['Liability', 'Warranty', 'Trademark use'].map((limit) => (
                              <span
                                key={limit}
                                className={`px-1.5 py-0.5 rounded-full text-xs ${
                                  license.limitations.includes(limit)
                                    ? 'bg-red-500/20 text-red-300'
                                    : 'bg-white/5 text-white/30'
                                }`}
                              >
                                {limit}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-sm text-center">
                          {license.id === 'mit' && 'Simple, permissive projects'}
                          {license.id === 'apache-2.0' && 'Patent protection'}
                          {license.id === 'gpl-3.0' && 'Strong copyleft protection'}
                          {license.id === 'bsd-2-clause' && 'Simple, minimal restrictions'}
                          {license.id === 'bsd-3-clause' && 'No endorsement required'}
                          {license.id === 'lgpl-3.0' && 'Libraries with code sharing'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LicenseSelector;
