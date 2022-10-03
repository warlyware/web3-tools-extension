/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "main-pattern": 'url("./images/bg-pattern.png")',
        "bg-black-image": 'url("./images/bg-black.png")',
      },
      boxShadow: {
        deep: "11px 20px 19px 0px rgba(0,0,0,0.53);",
        "deep-float": "8px 20px 24px 4px rgba(0,0,0,0.4)",
      },
      colors: {
        gray: {
          200: "#e2d9d2",
        },
        blue: {
          300: "#41CAD9",
          400: "#2aa4bf",
          600: "#0f4c73",
          800: "#082A40",
        },
        yellow: {
          500: "#ffdf34",
        },
        orange: {
          500: "#ff9135",
        },
        pink: {
          200: "#fba1a1",
          500: "#f472b6",
        },
      },
    },
  },
  plugins: [],
};
