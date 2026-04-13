'use client'

import { useEffect, useRef } from 'react';
import { skills } from '@/data/skills'

export default function TechStackFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollRef.current;
    if (!container || !scroller) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        scroller.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
      },
      { threshold: 0 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden py-3"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div ref={scrollRef} className="flex gap-12 animate-scroll">
        {[1, 2].map((copy) =>
          skills.map((skill) => (
            <div
              key={`tech-${copy}-${skill.id}`}
              className="flex items-center gap-3 flex-shrink-0"
            >
              <div className="text-gray-600">{skill.icon}</div>
              <span className="text-sm font-medium text-gray-600 whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
