import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brand-primary-bg": "rgb(193,193,255)",
        "brand-secondary": "rgb(246,133,30)",
        "brand-secondary-hover": "rgb(195,99,13)",
        "brand-accent": "rgb(156,202,58)",
        "brand-gray-blue": "rgb(230,230,255)",
        "brand-purple": "rgb(118,84,156)",
      }
    },
  },
  plugins: [],
};
export default config;
