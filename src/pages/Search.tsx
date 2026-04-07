import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { properties } from '../data/properties';
import { Link, useSearchParams } from 'react-router-dom';
import { Maximize2, Bed, MapPin, SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function Search() {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type'); // 'location' or null (vente)
  const [filterOpen, setFilterOpen] = useState(false);

  // Filter properties based on type (mock logic: even IDs for location, odd for vente)
  const filteredProperties = properties.filter(p => {
    if (typeParam === 'location') return parseInt(p.id) % 2 === 0;
    return parseInt(p.id) % 2 !== 0;
  });

  const title = typeParam === 'location' ? 'Locations de Prestige' : 'Propriétés à la Vente';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-background"
    >
      <div className="flex flex-col lg:flex-row h-[calc(100vh-96px)]">
        {/* Results List */}
        <div className="w-full lg:w-3/5 overflow-y-auto px-6 py-8 custom-scrollbar">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-3xl font-serif mb-2">{title}</h1>
                <p className="text-text-secondary text-sm">{filteredProperties.length} résultats trouvés à Montmartre</p>
              </div>
              <button 
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-sm hover:border-primary transition-colors text-xs uppercase tracking-widest"
              >
                <SlidersHorizontal size={14} />
                Filtres
              </button>
            </div>
            {/* Filters (Mobile/Desktop Toggle) */}
            {filterOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-card-bg rounded-sm border border-white/5"
              >
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-text-secondary">Prix Max</label>
                  <div className="flex items-center justify-between px-3 py-2 border border-white/10 rounded-sm text-sm">
                    <span>5 000 000 €</span>
                    <ChevronDown size={14} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-text-secondary">Surface Min</label>
                  <div className="flex items-center justify-between px-3 py-2 border border-white/10 rounded-sm text-sm">
                    <span>80 m²</span>
                    <ChevronDown size={14} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-text-secondary">Pièces</label>
                  <div className="flex items-center justify-between px-3 py-2 border border-white/10 rounded-sm text-sm">
                    <span>3+</span>
                    <ChevronDown size={14} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-text-secondary">Étage</label>
                  <div className="flex items-center justify-between px-3 py-2 border border-white/10 rounded-sm text-sm">
                    <span>Tous</span>
                    <ChevronDown size={14} />
                  </div>
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProperties.map((property) => (
                <Link 
                  key={property.id} 
                  to={`/biens/${property.id}`}
                  className="group block bg-card-bg border border-white/5 rounded-sm overflow-hidden hover:border-primary/30 transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={property.images[0]} 
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-3 left-3 bg-primary text-black text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">
                      {property.category}
                    </div>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-lg leading-tight group-hover:text-primary transition-colors">{property.title}</h3>
                      <span className="text-primary font-bold">{property.price}</span>
                    </div>
                    <div className="flex items-center gap-4 text-text-secondary text-xs">
                      <div className="flex items-center gap-1">
                        <Maximize2 size={14} className="text-primary" />
                        <span>{property.surface} m²</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bed size={14} className="text-primary" />
                        <span>{property.rooms} p.</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-primary" />
                        <span>{property.district}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="hidden lg:block w-2/5 bg-[#111] relative overflow-hidden border-l border-white/5">
          <div className="absolute inset-0 opacity-40 grayscale contrast-125">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
              alt="Map Background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none"></div>
          
          {/* Mock Pins */}
          <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full border-2 border-black shadow-[0_0_15px_rgba(193,155,108,0.8)] animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full border-2 border-black shadow-[0_0_15px_rgba(193,155,108,0.8)] animate-pulse delay-75"></div>
          <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary rounded-full border-2 border-black shadow-[0_0_15px_rgba(193,155,108,0.8)] animate-pulse delay-150"></div>
          
          <div className="absolute bottom-8 left-8 right-8 glass-morphism p-4 rounded-sm">
            <p className="text-[10px] uppercase tracking-widest text-primary mb-1">Localisation</p>
            <p className="text-sm font-light">Explorez les biens exclusifs sur la Butte Montmartre.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
