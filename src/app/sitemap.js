import { treks } from "@/data/treks";
import { experiences } from "@/data/experiences";
import { posts as blogPosts } from "@/data/blog";

const BASE_URL = "https://summitcalling.com";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/treks",
    "/experiences",
    "/about",
    "/contact",
    "/blog",
    "/fixed-departures",
    "/terms",
    "/cancellation-policy",
    "/privacy-policy",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const trekRoutes = treks.map((trek) => ({
    url: `${BASE_URL}/treks/${trek.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const experienceRoutes = experiences.map((exp) => ({
    url: `${BASE_URL}/experiences/${exp.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...trekRoutes, ...experienceRoutes, ...blogRoutes];
}
