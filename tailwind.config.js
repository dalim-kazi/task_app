/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobile': "450px",
      "sm": "640px",
      "md": "768px",
      "lg": "1000px",
      "xl": "1280",
     "2xl":"1536px"
    }
  },
  daisyui: {
    themes: ["garden"],
  },
  plugins: [require("daisyui")],
}
