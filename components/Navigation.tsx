"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LocaleContent, Locale } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
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
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="flex items-center hover:bg-transparent p-0"
            >
              <Image
                src="/logo.jpeg"
                alt="Surya Permana Logo"
                width={40}
                height={40}
                className="rounded object-cover"
                priority
              />
            </Button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}

            {/* Language Switcher */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex items-center space-x-2 ml-4 pl-4 border-l border-border"
            >
              <Button
                variant={currentLocale === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => handleLanguageChange("en")}
                className={
                  currentLocale === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary"
                }
              >
                EN
              </Button>
              <Button
                variant={currentLocale === "id" ? "default" : "outline"}
                size="sm"
                onClick={() => handleLanguageChange("id")}
                className={
                  currentLocale === "id"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary"
                }
              >
                ID
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet
              open={isMobileNavigationOpen}
              onOpenChange={setIsMobileNavigationOpen}
            >
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:text-primary focus:text-primary"
                  aria-label="Toggle menu"
                >
                  <motion.div
                    animate={{ rotate: isMobileNavigationOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMobileNavigationOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </motion.div>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left text-foreground">
                    Navigation
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => scrollToSection(item.href)}
                        className="w-full justify-start text-foreground hover:text-primary hover:bg-accent font-medium text-base h-12"
                      >
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}

                  {/* Mobile Language Switcher */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="pt-4 mt-4 border-t border-border"
                  >
                    <div className="flex flex-col space-y-3">
                      <span className="text-sm text-muted-foreground font-medium">
                        Language:
                      </span>
                      <div className="flex space-x-2">
                        <Button
                          variant={
                            currentLocale === "en" ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => handleLanguageChange("en")}
                          className={`flex-1 ${
                            currentLocale === "en"
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-primary hover:bg-accent"
                          }`}
                        >
                          English
                        </Button>
                        <Button
                          variant={
                            currentLocale === "id" ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => handleLanguageChange("id")}
                          className={`flex-1 ${
                            currentLocale === "id"
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-primary hover:bg-accent"
                          }`}
                        >
                          Indonesia
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
