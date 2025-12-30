"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      // Adjusted scroll threshold considering TopBar height
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine text color based on scroll state and current page
  // On Home page: White text when not scrolled (transparent bg), dark text when scrolled (white bg)
  // On Other pages: Always dark text (as we might want a white header or just visible text)
  // HOWEVER, the current design uses transparent header on all pages.
  // If other pages have white background, white text won't be visible.

  // Logic:
  // If Scrolled -> Text Dark (bg is white)
  // If Not Scrolled:
  //    If Home Page -> Text White (assuming dark hero image)
  //    If Other Page -> Text Dark (assuming white background)

  const textColorClass = isScrolled || !isHomePage ? "text-gray-900" : "text-white";
  const hoverColorClass = "hover:text-green-500";
  const logoTextClass = isScrolled || !isHomePage ? "text-gray-900" : "text-white";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 top-0 mt-0 lg:mt-[40px] ${isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-2 mt-0 lg:mt-0"
          : isHomePage
            ? "bg-transparent py-4 border-b border-white/10"
            : "bg-white/90 backdrop-blur-md shadow-sm py-4 mt-0 lg:mt-0" // Default for non-home pages: visible background
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className={`font-bold text-xl tracking-tight transition-colors ${logoTextClass}`}>
              Voordeligste-<span className="text-green-500">Warmtepomp.nl</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${hoverColorClass} ${textColorClass}`}
            >
              Home
            </Link>
            <Link
              href="/schemas"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${hoverColorClass} ${textColorClass}`}
            >
              Schema&apos;s
            </Link>
            <Link
              href="/prijzen"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${hoverColorClass} ${textColorClass}`}
            >
              Prijzen
            </Link>
            <Link
              href="/services"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${hoverColorClass} ${textColorClass}`}
            >
              Extra Services
            </Link>
            <Link
              href="/accessoires"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${hoverColorClass} ${textColorClass}`}
            >
              Accessoires
            </Link>
            <Link
              href="/offerte"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5"
            >
              Offerte opvragen
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${textColorClass}`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-2xl absolute w-full top-full left-0 border-t border-gray-100" id="mobile-menu">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              href="/"
              className="text-gray-900 hover:text-green-600 block px-3 py-3 rounded-xl text-base font-bold hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/schemas"
              className="text-gray-900 hover:text-green-600 block px-3 py-3 rounded-xl text-base font-bold hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Schema&apos;s
            </Link>
            <Link
              href="/prijzen"
              className="text-gray-900 hover:text-green-600 block px-3 py-3 rounded-xl text-base font-bold hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Prijzen
            </Link>
            <Link
              href="/services"
              className="text-gray-900 hover:text-green-600 block px-3 py-3 rounded-xl text-base font-bold hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Extra Services
            </Link>
            <Link
              href="/accessoires"
              className="text-gray-900 hover:text-green-600 block px-3 py-3 rounded-xl text-base font-bold hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Accessoires
            </Link>
            <Link
              href="/offerte"
              className="text-center bg-green-50 text-green-600 font-bold block px-3 py-3 rounded-xl text-base mt-4 border border-green-100"
              onClick={() => setIsOpen(false)}
            >
              Offerte opvragen
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
