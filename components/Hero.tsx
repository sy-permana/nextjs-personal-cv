"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ChevronDown, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PersonalInfo, LocaleContent } from "@/types";

interface HeroProps {
  personalInfo: PersonalInfo;
  content: LocaleContent;
}

const Hero: React.FC<HeroProps> = ({ personalInfo, content }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-16">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),transparent_50%)]" />
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[80px]" />

        {/* Simple Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
              >
                <Terminal className="w-4 h-4 mr-2" />
                Available for hire
              </motion.div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                <span className="block text-foreground/80 text-3xl sm:text-4xl lg:text-5xl mb-2 font-normal">
                  Hello, I&apos;m
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground">
                  {personalInfo.name.split(" ").slice(0, 2).join(" ")}
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                {personalInfo.title} based in <span className="text-foreground font-medium">{personalInfo.location}</span>.
                Crafting robust and scalable digital experiences.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300" asChild>
                <a href="#contact">
                  {content.nav.contact}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-muted-foreground/20 hover:bg-muted/50" asChild>
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6 text-muted-foreground pt-4"
            >
               <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                  <Mail className="w-6 h-6" />
               </a>
               <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
               </a>
               {/* Assuming Github link might be added later, keeping structure ready */}
               <div className="h-px w-12 bg-border hidden lg:block" />
               <span className="text-sm hidden lg:block">Open for opportunities</span>
            </motion.div>
          </motion.div>

          {/* Visual Element / "Image" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden lg:block w-[400px] h-[400px]"
          >
             {/* Abstract Geometric Composition instead of generic photo placeholder */}
             <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-[2rem] rotate-6 opacity-20 blur-2xl" />
             <div className="absolute inset-0 bg-card border border-border rounded-[2rem] shadow-2xl flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
                    backgroundSize: '24px 24px'
                  }}
                />

                <div className="relative z-10 text-center p-8">
                  <div className="w-24 h-24 bg-primary/10 rounded-2xl mx-auto mb-6 flex items-center justify-center text-primary rotate-3 hover:rotate-0 transition-transform duration-500">
                    <Code2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Full Stack<br/>Engineering</h3>
                  <p className="text-muted-foreground text-sm">Vue.js • Nuxt • React • Node.js</p>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-3 rounded-xl border border-border/50">
                      <div className="text-2xl font-bold text-primary">4+</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Years Exp</div>
                    </div>
                     <div className="bg-muted/50 p-3 rounded-xl border border-border/50">
                      <div className="text-2xl font-bold text-primary">10+</div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Projects</div>
                    </div>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/50"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
};

function Code2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

export default Hero;
