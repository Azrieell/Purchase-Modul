// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'margin': 'margin',
      },
    },
  },
  plugins: [],
}
