import React from 'react';

const Contact = () => (
  <section id="contact" className="py-32 px-6 max-w-4xl mx-auto">
    <div className="text-center mb-20">
      <h3 className="font-serif text-sm italic text-primary mb-2 tracking-widest uppercase">Vetting Process</h3>
      <h2 className="font-sans text-3xl md:text-4xl uppercase tracking-[0.3em] text-stone-900 font-light">
        Boyfriend <span className="italic font-serif">Application</span>
      </h2>
      <p className="mt-4 font-sans text-[10px] text-stone-400 uppercase tracking-widest font-medium">
        Phase II: Strategic Partnership & Sibling Approval
      </p>
    </div>
    
    <form className="space-y-16">
      {/* --- Section 1: Personal & Professional Identity --- */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="border-b border-stone-200 pb-4 focus-within:border-primary transition-colors">
          <label className="block text-[10px] uppercase font-bold text-stone-400 mb-2 tracking-tighter">Legal Full Name</label>
          <input type="text" className="w-full bg-transparent outline-none font-serif text-2xl italic text-stone-800" placeholder="John Doe" />
        </div>
        <div className="border-b border-stone-200 pb-4 focus-within:border-primary transition-colors">
          <label className="block text-[10px] uppercase font-bold text-stone-400 mb-2 tracking-tighter">Current Occupation</label>
          <input type="text" className="w-full bg-transparent outline-none font-serif text-2xl italic text-stone-800" placeholder="Industry/Role" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="border-b border-stone-200 pb-4 focus-within:border-primary transition-colors">
          <label className="block text-[10px] uppercase font-bold text-stone-400 mb-2 tracking-tighter">Current Base (Location)</label>
          <input type="text" className="w-full bg-transparent outline-none font-serif text-2xl italic text-stone-800" placeholder="City, Country" />
        </div>
        <div className="border-b border-stone-200 pb-4 focus-within:border-primary transition-colors">
          <label className="block text-[10px] uppercase font-bold text-stone-400 mb-2 tracking-tighter">Travel Readiness</label>
          <select className="w-full bg-transparent outline-none font-serif text-xl italic text-stone-800 appearance-none">
            <option>Select Mobility Level</option>
            <option>Passport Ready (Global)</option>
            <option>National (Nigeria Only)</option>
            <option>Local (Bauchi & Environs)</option>
          </select>
        </div>
      </div>

      {/* --- Section 2: Financial Audit & Sibling Bribe --- */}
      <div className="grid md:grid-cols-2 gap-12 bg-stone-50/50 p-8 rounded-3xl border border-stone-100">
        <div className="border-b border-stone-200 pb-4">
          <label className="block text-[10px] uppercase font-bold text-stone-400 mb-2 tracking-tighter">Annual Net Income</label>
          <input type="text" className="w-full bg-transparent outline-none font-serif text-2xl italic text-stone-800" placeholder="Verify Proof" />
        </div>
        <div className="border-b border-stone-800 pb-4">
          <label className="block text-[10px] uppercase font-black text-primary mb-2 tracking-tighter underline">Monthly Little Sister Stipend (Tax)</label>
          <input type="text" className="w-full bg-transparent outline-none font-serif text-2xl italic text-stone-900 font-bold" placeholder="Amount in USD" />
        </div>
      </div>

      {/* --- Section 3: Quantitative Vetting --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="border-b border-stone-200 pb-4">
          <label className="block text-[9px] uppercase font-bold text-stone-400 mb-2">Age</label>
          <input type="number" className="w-full bg-transparent outline-none font-serif text-xl italic" placeholder="00" />
        </div>
        <div className="border-b border-stone-200 pb-4">
          <label className="block text-[9px] uppercase font-bold text-stone-400 mb-2">Height</label>
          <input type="text" className="w-full bg-transparent outline-none font-serif text-xl italic" placeholder="Ft/In" />
        </div>
        <div className="border-b border-stone-200 pb-4">
          <label className="block text-[9px] uppercase font-bold text-stone-400 mb-2">Genotype</label>
          <input type="text" className="w-full bg-transparent outline-none font-serif text-xl italic" placeholder="AA/AS" />
        </div>
        <div className="border-b border-stone-200 pb-4">
          <label className="block text-[9px] uppercase font-bold text-stone-400 mb-2">Samosa Budget</label>
          <input type="text" className="w-full bg-transparent outline-none font-serif text-xl italic" placeholder="Weekly" />
        </div>
      </div>

      {/* --- Section 4: Qualitative Assessment --- */}
      <div className="border-b border-stone-200 pb-4">
        <label className="block text-[10px] uppercase font-bold text-stone-400 mb-2 tracking-widest">Letter of Intent</label>
        <textarea 
          className="w-full bg-transparent outline-none font-serif text-xl italic resize-none leading-relaxed" 
          rows="3" 
          placeholder="Briefly state why you are a suitable match for a M&E/MEL Officer and Skincare Mogul..." 
        />
      </div>

      <div className="flex flex-col items-center justify-center py-10 border-2 border-dashed border-stone-200 rounded-3xl hover:bg-stone-50 transition-colors cursor-pointer group">
         <span className="font-sans text-[10px] uppercase font-black tracking-widest text-stone-400 group-hover:text-primary">Upload 3 Full-Length Headshots</span>
         <p className="text-[9px] italic text-stone-300 mt-1 tracking-wider">High-resolution only. We will be checking the grooming standards.</p>
         <input type="file" className="hidden" />
      </div>

      <button 
        type="button" 
        onClick={() => alert("Dossier received. The Sibling Council will deliberate. High stipend offers will be fast-tracked.")}
        className="w-full bg-stone-900 text-white py-8 uppercase text-[11px] font-bold tracking-[0.6em] hover:bg-primary transition-all shadow-2xl shadow-stone-200"
      >
        Submit for Audit
      </button>
    </form>
  </section>
);

export default Contact;