// src/components/Onboarding/StepTwo.jsx
import React from 'react';

const StepTwo = ({ next }) => (
  <div className="text-center">
    <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Work & Break Sessions</h2>
    <p className="mb-6 text-base text-gray-600 dark:text-gray-300">
      Focus for 25 minutes, take a 5-minute break. Stay sharp, stay productive.
    </p>
    <button
      onClick={next}
      className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full transition cursor-pointer shadow-md hover:shadow-lg"
    >
      Got it →
    </button>
  </div>
);

export default StepTwo;
