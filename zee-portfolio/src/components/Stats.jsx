const Stats = ({ stats }) => (
  <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
    {stats.map((stat, i) => (
      <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
        <p className="text-3xl font-bold text-dark">{stat.value}</p>
        <div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-primary w-[90%]" />
        </div>
      </div>
    ))}
  </section>
);

export default Stats;