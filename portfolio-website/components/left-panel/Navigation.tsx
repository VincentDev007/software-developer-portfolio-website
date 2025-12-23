'use client'

import { useState } from 'react';

export default function Navigation() {
  // Array of all 5 sections - makes it easy to loop and create buttons
  const sections = ['about', 'experience', 'projects', 'articles', 'skills'];
  
  // Track which section is currently active (starts with 'about')
  const [activeSection, setActiveSection] = useState('about');

  return (
    // Outer container - glass background with rounded pill shape
    <nav className="bg-white/70 backdrop-blur-xl rounded-full p-2 flex gap-2 border border-black/5 shadow-lg">
      {/* Loop through each section and create a button */}
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => setActiveSection(section)}
          className={`
            px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wide
            transition-all duration-300
            ${
              activeSection === section
                ? 'bg-white text-black shadow-md'  // Active state: white background + shadow
                : 'bg-transparent text-black/70 hover:bg-black/5'  // Inactive state: transparent + hover effect
            }
          `}
        >
          {/* Convert 'about' to 'ABOUT ME', etc. */}
          {section === 'about' ? 'ABOUT ME' : section}
        </button>
      ))}
    </nav>
  );
}
