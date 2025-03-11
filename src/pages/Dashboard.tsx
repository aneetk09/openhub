
import { motion } from 'framer-motion';
import { Github, GitBranch, Star, GitPullRequest, FileCode, BookOpen, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  
  if (!user) return null; // This shouldn't happen due to ProtectedRoute
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 px-6">
        <DashboardHero user={user} />
        <UserStats stats={user.stats} />
        <LearningProgress />
        <RecentActivity />
      </main>
      <Footer />
    </div>
  );
};

const DashboardHero = ({ user }: { user: any }) => {
  const initials = user.username.slice(0, 2).toUpperCase();
  
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-full p-2"
          >
            <div className="w-20 h-20 md:w-32 md:h-32 bg-gradient-blue-purple rounded-full flex items-center justify-center text-2xl md:text-4xl font-bold">
              {initials}
            </div>
          </motion.div>
          
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-3xl font-bold"
            >
              Welcome back, <span className="bg-gradient-blue-purple bg-clip-text text-transparent">{user.username}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/70 mt-2"
            >
              Your open source journey continues. Keep exploring and contributing!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mt-4"
            >
              <div className="glass-card px-3 py-1 text-sm flex items-center gap-1">
                <Github size={14} className="text-neon-blue" />
                <span>{user.username}</span>
              </div>
              
              <div className="glass-card px-3 py-1 text-sm flex items-center gap-1">
                <Star size={14} className="text-neon-purple" />
                <span>{user.stats.stars} stars earned</span>
              </div>
              
              <div className="glass-card px-3 py-1 text-sm flex items-center gap-1">
                <GitPullRequest size={14} className="text-neon-blue" />
                <span>{user.stats.pullRequests} PRs merged</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const UserStats = ({ stats }: { stats: any }) => {
  const userStats = [
    { title: 'Repositories', value: stats.repos, icon: <Github size={24} className="text-neon-blue" /> },
    { title: 'Pull Requests', value: stats.pullRequests, icon: <GitPullRequest size={24} className="text-neon-purple" /> },
    { title: 'Contributions', value: stats.contributions, icon: <GitBranch size={24} className="text-neon-blue" /> },
    { title: 'Stars Earned', value: stats.stars, icon: <Star size={24} className="text-neon-purple" /> },
  ];
  
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Your Stats</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {userStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white/5">
                  {stat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{stat.value}</h3>
                  <p className="text-white/70 text-sm">{stat.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LearningProgress = () => {
  const courses = [
    { 
      id: 1, 
      title: 'Git Basics', 
      progress: 80, 
      icon: <GitBranch size={20} className="text-neon-blue" />,
      totalLessons: 10,
      completedLessons: 8
    },
    { 
      id: 2, 
      title: 'Open Source Contribution', 
      progress: 45, 
      icon: <FileCode size={20} className="text-neon-purple" />,
      totalLessons: 12,
      completedLessons: 5
    },
    { 
      id: 3, 
      title: 'GitHub Actions', 
      progress: 30, 
      icon: <Github size={20} className="text-neon-blue" />,
      totalLessons: 8,
      completedLessons: 2
    },
  ];
  
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Learning Progress</h2>
          <button className="btn btn-ghost text-sm">View all courses</button>
        </div>
        
        <div className="space-y-4">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-4"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-white/5">
                  {course.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{course.title}</h3>
                    <span className="text-sm text-white/70">
                      {course.completedLessons}/{course.totalLessons} lessons
                    </span>
                  </div>
                  <div className="mt-2 h-2 bg-white/10 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full rounded-full ${
                        course.progress < 40 
                          ? 'bg-red-500' 
                          : course.progress < 70 
                            ? 'bg-yellow-500' 
                            : 'bg-green-500'
                      }`}
                    />
                  </div>
                </div>
                <button className="btn btn-ghost btn-sm">Continue</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'pull_request',
      repo: 'react',
      action: 'opened a pull request',
      title: 'Fix memory leak in useEffect hook',
      time: '2 hours ago',
      icon: <GitPullRequest size={16} className="text-neon-blue" />
    },
    {
      id: 2,
      type: 'star',
      repo: 'tailwindcss',
      action: 'starred repository',
      title: '',
      time: '5 hours ago',
      icon: <Star size={16} className="text-neon-purple" />
    },
    {
      id: 3,
      type: 'issue',
      repo: 'next.js',
      action: 'commented on issue',
      title: 'Image optimization bug with WebP format',
      time: '1 day ago',
      icon: <BookOpen size={16} className="text-neon-blue" />
    },
    {
      id: 4,
      type: 'achievement',
      repo: '',
      action: 'earned badge',
      title: 'First Contribution',
      time: '3 days ago',
      icon: <Award size={16} className="text-neon-purple" />
    },
  ];
  
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Recent Activity</h2>
          <button className="btn btn-ghost text-sm">View all activity</button>
        </div>
        
        <div className="glass-card p-0 overflow-hidden">
          <div className="divide-y divide-white/10">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-full bg-white/5 mt-1">
                    {activity.icon}
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1 text-sm">
                      <span className="text-white font-medium">You</span>
                      <span className="text-white/70">{activity.action}</span>
                      {activity.repo && (
                        <span className="text-primary font-mono">{activity.repo}</span>
                      )}
                    </div>
                    {activity.title && (
                      <p className="text-white/90 mt-1">{activity.title}</p>
                    )}
                    <span className="text-white/50 text-xs">{activity.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
