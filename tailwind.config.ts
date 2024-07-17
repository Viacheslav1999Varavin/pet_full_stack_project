import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1280px',
      xl2: '1440px'
    },
    colors: {
      'white': '#FFFFFF',
      'bg': '#D9D9D9',
      'bg1': '#FEF9F3',
      'beige': '#D8BEA5',
      'pink': '#F6CCE0',
      'green': '#56665A',
      'black': '#180D0B',
      'gray' :'#7D7D7D'
    },
  },
  plugins: [],
};
export default config;
