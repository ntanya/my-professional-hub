import { Sparkles, Target, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: "High agency, bias for action",
      description: "Everything is figure-outable.",
    },
    {
      icon: Target,
      title: "Brevity and clarity in communication",
      description: "Simplicity is the ultimate luxury.",
    },
    {
      icon: Users,
      title: "Integrity and kindness",
      description: "Lead with your heart.",
    },
  ];

  const favoritePlaces = [
    {
      name: "Normandy, France",
      image: "https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?w=800",
      description:
        "Windswept coastlines, historic charm, and the best butter in the world. A place that moves slowly and beautifully.",
    },
    {
      name: "Georgia",
      image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800",
      description:
        "Ancient winemaking traditions, stunning Caucasus mountains, and hospitality that rivals my homeland.",
    },
    {
      name: "Copenhagen, Denmark",
      image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800",
      description: "Design excellence at every corner. Hygge culture, cycling, and the world's best restaurants.",
    },
    {
      name: "Iceland",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800",
      description: "Raw, untamed nature. Glaciers, geysers, and the Northern Lights remind you how small we are.",
    },
    {
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
      description: "Blue domes, white walls, and sunsets that stop time. Mediterranean beauty at its peak.",
    },
    {
      name: "Southern Kazakhstan",
      image: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=800",
      description: "My roots. The Tian-Shan mountains, endless hospitality, and the taste of home-cooked plov.",
    },
  ];

  const books = [
    {
      title: "The Almanack of Naval Ravikant",
      author: "Eric Jorgenson",
      cover: "https://covers.openlibrary.org/b/isbn/9781544514215-M.jpg",
      recommendation:
        "A guide to wealth and happiness. Naval's wisdom on leverage and judgment shaped my career approach.",
    },
    {
      title: "The Anthology of Balaji",
      author: "Eric Jorgenson",
      cover: "/book-anthology-of-balaji.jpg",
      recommendation:
        "Frameworks on technology and the future of society. Essential for understanding where we're headed.",
    },
    {
      title: "Storyworthy",
      author: "Matthew Dicks",
      cover: "https://covers.openlibrary.org/b/isbn/9781608685486-M.jpg",
      recommendation: "The art of finding and telling compelling stories. Changed how I communicate.",
    },
    {
      title: "Never Split the Difference",
      author: "Chris Voss",
      cover: "https://covers.openlibrary.org/b/isbn/9780062407801-M.jpg",
      recommendation: "FBI negotiation tactics I use in every sales conversation and stakeholder discussion.",
    },
    {
      title: "The Art of Spending Money",
      author: "Morgan Housel",
      cover: "/book-art-of-spending-money.jpg",
      recommendation: "Insights on spending with intention. A guide to aligning money with values.",
    },
    {
      title: "Unreasonable Hospitality",
      author: "Will Guidara",
      cover: "https://covers.openlibrary.org/b/isbn/9780593418574-M.jpg",
      recommendation: "Going above and beyond for customers. It's about making people feel seen.",
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
                Optimistic Problem Solver
              </h1>
              <div className="w-12 h-px bg-foreground/30 mx-auto" />
            </div>

            {/* Bio */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
              <div className="space-y-6">
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  I grew up in the southernmost part of Kazakhstan that is rarely searched on the map. Shymkent, my home
                  town, is a rapidly growing modern metropolis near the gorgeous Tian-Shan mountains, and the people who
                  live there appreciate a good hustle, have strong family values, and take pride in their hospitality.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Now (and probably forever), I call New York my home.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  I've built my career as a series of venn diagrams of disciplines and domains: software engineering →
                  technical management → solutions engineering, SEO → commerce → finance.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  My "true north" is Solutions Engineering: using the power of technology and communication for bringing
                  customers from outdated systems into better, smarter, happier state of growth.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  I respect companies (Ramp, Shopify, Stripe) led by founders who challenge the status quo, build with
                  taste and urgency, and create enormous value for their users.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  My career belief: find things worth doing - then do them well.
                </p>
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

            {/* Favorite Places */}
            <div className="mb-24">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10 text-center">
                Wanderlust
              </p>
              <h2 className="font-display text-3xl md:text-4xl italic text-center mb-16">Favorite Places</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {favoritePlaces.map((place, index) => (
                  <div key={index} className="group">
                    <div className="border border-border overflow-hidden mb-4">
                      <AspectRatio ratio={4 / 3}>
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </AspectRatio>
                    </div>
                    <h3 className="font-display text-lg italic text-foreground mb-2">{place.name}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{place.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* On My Bookshelf */}
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-10 text-center">
                Reading List
              </p>
              <h2 className="font-display text-3xl md:text-4xl italic text-center mb-16">On My Bookshelf</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {books.map((book, index) => (
                  <div key={index} className="group flex gap-4">
                    <div className="border border-border p-2 bg-muted/20 flex-shrink-0 w-20">
                      <AspectRatio ratio={2 / 3}>
                        <img
                          src={book.cover}
                          alt={`${book.title} by ${book.author}`}
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                    <div>
                      <h3 className="font-display text-sm italic text-foreground mb-1">{book.title}</h3>
                      <p className="font-body text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-2">
                        {book.author}
                      </p>
                      <p className="font-body text-xs text-muted-foreground leading-relaxed">{book.recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed text-center mt-10">
                These books are worth re-reading. Please support local booksellers, libraries and places genuinely built
                for readers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
