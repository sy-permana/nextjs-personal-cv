"use client";

import { motion } from "framer-motion";
import { Education as EducationType, LocaleContent } from "@/types";

interface EducationProps {
  education: EducationType[];
  content: LocaleContent;
}

interface EducationCardProps {
  education: EducationType;
  index: number;
  content: LocaleContent;
}

const EducationCard: React.FC<EducationCardProps> = ({
  education,
  index,
  content,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-navy-900 mb-2">
            {education.degree}
          </h3>
          <div className="flex items-center text-navy-600 mb-1">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
            </svg>
            <span className="font-semibold">{education.institution}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">
              {content.labels.graduatedWith}: {education.graduationDate}
            </span>
          </div>
        </div>

        {/* Education Icon */}
        <div className="p-3 bg-gradient-to-br from-navy-50 to-blue-50 rounded-lg">
          <svg
            className="w-8 h-8 text-navy-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
          </svg>
        </div>
      </div>

      {/* Major */}
      <div className="mb-4">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-navy-100 text-navy-700">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {education.major}
        </span>
      </div>

      {/* Description */}
      {education.description && (
        <div className="border-t border-gray-100 pt-4">
          <p className="text-gray-700 leading-relaxed">
            {education.description}
          </p>
        </div>
      )}
    </motion.div>
  );
};

const Education: React.FC<EducationProps> = ({ education, content }) => {
  return (
    <section
      id="education"
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
            {content.sections.education}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Educational foundation that provided the fundamental knowledge and
            skills that launched my career in software engineering and web
            development.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              education={edu}
              index={index}
              content={content}
            />
          ))}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
        >
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-navy-600 to-blue-500 rounded-full">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Foundation to Innovation
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              My educational journey in Software Engineering provided the solid
              foundation in programming fundamentals, web development
              principles, and problem-solving methodologies that continue to
              drive my professional growth today.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-900 mb-2">
                  2014
                </div>
                <div className="text-gray-600">Graduated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-900 mb-2">PHP</div>
                <div className="text-gray-600">First Language</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-900 mb-2">Web</div>
                <div className="text-gray-600">Core Focus</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Gained */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-navy-900 text-center mb-8">
            Core Skills Developed
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "PHP Programming",
              "HTML/CSS",
              "MySQL Database",
              "Web Development Fundamentals",
              "Problem Solving",
              "Software Engineering Principles",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 px-4 py-2 rounded-full text-gray-700 font-medium hover:border-navy-300 hover:text-navy-600 transition-colors duration-200"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
