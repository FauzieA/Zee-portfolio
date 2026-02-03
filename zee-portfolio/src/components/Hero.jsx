import { motion } from 'framer-motion';
// Import the image from your assets folder
import zeeImg from '../assets/zee.png';

const Hero = ({ data }) => (
  <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden">
    {/* Floating Circle Decoration */}
    <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-accent/40 blur-3xl -z-10" />
    
    <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }} 
        animate={{ opacity: 1, x: 0 }}
        className="z-10 text-center md:text-left"
      >
        <h2 className="font-serif text-lg italic text-primary mb-4 tracking-wide">
          Elevate Your Standards
        </h2>
        <h1 className="font-serif text-6xl md:text-8xl leading-[0.9] text-stone-900 mb-8 uppercase tracking-tighter">
          The <br /> <span className="ml-8 italic font-light text-primary">Zainab</span> <br /> Experience
        </h1>
        <a 
          href="#about"
          className="inline-block px-10 py-4 border border-stone-800 font-sans text-[10px] uppercase tracking-[0.3em] hover:bg-stone-900 hover:text-white transition-all cursor-pointer"
        >
          Explore Dossier
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative aspect-[3/4] bg-stone-100 rounded-t-full border-[12px] border-white shadow-2xl overflow-hidden"
      >
        {/* The actual image tag */}
        <img 
          src={zeeImg} 
          alt="Zainab" 
          className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
        />
        
        {/* Subtle Overlay for that premium feel */}
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      </motion.div>
    </div>
  </section>
);

export default Hero;