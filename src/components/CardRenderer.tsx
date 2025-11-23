import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// Import des icônes pour le mapping
import { 
  Ghost, Cpu, Binary, Network, ShieldCheck, Key, GitFork, Rocket, 
  Scale, EyeOff, RefreshCw, Flame, Hourglass, Skull, Waves, 
  Biohazard, AlertTriangle, Star, Moon, Sun, Siren, Globe 
} from 'lucide-react';
import type { Arcana } from '../data/arcanaData';

// Mapping des noms (string) vers les composants React
const IconMap: any = {
  Ghost, Cpu, Binary, Network, ShieldCheck, Key, GitFork, Rocket, 
  Scale, EyeOff, RefreshCw, Flame, Hourglass, Skull, Waves, 
  Biohazard, AlertTriangle, Star, Moon, Sun, Siren, Globe
};

interface CardProps {
  card: Arcana | null;
  isRevealed: boolean;
  isShuffle: boolean; // Nouvel état pour l'animation de mélange
}

const CardRenderer: React.FC<CardProps> = ({ card, isRevealed, isShuffle }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation d'apparition
  useEffect(() => {
    if (isRevealed && containerRef.current && !isShuffle) {
      gsap.fromTo(containerRef.current, 
        { opacity: 0, scale: 0.9, rotateY: 180 },
        { opacity: 1, scale: 1, rotateY: 0, duration: 0.8, ease: "back.out(1.7)" }
      );
    }
  }, [isRevealed, isShuffle, card]);

  // --- RENDU : MODE MÉLANGE (SHUFFLE) ---
  if (isShuffle) {
    return (
      <div className="w-72 h-[450px] relative flex items-center justify-center overflow-hidden rounded-lg border-2 border-cyber-gray/50 bg-black">
         {/* Effet de cartes qui défilent */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
         <div className="flex flex-col items-center gap-4 animate-pulse">
            <RefreshCw className="w-16 h-16 text-cyber-orange animate-spin" />
            <div className="font-mono text-cyber-orange text-xs tracking-widest text-center">
                SHUFFLING_DATA_SHARDS<br/>
                <span className="text-white">ENCRYPTING...</span>
            </div>
         </div>
         {/* Lignes de scan rapides */}
         <div className="absolute w-full h-2 bg-cyber-blue/50 top-0 animate-[scan_0.5s_linear_infinite]"></div>
      </div>
    );
  }

  // --- RENDU : CARTE VIDE (ATTENTE) ---
  if (!card) return (
    <div className="w-72 h-[450px] border-2 border-dashed border-cyber-gray/30 rounded-lg flex items-center justify-center bg-cyber-black/30">
        <div className="text-gray-600 font-mono text-xs tracking-widest">SYSTEM_IDLE</div>
    </div>
  );

  // Récupération de l'icône dynamique
  const SpecificIcon = IconMap[card.icon] || Ghost;

  // --- RENDU : CARTE RÉVÉLÉE ---
  return (
    <div ref={containerRef} className="relative w-72 h-[450px] perspective-1000 group">
      <div className={`relative w-full h-full border-2 bg-black/90 backdrop-blur-md rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] border-cyber-blue`}>
        
        {/* Couleur d'ambiance dynamique */}
        <div className={`absolute inset-0 opacity-10 bg-gradient-to-b from-transparent to-current ${card.color}`}></div>
        
        {/* Scanline */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-full w-full animate-scan pointer-events-none z-20"></div>
        
        {/* HEADER */}
        <div className="absolute top-0 left-0 w-full p-4 border-b border-white/10 flex justify-between items-start z-10 bg-black/40">
             <span className={`font-mono text-xl font-bold ${card.color}`}>{card.id < 10 ? `0${card.id}` : card.id}</span>
             <span className="font-mono text-[10px] text-gray-400">{card.element}</span>
        </div>

        {/* SYMBOLE CENTRAL PERSONNALISÉ */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-40 h-40 border border-white/10 rounded-full flex items-center justify-center relative bg-black/50 shadow-2xl`}>
                <div className={`absolute inset-0 rounded-full opacity-20 animate-pulse ${card.color.replace('text-', 'bg-')}`}></div>
                {/* L'ICÔNE UNIQUE */}
                <SpecificIcon className={`w-20 h-20 ${card.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`} />
            </div>
        </div>

        {/* FOOTER */}
        <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black via-black/95 to-transparent z-10">
            <h2 className={`font-sans text-2xl font-bold mb-1 tracking-tighter uppercase ${card.color}`}>
                {card.neoName}
            </h2>
            <p className="font-mono text-xs text-white uppercase tracking-widest mb-2 opacity-80">
                // {card.name}
            </p>
            <div className="flex flex-wrap gap-2">
                {card.keywords.slice(0, 2).map((kw, i) => (
                    <span key={i} className={`px-2 py-1 border border-white/20 text-[9px] uppercase font-mono rounded-sm ${card.color}`}>
                        {kw}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default CardRenderer;