import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { properties } from '../data/properties';

function PropertyCard({ property, index }: { property: typeof properties[0], index: number, key?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <Link to={`/biens/${property.id}`} className="block cursor-pointer">
        <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-sm">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute top-4 left-4 bg-primary text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
            {property.category}
          </div>
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
        </div>

        <div className="space-y-2">
          <p className="text-primary font-bold text-lg">{property.price}</p>
          <h3 className="text-xl font-serif text-text-main group-hover:text-primary transition-colors duration-300 leading-tight">
            {property.title}
          </h3>
          <p className="text-text-secondary text-sm font-light tracking-wide">
            {property.rooms} Pièces • {property.surface}m² • {property.district}
          </p>
          <div className="pt-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-text-main border-b border-primary pb-1 group-hover:pr-4 transition-all duration-300">
              Découvrir le bien
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Properties() {
  return (
    <section id="vente" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold mb-4"
          >
            Nos Biens Exclusivement
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif"
          >
            Sélection Prestige
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {properties.slice(0, 3).map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/biens" className="inline-block px-10 py-4 border border-white/10 text-text-main hover:border-primary hover:text-primary transition-all duration-300 uppercase tracking-widest text-xs font-bold">
            Voir tout le catalogue
          </Link>
        </div>
      </div>
    </section>
  );
}
