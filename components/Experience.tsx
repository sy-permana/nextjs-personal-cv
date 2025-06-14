"use client";

import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import { Experience as ExperienceType, LocaleContent } from "@/types";

interface ExperienceProps {
  experiences: ExperienceType[];
  content: LocaleContent;
}

interface ExperienceCardProps {
  experience: ExperienceType;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
}) => {
  return (
    <ScrollAnimation delay={index * 0.2}>
      <motion.div className="relative pl-8 pb-12 last:pb-0">
        {/* Timeline Line */}
        <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-navy-600 to-navy-600"></div>

        {/* Timeline Dot */}
        <div className="absolute left-0 top-4 w-4 h-4 bg-navy-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2"></div>

        {/* Card Content */}
        <div className="pt-4">
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 ml-4 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-1">
                  {experience.position}
                </h3>
                <div className="flex items-center space-x-2 text-navy-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2h12v8H4V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-semibold">{experience.company}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">{experience.location}</span>
                </div>
              </div>
              <div className="mt-2 sm:mt-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-navy-100 text-navy-700">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {experience.period}
                </span>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              {experience.achievements.map((achievement, achievementIndex) => (
                <motion.div
                  key={achievementIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2 + achievementIndex * 0.1,
                  }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-navy-600 to-blue-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1">
                    {achievement}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </ScrollAnimation>
  );
};

const Experience: React.FC<ExperienceProps> = ({ experiences, content }) => {
  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <ScrollAnimation className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            {content.sections.experience}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My complete professional journey from logistics administration to
            software engineering, highlighting key achievements, career
            transition, and contributions in building scalable web applications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Career Journey Highlight */}
        <ScrollAnimation delay={0.4}>
          <div className="mt-16 bg-gradient-to-r from-navy-600 to-blue-500 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Career Transformation Journey
              </h3>
              <p className="text-blue-100 max-w-3xl mx-auto">
                From logistics administration to software engineering - a
                journey of continuous learning, determination, and successful
                career transition through dedicated skill development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">2014-2020</h4>
                <p className="text-blue-100 text-sm">
                  Logistics Administration
                </p>
                <p className="text-blue-200 text-xs mt-1">
                  Building foundational skills
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">2020</h4>
                <p className="text-blue-100 text-sm">Intensive Bootcamp</p>
                <p className="text-blue-200 text-xs mt-1">
                  99.05% Score Achievement
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                  </svg>
                </div>
                <h4 className="font-bold mb-2">2020-Present</h4>
                <p className="text-blue-100 text-sm">Software Engineering</p>
                <p className="text-blue-200 text-xs mt-1">
                  4+ Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Stats Section */}
        <ScrollAnimation delay={0.6}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-navy-50 to-blue-50 rounded-xl border border-navy-100"
            >
              <div className="text-3xl font-bold text-navy-900 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-navy-50 to-blue-50 rounded-xl border border-navy-100"
            >
              <div className="text-3xl font-bold text-navy-900 mb-2">9K+</div>
              <div className="text-gray-600 font-medium">Users Served</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-navy-50 to-blue-50 rounded-xl border border-navy-100"
            >
              <div className="text-3xl font-bold text-navy-900 mb-2">30%</div>
              <div className="text-gray-600 font-medium">Performance Boost</div>
            </motion.div>
          </div>
        </ScrollAnimation>
      </ScrollAnimation>
    </section>
  );
};

export default Experience;
