import fairyBgImg from "@/assets/refugio-fada-bg.jpg";

export default function FairyBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#080c08]">
      
      {/* Golden Fairy Oil Painting Background Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src={fairyBgImg} 
          alt="Fada Élfica Dourada - Fundo" 
          className="w-full h-full object-cover object-center transition-opacity duration-700"
        />
      </div>

      {/* 180deg Dark Forest Gradient Overlay matching refugio-da-fada.html */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(8,12,8,0.40) 0%, rgba(8,12,8,0.20) 35%, rgba(6,10,6,0.60) 78%, rgba(4,7,4,0.95) 100%)"
        }}
      />

      {/* Golden Hour Light Glow Ambient Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#c9a227]/15 rounded-full blur-[150px] pointer-events-none" />

    </div>
  );
}
