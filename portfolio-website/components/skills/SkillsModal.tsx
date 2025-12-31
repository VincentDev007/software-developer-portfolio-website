'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { skills, getSkillsByCategory } from '@/src/data/skills'

interface SkillsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SkillsModal({ isOpen, onClose }: SkillsModalProps) {
  // Get skills organized by category
  const groupedSkills = getSkillsByCategory()
  
  // Category order for display (without labels)
  const categoryOrder: ('language' | 'frontend' | 'backend' | 'database' | 'tools')[] = [
    'language',
    'frontend', 
    'backend',
    'database',
    'tools'
  ]

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white/10 backdrop-blur-3xl rounded-3xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
              style={{
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                boxShadow: `
                  0 1px 1px rgba(0, 0, 0, 0.15),
                  0 2px 2px rgba(0, 0, 0, 0.15),
                  0 4px 4px rgba(0, 0, 0, 0.15),
                  0 8px 8px rgba(0, 0, 0, 0.15),
                  0 16px 16px rgba(0, 0, 0, 0.15),
                  inset 0 2px 8px rgba(255, 255, 255, 0.3),
                  inset 0 -2px 8px rgba(0, 0, 0, 0.1)
                `,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              >
                <IoClose size={32} />
              </button>

              {/* Title */}
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Skills & Technologies
              </h2>

              {/* Skills Grid - Grouped by category */}
              <div className="space-y-8">
                {categoryOrder.map(category => (
                  <div key={category} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {groupedSkills[category].map(skill => (
                      <div
                        key={skill.id}
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <span className="text-sm text-white/80 text-center font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
