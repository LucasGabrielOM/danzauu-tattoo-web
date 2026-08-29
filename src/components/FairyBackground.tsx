import fairyImg from "@/assets/fairy-family-tree.jpg";

export default function FairyBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0c130d]">
      
      {/* Background Fairy Illustration with Refúgio da Fada Linear Gradient Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={fairyImg} 
          alt="Refúgio da Fada - Fundo" 
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125 brightness-90"
        />
      </div>

      {/* 180deg Forest Gradient Mask matching refugio-da-fada.html */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(8,12,8,0.45) 0%, rgba(8,12,8,0.25) 35%, rgba(6,10,6,0.65) 78%, rgba(12,19,13,0.95) 100%)"
        }}
      />

      {/* Subtle Gold & Moss Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#c9a227]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#6b7d5e]/15 rounded-full blur-[140px] pointer-events-none" />

    </div>
  );
}
