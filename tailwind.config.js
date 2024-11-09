/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rock_salt: ["Rock Salt", "sans-serif"],
        red_hat: ["Red Hat", "sans-serif"],
        bitter: ["Bitter", "sans-serif"],
        amaranth: ["Amaranth", "sans-serif"],
        advent: ["Advent Pro", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#1E68AD",
      },
    },
  },
  plugins: [],
};
