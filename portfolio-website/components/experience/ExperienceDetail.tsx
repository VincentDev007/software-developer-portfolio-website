import { Experience } from '@/src/data/experiences'
import { motion } from 'framer-motion'

interface ExperienceDetailProps {
  experience: Experience
}

export default function ExperienceDetail({ experience }: ExperienceDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {/* Header section with icon and titles */}
      <div className="flex items-center gap-5 mb-8">
        {/* Icon - colored box with letter */}
        <div 
          className="w-[70px] h-[70px] rounded-2xl flex items-center justify-center text-white text-3xl font-bold"
          style={{
            background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)'
          }}
        >
          {experience.icon}
        </div>

        {/* Title section */}
        <div className="flex-1">
          <h2 className="text-black text-2xl font-semibold mb-1">
            {experience.institution}
          </h2>
          <p className="text-black/90 text-base font-medium">
            {experience.role}
          </p>
        </div>
      </div>

      {/* Date range with bottom border */}
      <div className="text-black/50 text-sm mb-6 pb-6 border-b border-black/10">
        {experience.dateRange}
      </div>

      {/* Description */}
      <div className="text-black/70 leading-relaxed text-[15px]">
        {experience.description}
      </div>
    </motion.div>
  )
}
