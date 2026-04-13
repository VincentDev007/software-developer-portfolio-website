
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
    shortDesc: "Offline voice assistant with wake word, Whisper, and Ollama.",
    version: "v0.5.0",
    tech: ["Tauri", "React", "TypeScript", "Python", "FastAPI", "SQLite", "Ollama", "Whisper"],
    stats: {
      timeline: "3 Months",
      role: "Sole Developer",
      team: "Solo",
      status: "In Development",
    },
    highlights: [
      "Built a wake word engine using Whisper to enable fully offline voice detection",
      "Implemented a local LLM pipeline via Ollama, keeping all data on-device with no cloud dependency",
      "Designed a cross-platform desktop app with Tauri, reducing binary size vs Electron by over 60%",
    ],
    links: {
      github: "https://github.com/VincentDev007/sydny-voice-assistant-automation-tool",
    },
  },
  {
    id: "cerebra",
    title: "Cerebra",
    thumbnail: "/projects/cerebra.png",
    shortDesc: "Offline notes app with full-text search and sticky notes.",
    version: "v0.5.0",
    tech: ["Electron", "React", "TypeScript", "SQLite"],
    stats: {
      timeline: "2 Months",
      role: "Sole Developer",
      team: "Solo",
      status: "In Development",
    },
    highlights: [
      "Built full-text search using SQLite FTS5, enabling instant search across thousands of notes",
      "Implemented a sticky notes system with persistent positioning stored locally",
      "Packaged as an offline-first Electron app with no account or internet required",
    ],
    links: {
      github: "https://github.com/VincentDev007/cerebra-notes-app",
    },
  },
  {
    id: "fly",
    title: "Fly",
    thumbnail: "/projects/fly.png",
    shortDesc: "Android flight finder with live search and saved flights.",
    version: "Prototype",
    tech: ["Kotlin", "Android", "Retrofit", "Room", "Material Design"],
    stats: {
      timeline: "1 Month",
      role: "Sole Developer",
      team: "Solo",
      status: "Prototype",
    },
    highlights: [
      "Built live flight search using Retrofit to consume the Amadeus API with real-time results",
      "Implemented local saved flights with Room database for offline access",
      "Designed a clean Material Design UI optimized for one-handed mobile use",
    ],
    links: {},
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};