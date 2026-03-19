import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Linkedin, Mail, ExternalLink, Github, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { href: "/#story", label: "Story" },
  { href: "/#case-studies", label: "Work" },
  { href: "/#contact", label: "Say Hello" },
];

function smoothScrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    if (location !== "/") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    if (location === "/") {
      e.preventDefault();
      smoothScrollTo(hash);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Skip to content
      </a>
      {/* Sticky Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-2 z-50">
            <img
              src={`${import.meta.env.BASE_URL}images/headshot.jpeg`}
              alt="Dheeraj Chowdhary"
              className="w-10 h-10 rounded-xl object-cover shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-semibold text-lg tracking-tight hidden sm:block">
              Dheeraj Chowdhary
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const hash = link.href.replace("/#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, hash)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                >
                  {link.label}
                </a>
              );
            })}
            <div className="ml-4 pl-4 border-l border-border flex items-center gap-3">
              <a
                href="https://linkedin.com/in/dheerajchowdhary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/dj-chow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Dheeraj_Chowdhary_Resume.pdf`}
                download
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Download Resume"
              >
                <FileDown className="w-5 h-5" />
              </a>
              <Button asChild size="sm" className="rounded-full px-5 shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                <a
                  href="/#contact"
                  onClick={(e) => handleAnchorClick(e, "contact")}
                >
                  Get in Touch
                </a>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground z-50 bg-secondary rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div id="mobile-nav" role="dialog" aria-label="Navigation menu" className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-10 duration-300">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navLinks.map((link) => {
              const hash = link.href.replace("/#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleAnchorClick(e, hash);
                  }}
                  className="text-2xl font-semibold py-4 border-b border-border/50 text-foreground"
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href={`${import.meta.env.BASE_URL}Dheeraj_Chowdhary_Resume.pdf`}
              download
              className="text-2xl font-semibold py-4 border-b border-border/50 text-foreground flex items-center gap-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FileDown className="w-6 h-6" /> Download Resume
            </a>
          </nav>
          <div className="flex flex-col gap-4 mt-8">
            <a
              href="https://linkedin.com/in/dheerajchowdhary"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary"
            >
              <Linkedin className="w-6 h-6" /> LinkedIn Profile
            </a>
            <a
              href="https://github.com/dj-chow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary"
            >
              <Github className="w-6 h-6" /> GitHub Profile
            </a>
            <a
              href="mailto:dheeraj@hey.com"
              className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary"
            >
              <Mail className="w-6 h-6" /> dheeraj@hey.com
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main id="main-content" className="flex-1 w-full pt-20">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-12 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/headshot.jpeg`}
              alt="Dheeraj Chowdhary"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="font-semibold text-foreground">Dheeraj Chowdhary</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Dheeraj Chowdhary. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/dheerajchowdhary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors"
            >
              LinkedIn <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://github.com/dj-chow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors"
            >
              GitHub <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="mailto:dheeraj@hey.com"
              className="text-muted-foreground hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors"
            >
              Email <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
