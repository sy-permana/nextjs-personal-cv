"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Award, Calendar, Clock, Star } from "lucide-react";
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
      className="h-full"
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-muted">
        <CardHeader className="pb-4">
          {/* Status Badge and Icon */}
          <div className="flex items-center justify-between mb-4">
            <Badge
              variant={isCompleted ? "default" : "secondary"}
              className={
                isCompleted
                  ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-100"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200 dark:bg-amber-900 dark:text-amber-100"
              }
            >
              <div
                className={`w-2 h-2 rounded-full mr-2 ${
                  isCompleted ? "bg-emerald-500" : "bg-amber-500"
                }`}
              />
              {isCompleted
                ? content.labels.completed
                : content.labels.inProgress}
            </Badge>

            <div
              className={`p-2 rounded-lg ${
                isCompleted
                  ? "bg-emerald-50 dark:bg-emerald-900/20"
                  : "bg-amber-50 dark:bg-amber-900/20"
              }`}
            >
              <Award
                className={`w-6 h-6 ${
                  isCompleted ? "text-emerald-600" : "text-amber-600"
                }`}
              />
            </div>
          </div>

          {/* Certification Name */}
          <h3 className="text-xl font-bold text-foreground leading-tight">
            {certification.name}
          </h3>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Date Information */}
          <div className="space-y-2">
            {isCompleted && certification.completionDate && (
              <div className="flex items-center text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">
                  {content.labels.completed}: {certification.completionDate}
                </span>
              </div>
            )}

            {!isCompleted && certification.expectedDate && (
              <div className="flex items-center text-muted-foreground">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">
                  {content.labels.expectedCompletion}:{" "}
                  {certification.expectedDate}
                </span>
              </div>
            )}

            {certification.score && (
              <div className="flex items-center text-muted-foreground">
                <Star className="w-4 h-4 mr-2" />
                <span className="text-sm">
                  {content.labels.score}: {certification.score}
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          {certification.description && (
            <div className="border-t border-border pt-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {certification.description}
              </p>
            </div>
          )}

          {/* Progress Bar for In-Progress Certifications */}
          {!isCompleted && (
            <div className="pt-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>Progress</span>
                <span>In Progress</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-amber-400 to-orange-500 h-2 rounded-full"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
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
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {content.sections.certifications}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
          <Card className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 dark:from-emerald-900/20 dark:to-emerald-800/20 dark:border-emerald-800">
            <div className="text-3xl font-bold text-emerald-600 mb-2">
              {completedCount}
            </div>
            <div className="text-muted-foreground font-medium">Completed</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-100 border-amber-200 dark:from-amber-900/20 dark:to-orange-800/20 dark:border-amber-800">
            <div className="text-3xl font-bold text-amber-600 mb-2">
              {inProgressCount}
            </div>
            <div className="text-muted-foreground font-medium">In Progress</div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200 dark:from-blue-900/20 dark:to-indigo-800/20 dark:border-blue-800">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-muted-foreground font-medium">
              Hours Trained
            </div>
          </Card>
          <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 border-purple-200 dark:from-purple-900/20 dark:to-violet-800/20 dark:border-purple-800">
            <div className="text-3xl font-bold text-purple-600 mb-2">AI/ML</div>
            <div className="text-muted-foreground font-medium">Focus Area</div>
          </Card>
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
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary to-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-3xl mx-auto">
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
                  >
                    <Badge
                      variant="secondary"
                      className="bg-primary-foreground/20 backdrop-blur-sm border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30"
                    >
                      {area}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
