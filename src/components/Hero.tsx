import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen bg-brand-accent flex items-center overflow-hidden pt-20">
      {/* Asymmetrical Background Elements with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" 
      />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              style={{ opacity }}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-[1px] w-12 bg-brand-secondary" />
                <span className="text-brand-secondary font-medium tracking-[0.3em] uppercase text-xs">
                  Est. 1995 • Bangalore
                </span>
              </motion.div>

              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-6xl sm:text-7xl md:text-[10rem] font-serif font-light text-brand-primary leading-[0.85] mb-8 tracking-tighter"
              >
                Sculpting <br />
                <span className="italic font-normal text-brand-secondary">Spaces.</span>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-xl text-brand-muted font-light leading-relaxed max-w-lg mb-12"
              >
                Gruha Constructions redefines interior architecture through a lens of 
                minimalist luxury and functional creativity. We don't just build; we curate.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex items-center gap-8"
              >
                <motion.a
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: '#D4AF37',
                    color: '#121212',
                    boxShadow: '0 20px 40px -10px rgba(212,175,55,0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="#services"
                  className="bg-brand-primary text-brand-accent px-10 py-5 rounded-full font-medium text-sm tracking-widest uppercase transition-all shadow-2xl shadow-brand-primary/20 flex items-center gap-3"
                >
                  Explore Portfolio
                  <ArrowRight size={18} />
                </motion.a>
                
                <motion.a 
                  whileHover={{ x: 10, color: '#D4AF37' }}
                  href="#about" 
                  className="text-brand-primary font-medium text-sm tracking-widest uppercase border-b border-brand-primary/20 pb-1 hover:border-brand-secondary transition-all"
                >
                  Our Philosophy
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Asymmetrical Image Grid with Parallax */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div
              style={{ y: y2, rotate }}
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20"
            >
              <div className="aspect-square sm:aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] md:border-[12px] border-white">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
                  alt="Luxury Interior"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Second Overlapping Image in Hero */}
              <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                className="absolute -bottom-4 -right-4 md:-bottom-12 md:-right-12 w-2/5 md:w-1/2 aspect-square rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border-[4px] md:border-[8px] border-white shadow-2xl z-30"
              >
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=600"
                  alt="Modern Architecture"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-6 md:-bottom-12 md:-left-12 glass-premium p-4 md:p-8 rounded-2xl md:rounded-3xl max-w-[150px] md:max-w-[200px] z-40"
              >
                <p className="text-brand-primary text-[8px] md:text-xs uppercase tracking-widest mb-1 md:mb-2 opacity-60">Featured Project</p>
                <p className="text-brand-primary font-serif text-sm md:text-lg leading-tight">The Obsidian Villa</p>
              </motion.div>
            </motion.div>

            {/* Background Shape */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute -top-12 -right-12 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none" 
            />
          </div>
        </div>
      </div>

      {/* Vertical Rail Text */}
      <div className="absolute right-4 md:right-8 bottom-12 md:bottom-24 z-50">
        <p className="text-vertical text-[8px] md:text-[10px] uppercase tracking-[0.5em] text-brand-muted/40 font-bold">
          BESPOKE INTERIORS • ARCHITECTURAL EXCELLENCE • GRUHA CONSTRUCTIONS
        </p>
      </div>
    </section>
  );
}
