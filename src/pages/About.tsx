import { Sparkles, Target, Users } from "lucide-react";
import Layout from "@/components/Layout";

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: "High agency, bias for action.",
      description:
        "High agency, bias for action",
    },
    {
      icon: Target,
      title: "Brevity and clarity in communication",
      description: "",
    },
    {
      icon: Users,
      title: "Integrity and kindness",
      description: "Everyone is human. Don't be an asshole.",
    },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">About</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-8">
                Passionate About Design
              </h1>
              <div className="w-12 h-px bg-foreground/30 mx-auto" />
            </div>

            {/* Bio */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
              <div className="space-y-6">
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                 I grew up in the southernmost part of Kazakhstan that is rarely searched on the map. Shymkent, my home town is a rapidly growing modern metropolis touched by the gorgeous Tian-Shan mountains, and the people who live there appreciate a good hustle, have strong family values, and take pride in their hospitality. 
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                Now (and probably forever), I call New York my home.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  I've built my career as a series of venn diagrams of disciplines and domains: 
                  software engineering → technical management → solutions engineering, 
                  SEO → commerce → finance.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Then I found my "true north" in Solutions Engineering: using the power of technology and communication for bringing customers from outdated systems into better, smarter, happier state of growth.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                I respect companies (Ramp, Shopify, Stripe) led by founders who challenge status quo, build with taste and urgency, and generate enormous value for their users.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">My career belief: find things worth doing - then do them well.</p>
              </div>

              {/* Stats */}
              <div className="border border-border p-10 lg:p-12">
                <div className="grid grid-cols-2 gap-10">
                  <div className="text-center">
                    <p className="font-display text-4xl italic text-foreground mb-2">8+</p>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-[0.15em]">
                      Years Experience
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-4xl italic text-foreground mb-2">50+</p>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-[0.15em]">
                      Projects Completed
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-4xl italic text-foreground mb-2">30+</p>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-[0.15em]">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-4xl italic text-foreground mb-2">12</p>
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-[0.15em]">Awards Won</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10 text-center">
                Core Values
              </p>
              <div className="grid md:grid-cols-3 gap-10">
                {values.map((value, index) => (
                  <div key={index} className="group text-center">
                    <div className="w-12 h-12 border border-border flex items-center justify-center mb-6 mx-auto group-hover:border-foreground transition-colors duration-300">
                      <value.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="font-display text-xl italic text-foreground mb-4">{value.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.description}</p>
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

export default About;
