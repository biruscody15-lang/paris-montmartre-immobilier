import { motion } from 'motion/react';
import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=75&w=1920&auto=format&fit=crop"
          alt="Montmartre Paris"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight"
        >
          L'immobilier d'exception au cœur de <span className="text-primary">Montmartre</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-text-secondary font-light tracking-wide mb-12 max-w-2xl mx-auto"
        >
          Duplex de prestige, ateliers d'artistes et vues imprenables sur Paris.
        </motion.p>
      </div>

      {/* Search Bar - Positioned at the bottom of Hero */}
      <div className="absolute bottom-12 left-0 right-0 z-30 px-6">
        <SearchBar />
      </div>
    </section>
  );
}
