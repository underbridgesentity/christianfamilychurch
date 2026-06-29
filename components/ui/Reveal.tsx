"use client";

import { CSSProperties, ElementType, ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
  /** Stagger delay in seconds */
  delay?: number;
  children?: ReactNode;
  href?: string;
};

/**
 * Section reveal: fades + rises into view via IntersectionObserver.
 * Unlike the design preview (which froze animation timelines), this runs
 * reliably in real browsers, and falls back to fully visible if unsupported.
 */
export function Reveal({ as, style, className, delay = 0, children, ...rest }: RevealProps) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${shown ? " in" : ""}${className ? " " + className : ""}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
