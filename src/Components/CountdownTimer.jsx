import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CountdownTimer = ({ targetDate, finalText }) => {
  const [daysLeft, setDaysLeft] = useState(null);
  const [showFinalText, setShowFinalText] = useState(false);
  const [showCountdown, setShowCountdown] = useState(true);

  useEffect(() => {
    const updateDaysLeft = () => {
      const now = new Date();
      const diff = targetDate - now;
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      if (days <= 0) {
        setShowFinalText(true);
        setShowCountdown(false);
      } else {
        setDaysLeft(days);
      }
    };

    updateDaysLeft();

    const interval = setInterval(() => {
      updateDaysLeft();
      setShowCountdown((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="text-lg sm:text-xl font-semibold text-black uppercase tracking-wide flex justify-center items-center">
      <AnimatePresence mode="wait" initial={false}>
        {showCountdown && !showFinalText && daysLeft !== null && (
          <motion.span
            key={`countdown-${daysLeft}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {daysLeft} {daysLeft === 1 ? "Day" : "Days"} to go
          </motion.span>
        )}

        {!showCountdown && (
          <motion.span
            key="final-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {finalText}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountdownTimer;
