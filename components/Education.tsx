"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, BookOpen, CheckCircle } from "lucide-react";
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
      className="h-full"
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-muted">
        <CardHeader className="pb-4">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {education.degree}
              </h3>
              <div className="flex items-center text-primary mb-1">
                <GraduationCap className="w-5 h-5 mr-2" />
                <span className="font-semibold">{education.institution}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">
                  {content.labels.graduatedWith}: {education.graduationDate}
                </span>
              </div>
            </div>

            {/* Education Icon */}
            <div className="p-3 bg-gradient-to-br from-muted/50 to-muted rounded-lg">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {/* Major */}
          <div className="mb-4">
            <Badge
              variant="secondary"
              className="bg-muted text-muted-foreground"
            >
              <BookOpen className="w-4 h-4 mr-1" />
              {education.major}
            </Badge>
          </div>

          {/* Description */}
          {education.description && (
            <div className="border-t border-border pt-4">
              <p className="text-muted-foreground leading-relaxed">
                {education.description}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Education: React.FC<EducationProps> = ({ education, content }) => {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/50 to-muted"
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
            {content.sections.education}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
        >
          <Card className="border-muted">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-primary to-primary rounded-full">
                  <CheckCircle className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Foundation to Innovation
              </h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                My educational journey in Software Engineering provided the
                solid foundation in programming fundamentals, web development
                principles, and problem-solving methodologies that continue to
                drive my professional growth today.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    2014
                  </div>
                  <div className="text-muted-foreground">Graduated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    PHP
                  </div>
                  <div className="text-muted-foreground">First Language</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    Web
                  </div>
                  <div className="text-muted-foreground">Core Focus</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Gained */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
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
              >
                <Badge
                  variant="outline"
                  className="bg-background border-border text-muted-foreground hover:border-primary/30 hover:text-primary transition-colors duration-200"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
