export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");
  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");
  // generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="<a href="http://www.sitemaps.org/schemas/sitemap/0.9">http://www.sitemaps.org/schema...</a>"> 
      <url>
      <loc>https://www.zadip.sa/muaref</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      </url>
      <url>
      <loc>https://www.zadip.sa/eGov_services/muqeem/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      </url>
      <url>
      <url>
      <loc>https://www.zadip.sa/eGov_services/tam/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      </url>
      </url>
      <url>
      <loc>https://www.zadip.sa/eGov_services/smartgate/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      </url>
      <url>
      <loc>https://www.zadip.sa/eGov_services/masarat/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      </url>
      <url>
      <loc>https://www.zadip.sa/professional_services/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      </url>
      <url>
      <loc>https://www.zadip.sa/client_partners/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      </url>
      <url>
      <loc>https://www.zadip.sa/about-us/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      </url>
      <url>
      <loc>https://www.zadip.sa/recruitment/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      </url>
      <url>
      <loc>https://www.zadip.sa</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      </url>
      </urlset>`;
  res.end(xml);
}
