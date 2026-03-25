// 'use client' directive - marks this as a Client Component (needed for onClick handlers and state)
// Client Components can use browser APIs, event handlers, and hooks
'use client'

// TypeScript interface defining the props this component receives from its parent (TwoPanel)
interface NavigationProps {
  activeSection: string;                        // Current active section ('about', 'experience', 'projects', or 'skills')
  setActiveSection: (section: string) => void;  // Callback function to update the active section in parent
}

// Navigation Component - Displays the main navigation pills at the top of the page
// Receives activeSection state and setActiveSection function from TwoPanel parent component
export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  // Array of all navigation sections - used to dynamically generate navigation buttons
  // Note: 'skills' opens a modal instead of changing the panel content
  const sections = ['about', 'experience', 'projects', 'skills'];

  return (
    // Outer container - glass morphism pill-shaped navigation bar
    // Uses Tailwind for base styling and inline styles for advanced effects
    <nav
      // Tailwind classes:
      // - relative: positioning context for children
      // - bg-white/10: semi-transparent white background (10% opacity)
      // - backdrop-blur-3xl: strong blur effect on background (glass effect)
      // - rounded-full: fully rounded corners (pill shape)
      // - p-2: padding of 0.5rem on all sides
      // - flex: flexbox layout
      // - gap-2: space between child elements
      className="relative bg-white/10 backdrop-blur-3xl rounded-full p-2 flex gap-2"
      // Inline styles for advanced glass morphism effect
      style={{
        // Subtle white border with 30% opacity for glass effect
        border: '1.5px solid rgba(255, 255, 255, 0.3)',
        // Layered box shadows creating depth (multiple shadows at different distances)
        // Also includes inset shadows for inner glow/depth effect
        boxShadow: `
          0 1px 1px rgba(0, 0, 0, 0.15),      // Very close shadow
          0 2px 2px rgba(0, 0, 0, 0.15),      // Close shadow
          0 4px 4px rgba(0, 0, 0, 0.15),      // Medium shadow
          0 8px 8px rgba(0, 0, 0, 0.15),      // Far shadow
          0 16px 16px rgba(0, 0, 0, 0.15),    // Very far shadow (creates depth)
          inset 0 2px 8px rgba(255, 255, 255, 0.3),  // Inner white glow at top
          inset 0 -2px 8px rgba(0, 0, 0, 0.1)        // Inner dark shadow at bottom
        `,
        // Linear gradient background from top-left to bottom-right for subtle shimmer effect
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)'
      }}
    >

      {/* Loop through the sections array and create a button for each section */}
      {sections.map((section) => (
        <button
          // React key for list rendering optimization (required for mapped elements)
          key={section}
          // Click handler - calls the parent's setActiveSection function to change the active section
          onClick={() => setActiveSection(section)}
          // Dynamic className using template literals
          // Conditional styling based on whether this button's section is currently active
          className={`
            flex-1
            px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wide
            transition-all duration-300
            ${
              // If this section is active, use white background with shadow
              activeSection === section
                ? 'bg-white text-black shadow-md'
                // If this section is not active, use transparent background with hover effect
                : 'bg-transparent text-black/70 hover:bg-black/5'
            }
          `}
        >
          {/* Button text - special case for 'about' section to display "ABOUT ME" */}
          {/* All other sections just display their name (uppercased by CSS) */}
          {section === 'about' ? 'ABOUT ME' : section}
        </button>
      ))}
    </nav>
  );
}
