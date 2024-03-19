const fs = require('fs');
const path = require('path');

// Lista ścieżek twojej strony
const pages = [
	'/',
	'/uroczystosci-prywatne',
	'/uroczystosci-prywatne/wesela',
	'/uroczystosci-prywatne/chrzciny',
	'/uroczystosci-prywatne/komunie',
	'/uroczystosci-prywatne/urodziny',
	'/uroczystosci-prywatne/wydarzenia-rodzinne',
	'/imprezy-masowe',
	'/teraz-u-nas',
	'/maskotki-wypozyczalnia',
	'/kontakt',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(page) =>
			`<url>
  <loc>${`https://przebieranka.pl${page}`}</loc>
</url>`
	)
	.join('')}
</urlset>
`;

fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap);
