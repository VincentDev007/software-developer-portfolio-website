import { getProjectById } from '@/data/projects';

interface ProjectsRightProps {
  selectedId: string | null;
}

export default function ProjectsRight({ selectedId }: ProjectsRightProps) {
  if (!selectedId) {
    return (
      <div className="h-full flex items-center justify-center text-center opacity-60">
        <div>
          <div className="text-[60px] mb-4">📂</div>
          <p className="text-[18px] text-gray-700">Select a project to view details</p>
        </div>
      </div>
    );
  }

  const project = getProjectById(selectedId);
  if (!project) return null;

  return (
    <div className="flex flex-col h-full">

      <div className="flex items-start gap-[18px] mb-6">
        <div
          className="w-14 h-14 flex-shrink-0 flex items-center justify-center text-[26px] rounded-[14px]"
          style={{
            background: 'rgba(255,255,255,0.25)',
            border: '1.5px solid rgba(255,255,255,0.4)',
          }}
        >
          {project.emoji}
        </div>
        <div className="flex-1">
          <div className="text-[26px] font-bold text-gray-900 tracking-[-0.02em] leading-[1.2] mb-1.5">
            {project.title}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {project.tech.slice(0, 2).map((t) => (
              <span
                key={t}
                className="text-[10px] font-bold uppercase tracking-[0.08em] px-[9px] py-[3px] rounded-full text-gray-700"
                style={{ background: 'rgba(255,255,255,0.22)' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px mb-6" style={{ background: 'rgba(255,255,255,0.25)' }} />

      <p className="text-[14px] leading-[1.8] text-gray-700 mb-7">{project.fullDesc}</p>

      <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400 mb-3">
        Tech Stack
      </div>
      <div className="flex flex-wrap gap-2 mb-7">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[12px] font-semibold px-3 py-1.5 rounded-[8px] text-gray-900"
            style={{
              background: 'rgba(255,255,255,0.18)',
              border: '1px solid rgba(255,255,255,0.3)',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-2.5 flex-wrap mt-auto pt-5">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-semibold text-gray-900 rounded-[10px] transition-all hover:bg-white/[0.32]"
            style={{
              background: 'rgba(255,255,255,0.18)',
              border: '1.5px solid rgba(255,255,255,0.35)',
            }}
          >
            <span>↗</span> Live Demo
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-semibold text-gray-900 rounded-[10px] transition-all hover:bg-white/[0.32]"
            style={{
              background: 'rgba(255,255,255,0.18)',
              border: '1.5px solid rgba(255,255,255,0.35)',
            }}
          >
            <span>⌥</span> GitHub
          </a>
        )}
        {project.links.source && (
          <a
            href={project.links.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-semibold text-gray-900 rounded-[10px] transition-all hover:bg-white/[0.32]"
            style={{
              background: 'rgba(255,255,255,0.18)',
              border: '1.5px solid rgba(255,255,255,0.35)',
            }}
          >
            <span>⌘</span> Source Code
          </a>
        )}
      </div>

    </div>
  );
}