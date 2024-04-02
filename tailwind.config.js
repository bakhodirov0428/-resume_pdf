/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,js,tsx,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {},
  },
  plugins: [],
};
