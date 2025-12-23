'use client'

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiGithub,
  SiVsco,
  SiPostgresql,
  SiMongodb,
  SiDocker
} from 'react-icons/si';

export default function TechStackFooter() {
  // Array of tech stack items
  const techStack = [
    { name: 'React', Icon: SiReact },
    { name: 'Next.js', Icon: SiNextdotjs },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'Tailwind CSS', Icon: SiTailwindcss },
    { name: 'HTML5', Icon: SiHtml5 },
    { name: 'CSS3', Icon: SiCss3 },
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'Python', Icon: SiPython },
    { name: 'Git', Icon: SiGit },
    { name: 'GitHub', Icon: SiGithub },
    { name: 'VS Code', Icon: SiVsco },
    { name: 'PostgreSQL', Icon: SiPostgresql },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'Docker', Icon: SiDocker },
  ];

  return (
    <div className="w-full overflow-hidden py-6">
      {/* Scrolling container */}
      <div className="flex gap-12 animate-scroll">
        {/* First set of logos */}
        {techStack.map((tech, index) => (
          <div
            key={`tech-1-${index}`}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <tech.Icon className="w-8 h-8 text-gray-700" />
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {techStack.map((tech, index) => (
          <div
            key={`tech-2-${index}`}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <tech.Icon className="w-8 h-8 text-gray-700" />
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
