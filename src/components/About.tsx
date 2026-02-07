import { Sparkles, Target, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Creative Vision",
      description: "I approach every project with fresh eyes and innovative thinking, always seeking elegant solutions.",
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Design decisions are guided by clear objectives and measurable outcomes that drive real impact.",
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "Understanding people is at the core of everything I do. Great design serves real human needs.",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-body text-sm uppercase tracking-[0.25em] text-accent font-medium mb-4">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Passionate About Design
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Bio */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
            <div className="space-y-6">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                With over 8 years of experience in product design and creative strategy, 
                I've had the privilege of working with startups, agencies, and Fortune 500 
                companies to bring ideas to life.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                My approach combines analytical thinking with creative intuition. I believe 
                that great design isn't just about aesthetics—it's about solving problems 
                in ways that feel natural and delightful to users.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                When I'm not designing, you'll find me exploring new cities, experimenting 
                with photography, or mentoring aspiring designers in the community.
              </p>
            </div>

            {/* Stats */}
            <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="font-display text-5xl font-semibold text-accent mb-2">8+</p>
                  <p className="font-body text-sm text-muted-foreground uppercase tracking-wide">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-5xl font-semibold text-accent mb-2">50+</p>
                  <p className="font-body text-sm text-muted-foreground uppercase tracking-wide">Projects Completed</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-5xl font-semibold text-accent mb-2">30+</p>
                  <p className="font-body text-sm text-muted-foreground uppercase tracking-wide">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-5xl font-semibold text-accent mb-2">12</p>
                  <p className="font-body text-sm text-muted-foreground uppercase tracking-wide">Awards Won</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
