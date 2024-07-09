/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundColor: {
        '--Primary-bg' : '#262262',
        '--Secondary-bg' : '#F3F3F3;',
      },
      textColor: {
        '--primary-1': '#262262',
        '--primary-2' : '#FF8000',
      },
      fontFamily: {
        'Inika' : ['Inika', 'san-serif']
      },
      fontSize: {
        'custom-size': ['1.75rem', {
          lineHeight: '2.23',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        'custom-size2': ['2.55rem', {
          lineHeight: '1.55',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
        'custom-size3': ['1.255rem', {
          lineHeight: '1.55',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      gridTemplateColumns: ['responsive', 'max'],
    },
  },
}

