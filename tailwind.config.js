/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Poppins: ["'Poppins'", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      Wanderlust: ["Wanderlust", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        SL: "auto 1fr",
      },
      backgroundImage: {
        adultBook: "url('./Contents/Attachments/Images/adultBooking.jpg')",
        childrenBook:
          "url('./Contents/Attachments/Images/childrenBooking.jpg')",
      },
    },
  },
  plugins: [],
};
