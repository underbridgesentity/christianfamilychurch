"use client";

import { ReactNode, useEffect, useRef } from "react";

type HeroVideoProps = {
  src: string;
  poster?: string;
  children: ReactNode;
};

/**
 * Full-bleed silent looping hero video with a scroll-fade: as the page scrolls
 * the overlaid content fades + drifts down while the video gently scales.
 */
export function HeroVideo({ src, poster, children }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      // Enforce silent autoplay + loop (muted attribute alone is unreliable).
      v.muted = true;
      v.volume = 0;
      v.defaultMuted = true;
      v.setAttribute("muted", "");
      v.loop = true;
      v.setAttribute("loop", "");
      const restart = () => {
        try {
          v.currentTime = 0;
          v.play();
        } catch {}
      };
      v.addEventListener("ended", restart);
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    }

    const onScroll = () => {
      const y = window.scrollY || 0;
      const vh = window.innerHeight || 800;
      const prog = Math.min(1, y / (vh * 0.62));
      if (contentRef.current) {
        contentRef.current.style.opacity = String(1 - prog * 0.95);
        contentRef.current.style.transform = `translateY(${prog * 64}px)`;
      }
      if (videoRef.current) {
        videoRef.current.style.transform = `scale(${1 + prog * 0.14})`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          willChange: "transform",
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(7,15,33,.9) 0%, rgba(7,15,33,.5) 38%, rgba(7,15,33,.24) 72%)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1340,
          width: "100%",
          margin: "0 auto",
          padding: "120px clamp(20px,4vw,40px) clamp(40px,7vh,84px)",
        }}
      >
        <div
          ref={contentRef}
          style={{
            maxWidth: 920,
            margin: "0 auto",
            textAlign: "center",
            willChange: "opacity, transform",
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
