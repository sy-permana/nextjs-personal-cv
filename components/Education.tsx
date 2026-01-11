"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { Education as EducationType, LocaleContent } from "@/types";
import { Card, CardContent } from "@/components/ui/card";

interface EducationProps {
  education: EducationType[];
  content: LocaleContent;
}

const Education: React.FC<EducationProps> = ({ education, content }) => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {content.sections.education}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 rounded-xl bg-primary/10 text-primary">
                    <GraduationCap className="w-8 h-8" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
                      <div className="flex items-center text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.graduationDate}
                      </div>
                    </div>

                    <div className="text-lg font-medium text-primary/80">{edu.degree}</div>
                    <div className="text-muted-foreground font-medium">{edu.major}</div>

                    {edu.description && (
                      <p className="text-muted-foreground leading-relaxed pt-2 border-t border-border/50 mt-4">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
