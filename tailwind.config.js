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
          "url('https://images.unsplash.com/photo-1534841090574-cba2d662b62e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHNwYWNlfGVufDB8fDB8fHww&w=1000&q=80')",
      },
    },
  },

  plugins: [],
};
