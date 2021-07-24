module.exports = {
	// mode: "jit",
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				primarySoft: "var(--color-primarySoft)",
				primaryBold: "var(--color-primaryBold)",
				primaryBg: "var(--color-primaryBg)",
				primaryBgSoft: "var(--color-primaryBgSoft)",
				primaryBgSofter: "var(--color-primaryBgSofter)",
				onPrimaryBg: "var(--color-onPrimaryBg)",
				onPrimaryBgSoft: "var(--color-onPrimaryBgSoft)",
				onPrimaryBgSofter: "var(--color-onPrimaryBgSofter)",

				neutralBg: "var(--color-neutralBg)",
				neutralBgSoft: "var(--color-neutralBgSoft)",
				neutralBgSofter: "var(--color-neutralBgSofter)",
				neutral: "var(--color-neutral)",
				neutralBold: "var(--color-neutralBold)",
				neutralSoft: "var(--color-neutralSoft)",
				onNeutralBg: "var(--color-onNeutralBg)",
				onNeutralBgSoft: "var(--color-onNeutralBgSoft)",
				onNeutralBgSofter: "var(--color-onNeutralBgSofter)",
			},
			screens: {
				"3xl": "2000px",
			},
		},
	},
	variants: {
		extend: {
			animation: ["group-hover"],
			visibility: ["hover", "focus"],
			height: ["hover", "focus", "group-hover"],
			scale: ["hover", "focus"],
			textColor: ["active", "hover", "focus"],
			padding: ["last"],
			margin: ["last"],
			fontWeight: ["hover", "active", "group-hover"],
			zIndex: ["hover", "group-hover"],
			gradientColorStops: ["hover", "group-hover"],
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
