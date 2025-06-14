"use client";

import { motion } from "framer-motion";
import { TechnicalSkills, LocaleContent } from "@/types";

interface SkillsProps {
  technicalSkills: TechnicalSkills;
  content: LocaleContent;
}

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay?: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center">
        <span className="w-2 h-2 bg-gradient-to-r from-navy-600 to-blue-500 rounded-full mr-3"></span>
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: delay + index * 0.1 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 text-navy-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 hover:border-blue-300 transition-colors duration-200"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC<SkillsProps> = ({ technicalSkills, content }) => {
  const skillCategories = [
    {
      title: content.labels.languages,
      skills: technicalSkills.languages,
    },
    {
      title: content.labels.frameworks,
      skills: technicalSkills.frameworks,
    },
    {
      title: content.labels.architecture,
      skills: technicalSkills.architecture,
    },
    {
      title: content.labels.performance,
      skills: technicalSkills.performance,
    },
    {
      title: content.labels.tools,
      skills: technicalSkills.tools,
    },
    {
      title: content.labels.fullstack,
      skills: technicalSkills.fullstack,
    },
    {
      title: content.labels.professional,
      skills: technicalSkills.professional,
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            {content.sections.technicalSkills}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of technologies, frameworks, and
            methodologies that enable me to build robust, scalable, and
            performant web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Core Expertise
            </h3>
            <p className="text-gray-600 mb-6 max-w-4xl mx-auto">
              With 10+ years of professional experience spanning logistics
              administration and software engineering, I bring a unique blend of
              operational efficiency and technical innovation. Specializing in
              the Vue.js ecosystem, particularly Nuxt.js, while maintaining
              full-stack capabilities. My diverse background enables me to
              approach technical challenges with strong process optimization
              skills and attention to detail gained from logistics experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Vue.js",
                "Nuxt.js",
                "TypeScript",
                "Process Optimization",
                "Technical Leadership",
                "Problem Solving",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-navy-600 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
