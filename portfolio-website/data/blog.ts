export interface BlogPost {
  id: string;
  tag: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  body: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'sydny-behind-the-scenes',
    tag: 'Behind the Scenes',
    date: 'October 4, 2025',
    readTime: '0 min read',
    title: 'Sydny',
    summary: 'A look at how I built a fully offline voice assistant — wake word detection, local LLM routing, and what it\'s like shipping a Tauri desktop app from scratch.',
    body: '',
  },
  {
    id: 'cerebra-behind-the-scenes',
    tag: 'Behind the Scenes',
    date: 'October 27, 2025',
    readTime: '0 min read',
    title: 'Cerebra',
    summary: 'How I built an offline-first notes app with instant full-text search using SQLite FTS5, and why I chose Electron despite its size.',
    body: '',
  },
  {
    id: 'fly-behind-the-scenes',
    tag: 'Behind the Scenes',
    date: 'April 10, 2025',
    readTime: '0 min read',
    title: 'Fly',
    summary: 'Behind the prototype — building a real-time Android flight search app with Retrofit and the Amadeus API in under a month.',
    body: '',
  },
];

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.id === id);
};