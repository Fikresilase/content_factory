export default function Features() {
  return (
    <section className="py-24 bg-background-dark" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
            Engineered for
            <br />
            Power Users
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Box 1: Universal Import & Stealth Mode (Large) */}
          <div className="md:col-span-2 row-span-1 rounded-3xl bg-surface-dark border border-surface-border p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
              <span className="material-symbols-outlined text-6xl">
                cloud_download
              </span>
            </div>
            <div className="h-full flex flex-col justify-between relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Universal Import
                </h3>
                <p className="text-slate-400 max-w-sm">
                  Paste a YouTube link or drag-and-drop local files. Support for
                  bulk uploads and automated CLI processing.
                </p>
              </div>
              <div className="font-mono text-xs md:text-sm bg-black p-4 rounded-xl border border-surface-border text-green-400 shadow-lg mt-6 w-full max-w-lg">
                <span className="text-slate-500">$</span> content-factory --url
                "https://youtu.be/..." --detect-viral --export
                <br />
                <span className="text-slate-500">&gt;</span>{" "}
                <span className="animate-pulse">
                  Fetching YouTube stream... Analyzing clips...
                </span>
              </div>
            </div>
          </div>
          {/* Box 2: BYO Brain */}
          <div className="md:col-span-1 rounded-3xl bg-surface-dark border border-surface-border p-8 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">BYO Brain</h3>
              <p className="text-slate-400 text-sm">
                Plug in your own Gemini 1.5 Flash API key. Use custom prompts
                for clip selection.
              </p>
            </div>
          </div>
          {/* Box 3: Auto-Cameraman */}
          <div className="md:col-span-1 rounded-3xl bg-surface-dark border border-surface-border p-8 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <span className="material-symbols-outlined">
                  center_focus_strong
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Auto-Cameraman
              </h3>
              <p className="text-slate-400 text-sm">
                Intelligent face detection keeps the speaker centered, even in
                9:16 crops.
              </p>
            </div>
            {/* Visual for tracking */}
            <div className="mt-4 relative h-20 w-full bg-black/50 rounded-lg border border-white/5 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-primary rounded-lg shadow-[0_0_15px_rgba(236,70,153,0.5)]"></div>
              <div className="absolute top-2 right-2 text-[10px] text-primary font-mono">
                TRACKING: ACTIVE
              </div>
            </div>
          </div>
          {/* Box 4: Hormozi Auto-Captions (Large) */}
          <div className="md:col-span-2 rounded-3xl bg-surface-dark border border-surface-border p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="flex flex-col md:flex-row h-full items-center gap-8">
              <div className="flex-1 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Hormozi Auto-Captions
                </h3>
                <p className="text-slate-400">
                  AI-powered auto captioning with viral styles. Bold, colorful,
                  and perfectly timed to the voice. No manual keyframing
                  required.
                </p>
              </div>
              <div className="flex-1 w-full relative group-hover:scale-105 transition-transform duration-500">
                <div className="aspect-video bg-black rounded-xl overflow-hidden relative border border-surface-border shadow-2xl">
                  <img
                    className="w-full h-full object-cover opacity-60"
                    alt="Meeting room with people talking"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhaDQFMjJbuFchi8Um7QSrAiW4o5Do_fYOfsx6y1NOcWcKo9Nik36KX_N4zhq0VIfKSBPoVL1EZT_-n5HR5dXTfpkwds2xvfwOecdf4RQtbM_1bJCq64qJkXLbARZcjFW4LmRPIE7OTlkm8q_WPJMBuRh1C6w5MhFc8AoriKXFMXTToRjkBkef6yAbyxrm1Z6dRMO4K7S4H1Jh5Yzti5VC4Nk-obvscjX2jSS8gkzDWfM00QLxUkcoYj0-mnUQKdZr4Mk-RS2liFMl"
                  />
                  <div className="absolute inset-0 flex items-end justify-center pb-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p
                      className="text-3xl font-black text-yellow-400 uppercase drop-shadow-md text-center leading-none"
                      style={{ textShadow: "2px 2px 0px #000" }}
                    >
                      SCALE YOUR
                      <br />
                      <span className="text-white">CONTENT</span>{" "}
                      <span className="text-green-400">FAST</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
