import { motion } from 'framer-motion';

const AnimatedBackground = ({ darkMode }) => {

  // Use inline rgba so colors switch instantly without SVG gradient ID issues
  const outerFill = darkMode
    ? 'rgba(127,29,29,0.55)'
    : 'rgba(252,165,165,0.45)';

  const innerFill = darkMode
    ? 'rgba(69,10,10,0.75)'
    : 'rgba(254,202,202,0.65)';

  const strokeColor = darkMode
    ? 'rgba(239,68,68,0.15)'
    : 'rgba(239,68,68,0.1)';

  const baseBg = darkMode ? '#09090b' : '#fff1f2';

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* Base background */}
      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{ backgroundColor: baseBg }}
      />

      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Outer wide wave */}
        <motion.path
          fill={outerFill}
          animate={{
            d: [
              "M 0 600 Q 200 450 480 550 Q 760 650 1000 480 Q 1240 310 1440 500 L 1440 900 L 0 900 Z",
              "M 0 550 Q 200 700 480 580 Q 760 460 1000 600 Q 1240 740 1440 560 L 1440 900 L 0 900 Z",
              "M 0 620 Q 200 480 480 600 Q 760 720 1000 520 Q 1240 320 1440 530 L 1440 900 L 0 900 Z",
              "M 0 600 Q 200 450 480 550 Q 760 650 1000 480 Q 1240 310 1440 500 L 1440 900 L 0 900 Z",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Inner wave on top */}
        <motion.path
          fill={innerFill}
          animate={{
            d: [
              "M 0 700 Q 300 580 560 680 Q 820 780 1100 620 Q 1280 520 1440 660 L 1440 900 L 0 900 Z",
              "M 0 680 Q 300 800 560 700 Q 820 600 1100 750 Q 1280 850 1440 700 L 1440 900 L 0 900 Z",
              "M 0 720 Q 300 600 560 720 Q 820 840 1100 660 Q 1280 540 1440 690 L 1440 900 L 0 900 Z",
              "M 0 700 Q 300 580 560 680 Q 820 780 1100 620 Q 1280 520 1440 660 L 1440 900 L 0 900 Z",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut'}}
        />

        {/* Top accent stroke */}
        <motion.path
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          animate={{
            d: [
              "M -100 350 Q 300 180 600 320 Q 900 460 1200 280 Q 1380 180 1540 320",
              "M -100 280 Q 300 450 600 260 Q 900 70 1200 340 Q 1380 520 1540 260",
              "M -100 350 Q 300 180 600 320 Q 900 460 1200 280 Q 1380 180 1540 320",
            ],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </svg>

      {/* Ambient glow top-left */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ backgroundColor: darkMode ? 'rgba(127,29,29,0.25)' : 'rgba(252,165,165,0.2)' }}
      />

      {/* Ambient glow bottom-right */}
      <motion.div
        animate={{ opacity: [0.4, 0.2, 0.4], scale: [1.15, 1, 1.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ backgroundColor: darkMode ? 'rgba(69,10,10,0.4)' : 'rgba(254,202,202,0.3)' }}
      />

    </div>
  );
};

export default AnimatedBackground;