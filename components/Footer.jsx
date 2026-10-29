"use client";

import { Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  
  return (
    <footer id="contact" className="bg-[#0B1120] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
               <Image src={'/crlogo.png'} width={300} height={300} className="w-10 h-10 rounded-full
                bg-yellow-400 flex items-center justify-center text-slate-900 font-bold text-xl"/>
               
              <span className="font-bold text-xl text-white">Creative Worker</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Shifat Molla — Digital marketing, page setup, boosting, ebong video editing solutions pathate toiri.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Me</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Contact Info</h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-400" />
                <span>01762668682</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400" />
                <span>creativeworker434@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-yellow-400" />
                <span>Bangladesh</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Creative Worker (Shifat Molla). All rights reserved.</p>
        
        </div>
      </div>
    </footer>
  );
}