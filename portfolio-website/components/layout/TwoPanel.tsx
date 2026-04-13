'use client'

import { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SECTIONS } from '@/utils/sections';

import Navigation from './Navigation';
import SocialIcons from './SocialIcons';
import ProfileCard from './ProfileCard';
import SkillsModal from '../sections/skills/SkillsModal'

import AboutMeLeft from '../sections/about/AboutMeLeft';
import ProjectsLeft from '../sections/projects/ProjectsLeft';
import DevBlogLeft from '../sections/dev_blog/DevBlogLeft';

import AboutMeRight from '../sections/about/AboutMeRight';
import ProjectsRight from '../sections/projects/ProjectsRight';
import DevBlogRight from '../sections/dev_blog/DevBlogRight';

export default function TwoPanel() {
  const [activeSection, setActiveSection] = useState<string>(SECTIONS.ABOUT);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [hoveredBlogId, setHoveredBlogId] = useState<string | null>(null);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleSelectProject = (id: string | null) => {
    setSelectedProjectId(id);
    if (id) setShowRightPanel(true);
  };

  const handleSelectPost = (id: string | null) => {
    setSelectedBlogId(id);
    if (id) setShowRightPanel(true);
  };

  const handleBack = () => {
    setShowRightPanel(false);
    setSelectedProjectId(null);
    setSelectedBlogId(null);
  };

  const leftScrollRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const devblogRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((section: string) => {
    if (section === SECTIONS.SKILLS) {
      setIsSkillsModalOpen(true);
      return;
    }
    const map: Record<string, React.RefObject<HTMLDivElement | null>> = {
      [SECTIONS.ABOUT]: aboutRef,
      [SECTIONS.PROJECTS]: projectsRef,
      [SECTIONS.DEV_BLOG]: devblogRef,
    };
    map[section]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  useEffect(() => {
    const root = leftScrollRef.current;
    if (!root) return;

    const handleScroll = () => {
      const scrollTop = root.scrollTop;
      const sections = [
        { ref: aboutRef, section: SECTIONS.ABOUT },
        { ref: projectsRef, section: SECTIONS.PROJECTS },
        { ref: devblogRef, section: SECTIONS.DEV_BLOG },
      ];

      let current: string = SECTIONS.ABOUT;
      for (const { ref, section } of sections) {
        if (!ref.current) continue;
        if (ref.current.offsetTop <= scrollTop + root.clientHeight / 2) {
          current = section;
        }
      }

      const isAtBottom = root.scrollTop + root.clientHeight >= root.scrollHeight - 10;
      if (isAtBottom) current = SECTIONS.DEV_BLOG;

      setActiveSection(current);
    };

    root.addEventListener('scroll', handleScroll, { passive: true });
    return () => root.removeEventListener('scroll', handleScroll);
  }, []);

  const rightPanelContent = (
    <div className="flex-1 overflow-y-auto h-full">
      <AnimatePresence mode="wait">
        {activeSection === SECTIONS.ABOUT && (
          <motion.div
            key="about-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <AboutMeRight />
          </motion.div>
        )}
        {activeSection === SECTIONS.PROJECTS && (
          <motion.div
            key="projects-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <ProjectsRight selectedId={selectedProjectId} hoveredId={hoveredProjectId} />
          </motion.div>
        )}
        {activeSection === SECTIONS.DEV_BLOG && (
          <motion.div
            key="devblog-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <DevBlogRight selectedId={selectedBlogId} hoveredId={hoveredBlogId} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 min-h-0 mb-8">

        <nav aria-label="Main navigation" className={`${showRightPanel ? 'hidden lg:flex' : 'flex'} flex-col min-h-0`}>

          <div>
            <Navigation
              activeSection={activeSection}
              setActiveSection={scrollToSection}
            />

            {activeSection !== SECTIONS.ABOUT && (
              <div className="flex items-start justify-between">
                <SocialIcons />
                <ProfileCard compact={true} />
              </div>
            )}

            {activeSection === SECTIONS.ABOUT && <SocialIcons />}
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-hide shadow-overflow px-8 -mx-8 pb-6 -mb-6" ref={leftScrollRef}>

            <div ref={aboutRef} data-section={SECTIONS.ABOUT}>
              <ProfileCard compact={false} />
              <AboutMeLeft />
            </div>

            <div ref={projectsRef} data-section={SECTIONS.PROJECTS} className="mt-10">
              <ProjectsLeft
                selectedId={selectedProjectId}
                hoveredId={hoveredProjectId}
                onSelectProject={handleSelectProject}
                onHoverProject={setHoveredProjectId}
              />
            </div>

            <div ref={devblogRef} data-section={SECTIONS.DEV_BLOG} className="mt-10">
              <DevBlogLeft
                selectedId={selectedBlogId}
                hoveredId={hoveredBlogId}
                onSelectPost={handleSelectPost}
                onHoverPost={setHoveredBlogId}
              />
            </div>

          </div>
        </nav>

        <main
          id="main-content"
          className="hidden lg:flex relative bg-white rounded-3xl p-8 overflow-hidden flex-col"
          style={{
            border: '1.5px solid rgba(0,0,0,0.08)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.08), 0 16px 48px rgba(0,0,0,0.12)',
          }}
        >
          {rightPanelContent}
        </main>
      </div>

      <AnimatePresence>
        {isMobile && showRightPanel && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col p-8 overflow-hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 250 }}
          >
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-sm text-gray-500 mb-6 hover:text-gray-900 transition-colors"
            >
              ← Back
            </button>
            {rightPanelContent}
          </motion.div>
        )}
      </AnimatePresence>

      <SkillsModal
        isOpen={isSkillsModalOpen}
        onClose={() => setIsSkillsModalOpen(false)}
      />
    </>
  );
}
