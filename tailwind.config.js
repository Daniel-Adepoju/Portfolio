/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17191a",
        ash: "#292d2e",
        "ash-light": "#3b4142",
        gold: "#d6ad55",
        "gold-light": "#f0d58a",
      },
      fontFamily: {
        display: ["var(--font-eczar)", "sans-serif"],
        body: ["var(--font-mukta)", "sans-serif"],
      },
      boxShadow: { gold: "0 14px 40px rgba(214, 173, 85, 0.18)" },
    },
  },
  plugins: [],
}
