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
    readTime: '',
    title: 'Sydny',
    summary: '',
    body: '',
  },
  {
    id: 'cerebra-behind-the-scenes',
    tag: 'Behind the Scenes',
    date: 'October 27, 2025',
    readTime: '',
    title: 'Cerebra',
    summary: '',
    body: '',
  },
  {
    id: 'fly-behind-the-scenes',
    tag: 'Behind the Scenes',
    date: 'April 10, 2025',
    readTime: '',
    title: 'Fly',
    summary: '',
    body: '',
  },
];

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.id === id);
};