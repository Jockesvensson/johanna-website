/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    screens: {
      'xsm': '550px',
      // => @media (min-width: 550px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'almostTransparent': 'rgba(255,255,255,.1);'
      },
      fontSize: {
        '8xl': '6.5rem',
        '9xl': '8rem',
        '10xl': '10rem',
        '12xl': '12rem',
        '14xl': '14rem',
        '16xl': '16rem',
      },
      lineHeight: {
        'small': '0.75',
      },
      borderRadius: {
        '4xl': '50px',
      },
      height: {
        'full-15': '15rem',
      },
      minHeight: {
        '200': '200px',
        '50': '50vh',
      },
      maxWidth: {
        '9': '9rem',
        '8xl': '90rem',
      },
      inset: {
        '17': '16.5%',
      }
    },
  },
  plugins: [],
}
