"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { primaryNav, mobileNav } from "@/lib/navigation";

const Caret = () => (
  <svg
    className="dd-caret"
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export function Nav({ active = "", overlay = true }: { active?: string; overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  const solid = scrolled || !overlay;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: solid
          ? "rgba(11,24,48,0.55)"
          : "linear-gradient(to bottom, rgba(7,15,33,.6), rgba(7,15,33,0))",
        borderBottom: solid ? "1px solid rgba(255,255,255,.12)" : "1px solid transparent",
        backdropFilter: solid ? "saturate(1.8) blur(22px)" : "none",
        WebkitBackdropFilter: solid ? "saturate(1.8) blur(22px)" : "none",
        boxShadow: solid
          ? "0 10px 34px -14px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.12)"
          : "none",
        transition: "background .4s ease, border-color .4s ease, box-shadow .4s ease",
        fontFamily: "var(--font-hanken)",
      }}
    >
      <div
        style={{
          maxWidth: 1340,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,40px)",
          height: 78,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 15,
            textDecoration: "none",
            color: "#fff",
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/mark-white.png" alt="CFC" style={{ height: 38, width: "auto", display: "block" }} />
          <span
            style={{
              fontFamily: "var(--font-archivo)",
              fontWeight: 800,
              fontSize: 15,
              letterSpacing: ".12em",
            }}
            className="nav-wordmark"
          >
            CHRISTIAN FAMILY CHURCH
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="nav-desktop"
          style={{ display: "flex", alignItems: "center", gap: "clamp(14px,1.9vw,28px)" }}
        >
          {primaryNav.map((item) =>
            item.children ? (
              <div className="dd" key={item.key}>
                <Link
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    position: "relative",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: 14.5,
                    fontWeight: 500,
                    opacity: active === item.key ? 1 : 0.78,
                    padding: "6px 0",
                  }}
                >
                  {item.label}
                  <Caret />
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 18,
                      bottom: -2,
                      height: 2,
                      borderRadius: 2,
                      background: active === item.key ? "var(--accent)" : "transparent",
                    }}
                  />
                </Link>
                <div className="dd-panel">
                  <div
                    className="dd-inner"
                    style={{
                      minWidth: 230,
                      background: "#0B1830",
                      border: "1px solid rgba(255,255,255,.1)",
                      borderRadius: 12,
                      padding: 8,
                      boxShadow: "0 30px 60px -20px rgba(0,0,0,.55)",
                    }}
                  >
                    {item.children.map((c, i) =>
                      c.live ? (
                        <a
                          key={c.href}
                          href={c.href}
                          target="_blank"
                          rel="noopener"
                          className="dd-item"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 9,
                            color: "rgba(255,255,255,.82)",
                            textDecoration: "none",
                            fontSize: 14,
                            fontWeight: 500,
                            padding: "11px 14px",
                            borderRadius: 8,
                          }}
                        >
                          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#E74C3C" }} />
                          {c.label}
                        </a>
                      ) : (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="dd-item"
                          style={{
                            display: "block",
                            color: i === 0 ? "#fff" : "rgba(255,255,255,.82)",
                            textDecoration: "none",
                            fontSize: 14,
                            fontWeight: 500,
                            padding: "11px 14px",
                            borderRadius: 8,
                          }}
                        >
                          {c.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                style={{
                  position: "relative",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: 14.5,
                  fontWeight: 500,
                  opacity: active === item.key ? 1 : 0.78,
                  padding: "6px 0",
                }}
              >
                {item.label}
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: -2,
                    height: 2,
                    borderRadius: 2,
                    background: active === item.key ? "var(--accent)" : "transparent",
                  }}
                />
              </Link>
            )
          )}
          <Link
            href="/sign-in"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#fff",
              textDecoration: "none",
              fontSize: 14,
              fontWeight: 500,
              opacity: 0.9,
              padding: "9px 18px",
              border: "1px solid rgba(255,255,255,.28)",
              borderRadius: 100,
            }}
          >
            Sign In
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="nav-burger"
          onClick={() => setOpen(true)}
          aria-label="Menu"
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            gap: 5,
            width: 46,
            height: 46,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "block", width: 24, height: 2, background: "#fff", borderRadius: 2, margin: "0 auto" }} />
          ))}
        </button>
      </div>

      {/* Mobile full-screen menu */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1100,
            background: "#0A1631",
            animation: "cfcMenuIn .28s ease",
            display: "flex",
            flexDirection: "column",
            fontFamily: "var(--font-hanken)",
          }}
        >
          <div
            style={{
              height: 78,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 24px",
              borderBottom: "1px solid rgba(255,255,255,.08)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/mark-white.png" alt="CFC" style={{ height: 36 }} />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              style={{ width: 46, height: 46, background: "transparent", border: "none", color: "#fff", fontSize: 30, cursor: "pointer", lineHeight: 1 }}
            >
              ×
            </button>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "30px 28px 40px", display: "flex", flexDirection: "column", gap: 2 }}>
            {mobileNav.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                onClick={() => setOpen(false)}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontFamily: "var(--font-archivo)",
                  fontWeight: 700,
                  fontSize: 24,
                  letterSpacing: "-.01em",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,.07)",
                }}
              >
                {m.label}
              </Link>
            ))}
            <div style={{ display: "flex", gap: 12, marginTop: 26 }}>
              <Link href="/giving" onClick={() => setOpen(false)} style={{ flex: 1, textAlign: "center", background: "var(--accent)", color: "#fff", textDecoration: "none", fontWeight: 700, padding: 15, borderRadius: 100 }}>
                Give
              </Link>
              <Link href="/sign-in" onClick={() => setOpen(false)} style={{ flex: 1, textAlign: "center", color: "#fff", textDecoration: "none", fontWeight: 600, padding: 15, border: "1px solid rgba(255,255,255,.3)", borderRadius: 100 }}>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
