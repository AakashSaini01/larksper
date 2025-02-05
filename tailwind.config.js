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
        Metallic: "#EEE8F5",
        Vibrant: "#EEE8F5",
        Bloom: "#F2F2F2",
        grey: "#8C8F94",
      },
    },
  },
  plugins: [],
};
