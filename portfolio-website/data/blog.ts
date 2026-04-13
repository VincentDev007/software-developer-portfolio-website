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
    id: 'shipping-something-nobody-asked-for',
    tag: 'Personal',
    date: 'April 12, 2026',
    readTime: '3 min read',
    title: 'Shipping Something Nobody Asked For',
    summary: 'On building things for yourself and why that might be the most honest thing a developer can do.',
    body: `<p>Nobody asked me to build Sydny. No client, no manager, no design brief. Just me, annoyed that every voice assistant I tried either needed the internet, sent my data somewhere, or required me to say a company's name out loud like I was summoning a corporate deity.</p>

<p>So I built my own. Three months of late nights, a lot of broken audio pipelines, and one particularly miserable week where the wake word detection worked perfectly in silence and completely fell apart the moment I turned on a fan.</p>

<h4>The part nobody talks about</h4>

<p>There's a version of software development where you only build things that are validated. You research the market, identify a gap, talk to potential users, then build something people have already told you they want. That's smart. That's how you avoid wasting time.</p>

<p>And then there's building something because it bothers you that it doesn't exist. That's the version I keep ending up in.</p>

<p>The honest truth is I don't know if anyone else will ever use Sydny. Maybe the audience for "fully offline, privacy-first voice assistant you compile yourself" is exactly one person — me. And somewhere along the way I had to make peace with that. The project wasn't going to be less real because of it.</p>

<h4>What shipping actually means</h4>

<p>I used to think shipping meant other people using your thing. Now I think it just means finishing. Getting it to a state where it does what you said it would do, where you're not embarrassed to show the code, where you could walk away and come back six months later and still understand it.</p>

<p>By that definition, Sydny is shipped. It wakes up when I say its name. It runs a local model. It doesn't phone home. That's the thing I set out to build and it's the thing I built.</p>

<p>Nobody asked for it. I don't think that matters.</p>`,
  },
  {
    id: 'sydny-behind-the-scenes',
    tag: 'Behind the Scenes',
    date: 'April 9, 2026',
    readTime: '',
    title: 'Sydny',
    summary: '',
    body: '',
  },
  {
    id: 'cerebra-behind-the-scenes',
    tag: 'Behind the Scenes',
    date: 'April 9, 2026',
    readTime: '',
    title: 'Cerebra',
    summary: '',
    body: '',
  },
  {
    id: 'fly-behind-the-scenes',
    tag: 'Behind the Scenes',
    date: 'April 12, 2026',
    readTime: '',
    title: 'Fly',
    summary: '',
    body: '',
  },
];

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.id === id);
};