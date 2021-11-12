module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#5E38BF',
        primaryDark: '#4C3398',
        secondary: '#FFD300',
      },

      spacing: {
        "05": "0.125rem",
        "1.5": "0.375rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        18: "4.5rem",
        27: "6.75rem",
        44: "11rem",
        72: "18rem",
        73: "18.25rem",
        74: "18.5rem",
        77: "19.25rem",
        78: "19.5rem",
        79: "19.75rem",
        88: "22rem",
        100: "25rem",
        128: "32rem",
        180: "45rem",
        308: "77rem",
        320: "80rem",
      },

      fontSize: {
        "md": ".9375rem",
        "1.5xl": "1.375rem",
      },

      backgroundImage: {
        'app': "url('/images/app-bg.png')",
      },

      minWidth: {
        15: "3.75rem"
      },

      maxWidth: {
        308: "77rem"
      },

      boxShadow: {
        light: '0 10px 15px -3px rgba(220, 220, 220, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },

      transitionDuration: {
        2000: "2000ms"
      },

      borderWidth: {
        1: '1px',
        3: '3px',
        5: '5px',
        6: '6px',
        7: '7px',
      }
    },
  },
  variants: {
    backgroundColor: ['hover'],
    extend: {},
  },
  plugins: [],
}