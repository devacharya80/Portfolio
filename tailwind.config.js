/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        ink: "#121212",
        paper: "#f7f7f4",
        muted: "#666662",
        line: "#deded8",
        accent: "#1d5d52",
      },
    },
  },
  plugins: [],
};
