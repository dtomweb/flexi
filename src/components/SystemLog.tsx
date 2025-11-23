import React, { useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

interface SystemLogProps {
  logs: string[];
}

const SystemLog: React.FC<SystemLogProps> = ({ logs }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="flex flex-col h-full border border-cyber-gray/50 bg-black/80 rounded-md overflow-hidden shadow-[0_0_15px_rgba(0,243,255,0.1)]">
        <div className="bg-cyber-gray/30 p-2 flex items-center gap-2 border-b border-cyber-gray/50">
            <Terminal className="w-3 h-3 text-cyber-blue" />
            <span className="font-mono text-[10px] text-gray-300">SYSTEM_LOG.txt</span>
        </div>
        <div className="flex-1 overflow-y-auto p-3 font-mono text-xs text-cyber-blue/70 space-y-1 scrollbar-thin scrollbar-thumb-cyber-blue/20">
            {logs.map((log, i) => (
                <div key={i} className="break-words">
                    <span className="text-cyber-orange mr-2 opacity-60">{`>`}</span>
                    <span className={i === logs.length - 1 ? "text-white animate-pulse" : ""}>
                        {log}
                    </span>
                </div>
            ))}
            <div ref={bottomRef} />
        </div>
    </div>
  );
};

export default SystemLog;