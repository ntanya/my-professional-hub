import { ArrowUpRight } from "lucide-react";

const Work = () => {
  const projects = [
    {
      title: "Fintech Dashboard",
      category: "Product Design",
      description: "A comprehensive analytics platform for financial advisors to track portfolios and market trends.",
      year: "2024",
      color: "bg-blue-500/10",
    },
    {
      title: "E-Commerce Redesign",
      category: "UX Strategy",
      description: "Complete overhaul of a retail brand's digital shopping experience, increasing conversions by 45%.",
      year: "2023",
      color: "bg-emerald-500/10",
    },
    {
      title: "Health & Wellness App",
      category: "Mobile Design",
      description: "Designing an intuitive fitness tracking app that makes health goals feel achievable.",
      year: "2023",
      color: "bg-orange-500/10",
    },
    {
      title: "SaaS Brand Identity",
      category: "Branding",
      description: "Creating a cohesive visual identity for a B2B software company entering new markets.",
      year: "2022",
      color: "bg-purple-500/10",
    },
  ];

  return (
    <section id="work" className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-[0.25em] text-accent font-medium mb-4">
              Featured Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Selected Projects
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2"
              >
                {/* Project Image Placeholder */}
                <div className={`aspect-[4/3] ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-foreground/5" />
                  <span className="font-display text-6xl font-bold text-foreground/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-body text-xs uppercase tracking-widest text-accent font-medium">
                      {project.category}
                    </span>
                    <span className="font-body text-sm text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 font-body text-sm font-medium text-foreground border-2 border-foreground px-8 py-4 rounded-full hover:bg-foreground hover:text-background transition-all duration-300">
              View All Projects
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
