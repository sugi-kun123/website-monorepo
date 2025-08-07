// packages/ui/tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // uiパッケージ内のファイルをスキャン
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
