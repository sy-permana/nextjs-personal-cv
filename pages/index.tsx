import { GetStaticProps } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { cvData } from "@/lib/cv-data";
import { getLocaleFromContext, getLocaleContent } from "@/lib/i18n";
import { CVData, LocaleContent, Locale } from "@/types";

interface HomeProps {
  cvData: CVData;
  content: LocaleContent;
  locale: Locale;
}

export default function Home({ cvData, content, locale }: HomeProps) {
  return (
    <>
      <Head>
        <title>Surya Permana - Frontend Engineer & Fullstack Developer</title>
        <meta
          name="description"
          content="Experienced Software Engineer with 10+ years of professional experience, including 6 years in logistics administration and 4+ years in software engineering. Expert in Vue.js, Nuxt.js, and modern web development with a unique background in process optimization and operational efficiency."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Frontend Engineer, Fullstack Developer, Vue.js, Nuxt.js, JavaScript, TypeScript, Web Development, Bali Developer"
        />
        <meta
          name="author"
          content="I Gusti Agung Ngurah Surya Permana Kusuma"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Surya Permana - Frontend Engineer & Fullstack Developer"
        />
        <meta
          property="og:description"
          content="Experienced Software Engineer with 10+ years of professional experience, including successful career transition from logistics to software engineering. Expert in Vue.js, Nuxt.js, and modern web development."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:locale"
          content={locale === "en" ? "en_US" : "id_ID"}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Surya Permana - Frontend Engineer & Fullstack Developer"
        />
        <meta
          name="twitter:description"
          content="Experienced Software Engineer with 10+ years of professional experience, including successful career transition from logistics to software engineering. Expert in Vue.js, Nuxt.js, and modern web development."
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Navigation */}
        <Navigation content={content} currentLocale={locale} />

        {/* Hero Section */}
        <Hero personalInfo={cvData.personalInfo} content={content} />

        {/* About Section */}
        <motion.div
          id="about"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <About
            professionalSummary={cvData.professionalSummary}
            content={content}
          />
        </motion.div>

        {/* Experience Section */}
        <motion.div
          id="experience"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Experience experiences={cvData.experience} content={content} />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          id="skills"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Skills technicalSkills={cvData.technicalSkills} content={content} />
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          id="certifications"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Certifications
            certifications={cvData.certifications}
            content={content}
          />
        </motion.div>

        {/* Education Section */}
        <motion.div
          id="education"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Education education={cvData.education} content={content} />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          id="contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Contact personalInfo={cvData.personalInfo} content={content} />
        </motion.div>

        {/* Footer */}
        <footer className="bg-navy-900 text-white py-12">
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
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Thank you for taking the time to learn about my journey.
                  I&apos;m excited about the possibility of working together and
                  creating something amazing.
                </p>
                <div className="flex items-center justify-center space-x-6 pt-6">
                  <a
                    href={`mailto:${cvData.personalInfo.email}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    aria-label="Email"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                  <a
                    href={`https://${cvData.personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href={`tel:${cvData.personalInfo.phone}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                    aria-label="Phone"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </a>
                </div>
                <div className="pt-8 border-t border-gray-700">
                  <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Surya Permana. Built with
                    Next.js, TypeScript, and Tailwind CSS.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = getLocaleFromContext(context);
  const content = getLocaleContent(locale);

  return {
    props: {
      cvData,
      content,
      locale,
    },
  };
};
