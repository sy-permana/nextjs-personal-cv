"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechnicalSkills, LocaleContent } from "@/types";
import { Code2, Database, Layout, Server, Settings, Terminal, Zap } from "lucide-react";

interface SkillsProps {
  technicalSkills: TechnicalSkills;
  content: LocaleContent;
}

const Skills: React.FC<SkillsProps> = ({ technicalSkills, content }) => {
  const categories = [
    {
      key: "languages",
      title: content.labels.languages,
      skills: technicalSkills.languages,
      icon: Code2,
      color: "text-blue-500",
    },
    {
      key: "frameworks",
      title: content.labels.frameworks,
      skills: technicalSkills.frameworks,
      icon: Layout,
      color: "text-green-500",
    },
    {
      key: "fullstack",
      title: content.labels.fullstack,
      skills: technicalSkills.fullstack,
      icon: Server,
      color: "text-purple-500",
    },
    {
      key: "architecture",
      title: content.labels.architecture,
      skills: technicalSkills.architecture,
      icon: Database,
      color: "text-orange-500",
    },
    {
      key: "performance",
      title: content.labels.performance,
      skills: technicalSkills.performance,
      icon: Zap,
      color: "text-yellow-500",
    },
    {
      key: "tools",
      title: content.labels.tools,
      skills: technicalSkills.tools,
      icon: Terminal,
      color: "text-cyan-500",
    },
     {
      key: "professional",
      title: content.labels.professional,
      skills: technicalSkills.professional,
      icon: Settings,
      color: "text-pink-500",
    },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {content.sections.technicalSkills}
          </h2>
           <div className="h-1 w-24 bg-gradient-to-r from-primary to-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-background border border-border ${category.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors border-transparent"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
