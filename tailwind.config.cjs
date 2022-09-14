/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",

      primary: "#ffc131",
      secondary: "#1b1b1d",
      offwhite: "#ebedf0",
      white: "#fff",
      black: "#000",
      darkPrimary: "#ce930b",
      gray: "#3e3e43",
      card: "#0d0d0e",
    },
  },
  plugins: [],
};
