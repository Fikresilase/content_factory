export default function Pricing() {
  return (
    <section
      className="py-24 relative overflow-hidden bg-background-dark"
      id="pricing"
    >
      <div className="absolute inset-0 bg-surface-dark/20 pointer-events-none"></div>
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Pricing
          </h2>
          <p className="text-slate-400 text-lg">
            Download for free, or unlock the full engine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier Card */}
          <div className="bg-surface-dark rounded-3xl p-8 md:p-10 border border-surface-border flex flex-col h-full relative">
            <h3 className="text-2xl font-bold text-white mb-2">Free Version</h3>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-5xl font-black text-white tracking-tighter">
                $0
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-8 h-10">
              Test the engine and start clipping immediately. No credit card
              required.
            </p>

            <button className="w-full h-12 rounded-xl bg-transparent border border-surface-border hover:bg-surface-border text-white font-bold transition-all mb-8">
              Download .exe (Free)
            </button>

            <div className="space-y-4 text-left flex-1">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <span className="material-symbols-outlined text-slate-500 text-lg">
                  check
                </span>
                Unlimited Local Processing
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <span className="material-symbols-outlined text-slate-500 text-lg">
                  check
                </span>
                BYO Gemini API Key
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300 opacity-60">
                <span className="material-symbols-outlined text-red-400 text-lg">
                  close
                </span>
                <span>Exports have bouncing watermark</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300 opacity-60">
                <span className="material-symbols-outlined text-red-400 text-lg">
                  close
                </span>
                <span>Stealth Mode Disabled</span>
              </div>
            </div>
          </div>

          {/* Pro Tier Card (Glowing) */}
          <div className="relative bg-surface-dark rounded-3xl p-1 border border-primary/50 shadow-glow lg:hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg z-20">
              Lifetime Deal
            </div>

            <div className="bg-[#0c0c0e] rounded-[26px] p-8 md:p-10 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Creator License
              </h3>
              <div className="flex items-end gap-3 mb-4">
                <span className="text-slate-500 line-through text-xl pb-1">
                  $97
                </span>
                <span className="text-5xl font-black text-white tracking-tighter">
                  $37
                </span>
                <span className="text-slate-400 text-sm font-medium pb-2">
                  / lifetime
                </span>
              </div>
              <p className="text-slate-400 text-sm mb-8 h-10">
                One-time payment. Removes all watermarks and unlocks copyright
                evasion.
              </p>

              <button className="w-full h-14 rounded-full bg-primary hover:bg-primary-dark text-white font-bold shadow-glow transition-all mb-8 flex items-center justify-center gap-2 group">
                Get Instant Access
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>

              <div className="space-y-4 text-left flex-1">
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  <strong>No Watermarks</strong>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  <strong>Unlock Stealth Mode</strong>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  Unlimited Local Processing
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  Windows 10/11 Installer (.exe)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xs text-slate-500">
            Secure payment via Stripe & Polar.sh. <br />
            30-Day Money Back Guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}
