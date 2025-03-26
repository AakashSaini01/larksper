/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      dot: ["didot"],
    },
    extend: {
      colors: {
        metallic: "#EEE8F5",
        vibrant: "#EEE8F5",
        bloom: "#F2F2F2",
        grey: "#8C8F94",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "fade-in-down": {
          "0%": { opacity: 0, transform: "translate3d(0, -100%, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },
        "fade-in-left": {
          "0%": { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },
        "fade-in-right": {
          "0%": { opacity: 0, transform: "translate3d(100%, 0, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translate3d(0, 100%, 0)" },
          "100%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
        },
        "fade-out-left": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
        },
        "fade-out-down": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, transform: "translate3d(0, 100%, 0)" },
        },
        "slide-in-left": {
          "0%": { transform: "translate3d(-100%, 0, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translate3d(100%, 0, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
        "slide-out-left": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-100%, 0, 0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(100%, 0, 0)" },
        },
        "zoom-in": {
          "0%": { opacity: 0, transform: "scale3d(0.3, 0.3, 0.3)" },
          "80%": { opacity: 0.8, transform: "scale3d(1.1, 1.1, 1.1)" },
          "100%": { opacity: 1 },
        },
        "zoom-out": {
          "0%": { opacity: 1 },
          "15%": { opacity: 0.8, transform: "scale3d(1.1, 1.1, 1.1)" },
          "100%": { opacity: 0, transform: "scale3d(0.3, 0.3, 0.3)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadein: "fade-in 1s ease-in-out 0.25s 1",
        fadeout: "fade-out 1s ease-out 0.25s 1",
        fadeindown: "fade-in-down 1s ease-in 0.25s 1",
        fadeinleft: "fade-in-left 1s ease-in-out 0.25s 1",
        fadeinright: "fade-in-right 1s ease-in-out 0.25s 1",
        fadeinup: "fade-in-up 1s ease-in-out 0.25s 1",
        fadeoutdown: "fade-out-down 1s ease-in-out 0.25s 1",
        fadeoutleft: "fade-out-left 1s ease-in-out 0.25s 1",
        slideinleft: "slide-in-left 1s ease-in-out 0.25s 1",
        slideinright: "slide-in-right 1s ease-in-out 0.25s 1",
        slideoutleft: "slide-out-left 1s ease-in-out 0.25s 1",
        slideoutright: "slide-out-right 1s ease-in-out 0.25s 1",
        zoomin: "zoom-in 1s ease-in-out 0.25s 1",
        zoomout: "zoom-out 1s ease-in-out 0.25s 1",
        "fade-in": "fadeIn 1s ease-in forwards",
        "fade-up": "fadeUp 1s ease-out forwards",
        "fade-down": "fadeDown 1s ease-out forwards",
        "fade-left": "fadeLeft 1s ease-out forwards",
        "fade-right": "fadeRight 1s ease-out forwards",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      transitionDelay: {
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
