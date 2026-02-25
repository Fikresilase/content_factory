import Link from "next/link";

export default function Navbar() {
  return (
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
          <a className="hover:text-white transition-colors" href="#comparison">
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
  );
}
