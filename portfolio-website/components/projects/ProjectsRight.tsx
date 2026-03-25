// Import helper function to find a project by its ID from the data file
import { getProjectById } from '@/src/data/projects';

// TypeScript interface defining the props this component receives from TwoPanel
interface ProjectsRightProps {
  selectedId: string | null;  // ID of the selected project (null if none selected)
}

// ProjectsRight Component - Displays detailed information about a selected project
// Shows project title, description, action buttons, and tech stack
export default function ProjectsRight({ selectedId }: ProjectsRightProps) {
  // GUARD CLAUSE: If no project is selected (selectedId is null), show a placeholder message
  // This happens when the user first loads the Projects section
  if (!selectedId) {
    return (
      // Centered container taking full height
      <div className="h-full flex items-center justify-center">
        {/* Placeholder content with reduced opacity for subtle appearance */}
        <div className="text-center opacity-60">
          {/* Large folder emoji */}
          <div className="text-6xl mb-4">📂</div>
          {/* Instruction text */}
          <p className="text-xl">Select a project to view details</p>
        </div>
      </div>
    );
  }

  // Get the project data object by searching for the selectedId in the projects array
  // getProjectById returns the matching project or undefined if not found
  const project = getProjectById(selectedId);

  // GUARD CLAUSE: If project is not found (defensive programming)
  // This shouldn't happen in normal operation but handles edge cases
  if (!project) {
    return (
      // Centered error message
      <div className="h-full flex items-center justify-center">
        <p className="text-xl opacity-60">Project not found</p>
      </div>
    );
  }

  // HELPER FUNCTION: Returns the brand color for a given technology
  // Used to color-code the tech stack badges at the bottom of the detail view
  // Takes a technology name string and returns a CSS color value (hex or gradient)
  const getTechColor = (tech: string) => {
    // Object mapping technology names to their official brand colors
    // Record<string, string> = TypeScript type for object with string keys and string values
    const colors: Record<string, string> = {
      'Python': 'linear-gradient(to bottom, #3776ab 50%, #ffd343 50%)',  // Python's blue/yellow split
      'JavaScript': '#f0db4f',        // JavaScript yellow
      'TypeScript': '#3178c6',        // TypeScript blue
      'React': '#61dafb',             // React cyan
      'Next.js': '#000000',           // Next.js black
      'Node.js': '#68a063',           // Node.js green
      'HTML': '#e34c26',              // HTML orange
      'CSS': '#264de4',               // CSS blue
      'Tailwind CSS': '#06b6d4',      // Tailwind cyan
      'PostgreSQL': '#336791',        // PostgreSQL blue
      'MongoDB': '#47a248',           // MongoDB green
      'Firebase': '#ffca28',          // Firebase yellow
      'OpenWeather API': '#eb6e4b',   // Orange for weather API
      'Google Maps API': '#4285f4',   // Google blue
      'Chart.js': '#ff6384',          // Chart.js pink
      'Material UI': '#0081cb',       // Material UI blue
    };
    // Return the matching color, or white as fallback if tech not found in map
    return colors[tech] || '#ffffff';
  };

  // HELPER FUNCTION: Returns abbreviated label for a given technology
  // Used to display short text inside the small tech stack badges
  // Takes a technology name and returns a 2-5 character abbreviation
  const getTechLabel = (tech: string) => {
    // Object mapping technology names to their abbreviations
    const labels: Record<string, string> = {
      'Python': 'PY',
      'JavaScript': 'JS',
      'TypeScript': 'TS',
      'React': 'REACT',
      'Next.js': 'NEXT',
      'Node.js': 'NODE',
      'HTML': 'HTML',
      'CSS': 'CSS',
      'Tailwind CSS': 'TAIL',
      'PostgreSQL': 'PSQL',
      'MongoDB': 'MONGO',
      'Firebase': 'FIRE',
      'OpenWeather API': 'API',
      'Google Maps API': 'MAPS',
      'Chart.js': 'CHART',
      'Material UI': 'MUI',
    };
    // Return the matching label, or create one by taking first 4 chars uppercase as fallback
    return labels[tech] || tech.substring(0, 4).toUpperCase();
  };

  // RENDER: Display the full project details
  return (
    // Main container - full height with vertical flexbox layout
    <div className="h-full flex flex-col">
      {/* Action buttons row - Live Demo, GitHub, Source Code, Debug */}
      {/* Currently non-functional placeholders for future implementation */}
      <div className="flex gap-3 mb-8">
        {/* Live Demo button - would link to deployed project */}
        <button className="px-6 py-2.5 bg-white/20 hover:bg-white/30 rounded-full text-sm font-semibold uppercase tracking-wider transition-all">
          Live Demo
        </button>
        {/* GitHub button - would link to GitHub repository */}
        <button className="px-6 py-2.5 bg-white/20 hover:bg-white/30 rounded-full text-sm font-semibold uppercase tracking-wider transition-all">
          GitHub
        </button>
        {/* Source Code button - would show/download source code */}
        <button className="px-6 py-2.5 bg-white/20 hover:bg-white/30 rounded-full text-sm font-semibold uppercase tracking-wider transition-all">
          Source Code
        </button>
        {/* Debug button - development/testing feature */}
        <button className="px-6 py-2.5 bg-white/20 hover:bg-white/30 rounded-full text-sm font-semibold uppercase tracking-wider transition-all">
          Debug
        </button>
      </div>

      {/* Project Title - Large, bold, uppercase heading */}
      {/* text-6xl: Extra large font size */}
      {/* font-bold: Bold font weight */}
      {/* uppercase: Transform text to uppercase */}
      {/* mb-10: Large bottom margin */}
      {/* tracking-wider: Increased letter spacing */}
      <h1 className="text-6xl font-bold uppercase mb-10 tracking-wider">{project.title}</h1>

      {/* Project Description Section */}
      {/* mb-auto: Pushes tech stack section to the bottom by taking up available space */}
      <div className="mb-auto">
        {/* Full project description from data file */}
        {/* text-base: Normal font size */}
        {/* leading-relaxed: Increased line height for readability */}
        {/* opacity-90: Slightly dimmed for visual hierarchy */}
        <p className="text-base leading-relaxed opacity-90">{project.fullDesc}</p>
      </div>

      {/* Tech Stack Section - Pinned to bottom of container */}
      {/* mt-12: Large top margin to separate from description */}
      <div className="mt-12">
        {/* Section heading */}
        <h3 className="text-sm lowercase opacity-70 mb-4">tech stack used</h3>
        {/* Tech badges container - horizontal flex layout */}
        <div className="flex gap-4">
          {/* Loop through each technology in the project's tech array */}
          {project.tech.map((tech) => (
            // Individual tech badge - square with colored background
            <div
              // React key for list rendering
              key={tech}
              // Fixed 16x16 size, rounded corners, centered content
              // Text is extra small, bold, white on colored background
              className="w-16 h-16 rounded-lg flex items-center justify-center text-xs font-bold bg-white text-black"
              // Inline style to apply dynamic background color from getTechColor helper
              // Overrides the bg-white class to show tech-specific brand colors
              style={{
                background: getTechColor(tech)
              }}
            >
              {/* Display the abbreviated tech label (e.g., "JS", "REACT") */}
              {getTechLabel(tech)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
