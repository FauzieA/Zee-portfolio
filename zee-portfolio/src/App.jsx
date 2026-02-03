import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { zainabData } from './data/zainab';

function App() {
  return (
    <div className="min-h-screen bg-[#fdfaf7] selection:bg-stone-200">
      {/* Editorial Navigation */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-8 py-6 flex justify-between items-center">
        <div className="font-serif text-xl italic text-white md:text-stone-900 md:mix-blend-normal uppercase tracking-widest">
          Z. Abdullahi
        </div>
        <div className="hidden md:flex gap-10 font-sans text-[10px] uppercase tracking-[0.4em] text-stone-500">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#experience" className="hover:text-primary transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-primary transition-colors">Inquiry</a>
        </div>
      </nav>

      <main>
        {/* Section 1: Editorial Hero */}
        <Hero data={zainabData} />

        {/* Section 2: Statement / About */}
        <section id="about">
          <About data={zainabData} />
        </section>

        {/* Section 3: Professional & Venture Grid */}
        <section id="experience" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20">
              <Experience 
                title="Professional Engagements"
                items={zainabData.experience} 
                isProfessional={true}
              />
              <Experience 
                title="Entrepreneurial Ventures"
                items={zainabData.ventures} 
                isProfessional={false}
              />
            </div>
          </div>
        </section>

        {/* Section 4: Matchmaking / Contact */}
        <section id="contact" className="bg-[#f3eee8]">
          <Contact />
        </section>
      </main>

      {/* Editorial Footer */}
      <footer className="py-12 border-t border-stone-200 text-center">
        <p className="font-sans text-[9px] text-stone-400 uppercase tracking-[0.5em]">
          Zainab Abdullahi Ahmed &copy; 2026 &bull; Curated by her Favorite Sibling
        </p>
      </footer>
    </div>
  );
}

export default App;