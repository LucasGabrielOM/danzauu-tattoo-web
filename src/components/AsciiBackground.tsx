import { useEffect, useRef } from "react";

const BASE = import.meta.env.BASE_URL;

// Matrix character set (Katakana + Cyber Symbols + Numbers)
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

    // Load source photo
    const img = new Image();
    img.src = `${BASE}assets/flash-statue-anime.jpg`;

    let imgLoaded = false;
    img.onload = () => {
      imgLoaded = true;
      updateOffscreen();
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

      const cellSize = width < 640 ? 10 : 12;
      columns = Math.ceil(width / cellSize);

      if (drops.length !== columns) {
        drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -60));
      }

      if (imgLoaded) {
        updateOffscreen();
      }
    };

    const updateOffscreen = () => {
      if (!offCtx || !imgLoaded) return;
      const cellSize = width < 640 ? 10 : 12;
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
      const elapsed = (now - startTime) * 0.001;

      const cellSize = width < 640 ? 10 : 12;
      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      // Background base
      ctx.fillStyle = "#09090b";
      ctx.fillRect(0, 0, width, height);

      // Drawn source background at bgOpacity: 40%
      if (imgLoaded) {
        ctx.globalAlpha = 0.35;
        ctx.drawImage(img, 0, 0, width, height);
        ctx.globalAlpha = 1.0;

        ctx.fillStyle = "rgba(9, 9, 11, 0.70)";
        ctx.fillRect(0, 0, width, height);
      }

      // Sample pixels
      let imgData: ImageData | null = null;
      if (imgLoaded && offCtx && offscreen.width > 0 && offscreen.height > 0) {
        try {
          imgData = offCtx.getImageData(0, 0, cols, rows);
        } catch {
          imgData = null;
        }
      }

      ctx.font = `bold ${cellSize}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const waveSpeed = 2.0;
      const waveFreq = 0.04;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * cellSize + cellSize / 2;
          const y = r * cellSize + cellSize / 2;

          let lum = 0.35;
          let rVal = 60, gVal = 160, bVal = 240;

          if (imgData) {
            const idx = (r * cols + c) * 4;
            const sr = imgData.data[idx];
            const sg = imgData.data[idx + 1];
            const sb = imgData.data[idx + 2];

            lum = (0.299 * sr + 0.587 * sg + 0.114 * sb) / 255;
            // Contrast (115%) & Brightness (12%)
            lum = (lum - 0.5) * 1.15 + 0.5 + 0.12;
            lum = Math.max(0, Math.min(1, lum));

            rVal = sr;
            gVal = sg;
            bVal = sb;
          }

          // Animated wave
          const wave = Math.sin(c * waveFreq + r * waveFreq + elapsed * waveSpeed) * 0.5;
          const adjustedLum = Math.max(0.1, Math.min(1, lum + wave * 0.25));

          const dropY = drops[c] || 0;
          const isLeadChar = Math.floor(dropY) === r;
          const isInTrail = r <= dropY && r > dropY - 14;

          if (isInTrail || adjustedLum > 0.25) {
            const charIndex = Math.floor((adjustedLum + Math.sin(elapsed * 2 + c + r) * 0.1) * (MATRIX_CHARS.length - 1)) % MATRIX_CHARS.length;
            const char = MATRIX_CHARS[Math.max(0, charIndex)];

            if (isLeadChar) {
              ctx.fillStyle = "#ffffff";
              ctx.shadowColor = "#3ca6ff";
              ctx.shadowBlur = 12;
            } else {
              const alpha = Math.max(0.2, adjustedLum * 0.9);
              const gComp = Math.min(255, Math.floor(gVal * 0.7 + adjustedLum * 120));
              const bComp = Math.min(255, Math.floor(bVal * 0.7 + adjustedLum * 100));
              const rComp = Math.floor(rVal * 0.3);

              ctx.fillStyle = `rgba(${rComp}, ${gComp}, ${bComp}, ${alpha})`;
              ctx.shadowBlur = 0;
            }

            ctx.fillText(char, x, y);
          }
        }
      }

      // Move rain drops
      for (let i = 0; i < columns; i++) {
        drops[i] += 0.4;
        if (drops[i] > rows && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }

      // Vignette effect (intensity: 38)
      const grad = ctx.createRadialGradient(
        width / 2, height / 2, Math.min(width, height) * 0.25,
        width / 2, height / 2, Math.max(width, height) * 0.75
      );
      grad.addColorStop(0, "rgba(9, 9, 11, 0)");
      grad.addColorStop(1, "rgba(9, 9, 11, 0.85)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Bloom Glow effect (intensity: 25)
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = "rgba(60, 166, 255, 0.04)";
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
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-100"
    />
  );
}
