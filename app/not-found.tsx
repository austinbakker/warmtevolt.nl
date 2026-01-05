"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate snowflakes on mount
    const flakes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-cyan-950">
      {/* Snowflakes */}
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute text-white/60 text-xl animate-fall pointer-events-none"
          style={{
            left: `${flake.left}%`,
            top: "-20px",
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
          }}
        >
          ❄
        </div>
      ))}

      {/* Frozen mist effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,197,253,0.15)_0%,_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Heat pump illustration */}
        <div className="relative mb-8">
          {/* Frost/ice particles around pump */}
          <div className="absolute -inset-8 flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-cyan-300/40 rounded-full blur-sm animate-pulse"
                style={{
                  transform: `rotate(${i * 45}deg) translateX(100px)`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>

          {/* The "frozen" heat pump */}
          <div className="relative inline-block">
            {/* Ice crystals on top */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl">
              🧊
            </div>
            
            {/* Main pump body */}
            <div className="w-48 h-56 bg-gradient-to-b from-slate-600 to-slate-700 rounded-lg border-4 border-slate-500 shadow-2xl relative overflow-hidden">
              {/* Frost overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-200/30 via-transparent to-blue-200/20" />
              
              {/* Fan grill */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-slate-800 border-4 border-slate-600 flex items-center justify-center overflow-hidden">
                {/* Frozen fan - not spinning! */}
                <div className="relative w-20 h-20">
                  {[0, 60, 120, 180, 240, 300].map((angle) => (
                    <div
                      key={angle}
                      className="absolute top-1/2 left-1/2 w-8 h-2 bg-slate-500 rounded origin-left"
                      style={{ transform: `rotate(${angle}deg) translateX(2px)` }}
                    />
                  ))}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
                </div>
                {/* Ice on fan */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              </div>

              {/* Vents with frost */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 space-y-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-32 h-2 bg-slate-800 rounded relative overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-cyan-300/50 via-white/30 to-cyan-300/50"
                      style={{ width: `${60 + i * 10}%` }}
                    />
                  </div>
                ))}
              </div>

              {/* Status light - blinking red! */}
              <div className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50" />
              
              {/* Icicles hanging */}
              <div className="absolute -bottom-4 left-4 flex gap-3">
                {[12, 20, 16, 24, 14].map((height, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-b from-cyan-200 to-cyan-400/50"
                    style={{
                      width: "6px",
                      height: `${height}px`,
                      clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Cold breath effect */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-cyan-200/20 rounded-full blur-md animate-breath"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Error text */}
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-300 mb-4 tracking-tight">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-100 mb-3">
          Brrr... Geen warmte gevonden!
        </h2>
        <p className="text-blue-200/80 text-lg mb-8 max-w-md mx-auto">
          Deze pagina is zo koud als een warmtepomp zonder stroom. 
          <br />
          <span className="text-cyan-300">Laten we je terugbrengen naar een warmere plek.</span>
        </p>

        {/* Back button */}
        <Link
          href="/"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105"
        >
          <span className="text-2xl group-hover:animate-bounce">🔥</span>
          <span>Terug naar de warmte</span>
          <svg 
            className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Thermometer going down */}
        <div className="mt-12 flex items-center justify-center gap-2 text-blue-300/60">
          <div className="relative w-6 h-16 bg-slate-700 rounded-full overflow-hidden border-2 border-slate-600">
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-blue-400 to-cyan-300 animate-temp-drop" style={{ height: "20%" }} />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full" />
          </div>
          <span className="text-sm font-mono">-404°C</span>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
        @keyframes breath {
          0%, 100% {
            transform: translateX(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateX(20px) scale(1.5);
            opacity: 0.1;
          }
        }
        .animate-breath {
          animation: breath 3s ease-in-out infinite;
        }
        @keyframes temp-drop {
          0%, 100% {
            height: 30%;
          }
          50% {
            height: 15%;
          }
        }
        .animate-temp-drop {
          animation: temp-drop 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

