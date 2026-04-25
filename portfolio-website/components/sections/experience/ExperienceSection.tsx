'use client'

import { useState } from 'react'
import { experiences } from '@/data/experiences'
import TimelinePanel from './TimelinePanel'
import ExperienceDetail from './ExperienceDetail'

export default function ExperienceSection() {
  const [selectedId, setSelectedId] = useState(10)

  const selectedExperience = experiences.find(exp => exp.id === selectedId)

  return (
    <section className="min-h-screen flex items-center justify-center px-5 py-10">


      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-10">


        <div className="bg-white rounded-3xl p-10 border border-black/8 min-h-[600px]">
          <p className="text-white/50 text-xs uppercase tracking-wider text-center mb-8">
            Experience Timeline
          </p>
          <TimelinePanel
            selectedId={selectedId}
            onSelectExperience={setSelectedId}
          />
        </div>

        <div className="bg-white rounded-3xl p-10 border border-black/8 min-h-[600px]">
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

