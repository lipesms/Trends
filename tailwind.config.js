/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      display: ['Roboto'],
      jockey: ['Jockey One']
    },

    extend: {
      zIndex: {
        9: '9',
        8: '8'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: '160px minmax(0, 1fr)',

        // Complex site-specific column configuration
        footer: '200px minmax(900px, 1fr) 100px'
      },
      colors: {
        'primary-color': 'rgba(249, 249, 250, 0.87)',
        'secondary-blue': '#455480',
        'hover-card-black': 'rgba(0,0,0, 0.7)',
        'card-person-name': 'rgba(0,0,0, 0.5)',
        'movie-infos': 'rgba(217,217,217, 0.3)',
        purple: '#8331D3',
        orange: '#EE5253',
        amarelo: '#FCCA64'
      },
      inset: {
        20: '20%',
        35: '35%',
        48: '48%',
        57: '57%',
        65: '65%'
      },

      height: {
        90: '450px',
        680: '680px',
        45: '45%',
        '32rem': '32rem'
      },
      maxHeight: {
        520: '520px'
      },
      minWidth: {
        90: '315px',
        350: '350px',
        113: '113px',
        82: '22rem'
      },
      maxWidth: {
        315: '315px',
        618: '618px',
        50: '50%'
      },
      dropShadow: {
        '3xl': '0 10px 16px #fff2'
      },
      backgroundImage: {
        body: "url('https://lipesms.github.io/Trends//src/assets/images/background_home.png')"
      }
    }
  },
  plugins: []
}
