module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    content: ["_site/**/*.html"],
    options: {
      safelist: [
        "welcomments__nesting-level-1",
        "welcomments__nesting-level-2",
        "welcomments__nesting-level-3",
        "welcomments__nesting-level-4",
        "welcomments__nesting-level-5",
        "welcomments__nesting-level-6",
        "welcomments__nesting-level-7",
        "welcomments__nesting-level-8",
        "welcomments__nesting-level-9",
      ],
    },
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
