module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          vrt: '#38f34b',
          vrtdark: '#38e34b',
          footer: '#DEFFB4',
          profilebg: '#94FFBF',
          profiledeets: '#D9F8EC',
        },
        yellow: {
          banana: '#F4FFE5',
        },
        brown: {
          sand: '#D5C7BA',
          clay: '#AC6C53',
          yellow: '#C5874B',
          white: '#F2F2F2',
          navajo: '#FFDEAD'
        },
        blue: {
          ocean: '#31596D',
          naval: '#2F3E4C',
        },
        gray: {
          input: '#9CA38F',
        },
      },
      rotate: {
        contact: '-4.4deg',
      },
      scale: {
        25: '.25',
      },
      height: {
        ten: '10%',
        nine: '90%',
        moodTracker: '600px',
      },
      width: {
        ten: '10%',
        nine: '90%',
        Large: '2000px',
      },
      maxHeight: {
        moodTracker: '600px',
      },
      maxWidth: {
        Large: '2000px'
      },
      minWidth: {
        100: '30rem',
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'],
    extend: {},
  },
  plugins: [],
}
