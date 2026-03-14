import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState, FormEvent } from 'react';
import { Send, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

// ── Web3Forms key ─────────────────────────────────────────────────
const WEB3FORMS_KEY = 'fb40be43-022a-476d-8cff-7d5995b390aa';
// ──────────────────────────────────────────────────────────────────

export default function Contact() {
  const [isSubmitted, setIsSubmitted]   = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError]               = useState<string | null>(null);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const y   = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject:    'New Inquiry – Gruha Constructions',
      name:       formData.get('name'),
      email:      formData.get('email'),
      phone:      formData.get('phone'),
      service:    formData.get('service'),
      message:    formData.get('message'),
    };

    try {
      const res  = await fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      });
      const json = await res.json();

      if (json.success) {
        setIsSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(json.message);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-32 bg-brand-accent relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-asym-texture opacity-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* ── LEFT: Contact Info ── */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-secondary font-medium tracking-[0.4em] uppercase text-xs mb-6 block">
                Connect With Us
              </span>
              <h2 className="text-5xl md:text-7xl font-serif text-brand-primary leading-tight mb-12">
                Let's Start a <br />
                <span className="italic">Conversation.</span>
              </h2>

              <div className="space-y-12 mb-16">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-secondary shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-muted font-bold mb-2">Call Us</p>
                    <p className="text-xl font-serif text-brand-primary">9620059933</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-secondary shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-brand-muted font-bold mb-2">Email Us</p>
                    <p className="text-xl font-serif text-brand-primary">gruhaconstruction1@gmail.com</p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[3rem] overflow-hidden aspect-video shadow-xl border-4 border-white/20"
              >
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1000"
                  alt="Office Interior"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/10" />
              </motion.div>
            </motion.div>
          </div>

          {/* ── RIGHT: Form Card ── */}
          <div className="lg:col-span-7 relative">
            <motion.div
              style={{ y }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-primary p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-asym-texture opacity-10 pointer-events-none" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onSubmit={handleSubmit}
                    className="relative z-10 space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-brand-accent/40 font-bold ml-1">
                          Full Name
                        </label>
                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          className="w-full bg-white/5 border-b border-white/10 text-white px-4 py-4 focus:outline-none focus:border-brand-secondary transition-all placeholder:text-white/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.3em] text-brand-accent/40 font-bold ml-1">
                          Email Address
                        </label>
                        <input
                          required
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          className="w-full bg-white/5 border-b border-white/10 text-white px-4 py-4 focus:outline-none focus:border-brand-secondary transition-all placeholder:text-white/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-brand-accent/40 font-bold ml-1">
                        Phone Number
                      </label>
                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="w-full bg-white/5 border-b border-white/10 text-white px-4 py-4 focus:outline-none focus:border-brand-secondary transition-all placeholder:text-white/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-brand-accent/40 font-bold ml-1">
                        Service Required
                      </label>
                      <select
                        name="service"
                        required
                        className="w-full bg-white/5 border-b border-white/10 text-white px-4 py-4 focus:outline-none focus:border-brand-secondary transition-all appearance-none"
                      >
                        <option className="bg-brand-primary" value="">Select a Service</option>
                        {SERVICES.map((service) => (
                          <option key={service.id} value={service.title} className="bg-brand-primary">
                            {service.title}
                          </option>
                        ))}
                        <option className="bg-brand-primary" value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-brand-accent/40 font-bold ml-1">
                        Your Message
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={4}
                        placeholder="Tell us about your dream project..."
                        className="w-full bg-white/5 border-b border-white/10 text-white px-4 py-4 focus:outline-none focus:border-brand-secondary transition-all placeholder:text-white/20 resize-none"
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm font-medium">{error}</p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={!isSubmitting ? {
                        scale: 1.02,
                        backgroundColor: '#D4AF37',
                        color: '#121212',
                        boxShadow: '0 20px 40px -10px rgba(212,175,55,0.4)',
                      } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      className={`w-full border border-brand-secondary text-brand-secondary py-6 rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-500 ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? 'Sending…' : 'Send Inquiry'}
                      <Send size={18} />
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
                      className="w-24 h-24 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-brand-secondary/20"
                    >
                      <CheckCircle2 size={48} className="text-brand-primary" />
                    </motion.div>
                    <h3 className="text-4xl font-serif text-white mb-4">Inquiry Received.</h3>
                    <p className="text-brand-accent/60 text-lg max-w-sm mx-auto mb-12">
                      Thank you for reaching out. Our design consultants will contact you within 24 hours.
                    </p>
                    <motion.button
                      onClick={() => setIsSubmitted(false)}
                      whileHover={{ scale: 1.05, color: '#D4AF37' }}
                      className="text-brand-accent/40 uppercase tracking-widest text-xs font-bold border-b border-white/10 pb-2 hover:border-brand-secondary transition-all"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
              className="absolute -top-12 -right-12 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl pointer-events-none"
            />
          </div>

        </div>
      </div>
    </section>
  );
}