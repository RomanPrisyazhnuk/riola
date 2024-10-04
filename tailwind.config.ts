import TypographyPlugin from "@tailwindcss/typography";
import FormPlugin from "@tailwindcss/forms";
import ContainerQueriesPlugin from "@tailwindcss/container-queries";
import { type Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [TypographyPlugin, FormPlugin, ContainerQueriesPlugin, nextui()],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "12px",
      lg: "32px",
      full: "9999px",
    },
    extend: {
      colors: {
        textColor: "#0B2629",
        primary: "#06b6d4",
      },
    },
  },
};

export default config;
