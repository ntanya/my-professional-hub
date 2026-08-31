import Layout from "@/components/Layout";

interface Book {
  title: string;
  author?: string;
}

interface BookSection {
  title: string;
  books: Book[];
}

interface CountrySection {
  country: string;
  books: string[];
}

const Books = () => {
  const intro = `One of the questions on Stripe's "Get to know me" slide is "Your favorite books?" It's almost like if someone asked you to pick your favorite child.

So I decided to arrange the noteworthy books by mood: whether you're looking to be transported in time and space, or need to arm yourself with practical advice, or just want to daydream, or find a new adventure to fire up your soul.`;

  const sections: BookSection[] = [
    {
      title: "Adventure",
      books: [
        { title: "Into Thin Air", author: "Jon Krakauer" },
        { title: "Barbarian Days", author: "William Finnegan" },
        { title: "Marriage at Sea" },
        { title: "438 Days" },
        { title: "Alone in Antarctica", author: "Felicity Aston" },
        { title: "The Wager", author: "David Grann" },
      ],
    },
    {
      title: "Career / Growth",
      books: [
        { title: "Unreasonable Hospitality" },
        { title: "Storyworthy" },
        { title: "Almanack of Naval Ravikant", author: "Eric Jorgenson" },
        { title: "The Anthology of Balaji", author: "Eric Jorgenson" },
        { title: "Excellent Advice for Living", author: "Kevin Kelly" },
        { title: "I Regret Almost Everything", author: "Keith McNally" },
        { title: "All", author: "Morgan Housel" },
        { title: "Never Split the Difference", author: "Chris Voss" },
      ],
    },
    {
      title: "American",
      books: [
        { title: "The Martian" },
        { title: "Project Hail Mary", author: "Andy Weir" },
        { title: "A Gentleman in Moscow" },
        { title: "Rules of Civility", author: "Amor Towles" },
        { title: "East of Eden", author: "John Steinbeck" },
        { title: "Gone with the Wind", author: "Margaret Mitchell" },
        { title: "The Last Picture Show" },
        { title: "Lonesome Dove", author: "Larry McMurtry" },
        { title: "A Widow for One Year", author: "John Irving" },
        { title: "Hunger", author: "Roxane Gay" },
        { title: "A Moveable Feast", author: "Ernest Hemingway" },
      ],
    },
  ];

  const countries: CountrySection[] = [
    { country: "Canada", books: ["Water for Elephants by Sarah Gruen"] },
    { country: "Ireland", books: ["All by Claire Keegan", "A Long Winter by Colm Tóibín"] },
    { country: "Burma", books: ["The Piano Tuner by Daniel Mason"] },
    { country: "Sweden", books: ["A Man Called Ove", "The 100-Year-Old Man Who Climbed Out the Window"] },
    { country: "China", books: ["Waiting by Ha Jin"] },
    { country: "England", books: ["The End of the Affair by Graham Greene", "The Sense of an Ending by Julian Barnes"] },
    { country: "Greece", books: ["Captain Corelli's Mandolin by Louis de Bernières"] },
    {
      country: "Russia",
      books: [
        "Master & Margarita by Bulgakov",
        "Anna Karenina by Tolstoy",
        "Nabokov",
        "The White Nights by Dostoyevsky",
        "Eugene Onegin by Pushkin",
      ],
    },
    {
      country: "Korea",
      books: [
        "Pachinko by Min Jin Lee",
        "Crying in H Mart by Michelle Zauner",
        "Nothing to Envy by Barbara Demick",
      ],
    },
    { country: "Kazakhstan", books: ["A Day That Lasts 100 Years"] },
    {
      country: "France",
      books: [
        "L'Étranger",
        "Wind, Sand and Stars",
        "The Count of Monte Cristo",
        "Lie With Me",
        "In the Absence of Men by Philippe Besson",
        "Bonjour Tristesse by Françoise Sagan",
      ],
    },
    {
      country: "Germany",
      books: [
        "Arc de Triomphe by Remarque",
        "Three Comrades by Remarque",
        "The Reader by Bernhard Schlink",
      ],
    },
    { country: "Japan", books: ["If Cats Disappeared from the World by Genki Kawamura"] },
    {
      country: "Italy",
      books: [
        "Four Seasons in Rome by Anthony Doerr",
        "Roman Stories by Jhumpa Lahiri",
      ],
    },
    { country: "Netherlands", books: ["Girl with a Pearl Earring by Tracy Chevalier"] },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-20">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Reading
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-8">
                Bookshelf
              </h1>
              <div className="w-12 h-px bg-foreground/30 mx-auto" />
            </div>

            {/* Intro */}
            <div className="max-w-3xl mx-auto mb-24">
              {intro.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="font-body text-base text-muted-foreground leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Mood Sections */}
            <div className="space-y-24 mb-24">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-display text-3xl md:text-4xl italic text-[#A24859] mb-10">
                    {section.title}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                    {section.books.map((book, index) => (
                      <div
                        key={index}
                        className="border-b border-border py-4 hover:border-foreground transition-colors duration-300"
                      >
                        <p className="font-body text-sm text-foreground">
                          {book.title}
                          {book.author && (
                            <span className="text-muted-foreground">
                              {" "}
                              — {book.author}
                            </span>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Books by Country */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl italic text-[#A24859] mb-10 text-center">
                Around the World
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {countries.map((country) => (
                  <div
                    key={country.country}
                    className="border border-border p-6 hover:border-foreground transition-colors duration-300"
                  >
                    <h3 className="font-display text-lg italic text-foreground mb-4">
                      {country.country}
                    </h3>
                    <ul className="space-y-2">
                      {country.books.map((book, index) => (
                        <li
                          key={index}
                          className="font-body text-sm text-muted-foreground leading-relaxed"
                        >
                          {book}
                        </li>
                      ))}
                    </ul>
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

export default Books;
