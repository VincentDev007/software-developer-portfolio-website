'use client'

import { SECTIONS } from '@/utils/sections';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const sections = [SECTIONS.ABOUT, SECTIONS.PROJECTS, SECTIONS.DEV_BLOG, SECTIONS.SKILLS];

  return (
    <nav
      className="relative bg-white rounded-full p-2 flex gap-2 overflow-x-auto scrollbar-hide"
      style={{
        border: '1.5px solid rgba(0,0,0,0.08)',
        boxShadow: '0 4px 8px rgba(0,0,0,0.06), 0 16px 48px rgba(0,0,0,0.10)',
      }}
    >
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => setActiveSection(section)}
          className={`
            flex-shrink-0 flex-1
            px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wide
            transition-all duration-300
            ${
              activeSection === section
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-transparent text-gray-500 hover:bg-black/5'
            }
          `}
        >
          {section === SECTIONS.ABOUT ? 'ABOUT ME' : section}
        </button>
      ))}
    </nav>
  );
}
