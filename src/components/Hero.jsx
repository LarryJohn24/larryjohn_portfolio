import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight } from 'lucide-react';
import TypingText from './Typingtext';
import resume from '../assets/resume.pdf';
import facebook from '../assets/facebook.png';
import github from '../assets/github.png';
import tiktok from '../assets/tiktok.png';
import instagram from '../assets/instagram.png';
import discord from '../assets/discord.png';

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icon: facebook, alt: 'Facebook', href: 'https://www.facebook.com/campasas.larryjohn' },
    { icon: github, alt: 'GitHub', href: 'https://github.com/LarryJohn24' },
    { icon: tiktok, alt: 'TikTok', href: 'https://www.tiktok.com/@haisesasaki194' },
    { icon: instagram, alt: 'Instagram', href: 'https://www.instagram.com/larry_john09/' },
    { icon: discord, alt: 'Discord', href: 'https://www.discord.com/users/1260237036372103258'},
  ];

  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
    buttonSecondary: 'text-white border-2 border-red-400 hover:bg-red-600',
    highlight: 'text-red-400',
  };

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary: 'text-gray-800 border-2 border-red-500 hover:bg-red-600 hover:text-white',
    highlight: 'text-red-600',
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">

      <section id="home" className="body-font z-10">
        <div className="container mx-auto flex px-3 sm:px-4 lg:px-3 py-12 lg:py-32
          flex-col lg:flex-row items-center justify-center gap-8 mt-14 lg:mt-0">

          {/* content */}
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-4 lg:mb-0 ">

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full"
            >
              {socialIcons.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-transform duration-300"
                >
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${
                      darkMode ? '' : 'brightness-75'
                    }`}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
            >
              Hi, I'm Larry John! <br />
              <span>
                I'm a{' '}
                <TypingText highlight={theme.highlight} />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
            >
              I'm a passionate web developer/designer. I love creating clean and efficient code to solve real-world problems. I also do multimedia design and testing. Welcome to my portfolio!
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="w-full pt-4 sm:pt-6"
            >
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">

                {/* Download Resume */}
                <motion.a
                  href={resume}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center text-white
                    bg-gradient-to-r from-red-600 to-red-400 border-0 py-3 px-6 sm:px-8
                    hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]
                    rounded-full text-base sm:text-lg font-semibold transition-all duration-300"
                >
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  Download Resume
                </motion.a>

                {/* Contact */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full sm:w-auto inline-flex items-center justify-center
                    py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold
                    hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]
                    transition-all duration-300 ${theme.buttonSecondary}`}
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  Contact me
                </motion.a>

                {/* View Projects */}
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full sm:w-auto inline-flex items-center justify-center
                    py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg font-semibold
                    hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]
                    transition-all duration-300 ${theme.buttonSecondary}`}
                >
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                  View Projects
                </motion.a>

              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;