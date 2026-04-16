'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FADE_TOP, FADE_BOTTOM } from '@/utils/gradients'
import { useEffect, useRef, useState } from 'react'
import { getSkillsByCategory } from '@/data/skills'

interface SkillsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SkillsModal({ isOpen, onClose }: SkillsModalProps) {
  const groupedSkills = getSkillsByCategory()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isAtBottom, setIsAtBottom] = useState(false)

  const categoryOrder: ('language' | 'frameworks' | 'styling' | 'database' | 'tools' | 'llm')[] = [
    'language',
    'frameworks',
    'styling',
    'database',
    'tools',
    'llm',
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

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const handleScroll = () => {
      setIsAtTop(el.scrollTop <= 8)
      setIsAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 8)
    }
    handleScroll()
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
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

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
              style={{
                border: '1.5px solid rgba(0,0,0,0.08)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.12)',
              }}
            >
<div ref={scrollRef} className="overflow-y-auto max-h-[90vh] p-5 lg:p-10">
                <h2 className="text-[24px] lg:text-[36px] font-bold text-gray-900 leading-[1.1] tracking-[-0.02em] mb-6 lg:mb-10 text-center">
                  Skills & Technologies
                </h2>

                <div className="space-y-6 lg:space-y-10">
                  {categoryOrder.map(category => (
                    <div key={category}>
                      <h3 className="text-[14px] font-bold uppercase tracking-[0.12em] text-gray-400 text-center mb-4">
                        {category === 'language' ? 'Languages' : category === 'llm' ? 'LLM' : category.charAt(0).toUpperCase() + category.slice(1)}
                      </h3>
                      <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
                        {groupedSkills[category].map(skill => (
                          <div
                            key={skill.id}
                            className="flex flex-col items-center justify-center p-3 lg:p-4 rounded-xl bg-black/[0.03] hover:bg-black/[0.06] transition-all duration-300 group w-20 lg:w-24"
                            style={{ border: '1px solid rgba(0,0,0,0.06)' }}
                          >
                            <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </div>
                            <span className="text-xs lg:text-sm text-gray-600 text-center font-medium">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {!isAtTop && (
                <div
                  className="pointer-events-none absolute top-0 left-0 right-0 h-24 rounded-t-3xl"
                  style={{ background: FADE_TOP }}
                />
              )}
              {!isAtBottom && (
                <div
                  className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 rounded-b-3xl"
                  style={{ background: FADE_BOTTOM }}
                />
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
