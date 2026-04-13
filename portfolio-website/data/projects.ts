
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
    shortDesc: "Offline voice assistant with wake word, Whisper, and Ollama.",
    intro: "Sydny is a fully offline voice assistant built with Tauri and React, designed to run entirely on-device without any cloud dependency. It uses a custom wake word engine powered by Whisper for always-on voice detection and routes commands through a local LLM pipeline via Ollama.",
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
    intro: "Cerebra is a privacy-focused desktop notes app built with Electron and React that works entirely offline. It features full-text search powered by SQLite FTS5 for instant results across thousands of notes, alongside a sticky notes system that persists layout and position locally.",
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
    intro: "Fly is an Android app that lets users search for real-time flights using the Amadeus API, returning live results without a backend. Flights can be saved locally with Room for offline access, wrapped in a clean Material Design UI optimized for one-handed use.",
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