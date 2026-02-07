import { Sparkles, Target, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Creative Vision",
      description:
        "I approach every project with fresh eyes and innovative thinking, always seeking elegant solutions.",
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

  const favoritePlaces = [
    {
      name: "Kyoto, Japan",
      image: "/placeholder.svg",
      description: "The ancient temples and zen gardens offer a meditative escape. Every visit reveals new layers of beauty in the intersection of tradition and nature.",
    },
    {
      name: "Lisbon, Portugal",
      image: "/placeholder.svg",
      description: "The light here is extraordinary—golden and soft. The city's azulejos, winding streets, and melancholic fado music inspire endless creativity.",
    },
    {
      name: "Big Sur, California",
      image: "/placeholder.svg",
      description: "Where the mountains meet the Pacific. The dramatic coastline reminds me that nature is the greatest designer of all.",
    },
    {
      name: "Copenhagen, Denmark",
      image: "/placeholder.svg",
      description: "A masterclass in functional beauty. The Danish approach to design—hygge, simplicity, and warmth—influences everything I create.",
    },
    {
      name: "Marrakech, Morocco",
      image: "/placeholder.svg",
      description: "The riads, the souks, the intricate geometric patterns. A sensory feast that challenges Western minimalism in the best way.",
    },
  ];

  const books = [
    {
      title: "The Shape of Design",
      author: "Frank Chimero",
      cover: "/placeholder.svg",
      recommendation: "A poetic meditation on why we design and how craft connects us to others. Essential reading for anyone who creates.",
    },
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      cover: "/placeholder.svg",
      recommendation: "Understanding cognitive biases transformed how I approach user research and decision-making in design.",
    },
    {
      title: "Ways of Seeing",
      author: "John Berger",
      cover: "/placeholder.svg",
      recommendation: "Changed how I think about visual culture and the politics of images. Still relevant decades after publication.",
    },
    {
      title: "Essentialism",
      author: "Greg McKeown",
      cover: "/placeholder.svg",
      recommendation: "The disciplined pursuit of less. This book shaped my approach to editing—in design and in life.",
    },
    {
      title: "The Art of Looking Sideways",
      author: "Alan Fletcher",
      cover: "/placeholder.svg",
      recommendation: "A beautiful, sprawling exploration of visual thinking. I return to it whenever I need creative inspiration.",
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      cover: "/placeholder.svg",
      recommendation: "Understanding human history at scale provides invaluable context for designing products people actually need.",
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
                  With over 8 years of experience in product design and creative strategy, I've had the privilege of
                  working with startups, agencies, and Fortune 500 companies to bring ideas to life.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  My approach combines analytical thinking with creative intuition. I believe that great design isn't
                  just about aesthetics—it's about solving problems in ways that feel natural and delightful to users.
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  When I'm not designing, you'll find me exploring new cities, experimenting with photography, or
                  mentoring aspiring designers in the community.
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
            <div className="mb-32">
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
            <div className="mb-32">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 text-center">
                Wanderlust
              </p>
              <h2 className="font-display text-3xl md:text-4xl italic text-center mb-16">
                Favorite Places
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {favoritePlaces.map((place, index) => (
                  <div key={index} className="group">
                    <div className="border border-border overflow-hidden mb-6">
                      <AspectRatio ratio={4 / 3}>
                        <img
                          src={place.image}
                          alt={place.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </AspectRatio>
                    </div>
                    <h3 className="font-display text-xl italic text-foreground mb-3">{place.name}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{place.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* On My Bookshelf */}
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 text-center">
                Reading List
              </p>
              <h2 className="font-display text-3xl md:text-4xl italic text-center mb-16">
                On My Bookshelf
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {books.map((book, index) => (
                  <div key={index} className="group flex gap-5">
                    <div className="flex-shrink-0 w-20 border border-border overflow-hidden">
                      <AspectRatio ratio={2 / 3}>
                        <img
                          src={book.cover}
                          alt={`${book.title} cover`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </AspectRatio>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg italic text-foreground mb-1 leading-tight">{book.title}</h3>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-[0.1em] mb-3">
                        {book.author}
                      </p>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{book.recommendation}</p>
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
