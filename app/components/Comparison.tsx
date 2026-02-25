export default function Comparison() {
  return (
    <section
      className="py-24 relative bg-surface-dark/30 border-y border-surface-border"
      id="comparison"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Why rent when you can own?
          </h2>
          <p className="text-slate-400">
            Stop paying monthly for compute you already have.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-0 bg-background-dark border border-surface-border rounded-2xl overflow-hidden relative">
          {/* Divider for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-surface-border -translate-x-1/2 z-10"></div>
          {/* Column 1: Them */}
          <div className="p-8 md:p-12 relative">
            <div className="flex items-center gap-3 mb-8 opacity-60">
              <span className="material-symbols-outlined text-3xl">
                cloud_off
              </span>
              <h3 className="text-xl font-bold">Cloud SaaS (Them)</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-slate-400">
                <span className="material-symbols-outlined text-red-500 shrink-0">
                  close
                </span>
                <div>
                  <strong className="text-slate-300 block">
                    Monthly Subscription
                  </strong>
                  <span className="text-sm">$30 - $50 every single month</span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-slate-400">
                <span className="material-symbols-outlined text-red-500 shrink-0">
                  close
                </span>
                <div>
                  <strong className="text-slate-300 block">
                    Limited Minutes
                  </strong>
                  <span className="text-sm">Capped at 300 mins processing</span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-slate-400">
                <span className="material-symbols-outlined text-red-500 shrink-0">
                  close
                </span>
                <div>
                  <strong className="text-slate-300 block">Privacy Risk</strong>
                  <span className="text-sm">
                    Your footage lives on their servers
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4 text-slate-400">
                <span className="material-symbols-outlined text-red-500 shrink-0">
                  close
                </span>
                <div>
                  <strong className="text-slate-300 block">Shared Queue</strong>
                  <span className="text-sm">Wait times during peak hours</span>
                </div>
              </li>
            </ul>
          </div>
          {/* Column 2: Us */}
          <div className="p-8 md:p-12 bg-surface-dark/50 relative">
            {/* Glow accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl pointer-events-none rounded-full"></div>
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-3xl text-primary">
                desktop_windows
              </span>
              <h3 className="text-xl font-bold text-white">Content Factory</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-green-400 shrink-0">
                  check_circle
                </span>
                <div>
                  <strong className="text-white block">One-time Payment</strong>
                  <span className="text-sm text-slate-400">
                    Pay once, own forever. No recurring fees.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-green-400 shrink-0">
                  check_circle
                </span>
                <div>
                  <strong className="text-white block">
                    Unlimited Processing
                  </strong>
                  <span className="text-sm text-slate-400">
                    Process 10 hours of video a day. We don't care.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-green-400 shrink-0">
                  check_circle
                </span>
                <div>
                  <strong className="text-white block">
                    100% Local Privacy
                  </strong>
                  <span className="text-sm text-slate-400">
                    Files never leave your hard drive.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-green-400 shrink-0">
                  check_circle
                </span>
                <div>
                  <strong className="text-white block">
                    Hardware Accelerated
                  </strong>
                  <span className="text-sm text-slate-400">
                    Uses your GPU for lightning fast exports.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
