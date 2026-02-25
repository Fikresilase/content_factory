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
  );
}
