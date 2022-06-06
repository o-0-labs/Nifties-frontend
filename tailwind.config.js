module.exports = {
  content: [
    "./src/nifities_assets/src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      colors: {
        'brand': '#00BCC2',
        'brand-text-black': '#04091E',
        'brand-text-gray': '#898A8C',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Urbanist': ['Urbanist', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: true,
  },
  plugins: [
  ],
}
