export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-white">
      
      {/* Top Pure White Base */}
      <div className="absolute top-0 inset-x-0 h-[40vh] bg-gradient-to-b from-white via-white to-purple-50/50" />

      {/* Middle Soft Lavender Mesh Glow */}
      <div className="absolute top-[30vh] left-1/2 -translate-x-1/2 w-[1400px] h-[600px] rounded-full bg-gradient-to-tr from-purple-200/50 via-purple-300/40 to-violet-100/30 blur-[100px] pointer-events-none" />

      {/* Bottom Rich Purple Gradient (Matching the exact uploaded photo) */}
      <div className="absolute bottom-0 inset-x-0 h-[65vh] bg-gradient-to-t from-purple-400 via-purple-300/80 to-transparent pointer-events-none" />

      {/* Deep Purple Base Bar at the very bottom */}
      <div className="absolute bottom-0 inset-x-0 h-[45vh] bg-gradient-to-t from-purple-500/90 via-purple-400/60 to-transparent blur-xl pointer-events-none" />

      {/* Ambient Side Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-violet-300/30 rounded-full blur-3xl pointer-events-none" />

    </div>
  );
}
