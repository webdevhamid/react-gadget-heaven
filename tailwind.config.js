/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#9538E2",
        "color-gray": "#09080F",
      },
    },
  },
  plugins: [require("daisyui")],
};
