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
    date: '',
    readTime: '0 min read',
    title: 'Sydny',
    summary: 'A look at how I built a desktop AI assistant — local LLM routing, persistent memory, and shipping a Tauri app from scratch.',
    body: '',
  },
  {
    id: 'cerebra-behind-the-scenes',
    tag: 'Behind the Scenes',
    date: '',
    readTime: '0 min read',
    title: 'Cerebra',
    summary: 'Behind the build — SQLite FTS5 search, nested folders, and why I chose Electron for Cerebra.',
    body: '',
  },
];

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.id === id);
};