const BASE = import.meta.env.BASE_URL;

export default function FairyBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#fdfbf7]">
      
      {/* Soft warm ambient lighting background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fefcf8] via-[#f9f5ed] to-[#f3ebd9] opacity-90" />

      {/* Main Vintage Illustration Overlay (Multiply Blend Mode for Clean Digital Rendering) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-multiply transition-opacity duration-700"
        style={{
          backgroundImage: `url(${BASE}assets/fairy-family-tree.jpg)`,
          filter: "contrast(115%) brightness(102%)"
        }}
      />

      {/* Subtle Purple & Rose Ambient Accents to tie into Dan's Aesthetic */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-300/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Frame Vignette to Soften Edges */}
      <div className="absolute inset-0 bg-radial-vignette opacity-30 pointer-events-none" />

    </div>
  );
}
