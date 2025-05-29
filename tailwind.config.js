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
        primary: "#bc6c25",
        secondary: "#dda15e",
        fontcolor: "#9c6644",
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