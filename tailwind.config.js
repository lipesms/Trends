/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Roboto']
    },

    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: '160px minmax(0, 1fr)',

        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px'
      },
      colors: {
        'primary-blue': '#032541',
        'secondary-blue': '#455480',
        'hover-card-black': 'rgba(0,0,0, 0.7)'
      },
      height: {
        90: '450px'
      },
      minWidth: {
        90: '315px'
      },
      maxWidth: {
        315: '315px',
        618: '618px'
      },
      dropShadow: {
        '3xl': '0 10px 16px #fff2'
      },
      backgroundImage: {
        'body-pattern': "url('./src/assets/images/background_home.png')"
      }
    }
  },
  plugins: []
}
