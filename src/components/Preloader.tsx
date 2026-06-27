"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const Preloader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Disable scroll during preload
    document.body.style.overflow = "hidden";
    document.documentElement.style.scrollBehavior = "auto"; // Prevent conflicts during preloading

    const container = containerRef.current;
    const textContainer = textContainerRef.current;
    const progress = progressRef.current;
    const glow = glowRef.current;

    if (!container || !textContainer || !progress || !glow) return;

    const words = [
      "Hello.",
      "I'm",
      "Santhosh",
      "Full Stack Developer",
      "and",
      "Founder @ Intasia",
      "Welcome."
    ];

    // Create word elements dynamically
    textContainer.innerHTML = "";
    words.forEach((word) => {
      const el = document.createElement("div");
      el.className = "absolute opacity-0 text-white font-sans text-center font-bold tracking-tight select-none pointer-events-none text-[clamp(1.8rem,5vw,4.5rem)] px-6 will-change-[transform,filter,opacity]";
      el.style.filter = "blur(12px)";
      el.style.transform = "scale(0.96)";
      el.style.transformOrigin = "center center";
      // Render text beautifully with modern font styling
      el.style.fontFamily = "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Geist', 'Inter', sans-serif";
      el.innerText = word;
      textContainer.appendChild(el);
    });

    const wordElements = textContainer.children;
    const totalDuration = words.length * 0.72; // Snappier timeline length

    const tl = gsap.timeline({
      onComplete: () => {
        // Exit Animation
        gsap.to(container, {
          opacity: 0,
          scale: 0.96,
          duration: 0.65,
          ease: "power4.inOut",
          onComplete: () => {
            setIsDone(true);
            document.body.style.overflow = "";
            document.documentElement.style.scrollBehavior = "smooth"; // Re-enable smooth scrolling
          }
        });
      }
    });

    // 1. Animate progress bar across entire preload duration
    tl.to(progress, {
      width: "100%",
      duration: totalDuration,
      ease: "none"
    }, 0);

    // 2. Animate radial glow movement/pulse subtly
    tl.to(glow, {
      scale: 1.15,
      opacity: 0.55,
      duration: totalDuration / 2,
      yoyo: true,
      repeat: 1,
      ease: "sine.inOut"
    }, 0);

    // 3. Sequentially animate each word
    words.forEach((_, i) => {
      const el = wordElements[i];
      const startTime = i * 0.72;

      // Fade & blur in + scale up
      tl.to(el, {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.32,
        ease: "power3.out"
      }, startTime);

      // Fade & blur out + scale slightly up/out
      tl.to(el, {
        opacity: 0,
        filter: "blur(8px)",
        scale: 1.02,
        duration: 0.32,
        ease: "power3.in"
      }, startTime + 0.45); // Stay visible for ~450ms before fading out
    });

    return () => {
      tl.kill();
      document.body.style.overflow = "";
      document.documentElement.style.scrollBehavior = "smooth";
    };
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen bg-[#000000] z-[9999] flex flex-col items-center justify-center overflow-hidden will-change-[transform,opacity]"
    >
      {/* Subtle Radial Glow Behind Text */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full opacity-35 filter blur-[100px] pointer-events-none mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(118,33,176,0.18) 0%, rgba(182,0,168,0.06) 50%, rgba(0,0,0,0) 100%)",
          willChange: "transform, opacity"
        }}
      />

      {/* Animated Noise Overlay (SVG noise filter) */}
      <div className="absolute inset-0 w-full h-full opacity-[0.035] pointer-events-none mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.65" 
              numOctaves="3" 
              stitchTiles="stitch" 
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Container for sequential words */}
      <div
        ref={textContainerRef}
        className="relative w-full flex items-center justify-center flex-grow"
      />

      {/* Thin Bottom Progress Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-900">
        <div
          ref={progressRef}
          className="h-full w-0"
          style={{
            background: "linear-gradient(90deg, #7621B0 0%, #B600A8 50%, #BE4C00 100%)"
          }}
        />
      </div>
    </div>
  );
};
