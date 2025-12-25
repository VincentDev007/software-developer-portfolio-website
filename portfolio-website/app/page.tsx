import MeshBackground from '@/components/layout/MeshBackground';
import TwoPanel from '@/components/layout/TwoPanel';
import TechStackFooter from '@/components/layout/TechStackFooter';

export default function Home() {
  return (
    <>
      {/* Fixed background layer */}
      <MeshBackground />
      
      {/* Main container - matches prototype's .container */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-10 pt-10 h-screen flex flex-col">
        
        {/* Panels container - the grid with left/right panels */}
        <TwoPanel />
        
        {/* Tech Stack Footer - below the panels */}
        <TechStackFooter /> 
      </div>
    </>
  );
}
