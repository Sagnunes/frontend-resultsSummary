/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        hankenGrotesk: ['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        lightRed: {
          default: 'hsl(0, 100%, 67%)',
          light: 'hsl(0, 100%, 67%,0.2)',
        },
        orangey: {
          default: 'hsl(39, 100%, 56%)',
          light: 'hsl(39, 100%, 56%,0.2)',
        },
        greenTeal: {
          default: 'hsl(166, 100%, 37%)',
          light: 'hsl(166, 100%, 37%,0.2)',
        },
        cobaltBlue: {
          default: 'hsl(234, 85%, 45%)',
          light: 'hsl(234, 85%, 45%, 0.2)',
          normal: 'hsl(234, 85%, 45%)',
        },
        plateBlue: 'hsl(221, 100%, 96%)',
        lightLavender: 'hsl(241, 100%, 89%)',
        darkGrayBlue: 'hsl(224, 30%, 27%)',
        lightSlateBlue: 'hsl(252, 100%, 67%)',
        lightRoyalBlue: 'hsl(241, 81%, 54%)',
        violetBlue: 'hsla(256, 72%, 46%, 1)',
        persianBlue: 'hsla(241, 72%, 46%, 0)',
      },
    },
  },
  plugins: [],
}
