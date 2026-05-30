import { useEffect, useState, lazy, Suspense } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/NavBar'
import Hero from './components/Hero'
import AnimatedBackground from './components/Animatedbackground'

// Lazy load below-the-fold sections — only loads when needed
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
    document.documentElement.classList.add('dark')
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="relative min-h-screen">

      {/* Single animated background — only ONE instance */}
      <AnimatedBackground darkMode={darkMode} />

      {/* All content sits above the background */}
      <div className="relative z-10">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero darkMode={darkMode} />

        {/* Lazy loaded sections */}
        <Suspense fallback={null}>
          <About darkMode={darkMode} />
          <Skills darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </Suspense>
      </div>

    </div>
  )
}

export default App