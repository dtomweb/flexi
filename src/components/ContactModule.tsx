import React from 'react';
import { Facebook, Radio, ExternalLink, Phone, Smartphone } from 'lucide-react';

const ContactModule = () => {
  return (
    <div className="w-full mt-8 p-1">
      <div className="relative overflow-hidden rounded-lg border border-cyber-blue/30 bg-cyber-black/80 backdrop-blur-md group hover:border-cyber-orange transition-colors duration-500">
        
        {/* Background Animation */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent skew-x-12 group-hover:via-cyber-orange/20 transition-all duration-700 translate-x-[-100%] group-hover:translate-x-[100%]"></div>

        <div className="relative z-10 p-6 flex flex-col gap-6">
          
          {/* Header: Avatar / Status */}
          <div className="flex items-center gap-4 border-b border-gray-800 pb-4">
            <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-cyber-blue flex items-center justify-center bg-black group-hover:border-cyber-orange transition-colors">
                    <Radio className="w-6 h-6 text-cyber-blue group-hover:text-cyber-orange animate-pulse" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-black shadow-[0_0_5px_#0f0]"></div>
            </div>
            <div>
                <h4 className="font-sans font-bold text-white text-lg tracking-wide">
                    GHISLAINE ORACLE
                </h4>
                <p className="font-mono text-[10px] text-cyber-blue uppercase tracking-widest group-hover:text-cyber-orange">
                    Human Neural Interface
                </p>
            </div>
          </div>

          {/* Actions Buttons Container */}
          <div className="flex flex-col md:flex-row gap-4 w-full">
            
            {/* BOUTON TÉLÉPHONE (Nouveau) */}
            <a 
                href="tel:0688191563"
                className="flex-1 flex items-center justify-between px-4 py-3 bg-green-900/10 border border-green-500/30 rounded hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 group/phone"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-full group-hover/phone:bg-green-500/40 transition-colors">
                        <Smartphone className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="font-mono text-[10px] text-green-400 uppercase tracking-widest">VOICE_LINK</span>
                        <span className="font-sans font-bold text-white text-sm">06 88 19 15 63</span>
                    </div>
                </div>
                <Phone className="w-4 h-4 text-green-600 opacity-50 group-hover/phone:opacity-100 group-hover/phone:rotate-12 transition-all" />
            </a>

            {/* BOUTON FACEBOOK */}
            <a 
                href="https://www.facebook.com/ghislaine.evangelistiMEDIUM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-between px-4 py-3 bg-blue-900/10 border border-cyber-blue/30 rounded hover:bg-cyber-blue/20 hover:border-cyber-blue transition-all duration-300 group/fb"
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-full group-hover/fb:bg-blue-500/40 transition-colors">
                        <Facebook className="w-5 h-5 text-cyber-blue" />
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="font-mono text-[10px] text-cyber-blue uppercase tracking-widest">SOCIAL_NET</span>
                        <span className="font-sans font-bold text-white text-sm">CONTACT MESSENGER</span>
                    </div>
                </div>
                <ExternalLink className="w-4 h-4 text-cyber-blue opacity-50 group-hover/fb:opacity-100 group-hover/fb:translate-x-1 transition-all" />
            </a>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactModule;