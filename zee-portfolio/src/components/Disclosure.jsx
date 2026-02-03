import { Star, XCircle, AlertTriangle } from 'lucide-react';

const Disclosure = ({ cons, warning }) => {
  return (
    <div className="bg-rose-50/50 p-8 rounded-[2.5rem] border border-rose-100/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <AlertTriangle size={80} className="text-rose-500" />
      </div>
      
      <h2 className="text-xs font-black uppercase tracking-[0.2em] text-accent mb-6 flex items-center gap-2">
        <Star size={14} /> Critical Disclosures
      </h2>
      
      <div className="space-y-4">
        {cons.map(con => (
          <div key={con} className="flex items-start gap-3 group">
            <XCircle className="text-rose-300 mt-1 group-hover:text-rose-500 transition-colors" size={18} />
            <span className="text-slate-700 font-medium leading-tight">{con}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 p-5 bg-white rounded-2xl border border-rose-100 shadow-sm">
        <p className="text-[13px] text-slate-500 leading-relaxed italic">
          <span className="font-bold text-rose-500 not-italic block mb-1">Sibling Advisory:</span>
          "{warning}"
        </p>
      </div>
    </div>
  );
};

export default Disclosure;