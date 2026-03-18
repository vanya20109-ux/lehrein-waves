import { ArrowLeft, Calendar } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "@/data/blogs";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((item) => item.id === id);

  if (!post) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center space-y-3">
          <h1 className="font-display text-3xl font-semibold text-foreground">Post not found</h1>
          <p className="text-muted-foreground">Check the blog index to explore other stories.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Back to Blog <ArrowLeft size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{post.tag}</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold text-foreground">{post.title}</h1>
          <div className="mt-3 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
            <span>{post.readTime}</span>
            <span>by {post.author}</span>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-2xl mx-auto">{post.excerpt}</p>
        </div>
      </section>

      <WaveDivider />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          {post.highlights.map((item) => (
            <div key={item} className="rounded-2xl border border-navy/10 bg-card/80 p-5 text-sm text-muted-foreground">
              {item}
            </div>
          ))}
          {post.sections.map((section) => (
            <article key={section.heading} className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">{section.heading}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
