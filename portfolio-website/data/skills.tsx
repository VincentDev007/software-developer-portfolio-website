import React from 'react'

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiKotlin,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFastapi,
  SiSqlite,
  SiElectron,
  SiTauri,
  SiAndroid,
} from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import { BsFiletypeXml } from 'react-icons/bs'

export interface Skill {
  id: number
  name: string
  icon: React.ReactElement
  category: 'language' | 'frontend' | 'backend' | 'database' | 'tools'
}

export const skills: Skill[] = [
  {
    id: 1,
    name: 'JavaScript',
    icon: <SiJavascript className="w-12 h-12 text-yellow-400" />,
    category: 'language'
  },
  {
    id: 2,
    name: 'TypeScript',
    icon: <SiTypescript className="w-12 h-12 text-blue-500" />,
    category: 'language'
  },
  {
    id: 3,
    name: 'Python',
    icon: <SiPython className="w-12 h-12 text-blue-400" />,
    category: 'language'
  },
  {
    id: 4,
    name: 'Kotlin',
    icon: <SiKotlin className="w-12 h-12 text-purple-500" />,
    category: 'language'
  },
  {
    id: 15,
    name: 'C++',
    icon: <SiCplusplus className="w-12 h-12 text-blue-600" />,
    category: 'language'
  },
  {
    id: 16,
    name: 'XML',
    icon: <BsFiletypeXml className="w-12 h-12 text-orange-500" />,
    category: 'frontend'
  },

  {
    id: 5,
    name: 'React',
    icon: <SiReact className="w-12 h-12 text-cyan-400" />,
    category: 'frontend'
  },
  {
    id: 6,
    name: 'Next.js',
    icon: <SiNextdotjs className="w-12 h-12 text-white" />,
    category: 'frontend'
  },
  {
    id: 7,
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="w-12 h-12 text-cyan-400" />,
    category: 'frontend'
  },

  {
    id: 8,
    name: 'FastAPI',
    icon: <SiFastapi className="w-12 h-12 text-teal-400" />,
    category: 'backend'
  },
  {
    id: 9,
    name: 'Electron',
    icon: <SiElectron className="w-12 h-12 text-blue-400" />,
    category: 'tools'
  },
  {
    id: 10,
    name: 'Tauri',
    icon: <SiTauri className="w-12 h-12 text-yellow-500" />,
    category: 'tools'
  },

  {
    id: 11,
    name: 'SQLite',
    icon: <SiSqlite className="w-12 h-12 text-blue-400" />,
    category: 'database'
  },

  {
    id: 12,
    name: 'Git',
    icon: <FaGitAlt className="w-12 h-12 text-orange-600" />,
    category: 'tools'
  },
  {
    id: 13,
    name: 'Android',
    icon: <SiAndroid className="w-12 h-12 text-green-500" />,
    category: 'tools'
  },
  {
    id: 14,
    name: 'VS Code',
    icon: <VscVscode className="w-12 h-12 text-blue-500" />,
    category: 'tools'
  },
]

export function getSkillsByCategory() {
  return {
    language: skills.filter(skill => skill.category === 'language'),
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    database: skills.filter(skill => skill.category === 'database'),
    tools: skills.filter(skill => skill.category === 'tools'),
  }
}
