export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-zinc-950">
      
      {/* Top Crisp Light Glow */}
      <div className="absolute top-0 left-0 right-0 h-[45vh] bg-gradient-to-b from-white/20 via-purple-100/10 to-transparent blur-xl pointer-events-none" />

      {/* Main Soft Purple / Lavender Ambient Glow (Matching the image) */}
      <div className="absolute bottom-0 left-0 right-0 h-[70vh] bg-gradient-to-t from-purple-600/40 via-purple-400/20 to-transparent blur-3xl pointer-events-none" />

      {/* Center Animated Purple Mesh Orb */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[1400px] h-[700px] rounded-full bg-gradient-to-tr from-purple-600/35 via-violet-500/25 to-purple-300/15 blur-[130px] pointer-events-none" />

      {/* Corner Ambient Accents */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none" />

    </div>
  );
}
