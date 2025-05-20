/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Brithstone"]
      },
      colors: {
        primary: "#99582a",
        secondary: "#bb9457",
        fontcolor: "#9c6644",
        brandDark: "#582f0e",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm:"2rem",
        }
      }
    },
  },
  plugins: [],
}