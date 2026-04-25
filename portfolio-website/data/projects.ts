
export interface ProjectStats {
  timeline: string;
  role: string;
  team: string;
  status: string;
}

export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  shortDesc: string;
  intro?: string;
  version?: string;
  tech: string[];
  stats?: ProjectStats;
  highlights?: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: "sydny",
    title: "Sydny",
    thumbnail: "/projects/sydny.png",
    shortDesc: "Offline desktop AI assistant powered by Whisper and Ollama.",
    intro: "Sydny is a desktop AI assistant built with Tauri and React. It understands voice commands to open apps, manage files, and control your system — and holds real conversations with a persistent memory, all routed through a local LLM via Ollama with no cloud dependency.",
    version: "v0.5.0",
    tech: ["Tauri", "React", "TypeScript", "Python", "FastAPI", "SQLite", "Ollama", "Whisper"],
    stats: {
      timeline: "3 Months",
      role: "Sole Developer",
      team: "Solo",
      status: "In Development",
    },
    highlights: [
      "Built a custom Ollama model that returns structured JSON intents for reliable voice command routing",
      "Implemented persistent conversation memory with SQLite, injecting past turns as context into every LLM call",
      "Bridged a React/Tauri frontend with a FastAPI backend handling transcription, reasoning, TTS, and cross-platform system control",
    ],
    links: {
      github: "https://github.com/VincentDev007/sydny-voice-assistant-automation-tool",
      demo: "/projects/sydny.mp4",
    },
  },
  {
    id: "cerebra",
    title: "Cerebra",
    thumbnail: "/projects/cerebra.png",
    shortDesc: "Desktop notes app with full-text search and sticky notes.",
    intro: "Cerebra is a desktop notes app built with Electron and React. It features full-text search powered by SQLite FTS5 for instant results, a nested folder system to keep things organized, and a sticky notes system — all stored locally with no account required.",
    version: "v0.5.0",
    tech: ["Electron", "React", "TypeScript", "SQLite"],
    stats: {
      timeline: "2 Months",
      role: "Sole Developer",
      team: "Solo",
      status: "In Development",
    },
    highlights: [
      "Built FTS5 full-text search across notes and sticky notes, with SQL triggers keeping the index in sync automatically",
      "Designed a nested folder system with cascade deletes and live item counts",
      "Packaged as an Electron desktop app — no account, no internet, all data stored locally",
    ],
    links: {
      github: "https://github.com/VincentDev007/cerebra-notes-app",
      demo: "/projects/cerebra.mp4",
    },
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};