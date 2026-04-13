'use client'

import { useEffect, useRef } from 'react';
import { getProjectById } from '@/data/projects';

interface ProjectsRightProps {
  selectedId: string | null;
  hoveredId: string | null;
}

function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      src={src}
      className="w-full h-full object-cover rounded-[12px]"
    />
  );
}

export default function ProjectsRight({ selectedId, hoveredId }: ProjectsRightProps) {
  const activeId = selectedId ?? hoveredId;
  if (!activeId) {
    return (
      <div className="h-full flex items-center justify-center text-center opacity-50">
        <p className="text-[28px] font-semibold text-gray-500">Select a project</p>
      </div>
    );
  }

  const project = getProjectById(activeId!);
  if (!project) return null;

  return (
    <div className="flex flex-col h-full gap-3">

      <h1 className="text-[36px] font-bold text-gray-900 leading-[1.1] tracking-[-0.02em]">
        {project.title}
      </h1>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[11px] font-semibold px-[10px] py-1 rounded-[7px] text-gray-600"
            style={{
              background: 'rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <p className="text-[14px] text-gray-500 leading-[1.7]">
        {project.shortDesc}
      </p>

      <div
        className="w-full h-[260px] rounded-[12px] flex items-center justify-center mt-8"
        style={{
          background: 'rgba(0,0,0,0.03)',
          border: '1.5px solid rgba(0,0,0,0.07)',
        }}
      >
        {project.links.demo ? (
          <VideoPlayer src={project.links.demo} />
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-40">
            <div
              className="w-8 h-8 rounded-[8px] flex items-center justify-center text-[13px]"
              style={{
                background: 'rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.1)',
              }}
            >
              ▶
            </div>
            <div className="text-[12px] text-gray-500 font-medium">Demo coming soon</div>
          </div>
        )}
      </div>

      {project.stats && (
        <div
          className="w-full grid grid-cols-4 rounded-[12px] overflow-hidden"
          style={{ border: '1.5px solid rgba(0,0,0,0.07)' }}
        >
          {[
            { label: 'TIMELINE', value: project.stats.timeline },
            { label: 'ROLE', value: project.stats.role },
            { label: 'TEAM', value: project.stats.team },
            { label: 'STATUS', value: project.stats.status },
          ].map((stat, i, arr) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-4 gap-1"
              style={{
                borderRight: i < arr.length - 1 ? '1.5px solid rgba(0,0,0,0.07)' : 'none',
              }}
            >
              <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-gray-400">
                {stat.label}
              </span>
              <span className="text-[13px] font-semibold text-gray-800 text-center leading-tight px-2">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {project.highlights && project.highlights.length > 0 && (
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400">
            Key Highlights
          </span>
          <ul className="flex flex-col gap-2">
            {project.highlights.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gray-300" />
                <span className="text-[13px] text-gray-600 leading-[1.6]">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex gap-2 flex-wrap mt-auto pt-4">
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-[18px] py-[9px] text-[12px] font-semibold rounded-[10px] transition-all"
            style={{
              background: 'rgba(99,102,241,0.1)',
              border: '1.5px solid rgba(99,102,241,0.25)',
              color: '#6366f1',
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
            className="flex items-center gap-1.5 px-[18px] py-[9px] text-[12px] font-semibold text-gray-700 rounded-[10px] transition-all"
            style={{
              background: 'rgba(0,0,0,0.05)',
              border: '1.5px solid rgba(0,0,0,0.1)',
            }}
          >
            ⌥ GitHub
          </a>
        )}
      </div>

    </div>
  );
}
