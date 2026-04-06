import { Briefcase, Heart, Home, Shield } from "lucide-react";
import { motion } from "motion/react";

const areas = [
  {
    icon: Briefcase,
    title: "Corporate Law",
    description:
      "We advise corporations, startups, and entrepreneurs on mergers & acquisitions, contracts, compliance, and corporate governance with precision and strategic foresight.",
  },
  {
    icon: Heart,
    title: "Family Law",
    description:
      "Compassionate counsel through divorce, child custody, adoption, and estate planning. We protect what matters most — your family's future and wellbeing.",
  },
  {
    icon: Shield,
    title: "Criminal Defense",
    description:
      "Vigorous defense for clients facing criminal charges. Our seasoned advocates ensure your rights are upheld from investigation through trial with uncompromising dedication.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description:
      "Expert legal support for property transactions, title disputes, leasing agreements, and development projects. We safeguard your real estate investments at every stage.",
  },
];

export default function PracticeAreasSection() {
  return (
    <section
      id="practice-areas"
      className="py-24"
      style={{ backgroundColor: "#F4F5F7" }}
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="font-open-sans text-xs font-bold tracking-[0.35em] uppercase"
            style={{ color: "oklch(var(--gold))" }}
          >
            PRACTICE AREAS
          </span>
          <h2
            className="font-cinzel font-bold uppercase mt-3"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
              color: "oklch(var(--navy-dark))",
            }}
          >
            Our Areas of Expertise
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-5"
            style={{ backgroundColor: "oklch(var(--gold))" }}
          />
        </motion.div>
      </div>

      {/* Cards grid on navy bg */}
      <div
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "oklch(var(--navy-dark))" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group p-8 border transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{
                  backgroundColor: "oklch(var(--navy))",
                  borderColor: "oklch(var(--gold) / 0.18)",
                  borderRadius: "2px",
                }}
                data-ocid={`practice.item.${i + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-colors duration-300"
                  style={{
                    backgroundColor: "oklch(var(--gold) / 0.12)",
                    border: "1px solid oklch(var(--gold) / 0.4)",
                  }}
                >
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3
                  className="font-cinzel font-bold text-base tracking-wide mb-4"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  {area.title}
                </h3>
                <p className="font-open-sans text-sm text-white/65 leading-relaxed">
                  {area.description}
                </p>
                <div
                  className="mt-6 h-0.5 w-8 group-hover:w-16 transition-all duration-300"
                  style={{ backgroundColor: "oklch(var(--gold))" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
