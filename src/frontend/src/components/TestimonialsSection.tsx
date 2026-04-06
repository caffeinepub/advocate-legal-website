import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Inehemiah Associates secured a favorable outcome in our complex corporate merger. Their strategic advice saved us millions and countless hours. Truly exceptional counsel.",
    name: "Jonathan Mercer",
    title: "CEO, Mercer Industries",
    initial: "JM",
  },
  {
    quote:
      "During the most difficult period of my life, the family law team at Inehemiah Associates guided me with compassion, clarity, and unwavering dedication. I cannot thank them enough.",
    name: "Sarah Okafor",
    title: "Private Client",
    initial: "SO",
  },
  {
    quote:
      "Their criminal defense team is second to none. Methodical, brilliant, and relentless in the courtroom. They delivered a complete acquittal when all odds seemed against us.",
    name: "David Reinholt",
    title: "Private Client",
    initial: "DR",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24"
      style={{ backgroundColor: "#F4F5F7" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span
            className="font-open-sans text-xs font-bold tracking-[0.35em] uppercase"
            style={{ color: "oklch(var(--gold))" }}
          >
            TESTIMONIALS
          </span>
          <h2
            className="font-cinzel font-bold uppercase mt-3"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
              color: "oklch(var(--navy-dark))",
            }}
          >
            What Our Clients Say
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-5"
            style={{ backgroundColor: "oklch(var(--gold))" }}
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.13 }}
              className="bg-white p-8 shadow-xs border-b-4 relative"
              style={{
                borderBottomColor: "oklch(var(--gold))",
                borderRadius: "2px",
              }}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 fill-current"
                    style={{ color: "oklch(var(--gold))" }}
                  />
                ))}
              </div>

              {/* Quote mark */}
              <div
                className="font-cinzel text-6xl leading-none mb-3 -mt-2"
                style={{ color: "oklch(var(--gold) / 0.25)" }}
              >
                &ldquo;
              </div>

              <p
                className="font-open-sans text-sm leading-relaxed mb-7"
                style={{ color: "oklch(var(--charcoal))" }}
              >
                {t.quote}
              </p>

              {/* Client info */}
              <div
                className="flex items-center gap-4 pt-5 border-t"
                style={{ borderColor: "#E5E7EB" }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-cinzel font-bold text-sm text-white"
                  style={{ backgroundColor: "oklch(var(--navy-dark))" }}
                >
                  {t.initial}
                </div>
                <div>
                  <div
                    className="font-cinzel font-bold text-sm"
                    style={{ color: "oklch(var(--navy-dark))" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="font-open-sans text-xs mt-0.5"
                    style={{ color: "oklch(var(--gray-text))" }}
                  >
                    {t.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
