// tailwind.config.js
const {nextui} = require("@nextui-org/react");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
    primaryColor:"#F31E85",
    accentColor:"#00BAF8",
    accentLightBg:"#E2F7FE",
    primaryLightBg:"#FDEAF0"
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],

}

