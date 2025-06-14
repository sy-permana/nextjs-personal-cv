"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LocaleContent, Locale } from "@/types";

interface NavigationProps {
  content: LocaleContent;
  currentLocale: Locale;
}

const Navigation: React.FC<NavigationProps> = ({ content, currentLocale }) => {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      const isMobile = window.innerWidth < 1024; // lg breakpoint

      // Close mobile menu if switching to desktop
      if (!isMobile && isMobileNavigationOpen) {
        setIsMobileNavigationOpen(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileNavigationOpen]);

  const navItems = [
    { href: "#about", label: content.nav.about },
    { href: "#experience", label: content.nav.experience },
    { href: "#skills", label: content.nav.skills },
    { href: "#certifications", label: content.nav.certifications },
    { href: "#education", label: content.nav.education },
    { href: "#contact", label: content.nav.contact },
  ];

  const handleLanguageChange = (newLocale: Locale) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const scrollToSection = (href: string) => {
    setIsMobileNavigationOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const scrollToTop = () => {
    setIsMobileNavigationOpen(false);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <button
              onClick={scrollToTop}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/logo.jpeg"
                alt="Surya Permana Logo"
                width={40}
                height={40}
                className="rounded object-cover"
                priority
              />
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-navy-600 transition-colors font-medium"
              >
                {item.label}
              </motion.button>
            ))}

            {/* Language Switcher */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-300"
            >
              <button
                onClick={() => handleLanguageChange("en")}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  currentLocale === "en"
                    ? "bg-navy-600 text-white"
                    : "text-gray-600 hover:text-navy-600"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => handleLanguageChange("id")}
                className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                  currentLocale === "id"
                    ? "bg-navy-600 text-white"
                    : "text-gray-600 hover:text-navy-600"
                }`}
              >
                ID
              </button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileNavigationOpen(!isMobileNavigationOpen)}
              className="text-gray-700 hover:text-navy-600 focus:outline-none focus:text-navy-600 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMobileNavigationOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileNavigationOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileNavigationOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 rounded-b-lg shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-navy-600 hover:bg-gray-50 rounded-md transition-colors font-medium"
                  >
                    {item.label}
                  </motion.button>
                ))}

                {/* Mobile Language Switcher */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="flex items-center space-x-2 px-3 py-2 mt-4 pt-4 border-t border-gray-200"
                >
                  <span className="text-sm text-gray-600 mr-2">Language:</span>
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      currentLocale === "en"
                        ? "bg-navy-600 text-white"
                        : "text-gray-600 hover:text-navy-600 hover:bg-gray-100"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageChange("id")}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      currentLocale === "id"
                        ? "bg-navy-600 text-white"
                        : "text-gray-600 hover:text-navy-600 hover:bg-gray-100"
                    }`}
                  >
                    Indonesia
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
