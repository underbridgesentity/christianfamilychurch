import { ReactNode } from "react";

type PageHeroProps = {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** vertical alignment of the copy */
  align?: "center" | "end";
  minHeight?: string;
  gradient?: string;
};

/**
 * Static image hero used by interior pages: full-bleed photo, dark overlay,
 * uppercase eyebrow, heavy Archivo display title, optional subtitle.
 */
export function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  align = "end",
  minHeight = "58vh",
  gradient = "linear-gradient(to top, rgba(7,15,33,.9), rgba(7,15,33,.35) 70%)",
}: PageHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        minHeight,
        display: "flex",
        alignItems: align === "center" ? "center" : "flex-end",
        overflow: "hidden",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{ position: "absolute", inset: 0, background: gradient }} />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1340,
          width: "100%",
          margin: "0 auto",
          padding: "150px clamp(20px,4vw,40px) clamp(56px,8vh,90px)",
        }}
      >
        {eyebrow && (
          <p
            style={{
              fontFamily: "var(--font-archivo)",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: ".24em",
              textTransform: "uppercase",
              color: "var(--accent-lighter)",
              margin: "0 0 20px",
            }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          style={{
            fontFamily: "var(--font-archivo)",
            fontWeight: 900,
            fontSize: "clamp(42px,7.5vw,96px)",
            lineHeight: 0.96,
            letterSpacing: "-.03em",
            color: "#fff",
            margin: 0,
            maxWidth: 900,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: "clamp(17px,2vw,22px)",
              fontWeight: 300,
              lineHeight: 1.55,
              color: "rgba(255,255,255,.85)",
              maxWidth: 580,
              margin: "22px 0 0",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
