import { getProjectById } from '@/data/projects';

interface ProjectsRightProps {
  selectedId: string | null;
}

export default function ProjectsRight({ selectedId }: ProjectsRightProps) {
  if (!selectedId) {
    return (
      <div className="h-full flex items-center justify-center text-center opacity-50">
        <div>
          <div className="text-[44px] mb-3">📂</div>
          <p className="text-[15px] text-white/70">Select a project</p>
        </div>
      </div>
    );
  }

  const project = getProjectById(selectedId);
  if (!project) return null;

  return (
    <div className="flex flex-col h-full">

      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="text-[22px] font-bold text-white/90 tracking-[-0.02em] leading-[1.2]">
            {project.title}
          </div>
          <div className="text-[13px] text-white/60 leading-[1.6]">
            {project.oneLiner}
          </div>
        </div>
        <div
          className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[22px] rounded-[12px]"
          style={{
            background: 'rgba(255,255,255,0.25)',
            border: '1.5px solid rgba(255,255,255,0.4)',
          }}
        >
          {project.emoji}
        </div>
      </div>

      <div
        className="w-full h-[155px] rounded-[12px] flex items-center justify-center mb-4"
        style={{
          background: 'rgba(0,0,0,0.06)',
          border: '1.5px solid rgba(255,255,255,0.2)',
        }}
      >
        {project.links.demo ? (
          <video autoPlay loop muted playsInline src={project.links.demo} className="w-full h-full object-cover rounded-[12px]" />
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-45">
            <div
              className="w-8 h-8 rounded-[8px] flex items-center justify-center text-[13px]"
              style={{
                background: 'rgba(255,255,255,0.3)',
                border: '1px solid rgba(255,255,255,0.4)',
              }}
            >
              ▶
            </div>
            <div className="text-[12px] text-white/70 font-medium">Demo coming soon</div>
          </div>
        )}
      </div>

      <div className="h-px mb-[13px]" style={{ background: 'rgba(255,255,255,0.25)' }} />
      <div className="mb-[13px]">
        <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/40 mb-[5px]">Your role</div>
        <div className="text-[13px] text-white/70 leading-[1.7]">{project.role}</div>
      </div>

      <div className="h-px mb-[13px]" style={{ background: 'rgba(255,255,255,0.25)' }} />
      <div className="mb-[13px]">
        <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/40 mb-[5px]">What was hard</div>
        <div className="text-[13px] text-white/70 leading-[1.7]">{project.challenge}</div>
      </div>

      <div className="h-px mb-[13px]" style={{ background: 'rgba(255,255,255,0.25)' }} />
      <div className="mb-[13px]">
        <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/40 mb-[5px]">Stack</div>
        <div className="flex flex-wrap gap-[7px]">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-semibold px-[10px] py-1 rounded-[7px] text-white/90"
              style={{
                background: 'rgba(255,255,255,0.18)',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mt-auto pt-4">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-[18px] py-[9px] text-[12px] font-semibold rounded-[10px] transition-all hover:bg-white/[0.32]"
            style={{
              background: 'rgba(99,102,241,0.15)',
              border: '1.5px solid rgba(99,102,241,0.3)',
              color: '#818cf8',
            }}
          >
            ↗ Live Demo
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-[18px] py-[9px] text-[12px] font-semibold text-white/90 rounded-[10px] transition-all hover:bg-white/[0.32]"
            style={{
              background: 'rgba(255,255,255,0.18)',
              border: '1.5px solid rgba(255,255,255,0.35)',
            }}
          >
            ⌥ GitHub
          </a>
        )}
      </div>

    </div>
  );
}