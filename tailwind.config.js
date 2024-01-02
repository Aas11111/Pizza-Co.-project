/** @type {import('tailwindcss').Config} */
//eslint-diable-next-line

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      height: {
        screen: "100dvh",
      },

      screens: {
        xs: "600px",

        // sm: "640px",
        // => @media (min-width: 640px) { ... }

        // md: "768px",
        // // => @media (min-width: 768px) { ... }

        // lg: "1024px",
        // // => @media (min-width: 1024px) { ... }

        // xl: "1280px",
        // // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
