export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
    source?: string;
  };
}

export const projects: Project[] = [
  {
    id: "weather-tracker",
    title: "Weather Tracker",
    thumbnail: "/projects/weather-tracker.png",
    shortDesc: "Real-time weather app with 5-day forecasts and location search functionality.",
    fullDesc: "A comprehensive weather application that provides real-time weather data and 5-day forecasts. Features location-based weather detection, city search, and detailed weather metrics including temperature, humidity, and wind speed. Built with OpenWeather API integration.",
    tech: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    links: {
      github: "https://github.com/yourusername/weather-tracker",
      live: "https://weather-tracker-demo.vercel.app",
    },
  },
  {
    id: "ride-scope",
    title: "Ride Scope",
    thumbnail: "/projects/ride-scope.png",
    shortDesc: "Vehicle tracking and analytics platform for ride-sharing services.",
    fullDesc: "A full-stack application for tracking and analyzing ride-sharing metrics. Includes real-time GPS tracking, trip history, driver analytics, and interactive dashboards. Features user authentication, role-based access control, and data visualization for fleet management.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Google Maps API", "Chart.js"],
    links: {
      github: "https://github.com/yourusername/ride-scope",
      live: "https://ride-scope.vercel.app",
    },
  },
  {
    id: "contacts-app",
    title: "Contacts App",
    thumbnail: "/projects/contacts-app.png",
    shortDesc: "Modern contact management system with search, filtering, and cloud sync.",
    fullDesc: "A feature-rich contact management application with CRUD operations, advanced search and filtering, categorization, and cloud synchronization. Supports importing/exporting contacts, custom fields, and responsive design for mobile and desktop use.",
    tech: ["React", "Firebase", "Material UI", "TypeScript"],
    links: {
      github: "https://github.com/yourusername/contacts-app",
    },
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

