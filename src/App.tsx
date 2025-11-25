import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, Zap, ShieldAlert, Scan, RefreshCcw, Binary, Activity, 
  Layers, Grid, Volume2, VolumeX, Fingerprint, Eye, Bot, Sparkles,
  Terminal, ExternalLink 
} from 'lucide-react';
import { TAROT_DECK, type Arcana } from './data/arcanaData';
import CardRenderer from './components/CardRenderer';
import SystemLog from './components/SystemLog';
import ContactModule from './components/ContactModule';

type SystemState = 'IDLE' | 'FOCUS_PHASE' | 'SHUFFLING' | 'REVEALED';
type DrawMode = 'SINGLE' | 'TRIPLE';

const SFX = {
  HOVER: 'https://assets.mixkit.co/active_storage/sfx/2572/2572-preview.mp3',
  CLICK: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  REVEAL: 'https://assets.mixkit.co/active_storage/sfx/2588/2588-preview.mp3',
  ERROR: 'https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3',
};

export default function App() {
  const [systemState, setSystemState] = useState<SystemState>('IDLE');
  const [drawMode, setDrawMode] = useState<DrawMode>('SINGLE');
  const [drawnCards, setDrawnCards] = useState<Arcana[]>([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number>(0);
  const [aiInterpretation, setAiInterpretation] = useState<string>("");
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [latency, setLatency] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  
  // LOGS CORRIGÉS
  const [logs, setLogs] = useState<string[]>([
    "System initialized.",
    "Neo-Arcana Protocol v.2099 loaded.",
    "Connection to Ghislaine Medium... OK."
  ]);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.05;
  }, [soundEnabled]);

  const playSfx = (key: keyof typeof SFX) => {
    if (!soundEnabled) return;
    const audio = new Audio(SFX[key]);
    audio.volume = 0.15;
    audio.play().catch(() => {});
  };

  useEffect(() => {
    const checkLatency = async () => {
      const start = performance.now();
      try { await fetch('/vite.svg', { method: 'HEAD', cache: 'no-store' }); setLatency(Math.round(performance.now() - start)); } 
      catch { setLatency(999); }
    };
    checkLatency();
    const interval = setInterval(checkLatency, 2000);
    return () => clearInterval(interval);
  }, []);

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString('fr-FR', { hour12: false });
    setLogs(prev => [...prev, `[${time}] ${msg}`]);
  };

  const callGeminiOracle = async (cards: Arcana[], mode: DrawMode) => {
    setIsThinking(true);
    setAiInterpretation(""); 
    addLog("Connecting to Neural Core (Gemini AI)...");

    try {
      const response = await fetch('/api/interpret', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cards, mode })
      });

      if (!response.ok) throw new Error("Neural Link Failed");

      const data = await response.json();
      setAiInterpretation(data.text);
      addLog("Neural interpretation received.");
      playSfx('REVEAL'); 

    } catch (error) {
      console.error(error);
      setAiInterpretation("⚠️ ERREUR SYSTÈME : Connexion au noyau IA échouée. Affichage des données locales uniquement.");
      playSfx('ERROR');
      addLog("Error: Neural link severed.");
    } finally {
      setIsThinking(false);
    }
  };

  const startRitual = () => {
    playSfx('CLICK');
    setSystemState('FOCUS_PHASE');
    setDrawnCards([]);
    setAiInterpretation("");
    addLog(`Mode selected: ${drawMode === 'SINGLE' ? 'SINGLE_THREAD' : 'TRIPLE_CORE_PROCESS'}`);
  };

  const confirmFocus = () => {
    playSfx('CLICK');
    setSystemState('SHUFFLING');
    addLog("Shuffling Quantum Data Shards...");
    setTimeout(() => performDraw(), 3000);
  };

  const performDraw = () => {
    playSfx('REVEAL');
    const count = drawMode === 'SINGLE' ? 1 : 3;
    const newCards: Arcana[] = [];
    const deckCopy = [...TAROT_DECK];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * deckCopy.length);
        newCards.push(deckCopy[randomIndex]);
        deckCopy.splice(randomIndex, 1);
    }
    setDrawnCards(newCards);
    setSelectedCardIndex(0);
    addLog(`Process complete. ${count} shards decrypted.`);
    setSystemState('REVEALED');
    callGeminiOracle(newCards, drawMode);
  };

  const currentAnalysisCard = drawnCards[selectedCardIndex];
  
  const getButtonContent = () => {
    switch(systemState) {
      case 'IDLE': return { icon: Cpu, text: 'INITIALIZE' };
      case 'FOCUS_PHASE': return { icon: Fingerprint, text: 'CONFIRM FOCUS' };
      case 'SHUFFLING': return { icon: RefreshCcw, text: 'PROCESSING' };
      case 'REVEALED': return { icon: RefreshCcw, text: 'NEW DRAW' };
    }
  };
  const btnData = getButtonContent();

  return (
    <div className="w-full min-h-screen bg-cyber-black text-white relative font-sans selection:bg-cyber-orange selection:text-black pb-10 flex flex-col">
      
      {soundEnabled && (
         <audio ref={audioRef} loop autoPlay src="https://assets.mixkit.co/active_storage/sfx/2575/2575-preview.mp3" /> 
      )}

      <div className="fixed inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-20 pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-cyber-black/80 via-transparent to-cyber-black/95 pointer-events-none z-0"></div>

      <header className="fixed top-0 left-0 w-full p-3 md:p-6 flex justify-between items-center z-50 bg-cyber-black/90 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
            <div className={`w-8 h-8 border border-cyber-orange flex items-center justify-center ${systemState === 'SHUFFLING' ? 'animate-spin' : ''}`}>
                <Binary className="text-cyber-orange w-5 h-5" />
            </div>
            <div>
                <h1 className="font-bold text-lg md:text-2xl tracking-tighter text-white leading-none">TAROT DE GIGI</h1>
                <p className="font-mono text-[8px] md:text-[10px] text-cyber-blue tracking-[0.2em] opacity-70">NEO-ARCANA v.2099</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
            <button onClick={() => setSoundEnabled(!soundEnabled)} className="p-2 hover:text-cyber-orange transition-colors">
                {soundEnabled ? <Volume2 className="w-4 h-4 text-cyber-blue" /> : <VolumeX className="w-4 h-4 text-gray-600" />}
            </button>
            <div className="hidden md:flex items-center gap-2 border-l border-gray-700 pl-4 text-[10px] font-mono text-gray-500">
                <Activity className={`w-3 h-3 ${latency < 100 ? 'text-green-500' : 'text-red-500'}`} />
                <span>PING: {latency}ms</span>
            </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto pt-24 px-4 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start flex-grow">
        
        <div className="order-1 lg:order-none lg:col-span-3 flex flex-col gap-4 lg:sticky lg:top-28">
            <div className="flex gap-2 p-1 bg-gray-900/50 rounded border border-gray-800">
                <button onClick={() => { playSfx('HOVER'); setDrawMode('SINGLE'); }} disabled={systemState === 'SHUFFLING'} className={`flex-1 py-2 text-xs font-mono flex items-center justify-center gap-2 rounded transition-all ${drawMode === 'SINGLE' ? 'bg-cyber-blue text-black font-bold' : 'text-gray-500 hover:bg-white/5'}`}>
                    <Layers className="w-3 h-3" /> SINGLE
                </button>
                <button onClick={() => { playSfx('HOVER'); setDrawMode('TRIPLE'); }} disabled={systemState === 'SHUFFLING'} className={`flex-1 py-2 text-xs font-mono flex items-center justify-center gap-2 rounded transition-all ${drawMode === 'TRIPLE' ? 'bg-cyber-orange text-black font-bold' : 'text-gray-500 hover:bg-white/5'}`}>
                    <Grid className="w-3 h-3" /> TRIPLE
                </button>
            </div>
            
            <button onClick={systemState === 'FOCUS_PHASE' ? confirmFocus : startRitual} disabled={systemState === 'SHUFFLING'} className={`group relative w-full py-5 md:py-6 border border-cyber-blue/50 bg-cyber-blue/5 overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.1)] ${systemState === 'SHUFFLING' ? 'cursor-not-allowed opacity-50' : 'hover:border-cyber-orange hover:bg-cyber-orange/10 active:scale-95'}`}>
                <div className="relative flex flex-col items-center gap-2 z-10">
                    <btnData.icon className={`w-6 h-6 ${systemState === 'SHUFFLING' ? 'text-cyber-orange animate-spin' : 'text-cyber-blue'}`} />
                    <span className="font-mono text-sm tracking-widest text-white font-bold">{btnData.text}</span>
                </div>
            </button>

            {/* MESSAGE VISUALISEZ VOTRE QUESTION */}
            {systemState === 'FOCUS_PHASE' && (
                <div className="bg-green-900/20 border border-green-500/30 p-3 rounded text-center animate-pulse">
                    <p className="text-[10px] font-mono text-green-400 uppercase font-bold">
                        VISUALISEZ VOTRE QUESTION...
                    </p>
                </div>
            )}

            <SystemLog logs={logs} />
        </div>

        <div className="order-2 lg:order-none lg:col-span-5 flex flex-col items-center justify-start min-h-[500px]">
            
            {/* CONTAINER CORRIGÉ POUR LE SCROLL */}
            <div className={`w-full flex ${drawMode === 'TRIPLE' 
                ? 'flex-row gap-3 overflow-x-auto pb-6 justify-start px-2 snap-x snap-mandatory' // Force start + snap
                : 'justify-center'}`}>
                
                {drawnCards.length === 0 ? (
                     <CardRenderer card={null} isRevealed={false} isShuffle={systemState === 'SHUFFLING'} />
                ) : (
                    drawnCards.map((card, index) => (
                        <div 
                            key={card.id + index} 
                            onClick={() => { playSfx('CLICK'); setSelectedCardIndex(index); }} 
                            className={`transform transition-all duration-300 cursor-pointer flex-shrink-0 snap-center
                                ${drawMode === 'TRIPLE' ? 'scale-90 hover:-translate-y-2 origin-top' : ''} 
                                ${selectedCardIndex === index && drawMode === 'TRIPLE' ? 'ring-2 ring-cyber-orange rounded-lg' : 'opacity-80 hover:opacity-100'}`}
                        >
                            {drawMode === 'TRIPLE' && <div className="text-center mb-2 font-mono text-[9px] text-gray-400">{index === 0 ? 'PASSÉ' : index === 1 ? 'PRÉSENT' : 'FUTUR'}</div>}
                            <CardRenderer card={card} isRevealed={true} isShuffle={false} />
                        </div>
                    ))
                )}
            </div>
            <ContactModule />
        </div>

        <div className="order-3 lg:order-none lg:col-span-4 flex flex-col justify-start pb-8">
            {currentAnalysisCard ? (
                <div className="bg-cyber-gray/10 backdrop-blur-md border-l-2 border-cyber-blue p-6 space-y-6 animate-[fadeIn_0.3s_ease-out]">
                    <div className="flex items-center justify-between text-cyber-blue border-b border-cyber-blue/20 pb-2">
                        <div className="flex items-center gap-2"><Scan className="w-5 h-5" /><h3 className="font-sans text-lg font-bold tracking-wider">ANALYSE</h3></div>
                        <span className="text-[10px] font-mono bg-cyber-blue/10 px-2 py-1 rounded">{currentAnalysisCard.neoName}</span>
                    </div>
                    
                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-cyber-blue/20">
                        <div className="bg-gradient-to-r from-cyber-blue/10 to-transparent border border-cyber-blue/30 p-4 rounded relative overflow-hidden">
                            <div className="flex items-center gap-2 mb-3 text-cyber-blue">
                                {isThinking ? <RefreshCcw className="w-4 h-4 animate-spin" /> : <Bot className="w-4 h-4" />}
                                <span className="font-bold text-xs font-mono uppercase tracking-widest">
                                    {isThinking ? 'NEURAL CORE PROCESSING...' : 'ORACLE AI INTERPRETATION'}
                                </span>
                            </div>
                            {isThinking ? (
                                <div className="space-y-2 animate-pulse">
                                    <div className="h-2 bg-cyber-blue/20 rounded w-3/4"></div>
                                    <div className="h-2 bg-cyber-blue/20 rounded w-full"></div>
                                    <div className="h-2 bg-cyber-blue/20 rounded w-5/6"></div>
                                </div>
                            ) : aiInterpretation ? (
                                <div className="text-sm text-white font-mono leading-relaxed shadow-black drop-shadow-md whitespace-pre-wrap">
                                    {aiInterpretation}
                                    <div className="mt-2 flex justify-end"><Sparkles className="w-3 h-3 text-cyber-orange" /></div>
                                </div>
                            ) : (
                                <p className="text-xs text-gray-500 font-mono">Waiting for Neural Link...</p>
                            )}
                        </div>

                        <div><span className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-2 mb-1"><Eye className="w-3 h-3" /> Interprétation Base</span><p className="text-sm text-gray-100 leading-relaxed border-l-2 border-gray-700 pl-3">{currentAnalysisCard.interpretation.general}</p></div>
                        <div className="bg-red-900/10 border border-red-500/20 p-3 rounded"><span className="text-[10px] font-mono text-red-400 uppercase flex items-center gap-2 mb-1"><ShieldAlert className="w-3 h-3" /> Warning</span><p className="text-xs text-red-200">{currentAnalysisCard.interpretation.warning}</p></div>
                        <div className="grid grid-cols-1 gap-4 pt-2">
                             <div><span className="text-[10px] font-mono text-cyber-blue uppercase">❤️ Amour</span><p className="text-xs text-gray-300 mt-1">{currentAnalysisCard.interpretation.love}</p></div>
                             <div><span className="text-[10px] font-mono text-cyber-blue uppercase">💼 Travail</span><p className="text-xs text-gray-300 mt-1">{currentAnalysisCard.interpretation.work}</p></div>
                        </div>
                        <div className="bg-cyber-black/40 p-4 rounded border border-cyber-orange/30 mt-4"><span className="text-[10px] font-mono text-cyber-orange uppercase flex items-center gap-2 mb-2"><Zap className="w-3 h-3" /> Conseil</span><p className="text-sm text-white font-medium italic">"{currentAnalysisCard.interpretation.advice}"</p></div>
                    </div>
                </div>
            ) : (
                <div className="hidden lg:flex h-64 flex-col items-center justify-center border border-dashed border-gray-800 rounded-lg p-8 opacity-50"><ShieldAlert className="w-12 h-12 text-gray-600 mb-4" /><p className="font-mono text-xs text-gray-500 text-center uppercase">Awaiting Data Stream</p></div>
            )}
        </div>
      </main>

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