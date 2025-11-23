import React, { useState, useEffect } from 'react';
import { Cpu, Zap, ShieldAlert, Scan, RefreshCcw, Binary, Wifi, Eye, Fingerprint, Activity, Terminal, ExternalLink } from 'lucide-react';
import { MAJOR_ARCANA, type Arcana } from './data/arcanaData';
import CardRenderer from './components/CardRenderer';
import SystemLog from './components/SystemLog';
import ContactModule from './components/ContactModule';

type SystemState = 'IDLE' | 'FOCUS_PHASE' | 'SHUFFLING' | 'REVEALED';

export default function App() {
  const [systemState, setSystemState] = useState<SystemState>('IDLE');
  const [currentCard, setCurrentCard] = useState<Arcana | null>(null);
  const [latency, setLatency] = useState<number>(0);
  
  const [logs, setLogs] = useState<string[]>([
    "System initialized.",
    "Neo-Arcana Protocol v.2099 loaded.",
    "Connection to Ghislaine Medium... OK."
  ]);

  // VRAI PING
  useEffect(() => {
    const checkLatency = async () => {
      const start = performance.now();
      try {
        await fetch('/vite.svg', { method: 'HEAD', cache: 'no-store' });
        setLatency(Math.round(performance.now() - start));
      } catch { setLatency(999); }
    };
    checkLatency();
    const interval = setInterval(checkLatency, 2000);
    return () => clearInterval(interval);
  }, []);

  const getPingColor = (ms: number) => {
    if (ms === 999) return 'text-red-600';
    if (ms < 100) return 'text-green-500';
    if (ms < 200) return 'text-orange-500';
    return 'text-red-500';
  };

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString('fr-FR', { hour12: false });
    setLogs(prev => [...prev, `[${time}] ${msg}`]);
  };

  const startRitual = () => {
    if (systemState !== 'IDLE' && systemState !== 'REVEALED') return;
    setSystemState('FOCUS_PHASE');
    setCurrentCard(null);
    addLog("--- NEW SESSION INITIATED ---");
    addLog("Waiting for user focus...");
  };

  const confirmFocus = () => {
    setSystemState('SHUFFLING');
    addLog("Neural pattern locked.");
    addLog("Shuffling Quantum Data Shards...");
    setTimeout(() => drawCard(), 3000);
  };

  const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * MAJOR_ARCANA.length);
    const drawnCard = MAJOR_ARCANA[randomIndex];
    addLog(`Target locked: ${drawnCard.neoName}`);
    setCurrentCard(drawnCard);
    setSystemState('REVEALED');
  };

  const getButtonContent = () => {
    switch(systemState) {
      case 'IDLE': return { icon: Cpu, text: 'INITIALIZE_SEQUENCE', color: 'text-cyber-blue' };
      case 'FOCUS_PHASE': return { icon: Fingerprint, text: 'CONFIRM_FOCUS', color: 'text-green-400 animate-pulse' };
      case 'SHUFFLING': return { icon: RefreshCcw, text: 'PROCESSING...', color: 'text-cyber-orange animate-spin' };
      case 'REVEALED': return { icon: RefreshCcw, text: 'NEW_DRAW', color: 'text-cyber-blue' };
    }
  };

  const btnData = getButtonContent();
  const BtnIcon = btnData.icon;

  return (
    <div className="w-full min-h-screen bg-cyber-black text-white relative font-sans selection:bg-cyber-orange selection:text-black pb-10 flex flex-col">
      
      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-20 pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-cyber-black/80 via-transparent to-cyber-black/95 pointer-events-none z-0"></div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full p-3 md:p-6 flex justify-between items-center z-50 bg-cyber-black/90 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
            <div className={`w-8 h-8 md:w-10 md:h-10 border border-cyber-orange flex items-center justify-center ${systemState === 'SHUFFLING' ? 'animate-spin' : ''}`}>
                <Binary className="text-cyber-orange w-5 h-5" />
            </div>
            <div>
                <h1 className="font-bold text-lg md:text-2xl tracking-tighter text-white leading-none">
                    TAROT DE GIGI
                </h1>
                <p className="font-mono text-[8px] md:text-[10px] text-cyber-blue tracking-[0.2em] opacity-70">
                    NEO-ARCANA v.2099
                </p>
            </div>
        </div>
        <div className="hidden md:flex gap-6 text-[10px] font-mono text-gray-500">
            <div className="flex items-center gap-2 border-l border-gray-700 pl-6">
                <Activity className={`w-3 h-3 ${getPingColor(latency)}`} />
                <span>LATENCY: <span className={`${getPingColor(latency)} font-bold`}>{latency}ms</span></span>
            </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="relative z-10 container mx-auto pt-24 px-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start flex-grow">
        
        {/* COLONNE GAUCHE (Commandes) - Ordre 1 sur Mobile */}
        <div className="order-1 lg:order-none lg:col-span-3 flex flex-col gap-4 lg:sticky lg:top-28">
            
            {/* BOUTON PRINCIPAL (Gros pour le mobile) */}
            <button 
                onClick={systemState === 'FOCUS_PHASE' ? confirmFocus : startRitual}
                disabled={systemState === 'SHUFFLING'}
                className={`group relative w-full py-5 md:py-6 border border-cyber-blue/50 bg-cyber-blue/5 overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.1)] ${systemState === 'SHUFFLING' ? 'cursor-not-allowed opacity-50' : 'hover:border-cyber-orange hover:bg-cyber-orange/10 active:scale-95'}`}
            >
                <div className="relative flex flex-col items-center gap-2 z-10">
                    <BtnIcon className={`w-6 h-6 ${btnData.color}`} />
                    <span className={`font-mono text-sm tracking-widest text-white group-hover:text-cyber-orange font-bold`}>
                        {btnData.text}
                    </span>
                </div>
            </button>

            {/* LOGS (Réduits sur mobile pour ne pas gêner) */}
            <div className="flex-1 h-[120px] lg:h-auto lg:min-h-[150px]">
                <SystemLog logs={logs} />
            </div>

            {systemState === 'FOCUS_PHASE' && (
                <div className="bg-green-900/20 border border-green-500/30 p-2 rounded text-center animate-pulse">
                    <p className="text-[10px] font-mono text-green-400 uppercase">
                        VISUALISEZ VOTRE QUESTION...
                    </p>
                </div>
            )}
        </div>

        {/* COLONNE CENTRE (Carte) - Ordre 2 sur Mobile */}
        <div className="order-2 lg:order-none lg:col-span-5 flex flex-col items-center justify-start min-h-[450px]">
            <CardRenderer 
                card={currentCard} 
                isRevealed={systemState === 'REVEALED' && currentCard !== null} 
                isShuffle={systemState === 'SHUFFLING'} 
            />
            <ContactModule />
        </div>

        {/* COLONNE DROITE (Analyse) - Ordre 3 sur Mobile */}
        <div className="order-3 lg:order-none lg:col-span-4 flex flex-col justify-start pb-8">
            {currentCard ? (
                <div className="bg-cyber-gray/10 backdrop-blur-md border-l-2 border-cyber-blue p-6 space-y-6 animate-[fadeIn_0.5s_ease-out]">
                    <div className="flex items-center gap-2 text-cyber-blue border-b border-cyber-blue/20 pb-2">
                        <Scan className="w-5 h-5" />
                        <h3 className="font-sans text-lg font-bold tracking-wider">ANALYSIS_RESULT</h3>
                    </div>
                    
                    {/* Zone de texte avec scroll interne si trop long */}
                    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-cyber-blue/20">
                        <div>
                            <span className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-2 mb-1">
                                <Eye className="w-3 h-3" /> Interprétation
                            </span>
                            <p className="text-sm text-gray-100 leading-relaxed border-l-2 border-gray-700 pl-3">
                                {currentCard.interpretation.general}
                            </p>
                        </div>

                        <div className="bg-red-900/10 border border-red-500/20 p-3 rounded">
                             <span className="text-[10px] font-mono text-red-400 uppercase flex items-center gap-2 mb-1">
                                <ShieldAlert className="w-3 h-3" /> Warning
                            </span>
                            <p className="text-xs text-red-200">
                                {currentCard.interpretation.warning}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 pt-2">
                             <div>
                                <span className="text-[10px] font-mono text-cyber-blue uppercase">❤️ Amour</span>
                                <p className="text-xs text-gray-300 mt-1">{currentCard.interpretation.love}</p>
                            </div>
                            <div>
                                <span className="text-[10px] font-mono text-cyber-blue uppercase">💼 Travail</span>
                                <p className="text-xs text-gray-300 mt-1">{currentCard.interpretation.work}</p>
                            </div>
                        </div>

                        <div className="bg-cyber-black/40 p-4 rounded border border-cyber-orange/30 mt-4">
                            <span className="text-[10px] font-mono text-cyber-orange uppercase flex items-center gap-2 mb-2">
                                <Zap className="w-3 h-3" /> Conseil
                            </span>
                            <p className="text-sm text-white font-medium italic">
                                "{currentCard.interpretation.advice}"
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                // Message d'attente visible uniquement sur Desktop pour ne pas encombrer le mobile
                <div className="hidden lg:flex h-64 flex-col items-center justify-center border border-dashed border-gray-800 rounded-lg p-8 opacity-50">
                    <ShieldAlert className="w-12 h-12 text-gray-600 mb-4" />
                    <p className="font-mono text-xs text-gray-500 text-center uppercase">
                        Awaiting Input
                    </p>
                </div>
            )}
        </div>
      </main>

      {/* FOOTER CREATEUR (DTOM) */}
      <footer className="relative z-10 w-full py-6 border-t border-white/5 bg-black/50 backdrop-blur-sm mt-8">
          <div className="container mx-auto flex flex-col items-center justify-center gap-2">
              <div className="flex items-center gap-2 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                  <Terminal className="w-3 h-3" />
                  <span>System Architect</span>
              </div>
              
              <a 
                href="https://dtomweb.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded border border-transparent hover:border-cyber-blue/30 hover:bg-cyber-blue/5 transition-all duration-300"
              >
                  <span className="text-gray-400 font-sans font-bold group-hover:text-cyber-blue transition-colors">
                      DTOM WEB
                  </span>
                  <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-cyber-orange group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="text-[9px] text-gray-700 font-mono">
                  [ SECURE_CONNECTION_ESTABLISHED ]
              </p>
          </div>
      </footer>
    </div>
  );
}