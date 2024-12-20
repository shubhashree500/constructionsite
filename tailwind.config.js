/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // for Next.js 13+
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#800000", // Maroon color
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out", // Fade-in animation
        fadeInUp: "fadeInUp 1s ease-in-out", // Fade in with an upward slide
        gradient: "gradient 15s ease-in-out infinite", // Smooth gradient animation
        fadeInUpShort: "fadeInUpShort 0.7s ease-out forwards", // Shorter fade-in-up animation
        slideInLeft: "slideInLeft 1s ease-out", // Slide-in from left
        slideInRight: "slideInRight 1s ease-out", // Slide-in from right
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInUpShort: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        slideInLeft: {
          from: { transform: "translateX(-50px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          from: { transform: "translateX(50px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Added custom font family
      },
    },
  },
  plugins: [],
};
