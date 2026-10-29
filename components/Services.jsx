"use client";

import { motion } from 'framer-motion';
import { Megaphone, Sliders, Video, Share2, Target, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <Megaphone className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />,
    title: 'Facebook Page Boosting',
    desc: 'Targeted ad campaigns designed to reach your exact customer base and maximize conversion rate.'
  },
  {
    icon: <Sliders className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />,
    title: 'Page Setup & Optimization',
    desc: 'Complete professional page setup, branding, custom buttons, and SEO settings for higher engagement.'
  },
  {
    icon: <Video className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />,
    title: 'Professional Video Editing',
    desc: 'Engaging promo videos, Reels, Shorts, and ads edited to capture audience attention quickly.'
  },
  {
    icon: <Share2 className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />,
    title: 'Social Media Management',
    desc: 'End-to-end management of your social presence with regular content creation and scheduling.'
  },
  {
    icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />,
    title: 'Digital Marketing Strategy',
    desc: 'Customized marketing roadmaps tailored to grow your online business presence effectively.'
  },
  {
    icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />,
    title: 'Sales & Lead Generation',
    desc: 'Focused campaigns designed to drive real leads, direct sales, and phone calls for your business.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-20 text-white border-b border-slate-800/60 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Professional <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 sm:mt-3 px-4">
            Helping businesses scale through targeted marketing, brand setup, and creative visual content.
          </p>
        </motion.div>

        {/* Services Grid (Responsive & Compact) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/60 border border-slate-700/80 p-5 sm:p-6 rounded-2xl hover:border-yellow-400/50 hover:bg-slate-800 transition-all duration-300 group shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 sm:p-3 bg-slate-900/80 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold mt-4 mb-2 text-white group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}