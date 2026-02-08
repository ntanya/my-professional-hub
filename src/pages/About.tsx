import { Sparkles, Target, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: "High agency, bias for action.",
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
      description: "Everyone is human. Don't be an asshole.",
    },
  ];

  const favoritePlaces = [
    {
      name: "Shymkent, Kazakhstan",
      image: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=800",
      description:
        "My hometown at the foot of the Tian-Shan mountains. A city of hustlers, hospitality, and home-cooked plov.",
    },
    {
      name: "New York City",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
      description: "My forever home. The energy, diversity, and relentless ambition of this city matches my own.",
    },
    {
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
      description:
        "Where precision meets beauty. The attention to detail in everything from food to transit inspires me.",
    },
    {
      name: "Lisbon, Portugal",
      image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800",
      description: "Sun-soaked tiles, fresh pastéis, and a creative tech scene. The perfect blend of old and new.",
    },
    {
      name: "Almaty, Kazakhstan",
      image: "https://images.unsplash.com/photo-1568890480800-350967dd5b72?w=800",
      description: "The cultural heart of Kazakhstan. Mountains, apples, and the spirit of Central Asia.",
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
      cover: "https://covers.openlibrary.org/b/isbn/9781544542911-M.jpg",
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
      title: "The Psychology of Money",
      author: "Morgan Housel",
      cover: "https://covers.openlibrary.org/b/isbn/9780857197689-M.jpg",
      recommendation: "Insights on the psychology of money. A guide to aligning spending with values.",
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
                Passionate About Design
              </h1>
              <div className="w-12 h-px bg-foreground/30 mx-auto" />
            </div>

            {/* Bio */}
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
              <div className="space-y-6">
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  I grew up in the southernmost part of Kazakhstan that is rarely searched on the map. Shymkent, my home
                  town is a rapidly growing modern metropolis touched by the gorgeous Tian-Shan mountains, and the
                  people who live there appreciate a good hustle, have strong family values, and take pride in their
                  hospitality.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Now (and probably forever), I call New York my home.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  I've built my career as a series of venn diagrams of disciplines and domains: software engineering →
                  technical management → solutions engineering, SEO → commerce → finance.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Then I found my "true north" in Solutions Engineering: using the power of technology and communication
                  for bringing customers from outdated systems into better, smarter, happier state of growth.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  I respect companies (Ramp, Shopify, Stripe) led by founders who challenge status quo, build with taste
                  and urgency, and generate enormous value for their users.
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
                Favorite Places
              </p>
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
                On My Bookshelf
              </p>
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
