export default function Features() {
  const features = [
    {
      icon: "cloud_download",
      title: "Universal Import",
      desc: "Paste YouTube links or bulk-drop local files for instant processing.",
    },
    {
      icon: "psychology",
      title: "BYO Brain",
      desc: "Plug in your OpenAI API key for unlimited, free AI clip selection.",
    },
    {
      icon: "center_focus_strong",
      title: "Auto-Cameraman",
      desc: "Intelligent face detection keeps speakers centered in 9:16 crops.",
    },
    {
      icon: "subtitles",
      title: "Viral Captions",
      desc: "Hormozi-style captions perfectly timed to voice. Zero manual work.",
    },
  ];

  return (
    <section className="py-20 bg-background-dark" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black mb-12 text-center tracking-tight">
          Engineered for Power Users
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-surface-dark border border-surface-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">{f.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
