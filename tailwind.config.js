module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          normal: "#08A78B",
          lightest: "#D3F0E5",
          lighter: "#A2DFD4",
        },
        blue: "#9FDEF2",
        purple: "#EDC9FF",
        pink: "#FED4E7",
        yellow: "#FCF058",
        white: "#F7F7F7",
        black: "#3F4254",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        title: ["Allura", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
