import TimelineItem from './TimelineItem'
import { Experience } from '@/data/experiences'

interface TimelineYearProps {
  year: number
  milestones: Experience[]
  projects: Experience[]
  selectedId: number
  onSelectExperience: (id: number) => void
}

export default function TimelineYear({
  year,
  milestones,
  projects,
  selectedId,
  onSelectExperience
}: TimelineYearProps) {

  return (
    <div className="mb-16 last:mb-0">

      <h3 className="text-3xl font-bold text-black mb-8 pr-[calc(50%+20px)] text-right">
        {year}
      </h3>

      {milestones.map(milestone => (
        <div key={milestone.id} className="mb-8 last:mb-0 pl-[calc(50%+20px)]">

          <TimelineItem
            id={milestone.id}
            institution={milestone.institution}
            isProject={false}
            isActive={selectedId === milestone.id}
            onClick={() => onSelectExperience(milestone.id)}
          />

          {projects
            .filter(project => project.parentId === milestone.id)
            .map(project => (
              <TimelineItem
                key={project.id}
                id={project.id}
                institution={project.institution}
                isProject={true}
                isActive={selectedId === project.id}
                onClick={() => onSelectExperience(project.id)}
              />
            ))
          }
        </div>
      ))}
    </div>
  )
}
