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
  SiIntellijidea,
  SiOllama,
  SiMeta,
  SiOpenai,
} from 'react-icons/si'
import { FaGitAlt, FaJava, FaPlug, FaDatabase } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import { BsFiletypeXml } from 'react-icons/bs'

export interface Skill {
  id: number
  name: string
  icon: React.ReactElement
  category: 'language' | 'frameworks' | 'styling' | 'database' | 'tools' | 'llm'
}

export const skills: Skill[] = [
  // Languages
  { id: 1,  name: 'JavaScript',    icon: <SiJavascript className="w-12 h-12 text-yellow-400" />,  category: 'language' },
  { id: 2,  name: 'TypeScript',    icon: <SiTypescript className="w-12 h-12 text-blue-500" />,    category: 'language' },
  { id: 3,  name: 'Python',        icon: <SiPython className="w-12 h-12 text-blue-400" />,        category: 'language' },
  { id: 4,  name: 'Kotlin',        icon: <SiKotlin className="w-12 h-12 text-purple-500" />,      category: 'language' },
  { id: 15, name: 'C++',           icon: <SiCplusplus className="w-12 h-12 text-blue-600" />,     category: 'language' },
  { id: 17, name: 'Java',          icon: <FaJava className="w-12 h-12 text-orange-600" />,        category: 'language' },

  // Frameworks
  { id: 5,  name: 'React',         icon: <SiReact className="w-12 h-12 text-cyan-400" />,         category: 'frameworks' },
  { id: 6,  name: 'Next.js',       icon: <SiNextdotjs className="w-12 h-12 text-gray-900" />,     category: 'frameworks' },
  { id: 8,  name: 'FastAPI',       icon: <SiFastapi className="w-12 h-12 text-teal-400" />,       category: 'frameworks' },
  { id: 9,  name: 'Electron',      icon: <SiElectron className="w-12 h-12 text-blue-400" />,      category: 'frameworks' },
  { id: 10, name: 'Tauri',         icon: <SiTauri className="w-12 h-12 text-yellow-500" />,       category: 'frameworks' },
  { id: 13, name: 'Android',       icon: <SiAndroid className="w-12 h-12 text-green-500" />,      category: 'frameworks' },

  // Styling
  { id: 7,  name: 'Tailwind CSS',  icon: <SiTailwindcss className="w-12 h-12 text-cyan-400" />,   category: 'styling' },
  { id: 16, name: 'XML',           icon: <BsFiletypeXml className="w-12 h-12 text-orange-500" />, category: 'styling' },

  // Database
  { id: 11, name: 'SQLite',        icon: <SiSqlite className="w-12 h-12 text-blue-400" />,        category: 'database' },

  // Tools
  { id: 12, name: 'Git',           icon: <FaGitAlt className="w-12 h-12 text-orange-600" />,      category: 'tools' },
  { id: 14, name: 'VS Code',       icon: <VscVscode className="w-12 h-12 text-blue-500" />,       category: 'tools' },
  { id: 18, name: 'IntelliJ IDEA', icon: <SiIntellijidea className="w-12 h-12 text-pink-500" />,  category: 'tools' },

  // LLM
  { id: 19, name: 'Ollama',        icon: <SiOllama className="w-12 h-12 text-gray-800" />,        category: 'llm' },
  { id: 20, name: 'Llama',         icon: <SiMeta className="w-12 h-12 text-blue-500" />,          category: 'llm' },
  { id: 21, name: 'Whisper',       icon: <SiOpenai className="w-12 h-12 text-gray-800" />,        category: 'llm' },

  // Additional frameworks
  { id: 22, name: 'Retrofit',      icon: <FaPlug className="w-12 h-12 text-orange-400" />,        category: 'frameworks' },

  // Additional database
  { id: 23, name: 'Room',          icon: <FaDatabase className="w-12 h-12 text-blue-400" />,      category: 'database' },
]

export function getSkillsByCategory() {
  return {
    language:   skills.filter(skill => skill.category === 'language'),
    frameworks: skills.filter(skill => skill.category === 'frameworks'),
    styling:    skills.filter(skill => skill.category === 'styling'),
    database:   skills.filter(skill => skill.category === 'database'),
    tools:      skills.filter(skill => skill.category === 'tools'),
    llm:        skills.filter(skill => skill.category === 'llm'),
  }
}
