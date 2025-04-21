module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marco: ["Marco", "serif"],
        fatfrank: ["FatFrank", "sans-serif"],
        ffProvidence: ["ff-providence-sans-web-pro", "sans-serif"],
      },
    },
  },
};
