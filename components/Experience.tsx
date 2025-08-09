"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar, CheckCircle } from "lucide-react";
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
        <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-primary to-primary"></div>

        {/* Timeline Dot */}
        <div className="absolute left-0 top-4 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg transform -translate-x-1/2"></div>

        {/* Card Content */}
        <div className="pt-4">
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="ml-4"
          >
            <Card className="hover:shadow-xl transition-shadow duration-300 border-muted">
              <CardHeader className="pb-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {experience.position}
                    </h3>
                    <div className="flex items-center space-x-2 text-primary">
                      <Building2 className="w-5 h-5" />
                      <span className="font-semibold">
                        {experience.company}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{experience.location}</span>
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <Badge
                      variant="secondary"
                      className="bg-muted text-muted-foreground"
                    >
                      <Calendar className="w-4 h-4 mr-1" />
                      {experience.period}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Achievements */}
                <div className="space-y-3">
                  {experience.achievements.map(
                    (achievement, achievementIndex) => (
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
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-primary to-primary rounded-full flex items-center justify-center mt-0.5">
                          <CheckCircle className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <p className="text-muted-foreground leading-relaxed flex-1">
                          {achievement}
                        </p>
                      </motion.div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {content.sections.experience}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary to-primary text-primary-foreground">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Career Transformation Journey
                  </h3>
                  <p className="text-primary-foreground/90 max-w-3xl mx-auto">
                    From logistics administration to software engineering - a
                    journey of continuous learning, determination, and
                    successful career transition through dedicated skill
                    development.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold mb-2">2014-2020</h4>
                    <p className="text-primary-foreground/90 text-sm">
                      Logistics Administration
                    </p>
                    <p className="text-primary-foreground/80 text-xs mt-1">
                      Building foundational skills
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                      </svg>
                    </div>
                    <h4 className="font-bold mb-2">2020</h4>
                    <p className="text-primary-foreground/90 text-sm">
                      Intensive Bootcamp
                    </p>
                    <p className="text-primary-foreground/80 text-xs mt-1">
                      99.05% Score Achievement
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                      </svg>
                    </div>
                    <h4 className="font-bold mb-2">2020-Present</h4>
                    <p className="text-primary-foreground/90 text-sm">
                      Software Engineering
                    </p>
                    <p className="text-primary-foreground/80 text-xs mt-1">
                      4+ Years of Excellence
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimation>

        {/* Stats Section */}
        <ScrollAnimation delay={0.6}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="text-center p-6 bg-gradient-to-br from-muted/50 to-muted border-muted">
                <div className="text-3xl font-bold text-foreground mb-2">
                  10+
                </div>
                <div className="text-muted-foreground font-medium">
                  Years Experience
                </div>
              </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="text-center p-6 bg-gradient-to-br from-muted/50 to-muted border-muted">
                <div className="text-3xl font-bold text-foreground mb-2">
                  9K+
                </div>
                <div className="text-muted-foreground font-medium">
                  Users Served
                </div>
              </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card className="text-center p-6 bg-gradient-to-br from-muted/50 to-muted border-muted">
                <div className="text-3xl font-bold text-foreground mb-2">
                  30%
                </div>
                <div className="text-muted-foreground font-medium">
                  Performance Boost
                </div>
              </Card>
            </motion.div>
          </div>
        </ScrollAnimation>
      </ScrollAnimation>
    </section>
  );
};

export default Experience;
