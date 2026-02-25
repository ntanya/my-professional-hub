import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";

const Work = () => {
  const projects = [
    {
      title: "ALDO - Shopify migration",
      category: "Enteprise solutions engineering",
      description:
        "One of my favorite success stories while at Shopify - working with the most amazing, smart, open-minded and hard-working team at ALDO. We went to meet them in Montreal, and over 2 days ran a deep-dive workshop to understand their business. In under 9 months, ALDO moved 3 of their brands to Shopify's enterprise plan from SAP.",
      year: "2024",
      image: "/aldo-team.jpg",
    },
    {
      title: "Book retailer - Shopify migration",
      category: "Enteprise solutions engineering",
      description:
        "the most technically complex and interesting opportunity - the largest book retailer in the US, with over 12M books in their active catalog. I built a proof-of-concept to test the rate of inserts and updates of products, integrations with backend systems, presented storefront and search considerations and recommended technical architecture. ",
      year: "2023",
      image: "/placeholder.svg",
    },
    {
      title: "Writing & audience building",
      category: "Writing coach, social media marketing",
      description:
        "I made a pivot in my career journey after burning out from my VP role. I started writing on Instagram about living in NYC as a Russian-speaking immigrant and built an audience of 20K followers. This led to me collaborating with a copywriting school, and I worked as a writing coach for women and a freelance writer for 1.5 years.",
      year: "2019",
      image: "/placeholder.svg",
    },
    {
      title: "My Happy Tummy Club",
      category: "Ecommerce Shopify store",
      description:
        "Through my kids' school I met a wonderful parent, who ran a small business providing home-made, healthy meals as a service. I've built them a custom Shopify store that allows meal selection and subscription, using automation and metaobjects for weekly menus.",
      year: "2023",
      image: "/my-happy-tummy.webp",
    },
    {
      title: "MayNovember Shopify Store",
      category: "Ecommerce, web development",
      description:
        "Designed and built a fashion/apparel Shopify store for a friend. It was early days of Shopify, and I fell in love with ease and flexibility of its Liquid templates. We operated the store for about a year, and learned a ton about marketing, merchandising, inventory movement, customer service. ",
      year: "2012",
      image: "/placeholder.svg",
    },
    {
      title: "Bantam Bagels",
      category: "Web development, Wordpress, ecommerce",
      description:
        "Earlier in my career I worked as a freelance software developer. Through friends, I've met a couple, who left their high-paying careers on Wall Street to start a bagel business. I've built them a Wordpress site with e-commerce functionality. Later, they went on being very successful - they raised money on Shark Tank with Lori Greiner and achieved nationwide distribution and growth.",
      year: "2013",
      image: "/placeholder.svg",
    },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Portfolio</p>
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
                <article key={index} className="group cursor-pointer">
                  {/* Project Image Placeholder */}
                  <div className="aspect-[4/3] bg-secondary/50 border border-border relative overflow-hidden mb-6 group-hover:border-foreground/30 transition-colors duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

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
                      <span className="font-body text-xs text-muted-foreground">{project.year}</span>
                    </div>
                    <h3 className="font-display text-2xl italic text-foreground mb-3 group-hover:opacity-70 transition-opacity duration-300">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{project.description}</p>
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
                    title: "Innovations in Commerce",
                    description: "Presented Shopify's growth features for enterprise brands.",
                    event: "CommerceNext NYC - July 14, 2024",
                    videoUrl: "https://www.youtube.com/embed/Vr_YMN8aJXY",
                  },
                  {
                    title: "Behind the scenes of the world's best converting checkout",
                    description:
                      "Presented Shopify's checkout and how it's optimized for performance for a technical audience.",
                    event: "Web Performance Meetup, NYC - Oct 9, 2024",
                    videoUrl: "https://www.youtube.com/embed/M6B7rXv-4-4",
                  },
                  {
                    title: "Page performance for SEO",
                    description:
                      "Discussed importance and implications of Javascript on web performance and crawl budget.",
                    event: "Web Performance Meetup, NYC - Nov 12, 2020",
                    videoUrl: "https://www.youtube.com/embed/9c58ikixSkM",
                  },
                ].map((talk, index) => (
                  <div key={index} className="group">
                    <div className="aspect-video mb-5">
                      <iframe
                        className="w-full h-full border border-border"
                        src={talk.videoUrl}
                        title={talk.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                      {talk.event}
                    </span>
                    <h3 className="font-display text-xl italic text-foreground mb-2">{talk.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{talk.description}</p>
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
