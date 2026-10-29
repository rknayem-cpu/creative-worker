"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight, Award, PhoneCall, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-32 md:pb-10 text-slate-100 overflow-hidden border-b border-slate-800/60">
      
      {/* Background Decorative Mesh Glow */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-amber-500/10 blur-[130px] md:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-blue-600/10 blur-[130px] md:blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Main Info */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            
            {/* Top Pill Badge (Slide in from Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs sm:text-sm font-medium shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for New Projects</span>
              <span className="text-slate-600">|</span>
              <span className="text-amber-400 font-semibold flex items-center gap-1">
                <ShieldCheck size={14} /> Certified Digital Marketer
              </span>
            </motion.div>

            {/* Main Headline (Drop from Top) */}
            <motion.h1 
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight md:leading-none text-white"
            >
              DIGITAL <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                MARKETING
              </span> <br />
              & CONTENT EXPERT
            </motion.h1>

            {/* Subtitle / Quote (Fade & Slide in) */}
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-slate-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed italic font-normal"
            >
              "I am the best Business solutions for your business"
            </motion.p>

            {/* Action Buttons (Slide Up) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/15 group active:scale-95"
              >
                <span>Learn More</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Facebook Button */}
              <a
                href="https://www.facebook.com/creativeworkerbd" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-3 text-slate-200 font-semibold active:scale-95"
              >
                <svg className="w-5 h-5 fill-current text-blue-500" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook Page</span>
              </a>
            </motion.div>

            {/* Call Info & Marketplaces (Fade in) */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <a href="tel:01762668682" className="flex items-center gap-3 text-slate-300 hover:text-amber-400 transition-colors">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <PhoneCall size={18} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500">Call to find out more</p>
                  <p className="text-sm font-bold tracking-wider">01762668682</p>
                </div>
              </a>

              <div className="flex items-center gap-6 text-sm font-medium">
                <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Find me on:</span>
                <span className="font-bold text-emerald-400 text-base">fiverr.</span>
                <span className="font-bold text-green-500 text-base">Upwork</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Profile Visual (Slide in from Right with Smooth Scale) */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-sm lg:max-w-none rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              
              {/* Image Container */}
              <div className="aspect-[3/3] md:aspect-[4/5] overflow-hidden relative bg-slate-800">
                <img
                  src="/sifat.png"
                  alt="Shifat Molla - Digital Marketing Expert"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
              </div>

              {/* Overlay Badge at Bottom (Slide Up inside Image) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-4 left-4 right-4 bg-slate-900/90 border border-slate-700/80 p-4 rounded-2xl backdrop-blur-md flex items-center gap-3 shadow-lg"
              >
                <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-tight">Shifat Molla</h3>
                  <p className="text-xs text-amber-400 font-medium leading-tight mt-0.5">Certified Digital Marketing & Content Expert</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}