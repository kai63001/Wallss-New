module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'romeo': ['romeo'],
      'romeo2': ['Fredoka One']
     }
  },
  variants: {
    extend: {
      backgroundColor: ['group-focus'],
      scale: ['focus-within'],
    }
  },
  plugins: [require('@tailwindcss/forms'),]
}
