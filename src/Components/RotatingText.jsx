import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = ["Developing", "Building", "Crafting", "Innovating", "Designing"];

const letterVariant = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 },
};

const RotatingText = () => {
  const [index, setIndex] = useState(0);
  const [letters, setLetters] = useState(phrases[0].split(""));

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % phrases.length;
      const nextLetters = phrases[nextIndex].padEnd(letters.length, " ").split("");

      setLetters(nextLetters);
      setIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, letters.length]);

  return (
    <div >
      {letters.map((letter, idx) => (
        <AnimatePresence key={idx} mode="wait">
          <motion.span
            key={`${letter}-${idx}-${index}`}
            variants={letterVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut", delay: idx * 0.05 }}
            className="inline-block min-w-[0.6ch]"
          >
            {letter}
          </motion.span>
        </AnimatePresence>
      ))}
    </div>
  );
};

export default RotatingText;