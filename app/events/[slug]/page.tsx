import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hover } from "@/components/ui/Hover";
import { Reveal } from "@/components/ui/Reveal";
import { events, getEvent } from "@/lib/events";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ev = getEvent(slug);
  return { title: ev ? ev.name : "Event" };
}

const infoLabel: React.CSSProperties = {
  fontFamily: "var(--font-archivo)",
  fontWeight: 700,
  fontSize: 11,
  letterSpacing: ".14em",
  textTransform: "uppercase",
  color: "#9aa3b5",
  margin: "0 0 8px",
};

const infoValue: React.CSSProperties = {
  fontFamily: "var(--font-archivo)",
  fontWeight: 700,
  fontSize: 16,
  margin: 0,
};

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ev = getEvent(slug);
  if (!ev) notFound();

  const related = events.filter((e) => e.slug !== ev.slug).slice(0, 3);

  const infoCells = [
    { label: "Date", value: ev.date },
    ...(ev.time ? [{ label: "Time", value: ev.time }] : []),
    { label: "Campus", value: ev.campus },
    ...(ev.venue ? [{ label: "Venue", value: ev.venue }] : []),
  ];

  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="next" overlay />

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "64vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ev.image} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,15,33,.92), rgba(7,15,33,.25) 70%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1080, width: "100%", margin: "0 auto", padding: "0 clamp(20px,4vw,40px) 56px" }}>
          <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "var(--accent-lighter)", margin: "0 0 16px" }}>Event</p>
          <h1 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(40px,7vw,88px)", lineHeight: 0.96, letterSpacing: "-.03em", color: "#fff", margin: 0 }}>{ev.name}</h1>
        </div>
      </section>

      {/* INFO + REGISTER */}
      <section style={{ background: "#fff", padding: "clamp(48px,6vw,80px) clamp(20px,4vw,40px) clamp(64px,8vw,110px)" }}>
        <div className="split" style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "clamp(28px,4vw,56px)", alignItems: "start" }}>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 1, background: "#eceef2", border: "1px solid #eceef2", borderRadius: 10, overflow: "hidden", marginBottom: 36 }}>
              {infoCells.map((cell) => (
                <div key={cell.label} style={{ background: "#fff", padding: 22 }}>
                  <p style={infoLabel}>{cell.label}</p>
                  <p style={infoValue}>{cell.value}</p>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--ink-soft)", margin: 0 }}>{ev.description}</p>
          </div>
          <div style={{ background: "#0B1830", color: "#fff", borderRadius: 12, padding: 34, position: "sticky", top: 100 }}>
            <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent-lighter)", margin: "0 0 10px" }}>Save your spot</p>
            <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 24, lineHeight: 1.1, margin: "0 0 20px" }}>RSVP for free</h3>
            <Hover as={Link} href="/register" style={{ display: "block", textAlign: "center", background: "var(--accent)", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 16, padding: 16, borderRadius: 100, marginBottom: 12, transition: "background .2s" }} hoverStyle={{ background: "var(--accent-dark)" }}>
              {ev.cta ?? "Register Now"}
            </Hover>
            <Hover as={Link} href="/contact" style={{ display: "block", textAlign: "center", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: 15, padding: 14, border: "1px solid rgba(255,255,255,.3)", borderRadius: 100, transition: "background .2s" }} hoverStyle={{ background: "rgba(255,255,255,.1)" }}>
              Ask a Question
            </Hover>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section style={{ background: "#F4F5F7", padding: "clamp(56px,7vw,96px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto" }}>
          <Reveal style={{ marginBottom: 32 }}>
            <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 14px" }}>More Events</p>
            <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(24px,3.2vw,38px)", lineHeight: 1.05, letterSpacing: "-.02em", margin: 0 }}>Coming Up Next</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 22 }}>
            {related.map((r, i) => (
              <Reveal key={r.slug} as={Link} href={`/events/${r.slug}`} delay={i * 0.08} className="lift" style={{ display: "block", background: "#fff", borderRadius: 8, overflow: "hidden", textDecoration: "none", color: "inherit", boxShadow: "0 1px 3px rgba(11,24,48,.08)" }}>
                <div style={{ aspectRatio: "16 / 10", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.image} alt={r.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: 22 }}>
                  <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 8px" }}>{r.date}</p>
                  <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 19, margin: 0 }}>{r.name}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
