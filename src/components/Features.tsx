
import { motion } from 'framer-motion';
import { FileText, GitBranch, Award, BookOpen, Code, Settings } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-blue-purple bg-clip-text text-transparent"
          >
            Interactive Tools for Open Source
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/80"
          >
            Everything you need to discover, learn, and contribute to open source projects
            all in one platform.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <FeatureCard
            icon={<FileText size={24} />}
            title="README Generator"
            description="Create professional README files for your projects with our interactive generator."
            variants={item}
            color="neon-blue"
          />
          <FeatureCard
            icon={<GitBranch size={24} />}
            title="Git Learning Hub"
            description="Learn Git commands with interactive challenges and visual explanations."
            variants={item}
            color="neon-purple"
          />
          <FeatureCard
            icon={<Award size={24} />}
            title="License Selector"
            description="Choose the right open source license for your project with our comparison tool."
            variants={item}
            color="neon-blue"
          />
          <FeatureCard
            icon={<BookOpen size={24} />}
            title="Documentation Tools"
            description="Create and maintain comprehensive documentation for your open source projects."
            variants={item}
            color="neon-purple"
          />
          <FeatureCard
            icon={<Code size={24} />}
            title="Project Explorer"
            description="Discover and search for open source projects that match your interests and skills."
            variants={item}
            color="neon-blue"
          />
          <FeatureCard
            icon={<Settings size={24} />}
            title="Contribution Tracker"
            description="Track your open source contributions and visualize your progress over time."
            variants={item}
            color="neon-purple"
          />
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description,
  variants,
  color
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string,
  variants: any,
  color: "neon-blue" | "neon-purple"
}) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -5 }}
      className="glass-card p-6 flex flex-col h-full group"
    >
      <div className={`p-3 mb-4 rounded-full bg-white/5 w-fit 
                     border border-${color}/30 group-hover:border-${color}/50
                     transition-colors duration-300`}>
        <div className={`text-${color}`}>{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-white/70 flex-grow">{description}</p>
      <div className="mt-4 flex items-center text-sm text-primary font-medium">
        <span>Learn more</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </div>
    </motion.div>
  );
};

export default Features;
