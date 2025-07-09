// src/components/Onboarding/OnboardingWrapper.jsx
import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

const OnboardingWrapper = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const next = () => setStep((prev) => prev + 1);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl w-[95%] max-w-md shadow-2xl transition-colors">
        {step === 1 && <StepOne next={next} />}
        {step === 2 && <StepTwo next={next} />}
        {step === 3 && <StepThree finish={onComplete} />}
      </div>
    </div>
  );
};

export default OnboardingWrapper;
