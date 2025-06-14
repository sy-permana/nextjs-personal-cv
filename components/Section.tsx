"use client";

import ScrollAnimation from "./ScrollAnimation";
import { SectionProps } from "@/types";

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <section id={id} className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ScrollAnimation className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-navy-600 to-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="mt-12">{children}</div>
      </ScrollAnimation>
    </section>
  );
};

export default Section;
