import {
  CheckCircle2,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitContactForm } from "../hooks/useQueries";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "14 Lincoln Square, Suite 800\nNew York, NY 10005",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (212) 555-0187",
  },
  {
    icon: Mail,
    label: "Email",
    value: "counsel@harperassociates.law",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri: 8:30 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitContactForm();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutation.mutateAsync(form);
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      toast.success("Message sent! We will be in touch within 24 hours.");
      setTimeout(() => setSubmitted(false), 6000);
    } catch {
      toast.error(
        "Unable to send message. Please try again or call us directly.",
      );
    }
  };

  const inputClass =
    "w-full font-open-sans text-sm px-4 py-3 border outline-none transition-all duration-200 focus:border-gold bg-white placeholder:text-gray-400";
  const inputStyle = {
    borderColor: "#D1D5DB",
    borderRadius: "2px",
    color: "oklch(var(--charcoal))",
  };
  const focusStyle = { outlineColor: "oklch(var(--gold))" };

  return (
    <section id="contact" className="py-24 bg-white">
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
            GET IN TOUCH
          </span>
          <h2
            className="font-cinzel font-bold uppercase mt-3"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
              color: "oklch(var(--navy-dark))",
            }}
          >
            Contact Us
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mt-5"
            style={{ backgroundColor: "oklch(var(--gold))" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Contact form (2/3 width) */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center py-20 gap-5 border"
                style={{
                  borderColor: "oklch(var(--gold) / 0.3)",
                  borderRadius: "2px",
                }}
                data-ocid="contact.success_state"
              >
                <CheckCircle2
                  className="w-14 h-14"
                  style={{ color: "oklch(var(--gold))" }}
                />
                <h3
                  className="font-cinzel font-bold text-xl"
                  style={{ color: "oklch(var(--navy-dark))" }}
                >
                  Message Sent!
                </h3>
                <p
                  className="font-open-sans text-sm text-center max-w-sm"
                  style={{ color: "oklch(var(--gray-text))" }}
                >
                  Thank you for reaching out. A member of our team will contact
                  you within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
                data-ocid="contact.modal"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-open-sans text-xs font-semibold tracking-wider uppercase block mb-2"
                      style={{ color: "oklch(var(--navy-dark))" }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, ...focusStyle }}
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="font-open-sans text-xs font-semibold tracking-wider uppercase block mb-2"
                      style={{ color: "oklch(var(--navy-dark))" }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, ...focusStyle }}
                      data-ocid="contact.input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="font-open-sans text-xs font-semibold tracking-wider uppercase block mb-2"
                    style={{ color: "oklch(var(--navy-dark))" }}
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    autoComplete="off"
                    placeholder="e.g. Corporate Contract Review"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ ...inputStyle, ...focusStyle }}
                    data-ocid="contact.input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-open-sans text-xs font-semibold tracking-wider uppercase block mb-2"
                    style={{ color: "oklch(var(--navy-dark))" }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Please describe your legal matter briefly..."
                    value={form.message}
                    onChange={handleChange}
                    className={inputClass}
                    style={{ ...inputStyle, ...focusStyle, resize: "vertical" }}
                    data-ocid="contact.textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="font-cinzel text-sm font-bold tracking-widest px-10 py-4 transition-all duration-200 hover:shadow-gold hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center gap-3"
                  style={{
                    backgroundColor: "oklch(var(--navy-dark))",
                    color: "white",
                    borderRadius: "2px",
                  }}
                  data-ocid="contact.submit_button"
                >
                  {mutation.isPending && (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  )}
                  {mutation.isPending ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-8"
          >
            <div
              className="p-8"
              style={{
                backgroundColor: "oklch(var(--navy-dark))",
                borderRadius: "2px",
              }}
            >
              <h3
                className="font-cinzel font-bold text-base tracking-wide mb-7"
                style={{ color: "oklch(var(--gold))" }}
              >
                REACH US DIRECTLY
              </h3>
              <div className="space-y-7">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          backgroundColor: "oklch(var(--gold) / 0.12)",
                          border: "1px solid oklch(var(--gold) / 0.35)",
                        }}
                      >
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <div>
                        <div
                          className="font-open-sans text-xs font-bold tracking-wider uppercase mb-1"
                          style={{ color: "oklch(var(--gold))" }}
                        >
                          {info.label}
                        </div>
                        <div className="font-open-sans text-sm text-white/75 whitespace-pre-line leading-relaxed">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick consultation CTA */}
            <div
              className="p-6 text-center"
              style={{
                backgroundColor: "oklch(var(--gold) / 0.08)",
                border: "1px solid oklch(var(--gold) / 0.3)",
                borderRadius: "2px",
              }}
            >
              <p
                className="font-cinzel text-sm font-bold"
                style={{ color: "oklch(var(--navy-dark))" }}
              >
                FREE INITIAL CONSULTATION
              </p>
              <p
                className="font-open-sans text-xs mt-2"
                style={{ color: "oklch(var(--gray-text))" }}
              >
                Book a 30-minute consultation with no obligation. Our attorneys
                will assess your matter and outline the best path forward.
              </p>
              <a
                href="tel:+12125550187"
                className="inline-block mt-4 font-open-sans text-sm font-bold"
                style={{ color: "oklch(var(--gold))" }}
                data-ocid="contact.link"
              >
                +1 (212) 555-0187
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
