
/** @type {import('tailwindcss').Config} */

export const content = ["./**/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      stone: {
        100: "hsl(30, 54%, 90%)",
        150: "hsl(30, 18%, 87%)",
        600: "hsl(30, 10%, 34%)",
        900: "hsl(24, 5%, 18%)"
      },
      brown: {
        800: "hsl(14, 45%, 36%)"
      },
      rose: {
        50: "hsl(330, 100%, 98%)",
        800: "hsl(332, 51%, 32%)",

      }
    },
    fontFamily: {
      outfitblack: ["OutfitBlack", "sans-serif"],
      outfitbold: ["OutfitBold", "sans-serif"],
      outfitextrabold: ["OutfitExtraBold", "sans-serif"],
      outfitlight: ["OutfitLight", "sans-serif"],
      outfitmedium: ["OutfitMedium", "sans-serif"],
      outfitregular: ["OutfitRegular", "sans-serif"],
      outfitsemibold: ["OutfitSemiBold", "sans-serif"],
      outfitthin: ["OutfitThin", "sans-serif"],
      youngserif: ["YoungSerif", "cursive"],
    },
    screens:{
      'sm':'375px', // => @media (min-width: 640px) {....}
      'md':'768px', // => @media (min-width: 768px) {....}
      "lg":"1024px", // => @media (min-width: 1024px) {....}
      "xl":"1280px", // => @media (min-width: 1280px) {....}
      "2xl":"1536px", // => @media (min-width: 1536px){....}
    }
  },
};
export const plugins = [{
  tailwindcss: {},
  autoprefixer: {}
}];






