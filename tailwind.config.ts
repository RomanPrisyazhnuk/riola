import TypographyPlugin from "@tailwindcss/typography";
import FormPlugin from "@tailwindcss/forms";
import ContainerQueriesPlugin from "@tailwindcss/container-queries";
import { type Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{ts,tsx}"],
	plugins: [TypographyPlugin, FormPlugin, ContainerQueriesPlugin],
	theme: {
	
		borderRadius: {
		  'none': '0',
		  'sm': '0.125rem',
		  DEFAULT: '0.25rem',
		  'md': '0.375rem',
		  'lg': '32px',
		  'full': '9999px',
		},
		extend: {
			colors: {
			  'textColor': '#0B2629',
			},
		},
	  }
};

export default config;
