// src/components/Onboarding/StepThree.jsx
import React from 'react';

const StepThree = ({ finish }) => {
  const handleFinish = () => {
    localStorage.setItem('onboarded', 'true');
    finish(); // This should toggle the onboarding screen off in the parent component
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Ready to Begin?</h2>
      <p className="mb-6 text-base text-gray-600 dark:text-gray-300">
        You're all set. Let’s crush your tasks with focus and intention.
      </p>
      <button
        onClick={handleFinish}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full transition cursor-pointer shadow-md hover:shadow-lg"
      >
        Start Now 🚀
      </button>
    </div>
  );
};

export default StepThree;
