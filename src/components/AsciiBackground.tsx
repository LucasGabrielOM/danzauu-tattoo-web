import { useEffect, useRef } from "react";

const BASE = import.meta.env.BASE_URL;

// Matrix character set (Katakana + Numbers + Cyber Sigil Chars)
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

    let imgLoaded = false;
    const img = new Image();
    
    // Build image paths with base fallback
    const imgPath = `${BASE}assets/flash-statue-anime.jpg`.replace(/\/\//g, '/');
    img.src = imgPath;

    img.onload = () => {
      imgLoaded = true;
      updateOffscreen();
    };

    // Draw fallback procedural hands/sword graphic if image hasn't loaded yet
    const drawFallbackGraphic = (w: number, h: number) => {
      if (!offCtx) return;
      offscreen.width = w;
      offscreen.height = h;

      offCtx.fillStyle = "#000000";
      offCtx.fillRect(0, 0, w, h);

      // Draw glowing central artistic silhouette (sword & sigil shapes)
      const cx = w / 2;
      const cy = h / 2;

      offCtx.fillStyle = "#ffffff";
      
      // Central vertical blade shape
      offCtx.fillRect(cx - 2, cy - h * 0.35, 4, h * 0.7);

      // Crossguard
      offCtx.fillRect(cx - w * 0.25, cy - h * 0.1, w * 0.5, 4);

      // Moon crescents
      offCtx.beginPath();
      offCtx.arc(cx, cy - h * 0.15, w * 0.18, 0, Math.PI * 2);
      offCtx.fill();

      offCtx.beginPath();
      offCtx.arc(cx, cy + h * 0.15, w * 0.18, 0, Math.PI * 2);
      offCtx.fill();
    };

    let columns = 0;
    let drops: number[] = [];

    const handleResize = () => {
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.scale(dpr, dpr);

      // Responsive cell size (9px on mobile, 11px on desktop)
      const cellSize = width < 640 ? 9 : 11;
      columns = Math.ceil(width / cellSize);

      if (drops.length !== columns) {
        drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -60));
      }

      if (imgLoaded) {
        updateOffscreen();
      } else {
        const cols = Math.ceil(width / cellSize);
        const rows = Math.ceil(height / cellSize);
        drawFallbackGraphic(cols, rows);
      }
    };

    const updateOffscreen = () => {
      if (!offCtx || !imgLoaded) return;
      const cellSize = width < 640 ? 9 : 11;
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      offscreen.width = cols;
      offscreen.height = rows;
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

      // Pitch black background base
      ctx.fillStyle = "#020617"; // zinc-950 / black
      ctx.fillRect(0, 0, width, height);

      // Fetch pixel data from offscreen canvas
      let imgData: ImageData | null = null;
      if (offCtx && offscreen.width > 0 && offscreen.height > 0) {
        try {
          imgData = offCtx.getImageData(0, 0, cols, rows);
        } catch {
          imgData = null;
        }
      }

      ctx.font = `bold ${cellSize}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const waveSpeed = 2.2;
      const waveFreq = 0.05;

      // Render Matrix ASCII grid
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * cellSize + cellSize / 2;
          const y = r * cellSize + cellSize / 2;

          let lum = 0.2;

          if (imgData) {
            const idx = (r * cols + c) * 4;
            const sr = imgData.data[idx];
            const sg = imgData.data[idx + 1];
            const sb = imgData.data[idx + 2];

            // Luminance calculation
            lum = (0.299 * sr + 0.587 * sg + 0.114 * sb) / 255;
            
            // Contrast (115%) & Brightness (12%)
            lum = (lum - 0.5) * 1.15 + 0.5 + 0.12;
            lum = Math.max(0, Math.min(1, lum));
          }

          // Wave pulse motion
          const wave = Math.sin(c * waveFreq + r * waveFreq + elapsed * waveSpeed) * 0.35;
          const adjustedLum = Math.max(0.05, Math.min(1, lum + wave * 0.2));

          const dropY = drops[c] || 0;
          const isLeadChar = Math.floor(dropY) === r;
          const isInTrail = r <= dropY && r > dropY - 14;

          // Render glyph if inside rain drop trail OR image subject luminance > threshold
          if (isInTrail || adjustedLum > 0.2) {
            // Select matrix character based on luminance & time flicker
            const charIndex = Math.floor((adjustedLum + Math.sin(elapsed * 3 + c * 2 + r) * 0.15) * (MATRIX_CHARS.length - 1)) % MATRIX_CHARS.length;
            const char = MATRIX_CHARS[Math.max(0, charIndex)];

            if (isLeadChar) {
              // Glowing head of rain
              ctx.fillStyle = "#ffffff";
              ctx.shadowColor = "#4ade80";
              ctx.shadowBlur = 10;
            } else {
              // Matrix Green / Cyber Emerald palette matching 21st.dev style
              ctx.shadowBlur = 0;

              if (adjustedLum > 0.65) {
                // High brightness subject (Hands / Statue outline) -> Vibrant Matrix Green / Cyan
                ctx.fillStyle = `rgba(134, 239, 172, ${Math.min(1, adjustedLum * 1.1)})`; // #86efac
              } else if (adjustedLum > 0.4) {
                // Mid brightness -> Classic Matrix Green
                ctx.fillStyle = `rgba(34, 197, 94, ${Math.min(0.9, adjustedLum * 1.0)})`; // #22c55e
              } else if (isInTrail) {
                // Rain trail -> Muted Green
                ctx.fillStyle = `rgba(22, 163, 74, ${Math.max(0.2, (14 - (dropY - r)) / 14 * 0.7)})`;
              } else {
                // Deep background glyphs
                ctx.fillStyle = `rgba(21, 128, 61, ${adjustedLum * 0.5})`;
              }
            }

            ctx.fillText(char, x, y);
          }
        }
      }

      // Update rain drops animation
      for (let i = 0; i < columns; i++) {
        drops[i] += 0.45;
        if (drops[i] > rows && Math.random() > 0.965) {
          drops[i] = Math.floor(Math.random() * -20);
        }
      }

      // Vignette effect (intensity: 38%)
      const grad = ctx.createRadialGradient(
        width / 2, height / 2, Math.min(width, height) * 0.25,
        width / 2, height / 2, Math.max(width, height) * 0.8
      );
      grad.addColorStop(0, "rgba(2, 6, 23, 0.1)");
      grad.addColorStop(1, "rgba(2, 6, 23, 0.85)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Bloom Glow effect (intensity: 25%)
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = "rgba(34, 197, 94, 0.03)";
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
      className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-90 transition-opacity duration-500"
    />
  );
}
