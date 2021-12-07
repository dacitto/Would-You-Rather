module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        wyr: ["Covered By Your Grace"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
