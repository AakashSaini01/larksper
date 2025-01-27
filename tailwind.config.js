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
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translate3d(0, -100%, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        fadeInBounceRight: {
          "0%": { opacity: "0", transform: "translate3d(100%, 0, 0)" },
          "33%": { opacity: "0.5", transform: "translate3d(0, 0, 0)" },
          "66%": { opacity: "0.7", transform: "translate3d(20%, 0, 0)" },
          "100%": { opacity: "1", transform: "translate3d(0, 0, 0)" },
        },
        fadeinleft: {
          "0%": { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },
        fadeinright: {
          "0%": { opacity: 0, transform: "translate3d(100%, 0, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },
        slideinleft: {
          "0%": {
            visibility: "visible",
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
      },
      animation: {
        fadein: "fadeIn 1s ease-in-out 0.25s",
        fadeout: "fadeOut 1s ease-in-out 0.25s",
        fadeindown: "fadeInDown 4s ease-in-out 0.25s",
        fadeinbounceright: "fadeInBounceRight 1s ease-in-out 0.25s",
        fadeinleft: "fadeinleft 4s ease-in-out 0.25s 1",
        fadeinright: "fadeinright 4s ease-in-out 0.25s 1",
        slideinleft: "slideinleft 4s ease-in-out 0.25s 1",
      },
    },
  },
  plugins: [],
};
