
export interface Project {
  id: string;
  title: string;
  emoji: string;
  thumbnail: string;
  shortDesc: string;
  oneLiner: string;
  role: string;
  challenge: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    id: "weather-tracker",
    title: "Weather Tracker",
    emoji: "☁️",
    thumbnail: "/projects/weather-tracker.png",
    shortDesc: "Real-time weather app with 5-day forecasts and location search functionality.",
    oneLiner: "Search any city and get real-time weather plus a 5-day forecast — built around the OpenWeather API.",
    role: "Solo project — built the full app including the API integration, UI layout, and responsive styling.",
    challenge: "OpenWeather returns Unix timestamps. Converting to readable local times across timezones required understanding JS Date offsets properly rather than guessing.",
    tech: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    links: {
      github: "https://github.com/yourusername/weather-tracker",
      live: "https://weather-tracker-demo.vercel.app",
    },
  },
  {
    id: "ride-scope",
    title: "Ride Scope",
    emoji: "🚗",
    thumbnail: "/projects/ride-scope.png",
    shortDesc: "Vehicle tracking and analytics platform for ride-sharing services.",
    oneLiner: "Track and analyze ride-sharing fleets in real time — GPS positions, trip history, and driver metrics in one place.",
    role: "Solo project — built end to end, from the PostgreSQL schema to the React dashboard and Google Maps integration.",
    challenge: "Real-time GPS updates were hammering the database on every ping. Fixed it by batching writes every 2 seconds and serving live positions from an in-memory store.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Google Maps API", "Chart.js"],
    links: {
      github: "https://github.com/yourusername/ride-scope",
      live: "https://ride-scope.vercel.app",
    },
  },
  {
    id: "contacts-app",
    title: "Contacts App",
    emoji: "📇",
    thumbnail: "/projects/contacts-app.png",
    shortDesc: "Modern contact management system with search, filtering, and cloud sync.",
    oneLiner: "Full CRUD contacts manager with real-time search, category filtering, and Firebase cloud sync across devices.",
    role: "Solo project — owned the full stack: Firebase setup, real-time sync logic, and the Material UI component layer.",
    challenge: "Firebase listeners fire on every change, causing search to flicker mid-type. Fixed by debouncing the input and only re-querying after the user pauses.",
    tech: ["React", "Firebase", "Material UI", "TypeScript"],
    links: {
      github: "https://github.com/yourusername/contacts-app",
    },
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};