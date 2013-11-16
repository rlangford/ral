exports.robots = function(req,res){
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("#robots.txt for http://www.ryanlangford.com/\nUser-agent: *\nSitemap: http://www.ryanlangford.com/sitemap.xml");
};

exports.sitemap = function(req,res){
	res.writeHead(200, {"Content-Type": "application/xml"});
	res.end("<?xml version=\"1.0\" encoding=\"UTF-8\" ?><urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\"><url><loc>http://www.ryanlangford.com/</loc><lastmod>2013-08-27</lastmod><prioroity>1.0</prioroity><changefreq>weekly</changefreq></url><url><loc>http://www.ryanlangford.com/bookmarks</loc><lastmod>2013-08-27</lastmod><prioroity>1.0</prioroity><changefreq>weekly</changefreq></url><url><loc>http://www.ryanlangford.com/resume</loc><lastmod>2013-08-27</lastmod><prioroity>1.0</prioroity><changefreq>weekly</changefreq></url></urlset>");
};