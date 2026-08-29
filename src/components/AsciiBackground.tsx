import { useEffect, useRef } from "react";

const BASE = import.meta.env.BASE_URL;

// Matrix character set (Katakana + Numbers + Cyber Symbols)
const MATRIX_CHARS = "0123456789ABCDEFｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ✣✤✦";

export default function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Offscreen canvas for sampling source photo pixels
    const offscreen = document.createElement("canvas");
    const offCtx = offscreen.getContext("2d", { willReadFrequently: true });

    // Load source photo (Tattoo / Flash Autoral Image)
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = `${BASE}assets/flash-statue-anime.jpg`;

    let imgLoaded = false;
    img.onload = () => {
      imgLoaded = true;
      updateOffscreen();
    };

    // Matrix rain drops positions for animation
    let columns = 0;
    let drops: number[] = [];

    const handleResize = () => {
      if (!canvas) return;
      
      // Responsive sizing capped for performance on mobile
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);

      // Adjust cellSize responsively (smaller on mobile for detail)
      const cellSize = width < 640 ? 9 : 11;
      columns = Math.ceil(width / cellSize);

      if (drops.length !== columns) {
        drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
      }

      if (imgLoaded) {
        updateOffscreen();
      }
    };

    const updateOffscreen = () => {
      if (!offCtx || !imgLoaded) return;
      const cellSize = width < 640 ? 9 : 11;
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      offscreen.width = cols;
      offscreen.height = rows;

      // Draw image scaled to grid size for fast pixel sampling
      offCtx.drawImage(img, 0, 0, cols, rows);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    let startTime = performance.now();

    const render = (now: number) => {
      const elapsed = (now - startTime) * 0.001; // in seconds

      const cellSize = width < 640 ? 9 : 11;
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      // 1. Draw Background Mode (bgMode: "blur", bgOpacity: 40)
      ctx.fillStyle = "#09090b"; // zinc-950
      ctx.fillRect(0, 0, width, height);

      if (imgLoaded && offCtx) {
        // Draw blurred faint image background
        ctx.globalAlpha = 0.40;
        ctx.drawImage(img, 0, 0, width, height);
        ctx.globalAlpha = 1.0;

        // Darken overlay
        ctx.fillStyle = "rgba(9, 9, 11, 0.75)";
        ctx.fillRect(0, 0, width, height);
      }

      // Sample image pixels if available
      let imgData: ImageData | null = null;
      if (imgLoaded && offCtx && offscreen.width > 0 && offscreen.height > 0) {
        try {
          imgData = offCtx.getImageData(0, 0, cols, rows);
        } catch {
          imgData = null;
        }
      }

      // 2. Render Matrix & ASCII Grid
      ctx.font = `${cellSize}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Wave animation parameters: animStyle="wave", animSpeed=100, animIntensity=60
      const waveFreq = 0.05;
      const waveSpeed = 2.5;
      const waveAmp = 0.6;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * cellSize + cellSize / 2;
          const y = r * cellSize + cellSize / 2;

          let lum = 0.3; // Default fallback luminance
          let rVal = 50, gVal = 160, bVal = 220;

          if (imgData) {
            const idx = (r * cols + c) * 4;
            const sr = imgData.data[idx];
            const sg = imgData.data[idx + 1];
            const sb = imgData.data[idx + 2];

            // Luminance formula
            lum = (0.299 * sr + 0.587 * sg + 0.114 * sb) / 255;

            // Apply Brightness (12%) & Contrast (115%)
            lum = (lum - 0.5) * 1.15 + 0.5 + 0.12;
            lum = Math.max(0, Math.min(1, lum));

            rVal = sr;
            gVal = sg;
            bVal = sb;
          }

          // Wave motion offset over time
          const wave = Math.sin(c * waveFreq + r * waveFreq + elapsed * waveSpeed) * waveAmp;
          const adjustedLum = Math.max(0.1, Math.min(1, lum + wave * 0.2));

          // Matrix rain animation logic
          const dropY = drops[c] || 0;
          const isLeadChar = Math.floor(dropY) === r;
          const isInTrail = r <= dropY && r > dropY - 12;

          if (isInTrail || adjustedLum > 0.35) {
            // Select character from charSet based on luminance and time
            const charIndex = Math.floor((adjustedLum + Math.sin(elapsed + c + r) * 0.1) * (MATRIX_CHARS.length - 1)) % MATRIX_CHARS.length;
            const char = MATRIX_CHARS[Math.max(0, charIndex)];

            if (isLeadChar) {
              // Glowing head of rain
              ctx.fillStyle = "#ffffff";
              ctx.shadowColor = "#3ca6ff";
              ctx.shadowBlur = 8;
            } else {
              // Matrix emerald & cyan tint (#3ca6ff blend)
              const alpha = Math.max(0.15, adjustedLum * 0.85);
              
              // Mix cyber cyan/rose with image luminance
              const greenComp = Math.floor(gVal * 0.5 + adjustedLum * 100);
              const blueComp = Math.floor(bVal * 0.4 + adjustedLum * 100);
              const redComp = Math.floor(rVal * 0.4);

              ctx.fillStyle = `rgba(${redComp}, ${greenComp}, ${blueComp}, ${alpha})`;
              ctx.shadowBlur = 0;
            }

            ctx.fillText(char, x, y);
          }
        }
      }

      // Update matrix drops
      for (let i = 0; i < columns; i++) {
        drops[i] += 0.35;
        if (drops[i] > rows && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }

      // 3. Post-effect: Vignette (enabled: true, intensity: 38)
      const grad = ctx.createRadialGradient(
        width / 2, height / 2, Math.min(width, height) * 0.3,
        width / 2, height / 2, Math.max(width, height) * 0.75
      );
      grad.addColorStop(0, "rgba(9, 9, 11, 0)");
      grad.addColorStop(1, "rgba(9, 9, 11, 0.75)"); // Vignette 38% intensity

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 4. Post-effect: Bloom Glow (enabled: true, intensity: 25)
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = "rgba(60, 166, 255, 0.03)";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-60 transition-opacity duration-700"
    />
  );
}
