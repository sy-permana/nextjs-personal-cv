"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LocaleContent, Locale } from "@/types";
import { useRouter } from "next/router";

interface NavigationProps {
  content: LocaleContent;
  currentLocale: Locale;
}

const Navigation: React.FC<NavigationProps> = ({ content, currentLocale }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: content.nav.about, href: "#about" },
    { name: content.nav.experience, href: "#experience" },
    { name: content.nav.skills, href: "#skills" },
    { name: content.nav.projects, href: "#projects" }, // Added projects
    { name: content.nav.certifications, href: "#certifications" },
    { name: content.nav.education, href: "#education" },
    { name: content.nav.contact, href: "#contact" },
  ];

  const switchLocale = () => {
    const newLocale = currentLocale === "en" ? "id" : "en";
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold font-serif tracking-tight">
              SP<span className="text-primary">.</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}

              <div className="h-4 w-px bg-border mx-2" />

              <Button
                variant="ghost"
                size="sm"
                onClick={switchLocale}
                className="ml-2 font-mono text-xs hover:bg-primary/10 hover:text-primary"
              >
                <Globe className="w-3 h-3 mr-2" />
                {currentLocale === "en" ? "ID" : "EN"}
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={switchLocale}
                className="font-mono text-xs"
              >
                {currentLocale === "en" ? "ID" : "EN"}
              </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[300px] border-l border-border bg-background/95 backdrop-blur-xl">
                   <div className="flex flex-col gap-6 mt-10">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                   </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
