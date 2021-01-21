// eslint-disable-next-line no-undef
const config = require('tailwindcss/defaultTheme')

// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, -apple-system, BlinkMacSystemFont',
      },
      colors: {
        gray: {
          ...config.colors.gray,
          200: '#F4F4F4',
        },
        blue: {
          500: '#29C7F8',
          800: '#5C7896',
          900: '#1c4269',
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  variants: {},
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-bootstrap-grid')({
      gridGutterWidth: '32px',
      containerMaxWidths: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1140px',
      },
    }),
    // eslint-disable-next-line no-undef
    require('tailwindcss-debug-screens'),
  ],
}
