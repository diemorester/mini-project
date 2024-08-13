import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'noise': "url('/bg-noise.png')",
      },
      colors: {
        "sept-green": "#3BB556",
        "sept-black": "#131313",
        "sept-gray": "#2A2A2A",
        "sept-purple": "#8A1EC6",
        "sept-white": "#F9F6EE",
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "spin-slow-reversed": "reversed 15s linear infinite",
        "shift": "shift 0.2s linear infinite both",
      },
      keyframes: {
        shift: {
          "0%": { transform: "translateX(1%) translateY(1%)" },
          "100%": { transform: "translateX(-1%) translateY(-1%)" },
        },
        reversed: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
