'use client'

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const sections = ['about', /*'experience,*/ 'projects', 'dev blog', 'skills'];

  return (
    <nav
      className="relative bg-white/10 backdrop-blur-3xl rounded-full p-2 flex gap-2"
      style={{
        border: '1.5px solid rgba(255, 255, 255, 0.3)',
        boxShadow: `
          0 1px 1px rgba(0, 0, 0, 0.15),
          0 2px 2px rgba(0, 0, 0, 0.15),
          0 4px 4px rgba(0, 0, 0, 0.15),
          0 8px 8px rgba(0, 0, 0, 0.15),
          0 16px 16px rgba(0, 0, 0, 0.15),
          inset 0 2px 8px rgba(255, 255, 255, 0.3),
          inset 0 -2px 8px rgba(0, 0, 0, 0.1)
        `,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)'
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
                ? 'bg-white text-black shadow-md'
                : 'bg-transparent text-white/70 hover:bg-white/10'
            }
          `}
        >

          {section === 'about' ? 'ABOUT ME' : section}
        </button>
      ))}
    </nav>
  );
}
