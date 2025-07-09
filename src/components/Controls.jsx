// src/components/Controls.jsx
import React from 'react';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';

const Controls = ({ isRunning, onStart, onPause, onReset }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      {isRunning ? (
        <button
          onClick={onPause}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full shadow transition-all"
        >
          <FaPause className="inline mr-2" /> Pause
        </button>
      ) : (
        <button
          onClick={onStart}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow transition-all"
        >
          <FaPlay className="inline mr-2" /> Start
        </button>
      )}

      <button
        onClick={onReset}
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-full shadow transition-all"
      >
        <FaRedo className="inline mr-2" /> Reset
      </button>
    </div>
  );
};

export default Controls;
