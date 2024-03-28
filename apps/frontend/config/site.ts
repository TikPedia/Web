export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "TikPedia",
	description: "Make video using AI.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
		  label: "Articles",
		  href: "/articles",
		}
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
};
