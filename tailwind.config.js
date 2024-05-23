/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './pages/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}

