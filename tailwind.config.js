/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sourceSans: ['"Source Code Pro"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'white-gray-blue-gradient': 'linear-gradient(to bottom, #FFFFFF 0%, #EEEFF2 70%, #7299B3 100%)',
        'white-gray-gradient': 'linear-gradient(to bottom, #FFFFFF 0%, #EEEFF2 100%)',
        'dark-gradient': 'linear-gradient(to bottom, #23272F 0%, #1A1C21 100%)',
        'blue-white-gradient': 'linear-gradient(to top, #FFFFFF 0%, #EEEFF2 70%, #7299B3 100%)',
      },
    },
  },
  plugins: [
  
  ],
};
