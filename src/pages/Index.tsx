import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 lg:px-12 pt-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Greeting */}
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 animate-fade-in">
              Portfolio
            </p>

            {/* Name */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-foreground mb-8 animate-slide-up leading-tight">
              John Doe
            </h1>

            {/* Title */}
            <h2
              className="font-display text-2xl md:text-3xl text-foreground mb-6 animate-slide-up italic"
              style={{ animationDelay: "0.1s" }}
            >
              Product Designer & Creative Strategist
            </h2>

            {/* Tagline */}
            <p
              className="font-body text-base text-muted-foreground max-w-xl mx-auto mb-14 animate-slide-up text-balance leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Crafting digital experiences that connect people with purpose. Blending strategy, design, and technology
              to solve complex problems beautifully.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] px-8 py-4 bg-foreground text-background hover:bg-accent-secondary transition-all duration-300"
              >
                About Me
                <ArrowRight size={14} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-3 font-body text-xs uppercase tracking-[0.2em] px-8 py-4 border border-foreground text-foreground hover:bg-accent-secondary hover:text-accent-secondary-foreground hover:border-accent-secondary transition-all duration-300"
              >
                View Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
