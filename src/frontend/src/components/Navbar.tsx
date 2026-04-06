import { Menu, Scale, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "PRACTICE AREAS", href: "#practice-areas" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-navy" : ""
      }`}
      style={{ backgroundColor: "oklch(var(--navy-dark))" }}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-3 group"
            onClick={() => handleNavClick("#home")}
            data-ocid="nav.link"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: "oklch(var(--gold) / 0.15)",
                border: "1.5px solid oklch(var(--gold))",
              }}
            >
              <Scale className="w-5 h-5 text-gold" />
            </div>
            <div>
              <div className="font-cinzel font-bold text-white tracking-widest text-sm leading-none">
                INEHEMIAH ASSOCIATES
              </div>
              <div
                className="font-open-sans text-xs tracking-wider mt-0.5"
                style={{ color: "oklch(var(--gold))" }}
              >
                Advocates
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-open-sans text-xs font-semibold tracking-widest text-white/80 hover:text-gold transition-colors duration-200"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="font-cinzel text-xs font-bold tracking-widest px-5 py-2.5 transition-all duration-200 hover:shadow-gold"
              style={{
                backgroundColor: "oklch(var(--gold))",
                color: "oklch(var(--navy-dark))",
                borderRadius: "2px",
              }}
              data-ocid="nav.primary_button"
            >
              REQUEST CONSULTATION
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden text-white p-2 rounded transition-colors hover:text-gold"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
            style={{ backgroundColor: "oklch(var(--navy))" }}
          >
            <div
              className="px-4 py-4 flex flex-col gap-1 border-t"
              style={{ borderColor: "oklch(var(--gold) / 0.2)" }}
            >
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-open-sans text-sm font-semibold tracking-widest py-3 px-2 text-white/80 hover:text-gold transition-colors border-b text-left"
                  style={{ borderColor: "oklch(var(--gold) / 0.1)" }}
                  data-ocid="nav.link"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNavClick("#contact")}
                className="font-cinzel text-sm font-bold tracking-widest text-center py-3 mt-2 transition-all hover:shadow-gold"
                style={{
                  backgroundColor: "oklch(var(--gold))",
                  color: "oklch(var(--navy-dark))",
                  borderRadius: "2px",
                }}
                data-ocid="nav.primary_button"
              >
                REQUEST CONSULTATION
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
