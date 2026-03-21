import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { getArticles } from "@/lib/articles";

const Articles = () => {
  const articles = getArticles();

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Journal</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-8">
                Articles & Insights
              </h1>
              <p className="font-body text-base text-muted-foreground max-w-xl mx-auto mb-8">
                Thoughts on techology, craft of presales, career growth. Sharing what I've learned along the way.
              </p>
              <div className="w-12 h-px bg-foreground/30 mx-auto" />
            </div>

            {/* Articles List */}
            {articles.length > 0 ? (
              <div className="space-y-0 divide-y divide-border">
                {articles.map((article) => (
                  <Link key={article.slug} to={`/articles/${article.slug}`} className="group block py-10 first:pt-0">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {article.category}
                      </span>
                      {article.featured && (
                        <span className="font-body text-xs uppercase tracking-[0.2em] text-foreground">· Featured</span>
                      )}
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl italic text-foreground mb-4 group-hover:opacity-70 transition-opacity duration-300">
                      {article.title}
                    </h2>

                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                      {article.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {formatDate(article.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} />
                          {article.readTime}
                        </span>
                      </div>

                      <span className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-border">
                <p className="font-body text-base text-muted-foreground mb-4">No articles yet.</p>
                <p className="font-body text-sm text-muted-foreground">
                  Upload markdown files to <code className="bg-secondary px-2 py-1 text-xs">src/articles/</code> to add
                  articles.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Articles;
