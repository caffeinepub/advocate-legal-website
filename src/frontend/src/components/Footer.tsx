import { Scale } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const practiceAreas = [
  "Corporate Law",
  "Family Law",
  "Criminal Defense",
  "Real Estate",
  "Employment Law",
  "Intellectual Property",
];

const handleNavClick = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="pt-16 pb-0"
      style={{ backgroundColor: "oklch(var(--navy-dark))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: 4 columns */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b"
          style={{ borderColor: "oklch(var(--gold) / 0.18)" }}
        >
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
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
                <div className="font-cinzel font-bold text-white tracking-widest text-xs leading-none">
                  INEHEMIAH ASSOCIATES
                </div>
                <div
                  className="font-open-sans text-xs tracking-wider mt-0.5"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  Advocates
                </div>
              </div>
            </div>
            <p className="font-open-sans text-sm text-white/55 leading-relaxed mb-6">
              Delivering justice and excellence in legal representation since
              1995. Your trusted advocates in every matter that counts.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { Icon: SiLinkedin, label: "LinkedIn" },
                { Icon: SiFacebook, label: "Facebook" },
                { Icon: SiX, label: "Twitter/X" },
                { Icon: SiInstagram, label: "Instagram" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "oklch(var(--gold) / 0.1)",
                    border: "1px solid oklch(var(--gold) / 0.25)",
                    color: "oklch(var(--gold))",
                  }}
                >
                  <Icon size={14} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-cinzel font-bold text-sm tracking-widest mb-6"
              style={{ color: "oklch(var(--gold))" }}
            >
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="font-open-sans text-sm text-white/60 hover:text-gold transition-colors text-left"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4
              className="font-cinzel font-bold text-sm tracking-widest mb-6"
              style={{ color: "oklch(var(--gold))" }}
            >
              PRACTICE AREAS
            </h4>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <button
                    type="button"
                    onClick={() => handleNavClick("#practice-areas")}
                    className="font-open-sans text-sm text-white/60 hover:text-gold transition-colors text-left"
                    data-ocid="footer.link"
                  >
                    {area}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="font-cinzel font-bold text-sm tracking-widest mb-6"
              style={{ color: "oklch(var(--gold))" }}
            >
              CONTACT
            </h4>
            <address className="not-italic space-y-3">
              <p className="font-open-sans text-sm text-white/60 leading-relaxed">
                D.NO 16-4-128, Kasturi Devi Nagar,
                <br />
                Pogathota, Nellore - 524001
              </p>
              <p className="font-open-sans text-sm text-white/60">
                +91 9133617033
              </p>
              <p className="font-open-sans text-sm text-white/60">
                advocatenehemiah@gmail.com
              </p>
            </address>
            <div
              className="mt-6 px-4 py-3 text-center"
              style={{
                backgroundColor: "oklch(var(--gold))",
                borderRadius: "2px",
              }}
            >
              <button
                type="button"
                onClick={() => handleNavClick("#contact")}
                className="font-cinzel font-bold text-xs tracking-widest w-full"
                style={{ color: "oklch(var(--navy-dark))" }}
                data-ocid="footer.primary_button"
              >
                REQUEST CONSULTATION
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-open-sans text-xs text-white/40">
            &copy; {year} Inehemiah Associates. All Rights Reserved.
          </p>
          <p className="font-open-sans text-xs text-white/30">
            Built with ❤️ using{" "}
            <a
              href={caffeineLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
