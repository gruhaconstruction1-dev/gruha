import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" ref={containerRef} className="py-20 bg-brand-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Architectural Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full bg-asym-texture opacity-10 pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Large Quote Mark Background */}
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
            className="absolute top-0 left-0 text-[20rem] font-serif text-white/5 leading-none pointer-events-none translate-x-[-10%] translate-y-[-20%]"
          >
            “
          </motion.div>

          <div className="lg:col-span-12 text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-brand-secondary font-medium tracking-[0.5em] uppercase text-[10px] mb-4 block"
            >
              Voices of Excellence
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif text-brand-accent leading-tight"
            >
              What Our <span className="italic text-brand-secondary">Patrons</span> Say.
            </motion.h2>
          </div>

          <div className="lg:col-span-12 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl mx-auto text-center"
              >
                {/* Testimonial Content */}
                <div className="relative">
                  <div className="flex justify-center mb-8">
                    <Quote size={60} className="text-brand-secondary opacity-30" />
                  </div>
                  <p className="text-2xl md:text-3xl font-serif text-brand-accent leading-relaxed mb-12 font-light italic">
                    {TESTIMONIALS[index].feedback}
                  </p>
                  
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-8">
                    <div className="text-left">
                      <h4 className="text-brand-accent font-bold text-2xl tracking-tight">{TESTIMONIALS[index].name}</h4>
                      <p className="text-brand-secondary uppercase tracking-[0.3em] text-[10px] font-bold mt-1">{TESTIMONIALS[index].role}</p>
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevTestimonial}
                        className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white transition-all"
                      >
                        <ChevronLeft size={20} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextTestimonial}
                        className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white transition-all"
                      >
                        <ChevronRight size={20} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
