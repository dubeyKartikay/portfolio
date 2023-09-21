/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "text": "#ffffff",
      "editortext": "#C0CAF5",
      "nav": "#E0AF68",
      "destructivenav": "#BB616B",
      "links": "#7AA2F7",
      "buttons": "#9D7CD8",
      "projectbg": "#363B54",
      "terminalbg": "#20222C",
      "terminaltitle": "#787C99",
      "terminaluserinput": "#9ECE6A",
      "background": "#16161E",
      "terminalpwd": "#7AA2F7",
      "terminaluser": "#E0AF68",
    },
    extend: {},
    fontFamily: {
      "poppins": ["Poppins", "sans-serif"],
      "roboto": ["Roboto Mono", "monospace"],
    },
  },
  plugins: [],
};
