"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Eye, X, Sparkles } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Social Media Management',
    category: 'Management',
    image: '/gallery/1.png',
    tags: ['Page Optimization', 'Fiverr'],
    description: 'Smart Strategy & Powerful Results for organic page growth.'
  },
  {
    id: 2,
    title: 'Facebook Ads Expert Campaign',
    category: 'Paid Ads',
    image: '/gallery/2.png',
    tags: ['Target Audience', 'High ROI'],
    description: 'Targeted advertising strategy to increase business reach.'
  },
  {
    id: 3,
    title: 'YouTube & Facebook Page Setup',
    category: 'Page Setup',
    image: '/gallery/3.png',
    tags: ['Branding', 'SEO'],
    description: 'Professional logo design and complete branding setup.'
  },
  {
    id: 4,
    title: 'Facebook & Instagram Ads',
    category: 'Paid Ads',
    image: '/gallery/4.png',
    tags: ['Campaign Setup', 'Analytics'],
    description: 'Comprehensive campaign set-up and ad management.'
  }
];

const categories = ['All', 'Paid Ads', 'Management', 'Page Setup'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="about" className="relative py-12 sm:py-10  text-white overflow-hidden ">
      
      {/* Background Lighting Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-amber-500/10 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-2 sm:space-y-3 max-w-xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={12} />
            <span>My Recent Work</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Featured <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm px-2">
            Explore my high-performing marketing campaigns and strategies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20 scale-105'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid: Mobile-e duita (grid-cols-2), PC-te duita ba tinita (md:grid-cols-2 lg:grid-cols-3) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative bg-slate-900/70 border border-slate-800/80 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-amber-500/40 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              {/* Image Box (Compact Size) */}
              <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Hover Action */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => setSelectedImage(item)}
                    className="p-2.5 sm:p-3 rounded-full bg-amber-400 text-slate-950 hover:scale-110 transition-transform shadow-md cursor-pointer"
                    title="View Full Image"
                  >
                    <Eye size={16} />
                  </button>
                </div>
              </div>

              {/* Card Details (Compact Text) */}
              <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2">
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-amber-400 border border-slate-700/50">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xs sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                  {item.title}
                </h3>

                <p className="text-[11px] sm:text-xs text-slate-400 leading-snug line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
          <div className="relative max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            
            <div className="p-3 border-b border-slate-800 flex items-center justify-between">
              <h4 className="text-xs sm:text-base font-bold text-white truncate pr-2">{selectedImage.title}</h4>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <div className="relative aspect-[4/3] w-full bg-slate-950">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

          </div>
        </div>
      )}

    </section>
  );
}