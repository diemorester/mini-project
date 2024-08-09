import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'sept-green': "#3BB556",
        'sept-black': "#131313",
        'sept-gray': "#2A2A2A",
        'sept-purple': "#8A1EC6",
        'sept-white': "#F9F6EE"
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
