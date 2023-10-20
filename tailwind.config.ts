import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: "#363062",
        bg2: "#4D4C7D",
        primary: "#F99417",
        white: "#F5F5F5",
        sea1: "#6499E9",
        sea2: "#9EDDFF",
        sea3: "#A6F6FF",
        sea4: "#BEFFF7",
        aurora1: "#5D12D2",
        aurora2: "#B931FC",
        aurora3: "#FF6AC2",
        aurora4: "#FFE5E5",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config
