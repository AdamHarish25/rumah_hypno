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
    screens: {
      xs: "0px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1806px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      gridTemplateColumns: {
        SL: "auto 1fr",
      },
      gridTemplateRows: {
        SL: "auto 1fr",
      },
      backgroundImage: {
        adultBook: "url('./Contents/Attachments/Images/adultBooking.jpg')",
        childrenBook:
          "url('./Contents/Attachments/Images/childrenBooking.jpg')",
        hypnosis: "url('./Contents/Attachments/Images/hypnosis.png')",
        bgVector: "url('./Contents/Attachments/Images/bgVector.png')",
        background: "url('./Contents/Attachments/Images/background.png')",
      },
    },
  },
  plugins: [],
};
