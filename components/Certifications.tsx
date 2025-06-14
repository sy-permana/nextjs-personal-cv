"use client";

import { motion } from "framer-motion";
import { Certification, LocaleContent } from "@/types";

interface CertificationsProps {
  certifications: Certification[];
  content: LocaleContent;
}

interface CertificationCardProps {
  certification: Certification;
  index: number;
  content: LocaleContent;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  index,
  content,
}) => {
  const isCompleted = certification.status === "completed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
    >
      {/* Status Badge */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            isCompleted
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full mr-2 ${
              isCompleted ? "bg-green-500" : "bg-yellow-500"
            }`}
          ></div>
          {isCompleted ? content.labels.completed : content.labels.inProgress}
        </span>

        {/* Certificate Icon */}
        <div
          className={`p-2 rounded-lg ${
            isCompleted ? "bg-green-50" : "bg-yellow-50"
          }`}
        >
          <svg
            className={`w-6 h-6 ${
              isCompleted ? "text-green-600" : "text-yellow-600"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* Certification Name */}
      <h3 className="text-xl font-bold text-navy-900 mb-3 leading-tight">
        {certification.name}
      </h3>

      {/* Date Information */}
      <div className="space-y-2 mb-4">
        {isCompleted && certification.completionDate && (
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
              {content.labels.completed}: {certification.completionDate}
            </span>
          </div>
        )}

        {!isCompleted && certification.expectedDate && (
          <div className="flex items-center text-gray-600">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">
              {content.labels.expectedCompletion}: {certification.expectedDate}
            </span>
          </div>
        )}

        {certification.score && (
          <div className="flex items-center text-gray-600">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm">
              {content.labels.score}: {certification.score}
            </span>
          </div>
        )}
      </div>

      {/* Description */}
      {certification.description && (
        <div className="border-t border-gray-100 pt-4">
          <p className="text-gray-700 text-sm leading-relaxed">
            {certification.description}
          </p>
        </div>
      )}

      {/* Progress Bar for In-Progress Certifications */}
      {!isCompleted && (
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>In Progress</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
            ></motion.div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Certifications: React.FC<CertificationsProps> = ({
  certifications,
  content,
}) => {
  const completedCount = certifications.filter(
    (cert) => cert.status === "completed",
  ).length;
  const inProgressCount = certifications.filter(
    (cert) => cert.status === "in-progress",
  ).length;

  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
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
            {content.sections.certifications}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development through
            industry-recognized certifications and specialized training
            programs.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {completedCount}
            </div>
            <div className="text-gray-600 font-medium">Completed</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
            <div className="text-3xl font-bold text-yellow-600 mb-2">
              {inProgressCount}
            </div>
            <div className="text-gray-600 font-medium">In Progress</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Hours Trained</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">AI/ML</div>
            <div className="text-gray-600 font-medium">Focus Area</div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard
              key={index}
              certification={certification}
              index={index}
              content={content}
            />
          ))}
        </div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-navy-600 to-blue-500 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Continuous Learning Journey
            </h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Committed to staying at the forefront of technology through
              continuous learning and professional development. Currently
              expanding expertise in AI/ML to enhance web development
              capabilities and deliver innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Full-Stack Development",
                "Artificial Intelligence",
                "Machine Learning",
                "Performance Optimization",
              ].map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {area}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
