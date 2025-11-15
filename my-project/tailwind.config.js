/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  
  theme: {
    extend: {
      keyframes: {
        showmobile: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        showmobile: 'showmobile 0.5s ease-in-out ',
      },
    },

    fontFamily: {
      Alan: ["Alan Sans", "sans-serif"],
      Pacifico: ["Pacifico", "cursive"]
    },
    screens:{
      sm:"200px",
      md:"540px",
      lg:"768px",
      xl:"1000px"
    },

  },
  plugins: [],
};
