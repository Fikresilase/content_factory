import Link from "next/link";

export default function Footer() {
  return (
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
          <span className="font-bold text-slate-200">Viralclip</span>
        </div>
        <div className="flex gap-6 text-sm text-slate-500">
          <Link className="hover:text-white" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="hover:text-white" href="/terms">
            Terms of Service
          </Link>
          <a className="hover:text-white" href="#">
            Twitter
          </a>
        </div>
        <div className="text-sm text-slate-600">
          © 2026 Viralclip. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
