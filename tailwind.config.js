
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    "./components/**/*.{js,ts,jsx,tsx}",
    "./design/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      'kuiper-blue': '#1060FF',
      'dark-blue': '#15365F',
      white: '#FFFFFF',
      mute: '#F9F8ED',
      black: '#25282A',
      gray: '#D9D9D9',
      orange: '#F9BC26',
      yellow: '#F7DE28',
      'major-orange': '#F15822',
      'midnight-purple': '#300C63',
      'mars-red': '#BA0C2F',
      'earth-green': '#4FA600',
      granite: '#616670',
      'non-flash-white': '#F0F3F8',
      water: '#C6E3F4',
      'lavender-gray': '#CBC6BD'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'lower-roman',
      alpha: 'lower-alpha',
    }
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
};
