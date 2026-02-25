import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";

const Work = () => {
  const projects = [
    {
      title: "Fintech Dashboard",
      category: "Product Design",
      description: "A comprehensive analytics platform for financial advisors to track portfolios and market trends.",
      year: "2024",
    },
    {
      title: "E-Commerce Redesign",
      category: "UX Strategy",
      description: "Complete overhaul of a retail brand's digital shopping experience, increasing conversions by 45%.",
      year: "2023",
    },
    {
      title: "Health & Wellness App",
      category: "Mobile Design",
      description: "Designing an intuitive fitness tracking app that makes health goals feel achievable.",
      year: "2023",
    },
    {
      title: "SaaS Brand Identity",
      category: "Branding",
      description: "Creating a cohesive visual identity for a B2B software company entering new markets.",
      year: "2022",
    },
    {
      title: "Travel Booking Platform",
      category: "Product Design",
      description: "Reimagining the travel booking experience with a focus on personalization and ease of use.",
      year: "2022",
    },
    {
      title: "Educational Platform",
      category: "UX Research",
      description: "Research-driven redesign of an online learning platform serving millions of students worldwide.",
      year: "2021",
    },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Portfolio
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal italic text-foreground mb-8">
                Selected Projects
              </h1>
              <p className="font-body text-base text-muted-foreground max-w-xl mx-auto mb-8">
                A collection of projects that showcase my approach to design, strategy, and problem-solving.
              </p>
              <div className="w-12 h-px bg-foreground/30 mx-auto" />
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-16">
              {projects.map((project, index) => (
                <article
                  key={index}
                  className="group cursor-pointer"
                >
                  {/* Project Image Placeholder */}
                  <div className="aspect-[4/3] bg-secondary/50 border border-border flex items-center justify-center relative overflow-hidden mb-6 group-hover:border-foreground/30 transition-colors duration-300">
                    <span className="font-display text-6xl italic text-foreground/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-foreground/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 border border-background flex items-center justify-center">
                        <ArrowUpRight className="w-5 h-5 text-background" />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {project.category}
                      </span>
                      <span className="font-body text-xs text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl italic text-foreground mb-3 group-hover:opacity-70 transition-opacity duration-300">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Speaking Engagements */}
            <div className="mt-32">
              <div className="text-center mb-20">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                  Talks & Panels
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-normal italic text-foreground mb-8">
                  Speaking Engagements
                </h2>
                <p className="font-body text-base text-muted-foreground max-w-xl mx-auto mb-8">
                  Sharing ideas on design, strategy, and the future of digital experiences.
                </p>
                <div className="w-12 h-px bg-foreground/30 mx-auto" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "The Future of Design Systems",
                    description: "A deep dive into how scalable design systems are reshaping product development and team collaboration.",
                    event: "Design Summit 2024",
                  },
                  {
                    title: "Bridging UX and Business Strategy",
                    description: "Exploring the intersection of user experience and business goals to drive meaningful outcomes.",
                    event: "Product Conference 2023",
                  },
                  {
                    title: "Designing for Accessibility",
                    description: "Why inclusive design isn't optional — and practical steps to make every product more accessible.",
                    event: "A11y Week 2023",
                  },
                ].map((talk, index) => (
                  <div key={index} className="group">
                    {/* Video Placeholder */}
                    <div className="aspect-video bg-secondary/50 border border-border flex items-center justify-center mb-5 group-hover:border-foreground/30 transition-colors duration-300">
                      <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                      </div>
                    </div>
                    <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                      {talk.event}
                    </span>
                    <h3 className="font-display text-xl italic text-foreground mb-2">
                      {talk.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {talk.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
