import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold">Contact</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight">
                Parlons de votre projet
              </h1>
              <p className="text-text-secondary text-lg font-light leading-relaxed">
                Que vous souhaitiez vendre, acheter ou simplement obtenir un conseil expert sur le marché de Montmartre, notre équipe est à votre entière disposition.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-card-bg border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-text-secondary mb-1">Téléphone</h4>
                  <p className="text-xl font-serif">+33 (0)1 42 55 00 00</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-card-bg border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-text-secondary mb-1">Email</h4>
                  <p className="text-xl font-serif">contact@pm-immobilier.fr</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-card-bg border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-text-secondary mb-1">Adresse</h4>
                  <p className="text-xl font-serif">12 Rue Lepic, 75018 Paris</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-morphism p-8 md:p-12 rounded-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-text-secondary">Prénom</label>
                  <input type="text" className="w-full bg-background border border-white/10 px-4 py-3 rounded-sm text-sm focus:border-primary outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-text-secondary">Nom</label>
                  <input type="text" className="w-full bg-background border border-white/10 px-4 py-3 rounded-sm text-sm focus:border-primary outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-text-secondary">Email</label>
                <input type="email" className="w-full bg-background border border-white/10 px-4 py-3 rounded-sm text-sm focus:border-primary outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-text-secondary">Sujet</label>
                <select className="w-full bg-background border border-white/10 px-4 py-3 rounded-sm text-sm focus:border-primary outline-none transition-colors appearance-none">
                  <option>Achat d'un bien</option>
                  <option>Vente / Estimation</option>
                  <option>Location</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-text-secondary">Message</label>
                <textarea rows={5} className="w-full bg-background border border-white/10 px-4 py-3 rounded-sm text-sm focus:border-primary outline-none transition-colors resize-none"></textarea>
              </div>
              <button className="w-full bg-primary text-black font-bold py-4 rounded-sm uppercase tracking-widest text-xs hover:bg-[#A67C52] transition-all duration-300 flex items-center justify-center gap-2">
                <Send size={16} />
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
