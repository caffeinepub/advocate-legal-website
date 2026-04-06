import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { value: "1995", label: "Year Founded" },
  { value: "25+", label: "Years of Excellence" },
  { value: "500+", label: "Cases Successfully Won" },
  { value: "98%", label: "Client Satisfaction Rate" },
];

const highlights = [
  "Board-certified attorneys with multi-jurisdictional expertise",
  "Personalized strategy tailored to each client's unique situation",
  "Transparent communication and regular case updates",
  "Proven track record across complex litigation and advisory matters",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="font-open-sans text-xs font-bold tracking-[0.35em] uppercase"
              style={{ color: "oklch(var(--gold))" }}
            >
              WHO WE ARE
            </span>
            <h2
              className="font-cinzel font-bold uppercase mt-3 mb-2"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                color: "oklch(var(--navy-dark))",
              }}
            >
              About Inehemiah Associates
            </h2>
            <div
              className="w-16 h-0.5 mb-6"
              style={{ backgroundColor: "oklch(var(--gold))" }}
            />
            <p
              className="font-open-sans text-base leading-relaxed mb-5"
              style={{ color: "oklch(var(--charcoal))" }}
            >
              Founded in 1995, Inehemiah Associates has grown into one of the
              region's most trusted legal practices. We combine decades of
              courtroom experience with a deeply personal approach — treating
              every client as a partner in the pursuit of justice.
            </p>
            <p
              className="font-open-sans text-sm leading-relaxed mb-8"
              style={{ color: "oklch(var(--gray-text))" }}
            >
              Our multidisciplinary team of 30+ attorneys brings specialized
              knowledge across corporate, family, criminal, and real estate law.
              We have successfully navigated hundreds of high-stakes matters,
              earning the trust of individuals, businesses, and institutions
              alike.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "oklch(var(--gold))" }}
                  />
                  <span
                    className="font-open-sans text-sm"
                    style={{ color: "oklch(var(--charcoal))" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-cinzel text-xs font-bold tracking-widest px-7 py-3 border-2 transition-all duration-200 hover:shadow-gold"
              style={{
                borderColor: "oklch(var(--navy-dark))",
                color: "oklch(var(--navy-dark))",
                borderRadius: "2px",
              }}
              data-ocid="about.secondary_button"
            >
              LEARN MORE
            </button>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-5 text-center"
                  style={{
                    backgroundColor: "oklch(var(--navy-dark))",
                    borderRadius: "2px",
                  }}
                >
                  <div
                    className="font-cinzel font-bold text-2xl"
                    style={{ color: "oklch(var(--gold))" }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-open-sans text-xs text-white/70 mt-1 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Law library image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div
              className="absolute -top-4 -left-4 w-full h-full"
              style={{
                backgroundColor: "oklch(var(--gold) / 0.12)",
                borderRadius: "2px",
                zIndex: 0,
              }}
            />
            <img
              src="/assets/generated/law-library.dim_800x500.jpg"
              alt="Inehemiah Associates Law Library"
              className="relative w-full h-80 lg:h-[460px] object-cover shadow-navy"
              style={{ borderRadius: "2px", zIndex: 1 }}
              loading="lazy"
            />
            {/* Gold accent bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1.5"
              style={{
                backgroundColor: "oklch(var(--gold))",
                zIndex: 2,
                borderRadius: "0 0 2px 2px",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
