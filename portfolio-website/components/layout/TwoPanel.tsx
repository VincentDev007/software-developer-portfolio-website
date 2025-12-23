import Navigation from '../left-panel/Navigation';
import SocialIcons from '../left-panel/SocialIcons';  
import ProfileCard from '../left-panel/ProfileCard';

export default function TwoPanel() {
  return (
    // Grid container - 50/50 split with gap
    <div className="grid grid-cols-2 gap-8 flex-1 overflow-hidden mb-8">
      
      {/* LEFT PANEL - No glass background */}
      <nav aria-label="Main navigation" className="flex flex-col">
        
        {/* Navigation Pills - Fixed at top */}
        <div className="mb-8">
          <Navigation />
          <SocialIcons />  

        </div>
        
        {/* Scrollable content area - for social icons, profile, bio (coming later) */}
        <div className="flex-1 overflow-y-auto">
          <ProfileCard />
        </div>

      </nav>



      {/* RIGHT PANEL - Glass effect */}
      <main 
        id="main-content" 
        className="bg-white/30 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg overflow-hidden flex flex-col"
      >
        <div className="flex-1 overflow-y-auto">
          Right Panel Content - Sections go here
        </div>
      </main>
      
    </div>
  );
}
