import React from 'react';
import { projects } from '@/src/data/projects';

interface ProjectsLeftProps {
  selectedId: string | null;
  onSelectProject: (id: string) => void;
}

export default function ProjectsLeft({ selectedId, onSelectProject }: ProjectsLeftProps) {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-6">My Projects</h2>
      
      <div className="flex-1 overflow-y-auto pr-2">
        {projects.map((project) => (
          <div 
            key={project.id}
            className={`mb-6 flex gap-4 cursor-pointer transition-all ${
              selectedId === project.id ? 'opacity-100' : 'opacity-70 hover:opacity-90'
            }`}
            onClick={() => onSelectProject(project.id)}
          >
            {/* Image on LEFT */}
            <div className="w-40 h-28 bg-white/10 rounded-lg flex-shrink-0 flex items-center justify-center text-4xl">
              {project.id === 'weather-tracker' && '☁️'}
              {project.id === 'ride-scope' && '🚗'}
              {project.id === 'contacts-app' && '📇'}
            </div>

            {/* Content on RIGHT */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm opacity-90 mb-3 flex-1 leading-relaxed">{project.shortDesc}</p>
              
              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium bg-white/15 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
