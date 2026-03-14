import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Compass } from 'lucide-react';

export default function VastuSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section 
      ref={containerRef} 
      className="py-32 bg-brand-accent relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Visual Element */}
          <div className="relative order-2 lg:order-1">
            <motion.div
              style={{ scale }}
              className="relative aspect-square max-w-md mx-auto flex items-center justify-center"
            >
              {/* Decorative Circles */}
              <div className="absolute inset-0 border border-brand-primary/10 rounded-full animate-spin-slow" />
              <div className="absolute inset-8 border border-brand-secondary/30 rounded-full animate-reverse-spin" />
              <div className="absolute inset-16 border border-brand-primary/5 rounded-full" />
              
              {/* Central Icon */}
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative z-10 w-32 h-32 bg-brand-primary rounded-full flex items-center justify-center text-brand-secondary shadow-2xl"
              >
                <Compass size={64} strokeWidth={1} />
              </motion.div>

              {/* Cardinal Directions */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 text-[10px] uppercase tracking-[0.5em] text-brand-primary/40 font-bold">North</div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8 text-[10px] uppercase tracking-[0.5em] text-brand-primary/40 font-bold">South</div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 -rotate-90 text-[10px] uppercase tracking-[0.5em] text-brand-primary/40 font-bold">West</div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 rotate-90 text-[10px] uppercase tracking-[0.5em] text-brand-primary/40 font-bold">East</div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <span className="text-brand-secondary font-medium tracking-[0.4em] uppercase text-xs mb-6 block">
                Harmonious Living
              </span>
              <h2 className="text-5xl md:text-7xl font-serif text-brand-primary leading-tight mb-8">
                Built with <br />
                <span className="italic">Vastu Wisdom.</span>
              </h2>
              <p className="text-xl text-brand-muted font-light leading-relaxed mb-12">
                At Gruha Constructions, we believe that a home is more than just a structure—it's a sanctuary. 
                That's why every project we build is meticulously designed to be <span className="text-brand-primary font-medium">100% Vastu compliant</span>, 
                ensuring prosperity, health, and positive energy flow for generations to come.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-serif text-brand-primary mb-2">100%</p>
                  <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Compliance Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-serif text-brand-primary mb-2">Ancient</p>
                  <p className="text-[10px] uppercase tracking-widest text-brand-muted font-bold">Principles Applied</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Text Decoration */}
      <motion.div
        style={{ y }}
        className="absolute -bottom-24 -left-24 text-[20vw] font-serif text-brand-primary/5 select-none pointer-events-none whitespace-nowrap"
      >
        VASTU SHASTRA
      </motion.div>
    </section>
  );
}
