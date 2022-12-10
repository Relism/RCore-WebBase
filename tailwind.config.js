/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/components/ConfigFeature/*.{js,jsx,ts,tsx}",
    "./src/components/HomeFeature/*.{js,jsx,ts,tsx}",
    "./src/components/RHostingFeature/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#51FFFD",
        accent: "#83FFC5",
        secondary: "#DF9AFF",
        grey: "#1E2124",
        "accent--dark": "#b0ffda",
        "grey--light": "#424549",
      },
      fontFamily: {
        main: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
