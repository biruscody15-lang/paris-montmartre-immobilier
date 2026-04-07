import { motion } from 'motion/react';
import { Search, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="max-w-5xl mx-auto"
    >
      <div className="glass-morphism p-2 rounded-lg shadow-2xl flex flex-col md:flex-row items-stretch md:items-center gap-2">
        {/* Type Filter */}
        <div className="flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors rounded-md">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-text-secondary">Transaction</span>
            <span className="text-sm font-medium">Vente</span>
          </div>
          <ChevronDown size={16} className="text-primary" />
        </div>

        {/* Property Type Filter */}
        <div className="flex-1 px-4 py-3 border-b md:border-b-0 md:border-r border-white/10 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors rounded-md">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-text-secondary">Type de bien</span>
            <span className="text-sm font-medium">Appartement</span>
          </div>
          <ChevronDown size={16} className="text-primary" />
        </div>

        {/* Budget Filter */}
        <div className="flex-1 px-4 py-3 md:border-r border-white/10 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-colors rounded-md">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-text-secondary">Budget Max</span>
            <span className="text-sm font-medium">2 500 000 €</span>
          </div>
          <ChevronDown size={16} className="text-primary" />
        </div>

        {/* Search Button */}
        <button 
          onClick={() => navigate('/biens')}
          className="bg-primary hover:bg-[#A67C52] text-black font-bold py-4 px-8 rounded-md flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Search size={20} />
          <span className="uppercase tracking-widest text-sm">Rechercher</span>
        </button>
      </div>
    </motion.div>
  );
}

