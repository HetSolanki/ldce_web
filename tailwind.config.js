/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        4: "repeat(4, minmax(0, min-content))",
        2: "repeat(2, minmax(0, min-content))",
      },
    },
  },
  plugins: [],
};
