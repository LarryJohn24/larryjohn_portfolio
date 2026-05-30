import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Film, Eye, X, Circle } from 'lucide-react';
import vhie from '../assets/vhie.png';
import arta from '../assets/ARTA.png';
import verde from '../assets/verde.jpg';
import valget from '../assets/valget.png';
import escape from '../assets/escape.png';
import fifth from '../assets/fifthstage.png';
import jaeger from '../assets/jaeger.png';
import minimalist from '../assets/minimalist.jpg';
import grunge from '../assets/grunge.jpg';

const allProjects = {
  software: [
    { id: 1, title: 'Vhie Fashion Jewelry', desc: 'A jewelry business website for Vhie.', tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'], image: vhie, role: 'Full Stack Developer' },
    { id: 2, title: 'ARTA Compliant Survey', desc: 'An ARTA compliant survey online website for Valenzuela.', tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'], image: arta, role: 'Quality Assurance Tester' },
    { id: 3, title: 'Verde de marone Ordering System', desc: 'A restaurant ordering system.', tags: ['REACT.JS', 'MySQL'], image: verde, role: 'Front-end Developer' },
    { id: 4, title: 'ValGet Hero', desc: 'A financial responsibility Game Capstone project.', tags: ['unity'], image: valget, role: 'Game Designer/artist' },
    { id: 5, title: 'Fifth stage', desc: 'A slasher film game project for game development subject.', tags: ['unity'], image: fifth, role: 'Game Designer' },
    { id: 6, title: 'Escape from Salamangkero', desc: 'A spin off game of "curse of biringan" card game for Game development subject.', tags: ['unity'], image: escape, role: 'Game Designer' },
  ],
  multimedia: [
    { id: 7, title: 'Jaeger Gun Logo', desc: 'A concept logo for a fictional car brand', tags: ['canva'], image: jaeger },
    { id: 8, title: 'Minimalist Cafe poster', desc: 'A poster for a minimalist cafe', tags: ['adobe photoshop'], image: minimalist },
    { id: 9, title: 'Grunge style poster', desc: 'A grunge-style thriller poster', tags: ['adobe photoshop'], image: grunge },
  ],
};

const tabs = [
  { key: 'software', label: 'Software Systems', icon: <Monitor className="w-4 h-4" /> },
  { key: 'multimedia', label: 'Multimedia', icon: <Film className="w-4 h-4" /> },
];

// ── Window Preview Modal ──────────────────────────────────────────────────────
const WindowPreview = ({ project, onClose, darkMode }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          key="window"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className={`w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl border
            ${darkMode ? 'bg-zinc-900 border-red-900/30' : 'bg-white border-red-100'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Browser chrome */}
          <div className={`flex items-center gap-3 px-4 py-3 border-b
            ${darkMode ? 'bg-zinc-800 border-zinc-700' : 'bg-gray-100 border-gray-200'}`}
          >
            {/* Traffic lights */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors flex items-center justify-center group"
                title="Close"
              >
                <X className="w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>

            {/* Fake address bar */}
            <div className={`flex-1 flex items-center gap-2 rounded-md px-3 py-1 text-xs
              ${darkMode ? 'bg-zinc-700 text-zinc-400' : 'bg-white text-gray-400 border border-gray-200'}`}
            >
              <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-zinc-500' : 'bg-gray-300'}`} />
              <span className="truncate">{project.title.toLowerCase().replace(/\s+/g, '-')}.preview</span>
            </div>

            {/* Close button (right side) */}
            <button
              onClick={onClose}
              className={`p-1 rounded-md transition-colors
                ${darkMode ? 'hover:bg-zinc-700 text-zinc-400' : 'hover:bg-gray-200 text-gray-500'}`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Preview image */}
          <div className="w-full max-h-[70vh] overflow-auto">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-contain"
            />
          </div>

          {/* Footer */}
          <div className={`px-5 py-3 flex items-center justify-between border-t text-sm
            ${darkMode ? 'bg-zinc-800 border-zinc-700 text-zinc-400' : 'bg-gray-50 border-gray-200 text-gray-500'}`}
          >
            <span className="font-medium">{project.title}</span>
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span key={tag} className={`text-xs px-2 py-0.5 rounded-full
                  ${darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-50 text-red-500'}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const Projects = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('software');
  const [previewProject, setPreviewProject] = useState(null);

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
    cardBg: 'bg-zinc-900/70 border-red-900/20 hover:border-red-500/50',
    tag: 'bg-red-900/30 text-red-400',
    iconHover: 'hover:text-red-400',
    placeholder: 'bg-zinc-800',
    tabActive: 'bg-gradient-to-r from-red-700 to-red-500 text-white shadow-md shadow-red-900/30',
    tabInactive: 'bg-zinc-900/60 text-gray-400 border border-red-900/20 hover:border-red-500/40 hover:text-red-400',
    previewBtn: 'bg-zinc-800 text-zinc-400 hover:bg-red-900/40 hover:text-red-400 border border-zinc-700 hover:border-red-500/50',
  };

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-600',
    cardBg: 'bg-white/70 border-red-100 hover:border-red-400',
    tag: 'bg-red-50 text-red-600',
    iconHover: 'hover:text-red-500',
    placeholder: 'bg-red-100/60',
    tabActive: 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-md shadow-red-200',
    tabInactive: 'bg-white/60 text-gray-500 border border-red-100 hover:border-red-300 hover:text-red-500',
    previewBtn: 'bg-gray-100 text-gray-500 hover:bg-red-50 hover:text-red-500 border border-gray-200 hover:border-red-300',
  };

  const theme = darkMode ? darkTheme : lightTheme;

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <>
      {/* Window Preview Modal */}
      <WindowPreview
        project={previewProject}
        onClose={() => setPreviewProject(null)}
        darkMode={darkMode}
      />

      <section
        id="projects"
        className="relative min-h-screen flex items-center py-20 overflow-hidden"
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-14 z-10">

          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h2 className={`text-4xl sm:text-5xl font-bold ${theme.textPrimary}`}>
              My <span className="text-red-500">Projects</span>
            </h2>
            <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-red-600 to-red-400" />
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-3 mb-10"
          >
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full
                  text-sm font-semibold transition-all duration-300
                  ${activeTab === tab.key ? theme.tabActive : theme.tabInactive}`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {allProjects[activeTab].map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{ y: -6 }}
                  className={`border rounded-2xl overflow-hidden transition-all duration-300
                    backdrop-blur-sm shadow-md hover:shadow-red-900/20 hover:shadow-xl
                    flex flex-col ${theme.cardBg}`}
                >
                  {/* Image with preview overlay */}
                  <div className="relative w-full h-44 group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Hover overlay with preview button */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <button
                        onClick={() => setPreviewProject(project)}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100
                          flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
                          bg-white/90 text-gray-800 hover:bg-white shadow-lg"
                      >
                        <Eye className="w-4 h-4" />
                        Preview
                      </button>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className={`text-lg font-bold mb-2 ${theme.textPrimary}`}>
                      {project.title}
                    </h3>

                    {/* Role — only shown when it exists (software projects) */}
                    {project.role && (
                      <h2 className={`text-md font-semibold mb-2 ${theme.textPrimary}`}>
                        <span className="font-bold text-red-500">Role: </span>
                        {project.role}
                      </h2>
                    )}

                    <p className={`text-sm leading-relaxed mb-4 flex-1 ${theme.textSecondary}`}>
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-medium px-3 py-1 rounded-full ${theme.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </>
  );
};

export default Projects;