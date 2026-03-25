// Import the fixed background component with gradient mesh effect
import MeshBackground from '@/components/layout/MeshBackground';
// Import the main two-panel layout component (left/right split with navigation)
import TwoPanel from '@/components/layout/TwoPanel';
// Import the scrolling tech stack footer component
import TechStackFooter from '@/components/layout/TechStackFooter';

// Home Page Component - Main entry point of the portfolio website
// This is rendered inside the RootLayout component from layout.tsx
export default function Home() {
  return (
    <>
      {/* Fixed background layer - stays in place while content scrolls */}
      {/* positioned with -z-10 to stay behind all content */}
      <MeshBackground />

      {/* Main container - holds all visible content */}
      {/* - relative: Creates positioning context for absolute children */}
      {/* - z-10: Ensures content appears above the background */}
      {/* - w-full: Full width */}
      {/* - max-w-[1600px]: Maximum width constraint for large screens */}
      {/* - mx-auto: Centers the container horizontally */}
      {/* - px-10: Horizontal padding on left/right */}
      {/* - pt-10: Top padding */}
      {/* - h-screen: Full viewport height */}
      {/* - flex flex-col: Vertical flexbox layout */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-10 pt-10 h-screen flex flex-col">

        {/* Main two-panel layout component */}
        {/* Contains: Navigation, ProfileCard, SocialIcons, and all section content */}
        {/* Manages state for: activeSection, selectedProject, selectedExperience, skillsModal */}
        <TwoPanel />

        {/* Tech Stack Footer - infinite scrolling tech logos at bottom */}
        {/* Displays all skills from src/data/skills.tsx with scroll animation */}
        <TechStackFooter />
      </div>
    </>
  );
}
