"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        `sticky top-0 z-50 w-full transition-all duration-300 px-4 sm:px-10 py-4 sm:py-6 flex items-center justify-between ` +
        (scrolled
          ? "bg-white/80 shadow-lg backdrop-blur-md rounded-b-2xl"
          : "bg-transparent")
      }
      style={{
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      {/* Background image */}
      <Image
        src="/arvcover.jpg"
        alt="Navbar Background"
        fill
        className="object-cover object-center absolute inset-0 z-0 opacity-60 blur-sm pointer-events-none select-none"
        priority
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10 backdrop-blur-sm pointer-events-none" />
      {/* Navbar content */}
      <div className="flex items-center gap-3 z-20 relative">
        <Image src="/arvlogo.png" alt="Arvconstruction Logo" width={40} height={40} />
        <span className={`text-2xl font-semibold hidden md:inline ${scrolled ? "text-gray-900" : "text-white"}`}>ARV Construction</span>
      </div>
      <div className="flex items-center gap-8 z-20 relative">
        <div className={`flex items-center gap-2 text-lg hidden lg:flex ${scrolled ? "text-gray-900" : "text-white"}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 0 0 7.48 19h9.04a2 2 0 0 0 1.83-1.3L21 13M7 13V6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v7" /></svg>
          <span className="border-r border-gray-300 pr-4 mr-4">+1-212-456-7890</span>
        </div>
        <button
          className={
            `flex items-center gap-2 font-medium px-6 py-2 rounded-full shadow transition ` +
            (scrolled
              ? "bg-gray-900 text-white hover:bg-gray-800"
              : "bg-white text-gray-900 hover:bg-gray-100")
          }
        >
          <svg className={`w-6 h-6 ${scrolled ? "text-white" : "text-gray-900"}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" /></svg>
          <span className="hidden sm:inline">Menu</span>
        </button>
      </div>
    </nav>
  );
} 