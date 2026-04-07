import { motion } from 'motion/react';
import { Award, Users, Clock, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <span className="text-primary uppercase tracking-[0.3em] text-[10px] font-bold">L'Agence</span>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight">
              L'excellence au service de l'exception
            </h1>
            <p className="text-text-secondary text-lg font-light leading-relaxed">
              Fondée il y a plus de deux décennies au cœur de la Butte, Paris Montmartre Immobilier est née d'une passion pour l'architecture singulière et l'art de vivre parisien. Nous ne sommes pas qu'une agence immobilière ; nous sommes les gardiens d'un patrimoine unique.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=75&w=1200&auto=format&fit=crop" 
              alt="Montmartre View" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              decoding="async"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { icon: <Award size={32} />, title: "Expertise", desc: "Une connaissance chirurgicale du marché de la Butte." },
            { icon: <ShieldCheck size={32} />, title: "Confidentialité", desc: "Un accompagnement discret pour des transactions hors-marché." },
            { icon: <Users size={32} />, title: "Proximité", desc: "Une équipe à taille humaine, dédiée à vos projets." },
            { icon: <Clock size={32} />, title: "Réactivité", desc: "Une disponibilité totale pour saisir les opportunités rares." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-card-bg border border-white/5 rounded-sm space-y-4 hover:border-primary/30 transition-colors">
              <div className="text-primary">{item.icon}</div>
              <h3 className="text-xl font-serif">{item.title}</h3>
              <p className="text-text-secondary text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-serif">Notre Équipe</h2>
            <p className="text-text-secondary max-w-2xl mx-auto font-light">Des experts passionnés par l'immobilier et amoureux de Montmartre.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Jean-Marc Lefebvre", role: "Directeur Fondateur", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=75&w=800&auto=format&fit=crop" },
              { name: "Sophie Valmont", role: "Responsable Ventes Prestige", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=75&w=800&auto=format&fit=crop" },
              { name: "Antoine Dubois", role: "Expert Chasseur de Biens", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=75&w=800&auto=format&fit=crop" }
            ].map((member, i) => (
              <div key={i} className="space-y-4 text-center group">
                <div className="aspect-square rounded-sm overflow-hidden mb-6">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-serif">{member.name}</h4>
                <p className="text-primary text-[10px] uppercase tracking-widest font-bold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
