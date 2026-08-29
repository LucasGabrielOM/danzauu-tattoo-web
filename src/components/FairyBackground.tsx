import fairyImg from "@/assets/fairy-family-tree.jpg";

export default function FairyBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#faf7f2]">
      
      {/* Warm Parchment Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffefc] via-[#f7f2ea] to-[#eee4d3] opacity-90" />

      {/* Recreated Vintage Illustration Background Image (Module Import with Vite path resolution) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={fairyImg} 
          alt="Ilustração de Fundo" 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply filter contrast-125 brightness-105"
        />
      </div>

      {/* Soft Purple & Rose Ambient Color Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-rose-300/20 rounded-full blur-[140px] pointer-events-none" />

    </div>
  );
}
