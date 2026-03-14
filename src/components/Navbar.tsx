import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHref = (href: string) => {
    if (href.startsWith('#')) {
      return pathname === '/' ? href : `/${href}`;
    }
    return href;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ${
        scrolled ? 'py-4 bg-brand-accent/80 backdrop-blur-xl border-b border-brand-primary/5' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex flex-col leading-none">
              <span className={`text-2xl font-serif font-bold tracking-tighter transition-colors duration-500 ${scrolled ? 'text-brand-primary' : 'text-brand-primary'}`}>
                GRUHA
              </span>
              <span className="text-[8px] uppercase tracking-[0.6em] text-brand-secondary font-bold">
                Constructions
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-12">
              {NAV_LINKS.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.name}
                    href={getHref(link.href)}
                    className="relative group py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary transition-colors duration-500"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-secondary transition-all duration-500 group-hover:w-full" />
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="relative group py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary transition-colors duration-500"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-secondary transition-all duration-500 group-hover:w-full" />
                  </Link>
                )
              ))}
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#D4AF37',
                  color: '#121212',
                  boxShadow: '0 10px 20px -5px rgba(212,175,55,0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                href={getHref('#contact')}
                className="bg-brand-primary text-brand-accent px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-xl shadow-brand-primary/10"
              >
                Inquire
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-primary p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-accent border-b border-brand-primary/5 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 space-y-4">
              {NAV_LINKS.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.name}
                    href={getHref(link.href)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-bold uppercase tracking-widest text-brand-primary py-2"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-bold uppercase tracking-widest text-brand-primary py-2"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a
                href={getHref('#contact')}
                onClick={() => setMobileMenuOpen(false)}
                className="block bg-brand-primary text-brand-accent text-center py-4 rounded-xl text-xs font-bold uppercase tracking-widest"
              >
                Inquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
