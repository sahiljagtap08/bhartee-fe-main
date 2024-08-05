const URL = "http://localhost:3000";

export default async function sitemap() {
  const routes = ["", "/about", "/pricing", "/blog"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
