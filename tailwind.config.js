/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: "#F7F3EB",   // warmCream for backgrounds
        backgroundSecondary: "#FFFFFF", // white for cards and containers
        textPrimary: "#2D3748",         // darkSlate for main text
        textAccent: "#4A5568",          // deepBlue for headings and accents
        highlight: "#D4B483",           // softGold for highlights
      },
    },
  },
  plugins: [],
};
