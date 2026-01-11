"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, MapPin, CheckCircle2 } from "lucide-react";
import { Experience as ExperienceType, LocaleContent } from "@/types";

interface ExperienceProps {
  experiences: ExperienceType[];
  content: LocaleContent;
}

const Experience: React.FC<ExperienceProps> = ({ experiences, content }) => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-indigo-600">
            {content.sections.experience}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-12 md:space-y-20">
          {experiences.map((exp, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

              {/* Timeline Node */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-20 items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 md:px-12"
              >
                <div className="bg-card/40 backdrop-blur-sm border border-border/50 p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-colors duration-300">
                  <div className="flex flex-col gap-2 mb-6">
                    <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5 font-medium text-primary">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 min-w-5 text-primary mt-0.5" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Empty Side for layout balance */}
              <div className="w-full md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
