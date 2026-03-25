// ============================================
// PROJECT DATA FILE
// ============================================
// This file serves as the single source of truth for all project data
// It defines the Project interface and exports the projects array
// Components import this data to display project information

// TypeScript interface defining the structure of a project object
// This ensures type safety throughout the application
export interface Project {
  id: string;           // Unique identifier for the project (used for selection state)
  title: string;        // Display name of the project
  thumbnail: string;    // Path to project thumbnail image (not currently used, shows emoji instead)
  shortDesc: string;    // Brief description shown in project cards on left panel
  fullDesc: string;     // Extended description shown in project details on right panel
  tech: string[];       // Array of technologies used (e.g., ["React", "TypeScript"])
  links: {              // Object containing project URLs
    github?: string;    // GitHub repository URL (optional)
    live?: string;      // Live demo URL (optional)
    source?: string;    // Source code URL (optional)
  };
}

// Array of all projects - this is the main data structure
// Each project object must conform to the Project interface above
export const projects: Project[] = [
  // PROJECT 1: Weather Tracker
  // Real-time weather application with API integration
  {
    id: "weather-tracker",        // Unique ID used for state management and selection
    title: "Weather Tracker",     // Display name shown in UI
    thumbnail: "/projects/weather-tracker.png",  // Image path (currently unused, emoji displayed instead)
    // Short description shown in the project card on the left panel
    shortDesc: "Real-time weather app with 5-day forecasts and location search functionality.",
    // Full description shown in the detail view on the right panel
    fullDesc: "A comprehensive weather application that provides real-time weather data and 5-day forecasts. Features location-based weather detection, city search, and detailed weather metrics including temperature, humidity, and wind speed. Built with OpenWeather API integration.",
    // Array of technologies - displayed as badges in both list and detail views
    tech: ["React", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    // Project links (for future implementation of action buttons)
    links: {
      github: "https://github.com/yourusername/weather-tracker",
      live: "https://weather-tracker-demo.vercel.app",
    },
  },
  // PROJECT 2: Ride Scope
  // Full-stack ride-sharing analytics platform
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
  // PROJECT 3: Contacts App
  // Contact management application with cloud sync
  {
    id: "contacts-app",
    title: "Contacts App",
    thumbnail: "/projects/contacts-app.png",
    shortDesc: "Modern contact management system with search, filtering, and cloud sync.",
    fullDesc: "A feature-rich contact management application with CRUD operations, advanced search and filtering, categorization, and cloud synchronization. Supports importing/exporting contacts, custom fields, and responsive design for mobile and desktop use.",
    tech: ["React", "Firebase", "Material UI", "TypeScript"],
    links: {
      github: "https://github.com/yourusername/contacts-app",
      // Note: No live demo link for this project
    },
  },
];

// HELPER FUNCTION: Get Project By ID
// Searches the projects array and returns the matching project
// Parameters:
//   - id: string - The unique project ID to search for
// Returns:
//   - Project | undefined - The matching project object, or undefined if not found
// Usage: Called by ProjectsRight component to display project details
export const getProjectById = (id: string): Project | undefined => {
  // Use JavaScript's find() method to search the array
  // Returns first project where project.id matches the provided id
  // Returns undefined if no match is found
  return projects.find((project) => project.id === id);
};

