/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black1: "#343434",
        principal: "#ffa97a",
        Blanc: "#fcfafa",
        gray1: "#484848",
        pink1: "#DE3163",
        green1: "#aac402",
      },
      width: {
        104: "27rem",
      },
      flex: {
        2: "2 2 0%",
      },
    },
  },
  plugins: [],
};
