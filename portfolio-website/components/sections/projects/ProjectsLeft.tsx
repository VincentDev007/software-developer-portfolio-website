'use client'

import Image from 'next/image';
import { projects } from '@/data/projects';
import { getCardShadow } from '@/utils/shadows';

interface ProjectsLeftProps {
  selectedId: string | null;
  hoveredId: string | null;
  onSelectProject: (id: string | null) => void;
  onHoverProject: (id: string | null) => void;
}

export default function ProjectsLeft({ selectedId, hoveredId, onSelectProject, onHoverProject }: ProjectsLeftProps) {
  return (
    <div className="pb-8">

      <h2 className="text-[26px] font-bold mb-0 text-gray-900">My Projects</h2>
      <p className="text-[14px] text-gray-400 font-bold mb-6 -mt-1">Things I've built from scratch.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelectProject(selectedId === project.id ? null : project.id)}
            onMouseEnter={() => onHoverProject(project.id)}
            onMouseLeave={() => onHoverProject(null)}
            className={`relative flex flex-col justify-between rounded-[14px] cursor-pointer transition-all duration-300 aspect-square text-left w-full overflow-hidden ${
              selectedId === project.id
                ? 'bg-white opacity-100 -translate-y-1 scale-[1.02]'
                : 'bg-white hover:-translate-y-1 hover:scale-[1.02]'
            }`}
            style={{
              border: selectedId === project.id
                ? '1.5px solid rgba(0,0,0,0.12)'
                : '1.5px solid rgba(0,0,0,0.06)',
              boxShadow: getCardShadow(project.id, selectedId, hoveredId),
            }}
          >
            <div className="absolute inset-0 rounded-[12px] overflow-hidden">
              {project.thumbnail && (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.75) 100%)' }} />
              {project.version && (
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/80 px-2 py-0.5 rounded-full" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.15)' }}>
                    {project.version}
                  </span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1">
                <h3 className="text-[22px] font-black text-white leading-tight tracking-[-0.02em]">
                  {project.title}
                </h3>
                <p className="text-[14px] font-black text-white/70 leading-snug line-clamp-2">
                  {project.shortDesc}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
