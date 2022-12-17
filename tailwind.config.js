/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      xm : '250px',
      sm : '640px',
      md : '768px',
      lg : '1024px',
      xl : '1280px',
      xxl : '1536px'
    },
    extend: {
      colors: {
        darkBlue: '#000022',
        brightRed: '#f25f3a'
      }
    },
  },
  plugins: [],
}
