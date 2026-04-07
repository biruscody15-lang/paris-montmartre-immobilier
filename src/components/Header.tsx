import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Acheter', href: '/biens' },
    { name: 'Louer', href: '/biens?type=location' },
    { name: 'Estimer', href: '/estimer' },
    { name: 'L\'Agence', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || location.pathname !== '/' ? 'bg-background/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl md:text-3xl font-serif font-bold tracking-tight">
            Paris Montmartre <span className="text-primary">Immobilier</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors duration-300 font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/estimer"
            className="px-6 py-2 border border-primary text-primary text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-black transition-all duration-300 rounded-sm font-bold"
          >
            Vendre
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-main"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-card-bg border-t border-white/5 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/estimer"
                className="w-full py-3 text-center border border-primary text-primary uppercase tracking-widest rounded-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vendre
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

