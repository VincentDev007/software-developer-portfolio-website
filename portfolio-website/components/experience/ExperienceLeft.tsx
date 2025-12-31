import TimelinePanel from './TimelinePanel'

interface ExperienceLeftProps {
  selectedId: number
  onSelectExperience: (id: number) => void
}

export default function ExperienceLeft({ selectedId, onSelectExperience }: ExperienceLeftProps) {
  return (
    <div>
      <p className="text-black/50 text-xs uppercase tracking-wider text-center mb-8">
        Experience Timeline
      </p>
      <TimelinePanel 
        selectedId={selectedId}
        onSelectExperience={onSelectExperience}
      />
    </div>
  )
}
