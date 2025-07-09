// src/components/Onboarding/StepOne.jsx
import React from 'react';

const StepOne = ({ next }) => (
  <div className="text-center">
    <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">🍅 Welcome to TomotoMode</h2>
    <p className="mb-6 text-base text-gray-600 dark:text-gray-300">
      This app helps you stay focused using the Pomodoro technique.
    </p>
    <button
      onClick={next}
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full transition cursor-pointer shadow-md hover:shadow-lg"
    >
      Next →
    </button>
  </div>
);

export default StepOne;
