module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkest: "#000",
      },
      fontFamily: {
        oswald: "OswaldBold, serif",
        oswaldBold: "OswaldBold, serif",
        oswaldExtraLight: "OswaldExtraLight, serif",
        oswaldLight: "OswaldLight, serif",
        oswaldMedium: "OswaldMedium, serif",
        oswaldRegular: "OswaldRegular, serif",
        oswaldSemiBold: "OswaldSemiBold, serif",
        gayathriThin: "GayathriThin, sans-serif",
        gayathriBold: "GayathriBold, sans-serif",
        gayathriRegular: "GayathriRegular, sans-serif",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
