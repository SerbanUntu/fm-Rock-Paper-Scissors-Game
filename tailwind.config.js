/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow': ["'Barlow Semi Condensed'", "sans-serif"],
      },
      backgroundImage: {
        'bg': "radial-gradient(circle at top, #1f3756, #141539)",
        'scissors': "linear-gradient(0deg, #ec9e0e, #eca922)",
        'paper': "linear-gradient(0deg, #4865f4, #5671f5)",
        'rock': "linear-gradient(0deg, #dc2e4e, #dd405d)",
        'lizard': "linear-gradient(0deg, #834fe3, #8c5de5)",
        'spock': "linear-gradient(0deg, #40b9ce, #52bed1)",
      },
      colors: {
        'dark': '#3b4363',
        'score': '#2a46c0',
        'header-outline': '#606e85',
      }
    },
  },
  plugins: [],
};

