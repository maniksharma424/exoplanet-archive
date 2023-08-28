/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monstreat: ["Montserrat"],
      },
      backgroundImage: {
        space:
          "url('https://images3.alphacoders.com/119/1197977.jpg')",
      },
    },
  },

  plugins: [],
};
