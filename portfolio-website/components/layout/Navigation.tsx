'use client'

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const sections = ['about', /*'experience,*/ 'projects', 'dev blog', 'skills'];

  return (
    <nav
      className="relative backdrop-blur-3xl rounded-full p-2 flex gap-2"
      style={{
        border: '1.5px solid rgba(255, 255, 255, 0.9)',
        boxShadow: `
          0 1px 1px rgba(0, 0, 0, 0.04),
          0 2px 4px rgba(0, 0, 0, 0.06),
          0 8px 24px rgba(0, 0, 0, 0.06),
          inset 0 1px 0 rgba(255, 255, 255, 1)
        `,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.6) 100%)'
      }}
    >
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => setActiveSection(section)}
          className={`
            flex-1
            px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wide
            transition-all duration-300
            ${
              activeSection === section
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-transparent text-gray-500 hover:bg-black/5'
            }
          `}
        >
          {section === 'about' ? 'ABOUT ME' : section}
        </button>
      ))}
    </nav>
  );
}
