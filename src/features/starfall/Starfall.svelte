<script lang="ts">
  import { onMount } from 'svelte';

  interface Star {
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    twinkleSpeed: number;
    twinklePhase: number;
  }

  let canvas: HTMLCanvasElement;
  let animationId: number;
  let stars: Star[] = [];

  function createStars(width: number, height: number): Star[] {
    const count = Math.floor((width * height) / 3000);
    return Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.8 + 0.2,
      opacity: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
    }));
  }

  function drawStar(ctx: CanvasRenderingContext2D, star: Star) {
    star.twinklePhase += star.twinkleSpeed;
    const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
    const alpha = star.opacity * twinkle;

    const grad = ctx.createRadialGradient(
      star.x,
      star.y,
      0,
      star.x,
      star.y,
      star.size * 2
    );
    grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
    grad.addColorStop(0.5, `rgba(255, 255, 255, ${alpha * 0.3})`);
    grad.addColorStop(1, `rgba(255, 255, 255, 0)`);

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    ctx.fill();
  }

  function tick(ctx: CanvasRenderingContext2D, width: number, height: number) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);

    for (const star of stars) {
      drawStar(ctx, star);
      star.y += star.speed;
      if (star.y > height + 10) {
        star.y = -10;
        star.x = Math.random() * width;
        star.size = Math.random() * 1.5 + 0.3;
        star.speed = Math.random() * 0.8 + 0.2;
        star.opacity = Math.random() * 0.6 + 0.2;
      }
    }
    animationId = requestAnimationFrame(() => tick(ctx, width, height));
  }

  function resize(ctx: CanvasRenderingContext2D) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    stars = createStars(canvas.width, canvas.height);
    return { w: canvas.width, h: canvas.height };
  }

  onMount(() => {
    const ctx = canvas.getContext('2d')!;
    const { w, h } = resize(ctx);
    tick(ctx, w, h);

    const handleResize = () => {
      cancelAnimationFrame(animationId);
      const { w, h } = resize(ctx);
      tick(ctx, w, h);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<canvas
  bind:this={canvas}
  class="fixed inset-0 z-0 pointer-events-none"
  style="background:#000"
></canvas>
