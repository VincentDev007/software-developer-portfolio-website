import { projects } from '@/data/projects';

interface ProjectsLeftProps {
  selectedId: string | null;
  onSelectProject: (id: string | null) => void;
  onHoverProject: (id: string | null) => void;
}

export default function ProjectsLeft({ selectedId, onSelectProject, onHoverProject }: ProjectsLeftProps) {
  return (
    <div className="pb-8">

      <h2 className="text-[22px] font-bold mb-2 text-gray-900">My Projects</h2>
      <p className="text-[13px] text-gray-400 mb-6">Things I've built from scratch.</p>

      <div className="grid grid-cols-2 gap-3">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelectProject(selectedId === project.id ? null : project.id)}
            onMouseEnter={() => onHoverProject(project.id)}
            onMouseLeave={() => onHoverProject(null)}
            className={`flex flex-col justify-between gap-3 p-4 rounded-[14px] cursor-pointer transition-all duration-200 aspect-square text-left w-full ${
              selectedId === project.id
                ? 'bg-white/90 opacity-100'
                : 'bg-white/50 opacity-80 hover:bg-white/75 hover:opacity-100'
            }`}
            style={{
              border: selectedId === project.id
                ? '1.5px solid rgba(0,0,0,0.12)'
                : '1.5px solid rgba(0,0,0,0.06)'
            }}
          >
            <div className="w-full rounded-[8px] bg-gradient-to-br from-black/5 to-black/[0.02] flex items-center justify-center" style={{ height: '90px' }}>
              <span className="text-[10px] text-gray-300 uppercase tracking-widest">Preview</span>
            </div>

            <div className="flex flex-col gap-0">
              <h3 className="text-[17px] font-semibold text-gray-900 leading-snug">
                {project.title}
              </h3>
              <p className="text-[13px] text-gray-400 leading-relaxed line-clamp-2">
                {project.shortDesc}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
