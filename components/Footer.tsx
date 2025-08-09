"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone } from "lucide-react";
import { CVData } from "@/types";

interface FooterProps {
  personalInfo: CVData["personalInfo"];
}

/**
 * Footer component with contact links and copyright information.
 * Uses OKLCH semantic colors and Lucide React icons.
 *
 * @param personalInfo - Personal contact information from CV data
 * @returns Footer component with social links and animations
 */
export default function Footer({ personalInfo }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">Surya Permana</h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Thank you for taking the time to learn about my journey.
              I&apos;m excited about the possibility of working together and
              creating something amazing.
            </p>
            <div className="flex items-center justify-center space-x-6 pt-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
            <div className="pt-8 border-t border-primary-foreground/20">
              <p className="text-sm text-primary-foreground/60">
                © {new Date().getFullYear()} Surya Permana. Built with
                Next.js, TypeScript, and Tailwind CSS.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
