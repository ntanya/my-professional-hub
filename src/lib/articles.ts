// Article type and data store for markdown articles
// Articles are loaded from the articles folder as markdown files

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  content: string;
  featured?: boolean;
}

// This will hold dynamically imported articles
const articleModules = import.meta.glob('/src/articles/*.md', { 
  query: '?raw',
  import: 'default',
  eager: true 
});

// Parse frontmatter from markdown content
function parseFrontmatter(content: string): { frontmatter: Record<string, string>; body: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { frontmatter: {}, body: content };
  }

  const frontmatterStr = match[1];
  const body = match[2];
  
  const frontmatter: Record<string, string> = {};
  frontmatterStr.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
      frontmatter[key] = value;
    }
  });

  return { frontmatter, body };
}

// Get slug from file path
function getSlugFromPath(path: string): string {
  const filename = path.split('/').pop() || '';
  return filename.replace('.md', '');
}

// Calculate read time
function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}

// Load and parse all articles
export function getArticles(): Article[] {
  const articles: Article[] = [];

  for (const [path, content] of Object.entries(articleModules)) {
    if (typeof content !== 'string') continue;
    
    const slug = getSlugFromPath(path);
    const { frontmatter, body } = parseFrontmatter(content);
    
    articles.push({
      slug,
      title: frontmatter.title || 'Untitled',
      description: frontmatter.description || '',
      date: frontmatter.date || new Date().toISOString().split('T')[0],
      author: frontmatter.author || 'John Doe',
      category: frontmatter.category || 'General',
      readTime: frontmatter.readTime || calculateReadTime(body),
      content: body,
      featured: frontmatter.featured === 'true',
    });
  }

  // Sort by date, newest first
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get single article by slug
export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find(article => article.slug === slug);
}
