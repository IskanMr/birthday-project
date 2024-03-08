module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          normal: "#08A78B",
          light: "#D3F0E5",
        },
        blue: "9FDEF2",
        purple: "#EDC9FF",
        pink: "#FED4E7",
        yellow: "#FCF058",
        white: "#F7F7F7",
        black: "#3F4254",
      },
      fontFamily: {
        display: ["Harley", "Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
