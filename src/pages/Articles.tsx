import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { getArticles } from "@/lib/articles";

const Articles = () => {
  const articles = getArticles();

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <p className="font-body text-sm uppercase tracking-[0.25em] text-accent font-medium mb-4">
                Blog
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Articles & Insights
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Thoughts on design, strategy, and the creative process. Sharing what I've learned along the way.
              </p>
              <div className="w-16 h-1 bg-accent mx-auto rounded-full mt-6" />
            </div>

            {/* Articles List */}
            {articles.length > 0 ? (
              <div className="space-y-8">
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/articles/${article.slug}`}
                    className="group block bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-body text-xs uppercase tracking-widest text-accent font-medium px-3 py-1 bg-accent/10 rounded-full">
                        {article.category}
                      </span>
                      {article.featured && (
                        <span className="font-body text-xs uppercase tracking-widest text-foreground font-medium px-3 py-1 bg-foreground/10 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <h2 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                      {article.title}
                    </h2>

                    <p className="font-body text-muted-foreground leading-relaxed mb-4">
                      {article.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(article.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {article.readTime}
                        </span>
                      </div>

                      <span className="flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Read More
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card rounded-2xl shadow-soft">
                <p className="font-body text-lg text-muted-foreground mb-4">
                  No articles yet.
                </p>
                <p className="font-body text-muted-foreground">
                  Upload markdown files to <code className="bg-secondary px-2 py-1 rounded text-sm">src/articles/</code> to add articles.
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
