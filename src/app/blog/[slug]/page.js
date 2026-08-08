import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/blog";
import { site } from "@/data/site";
import { CONTAINER } from "@/lib/layout";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — ${site.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-ink">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className={`relative w-full pb-14 pt-14 ${CONTAINER}`}>
          <Link href="/blog" className="text-sm text-white/70 hover:text-white">
            ← All Articles
          </Link>
          <h1 className="mt-4 font-serif text-2xl sm:text-3xl font-semibold text-white">
            {post.title}
          </h1>
          <div className="mt-3 text-sm text-white/60">
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className={`${CONTAINER} py-14`}>
          <article className="mx-auto max-w-3xl space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-ink/75 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
