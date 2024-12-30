import { client } from "../../../sanity/lib/client";
import { PortableText } from "next-sanity";
import { urlFor } from "../../../sanity/lib/image";
import Image from "next/image";
import CommentSection from "../../../app/components/CommentSection";

// Ensure revalidate timing
export const revalidate = 60; // seconds

// To create static pages for dynamic routes
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Query the post based on slug
  const query = `*[_type=='post' && slug.current == $slug][0]{
    title, summary, image, content,
    author->{bio, image, name}
  }`;
  
  const post = await client.fetch(query, { slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-[1216px] mx-auto">
      <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
        {/* Blog Title */}
        <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
          {post.title}
        </h1>

        <div className="flex items-center justify-center">
          {/* Featured Image */}
          <Image
            src={post.image ? urlFor(post.image).url() : "/Logo.jpg"}
            width={500}
            height={500}
            alt={post.title}
            className="rounded-s w-full"
          />
        </div>

        {/* Blog Summary Section */}
        <section>
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
            {post.title}
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
            {post.summary}
          </p>
        </section>

        {/* Author Section */}
        <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
          <Image
            src={post.author.image ? urlFor(post.author.image).url() : "/Logo.jpg"}
            width={200}
            height={200}
            alt="author"
            className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-dark dark:text-light">
              {post.author.name}
            </h3>
            <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
              {post.author.bio}
            </p>
          </div>
        </section>

        {/* Main Body of Blog */}
        <section
          className="text-lg leading-normal text-dark/80 dark:text-light/80
          prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold
          prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary
          prose-strong:text-dark dark:prose-strong:text-white"
        >
          <PortableText value={post.content} />
        </section>
      </article>

      <div>
        <h1 className="text-2xl md:text-4xl text-center">Welcome to the Comment Section</h1>
        <CommentSection />
      </div>
    </div>
  );
}
