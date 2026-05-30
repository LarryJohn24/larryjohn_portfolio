import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, X, Menu } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' }
  ];

  const lightColors = {
    navBg: 'bg-gradient-to-br from-red-100 to-white border border-red-200',
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    textActive: 'text-red-600',
    textHover: 'hover:text-red-500',
    indicator: 'bg-gradient-to-r from-red-600 to-red-400',
    button: 'bg-gradient-to-r from-red-600 to-red-500',
    mobileMenuBg: 'bg-white border-red-200',
    mobileItemActive: 'bg-red-50',
    toggleBg: 'bg-gray-100 border border-red-200',
    toggleIcon: 'text-gray-700',
    mobileBg: 'bg-gray-100',
  };

  const darkColors = {
    navBg: 'bg-gradient-to-br from-zinc-900 to-black border border-red-900/40',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
    textActive: 'text-red-400',
    textHover: 'hover:text-red-400',
    indicator: 'bg-gradient-to-r from-red-600 to-red-400',
    button: 'bg-gradient-to-r from-red-700 to-red-500',
    mobileMenuBg: 'bg-zinc-900 border-red-900/40',
    mobileItemActive: 'bg-red-950/40',
    toggleBg: 'bg-zinc-800 border border-red-900/40',
    toggleIcon: 'text-red-400',
    mobileBg: 'bg-zinc-800',
  };

  const colors = darkMode ? darkColors : lightColors;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const handleNavClick = (itemName, link) => {
    setActiveSection(itemName.toLowerCase());
    setIsMenuOpen(false);
    const target = document.querySelector(link);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div ref={menuRef} className="flex justify-center w-full fixed z-50 mt-4 px-4">
      <div className="relative w-full max-w-4xl">

        {/* NAV BAR */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col w-full ${colors.navBg}
            backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg shadow-red-900/20`}
        >
          <div className="flex items-center justify-between w-full">

            {/* LOGO */}
            <motion.a
              href="#home"
              onClick={() => handleNavClick('Home', '#home')}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <span className={`text-xl font-bold ${colors.textPrimary}`}>
                MY <span className="text-red-500">PORTFOLIO</span>
              </span>
            </motion.a>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.name, item.link);
                  }}
                  className="relative py-1"
                >
                  <motion.span
                    className={`font-medium transition-colors duration-300
                      ${activeSection === item.name.toLowerCase()
                        ? colors.textActive
                        : `${colors.textSecondary} ${colors.textHover}`
                      }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.name}
                  </motion.span>
                  {activeSection === item.name.toLowerCase() && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${colors.indicator}`}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* RIGHT SIDE ACTIONS */}
            <div className="flex items-center space-x-2">

              {/* Dark mode toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${colors.toggleBg} transition-colors`}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? (
                  <Sun className={`w-5 h-5 ${colors.toggleIcon}`} />
                ) : (
                  <Moon className={`w-5 h-5 ${colors.toggleIcon}`} />
                )}
              </motion.button>

              {/* Hire Me button (desktop) */}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('Contact', '#contact'); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`hidden lg:block px-6 py-2 font-semibold rounded-full ${colors.button} text-white shadow-md shadow-red-900/30 hover:shadow-lg hover:shadow-red-900/40 transition-shadow`}
              >
                Hire Me
              </motion.a>

              {/* Mobile menu toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`flex lg:hidden p-2 rounded-lg ${colors.mobileBg}`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className={`w-5 h-5 ${darkMode ? 'text-red-400' : 'text-gray-700'}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${darkMode ? 'text-red-400' : 'text-gray-700'}`} />
                )}
              </motion.button>
            </div>
          </div>
        </motion.nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`lg:hidden absolute top-full left-0 right-0 mt-2 rounded-xl border shadow-xl z-50
                ${colors.mobileMenuBg}`}
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.name, item.link)}
                    className="block w-full text-left"
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      className={`py-3 px-4 rounded-lg text-center transition-colors ${
                        activeSection === item.name.toLowerCase()
                          ? colors.mobileItemActive
                          : ''
                      }`}
                    >
                      <span
                        className={`font-medium ${
                          activeSection === item.name.toLowerCase()
                            ? colors.textActive
                            : colors.textSecondary
                        }`}
                      >
                        {item.name}
                      </span>
                    </motion.div>
                  </button>
                ))}

                <motion.button
                  onClick={() => handleNavClick('Contact', '#contact')}
                  whileTap={{ scale: 0.95 }}
                  className={`block w-full py-3 px-4 text-center font-semibold rounded-lg ${colors.button} text-white shadow-md shadow-red-900/30`}
                >
                  Hire Me
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default NavBar;