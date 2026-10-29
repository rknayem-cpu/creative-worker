"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, PhoneCall, Home, User, Briefcase, Mail, Sparkles,Info } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Services', href: '#services', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
  { name: 'More', href: '#more', icon: Info },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-[#0F172A]/85 backdrop-blur-xl border-b border-slate-800/80 text-white shadow-xl shadow-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-yellow-400 to-amber-500 p-0.5 shadow-lg shadow-yellow-400/20 group-hover:scale-105 transition-transform">
                <Image src="/shifat.png" alt="Logo" width={40} height={40} className="w-full h-full object-cover rounded-full bg-slate-950" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Shifat <span className="text-yellow-400">Molla</span>
              </span>
            </Link>

            {/* Desktop Nav Links (Mapped from Array) */}
            <div className="hidden md:flex items-center space-x-2 text-sm font-semibold text-slate-300">
              {navLinks.map(({ name, href, icon: Icon }) => (
                <Link key={name} href={href} className="flex items-center gap-2 px-3.5 py-2 rounded-lg hover:bg-slate-800/60 hover:text-yellow-400 transition-all">
                  <Icon size={16} className="text-yellow-400" />
                  <span>{name}</span>
                </Link>
              ))}
            </div>

            {/* Desktop Call CTA */}
            <div className="hidden md:flex items-center">
              <a href="tel:01762668682" className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-950 px-5 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-yellow-400/20 active:scale-95">
                <PhoneCall size={16} />
                <span>01762668682</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(true)} aria-label="Open Menu" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-yellow-400 transition-all">
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div className={`fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)} />

      {/* Sliding Sidebar Panel */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#090D16] border-l border-slate-800/80 z-50 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Sidebar Header */}
        <div className="p-6 flex items-center justify-between border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center text-yellow-400">
              <Sparkles size={18} />
            </div>
            <span className="font-extrabold text-lg text-white">Navigation</span>
          </div>
          <button onClick={() => setIsOpen(false)} aria-label="Close Menu" className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Links (Mapped from Array) */}
        <div className="p-6 space-y-3 flex-1 overflow-y-auto">
          {navLinks.map(({ name, href, icon: Icon }) => (
            <Link key={name} href={href} onClick={() => setIsOpen(false)} className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60 text-slate-200 font-semibold hover:bg-slate-900 hover:border-yellow-400/40 hover:text-yellow-400 transition-all group">
              <Icon size={18} className="text-slate-400 group-hover:text-yellow-400 transition-colors" />
              <span>{name}</span>
            </Link>
          ))}
        </div>

        {/* Sidebar Footer CTA */}
        <div className="p-6 border-t border-slate-800/80 bg-slate-950/40">
          <a href="tel:01762668682" onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-950 px-5 py-4 rounded-xl font-bold w-full shadow-lg shadow-yellow-400/15 active:scale-95 transition-all">
            <PhoneCall size={18} />
            <span>01762668682</span>
          </a>
        </div>
      </div>
    </>
  );
}