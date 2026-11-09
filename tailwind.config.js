/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0e0e10",
        cream: "#faf9f7",
        crimson: {
          DEFAULT: "#ef4444",
          hover: "#dc2626",
          glow: "rgba(239, 68, 68, 0.15)",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
