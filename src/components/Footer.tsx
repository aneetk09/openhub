
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-1 md:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                <div className="flex items-center justify-center text-xl font-bold text-white">
                  <span className="text-neon-blue">&lt;</span>
                  <span className="text-neon-purple">/&gt;</span>
                </div>
                <span className="bg-gradient-blue-purple bg-clip-text text-transparent">OpenSource</span>
                <span className="font-light">Explorer</span>
              </div>
              <p className="text-white/70 text-sm">
                Discover, learn, and contribute to open source projects with our interactive platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex space-x-4"
            >
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white font-medium mb-4"
            >
              Explore
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Community
                </a>
              </li>
            </motion.ul>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white font-medium mb-4"
            >
              Resources
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Newsletter
                </a>
              </li>
            </motion.ul>
          </div>

          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-white font-medium mb-4"
            >
              Company
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 text-sm">
                  Legal
                </a>
              </li>
            </motion.ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-white/50 text-sm"
          >
            © {new Date().getFullYear()} OpenSource Explorer. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
