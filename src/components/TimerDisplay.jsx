// src/components/TimerDisplay.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TimerDisplay = ({ time, mode }) => {
  return (
    <motion.div
      key={time}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center mb-6"
    >
      <div className="text-7xl sm:text-8xl font-extrabold tracking-wide select-none text-gray-800 dark:text-white">
        {time}
      </div>
      <div className="mt-3 text-sm sm:text-base uppercase tracking-wider text-gray-500 dark:text-gray-400">
        {mode === 'work' ? 'Work Session' : 'Break Time'}
      </div>
    </motion.div>
  );
};

export default TimerDisplay;
