'use client'

import { skills } from '@/data/skills'

export default function TechStackFooter() {
  return (
    <div className="w-full overflow-hidden py-6">

      <div className="flex gap-12 animate-scroll">

        {skills.map((skill) => (
          <div
            key={`tech-1-${skill.id}`}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="text-white/50">
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-white/50 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}

        {skills.map((skill) => (
          <div
            key={`tech-2-${skill.id}`}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="text-white/50">
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-white/50 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

