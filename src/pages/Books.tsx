import Layout from "@/components/Layout";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Book {
  title: string;
  author?: string;
  cover?: string;
}

interface BookSection {
  title: string;
  books: Book[];
}

interface CountrySection {
  country: string;
  books: Book[];
}

const placeholderCover = `${import.meta.env.BASE_URL}placeholder.svg`;

function coverPath(title: string, author?: string): string {
  const s = `${title} ${author || ""}`.trim().toLowerCase();
  const slug = s
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
  return `${import.meta.env.BASE_URL}book-covers/${slug}.jpg`;
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
        { title: "Unreasonable Hospitality", author: "Will Guidara" },
        { title: "Storyworthy", author: "Matthew Dicks" },
        { title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson" },
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
        { title: "The Martian", author: "Andy Weir" },
        { title: "Project Hail Mary", author: "Andy Weir" },
        { title: "A Gentleman in Moscow", author: "Amor Towles" },
        { title: "Rules of Civility", author: "Amor Towles" },
        { title: "East of Eden", author: "John Steinbeck" },
        { title: "Gone with the Wind", author: "Margaret Mitchell" },
        { title: "The Last Picture Show", author: "Larry McMurtry" },
        { title: "Lonesome Dove", author: "Larry McMurtry" },
        { title: "A Widow for One Year", author: "John Irving" },
        { title: "Hunger", author: "Roxane Gay" },
        { title: "A Moveable Feast", author: "Ernest Hemingway" },
      ],
    },
  ];

  const countries: CountrySection[] = [
    { country: "Canada", books: [{ title: "Water for Elephants", author: "Sarah Gruen" }] },
    {
      country: "Ireland",
      books: [
        { title: "All", author: "Claire Keegan" },
        { title: "A Long Winter", author: "Colm Tóibín" },
      ],
    },
    { country: "Burma", books: [{ title: "The Piano Tuner", author: "Daniel Mason" }] },
    {
      country: "Sweden",
      books: [
        { title: "A Man Called Ove", author: "Fredrik Backman" },
        { title: "The 100-Year-Old Man Who Climbed Out the Window and Disappeared", author: "Jonas Jonasson" },
      ],
    },
    { country: "China", books: [{ title: "Waiting", author: "Ha Jin" }] },
    {
      country: "England",
      books: [
        { title: "The End of the Affair", author: "Graham Greene" },
        { title: "The Sense of an Ending", author: "Julian Barnes" },
      ],
    },
    { country: "Greece", books: [{ title: "Captain Corelli's Mandolin", author: "Louis de Bernières" }] },
    {
      country: "Russia",
      books: [
        { title: "The Master and Margarita", author: "Mikhail Bulgakov" },
        { title: "Anna Karenina", author: "Leo Tolstoy" },
        { title: "Lolita", author: "Vladimir Nabokov" },
        { title: "White Nights", author: "Fyodor Dostoevsky" },
        { title: "Eugene Onegin", author: "Alexander Pushkin" },
      ],
    },
    {
      country: "Korea",
      books: [
        { title: "Pachinko", author: "Min Jin Lee" },
        { title: "Crying in H Mart", author: "Michelle Zauner" },
        { title: "Nothing to Envy", author: "Barbara Demick" },
      ],
    },
    { country: "Kazakhstan", books: [{ title: "A Day That Lasts 100 Years" }] },
    {
      country: "France",
      books: [
        { title: "L'Étranger", author: "Albert Camus" },
        { title: "Wind, Sand and Stars", author: "Antoine de Saint-Exupéry" },
        { title: "The Count of Monte Cristo", author: "Alexandre Dumas" },
        { title: "Lie With Me", author: "Philippe Besson" },
        { title: "In the Absence of Men", author: "Philippe Besson" },
        { title: "Bonjour Tristesse", author: "Françoise Sagan" },
      ],
    },
    {
      country: "Germany",
      books: [
        { title: "Arc de Triomphe", author: "Erich Maria Remarque" },
        { title: "Three Comrades", author: "Erich Maria Remarque" },
        { title: "The Reader", author: "Bernhard Schlink" },
      ],
    },
    { country: "Japan", books: [{ title: "If Cats Disappeared from the World", author: "Genki Kawamura" }] },
    {
      country: "Italy",
      books: [
        { title: "Four Seasons in Rome", author: "Anthony Doerr" },
        { title: "Roman Stories", author: "Jhumpa Lahiri" },
      ],
    },
    { country: "Netherlands", books: [{ title: "Girl with a Pearl Earring", author: "Tracy Chevalier" }] },
  ];

  const BookCard = ({ book }: { book: Book }) => {
    const cover = book.cover || coverPath(book.title, book.author);
    return (
      <div className="flex gap-4 border-b border-border py-4 hover:border-foreground transition-colors duration-300">
        <div className="flex-shrink-0 w-14">
          <AspectRatio ratio={2 / 3}>
            <img
              src={cover}
              alt={`Cover of ${book.title}`}
              className="w-full h-full object-cover border border-border"
              onError={(e) => {
                (e.target as HTMLImageElement).src = placeholderCover;
              }}
            />
          </AspectRatio>
        </div>
        <div className="flex items-center">
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
      </div>
    );
  };

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
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                    {section.books.map((book, index) => (
                      <BookCard key={index} book={book} />
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
                    <div className="space-y-2">
                      {country.books.map((book, index) => (
                        <BookCard key={index} book={book} />
                      ))}
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

export default Books;
