'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { skills, getSkillsByCategory } from '@/data/skills'

interface SkillsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SkillsModal({ isOpen, onClose }: SkillsModalProps) {
  const groupedSkills = getSkillsByCategory()

  const categoryOrder: ('language' | 'frontend' | 'backend' | 'database' | 'tools')[] = [
    'language',
    'frontend',
    'backend',
    'database',
    'tools'
  ]

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [isOpen, onClose])

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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative backdrop-blur-3xl rounded-3xl p-10 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.75) 100%)',
                border: '1.5px solid rgba(255,255,255,0.9)',
                boxShadow: `
                  0 2px 4px rgba(0,0,0,0.04),
                  0 8px 24px rgba(0,0,0,0.08),
                  inset 0 1px 0 rgba(255,255,255,1)
                `,
              }}
            >
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 transition-colors"
              >
                <IoClose size={32} />
              </button>

              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                Skills & Technologies
              </h2>

              <div className="space-y-10">
                {categoryOrder.map(category => (
                  <div key={category}>
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-gray-400 text-center mb-4">
                      {category === 'language' ? 'Languages' : category === 'tools' ? 'Tools' : category.charAt(0).toUpperCase() + category.slice(1)}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                      {groupedSkills[category].map(skill => (
                        <div
                          key={skill.id}
                          className="flex flex-col items-center justify-center p-4 rounded-xl bg-black/[0.03] hover:bg-black/[0.06] transition-all duration-300 group w-24"
                          style={{ border: '1px solid rgba(0,0,0,0.06)' }}
                        >
                          <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </div>
                          <span className="text-sm text-gray-600 text-center font-medium">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
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
