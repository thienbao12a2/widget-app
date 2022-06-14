require("@babel/register")({
	presets: ["@babel/preset-env", "@babel/preset-react"],
});

const Sitemap = require("react-router-sitemap").default;
const router = require("./src/components/Router").default;

function generateSitemap() {
	return new Sitemap(router)
		.build("http://www.vinanmail.com/")
		.save("./public/sitemap.xml");
}

generateSitemap();
