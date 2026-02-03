import React from 'react';

const Experience = ({ title, items, isProfessional }) => {
  return (
    <div>
      <h2 className="font-serif text-sm italic text-primary mb-10 tracking-widest uppercase">
        {title}
      </h2>
      <div className="space-y-12">
        {items.map((item, i) => (
          <div key={i} className="group border-b border-stone-100 pb-6">
            <div className="flex justify-between items-end mb-2">
              <h3 className="font-serif text-2xl text-stone-800 group-hover:italic transition-all">
                {isProfessional ? item.company : item.name}
              </h3>
              <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400">
                {item.type}
              </span>
            </div>
            <p className="font-sans text-xs uppercase tracking-widest text-stone-500 font-bold">
              {isProfessional ? item.role : "Founder & Lead"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;