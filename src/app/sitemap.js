const URL = "http://bhartee.ai";

export default async function sitemap() {
  const routes = ["", "/about", "/pricing", "/blog"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
