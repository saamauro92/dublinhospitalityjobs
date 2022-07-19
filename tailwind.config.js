module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')

  ],
}