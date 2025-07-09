// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBg: '#f7f8fa', // soft light gray
        lightText: '#1a1a1a',
        darkBg: '#1f2937',  // slate-800
        darkText: '#f3f4f6', // light gray for dark mode
        primary: '#3b82f6', // Tailwind blue-500
        accent: '#f59e0b',  // amber-500
      },
    },
  },
  plugins: [],
};
