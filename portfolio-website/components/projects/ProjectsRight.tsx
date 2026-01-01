import { getProjectById } from '@/src/data/projects';

interface ProjectsRightProps {
  selectedId: string | null;
}

export default function ProjectsRight({ selectedId }: ProjectsRightProps) {
  // If no project is selected, show a message
  if (!selectedId) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center opacity-60">
          <div className="text-6xl mb-4">📂</div>
          <p className="text-xl">Select a project to view details</p>
        </div>
      </div>
    );
  }

  // Get the selected project using the helper function
  const project = getProjectById(selectedId);

  // If project not found (shouldn't happen, but TypeScript safety)
  if (!project) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-xl opacity-60">Project not found</p>
      </div>
    );
  }

  // Helper function to get tech color
  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      'Python': 'linear-gradient(to bottom, #3776ab 50%, #ffd343 50%)',
      'JavaScript': '#f0db4f',
      'TypeScript': '#3178c6',
      'React': '#61dafb',
      'Next.js': '#000000',
      'Node.js': '#68a063',
      'HTML': '#e34c26',
      'CSS': '#264de4',
      'Tailwind CSS': '#06b6d4',
      'PostgreSQL': '#336791',
      'MongoDB': '#47a248',
      'Firebase': '#ffca28',
      'OpenWeather API': '#eb6e4b',
      'Google Maps API': '#4285f4',
      'Chart.js': '#ff6384',
      'Material UI': '#0081cb',
    };
    return colors[tech] || '#ffffff';
  };

  // Helper function to get tech label abbreviation
  const getTechLabel = (tech: string) => {
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
    return labels[tech] || tech.substring(0, 4).toUpperCase();
  };

  // Display the project details
  return (
    <div className="h-full flex flex-col">
      {/* 4 Tab Buttons */}
      <div className="flex gap-3 mb-8">
        <button className="px-6 py-2.5 bg-white/20 hover:bg-white/30 rounded-full text-sm font-semibold uppercase tracking-wider transition-all">
          Live Demo
        </button>
        <button className="px-6 py-2.5 bg-white/20 hover:bg-white/30 rounded-full text-sm font-semibold uppercase tracking-wider transition-all">
          GitHub
        </button>
        <button className="px-6 py-2.5 bg-white/20 hover:bg-white/30 rounded-full text-sm font-semibold uppercase tracking-wider transition-all">
          Source Code
        </button>
        <button className="px-6 py-2.5 bg-white/20 hover:bg-white/30 rounded-full text-sm font-semibold uppercase tracking-wider transition-all">
          Debug
        </button>
      </div>

      {/* LARGE Title - Uppercase */}
      <h1 className="text-6xl font-bold uppercase mb-10 tracking-wider">{project.title}</h1>
      
      {/* Description - Multi-line paragraphs */}
      <div className="mb-auto">
        <p className="text-base leading-relaxed opacity-90">{project.fullDesc}</p>
      </div>

      {/* Tech Stack Section - At bottom */}
      <div className="mt-12">
        <h3 className="text-sm lowercase opacity-70 mb-4">tech stack used</h3>
        <div className="flex gap-4">
          {project.tech.map((tech) => (
            <div 
              key={tech}
              className="w-16 h-16 rounded-lg flex items-center justify-center text-xs font-bold bg-white text-black"
              style={{
                background: getTechColor(tech)
              }}
            >
              {getTechLabel(tech)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
