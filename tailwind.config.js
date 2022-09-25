/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Darkblue: '#324152',
        grayishBlue: '#F5F6FA',
        Lightgray: 'hsl(223, 19 %, 93 %)',
        Verylightgray: 'hsl(228, 33 %, 97 %)',
        Whitee: 'hsl(0, 0%, 100%)',
        Moderateblue: 'hsl(238, 40%, 52 %)',
        SoftRed: 'hsl(358, 79%, 66%)',
        Lightgrayishblue: 'hsl(239, 57%, 85 %)',
        Palered: 'hsl(357, 100 %, 86 %)'
    }
  },
},
plugins: [require("daisyui")],
}
