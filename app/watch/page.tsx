import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { Reveal } from "@/components/ui/Reveal";
import { Hover } from "@/components/ui/Hover";
import { site } from "@/lib/site";
import { messages, series, messageImage } from "@/lib/messages";

export const metadata = { title: "Watch Messages" };

const campusOpts = ["All Campuses", "CFC Johannesburg", "CFC South"];

export default function WatchPage() {
  const featured = messages[0];

  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="watch" overlay />

      {/* HERO + FEATURED */}
      <section style={{ position: "relative", background: "#081226", color: "#fff", padding: "140px clamp(20px,4vw,40px) clamp(56px,7vw,90px)", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/img-congregation-screens.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.16 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(8,18,38,.9), rgba(11,24,48,.78))" }} />
        <div style={{ position: "relative", maxWidth: 1340, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 18, alignItems: "flex-end", justifyContent: "space-between", marginBottom: 42 }}>
            <div>
              <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "#9DBDF7", margin: "0 0 18px" }}>Messages</p>
              <h1 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(40px,7vw,88px)", lineHeight: 0.96, letterSpacing: "-.03em", margin: 0 }}>Watch Messages</h1>
            </div>
            <Hover as="a" href={site.youtube.live} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 11, background: "#E74C3C", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 15, padding: "14px 26px", borderRadius: 100, transition: "transform .2s" }} hoverStyle={{ transform: "translateY(-2px)" }}>
              <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#fff" }} />
              Watch Live
            </Hover>
          </div>
          <Reveal style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "clamp(24px,3vw,44px)", alignItems: "center" }} className="split">
            <YouTubeEmbed videoId={featured.youtubeId} playlistId={featured.youtubeId ? undefined : site.youtube.uploadsPlaylist} title={featured.title} />
            <div>
              <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: "#9DBDF7", margin: "0 0 12px" }}>Latest · {featured.series}</p>
              <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.05, letterSpacing: "-.02em", margin: "0 0 12px" }}>{featured.title}</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,.6)", margin: "0 0 26px" }}>{featured.speaker} · {featured.date}</p>
              <Hover as={Link} href={`/messages/${featured.id}`} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--accent)", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 15, padding: "15px 30px", borderRadius: 100, transition: "background .2s" }} hoverStyle={{ background: "var(--accent-dark)" }}>
                Watch Now <span style={{ fontSize: 18 }}>→</span>
              </Hover>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERIES */}
      <section style={{ background: "#fff", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto" }}>
          <Reveal style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 14px" }}>Browse</p>
            <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.04, letterSpacing: "-.02em", margin: 0 }}>Message Series</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 22 }}>
            {series.map((s, i) => (
              <Reveal key={s.name} as={Link} href="/watch/series" delay={i * 0.06} className="lift" style={{ display: "block", textDecoration: "none", color: "inherit" }}>
                <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", aspectRatio: "1 / 1", boxShadow: "0 1px 3px rgba(11,24,48,.1)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.cover} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(150deg, ${s.tint} 0%, rgba(7,15,33,.85) 100%)` }} />
                  <div style={{ position: "absolute", inset: 0, padding: 26, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(255,255,255,.7)", margin: "0 0 8px" }}>{s.count} messages</p>
                    <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: 26, lineHeight: 1, color: "#fff", margin: 0 }}>{s.name}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT + CAMPUS FILTER */}
      <section style={{ background: "#F4F5F7", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto" }}>
          <Reveal style={{ display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center", justifyContent: "space-between", marginBottom: 36 }}>
            <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(24px,3.2vw,38px)", lineHeight: 1.05, letterSpacing: "-.02em", margin: 0 }}>Recent Messages</h2>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {campusOpts.map((o, i) => {
                const active = i === 0;
                return (
                  <span key={o} style={{ background: active ? "var(--accent)" : "#fff", color: active ? "#fff" : "var(--ink-soft)", border: `1px solid ${active ? "var(--accent)" : "#d4d8e0"}`, fontWeight: 600, fontSize: 13.5, padding: "9px 18px", borderRadius: 100 }}>{o}</span>
                );
              })}
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 22 }}>
            {messages.map((m, i) => (
              <Reveal key={m.id} as={Link} href={`/messages/${m.id}`} delay={(i % 4) * 0.06} className="step-card" style={{ display: "block", background: "#fff", borderRadius: 8, overflow: "hidden", textDecoration: "none", color: "inherit", boxShadow: "0 1px 3px rgba(11,24,48,.08)" }}>
                <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={messageImage(m)} alt={m.title} className="step-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", left: 14, top: 14, background: "rgba(11,24,48,.8)", color: "#fff", fontSize: 11, fontWeight: 600, padding: "5px 11px", borderRadius: 100 }}>{m.campus}</div>
                </div>
                <div style={{ padding: 22 }}>
                  <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 8px" }}>{m.shortDate}</p>
                  <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 18, lineHeight: 1.2, margin: "0 0 6px" }}>{m.title}</h3>
                  <p style={{ fontSize: 13.5, color: "var(--slate)", margin: 0 }}>{m.speaker}</p>
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
