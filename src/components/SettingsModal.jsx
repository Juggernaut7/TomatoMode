// src/components/SettingsModal.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const SettingsModal = ({ isOpen, onClose, onSave }) => {
  const [workMins, setWorkMins] = useState(25);
  const [breakMins, setBreakMins] = useState(5);

  const handleSave = () => {
    const workSecs = workMins * 60;
    const breakSecs = breakMins * 60;
    onSave(workSecs, breakSecs);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-lg w-[90%] max-w-md"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Session Settings</h2>
          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block mb-1">Work Duration (minutes)</label>
            <input
              type="number"
              value={workMins}
              onChange={(e) => setWorkMins(Number(e.target.value))}
              className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
              min={1}
            />
          </div>
          <div>
            <label className="block mb-1">Break Duration (minutes)</label>
            <input
              type="number"
              value={breakMins}
              onChange={(e) => setBreakMins(Number(e.target.value))}
              className="w-full px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
              min={1}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SettingsModal;
