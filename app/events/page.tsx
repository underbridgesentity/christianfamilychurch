"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { events } from "@/lib/events";

const filters = ["All", "CFC Johannesburg", "CFC South"];

export default function EventsPage() {
  const [campus, setCampus] = useState("All");

  const visible = events.filter(
    (e) => campus === "All" || e.campus === campus || e.campus === "All Campuses"
  );

  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="next" overlay />

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "52vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/img-crowd-spotlights.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(7,15,33,.84), rgba(7,15,33,.45))" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1340, width: "100%", margin: "0 auto", padding: "150px clamp(20px,4vw,40px) 70px" }}>
          <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "var(--accent-lighter)", margin: "0 0 22px" }}>Events</p>
          <h1 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(42px,7.5vw,100px)", lineHeight: 0.96, letterSpacing: "-.03em", color: "#fff", margin: 0 }}>What’s Happening</h1>
        </div>
      </section>

      {/* FILTER BAR */}
      <section style={{ background: "#fff", borderBottom: "1px solid #eceef2", position: "sticky", top: 78, zIndex: 20 }}>
        <div style={{ maxWidth: 1340, margin: "0 auto", padding: "20px clamp(20px,4vw,40px)", display: "flex", gap: 8, flexWrap: "wrap" }}>
          {filters.map((f) => {
            const active = campus === f;
            return (
              <button
                key={f}
                onClick={() => setCampus(f)}
                style={{
                  background: active ? "var(--accent)" : "#fff",
                  color: active ? "#fff" : "var(--ink-soft)",
                  border: `1px solid ${active ? "var(--accent)" : "#d4d8e0"}`,
                  fontFamily: "var(--font-hanken)",
                  fontWeight: 600,
                  fontSize: 14,
                  padding: "10px 20px",
                  borderRadius: 100,
                  cursor: "pointer",
                  transition: "all .2s",
                }}
              >
                {f === "All" ? "All Campuses" : f}
              </button>
            );
          })}
        </div>
      </section>

      {/* EVENT GRID */}
      <section style={{ background: "#F4F5F7", padding: "clamp(48px,6vw,80px) clamp(20px,4vw,40px) clamp(64px,8vw,110px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 24 }}>
          {visible.map((e) => (
            <Link
              key={e.slug}
              href={`/events/${e.slug}`}
              className="step-card"
              style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", borderRadius: 10, overflow: "hidden", aspectRatio: "4 / 5", textDecoration: "none", color: "#fff", boxShadow: "0 1px 3px rgba(11,24,48,.08)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={e.image} alt={e.name} className="step-img" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,15,33,.93) 8%, rgba(7,15,33,.12) 62%)" }} />
              <div style={{ position: "absolute", top: 16, left: 16, background: "#fff", borderRadius: 8, padding: "8px 12px", textAlign: "center", boxShadow: "0 4px 12px rgba(11,24,48,.25)" }}>
                <span style={{ display: "block", fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: 22, color: "var(--accent)", lineHeight: 1 }}>{e.day}</span>
                <span style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: "#9aa3b5" }}>{e.mon}</span>
              </div>
              <div style={{ position: "relative", padding: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, color: "rgba(255,255,255,.8)", fontSize: 13, marginBottom: 10 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9DBDF7" strokeWidth="1.9"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8z" /><circle cx="12" cy="10" r="2.4" /></svg>
                  {e.campus}
                </div>
                <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 25, lineHeight: 1.05, margin: 0 }}>{e.name}</h3>
                <span className="step-cta" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 13, fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 12.5, letterSpacing: ".04em", color: "#fff" }}>
                  View &amp; Register <span style={{ fontSize: 16 }}>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
