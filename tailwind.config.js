/** @type {import('tailwindcss').Config} */
module.exports = {
content: ['./app/**/*.{js,ts,jsx,tsx}', './appcomponents/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.line-clamp-1': {
          display: '-webkit-box',
          '-webkit-line-clamp': '1',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.line-clamp-2': {
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.line-clamp-3': {
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
