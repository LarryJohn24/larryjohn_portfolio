import { useState, useEffect } from 'react';

const roles = ['Web Developer', 'QA Tester', 'Web Designer'];

const TypingText = ({ highlight }) => {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    let timeout;

    if (!isDeleting && charIndex <= current.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 80);
    } else if (!isDeleting && charIndex > current.length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex >= 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 45);
    } else if (isDeleting && charIndex < 0) {
      // Move to next role
      setIsDeleting(false);
      setCharIndex(0);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <span className={highlight}>
      {displayed}
      <span style={{ animation: 'blink 1s step-end infinite' }}>|</span>
    </span>
  );
};

export default TypingText;