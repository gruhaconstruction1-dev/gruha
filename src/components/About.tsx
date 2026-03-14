import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const stats = [
    { label: 'Projects Completed', value: '250+' },
    { label: 'Happy Clients', value: '180+' },
    { label: 'Years Experience', value: '25+' },
  ];

  return (
    <section id="about" ref={containerRef} className="py-32 bg-brand-accent relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 bg-asym-texture opacity-10 pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          {/* Overlapping Images with Parallax */}
          <div className="lg:col-span-6 relative mb-20 lg:mb-0">
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-20 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white w-4/5 aspect-square sm:aspect-[3/4]"
            >
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000"
                alt="Interior Design Process"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-10 -right-0 z-30 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] md:border-[8px] border-white w-3/5 aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1000"
                alt="Finished Interior"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
              className="absolute -top-6 -left-6 md:-top-12 md:-left-12 z-10 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-xl border-2 md:border-4 border-white w-1/3 aspect-square grayscale"
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Architectural Detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Decorative Background Shape */}
            <motion.div 
              style={{ y: bgY }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-brand-secondary/5 rounded-full blur-3xl -rotate-12 pointer-events-none" 
            />
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-secondary font-medium tracking-[0.4em] uppercase text-xs mb-6 block">
                Our Legacy
              </span>
              <h2 className="text-5xl md:text-7xl font-serif text-brand-primary leading-tight mb-8">
                Crafting <span className="italic">Timeless</span> <br />
                Environments.
              </h2>
              <p className="text-lg text-brand-muted font-light leading-relaxed mb-12">
                At Gruha Constructions, we believe that space is more than just four walls. 
                It's a canvas for human experience. Our team of visionary architects and 
                interior designers work in harmony to create bespoke environments that 
                inspire, comfort, and endure.
              </p>

              <div className="grid grid-cols-2 gap-12">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <p className="text-4xl font-serif text-brand-secondary mb-2">{stat.value}</p>
                    <p className="text-xs uppercase tracking-widest text-brand-muted font-bold">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
