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
        <div className="perspective-container max-w-4xl mx-auto relative group">
          <div className="tilted-mockup bg-[#121214] rounded-xl overflow-hidden aspect-video relative">
            {/* Fake UI Top Bar */}
            <div className="h-8 bg-[#1e1e22] flex items-center px-4 gap-2 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 text-center text-xs text-gray-500 font-mono">
                Content_Factory_Engine.exe
              </div>
            </div>
            {/* Fake UI Body */}
            <div className="flex h-[calc(100%-2rem)]">
              {/* Sidebar */}
              <div className="w-16 border-r border-white/5 flex flex-col items-center py-4 gap-6 text-gray-500">
                <span className="material-symbols-outlined text-primary">
                  movie_edit
                </span>
                <span className="material-symbols-outlined">analytics</span>
                <span className="material-symbols-outlined">settings</span>
              </div>
              {/* Main Content */}
              <div className="flex-1 p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
                <div className="grid grid-cols-3 gap-4 h-full">
                  <div className="col-span-2 bg-black/40 rounded-lg border border-white/5 relative overflow-hidden group-hover:border-primary/30 transition-colors">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-6xl text-gray-700">
                        play_circle
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-primary"></div>
                    </div>
                    <img
                      className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                      alt="Abstract video timeline interface showing waveform"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHnJTrcslEqaPXE8k-LHOoYQojywq6HIx-63GcSBBzifrMqEg4bDlc-MZTPtTjdZHbUhktwqeMKLncwkfDrO_aE0gB9mBFH_wUFNDyxvLGMADFe8mdhAOACg7w8yy9qiasbnPrIbdKlbPxaivtsF6rkwDuYsWIcKkeMBAN_ntU1d1bfkgwY6QdOIl_yClDEHmgHncacSwxxgBme-0ATdVTuJnpnF7JCbOcCmSbwx2GA9jhA7c8p37puhLvS6jcaxA2HZ_xSEPRNpJI"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="bg-surface-dark p-3 rounded-lg border border-white/5 h-1/3">
                      <div className="h-2 w-12 bg-gray-700 rounded mb-2"></div>
                      <div className="h-1.5 w-full bg-gray-800 rounded mb-1"></div>
                      <div className="h-1.5 w-2/3 bg-gray-800 rounded"></div>
                    </div>
                    <div className="bg-surface-dark p-3 rounded-lg border border-white/5 h-1/3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-yellow-400 text-sm">
                          bolt
                        </span>
                        <div className="h-2 w-16 bg-gray-700 rounded"></div>
                      </div>
                      <div className="h-1.5 w-full bg-gray-800 rounded"></div>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg border border-primary/20 flex-1 flex flex-col justify-center items-center">
                      <span className="text-2xl font-bold text-primary">
                        98%
                      </span>
                      <span className="text-xs text-primary/70">
                        Viral Score
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-12 text-sm text-slate-500 font-medium">
          Trusted by 2,000+ creators who ditched the cloud
        </p>
      </div>
    </section>
  );
}
