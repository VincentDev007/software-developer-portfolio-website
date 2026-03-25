// 'use client' directive - marks this as a Client Component
// Required because this component uses React hooks (useState, useEffect) and manages interactive state
'use client'

// Import React hooks for state management and side effects
import { useState, useEffect } from 'react';
// Import Framer Motion for smooth page transition animations
import { AnimatePresence, motion } from 'framer-motion';

// Import shared layout components used across all sections
import Navigation from './Navigation';      // Navigation pills (About, Experience, Projects, Skills)
import SocialIcons from './SocialIcons';    // Social media links (GitHub, LinkedIn, Email, Phone)
import ProfileCard from './ProfileCard';    // User profile card (name, title, avatar)
import SkillsModal from '../skills/SkillsModal'  // Modal overlay for skills section

// Import Left Panel components for each section
// These display list views, timelines, or navigation content
import AboutMeLeft from '../about/AboutMeLeft';          // About section left content
import ExperienceLeft from '../experience/ExperienceLeft';  // Experience timeline
import ProjectsLeft from '../projects/ProjectsLeft';      // Project list/cards

// Import Right Panel components for each section
// These display detailed content or expanded information
import AboutMeRight from '../about/AboutMeRight';         // About section right content
import ExperienceRight from '../experience/ExperienceRight'; // Experience details
import ProjectsRight from '../projects/ProjectsRight';    // Project details


