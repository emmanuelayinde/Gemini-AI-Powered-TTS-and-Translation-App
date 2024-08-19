/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#090909",
        gray: "#ccc",
        blue: "#556BBE",
        lightBlue: "#414B6E",
        darkBlue: "#1A254F",
        orange: "#F24E1E",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
