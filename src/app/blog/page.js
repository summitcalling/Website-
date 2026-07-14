import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { posts } from "@/data/blog";
import { site } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export const metadata = {
  title: `Blog — ${site.name}`,
  description: "Trekking guides, packing lists, and Himalayan travel tips.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Trekking Guides & Tips"
        description="Practical advice from our guides — packing, seasons, altitude, and everything in between."
      />
      <section className="bg-cream">
        <div className={`${CONTAINER} py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5 hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
                />
              </div>
              <div className="p-5">
                <div className="text-xs text-ink/45">
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
                <h2 className="mt-2 font-serif text-lg font-semibold text-ink group-hover:text-orange transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
