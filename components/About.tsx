"use client";

import { motion } from "framer-motion";
import ScrollAnimation from "./ScrollAnimation";
import { ProfessionalSummary, LocaleContent } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

interface AboutProps {
  professionalSummary: ProfessionalSummary;
  content: LocaleContent;
}

const About: React.FC<AboutProps> = ({ professionalSummary, content }) => {
  const highlights = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "4+ Years Experience",
      description:
        "Proven expertise in building and scaling high-performance web applications",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Performance Optimization",
      description:
        "Achieved 22% reduction in load times through strategic optimization",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      title: "Technical Leadership",
      description:
        "Led complex migrations and improved developer productivity by 30%",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: "Vue.js & Nuxt.js Expert",
      description:
        "Specialized in modern JavaScript frameworks and server-side rendering",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <ScrollAnimation className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {content.sections.about}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <ScrollAnimation delay={0.2}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {content.sections.professionalSummary}
              </h3>
              <div className="prose prose-lg text-muted-foreground leading-relaxed">
                <p className="text-lg">{professionalSummary.content}</p>
              </div>

              {/* Key Achievements */}
              <div className="mt-8 space-y-3">
                <h4 className="text-lg font-semibold text-foreground">
                  Key Achievements:
                </h4>
                <div className="space-y-2">
                  {[
                    "Spearheaded Nuxt 2 to Nuxt 3 migration for 9,000+ user application",
                    "Achieved 22% reduction in application load times",
                    "Improved developer productivity by 30% through reusable components",
                    "Currently pursuing IBM Generative AI certification",
                  ].map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-primary to-primary rounded-full flex items-center justify-center mt-1">
                        <svg
                          className="w-3 h-3 text-primary-foreground"
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
                      <span className="text-muted-foreground">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Highlights Grid */}
          <ScrollAnimation delay={0.4}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-muted to-muted/50 rounded-lg mb-4 text-primary">
                        {highlight.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground mb-2">
                        {highlight.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </ScrollAnimation>
        </div>

        {/* Call to Action */}
        <ScrollAnimation delay={0.6}>
          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-muted/30 to-muted/20 border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  I&apos;m passionate about creating high-performance web
                  applications that deliver exceptional user experiences.
                  Let&apos;s discuss how we can work together to bring your
                  vision to life.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => {
                      const contactSection = document.querySelector("#contact");
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200"
                    size="lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimation>
      </ScrollAnimation>
    </section>
  );
};

export default About;
