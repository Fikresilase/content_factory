export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 grid-bg pointer-events-none"></div>
      {/* Glow effect behind headline */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-primary/30 text-xs font-medium text-primary mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          v2.0 Desktop Engine Released
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-gradient">
          Stop Renting Your AI Clipper.
          <br />
          <span className="text-white">Own the Desktop Engine.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Unlimited local processing. No monthly fees. 100% Privacy.
          <br className="hidden md:block" />
          Works both on CPU and GPU for Windows 10/11.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#partner"
            className="h-12 px-8 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-base shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-xl">bolt</span>
            Get your affiliate link
          </a>
          <a
            href="#pricing"
            className="h-12 px-8 rounded-full bg-surface-dark border border-surface-border hover:bg-surface-border hover:text-white text-slate-300 font-medium text-base transition-all flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-xl">download</span>
            Download for Free
          </a>
        </div>
        {/* 3D Mockup */}

        <p className="mt-12 text-sm text-slate-500 font-medium">
          Trusted by 2,000+ creators who ditched the cloud
        </p>
      </div>
    </section>
  );
}
