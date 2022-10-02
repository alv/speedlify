module.exports = {
	name: "alvaro.design", // optional, falls back to object key
	description: "Álvaro Castaño's website",
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 3, // (in minutes), 23 hours
	},
	urls: [
		"https://alvaro.design/"
	]
};