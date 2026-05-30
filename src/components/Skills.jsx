import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Server, Wrench } from 'lucide-react';

const spring = { duration: 0.35, ease: [0.22, 1, 0.36, 1] };

// Using devicons for tech, simpleicons CDN for brands, svgrepo for others
const allSkills = {
  frontend: [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Canva', icon: 'https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000' },
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
    { name: 'CapCut', icon: 'https://www.svgrepo.com/show/504203/capcut.svg' },
    { name: 'Alight Motion', icon: 'https://img.icons8.com/?size=100&id=GRzLkhOFEp0z&format=png&color=000000' },
    { name: 'IbisPaint', icon: 'https://img.icons8.com/?size=100&id=hylX6EPAOYOQ&format=png&color=000000' },
  ],
  backend: [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  ],
  tools: [
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
    { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' },
    { name: 'MS Word', icon: 'https://img.icons8.com/?size=100&id=13674&format=png&color=000000' },
    { name: 'MS Excel', icon: 'https://img.icons8.com/?size=100&id=13654&format=png&color=000000' },
    { name: 'MS PowerPoint', icon: 'https://img.icons8.com/?size=100&id=81726&format=png&color=000000' },
  ],
};

const tabs = [
  { key: 'frontend', label: 'Frontend & Design', icon: <Monitor className="w-4 h-4" /> },
  { key: 'backend', label: 'Backend', icon: <Server className="w-4 h-4" /> },
  { key: 'tools', label: 'Tools', icon: <Wrench className="w-4 h-4" /> },
];

const Skills = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('frontend');

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
    cardBg: 'bg-zinc-900/60 border-red-900/20 hover:border-red-500/60',
    tabActive: 'bg-gradient-to-r from-red-700 to-red-500 text-white shadow-md shadow-red-900/30',
    tabInactive: 'bg-zinc-900/60 text-gray-400 border border-red-900/20 hover:border-red-500/40 hover:text-red-400',
  };

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-500',
    cardBg: 'bg-white/70 border-red-100 hover:border-red-400',
    tabActive: 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-md shadow-red-200',
    tabInactive: 'bg-white/60 text-gray-500 border border-red-100 hover:border-red-300 hover:text-red-500',
  };

  const theme = darkMode ? darkTheme : lightTheme;

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: spring },
  };

  return (
    <section id="skills" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-14 z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
          className="mb-10 text-center"
        >
          <h2 className={`text-4xl sm:text-5xl font-bold ${theme.textPrimary}`}>
            My <span className="text-red-500">Skills</span>
          </h2>
          <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-red-600 to-red-400" />
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 }}
          className="flex justify-center gap-3 mb-10 flex-wrap"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.12 }}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full
                text-sm font-semibold transition-all duration-200
                ${activeTab === tab.key ? theme.tabActive : theme.tabInactive}`}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-4xl mx-auto"
          >
            {allSkills[activeTab].map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{ scale: 1.07, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className={`flex flex-col items-center justify-center gap-3 p-5
                  border rounded-2xl cursor-pointer transition-all duration-200
                  backdrop-blur-sm shadow-md hover:shadow-red-900/20 hover:shadow-xl
                  ${theme.cardBg}`}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-md"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${skill.name}&background=991b1b&color=fff&size=64&bold=true&font-size=0.4`;
                  }}
                />
                <span className={`text-xs sm:text-sm font-semibold text-center ${theme.textPrimary}`}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Skills;