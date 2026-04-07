import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold">
              Paris Montmartre <span className="text-primary">Immobilier</span>
            </h3>
            <p className="text-text-secondary text-sm font-light leading-relaxed">
              L'excellence immobilière au service de vos projets les plus ambitieux au cœur du 18ème arrondissement de Paris.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-main font-medium mb-6 uppercase tracking-widest text-[10px] font-bold">Navigation</h4>
            <ul className="space-y-4 text-text-secondary text-sm font-light">
              <li><Link to="/biens" className="hover:text-primary transition-colors">Vente Prestige</Link></li>
              <li><Link to="/biens?type=location" className="hover:text-primary transition-colors">Locations de Luxe</Link></li>
              <li><Link to="/a-propos" className="hover:text-primary transition-colors">L'Agence</Link></li>
              <li><Link to="/estimer" className="hover:text-primary transition-colors">Vendre / Estimer</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-text-main font-medium mb-6 uppercase tracking-widest text-[10px] font-bold">Contact</h4>
            <ul className="space-y-4 text-text-secondary text-sm font-light">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span>+33 (0)1 42 55 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <span>contact@pm-immobilier.fr</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1" />
                <span>12 Rue Lepic,<br />75018 Paris, France</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-text-main font-medium mb-6 uppercase tracking-widest text-[10px] font-bold">Newsletter</h4>
            <p className="text-text-secondary text-sm font-light mb-4">Recevez nos dernières exclusivités avant tout le monde.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-card-bg border border-white/10 px-4 py-2 text-sm w-full focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-black px-4 py-2 hover:bg-[#A67C52] transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-text-secondary">
          <p>© 2026 Paris Montmartre Immobilier. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-primary transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

