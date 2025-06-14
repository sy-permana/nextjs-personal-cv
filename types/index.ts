// Personal Information Types
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
}

// Professional Summary Type
export interface ProfessionalSummary {
  content: string;
}

// Technical Skills Types
export interface TechnicalSkills {
  languages: string[];
  frameworks: string[];
  architecture: string[];
  performance: string[];
  tools: string[];
  fullstack: string[];
  professional: string[];
}

// Experience Types
export interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

// Certification Types
export interface Certification {
  name: string;
  status: 'completed' | 'in-progress';
  completionDate?: string;
  expectedDate?: string;
  score?: string;
  description?: string;
}

// Education Types
export interface Education {
  institution: string;
  degree: string;
  major: string;
  graduationDate: string;
  description?: string;
}

// Main CV Data Structure
export interface CVData {
  personalInfo: PersonalInfo;
  professionalSummary: ProfessionalSummary;
  technicalSkills: TechnicalSkills;
  experience: Experience[];
  certifications: Certification[];
  education: Education[];
}

// Animation Types
export interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// Component Props Types
export interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

export interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export interface ExperienceCardProps {
  experience: Experience;
}

export interface CertificationCardProps {
  certification: Certification;
}

export interface EducationCardProps {
  education: Education;
}

// Locale Types
export type Locale = 'en' | 'id';

export interface LocaleContent {
  nav: {
    about: string;
    experience: string;
    skills: string;
    certifications: string;
    education: string;
    contact: string;
  };
  sections: {
    about: string;
    professionalSummary: string;
    technicalSkills: string;
    experience: string;
    certifications: string;
    education: string;
    contact: string;
  };
  labels: {
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    languages: string;
    frameworks: string;
    architecture: string;
    performance: string;
    tools: string;
    fullstack: string;
    professional: string;
    present: string;
    inProgress: string;
    completed: string;
    expectedCompletion: string;
    score: string;
    graduatedWith: string;
    downloadCV: string;
  };
}