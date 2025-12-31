'use client'

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Navigation from './Navigation';
import SocialIcons from './SocialIcons';
import ProfileCard from './ProfileCard';

// Import all Left components
import AboutMeLeft from '../about/AboutMeLeft';
import ExperienceLeft from '../experience/ExperienceLeft';
import ProjectsLeft from '../projects/ProjectsLeft';
import ArticlesLeft from '../articles/ArticlesLeft';

// Import all Right components
import AboutMeRight from '../about/AboutMeRight';
import ExperienceRight from '../experience/ExperienceRight';
import ProjectsRight from '../projects/ProjectsRight';
import ArticlesRight from '../articles/ArticlesRight';


export default function TwoPanel() {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedExperienceId, setSelectedExperienceId] = useState(10);
 
  return (
    // Grid container - 50/50 split with gap
    <div className="grid grid-cols-2 gap-8 flex-1 overflow-hidden mb-8">
      


      {/* LEFT PANEL - No glass background */}
      <nav aria-label="Main navigation" className="flex flex-col">

        {/* Navigation Pills - Fixed at top */}

        <div className="mb-8">
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />  
          
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
                <ProjectsLeft />
              </motion.div>
            )}
            {activeSection === 'articles' && (
              <motion.div
                key="articles-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArticlesLeft />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>



      {/* RIGHT PANEL - Glass effect */}
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
                <ProjectsRight />
              </motion.div>
            )}
            {activeSection === 'articles' && (
              <motion.div
                key="articles-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArticlesRight />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>



  );
}
