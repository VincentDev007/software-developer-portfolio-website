'use client'

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Navigation from './Navigation';
import SocialIcons from './SocialIcons';
import ProfileCard from './ProfileCard';
import SkillsModal from '../sections/skills/SkillsModal'

import AboutMeLeft from '../sections/about/AboutMeLeft';
// import ExperienceLeft from '../sections/experience/ExperienceLeft';
import ProjectsLeft from '../sections/projects/ProjectsLeft';
import DevBlog_Left from '../sections/dev_blog/DevBlog_Left';

import AboutMeRight from '../sections/about/AboutMeRight';
// import ExperienceRight from '../sections/experience/ExperienceRight';
import ProjectsRight from '../sections/projects/ProjectsRight';
import DevBlog_Right from '../sections/dev_blog/DevBlog_Right';

export default function TwoPanel() {
  const [activeSection, setActiveSection] = useState('about');

  // const [selectedExperienceId, setSelectedExperienceId] = useState(10);

  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);

  const [previousSection, setPreviousSection] = useState('about');

  useEffect(() => {
    if (activeSection === 'skills') {
      setIsSkillsModalOpen(true)
    }
  }, [activeSection])

  const handleCloseSkillsModal = () => {
    setIsSkillsModalOpen(false)
    setActiveSection(previousSection)
  }

return (
  <>

    <div className="grid grid-cols-2 gap-8 flex-1 overflow-hidden mb-8">

      <nav aria-label="Main navigation" className="flex flex-col">

        <div className="mb-0">

          <Navigation
            activeSection={activeSection}
            setActiveSection={(section) => {
              if (section !== 'skills') {
                setPreviousSection(section)
              }
              setActiveSection(section)
            }}
            />

          {activeSection !== 'about' && (
            <div className="flex items-start justify-between">
              <SocialIcons />
              <ProfileCard compact={true} />
            </div>
          )}

          {activeSection === 'about' && <SocialIcons />}
        </div>

        <div className="flex-1 overflow-y-auto">

          <AnimatePresence mode="wait">

            {activeSection === 'about' && (
              <motion.div
                key="about-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >

                <ProfileCard compact={false} />

                <AboutMeLeft />
              </motion.div>
            )}
            
            {activeSection === 'projects' && (
              <motion.div
                key="projects-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >

                <ProjectsLeft
                  selectedId={selectedProjectId}
                  onSelectProject={setSelectedProjectId}
                />

              </motion.div>
            )}

            {activeSection === 'dev blog' && (
              <motion.div
                key="devblog-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <DevBlog_Left />
              </motion.div>
            )}

            {/* this is a comment 
            {activeSection === 'experience' && (
              <motion.div
                key="experience-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >

                <ExperienceLeft
                  selectedId={selectedExperienceId}
                  onSelectExperience={setSelectedExperienceId}
                />
              </motion.div>
            )} 

            {activeSection === 'projects' && (
              <motion.div
                key="projects-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >

                <ProjectsLeft
                  selectedId={selectedProjectId}
                  onSelectProject={setSelectedProjectId}
                />

              </motion.div>
            )} */}
          </AnimatePresence>
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
              >
                <DevBlog_Right />
              </motion.div>
            )}

            {/* this is a comment 
            {activeSection === 'experience' && (
              <motion.div
                key="experience-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >

                <ExperienceRight selectedId={selectedExperienceId} />
              </motion.div>
            )} 

            {activeSection === 'projects' && (
              <motion.div
                key="projects-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >

                <ProjectsRight selectedId={selectedProjectId} />
              </motion.div>
            )} */}
          </AnimatePresence>
        </div>
      </main>
    </div>

    <SkillsModal
      isOpen={isSkillsModalOpen}
      onClose={handleCloseSkillsModal}
    />
  </>
  );
}
