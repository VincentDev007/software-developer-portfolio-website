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
    id: 'building-sydny',
    tag: 'AI / Backend',
    date: 'June 12, 2025',
    readTime: '5 min read',
    title: 'Building Sydny: A Local Voice Assistant from Scratch',
    summary: 'How I designed a fully offline AI voice assistant using Llama, Whisper, and Python — no cloud, no subscriptions.',
    body: `
      <p>Sydny started as a question: what would it take to build an AI assistant that runs entirely on your own machine? No API keys, no monthly bills, no data leaving your laptop. Just a model, a microphone, and some Python.</p>
      <h4>The Stack</h4>
      <p>The core is Llama 3 running locally via <code>llama.cpp</code>, with OpenAI's Whisper handling speech-to-text and <code>pyttsx3</code> for text-to-speech output. The whole thing is wrapped in a FastAPI backend with a simple Tkinter UI on top.</p>
      <h4>The Hard Parts</h4>
      <p>The trickiest problem wasn't the model — it was latency. Whisper transcription + Llama inference + TTS output adds up fast on a mid-range machine. I ended up streaming tokens from the model and queueing TTS chunks so Sydny starts speaking before it finishes thinking. Feels much more natural.</p>
      <p>Another challenge was context management. Llama has a fixed context window, so I built a rolling summary system that compresses older conversation history to keep memory relevant without blowing the token limit.</p>
      <h4>What I Learned</h4>
      <p>Building offline AI forces you to understand what you're actually running. You can't hide behind an API. You need to know quantization levels, memory constraints, and prompt engineering at a deeper level. It's been the most educational project I've worked on.</p>
    `,
  },
  {
    id: 'fastapi-sqlalchemy',
    tag: 'Backend',
    date: 'May 28, 2025',
    readTime: '4 min read',
    title: 'FastAPI + SQLAlchemy: What Nobody Tells You About Sessions',
    summary: "The database session lifecycle tripped me up for weeks. Here's what I wish someone had explained earlier.",
    body: `
      <p>When I started using SQLAlchemy with FastAPI, sessions seemed simple. Create a session, do your queries, close it. But the moment my app had any real complexity, things started breaking in confusing ways — stale data, detached instance errors, connections not closing.</p>
      <h4>The Session is Not a Cache</h4>
      <p>The biggest mindset shift: the session is an identity map, not a connection. SQLAlchemy tracks every object you've loaded within a session. If you load the same row twice, you get the same Python object back. This is powerful but it means sessions shouldn't live longer than a single request.</p>
      <h4>The Dependency Injection Pattern</h4>
      <p>FastAPI's Depends() system is perfect for session management. I use a generator dependency that yields a session and guarantees cleanup on every request. Clean, simple, no leaks.</p>
      <h4>The Detached Instance Problem</h4>
      <p>If you access a lazy-loaded relationship after the session closes, SQLAlchemy throws a DetachedInstanceError. The fix is either eager loading with joinedload(), or making sure you access everything you need before the session closes. I learned this the hard way at 1am debugging an endpoint that worked fine in testing.</p>
    `,
  },
  {
    id: 'from-philippines-to-nova-scotia',
    tag: 'Personal',
    date: 'April 15, 2025',
    readTime: '3 min read',
    title: 'Starting to Code at 22, Far from Home',
    summary: 'Moving from the Philippines to Nova Scotia and picking up programming with no CS background. What that first year actually looked like.',
    body: `
      <p>I didn't grow up wanting to be a software developer. I grew up wanting to make films. But when I moved to Nova Scotia from the Philippines, I needed something practical — something that could build a career. I started watching YouTube tutorials on HTML at 22, not knowing what I was getting into.</p>
      <h4>The Learning Curve Is Real</h4>
      <p>The first few months were humbling. I could follow tutorials but the moment I tried to build something without one, I'd freeze. I didn't understand why things worked, just that they did. That gap between following along and actually building took a long time to close.</p>
      <p>What helped: building projects I actually cared about. Not todo apps. Real things — a weather tracker, a contacts manager, and eventually Sydny. When the project matters, you push through the frustration instead of quitting.</p>
      <h4>What Changed</h4>
      <p>About six months in, something clicked. I stopped Googling how do I do X and started asking why does X work this way. That shift — from mechanics to understanding — is when I started feeling like a developer instead of someone who could type code.</p>
    `,
  },
  {
    id: 'react-zustand',
    tag: 'Frontend',
    date: 'March 3, 2025',
    readTime: '4 min read',
    title: 'Why I Switched from useState Spaghetti to Zustand',
    summary: "State management doesn't have to be painful. Zustand fixed problems I didn't even know I was causing.",
    body: `
      <p>For a long time, I managed state with useState and useContext and it was fine. Until my components started needing state from three layers up, and I was threading props through components that didn't even use them. Prop drilling is a trap that sneaks up on you.</p>
      <h4>What Zustand Is</h4>
      <p>Zustand is a lightweight state management library that lives outside the React component tree. You define a store — a plain object with state and actions — and any component can read from or write to it directly. No providers, no reducers, no boilerplate.</p>
      <h4>The Real Benefit</h4>
      <p>The thing Zustand does that sold me: components only re-render when the specific slice of state they subscribe to changes. With Context, any state change re-renders everything consuming that context. For a voice assistant UI where state updates happen constantly, that difference is huge.</p>
      <p>The learning curve is nearly zero if you already understand JavaScript objects and closures. I had it working in my project within an afternoon and haven't looked back.</p>
    `,
  },
];

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.id === id);
};