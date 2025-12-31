import { experiences } from '@/src/data/experiences'
import ExperienceDetail from './ExperienceDetail'

interface ExperienceRightProps {
  selectedId: number
}

export default function ExperienceRight({ selectedId }: ExperienceRightProps) {
  const selectedExperience = experiences.find(exp => exp.id === selectedId)

  return (
    <div>
      <p className="text-black/50 text-xs uppercase tracking-wider text-center mb-8">
        Details
      </p>
      {selectedExperience && (
        <ExperienceDetail key={selectedId} experience={selectedExperience} />
      )}
    </div>
  )
}
