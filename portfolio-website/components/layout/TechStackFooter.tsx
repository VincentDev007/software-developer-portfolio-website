'use client'

import { skills } from '@/src/data/skills'

export default function TechStackFooter() {
  return (
    <div className="w-full overflow-hidden py-6">
      {/* Scrolling container */}
      <div className="flex gap-12 animate-scroll">
        {/* First set of logos */}
        {skills.map((skill) => (
          <div
            key={`tech-1-${skill.id}`}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="text-gray-700">
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {skills.map((skill) => (
          <div
            key={`tech-2-${skill.id}`}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <div className="text-gray-700">
              {skill.icon}
            </div>
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

