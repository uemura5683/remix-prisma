import type { Config } from "tailwindcss";

export default {
  prefix: "tw-",
  content: [
    "app/routes/*.{js,jsx,ts,tsx}",
    "app/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