// TwoPanel Component - The main layout controller and state manager
// This is the "brain" of the application - it manages all navigation and selection state
// Layout: Two-column grid with left (navigation/lists) and right (details) panels
export default function TwoPanel() {
  // STATE 1: Active Section - tracks which section is currently displayed
  // Possible values: 'about', 'experience', 'projects', 'skills'
  // Default: 'about' (user sees About section on first load)
  const [activeSection, setActiveSection] = useState('about');

  // STATE 2: Selected Experience ID - tracks which experience item is selected in the timeline
  // Default: 10 (the first/most recent experience in the timeline)
  // This ID corresponds to experiences defined in src/data/experiences.ts
  const [selectedExperienceId, setSelectedExperienceId] = useState(10);

  // STATE 3: Selected Project ID - tracks which project is selected
  // Default: null (no project selected, shows "Select a project" placeholder)
  // When user clicks a project, this gets set to the project's ID string
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // STATE 4: Skills Modal Open State - controls whether the skills modal is visible
  // Default: false (modal is hidden)
  // When user clicks "Skills" in navigation, this becomes true
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  // STATE 5: Previous Section - remembers which section the user was on before opening Skills
  // Used to return to the correct section when closing the skills modal
  // Default: 'about'
  const [previousSection, setPreviousSection] = useState('about');

  // EFFECT: Watch for activeSection changes and open Skills modal when needed
  // This runs every time activeSection changes
  // If user clicks "Skills" button, this effect detects it and opens the modal
  useEffect(() => {
    if (activeSection === 'skills') {
      setIsSkillsModalOpen(true)
    }
  }, [activeSection])  // Dependency array: only re-run when activeSection changes

  // HANDLER: Close Skills Modal
  // Called when user clicks X button or ESC key in the skills modal
  // Restores the previous section so user returns to where they were before
  const handleCloseSkillsModal = () => {
    setIsSkillsModalOpen(false)          // Hide the modal
    setActiveSection(previousSection)    // Return to previous section (About, Experience, or Projects)
  }

// RENDER: Main layout structure
return (
  <>
    {/* Main grid container - creates the two-panel layout */}
    {/* - grid grid-cols-2: Two equal-width columns (50/50 split) */}
    {/* - gap-8: Large gap between left and right panels */}
    {/* - flex-1: Takes up available vertical space */}
    {/* - overflow-hidden: Prevents content from spilling outside */}
    {/* - mb-8: Bottom margin to separate from tech footer */}
    <div className="grid grid-cols-2 gap-8 flex-1 overflow-hidden mb-8">

      {/* ========================================
          LEFT PANEL - Navigation and Lists
          ======================================== */}
      {/* No glass background - clean transparent look */}
      {/* aria-label for accessibility - helps screen readers */}
      <nav aria-label="Main navigation" className="flex flex-col">

        {/* Top section - contains Navigation pills and ProfileCard/SocialIcons */}
        <div className="mb-8">
          {/* Navigation Component - pill-shaped section switcher */}
          <Navigation
            // Pass current active section down to Navigation
            activeSection={activeSection}
            // Pass custom setActiveSection handler that tracks previousSection
            setActiveSection={(section) => {
              // If switching to any section EXCEPT skills, remember it
              // This way when user opens Skills modal and closes it, we return to the right place
              if (section !== 'skills') {
                setPreviousSection(section)
              }
              // Update the active section (triggers re-render and useEffect)
              setActiveSection(section)
            }}
            />

          {/* CONDITIONAL RENDER: Show compact ProfileCard and SocialIcons on non-About sections */}
          {/* This creates a consistent header for Experience, Projects, Skills sections */}
          {activeSection !== 'about' && (
            <div className="flex items-start justify-between">
              <SocialIcons />                   {/* Left: Social media links */}
              <ProfileCard compact={true} />    {/* Right: Just the name */}
            </div>
          )}

          {/* CONDITIONAL RENDER: On About section, only show SocialIcons */}
          {/* The full ProfileCard appears in the scrollable content below instead */}
          {activeSection === 'about' && <SocialIcons />}
        </div>

        {/* Scrollable content area for left panel */}
        {/* - flex-1: Takes up remaining vertical space */}
        {/* - overflow-y-auto: Enables vertical scrolling if content is too long */}
        <div className="flex-1 overflow-y-auto">
          {/* AnimatePresence - Framer Motion component that animates components entering/leaving */}
          {/* mode="wait" - waits for exit animation to complete before showing next component */}
          <AnimatePresence mode="wait">
            {/* SECTION: About - Left Panel Content */}
            {activeSection === 'about' && (
              <motion.div
                key="about-left"                 // Unique key for AnimatePresence to track
                initial={{ opacity: 0 }}         // Starting state: invisible
                animate={{ opacity: 1 }}         // Animated state: fully visible
                exit={{ opacity: 0 }}            // Exit state: fade out
                transition={{ duration: 0.3 }}   // Animation takes 0.3 seconds
              >
                {/* Full ProfileCard with name, title, and avatar */}
                <ProfileCard compact={false} />
                {/* About section content (bio text) */}
                <AboutMeLeft />
              </motion.div>
            )}

            {/* SECTION: Experience - Left Panel Content */}
            {activeSection === 'experience' && (
              <motion.div
                key="experience-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Experience timeline component */}
                <ExperienceLeft
                  // Pass selected experience ID so timeline can highlight it
                  selectedId={selectedExperienceId}
                  // Callback function - when user clicks timeline item, update state
                  // This triggers ExperienceRight to show the clicked experience's details
                  onSelectExperience={setSelectedExperienceId}
                />
              </motion.div>
            )}

            {/* SECTION: Projects - Left Panel Content */}
            {activeSection === 'projects' && (
              <motion.div
                key="projects-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project list component */}
                <ProjectsLeft
                  // Pass selected project ID so list can highlight it
                  selectedId={selectedProjectId}
                  // Callback function - when user clicks project card, update state
                  // This triggers ProjectsRight to show the clicked project's details
                  onSelectProject={setSelectedProjectId}
                />

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>



      {/* ========================================
          RIGHT PANEL - Detail View with Glass Effect
          ======================================== */}
      <main
        id="main-content"  // ID for potential accessibility/testing purposes
        // Tailwind classes for glass morphism effect:
        // - relative: positioning context
        // - bg-white/10: semi-transparent white background (10% opacity)
        // - backdrop-blur-3xl: strong blur effect on content behind this panel
        // - rounded-3xl: large rounded corners
        // - p-8: padding on all sides
        // - overflow-hidden: clips content to rounded corners
        // - flex flex-col: vertical flexbox layout
        className="relative bg-white/10 backdrop-blur-3xl rounded-3xl p-8 overflow-hidden flex flex-col"
        // Inline styles for advanced glass morphism effects
        style={{
          // Subtle white border for glass effect
          border: '1.5px solid rgba(255, 255, 255, 0.3)',
          // Layered box shadows for depth and 3D effect
          // Multiple shadows at increasing distances create realistic depth
          // Inset shadows add inner highlights and shadows for glass appearance
          boxShadow: `
            0 1px 1px rgba(0, 0, 0, 0.15),      // Very close shadow
            0 2px 2px rgba(0, 0, 0, 0.15),      // Close shadow
            0 4px 4px rgba(0, 0, 0, 0.15),      // Medium shadow
            0 8px 8px rgba(0, 0, 0, 0.15),      // Far shadow
            0 16px 16px rgba(0, 0, 0, 0.15),    // Very far shadow (creates depth)
            inset 0 2px 8px rgba(255, 255, 255, 0.3),  // Inner white glow at top
            inset 0 -2px 8px rgba(0, 0, 0, 0.1)        // Inner dark shadow at bottom
          `,
          // Gradient background for subtle shimmer effect
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)'
        }}
      >

        {/* Scrollable content area for right panel */}
        {/* flex-1: Takes up all available vertical space */}
        {/* overflow-y-auto: Enables vertical scrolling if content overflows */}
        <div className="flex-1 overflow-y-auto">
          {/* AnimatePresence for smooth transitions between sections */}
          <AnimatePresence mode="wait">
            {/* SECTION: About - Right Panel Content */}
            {activeSection === 'about' && (
              <motion.div
                key="about-right"              // Unique key for AnimatePresence tracking
                initial={{ opacity: 0 }}       // Start invisible
                animate={{ opacity: 1 }}       // Fade in
                exit={{ opacity: 0 }}          // Fade out
                transition={{ duration: 0.3 }} // 300ms transition
              >
                {/* Extended bio/description content for About section */}
                <AboutMeRight />
              </motion.div>
            )}

            {/* SECTION: Experience - Right Panel Content */}
            {activeSection === 'experience' && (
              <motion.div
                key="experience-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Experience detail component - shows full info for selected experience */}
                {/* Receives selectedExperienceId from state to know which experience to display */}
                <ExperienceRight selectedId={selectedExperienceId} />
              </motion.div>
            )}

            {/* SECTION: Projects - Right Panel Content */}
            {activeSection === 'projects' && (
              <motion.div
                key="projects-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Project detail component - shows full info, tech stack, and action buttons */}
                {/* Receives selectedProjectId from state to know which project to display */}
                <ProjectsRight selectedId={selectedProjectId} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>

    {/* Skills Modal - Overlay that appears when user clicks "Skills" in navigation */}
    {/* Positioned outside the grid so it overlays the entire page */}
    <SkillsModal
      // Control modal visibility with state
      isOpen={isSkillsModalOpen}
      // Pass close handler - called when user clicks X or presses ESC
      onClose={handleCloseSkillsModal}
    />
  </>
  );
}
