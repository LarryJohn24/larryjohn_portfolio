import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, GraduationCap, Gamepad2, Dumbbell, Award, ExternalLink } from 'lucide-react';
import pfp from '../assets/mepfp.png';
import cert1 from '../assets/cert1.pdf';
import cert2 from '../assets/cert2.pdf';
import cert3 from '../assets/cert3.pdf';
import cert4 from '../assets/cert4.pdf';

const About = ({ darkMode }) => {
  const [openCard, setOpenCard] = useState(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
    textMuted: 'text-gray-500',
    cardBg: 'bg-zinc-900/80 border-red-900/30',
    cardHover: 'hover:border-red-600/60',
    divider: 'bg-red-900/30',
    valueText: 'text-gray-200',
    certBg: 'bg-zinc-900/80 border-red-900/30 hover:border-red-500/60',
    certIcon: 'bg-red-900/30 text-red-400',
    certDate: 'text-red-400',
    viewBtn: 'bg-red-700/30 text-red-400 hover:bg-red-600 hover:text-white',
  };

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-600',
    textMuted: 'text-gray-400',
    cardBg: 'bg-white/80 border-red-200',
    cardHover: 'hover:border-red-400',
    divider: 'bg-red-100',
    valueText: 'text-gray-700',
    certBg: 'bg-white/80 border-red-100 hover:border-red-400',
    certIcon: 'bg-red-50 text-red-500',
    certDate: 'text-red-500',
    viewBtn: 'bg-red-50 text-red-600 hover:bg-red-600 hover:text-white',
  };

  const theme = darkMode ? darkTheme : lightTheme;

  const infoCards = [
    {
      id: 'school',
      icon: <GraduationCap className="w-5 h-5" />,
      label: 'My School',
      value: 'Pamantasan ng Lungsod ng Valenzuela',
    },
    {
      id: 'game',
      icon: <Gamepad2 className="w-5 h-5" />,
      label: 'Favorite Game',
      value: 'Resident Evil 4',
    },
    {
      id: 'sport',
      icon: <Dumbbell className="w-5 h-5" />,
      label: 'Sport Hobby',
      value: 'Cycling',
    },
  ];

  const certificates = [
    {
      id: 1,
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      date: 'Apr 17, 2025',
      file: cert1,
    },
    {
      id: 2,
      title: 'Networking Devices and Initial Configuration',
      issuer: 'Cisco Networking Academy',
      date: 'Apr 19, 2025',
      file: cert2,
    },
    {
      id: 3,
      title: 'Network Addressing and Basic Troubleshooting',
      issuer: 'Cisco Networking Academy',
      date: 'Apr 19, 2025',
      file: cert3,
    },
    {
      id: 4,
      title: 'Network Support and Security',
      issuer: 'Cisco Networking Academy',
      date: 'May 06, 2025',
      file: cert4,
    },
  ];

  const handleCardClick = (id) => {
    setOpenCard(prev => prev === id ? null : id);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-14 z-10">

        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className={`text-4xl sm:text-5xl font-bold ${theme.textPrimary}`}>
            About <span className="text-red-500">Me</span>
          </h2>
          <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-red-600 to-red-400" />
        </motion.div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">

          {/* LEFT — pfp with glow */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/5 w-full flex justify-center"
          >
            <div className="relative w-72 sm:w-80 lg:w-96">
              {/* Glow disabled on mobile to save GPU */}
              <motion.div
                animate={isMobile ? {} : { opacity: [0.3, 0.6, 0.3] }}
                transition={isMobile ? {} : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute inset-0 rounded-2xl blur-2xl -z-10
                  ${darkMode ? 'bg-red-700/40' : 'bg-red-400/30'}`}
              />
              <motion.div
                animate={isMobile ? {} : { opacity: [0.6, 0.2, 0.6] }}
                transition={isMobile ? {} : { duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute inset-0 rounded-2xl blur-3xl -z-10 scale-110
                  ${darkMode ? 'bg-red-900/30' : 'bg-rose-300/20'}`}
              />
              <img
                src={pfp}
                alt="Larry John"
                loading="lazy"
                className="w-full h-auto rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          {/* RIGHT — text + cards + certificates */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-3/5 w-full flex flex-col gap-6"
          >
            {/* Bio text */}
            <div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${theme.textPrimary}`}>
                Hi, I'm <span className="text-red-500">Larry John!</span>
              </h3>
              <p className={`leading-relaxed mb-4 ${theme.textSecondary}`}>
                I am an IT student at Pamantasan ng Lungsod ng Valenzuela, currently in my 3rd year. I have done several projects in web development and have a strong passion for learning new technologies. I am eager to apply my skills and knowledge in real-world projects and collaborate with other developers.
              </p>
            </div>

            {/* Divider */}
            <div className={`h-px w-full ${theme.divider}`} />

            {/* Certificates */}
            <div>
              <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${theme.textPrimary}`}>
                <Award className="w-5 h-5 text-red-500" />
                Certificates
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className={`border rounded-xl p-4 transition-all duration-300 ${theme.certBg}`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className={`p-2 rounded-lg flex-shrink-0 ${theme.certIcon}`}>
                        <Award className="w-4 h-4" />
                      </div>
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-semibold leading-snug mb-1 ${theme.textPrimary}`}>
                          {cert.title}
                        </p>
                        <p className={`text-xs mb-1 ${theme.textSecondary}`}>
                          {cert.issuer}
                        </p>
                        <p className={`text-xs font-medium mb-3 ${theme.certDate}`}>
                          {cert.date}
                        </p>
                        <motion.a
                          href={cert.file}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className={`inline-flex items-center gap-1.5 text-xs font-semibold
                            px-3 py-1.5 rounded-full transition-all duration-200 ${theme.viewBtn}`}
                        >
                          <ExternalLink className="w-3 h-3" />
                          View Certificate
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;