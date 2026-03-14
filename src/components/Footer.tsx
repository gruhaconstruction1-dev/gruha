import { motion } from 'motion/react';
import { Instagram, Linkedin, Facebook, ArrowUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getHref = (href: string) => {
    if (href.startsWith('#')) {
      return pathname === '/' ? href : `/${href}`;
    }
    return href;
  };

  return (
    <footer className="bg-brand-primary py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-6">
            <Link to="/" className="flex flex-col leading-none mb-8">
              <span className="text-3xl font-serif font-bold tracking-tighter text-brand-accent">
                GRUHA
              </span>
              <span className="text-[10px] uppercase tracking-[0.6em] text-brand-secondary font-bold">
                Constructions
              </span>
            </Link>
            <p className="text-brand-accent/40 text-sm leading-relaxed max-w-md mb-8">
              Redefining the boundaries of architecture and interior design through 
              unwavering commitment to quality and artistic vision. We create spaces 
              that inspire, comfort, and endure.
            </p>
            <div className="flex gap-6">
              {[Instagram, Linkedin, Facebook].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -5, color: '#D4AF37' }}
                  className="text-brand-accent/40 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-brand-secondary font-bold mb-8">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Projects'].map((item) => (
                <li key={item}>
                  {item === 'Services' ? (
                    <Link to="/services" className="text-brand-accent/60 hover:text-brand-accent text-sm transition-colors">
                      {item}
                    </Link>
                  ) : (
                    <a href={getHref(`#${item.toLowerCase()}`)} className="text-brand-accent/60 hover:text-brand-accent text-sm transition-colors">
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-brand-secondary font-bold mb-8">Services</h4>
            <ul className="space-y-4">
              {['Interior', 'Architecture', 'Commercial', 'Residential'].map((item) => (
                <li key={item}>
                  <Link to={`/services#${item.toLowerCase()}`} className="text-brand-accent/60 hover:text-brand-accent text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-brand-accent/20 text-[10px] uppercase tracking-widest">
            © 2024 Gruha Constructions • Bangalore. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-brand-accent/40 hover:text-brand-secondary transition-colors"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold">Back to Top</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-secondary transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
