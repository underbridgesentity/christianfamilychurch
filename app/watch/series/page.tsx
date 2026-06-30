import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { series, seriesCover } from "@/lib/messages";

export const metadata = { title: "Message Series" };

export default function SeriesPage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="watch" overlay />

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "54vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/img-congregation-screens.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,15,33,.92), rgba(7,15,33,.3) 70%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1340, width: "100%", margin: "0 auto", padding: "0 clamp(20px,4vw,40px) 60px" }}>
          <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "#9DBDF7", margin: "0 0 16px" }}>Watch</p>
          <h1 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(42px,7.5vw,96px)", lineHeight: 0.95, letterSpacing: "-.03em", color: "#fff", margin: 0 }}>Message Series</h1>
        </div>
      </section>

      {/* GRID */}
      <section style={{ background: "#fff", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 22 }}>
            {series.map((s) => (
              <Link key={s.slug} href={`/watch/series/${s.slug}`} className="step-card" style={{ display: "block", textDecoration: "none", color: "inherit", borderRadius: 12 }}>
                <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", aspectRatio: "1 / 1", boxShadow: "0 1px 3px rgba(11,24,48,.1)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={seriesCover(s)} alt={s.name} className="step-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(150deg, ${s.tint} 0%, rgba(7,15,33,.85) 100%)` }} />
                  <div style={{ position: "absolute", inset: 0, padding: 26, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "rgba(255,255,255,.7)", margin: "0 0 8px" }}>{s.count} messages</p>
                    <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: 26, lineHeight: 1, color: "#fff", margin: 0 }}>{s.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
