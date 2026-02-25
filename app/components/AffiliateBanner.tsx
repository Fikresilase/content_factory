import Link from "next/link";

export default function AffiliateBanner() {
  return (
    <section
      id="partner"
      className="py-12 relative border-y border-surface-border bg-black/50 overflow-hidden"
    >
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-32 bg-primary/10 blur-[80px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-bold text-green-400 mb-4 uppercase tracking-wider">
            Partner Program
          </div>
          <h2 className="text-3xl font-black text-white mb-2">
            Share clips. Earn 40%.
          </h2>
          <p className="text-slate-400 max-w-lg">
            Are you a creator or affiliate Marketer? Use our free watermarked
            version to generate Unlimited clips, put your unique link in the
            bio, and get paid for every pro user you refer.
          </p>
        </div>

        <div className="shrink-0 flex flex-col items-center md:items-end gap-3">
          <Link
            href="/affiliates"
            className="h-12 px-8 rounded-xl bg-white text-black hover:bg-slate-200 font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <span className="material-symbols-outlined text-xl">link</span>
            Generate Affiliate Link
          </Link>
          <span className="text-xs text-slate-500 font-medium">
            Instant payouts via Dashboard
          </span>
        </div>
      </div>
    </section>
  );
}
