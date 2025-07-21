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
import Footer from "@/components/Footer";
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
        <Footer personalInfo={cvData.personalInfo} />
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
