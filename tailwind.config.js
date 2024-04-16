/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        // Define custom screen sizes
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      }, 
      colors: {
        'blue': '#348AC7',
        'yellow': '#FFC95F',
        'cream': '##FAF9F8',
        'white': '##FFFFFF',
        'black': '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


