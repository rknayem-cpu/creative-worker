"use client";

import { useEffect } from "react";

export default function BG() {
  useEffect(() => {
    const canvas = document.getElementById("particleCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particleCount = 80; // ফোঁটা বা ডটের সংখ্যা
    let speedMultiplier = 1.2; // চলার গতি

    // স্পেস গোল্ডেন/অ্যাম্বার গ্লো কালার থিম
    const theme = { primary: "245, 158, 11", secondary: "251, 191, 36" };

    // মাউস পজিশন ট্র্যাক করার জন্য
    const mouse = { x: null, y: null, radius: 150 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // প্রতিটি Glowing Dot-এর ক্লাস
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.5 + 0.8;
        this.vx = (Math.random() - 0.5) * speedMultiplier;
        this.vy = (Math.random() - 0.5) * speedMultiplier;
        this.alpha = Math.random() * 0.7 + 0.3;
        this.pulseSpeed = Math.random() * 0.02 + 0.005;
      }

      update() {
        this.x += this.vx * speedMultiplier;
        this.y += this.vy * speedMultiplier;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        this.alpha += Math.sin(Date.now() * this.pulseSpeed) * 0.01;
        if (this.alpha <= 0.2) this.alpha = 0.2;
        if (this.alpha >= 0.9) this.alpha = 0.9;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 2;
            this.y -= (dy / dist) * force * 2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${theme.primary}, ${this.alpha * 0.3})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${theme.secondary}, ${this.alpha})`;
        ctx.fill();
      }
    }

    let particles = [];

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function connectParticles() {
      const maxDistance = 100;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.2;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${theme.primary}, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    let animationFrameId;
    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    // Cleanup function (component unmount হলে ইভেন্ট লিসেনার রিমুভ করবে)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-auto bg-[#060b13] overflow-hidden">
      {/* Canvas Background */}
      <canvas
        id="particleCanvas"
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* আপনার ওয়েবসাইটের অন্যান্য কনটেন্ট বা চাইল্ড কম্পোনেন্ট এখানে রাখতে পারেন */}
      <div className="relative z-10">
        {/* Main Content */}
      </div>
    </div>
  );
}