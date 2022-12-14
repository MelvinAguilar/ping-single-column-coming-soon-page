/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        normal: "1.25rem",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "custom-blue": "hsl(223, 87%, 63%)",
        "pale-blue": "hsl(223, 100%, 88%)",
        "light-red": "#hsl(354, 100%, 66%)",
        "custom-gray": "hsl(0, 0%, 59%)",
        "very-dark-blue": "hsl(209, 33%, 12%)",
      },
    },
  },
  plugins: [],
};
