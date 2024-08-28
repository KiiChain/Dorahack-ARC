import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s forwards",
        fadeOut: "fadeOut 2s forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: {
          0: "",
          1: "",
          2: "",
          3: "",
          4: "",
          5: "",
        },
        // Trading graphs
        graph: {
          red: "#FF6A6A",
          green: "#1AC069",
        },
        dark: {
          0: "#1E2224",
          1: "#16181A",
          2: "#181B1D",
          3: "#101213",
          4: "#222629",
          5: "#1F2224",
          6: "#2C3235",
        },
        light: {
          0: "#FFFFFF",
          1: "#FBFBFB",
          2: "#F6F6F6",
          3: "#F0EDF4",
        },
      },
      fontFamily: {
        satoshi: ["Satoshi-Variable", "sans-serif"],
      },
      screens: {
        p320: "320px",
        p375: "375px",
        p425: "425px",
        p500: "500px",
        p640: "640px",
        p768: "768px",
        p960: "960px",
        p1024: "1024px",
        p1170: "1170px",
        p1440: "1440px",
        p1920: "1920px",
      },
    },
  },
  plugins: [],
}
export default config
