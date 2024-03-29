module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#08A78B",
          lightest: "#D3F0E5",
          lighter: "#A2DFD4",
        },
        blue: "#9FDEF2",
        purple: "#EDC9FF",
        pink: {
          light: "#FFEFF6",
          DEFAULT: "#FFC8E1",
        },
        yellow: "#FCF058",
        white: "#ffffff",
        black: "#3F4254",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        title: ["Allura", "sans-serif"],
      },
      backgroundImage: {
        duck: "url('/src/assets/img/bg-duck.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
