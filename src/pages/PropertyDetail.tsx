import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { properties } from '../data/properties';
import { Maximize2, Bed, MapPin, Check, Phone, Mail, Calendar, ArrowLeft } from 'lucide-react';

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="pt-32 text-center min-h-screen">
        <h1 className="text-2xl font-serif">Bien non trouvé</h1>
        <Link to="/biens" className="text-primary hover:underline mt-4 block">Retour à la recherche</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/biens" className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-8 text-xs uppercase tracking-widest">
          <ArrowLeft size={14} />
          Retour aux résultats
        </Link>

        {/* Mosaic Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 h-[400px] md:h-[600px]">
          <div className="md:col-span-2 h-full overflow-hidden rounded-sm group">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              decoding="async"
            />
          </div>
          <div className="hidden md:grid grid-cols-2 grid-rows-2 col-span-2 gap-4 h-full">
            {property.images.slice(1, 5).map((img, i) => (
              <div key={i} className="overflow-hidden rounded-sm group">
                <img
                  src={img}
                  alt={`${property.title} ${i + 2}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold">{property.category}</span>
                  <h1 className="text-4xl md:text-5xl font-serif mt-2">{property.title}</h1>
                  <div className="flex items-center gap-4 text-text-secondary mt-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-primary" />
                      <span>{property.district}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary">{property.price}</p>
                  <p className="text-text-secondary text-xs uppercase tracking-widest mt-1">Honoraires inclus</p>
                </div>
              </div>

              <div className="flex items-center gap-8 py-6 border-y border-white/5">
                <div className="flex items-center gap-2">
                  <Maximize2 size={20} className="text-primary" />
                  <div>
                    <p className="text-sm font-bold">{property.surface} m²</p>
                    <p className="text-[10px] text-text-secondary uppercase tracking-widest">Surface</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bed size={20} className="text-primary" />
                  <div>
                    <p className="text-sm font-bold">{property.rooms} Pièces</p>
                    <p className="text-[10px] text-text-secondary uppercase tracking-widest">Chambres</p>
                  </div>
                </div>
                {property.floor !== undefined && (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary rounded-sm flex items-center justify-center text-[10px] font-bold text-primary">
                      {property.floor}
                    </div>
                    <div>
                      <p className="text-sm font-bold">{property.floor === 0 ? 'RDC' : `${property.floor}e`}</p>
                      <p className="text-[10px] text-text-secondary uppercase tracking-widest">Étage</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-serif">Description</h2>
              <p className="text-text-secondary font-light leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-serif">Équipements & Prestations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-card-bg border border-white/5 rounded-sm">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span className="text-sm font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 glass-morphism p-8 rounded-sm space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                    alt="Agent"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-serif text-lg">Jean-Marc Lefebvre</p>
                  <p className="text-[10px] text-primary uppercase tracking-widest font-bold">Expert Montmartre</p>
                </div>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-text-secondary">Nom complet</label>
                  <input type="text" className="w-full bg-background border border-white/10 px-4 py-3 rounded-sm text-sm focus:border-primary outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-text-secondary">Email</label>
                  <input type="email" className="w-full bg-background border border-white/10 px-4 py-3 rounded-sm text-sm focus:border-primary outline-none transition-colors" />
                </div>
                <button className="w-full bg-primary text-black font-bold py-4 rounded-sm uppercase tracking-widest text-xs hover:bg-[#A67C52] transition-all duration-300 flex items-center justify-center gap-2">
                  <Calendar size={16} />
                  Réserver une visite
                </button>
              </form>

              <div className="pt-6 border-t border-white/5 flex justify-between gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-white/10 rounded-sm hover:border-primary transition-colors text-[10px] uppercase tracking-widest">
                  <Phone size={14} className="text-primary" />
                  Appeler
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-3 border border-white/10 rounded-sm hover:border-primary transition-colors text-[10px] uppercase tracking-widest">
                  <Mail size={14} className="text-primary" />
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
