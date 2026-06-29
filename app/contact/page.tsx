"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hover } from "@/components/ui/Hover";
import { campuses } from "@/lib/campuses";
import { site } from "@/lib/site";

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: ".04em",
  color: "#9DBDF7",
  marginBottom: 7,
};

const fieldStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,.06)",
  border: "1px solid rgba(255,255,255,.16)",
  borderRadius: 10,
  padding: "14px 16px",
  fontSize: 15,
  color: "#fff",
  fontFamily: "inherit",
  outline: "none",
};

const uppLabel: React.CSSProperties = {
  fontFamily: "var(--font-archivo)",
  fontWeight: 700,
  fontSize: 11,
  letterSpacing: ".12em",
  textTransform: "uppercase",
  color: "#9aa3b5",
  margin: "0 0 5px",
};

export default function ContactPage() {
  const [campusIndex, setCampusIndex] = useState(0);
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const current = campuses[campusIndex];
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(current.mapQuery)}&z=14&output=embed`;

  const focusStyle = (key: string): React.CSSProperties =>
    focused === key ? { ...fieldStyle, borderColor: "#2E6BE6" } : fieldStyle;

  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="about" />

      <section style={{ padding: "118px clamp(20px,4vw,40px) clamp(64px,8vw,110px)", background: "#fff" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, maxWidth: 680 }}>
            <p
              style={{
                fontFamily: "var(--font-archivo)",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: "#2E6BE6",
                margin: "0 0 16px",
              }}
            >
              Contact
            </p>
            <h1
              style={{
                fontFamily: "var(--font-archivo)",
                fontWeight: 900,
                fontSize: "clamp(32px,5vw,60px)",
                lineHeight: 1.02,
                letterSpacing: "-.03em",
                margin: 0,
              }}
            >
              We’d Love to Hear from You
            </h1>
          </div>

          <div
            className="split"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px,4vw,56px)", alignItems: "start" }}
          >
            {/* LEFT: campus info */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-archivo)",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "#9aa3b5",
                  margin: "0 0 12px",
                }}
              >
                Select a campus
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
                {campuses.map((c, i) => {
                  const active = campusIndex === i;
                  return (
                    <button
                      key={c.slug}
                      onClick={() => setCampusIndex(i)}
                      style={{
                        background: active ? "#2E6BE6" : "#fff",
                        color: active ? "#fff" : "#3a4660",
                        border: `1px solid ${active ? "#2E6BE6" : "#d4d8e0"}`,
                        fontFamily: "var(--font-hanken)",
                        fontWeight: 600,
                        fontSize: 14,
                        padding: "10px 20px",
                        borderRadius: 100,
                        cursor: "pointer",
                        transition: "all .2s",
                      }}
                    >
                      {c.name}
                    </button>
                  );
                })}
              </div>

              <div style={{ background: "#F4F5F7", borderRadius: 12, padding: 28, marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 13, marginBottom: 18 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E6BE6" strokeWidth="1.8" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8z" />
                    <circle cx="12" cy="10" r="2.4" />
                  </svg>
                  <div>
                    <p style={uppLabel}>Address</p>
                    <p style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>{current.addressLines.join(", ")}</p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 13, marginBottom: 18 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E6BE6" strokeWidth="1.8" style={{ flexShrink: 0, marginTop: 2 }}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  <div>
                    <p style={uppLabel}>Service Times</p>
                    <p style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>{current.times}</p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 13 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E6BE6" strokeWidth="1.8" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L7.6 9.8a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
                  </svg>
                  <div>
                    <p style={uppLabel}>Phone & Email</p>
                    <p style={{ fontSize: 15, margin: 0, lineHeight: 1.5 }}>
                      {site.phone} · {site.email}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ borderRadius: 12, overflow: "hidden", height: 260, boxShadow: "0 1px 3px rgba(11,24,48,.1)" }}>
                <iframe title="Campus map" src={mapSrc} style={{ width: "100%", height: "100%", border: 0 }} loading="lazy" />
              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
                <Hover
                  as="a"
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 42, height: 42, borderRadius: "50%", border: "1px solid #d4d8e0", color: "#11203F", transition: "all .2s" }}
                  hoverStyle={{ background: "#2E6BE6", borderColor: "#2E6BE6", color: "#fff" }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
                  </svg>
                </Hover>
                <Hover
                  as="a"
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 42, height: 42, borderRadius: "50%", border: "1px solid #d4d8e0", color: "#11203F", transition: "all .2s" }}
                  hoverStyle={{ background: "#2E6BE6", borderColor: "#2E6BE6", color: "#fff" }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5.5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                </Hover>
                <Hover
                  as="a"
                  href={site.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 42, height: 42, borderRadius: "50%", border: "1px solid #d4d8e0", color: "#11203F", transition: "all .2s" }}
                  hoverStyle={{ background: "#2E6BE6", borderColor: "#2E6BE6", color: "#fff" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.6 7.2s-.2-1.37-.8-1.97c-.76-.8-1.6-.8-2-.85C16 4.1 12 4.1 12 4.1s-4 0-6.8.28c-.4.05-1.24.05-2 .85-.6.6-.8 1.97-.8 1.97S2 8.8 2 10.4v1.5c0 1.6.2 3.2.2 3.2s.2 1.37.8 1.97c.76.8 1.76.77 2.2.86 1.6.15 6.8.2 6.8.2s4 0 6.8-.29c.4-.05 1.24-.05 2-.85.6-.6.8-1.97.8-1.97s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.2-.2-3.2ZM9.94 14.5V8.9l5.2 2.8-5.2 2.8Z" />
                  </svg>
                </Hover>
              </div>
            </div>

            {/* RIGHT: form */}
            <div style={{ background: "#0B1830", borderRadius: 14, padding: "clamp(28px,3vw,40px)" }}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "40px 10px", color: "#fff" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#2E6BE6", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px" }}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4">
                      <path d="M4 12l5 5L20 6" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 24, margin: "0 0 10px" }}>Message sent!</h3>
                  <p style={{ fontSize: 15, color: "rgba(255,255,255,.7)", margin: 0 }}>
                    Thanks, we’ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 24, color: "#fff", margin: "0 0 24px" }}>
                    Send us a message
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        style={focusStyle("name")}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        style={focusStyle("email")}
                        onFocus={() => setFocused("email")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Campus</label>
                      <select
                        value={campusIndex}
                        onChange={(e) => setCampusIndex(Number(e.target.value))}
                        style={focusStyle("campus")}
                        onFocus={() => setFocused("campus")}
                        onBlur={() => setFocused(null)}
                      >
                        {campuses.map((c, i) => (
                          <option key={c.slug} value={i} style={{ color: "#11203F" }}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Message</label>
                      <textarea
                        rows={4}
                        required
                        placeholder="How can we help?"
                        style={{ ...focusStyle("message"), resize: "vertical" }}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                      />
                    </div>
                    <Hover
                      as="button"
                      style={{
                        background: "#2E6BE6",
                        color: "#fff",
                        border: "none",
                        fontFamily: "var(--font-hanken)",
                        fontWeight: 700,
                        fontSize: 16,
                        padding: 16,
                        borderRadius: 100,
                        cursor: "pointer",
                        transition: "background .2s",
                        marginTop: 6,
                      }}
                      hoverStyle={{ background: "#1f54c4" }}
                    >
                      Send Message
                    </Hover>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
