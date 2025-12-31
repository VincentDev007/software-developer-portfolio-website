import React from 'react'

// Import icons from react-icons library
import { 
  SiJavascript,
  SiTypescript,
  SiPython,          // ✅ Use SiCsharp (it does exist, my earlier correction was wrong)
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiVercel,
} from 'react-icons/si'
import { FaGitAlt, FaJava } from 'react-icons/fa'  // ✅ Java comes from Font Awesome

// Define the Skill interface - this is the structure for each skill object
export interface Skill {
  id: number
  name: string
  icon: React.ReactElement
  category: 'language' | 'frontend' | 'backend' | 'database' | 'tools'
}

// Array of all your skills - this is your single source of truth
export const skills: Skill[] = [
  // LANGUAGES
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
    id: 5,
    name: 'Java',
    icon: <FaJava className="w-12 h-12 text-red-500" />,  // ✅ Changed to FaJava
    category: 'language'
  },

  // FRONTEND
  {
    id: 6,
    name: 'React',
    icon: <SiReact className="w-12 h-12 text-cyan-400" />,
    category: 'frontend'
  },
  {
    id: 7,
    name: 'Next.js',
    icon: <SiNextdotjs className="w-12 h-12 text-white" />,
    category: 'frontend'
  },
  {
    id: 8,
    name: 'Vue',
    icon: <SiVuedotjs className="w-12 h-12 text-green-500" />,
    category: 'frontend'
  },
  {
    id: 9,
    name: 'Angular',
    icon: <SiAngular className="w-12 h-12 text-red-600" />,
    category: 'frontend'
  },

  // BACKEND
  {
    id: 10,
    name: 'Node.js',
    icon: <SiNodedotjs className="w-12 h-12 text-green-600" />,
    category: 'backend'
  },
  {
    id: 11,
    name: 'Express',
    icon: <SiExpress className="w-12 h-12 text-gray-400" />,
    category: 'backend'
  },
  {
    id: 12,
    name: 'Django',
    icon: <SiDjango className="w-12 h-12 text-green-700" />,
    category: 'backend'
  },
  {
    id: 13,
    name: '.NET',
    icon: <SiDotnet className="w-12 h-12 text-purple-600" />,
    category: 'backend'
  },

  // DATABASE
  {
    id: 14,
    name: 'PostgreSQL',
    icon: <SiPostgresql className="w-12 h-12 text-blue-600" />,
    category: 'database'
  },
  {
    id: 15,
    name: 'MongoDB',
    icon: <SiMongodb className="w-12 h-12 text-green-500" />,
    category: 'database'
  },
  {
    id: 16,
    name: 'MySQL',
    icon: <SiMysql className="w-12 h-12 text-blue-500" />,
    category: 'database'
  },

  // TOOLS
  {
    id: 17,
    name: 'Git',
    icon: <FaGitAlt className="w-12 h-12 text-orange-600" />,
    category: 'tools'
  },
  {
    id: 18,
    name: 'Docker',
    icon: <SiDocker className="w-12 h-12 text-blue-500" />,
    category: 'tools'
  },
  {
    id: 20,
    name: 'Vercel',
    icon: <SiVercel className="w-12 h-12 text-white" />,
    category: 'tools'
  },
]

// Helper function to get skills organized by category
// This returns an object where each key is a category and value is array of skills
export function getSkillsByCategory() {
  return {
    language: skills.filter(skill => skill.category === 'language'),
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    database: skills.filter(skill => skill.category === 'database'),
    tools: skills.filter(skill => skill.category === 'tools'),
  }
}
