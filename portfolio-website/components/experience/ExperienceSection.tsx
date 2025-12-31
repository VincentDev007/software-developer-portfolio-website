'use client'

import { useState } from 'react'
import { experiences } from '@/src/data/experiences'
import TimelinePanel from './TimelinePanel'
import ExperienceDetail from './ExperienceDetail'

export default function ExperienceSection() {
  // State: which experience ID is currently selected/showing in detail panel
  // Default to ID 10 (Cerebra) - the first one in your HTML mockup
  const [selectedId, setSelectedId] = useState(10)

  // Find the experience object that matches the selected ID
  const selectedExperience = experiences.find(exp => exp.id === selectedId)

  return (
    // Main container - takes full viewport height
    <section className="min-h-screen flex items-center justify-center px-5 py-10">
      
      {/* Two-panel grid layout */}
      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* LEFT PANEL - Timeline */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 min-h-[600px]">
          <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-8">
            Experience Timeline
          </p>
          <TimelinePanel 
            selectedId={selectedId}
            onSelectExperience={setSelectedId}
          />
        </div>

        {/* RIGHT PANEL - Detail View */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/10 min-h-[600px]">
          <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-8">
            Details
          </p>
          {selectedExperience && (
            <ExperienceDetail experience={selectedExperience} />
          )}
        </div>

      </div>
    </section>
  )
}

