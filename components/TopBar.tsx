"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function TopBar() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="bg-green-600 text-white py-2 px-4 text-center relative z-[60]">
      <div className="container mx-auto flex justify-between items-center text-sm font-medium">
        <div className="hidden sm:block">
           {/* Left side optional content */}
        </div>
        <div className="flex-1 text-center">
          <span className="font-bold">ACTIE:</span> Een warmtepomp al vanaf <span className="font-extrabold underline decoration-white decoration-2 underline-offset-2">€4000 Netto</span>
        </div>
        <button 
          onClick={() => setShow(false)} 
          className="text-green-100 hover:text-white focus:outline-none ml-4"
          aria-label="Sluit melding"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

