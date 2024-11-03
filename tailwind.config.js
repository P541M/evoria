/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: "#E6E8EA", // Cool Gray for background
        backgroundSecondary: "#F9FAFB", // Off White for containers
        textPrimary: "#1C1F23", // Charcoal Black for main text
        textAccent: "#3A4A58", // Slate Blue for headings
        highlight: "#6C7A89", // Darker Silver Blue for highlights
      },
    },
  },
  plugins: [],
};
