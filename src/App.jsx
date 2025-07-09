// src/App.jsx
import React, { useState, useEffect } from 'react';
import {useTimer}  from './hooks/useTimer';
import OnboardingWrapper from './components/Onboardig/OnboardingWrapper';
import SettingsModal from './components/SettingsModal';
import ThemeToggle from './components/ThemeToggle';
import Controls from './components/Controls';
import TimerDisplay from './components/TimerDisplay';


const App = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);

  const {
    time,
    isRunning,
    isWorkSession,
    start,
    pause,
    reset,
    setDurations,
    stopSound,
    isAudioPlaying
  } = useTimer();

  useEffect(() => {
    const onboarded = localStorage.getItem('onboarded');
    if (onboarded) setShowOnboarding(false);
  }, []);

  const handleFinishOnboarding = () => {
    localStorage.setItem('onboarded', 'true');
    setShowOnboarding(false);
  };

  return (
<div className="min-h-screen flex flex-col items-center justify-center 
  bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText transition-colors duration-300">

      {/* Top Right Controls */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <ThemeToggle />
        <button
          onClick={() => setShowSettings(true)}
          className="text-sm px-4 py-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 shadow-sm transition cursor-pointer"
        >
          ⚙️ Settings
        </button>
      </div>

      {/* Onboarding or Main App */}
      {showOnboarding ? (
        <OnboardingWrapper onComplete={handleFinishOnboarding} />
      ) : (
        <>
          <h1 className="text-3xl font-extrabold mb-6 tracking-tight">🍅 TomatoMode</h1>
          <TimerDisplay time={time} mode={isWorkSession ? 'work' : 'break'} />
          <Controls isRunning={isRunning} onStart={start} onPause={pause} onReset={reset} />
         {isAudioPlaying && (
  <button
    onClick={stopSound}
    className="mt-4 text-sm px-4 py-2 rounded-full bg-red-300 dark:bg-red-700 text-white hover:bg-red-400 dark:hover:bg-red-600 shadow-sm transition"
  >
    🛑 Stop Notification
  </button>
)}

        </>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <SettingsModal
          isOpen={showSettings}
          onClose={() => setShowSettings(false)}
          onSave={(work, break_) => setDurations(work, break_)}
        />
      )}
    </div>
  );
};

export default App;
