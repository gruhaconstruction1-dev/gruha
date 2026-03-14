import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  // High-quality images for each service to enhance the "premium" feel
  const serviceImages = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200", // Pre-construction
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200", // Site Prep
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200", // Architectural
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1200", // MEP
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200", // Interior
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200", // Residential
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200", // Commercial
  ];

  return (
    <section id="services" ref={containerRef} className="py-32 bg-brand-primary relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-asym-texture opacity-20 pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Right: Dynamic Visual Showcase (Moved to top on mobile) */}
          <div className="lg:col-span-7 lg:order-2 lg:sticky lg:top-32 mb-12 lg:mb-0">
            <Link to={`/services#${SERVICES[activeService].id}`} className="block relative aspect-video sm:aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white/5 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={serviceImages[activeService]}
                    alt={SERVICES[activeService].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Icon Card */}
              <motion.div
                key={`icon-${activeService}`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute bottom-6 left-6 md:bottom-12 md:left-12 glass-premium p-4 md:p-8 rounded-2xl md:rounded-3xl flex items-center gap-4 md:gap-6 border border-white/10"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-secondary rounded-xl md:rounded-2xl flex items-center justify-center text-brand-primary shadow-xl">
                  {(() => {
                    const Icon = SERVICES[activeService].icon;
                    return <Icon size={24} className="md:w-8 md:h-8" strokeWidth={1.5} />;
                  })()}
                </div>
                <div>
                  <p className="text-brand-primary/60 text-[8px] md:text-[10px] uppercase tracking-widest font-bold mb-1">Service Focus</p>
                  <p className="text-brand-primary font-serif text-lg md:text-xl">{SERVICES[activeService].title}</p>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 md:top-12 md:right-12 flex flex-col items-end gap-2">
                <div className="w-8 md:w-12 h-[1px] bg-brand-secondary" />
                <p className="text-vertical text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-brand-secondary font-bold">
                  PREMIUM QUALITY
                </p>
              </div>
            </Link>

            {/* Background Parallax Shape */}
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
              className="absolute -bottom-20 -right-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none"
            />
          </div>

          {/* Left: Interactive Service List (Moved to bottom on mobile) */}
          <div className="lg:col-span-5 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12 md:mb-16"
            >
              <span className="text-brand-secondary font-medium tracking-[0.4em] uppercase text-[10px] md:text-xs mb-4 md:mb-6 block">
                Our Expertise
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-brand-accent leading-tight">
                Crafting the <br />
                <span className="italic text-brand-secondary">Future</span> of Living.
              </h2>
            </motion.div>

            <div className="space-y-2">
              {SERVICES.map((service, idx) => (
                <Link
                  key={service.id}
                  to={`/services#${service.id}`}
                  onMouseEnter={() => setActiveService(idx)}
                  className={`group block cursor-pointer py-6 border-b border-white/5 transition-all duration-500 ${
                    activeService === idx ? 'pl-4 md:pl-8' : 'pl-0'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className={`text-[10px] md:text-xs font-mono transition-colors duration-500 ${
                        activeService === idx ? 'text-brand-secondary' : 'text-brand-accent/20'
                      }`}>
                        0{idx + 1}
                      </span>
                      <h3 className={`text-xl sm:text-2xl md:text-4xl font-serif transition-all duration-500 ${
                        activeService === idx ? 'text-white' : 'text-brand-accent/40 group-hover:text-brand-accent/60'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ 
                        rotate: activeService === idx ? 45 : 0,
                        opacity: activeService === idx ? 1 : 0,
                        x: activeService === idx ? 0 : -20
                      }}
                      className="text-brand-secondary"
                    >
                      <ArrowUpRight size={24} className="md:w-8 md:h-8" />
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {activeService === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-brand-accent/60 mt-4 text-xs md:text-sm max-w-sm leading-relaxed">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
