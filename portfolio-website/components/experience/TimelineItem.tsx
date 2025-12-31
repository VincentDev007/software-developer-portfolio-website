interface TimelineItemProps {
  id: number
  institution: string
  isProject: boolean  // true if this is a nested project item
  isActive: boolean   // true if this item is currently selected
  onClick: () => void
}

export default function TimelineItem({ 
  id, 
  institution, 
  isProject, 
  isActive, 
  onClick 
}: TimelineItemProps) {
  
  return (
    <div 
      className={`
        cursor-pointer transition-all duration-300
        ${isProject ? 'pl-5 mb-2' : 'mb-3'}
      `}
      onClick={onClick}
    >
      {/* Milestone - larger, bold text */}
      {!isProject && (
        <div
          className={`
            text-base font-semibold transition-colors duration-300
            ${isActive ? 'text-violet-600' : 'text-black/90 hover:text-violet-600'}
          `}
        >
          {institution}
        </div>
      )}

      {/* Project - smaller, with arrow, indented */}
      {isProject && (
        <div
          className={`
            text-sm transition-all duration-300
            ${isActive ? 'text-violet-600 font-medium translate-x-1' : 'text-black/60 hover:text-black/90 hover:translate-x-1'}
          `}
        >
          → {institution}
        </div>
      )}
    </div>
  )
}
