'use client'

import { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Navigation from './Navigation';
import SocialIcons from './SocialIcons';
import ProfileCard from './ProfileCard';
import SkillsModal from '../sections/skills/SkillsModal'

import AboutMeLeft from '../sections/about/AboutMeLeft';
import ProjectsLeft from '../sections/projects/ProjectsLeft';
import DevBlog_Left from '../sections/dev_blog/DevBlog_Left';

import AboutMeRight from '../sections/about/AboutMeRight';
import ProjectsRight from '../sections/projects/ProjectsRight';
import DevBlog_Right from '../sections/dev_blog/DevBlog_Right';

export default function TwoPanel() {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  const leftScrollRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const devblogRef = useRef<HTMLDivElement>(null);

  const scrollToSection = useCallback((section: string) => {
    if (section === 'skills') {
      setIsSkillsModalOpen(true);
      return;
    }
    const map: Record<string, React.RefObject<HTMLDivElement | null>> = {
      about: aboutRef,
      projects: projectsRef,
      'dev blog': devblogRef,
    };
    map[section]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  useEffect(() => {
    const root = leftScrollRef.current;
    if (!root) return;

    const handleScroll = () => {
      const scrollTop = root.scrollTop;
      const sections = [
        { ref: aboutRef, section: 'about' },
        { ref: projectsRef, section: 'projects' },
        { ref: devblogRef, section: 'dev blog' },
      ];

      let current = 'about';
      for (const { ref, section } of sections) {
        if (!ref.current) continue;
        if (ref.current.offsetTop <= scrollTop + root.clientHeight / 2) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    root.addEventListener('scroll', handleScroll, { passive: true });
    return () => root.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-8 flex-1 overflow-hidden mb-8">

        <nav aria-label="Main navigation" className="flex flex-col overflow-hidden">

          <div className="mb-0">
            <Navigation
              activeSection={activeSection}
              setActiveSection={scrollToSection}
            />

            {activeSection !== 'about' && (
              <div className="flex items-start justify-between">
                <SocialIcons />
                <ProfileCard compact={true} />
              </div>
            )}

            {activeSection === 'about' && <SocialIcons />}
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-hide" ref={leftScrollRef}>

            <div ref={aboutRef} data-section="about">
              <ProfileCard compact={false} />
              <AboutMeLeft />
            </div>

            <div className="mx-0 my-10 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />

            <div ref={projectsRef} data-section="projects">
              <ProjectsLeft
                selectedId={selectedProjectId}
                onSelectProject={setSelectedProjectId}
              />
            </div>

            <div className="mx-0 my-10 h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />

            <div ref={devblogRef} data-section="dev blog">
              <DevBlog_Left
                selectedId={selectedBlogId}
                onSelectPost={setSelectedBlogId}
              />
            </div>

          </div>
        </nav>

        <main
          id="main-content"
          className="relative bg-white/10 backdrop-blur-3xl rounded-3xl p-8 overflow-hidden flex flex-col"
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
          <div className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">

              {activeSection === 'about' && (
                <motion.div
                  key="about-right"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AboutMeRight />
                </motion.div>
              )}

              {activeSection === 'projects' && (
                <motion.div
                  key="projects-right"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <ProjectsRight selectedId={selectedProjectId} />
                </motion.div>
              )}

              {activeSection === 'dev blog' && (
                <motion.div
                  key="devblog-right"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <DevBlog_Right selectedId={selectedBlogId} />
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </main>
      </div>

      <SkillsModal
        isOpen={isSkillsModalOpen}
        onClose={() => setIsSkillsModalOpen(false)}
      />
    </>
  );
}