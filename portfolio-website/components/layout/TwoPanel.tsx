'use client'

import { useState } from 'react';
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
          {activeSection === 'about' && <ProfileCard compact={false} />}
          {activeSection === 'about' && <AboutMeLeft />}
          {activeSection === 'experience' && <ExperienceLeft />}
          {activeSection === 'projects' && <ProjectsLeft />}
          {activeSection === 'articles' && <ArticlesLeft />}
        </div>
      </nav>



      {/* RIGHT PANEL - Glass effect */}
      <main 
        id="main-content" 
        className="bg-white/30 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg overflow-hidden flex flex-col"
      >
        <div className="flex-1 overflow-y-auto">
          {/* Show section-specific right content */}
          {activeSection === 'about' && <AboutMeRight />}
          {activeSection === 'experience' && <ExperienceRight />}
          {activeSection === 'projects' && <ProjectsRight />}
          {activeSection === 'articles' && <ArticlesRight />}
        </div>
      </main>
      

      
    </div>
  );
}
