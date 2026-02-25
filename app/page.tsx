import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background-dark text-slate-100 antialiased selection:bg-primary selection:text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-surface-border bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl">cut</span>
            </div>
            <span className="font-bold text-lg tracking-tight">
              Content Factory
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a className="hover:text-white transition-colors" href="#features">
              Features
            </a>
            <a
              className="hover:text-white transition-colors"
              href="#comparison"
            >
              Compare
            </a>
            <a className="hover:text-white transition-colors" href="#pricing">
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              className="hidden sm:flex items-center justify-center px-5 py-2 rounded-full bg-surface-dark border border-surface-border text-sm font-medium hover:bg-surface-border transition-colors"
              href="#pricing"
            >
              Login
            </Link>
            <Link
              className="flex items-center justify-center px-5 py-2 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-bold shadow-glow transition-all"
              href="#pricing"
            >
              Get Access
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
              <span className="material-symbols-outlined text-xl">
                download
              </span>
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

      {/* Comparison Section */}
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
                    <span className="text-sm">
                      $30 - $50 every single month
                    </span>
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
                    <span className="text-sm">
                      Capped at 300 mins processing
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-slate-400">
                  <span className="material-symbols-outlined text-red-500 shrink-0">
                    close
                  </span>
                  <div>
                    <strong className="text-slate-300 block">
                      Privacy Risk
                    </strong>
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
                    <strong className="text-slate-300 block">
                      Shared Queue
                    </strong>
                    <span className="text-sm">
                      Wait times during peak hours
                    </span>
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
                <h3 className="text-xl font-bold text-white">
                  Content Factory
                </h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-green-400 shrink-0">
                    check_circle
                  </span>
                  <div>
                    <strong className="text-white block">
                      One-time Payment
                    </strong>
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

      {/* Bento Grid Features */}
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
                    Paste a YouTube link or drag-and-drop local files. Support
                    for bulk uploads and automated CLI processing.
                  </p>
                </div>
                <div className="font-mono text-xs md:text-sm bg-black p-4 rounded-xl border border-surface-border text-green-400 shadow-lg mt-6 w-full max-w-lg">
                  <span className="text-slate-500">$</span> content-factory
                  --url "https://youtu.be/..." --detect-viral --export
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
                    AI-powered auto captioning with viral styles. Bold,
                    colorful, and perfectly timed to the voice. No manual
                    keyframing required.
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

      {/* Affiliate Banner */}
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

      {/* Pricing Section */}
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
              <h3 className="text-2xl font-bold text-white mb-2">
                Free Version
              </h3>
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

      {/* FAQ */}
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
                upgrades (v3.0) may have an upgrade fee, but v2.0 will continue
                to work forever.
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
                1,500 free requests per day, meaning your AI costs are
                essentially $0.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-surface-border bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white text-xs">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: "14px" }}
              >
                cut
              </span>
            </div>
            <span className="font-bold text-slate-200">Content Factory</span>
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <a className="hover:text-white" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white" href="#">
              Terms of Service
            </a>
            <a className="hover:text-white" href="#">
              Twitter
            </a>
          </div>
          <div className="text-sm text-slate-600">
            © 2026 Content Factory. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
