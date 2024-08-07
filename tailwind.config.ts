import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      before: {
        "punch-hole": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "20px",
          backgroundColor: "black",
          borderRadius: "0 0 50% 50%",
          top: "-20px",
        },
      },
      after: {
        "punch-hole": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "20px",
          backgroundColor: "black",
          borderRadius: "50% 50% 0 0",
          bottom: "-20px",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        pulang: ["var(--font-pulang)"],
        poetsen: ["var(--font-poetsen)"],
        bogart: ["var(--font-bogart)"],
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
