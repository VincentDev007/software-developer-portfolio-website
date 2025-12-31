export interface Experience {
  id: number
  icon: string
  institution: string
  role: string
  dateRange: string
  description: string
  year: number
  type: 'milestone' | 'project'
  parentId?: number
}

export const experiences: Experience[] = [
  // 2025 - Cerebra
  {
    id: 10,
    icon: 'C',
    institution: 'Cerebra',
    role: 'Personal Project',
    dateRange: '2025',
    description: 'Developed Cerebra, a personal project showcasing modern web development practices and full-stack capabilities. Implemented using industry-standard tools and frameworks to create a robust and scalable application.',
    year: 2025,
    type: 'milestone'
  },
  // 2025 - Sydny
  {
    id: 11,
    icon: 'S',
    institution: 'Sydny',
    role: 'Personal Project',
    dateRange: '2025',
    description: 'Built Sydny, a personal project demonstrating proficiency in modern web technologies and software engineering principles. Applied best practices in design, development, and deployment to create a polished application.',
    year: 2025,
    type: 'milestone'
  },
  // 2024 - NSCC IT Programming
  {
    id: 6,
    icon: 'N',
    institution: 'NSCC IT Programming',
    role: 'Current Year - 2024',
    dateRange: '2024',
    description: 'Currently in my final year of the IT Programming diploma at Nova Scotia Community College (NSCC). This year has focused on advanced programming concepts, data structures, and software development practices. Key accomplishments include implementing complex algorithms in C, developing database-driven applications, and working with modern development tools and methodologies.',
    year: 2024,
    type: 'milestone'
  },
  {
    id: 1,
    icon: 'C',
    institution: 'C Programming Assignments',
    role: 'NSCC Class Project',
    dateRange: '2024',
    description: 'Completed advanced data structures and algorithms assignments in C, demonstrating proficiency in low-level programming and algorithm implementation. Key Assignments: LinkedList & Merge Sort, Priority Queues using heaps, and Maps with hash implementation.',
    year: 2024,
    type: 'project',
    parentId: 6
  },
  {
    id: 2,
    icon: 'R',
    institution: 'Resto Database',
    role: 'NSCC Class Project',
    dateRange: '2024',
    description: 'Developed a restaurant management database system using C# to handle menu items, orders, and customer information. Implemented CRUD operations, data validation, and relational database design principles for efficient data management.',
    year: 2024,
    type: 'project',
    parentId: 6
  },
  // 2023 - NSCC IT Programming
  {
    id: 7,
    icon: 'N',
    institution: 'NSCC IT Programming',
    role: 'Second Year - 2023',
    dateRange: '2023',
    description: 'Second year at NSCC focused on building practical programming skills through hands-on projects and coursework. Gained experience with object-oriented programming, API integration, and front-end development. Developed multiple applications demonstrating proficiency in different programming languages and problem-solving approaches.',
    year: 2023,
    type: 'milestone'
  },
  {
    id: 3,
    icon: 'C',
    institution: 'Contacts Software',
    role: 'NSCC Class Project',
    dateRange: '2023',
    description: 'Developed a contact management application using C++ as part of coursework at NSCC. Implemented features for adding, editing, deleting, and searching contacts with data persistence. Applied object-oriented programming principles and data structures to create an efficient and user-friendly application.',
    year: 2023,
    type: 'project',
    parentId: 7
  },
  {
    id: 4,
    icon: 'W',
    institution: 'Weather App',
    role: 'NSCC Class Project',
    dateRange: '2023',
    description: 'Built a weather application that fetches real-time weather data from external APIs. Implemented responsive UI and dynamic data visualization for weather forecasts. Gained experience working with REST APIs, JSON data parsing, and creating interactive user interfaces.',
    year: 2023,
    type: 'project',
    parentId: 7
  },
  // 2022 - Started NSCC
  {
    id: 8,
    icon: 'N',
    institution: 'Started at NSCC',
    role: 'First Year - 2022',
    dateRange: 'September 2022',
    description: 'Began IT Programming diploma at Nova Scotia Community College (NSCC) in September 2022, embarking on a comprehensive journey into software development. First year focused on learning programming fundamentals, web development basics, and software engineering principles. Built foundational projects including a movie review website using React.',
    year: 2022,
    type: 'milestone'
  },
  {
    id: 5,
    icon: 'C',
    institution: 'CINEPOST',
    role: 'NSCC Class Project',
    dateRange: '2022',
    description: 'Developed a movie review and discussion website using React, allowing users to browse movies, read reviews, and participate in community discussions. Implemented component-based architecture, state management, and responsive design principles for an engaging user experience.',
    year: 2022,
    type: 'project',
    parentId: 8
  }
]

// Helper function to get experiences grouped by year
export function getExperiencesByYear() {
  const years = Array.from(new Set(experiences.map(exp => exp.year))).sort((a, b) => b - a)
  
  return years.map(year => ({
    year,
    milestones: experiences.filter(exp => exp.year === year && exp.type === 'milestone'),
    projects: experiences.filter(exp => exp.year === year && exp.type === 'project')
  }))
}
