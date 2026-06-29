"use client";

import { useState } from "react";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { Hover } from "@/components/ui/Hover";
import { groups, campuses, days, categories } from "@/lib/groups";

const filterLabel: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-archivo)",
  fontWeight: 700,
  fontSize: 10.5,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  color: "#9aa3b5",
  marginBottom: 9,
};

function FilterGroup({
  label,
  options,
  active,
  onSelect,
}: {
  label: string;
  options: string[];
  active: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <span style={filterLabel}>{label}</span>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {options.map((o) => {
          const isActive = active === o;
          return (
            <button
              key={o}
              onClick={() => onSelect(o)}
              style={{
                background: isActive ? "#2E6BE6" : "#fff",
                color: isActive ? "#fff" : "#3a4660",
                border: `1px solid ${isActive ? "#2E6BE6" : "#d4d8e0"}`,
                fontFamily: "var(--font-hanken)",
                fontWeight: 600,
                fontSize: 13.5,
                padding: "9px 17px",
                borderRadius: 100,
                cursor: "pointer",
                transition: "all .2s",
              }}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function SmallGroupsPage() {
  const [campus, setCampus] = useState("All");
  const [day, setDay] = useState("All");
  const [category, setCategory] = useState("All");

  const filtered = groups.filter(
    (g) =>
      (campus === "All" || g.campus === campus) &&
      (day === "All" || g.day === day) &&
      (category === "All" || g.category === category)
  );

  const countLabel = `${filtered.length} ${filtered.length === 1 ? "group" : "groups"} found`;

  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="next" overlay />

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "54vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/img-baby-dedication.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(7,15,33,.84), rgba(7,15,33,.45))" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1340, width: "100%", margin: "0 auto", padding: "150px clamp(20px,4vw,40px) 70px" }}>
          <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "#9DBDF7", margin: "0 0 22px" }}>Small Groups</p>
          <h1 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(42px,7.5vw,100px)", lineHeight: .96, letterSpacing: "-.03em", color: "#fff", margin: "0 0 18px" }}>Find Your People</h1>
          <p style={{ fontSize: "clamp(17px,2vw,22px)", fontWeight: 300, lineHeight: 1.5, color: "rgba(255,255,255,.84)", maxWidth: 520, margin: 0 }}>Life is better together. Find a group that fits.</p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section style={{ background: "#fff", borderBottom: "1px solid #eceef2", position: "sticky", top: 78, zIndex: 20 }}>
        <div style={{ maxWidth: 1340, margin: "0 auto", padding: "22px clamp(20px,4vw,40px)", display: "flex", flexWrap: "wrap", gap: 26 }}>
          <FilterGroup label="Campus" options={campuses} active={campus} onSelect={setCampus} />
          <FilterGroup label="Day" options={days} active={day} onSelect={setDay} />
          <FilterGroup label="Category" options={categories} active={category} onSelect={setCategory} />
        </div>
      </section>

      {/* GROUPS */}
      <section style={{ background: "#F4F5F7", padding: "clamp(48px,6vw,80px) clamp(20px,4vw,40px) clamp(64px,8vw,110px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto" }}>
          <p style={{ fontSize: 14, color: "#5A6478", margin: "0 0 26px" }}>{countLabel}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 20 }}>
            {filtered.map((g) => (
              <div key={g.name} style={{ background: "#fff", borderRadius: 8, padding: 28, boxShadow: "0 1px 3px rgba(11,24,48,.08)", display: "flex", flexDirection: "column" }}>
                <span style={{ alignSelf: "flex-start", background: "#eef3fe", color: "#2E6BE6", fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", padding: "6px 13px", borderRadius: 100, marginBottom: 16 }}>{g.category}</span>
                <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 21, margin: "0 0 12px" }}>{g.name}</h3>
                <div style={{ display: "flex", alignItems: "center", gap: 9, color: "#3a4660", fontSize: 14, marginBottom: 7 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E6BE6" strokeWidth="1.8"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8z" /><circle cx="12" cy="10" r="2.4" /></svg>
                  {g.campus}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 9, color: "#3a4660", fontSize: 14, marginBottom: 16 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E6BE6" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                  {g.time}
                </div>
                <p style={{ fontSize: 14.5, color: "#5A6478", lineHeight: 1.55, margin: "0 0 22px", flex: 1 }}>{g.descriptor}</p>
                <Hover as={Link} href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#11203F", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: 14.5, padding: "13px 22px", borderRadius: 100, transition: "background .2s" }} hoverStyle={{ background: "#2E6BE6" }}>
                  Join This Group
                </Hover>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD A GROUP CTA */}
      <section style={{ background: "#fff", padding: "clamp(56px,7vw,96px) clamp(20px,4vw,40px)" }}>
        <Reveal style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(28px,4.4vw,48px)", lineHeight: 1.05, letterSpacing: "-.02em", margin: "0 0 28px" }}>Want to lead a group?</h2>
          <Hover as={Link} href="/contact" style={{ display: "inline-block", background: "#2E6BE6", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 16, padding: "17px 40px", borderRadius: 100, transition: "background .2s,transform .2s" }} hoverStyle={{ background: "#1f54c4", transform: "translateY(-2px)" }}>
            Start a Group
          </Hover>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
