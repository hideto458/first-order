/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"M PLUS Rounded 1c"'],
    },
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar")],
};
