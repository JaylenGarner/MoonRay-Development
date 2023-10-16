/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        space:
          "url('https://moonray-development.s3.amazonaws.com/Public/Assets/background-video-poster.jpg')",
      },
    },
  },
  plugins: [],
};
