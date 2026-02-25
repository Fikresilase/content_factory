export default function FAQ() {
  return (
    <section className="py-20 border-t border-surface-border bg-background-dark">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Common Questions
        </h2>
        <div className="space-y-4">
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 py-4 border-b border-surface-border text-slate-200 hover:text-primary transition-colors">
              <h3 className="font-medium text-lg">Does this work on Mac?</h3>
              <span className="material-symbols-outlined transition duration-300 group-open:-rotate-180">
                expand_more
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-slate-400 mb-4">
              Currently, Content Factory is a Windows-exclusive application
              optimized for CUDA (NVIDIA) and DirectX acceleration. A Mac
              version is in development for late 2026.
            </p>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 py-4 border-b border-surface-border text-slate-200 hover:text-primary transition-colors">
              <h3 className="font-medium text-lg">
                What are the system requirements?
              </h3>
              <span className="material-symbols-outlined transition duration-300 group-open:-rotate-180">
                expand_more
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-slate-400 mb-4">
              We recommend Windows 10 or 11, 16GB RAM, and a dedicated GPU
              (NVIDIA GTX 1060 or better) for optimal performance. It runs on
              CPU-only modes but will be slower.
            </p>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 py-4 border-b border-surface-border text-slate-200 hover:text-primary transition-colors">
              <h3 className="font-medium text-lg">
                Is it really a one-time payment?
              </h3>
              <span className="material-symbols-outlined transition duration-300 group-open:-rotate-180">
                expand_more
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-slate-400 mb-4">
              Yes. You buy the license key once, and the software is yours to
              keep. Minor version updates (v2.1, v2.2) are free. Major version
              upgrades (v3.0) may have an upgrade fee, but v2.0 will continue to
              work forever.
            </p>
          </details>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 py-4 border-b border-surface-border text-slate-200 hover:text-primary transition-colors">
              <h3 className="font-medium text-lg">
                Do I need my own API keys?
              </h3>
              <span className="material-symbols-outlined transition duration-300 group-open:-rotate-180">
                expand_more
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-slate-400 mb-4">
              Yes, you bring your own free Google Gemini API key. We provide a
              step-by-step tutorial inside the app. Gemini 1.5 Flash gives you
              1,500 free requests per day, meaning your AI costs are essentially
              $0.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
