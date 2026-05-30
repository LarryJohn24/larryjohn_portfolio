import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Code, Palette } from 'lucide-react';
import facebook from '../assets/facebook.png';
import github from '../assets/github.png';
import tiktok from '../assets/tiktok.png';
import instagram from '../assets/instagram.png';
import discord from '../assets/discord.png';

const spring = { duration: 0.35, ease: [0.22, 1, 0.36, 1] };

const Contact = ({ darkMode }) => {
  const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
    infoIcon: 'bg-red-900/30 text-red-400',
    socialCard: 'bg-zinc-900/70 border-red-900/20 hover:border-red-500/50',
    footerBorder: 'border-red-900/20',
    divider: 'bg-red-900/20',
  };

  const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-600',
    infoIcon: 'bg-red-50 text-red-500',
    socialCard: 'bg-white/70 border-red-100 hover:border-red-400',
    footerBorder: 'border-red-100',
    divider: 'bg-red-100',
  };

  const theme = darkMode ? darkTheme : lightTheme;

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'campasaslarryjohn@email.com' },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone', value: '+63 951 977 7826' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Location', value: 'Valenzuela, Metro Manila' },
  ];

  const socialLinks = [
    { icon: facebook, alt: 'Facebook', href: 'https://www.facebook.com/campasas.larryjohn', label: 'Facebook' },
    { icon: github, alt: 'GitHub', href: 'https://github.com/LarryJohn24', label: 'GitHub' },
    { icon: tiktok, alt: 'TikTok', href: 'https://www.tiktok.com/@haisesasaki194', label: 'TikTok' },
    { icon: instagram, alt: 'Instagram', href: 'https://www.instagram.com/larry_john09/', label: 'Instagram' },
    { icon: discord, alt: 'Discord', href: 'https://www.discord.com/users/1260237036372103258', label: 'Discord' },
  ];

  return (
    <section id="contact" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-14 z-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={spring}
          className="mb-14 text-center"
        >
          <h2 className={`text-4xl sm:text-5xl font-bold ${theme.textPrimary}`}>
            Contact <span className="text-red-500">Me</span>
          </h2>
          <div className="mx-auto mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-red-600 to-red-400" />
        </motion.div>

        {/* Single centered card with both sections */}
        <div className="max-w-2xl mx-auto flex flex-col gap-8">

          {/* TOP — Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h3 className={`text-2xl font-bold ${theme.textPrimary}`}>
              Get in <span className="text-red-500">Touch</span>
            </h3>
            <p className={`${theme.textSecondary} leading-relaxed`}>
              Have a project in mind or just want to say hi? I'm always open to new opportunities.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...spring, delay: 0.05 * index }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4"
                >
                  <div className={`p-3 rounded-xl ${theme.infoIcon}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className={`text-xs uppercase tracking-widest ${theme.textSecondary}`}>
                      {item.label}
                    </p>
                    <p className={`font-medium ${theme.textPrimary}`}>
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.2 }}
            className={`h-px w-full origin-left ${theme.divider}`}
          />

          {/* BOTTOM — Socials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.25 }}
            className="flex flex-col gap-4"
          >
            <h3 className={`text-2xl font-bold ${theme.textPrimary}`}>
              Find me on these <span className="text-red-500">Socials</span>
            </h3>

            <div className="flex flex-row gap-3 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...spring, delay: 0.05 * index }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.93 }}
                  title={social.label}
                  className={`flex items-center justify-center w-14 h-14
                    border rounded-2xl transition-all duration-200 backdrop-blur-sm
                    ${theme.socialCard}`}
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-7 h-7 object-contain ${darkMode ? '' : 'brightness-75'}`}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.2 }}
          className={`mt-20 pt-8 border-t ${theme.footerBorder} ${theme.textSecondary}`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm">
                © {new Date().getFullYear()} Larry John Campasas. All Rights Reserved.
              </p>
              <p className="text-xs mt-1 opacity-70">
                Designed & Built using React + Tailwind CSS
              </p>
            </div>
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end">
              <span className="text-sm font-medium">Built with:</span>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10">
                <Code className="w-4 h-4 text-red-500" />
                <span className="text-sm">React</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10">
                <Palette className="w-4 h-4 text-red-500" />
                <span className="text-sm">Tailwind</span>
              </div>
            </div>
          </div>
        </motion.footer>

      </div>
    </section>
  );
};

export default Contact;