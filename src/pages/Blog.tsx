import { Calendar, User, ArrowRight, PenLine } from "lucide-react";
import WaveDivider from "@/components/WaveDivider";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tag: string;
}

const posts: BlogPost[] = [
  {
    id: "shadow-puppetry-healing",
    title: "How Shadow Puppetry Became a Tool for Healing",
    excerpt: "When we first introduced shadow puppetry in a school setting, we didn't know what to expect. What unfolded was a powerful lesson in how ancient art forms can unlock emotional expression in ways words cannot.",
    author: "Vanya",
    date: "2024-12-15",
    readTime: "5 min read",
    tag: "Modules",
  },
  {
    id: "why-psychology-matters",
    title: "Why Psychology Should Be Part of Every Curriculum",
    excerpt: "Mental health isn't a luxury — it's a fundamental need. Yet most Indian schools treat it as an afterthought. Here's why integrating psychology into education could change an entire generation.",
    author: "Vanya",
    date: "2024-11-28",
    readTime: "7 min read",
    tag: "Opinion",
  },
  {
    id: "building-lehrein-chapter",
    title: "What I Learned Building Lehrein's First Chapter",
    excerpt: "Starting a student-led psychology organization from scratch taught me more about leadership, empathy, and persistence than any textbook ever could. Here's the honest story.",
    author: "Vanya",
    date: "2024-11-10",
    readTime: "6 min read",
    tag: "Story",
  },
];

const Blog = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foam/60 via-background to-background -z-10" />
        <div className="container mx-auto px-4 text-center animate-fade-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Student-authored articles on psychology, mental health, and the Lehrein journey. Want to contribute? Reach out to us!
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {posts.map((post, i) => (
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
                  <button className="text-sm text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Read more <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Submit Article CTA */}
      <section className="py-20 bg-gradient-to-b from-navy/5 to-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <PenLine size={28} className="text-primary" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Want to Write for Lehrein?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We welcome student-authored articles on psychology, mental health, wellness, and personal experiences. Share your voice and contribute to the movement.
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
