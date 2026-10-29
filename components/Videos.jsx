"use client";

import React from 'react';
import { Sparkles, Video, Play, ExternalLink } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Facebook Marketing Strategy & Growth Tips',
    category: 'Video Tutorial',
    embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F27742899768732499%2F&show_text=false&width=560&t=0',
    fbUrl: 'https://www.facebook.com/reel/27742899768732499/',
    description: 'Learn effective strategies for Facebook boosting and targeted audience marketing.'
  },
  {
    id: 2,
    title: 'Advanced Business & Page Growth Guide',
    category: 'Growth Guide',
    embedUrl: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F962103506546253%2F&show_text=false&width=560&t=0',
    fbUrl: 'https://www.facebook.com/reel/962103506546253/',
    description: 'Boost your business reach and sales with smart strategies and powerful results.'
  }
];

export default function Videos() {
  return (
    <section id="more" className="relative py-16 bottom-10 sm:py-10  text-slate-100 overflow-hidden">
      {/* Background Ambient Glow Lights */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-amber-500/10 blur-[130px] sm:blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-600/10 blur-[130px] sm:blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-amber-400 text-xs font-semibold uppercase tracking-wider shadow-md">
            <Sparkles size={14} />
            <span>Featured Video Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Watch My <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">Videos</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm px-2">
            Explore marketing tutorials, Facebook ad strategies, and client growth guides directly.
          </p>
        </div>

        {/* Video Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-[#0D1424]/80 border border-slate-800/80 rounded-2xl sm:rounded-3xl p-4 sm:p-5 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Perfectly Fitted 16:9 Aspect Ratio Wrapper with Absolute Iframe */}
              <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-inner">
                <iframe
                  src={video.embedUrl}
                  className="absolute top-0 left-0 w-full h-full border-0 object-cover"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title={video.title}
                />
              </div>

              {/* Video Card Footer Info */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col justify-between flex-1 gap-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {video.category}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
                      <Play size={10} className="fill-slate-500" /> Facebook Video
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                    {video.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>

                {/* Direct Link Button */}
                <div className="pt-2">
                  <a
                    href={video.fbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 hover:border-amber-500/40 text-xs font-semibold transition-all group/btn active:scale-95"
                  >
                    <Video size={14} className="text-blue-500" />
                    <span>Watch on Facebook</span>
                    <ExternalLink size={12} className="text-slate-500 group-hover/btn:text-amber-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}