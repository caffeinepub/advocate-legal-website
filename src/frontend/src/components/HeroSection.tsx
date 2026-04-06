import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row pt-20">
      {/* Left: Portrait image */}
      <div className="relative w-full lg:w-1/2 h-72 sm:h-96 lg:h-auto lg:min-h-screen">
        <img
          src="/assets/generated/advocate-hero.dim_600x700.jpg"
          alt="Inehemiah Associates Lead Advocate"
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        {/* Overlay gradient on image side */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent 70%, oklch(var(--navy-dark)) 100%)",
          }}
        />
      </div>

      {/* Right: Dark navy panel */}
      <div
        className="w-full lg:w-1/2 flex items-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24"
        style={{ backgroundColor: "oklch(var(--navy-dark))" }}
      >
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl w-full"
        >
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-12 h-px"
              style={{ backgroundColor: "oklch(var(--gold))" }}
            />
            <span
              className="font-open-sans text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ color: "oklch(var(--gold))" }}
            >
              Advocates &amp; Legal Counsel
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-cinzel font-bold text-white uppercase leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", lineHeight: 1.15 }}
          >
            Justice &amp;{" "}
            <span style={{ color: "oklch(var(--gold))" }}>Excellence</span> In
            Every Case
          </h1>

          {/* Divider line */}
          <div
            className="w-16 h-0.5 mb-6"
            style={{ backgroundColor: "oklch(var(--gold))" }}
          />

          {/* Subtext */}
          <p className="font-open-sans text-white/70 text-base leading-relaxed mb-10">
            For over 25 years, Inehemiah Associates has delivered unwavering
            legal representation across corporate law, family matters, criminal
            defense, and real estate. We stand with our clients at every step —
            fighting for the outcomes they deserve.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={scrollToContact}
              className="font-cinzel text-sm font-bold tracking-widest px-8 py-4 transition-all duration-200 hover:shadow-gold hover:-translate-y-0.5"
              style={{
                backgroundColor: "oklch(var(--gold))",
                color: "oklch(var(--navy-dark))",
                borderRadius: "2px",
              }}
              data-ocid="hero.primary_button"
            >
              CONSULT OUR EXPERTS
            </button>
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-cinzel text-sm font-bold tracking-widest px-8 py-4 border transition-all duration-200 hover:bg-white/5"
              style={{
                borderColor: "oklch(var(--gold))",
                color: "oklch(var(--gold))",
                borderRadius: "2px",
              }}
              data-ocid="hero.secondary_button"
            >
              LEARN MORE
            </button>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t"
            style={{ borderColor: "oklch(var(--gold) / 0.25)" }}
          >
            {[
              { value: "25+", label: "Years Experience" },
              { value: "500+", label: "Cases Won" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="font-cinzel font-bold text-2xl sm:text-3xl"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  {stat.value}
                </div>
                <div className="font-open-sans text-white/60 text-xs mt-1 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        style={{ color: "oklch(var(--gold))" }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
