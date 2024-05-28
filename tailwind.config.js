/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cuswhite: "hsl(0, 0%, 98%)",
        cusgray: "hsl(0, 0%, 41%)",
        cusblack: "hsl(0, 0%, 8%)",
        cusred: "#ef4444",
      },
      fontSize: {
        default: 22,
      },
    },
  },
  plugins: [],
};
