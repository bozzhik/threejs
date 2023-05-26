/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        custom: {
          100: '#161616',
          200: '#373737',
          300: '#643002',
        },
        grey: {
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#919191',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
        },
      },
    },
    screens: {
      xl: {max: '1535px'},
      lg: {max: '1023px'},
      sm: {max: '768px'},
      xs: {max: '350px'},
    },
    debugScreens: {
      position: ['top', 'right'],
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
