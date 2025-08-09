"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PersonalInfo, LocaleContent } from "@/types";

interface HeroProps {
  personalInfo: PersonalInfo;
  content: LocaleContent;
}

const Hero: React.FC<HeroProps> = ({ personalInfo, content }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/50 to-muted pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content Side */}
          <div className="text-center lg:text-left space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="block">
                  {personalInfo.name.split(" ").slice(0, 2).join(" ")}
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl text-muted-foreground mt-2">
                  {personalInfo.name.split(" ").slice(2).join(" ")}
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary mx-auto lg:mx-0 rounded-full"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-muted-foreground font-medium"
            >
              {personalInfo.title}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-muted-foreground"
            >
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm sm:text-base">
                  {personalInfo.location}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm sm:text-base">
                  {personalInfo.phone}
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <a href={`mailto:${personalInfo.email}`}>
                  <Mail className="w-5 h-5 mr-2" />
                  {content.nav.contact}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <a
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/20 rounded-2xl transform rotate-6"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-primary/30 rounded-2xl transform -rotate-3"></div>

              {/* Image Container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted/80 rounded-2xl shadow-2xl overflow-hidden border-4 border-background">
                  {/* Elegant placeholder with professional pattern */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background via-muted/50 to-muted relative">
                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 100"
                        className="w-full h-full"
                      >
                        <defs>
                          <pattern
                            id="grid"
                            width="10"
                            height="10"
                            patternUnits="userSpaceOnUse"
                          >
                            <path
                              d="M 10 0 L 0 0 0 10"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="0.5"
                            />
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          fill="url(#grid)"
                          className="text-primary"
                        />
                      </svg>
                    </div>

                    {/* Professional icon */}
                    <div className="relative z-10 flex flex-col items-center justify-center text-muted-foreground/60">
                      <svg
                        className="w-32 h-32 mb-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-muted-foreground font-medium text-lg">
                        Professional Photo
                      </p>
                      <p className="text-muted-foreground/80 text-sm mt-1">
                        Replace with your image
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 text-muted-foreground"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
