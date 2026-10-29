import { Calendar, User, ArrowRight, PenLine } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogs";

const Blog = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky/10 via-ice to-white -z-10" />
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Student-authored articles that explore psychology through music, film, economics, and design. We publish reflections, case studies, and pilot chapter stories from across the Lehrein network.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {blogPosts.map((post, i) => (
              <article
                key={post.id}
                className={`bg-card/80 backdrop-blur-sm rounded-2xl p-7 border border-navy/10 hover-lift animate-fade-up-delay-${Math.min(i + 1, 3)}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-navy/10 text-navy text-xs font-semibold">{post.tag}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={12} /> {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-3">{post.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                    <User size={14} /> {post.author}
                  </span>
                  <a
                    href={`/blog/${post.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read more <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Submit Article CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <PenLine size={28} className="text-primary" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Want to Write for Lehrein?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Submit an article that reflects on a Lehrein module, an interdisciplinary idea, or a piece of mentorship that helped your chapter grow. We amplify student voices across cities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-navy text-navy-foreground font-semibold shadow-lg hover:shadow-xl hover:bg-navy/90 transition-all"
          >
            Submit an Article <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
