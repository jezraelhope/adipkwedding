/* @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      parisienne: "Parisienne",
      adipk: "Monsieur La Doulaise",
    },
    fontSize: {
      banner: "max(9vw, 5rem)",
      postBanner: "max(4.5vw, 2rem)",
      h3: "max(3.5vw, 2rem)",
      h4: "max(2vw, 1.7rem)",
      h5: "max(2vw, 1.3rem)",
      p: "max(1vw, .5rem)",
      p2: "max(1.3vw, 1rem)",
    },
    colors: {
      gold: "#d7c695",
      metallic: "#d8a731",
      pineTree: "#26321f",
      eerie: "#1f1f1d",
    },
    extend: {
      backgroundImage: {
        timmatimmi: "url('./dist/img/timmatimmi.jpeg')",
      },
    },
  },
  extend: {},
  plugins: [],
};
