import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function Estimation() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    address: '',
    surface: '',
    condition: 'Excellent',
    name: '',
    email: '',
    phone: ''
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif">Quelle est l'adresse du bien ?</h2>
              <p className="text-text-secondary text-sm">Nous avons besoin de la localisation précise pour l'estimation.</p>
            </div>
            <input type="text" placeholder="Ex: 12 Rue Lepic, 75018 Paris" className="w-full bg-card-bg border border-white/10 px-6 py-4 rounded-sm text-lg focus:border-primary outline-none transition-colors" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
            <button onClick={nextStep} disabled={!formData.address} className="w-full bg-primary text-black font-bold py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-[#A67C52] transition-all disabled:opacity-50 flex items-center justify-center gap-2">Continuer <ArrowRight size={18} /></button>
          </motion.div>
        );
      case 2:
        return (
          <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif">Détails du bien</h2>
              <p className="text-text-secondary text-sm">Surface et état général.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-text-secondary">Surface (m²)</label>
                <input type="number" placeholder="Ex: 85" className="w-full bg-card-bg border border-white/10 px-6 py-4 rounded-sm text-lg focus:border-primary outline-none transition-colors" value={formData.surface} onChange={e => setFormData({...formData, surface: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-text-secondary">État général</label>
                <select className="w-full bg-card-bg border border-white/10 px-6 py-4 rounded-sm text-lg focus:border-primary outline-none transition-colors appearance-none" value={formData.condition} onChange={e => setFormData({...formData, condition: e.target.value})}>
                  <option>Excellent</option>
                  <option>Bon état</option>
                  <option>À rafraîchir</option>
                  <option>À rénover</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={prevStep} className="flex-1 border border-white/10 py-4 rounded-sm uppercase tracking-widest text-sm hover:border-primary transition-all flex items-center justify-center gap-2"><ArrowLeft size={18} /> Retour</button>
              <button onClick={nextStep} disabled={!formData.surface} className="flex-[2] bg-primary text-black font-bold py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-[#A67C52] transition-all disabled:opacity-50 flex items-center justify-center gap-2">Continuer <ArrowRight size={18} /></button>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif">Vos coordonnées</h2>
              <p className="text-text-secondary text-sm">Pour vous envoyer votre estimation personnalisée.</p>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Nom complet" className="w-full bg-card-bg border border-white/10 px-6 py-4 rounded-sm text-lg focus:border-primary outline-none transition-colors" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              <input type="email" placeholder="Email" className="w-full bg-card-bg border border-white/10 px-6 py-4 rounded-sm text-lg focus:border-primary outline-none transition-colors" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              <input type="tel" placeholder="Téléphone" className="w-full bg-card-bg border border-white/10 px-6 py-4 rounded-sm text-lg focus:border-primary outline-none transition-colors" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div className="flex gap-4">
              <button onClick={prevStep} className="flex-1 border border-white/10 py-4 rounded-sm uppercase tracking-widest text-sm hover:border-primary transition-all flex items-center justify-center gap-2"><ArrowLeft size={18} /> Retour</button>
              <button onClick={nextStep} disabled={!formData.name || !formData.email} className="flex-[2] bg-primary text-black font-bold py-4 rounded-sm uppercase tracking-widest text-sm hover:bg-[#A67C52] transition-all disabled:opacity-50 flex items-center justify-center gap-2">Obtenir mon estimation</button>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-6">
            <div className="flex justify-center"><CheckCircle2 size={80} className="text-primary" /></div>
            <h2 className="text-4xl font-serif">Demande reçue !</h2>
            <p className="text-text-secondary text-lg max-w-md mx-auto">Un expert de Paris Montmartre Immobilier vous contactera sous 24h pour affiner cette estimation.</p>
            <button onClick={() => window.location.href = '/'} className="bg-primary text-black font-bold py-4 px-10 rounded-sm uppercase tracking-widest text-sm hover:bg-[#A67C52] transition-all">Retour à l'accueil</button>
          </motion.div>
        );
      default: return null;
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-40 pb-20 min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        {step < 4 && (
          <div className="mb-12">
            <div className="flex justify-between mb-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">Étape {step} sur 3</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-text-secondary">{Math.round((step/3)*100)}%</span>
            </div>
            <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
              <motion.div className="h-full bg-primary" initial={{ width: 0 }} animate={{ width: `${(step/3)*100}%` }} />
            </div>
          </div>
        )}
        <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
      </div>
    </motion.div>
  );
}
