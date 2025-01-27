/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      dot: ["didot"],
    },
    extend: {
      colors: {
        grey: "#8C8F94",
      },
    },
  },
  plugins: [],
};
