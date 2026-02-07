import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Layout from "@/components/Layout";
import { getArticleBySlug } from "@/lib/articles";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!article) {
    return (
      <Layout>
        <section className="pt-32 pb-24 lg:pb-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl font-semibold text-foreground mb-4">
                Article Not Found
              </h1>
              <p className="font-body text-muted-foreground mb-8">
                The article you're looking for doesn't exist.
              </p>
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-accent hover:underline"
              >
                <ArrowLeft size={16} />
                Back to Articles
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="pt-32 pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 font-body text-sm font-medium text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to Articles
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-body text-xs uppercase tracking-widest text-accent font-medium px-3 py-1 bg-accent/10 rounded-full">
                  {article.category}
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                {article.title}
              </h1>

              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
                {article.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border">
                <span className="flex items-center gap-2">
                  <User size={16} />
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {formatDate(article.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {article.readTime}
                </span>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none
              prose-headings:font-display prose-headings:font-semibold prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:font-body prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-accent prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:font-body prose-ul:text-muted-foreground
              prose-ol:font-body prose-ol:text-muted-foreground
              prose-li:mb-2
              prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-secondary prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-foreground
              prose-code:bg-secondary prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
              prose-pre:bg-foreground prose-pre:text-background prose-pre:rounded-xl prose-pre:p-6
              prose-img:rounded-xl prose-img:shadow-card
            ">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ArticleDetail;
