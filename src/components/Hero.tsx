import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="font-body text-sm uppercase tracking-[0.25em] text-muted-foreground mb-6 animate-fade-in">
            Welcome to my portfolio
          </p>

          {/* Name */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 animate-slide-up">
            John Doe
          </h1>

          {/* Title */}
          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-accent font-medium">Product Designer</span> & Creative Strategist
          </p>

          {/* Tagline */}
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up text-balance leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Crafting digital experiences that connect people with purpose. 
            I blend strategy, design, and technology to solve complex problems beautifully.
          </p>

          {/* CTA */}
          <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 font-body text-sm font-medium px-8 py-4 bg-foreground text-background rounded-full hover:shadow-accent hover:scale-105 transition-all duration-300"
            >
              Learn More About Me
              <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
