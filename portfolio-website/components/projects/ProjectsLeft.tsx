// Import React library (required for JSX)
import React from 'react';
// Import projects data array from centralized data file
import { projects } from '@/src/data/projects';

// TypeScript interface defining the props this component receives from TwoPanel
interface ProjectsLeftProps {
  selectedId: string | null;              // ID of the currently selected project (null if none selected)
  onSelectProject: (id: string) => void;  // Callback function to notify parent when a project is clicked
}

// ProjectsLeft Component - Displays a list of all projects on the left panel
// When user clicks a project, it calls onSelectProject which updates the parent's state
// The parent then passes the selectedId to ProjectsRight to display project details
export default function ProjectsLeft({ selectedId, onSelectProject }: ProjectsLeftProps) {
  return (
    // Main container - takes full height and uses flexbox column layout
    <div className="h-full flex flex-col">
      {/* Section heading */}
      <h2 className="text-2xl font-bold mb-6">My Projects</h2>

      {/* Scrollable container for project cards */}
      {/* - flex-1: Takes up remaining vertical space */}
      {/* - overflow-y-auto: Enables vertical scrolling if content exceeds height */}
      {/* - pr-2: Right padding for scrollbar spacing */}
      <div className="flex-1 overflow-y-auto pr-2">
        {/* Loop through the projects array and create a card for each project */}
        {projects.map((project) => (
          // Individual project card container
          <div
            // React key for list rendering optimization (required for mapped elements)
            key={project.id}
            // Dynamic className with conditional opacity based on selection state
            // - mb-6: Bottom margin between cards
            // - flex gap-4: Horizontal flexbox with gap between thumbnail and content
            // - cursor-pointer: Shows pointer cursor on hover
            // - transition-all: Smooth transition for all property changes
            // Selected project gets full opacity, others are dimmed but brighten on hover
            className={`mb-6 flex gap-4 cursor-pointer transition-all ${
              selectedId === project.id ? 'opacity-100' : 'opacity-70 hover:opacity-90'
            }`}
            // Click handler - calls parent's onSelectProject with this project's ID
            // This triggers the ProjectsRight component to display this project's details
            onClick={() => onSelectProject(project.id)}
          >
            {/* Project thumbnail/icon on LEFT side */}
            {/* - w-40 h-28: Fixed width and height */}
            {/* - bg-white/10: Semi-transparent white background */}
            {/* - rounded-lg: Rounded corners */}
            {/* - flex-shrink-0: Prevents thumbnail from shrinking */}
            {/* - flex items-center justify-center: Centers the emoji */}
            {/* - text-4xl: Large emoji size */}
            <div className="w-40 h-28 bg-white/10 rounded-lg flex-shrink-0 flex items-center justify-center text-4xl">
              {/* Display emoji based on project ID */}
              {project.id === 'weather-tracker' && '☁️'}
              {project.id === 'ride-scope' && '🚗'}
              {project.id === 'contacts-app' && '📇'}
            </div>

            {/* Project content on RIGHT side */}
            {/* - flex-1: Takes up remaining horizontal space */}
            {/* - flex flex-col: Vertical flexbox layout */}
            <div className="flex-1 flex flex-col">
              {/* Project title */}
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              {/* Project short description */}
              {/* - text-sm: Small text size */}
              {/* - opacity-90: Slightly dimmed for hierarchy */}
              {/* - mb-3: Bottom margin */}
              {/* - flex-1: Takes up available space pushing tech badges to bottom */}
              {/* - leading-relaxed: Increased line height for readability */}
              <p className="text-sm opacity-90 mb-3 flex-1 leading-relaxed">{project.shortDesc}</p>

              {/* Tech stack badges container */}
              {/* - flex flex-wrap: Horizontal layout that wraps to new line if needed */}
              {/* - gap-2: Space between badges */}
              <div className="flex flex-wrap gap-2">
                {/* Loop through each technology used in this project */}
                {project.tech.map((tech) => (
                  // Individual tech badge
                  <span
                    // React key for list rendering
                    key={tech}
                    // Styling: small pill-shaped badge with semi-transparent background
                    className="px-2.5 py-1 text-xs font-medium bg-white/15 rounded-md"
                  >
                    {/* Technology name (e.g., "React", "TypeScript") */}
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
