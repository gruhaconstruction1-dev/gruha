import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowRight, CheckCircle2, ArrowUp } from 'lucide-react';

const SERVICE_DETAILS = {
// ... (rest of the SERVICE_DETAILS object remains the same)
  'pre-construction': {
    fullDescription: 'Our pre-construction services are the foundation of every successful project. We dive deep into feasibility studies, site analysis, and budget forecasting to ensure that your vision is both achievable and sustainable. We handle all regulatory approvals and zoning requirements, clearing the path for a smooth construction process.',
    features: ['Feasibility Studies', 'Budget Estimation', 'Regulatory Approvals', 'Site Analysis', 'Project Scheduling'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200'
  },
  'site-prep': {
    fullDescription: 'Before a single brick is laid, the ground must be perfectly prepared. Our site preparation team utilizes advanced machinery and precision engineering for excavation, grading, and utility trenching. We ensure the site is stable, well-drained, and ready to support the structural integrity of your future building.',
    features: ['Precision Excavation', 'Land Grading', 'Utility Installation', 'Soil Testing', 'Drainage Solutions'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200'
  },
  'architectural': {
    fullDescription: 'Architecture is the bridge between imagination and reality. Our design team creates spaces that are not only visually stunning but also structurally superior. We focus on spatial flow, natural lighting, and sustainable materials to create timeless structures that harmonize with their environment.',
    features: ['Conceptual Design', 'Structural Engineering', '3D Visualization', 'Sustainable Architecture', 'Blueprint Development'],
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200'
  },
  'mep': {
    fullDescription: 'Mechanical, Electrical, and Plumbing (MEP) systems are the essential infrastructure of any modern building. We provide integrated engineering solutions that prioritize energy efficiency, safety, and long-term reliability. From complex HVAC climate control and high-voltage electrical distribution to advanced water management and fire suppression systems, we ensure your building operates seamlessly and sustainably.',
    features: ['HVAC & Climate Control', 'Electrical Grid & Lighting', 'Sanitary & Water Systems', 'Fire Safety & Suppression', 'Smart Building Automation', 'Energy Efficiency Audits'],
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1200'
  },
  'interior': {
    fullDescription: 'Interior design is where luxury meets personality. We curate every element—from custom furniture and lighting to textures and color palettes—to create cohesive, high-end environments. Whether it is a minimalist penthouse or a corporate headquarters, we craft spaces that inspire.',
    features: ['Bespoke Furniture', 'Lighting Design', 'Material Selection', 'Spatial Planning', 'Art Curation'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
  },
  'residential': {
    fullDescription: 'We build homes that are sanctuaries of comfort and elegance. Our residential construction team focuses on uncompromising quality and meticulous craftsmanship. From luxury villas to modern apartments, we bring a personal touch to every square foot of your dream home.',
    features: ['Luxury Villas', 'Modern Apartments', 'Custom Home Building', 'Renovations', 'Landscape Integration'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
  },
  'commercial': {
    fullDescription: 'Commercial spaces demand a balance of brand identity, employee productivity, and customer experience. We deliver high-performance commercial buildings, retail outlets, and office spaces designed for the future of business. Our projects are built to scale and built to last.',
    features: ['Office Complexes', 'Retail Spaces', 'Industrial Facilities', 'Hospitality Design', 'Adaptive Reuse'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
  }
};

export default function ServicesPage() {
  const { hash } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-brand-accent pt-32 relative">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-12 right-12 z-50 w-14 h-14 bg-brand-primary text-brand-secondary rounded-full flex items-center justify-center shadow-2xl border border-brand-secondary/20 hover:bg-brand-secondary hover:text-brand-primary transition-all duration-500 group"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-brand-secondary font-medium tracking-[0.4em] uppercase text-xs mb-6 block"
        >
          Our Expertise
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-serif text-brand-primary leading-tight"
        >
          Comprehensive <br />
          <span className="italic">Solutions.</span>
        </motion.h1>
      </div>

      {/* Detailed Sections */}
      <div className="space-y-32 pb-32">
        {SERVICES.map((service, index) => {
          const details = SERVICE_DETAILS[service.id as keyof typeof SERVICE_DETAILS];
          const isEven = index % 2 === 0;

          return (
            <section 
              key={service.id} 
              id={service.id}
              className="relative overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'lg:order-2'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-video sm:aspect-[4/3] shadow-2xl"
                    >
                      <img 
                        src={details.image} 
                        alt={service.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-brand-primary/20" />
                    </motion.div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'order-2' : 'lg:order-1'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-primary rounded-xl md:rounded-2xl flex items-center justify-center text-brand-secondary">
                          <service.icon size={20} className="md:w-6 md:h-6" />
                        </div>
                        <h2 className="text-2xl md:text-4xl font-serif text-brand-primary">{service.title}</h2>
                      </div>
                      
                      <p className="text-lg text-brand-muted font-light leading-relaxed mb-8">
                        {details.fullDescription}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {details.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle2 size={18} className="text-brand-secondary" />
                            <span className="text-sm text-brand-primary font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Background Decoration */}
              <div className={`absolute top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none ${isEven ? '-right-48' : '-left-48'}`} />
            </section>
          );
        })}
      </div>
    </div>
  );
}
