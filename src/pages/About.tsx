import { Sparkles, Target, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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

  const books = [
    {
      title: "The Almanack of Naval Ravikant",
      author: "Eric Jorgenson",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1598011736i/54898389.jpg",
      recommendation: "A guide to wealth and happiness from one of Silicon Valley's most respected thinkers. Naval's wisdom on leverage, judgment, and specific knowledge has shaped how I approach my career.",
    },
    {
      title: "The Anthology of Balaji",
      author: "Eric Jorgenson",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1712019513i/210088838.jpg",
      recommendation: "Balaji's frameworks on technology, startups, and the future of society. Essential reading for understanding where the world is headed.",
    },
    {
      title: "Storyworthy",
      author: "Matthew Dicks",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1522562750i/37786022.jpg",
      recommendation: "The art of finding and telling compelling stories. Changed how I communicate in presentations and everyday conversations.",
    },
    {
      title: "Never Split the Difference",
      author: "Chris Voss",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1460910517i/26156469.jpg",
      recommendation: "Negotiation tactics from an FBI hostage negotiator. Practical techniques I use in every sales conversation and stakeholder discussion.",
    },
    {
      title: "The Art of Spending Money",
      author: "Morgan Housel",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1727738986i/217635401.jpg",
      recommendation: "Morgan Housel's insights on the psychology of money and spending decisions. A thoughtful guide to aligning your spending with your values.",
    },
    {
      title: "Unreasonable Hospitality",
      author: "Will Guidara",
      cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1660669492i/61539635.jpg",
      recommendation: "The power of going above and beyond for customers. Will's philosophy on hospitality applies far beyond restaurants—it's about making people feel seen.",
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
            <div className="mb-24">
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

            {/* On My Bookshelf */}
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10 text-center">
                On My Bookshelf
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book, index) => (
                  <div key={index} className="group">
                    <div className="border border-border p-4 mb-4 bg-muted/20">
                      <AspectRatio ratio={2/3}>
                        <img
                          src={book.cover}
                          alt={`${book.title} by ${book.author}`}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <h3 className="font-display text-lg italic text-foreground mb-1">{book.title}</h3>
                    <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                      {book.author}
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {book.recommendation}
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

export default About;
