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
        primary: "#bde0fe",
        secondary: "#edf2f4",
        brandDark: "#faedcd",
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