import { CVData } from "@/types";

export const cvData: CVData = {
  personalInfo: {
    name: "I Gusti Agung Ngurah Surya Permana Kusuma",
    title: "Frontend Engineer | Fullstack Developer",
    location: "Denpasar, Bali, Indonesia",
    phone: "(+62) 857-3832-9203",
    email: "suryapermana996@gmail.com",
    linkedin: "linkedin.com/in/sy-permana",
  },
  professionalSummary: {
    content:
      "A detail-oriented and experienced Software Engineer with 4+ years of expertise in building, optimizing, and scaling high-performance web applications. With 6+ years of professional experience across logistics administration and software engineering, I bring a unique perspective combining operational efficiency with technical innovation. Specializing in the Vue.js and Nuxt.js ecosystem, with proven full-stack capabilities from intensive bootcamp training. Successfully transitioned from logistics administration to software engineering through dedicated learning and achieving 99.05/100 in a 1,000-hour immersive program. Adept at leading complex technical projects, such as a full-scale Nuxt 2 to Nuxt 3 migration for a 9,000+ user application. Proven ability to enhance performance, achieving a 22% reduction in load times, and improve developer productivity by 30% through reusable component architecture. Currently advancing skills in Artificial Intelligence and Machine Learning with an IBM Generative AI certification.",
  },
  technicalSkills: {
    languages: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SASS",
      "SQL",
      "PHP",
    ],
    frameworks: [
      "Vue.js (Vue 2/3)",
      "Nuxt.js (Nuxt 2/3)",
      "Pinia",
      "Vuex",
      "Jest",
      "Vue Test Utils",
      "Vitest",
      "Mekari Pixel (Chakra UI)",
    ],
    architecture: [
      "Single Page Applications (SPA)",
      "Server-Side Rendering (SSR)",
      "Component-Based Architecture",
      "RESTful APIs",
      "Agile/Scrum Methodologies",
    ],
    performance: [
      "Code Splitting",
      "Lazy Loading",
      "Performance Tuning",
      "Web Vitals",
      "Lighthouse Audits",
    ],
    tools: ["Git", "Webpack", "Vite", "CI/CD", "npm", "Figma", "Postman"],
    fullstack: ["Node.js", "Express.js", "MySQL"],
    professional: [
      "Problem-Solving",
      "Cross-Functional Collaboration",
      "Technical Leadership",
      "Code Review",
      "Mentorship",
      "Process Optimization",
      "Data Management",
      "Project Coordination",
      "Customer Service",
      "Attention to Detail",
      "Working Under Pressure",
    ],
  },
  experience: [
    {
      position: "Frontend Software Engineer",
      company: "Mekari",
      location: "Jakarta, Indonesia (Hybrid)",
      period: "December 2020 – Present",
      achievements: [
        "Engineered and maintained the Mekari Flex SPA dashboard, a mission-critical application serving over 9,000 administrators and facilitating the disbursement of billions monthly.",
        "Spearheaded the seamless migration of the core application from Nuxt 2 to Nuxt 3, improving application scalability, maintainability, and developer experience.",
        "Achieved a 22% reduction in application load times by strategically implementing performance optimization techniques including code splitting, lazy loading, and asset optimization.",
        "Designed and implemented a scalable, reusable component library using Mekari Pixel (Chakra UI), resulting in a 30% decrease in development time for new features.",
        "Translated complex UI/UX designs from Figma into pixel-perfect, responsive, and cross-browser compatible web interfaces, ensuring a consistent user experience.",
        "Collaborated in an Agile environment, participating in sprint planning, daily stand-ups, and code reviews to maintain high code quality and team velocity.",
      ],
    },
    {
      position: "Full Stack Developer Bootcamp Student",
      company: "Hacktiv8",
      location: "Jakarta, Indonesia (Remote)",
      period: "March 2020 – October 2020",
      achievements: [
        "Completed an intensive 16-week, 1,000-hour immersive program covering full-stack web development with JavaScript, React, Node.js, and MongoDB.",
        "Achieved exceptional academic performance with a final score of 99.05/100, demonstrating strong dedication and technical aptitude.",
        "Built multiple full-stack applications including e-commerce platforms, task management systems, and social media applications using modern web technologies.",
        "Developed proficiency in both frontend and backend technologies, including React, Express.js, MongoDB, and RESTful API development.",
        "Collaborated on team projects using Git version control, Agile methodologies, and modern development workflows.",
        "Successfully transitioned from logistics administration to software engineering through dedicated self-learning and practical application.",
      ],
    },
    {
      position: "Logistics Administrator",
      company: "Various Logistics Companies",
      location: "Bali, Indonesia",
      period: "July 2014 – March 2020",
      achievements: [
        "Managed daily administrative operations for logistics and supply chain processes, ensuring efficient workflow and documentation accuracy.",
        "Coordinated shipment schedules, inventory tracking, and vendor communications to optimize delivery timelines and reduce operational costs.",
        "Maintained comprehensive databases and filing systems for logistics documentation, improving data retrieval efficiency by 40%.",
        "Collaborated with cross-functional teams including warehouse staff, drivers, and management to streamline operational procedures.",
        "Developed strong problem-solving and analytical skills while handling logistics challenges and customer service inquiries.",
        "Gained valuable experience in process optimization, attention to detail, and working under pressure in fast-paced environments.",
      ],
    },
  ],
  certifications: [
    {
      name: "IBM Generative AI Engineering Professional Certificate",
      status: "in-progress",
      expectedDate: "February 2025",
    },
    {
      name: "Hacktiv8 Remote Immersive Full Stack Developer",
      status: "completed",
      completionDate: "October 2020",
      score: "99.05/100",
      description:
        "Completed an intensive 16-week, 1,000-hour program covering the full MERN stack (MongoDB, Express.js, React, Node.js) and JavaScript fundamentals.",
    },
  ],
  education: [
    {
      institution: "SMK Pariwisata Triatma Jaya",
      degree: "Vocational High School Diploma",
      major: "Software Engineering Major",
      graduationDate: "July 2014",
      description:
        "Core curriculum included fundamental web development principles with PHP, HTML, CSS, and MySQL.",
    },
  ],
};
