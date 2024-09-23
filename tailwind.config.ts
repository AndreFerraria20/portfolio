import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'fit': 'clamp(1rem, 2vw, 4rem)', 
      },

      fontFamily:{
        miloner:['var(--font-miloner)'],
        sequelSans:['var(--font-sequel-sans)']
      },
      colors: {
        primary: "var(--primary)",
        secundary: "var(--secundary)",
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")
  ],
};
export default config;
