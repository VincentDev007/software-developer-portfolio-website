import { getExperiencesByYear } from '@/data/experiences'
import TimelineYear from './TimelineYear'

interface TimelinePanelProps {
  selectedId: number
  onSelectExperience: (id: number) => void
}

export default function TimelinePanel({ selectedId, onSelectExperience }: TimelinePanelProps) {
  const yearData = getExperiencesByYear()

  return (
    <div className="relative flex justify-center">

      <div
        className="max-h-[600px] overflow-y-auto overflow-x-hidden px-10 py-10 w-full max-w-2xl"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(167, 139, 250, 0.3) transparent'
        }}
      >

        <div className="relative">

          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 0.4) 80%, rgba(0, 0, 0, 0.2) 100%)'
            }}
          />

          {yearData.map(({ year, milestones, projects }) => (
            <TimelineYear
              key={year}
              year={year}
              milestones={milestones}
              projects={projects}
              selectedId={selectedId}
              onSelectExperience={onSelectExperience}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          width: 6px;
        }
        div::-webkit-scrollbar-track {
          background: transparent;
        }
        div::-webkit-scrollbar-thumb {
          background: rgba(167, 139, 250, 0.3);
          border-radius: 3px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(167, 139, 250, 0.5);
        }
      `}</style>
    </div>
  )
}
