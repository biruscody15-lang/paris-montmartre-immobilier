import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Expertise() {
  return (
    <section id="agence" className="py-24 px-6 bg-card-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold">Expertise Locale</p>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Une agence dédiée à un quartier unique
          </h2>
          <div className="space-y-6 text-text-secondary font-light leading-relaxed text-lg">
            <p>
              Depuis plus de 20 ans, Paris Montmartre Immobilier accompagne une clientèle exigeante dans la quête de lieux de vie singuliers. Notre connaissance intime de la Butte nous permet de dénicher des pépites architecturales souvent absentes du marché public.
            </p>
            <p>
              Ateliers d'artistes baignés de lumière, jardins secrets ou appartements avec vue panoramique sur les toits de Paris : nous sélectionnons chaque bien pour son âme et son potentiel exceptionnel.
            </p>
          </div>
          <div className="pt-4">
            <Link to="/estimer" className="inline-block bg-primary text-black font-bold py-4 px-10 rounded-sm uppercase tracking-widest text-xs hover:bg-[#A67C52] transition-all duration-300">
              Rencontrer nos experts
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square lg:aspect-auto lg:h-[600px] overflow-hidden rounded-sm shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1555992828-ca4dbe893e55?q=75&w=1000&auto=format&fit=crop"
            alt="Architecture Montmartre"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        </motion.div>
      </div>
    </section>
  );
}

