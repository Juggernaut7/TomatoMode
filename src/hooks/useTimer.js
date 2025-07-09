import { useEffect, useState, useRef } from 'react';

export const useTimer = ({ workDuration = 1500, breakDuration = 300, onSessionEnd } = {}) => {
  const [secondsLeft, setSecondsLeft] = useState(workDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false); // 👈 NEW
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/sounds/bell.mp3');
    audioRef.current.loop = false;
    audioRef.current.addEventListener('ended', () => setIsAudioPlaying(false)); // Reset flag when audio ends
  }, []);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev === 1) {
            clearInterval(intervalRef.current);
            handleSessionEnd();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleSessionEnd = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play()
        .then(() => setIsAudioPlaying(true)) // 👈 Mark as playing
        .catch((err) => console.warn('Audio play error:', err));
    }

    setIsWorkSession((prev) => !prev);
    setSecondsLeft(isWorkSession ? breakDuration : workDuration);
    if (onSessionEnd) onSessionEnd();
    setIsRunning(false);
  };

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setSecondsLeft(isWorkSession ? workDuration : breakDuration);
    stopSound(); // Stop sound on reset
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsAudioPlaying(false); // 👈 Reset flag
    }
  };

  const formattedTime = () => {
    const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
    const seconds = String(secondsLeft % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return {
    time: formattedTime(),
    isRunning,
    isWorkSession,
    start,
    pause,
    reset,
    stopSound,
    isAudioPlaying, // 👈 expose this to App.jsx
    setDurations: (work, break_) => {
      setIsRunning(false);
      setSecondsLeft(work);
    }
  };
};
