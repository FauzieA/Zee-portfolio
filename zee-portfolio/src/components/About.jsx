import React from 'react';
import { motion } from 'framer-motion';

const About = ({ data }) => {
  const professionalPart = data.about.split("However,")[0];
  const siblingPart = data.about.includes("However,") 
    ? "However," + data.about.split("However,")[1] 
    : "";

  return (
    <section id="about" className="bg-[#f3eee8]/50 py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 60 }}
          className="w-px bg-primary mb-10"
        />
        
        {/* Made this Bolder (font-black) and Darker (text-stone-900) */}
        <h2 className="font-serif text-[11px] uppercase tracking-[0.6em] text-stone-900 font-black mb-12">
          Statement of Intent
        </h2>

        <div className="space-y-8 w-full">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-sans text-lg md:text-xl text-stone-700 leading-relaxed font-light tracking-normal max-w-5xl mx-auto"
          >
            {professionalPart}
          </motion.p>

          {siblingPart && (
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-xl md:text-2xl text-primary italic leading-relaxed max-w-4xl mx-auto"
            >
              {siblingPart}
            </motion.p>
          )}
        </div>
        
        <div className="grid grid-cols-3 gap-8 w-full border-t border-stone-200 mt-20 pt-16">
          {data.stats.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-serif text-3xl text-stone-900 italic mb-1">{s.value}</p>
              <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-stone-400 font-bold">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;