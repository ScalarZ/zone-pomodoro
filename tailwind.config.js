module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: "#F3EED9",
      secondary: "#454545",
    },
    backgroundColor: {
      primary: "#FF4444",
      secondary: "#F3EED9",
      input: "#E0DBC3",
    },
    borderColor: {
      primary: "#F3EED9",
      secondary: "#FF4444",
    },
    maxWidth: {
      lg: "512px",
    },
    maxHeight: {
      lg: "650px",
    },
    screens: {
      sm: "450px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
