import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-to-top":
					"linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
			},
			fontFamily: {
				relinda: ["relinda", "cursive"],
			},
			colors: {
				relinda: "#71f410",
			},
		},
	},
	plugins: [animations],
};
