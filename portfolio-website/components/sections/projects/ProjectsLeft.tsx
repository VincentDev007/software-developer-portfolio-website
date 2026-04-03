import { projects } from '@/data/projects';

interface ProjectsLeftProps {
  selectedId: string | null;
  onSelectProject: (id: string) => void;
}

export default function ProjectsLeft({ selectedId, onSelectProject }: ProjectsLeftProps) {
  return (
    <div className="pb-8">

      <h2 className="text-[22px] font-bold mb-2 text-gray-900">My Projects</h2>
      <p className="text-[13px] text-gray-500 mb-6">Things I've built from scratch.</p>

      <div>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project.id)}
            className={`flex flex-col gap-2.5 p-4 rounded-[14px] mb-3 cursor-pointer transition-all duration-200 ${
              selectedId === project.id
                ? 'bg-white/[0.18] opacity-100'
                : 'bg-white/[0.08] opacity-75 hover:bg-white/[0.16] hover:opacity-100'
            }`}
            style={{
              border: selectedId === project.id
                ? '1.5px solid rgba(255,255,255,0.35)'
                : '1.5px solid rgba(255,255,255,0.15)'
            }}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.08em] px-2 py-0.5 rounded-full bg-white/20 text-gray-700">
                {project.tech[0]}
              </span>
              <span className="text-[11px] text-gray-400">
                {project.tech.length} techs
              </span>
            </div>

            <h3 className="text-[14px] font-semibold text-gray-900 leading-snug">
              {project.title}
            </h3>

            <p className="text-[12px] text-gray-500 leading-relaxed">
              {project.shortDesc}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}
