/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['src/**/*.tsx'],
  prefix: 'tw-',
  theme: {
    extend: {
      aspectRatio: {
        'classic': '3 / 2',
        'cinemascope': '21 / 9',
        'monitor': '4 / 3',
        '3/4': '3/4',
      },
      keyframes: {
        'shimmer': {
          '100%': {
            'transform': 'translateX(100%)',
          },
        },
      },
      colors: {
        'blue-bolt': '#05B5F5',
        'blue-sparkle': '#0079FF',
        'chinese-black': '#171717',
        'platinum': '#E3E3E3',
        'philippine-gray': '#8F8F8F',
        'eerie-black': '#1A1A1A',
        'black-olive' : '#3A3A3A',
        'davys-grey' : '#545252',
        'grey-300' : '#E8E8E8',
        'grey-600' : ' #8C8C8C',
        'grey-800': ' #262626',
        'cadmium-orange': '#F5882E'
      },
      fontFamily: {
        'sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'cyan-purple-gradient':
          'linear-gradient(135deg, #00FFFD 0%, #FF5BD8 100%);',
        'light-gray-gradient':
          'linear-gradient(90deg, #8F8F8F 0%, #8C8C8C 100%)',
        'blue-sky-gradient': 'linear-gradient(135deg, #05B5F5 0%, #0079FF 100%)',
        'blue-sky-gradient-transparent':
          'linear-gradient(135deg, rgba(5, 181, 245, 0.7) 0%, rgba(0, 121, 255, 0.7) 100%)',
        'blue-bolt-gradient': 
          'linear-gradient(146.31deg, #05B5F5 14.04%, #0079FF 88.41%)',
        'dark-grey-gradient':
          'linear-gradient(180deg, #3A3A3A 0%, #1A1A1A 100%)',
      },
      textColor: {
        'philippine-gray': '#8F8F8F',
        'charleston-green': '#282828',
        'black-olive': '#3A3A3A'
      },
      fontSize: {
        'xxs': ['0.625rem', '0.875rem'] //10px, 14px
      },
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
}
