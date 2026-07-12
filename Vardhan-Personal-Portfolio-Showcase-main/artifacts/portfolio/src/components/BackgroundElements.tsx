import { useEffect, useRef } from "react";

export function BackgroundElements() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    // Grid points for a circuit board feel
    const pointSpacing = 40;
    const points: {x: number, y: number, connected: boolean}[] = [];
    
    for (let x = 0; x < width; x += pointSpacing) {
      for (let y = 0; y < height; y += pointSpacing) {
        if (Math.random() > 0.8) {
          points.push({x, y, connected: false});
        }
      }
    }

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw grid dots
      ctx.fillStyle = 'rgba(6, 182, 212, 0.15)'; // primary/15
      for (let x = 0; x < width; x += pointSpacing) {
        for (let y = 0; y < height; y += pointSpacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw active circuit lines slowly drawing themselves
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.05)';
      ctx.lineWidth = 1;
      
      points.forEach((p, i) => {
        if (i % 5 === 0) {
          const target = points[(i + 3) % points.length];
          const dist = Math.hypot(target.x - p.x, target.y - p.y);
          if (dist < 200) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            // Draw orthogonal lines like a circuit board
            if (Math.random() > 0.5) {
              ctx.lineTo(target.x, p.y);
              ctx.lineTo(target.x, target.y);
            } else {
              ctx.lineTo(p.x, target.y);
              ctx.lineTo(target.x, target.y);
            }
            ctx.stroke();
          }
        }
      });

      frame++;
      // requestAnimationFrame(draw); // Static is better for performance, draw once
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full pointer-events-none opacity-40 z-0"
      />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
    </>
  );
}