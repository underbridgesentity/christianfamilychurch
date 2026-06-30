import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { series, getSeries, messagesInSeries, messageImage, seriesCover } from "@/lib/messages";

export function generateStaticParams() {
  return series.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSeries(slug);
  return { title: s ? s.name : "Series" };
}

export default async function SeriesDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getSeries(slug);
  if (!s) notFound();

  const items = messagesInSeries(slug);
  const playlistUrl = `https://www.youtube.com/playlist?list=${s.playlistId}`;

  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="watch" overlay />

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "56vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={seriesCover(s)} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(150deg, ${s.tint} 0%, rgba(7,15,33,.92) 100%)` }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1340, width: "100%", margin: "0 auto", padding: "0 clamp(20px,4vw,40px) 60px" }}>
          <Link href="/watch/series" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#9DBDF7", textDecoration: "none", fontWeight: 700, fontSize: 13, letterSpacing: ".18em", textTransform: "uppercase", marginBottom: 18 }}>
            ← All Series
          </Link>
          <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.72)", margin: "0 0 14px" }}>{s.count} {s.count === 1 ? "message" : "messages"} · Series</p>
          <h1 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(38px,6.4vw,88px)", lineHeight: 0.96, letterSpacing: "-.03em", color: "#fff", margin: 0, maxWidth: 1000 }}>{s.name}</h1>
        </div>
      </section>

      {/* MESSAGES IN SERIES */}
      <section style={{ background: "#F4F5F7", padding: "clamp(56px,7vw,100px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto" }}>
          <Reveal style={{ display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center", justifyContent: "space-between", marginBottom: 36 }}>
            <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(24px,3.2vw,38px)", lineHeight: 1.05, letterSpacing: "-.02em", margin: 0 }}>Messages in this Series</h2>
            <a href={playlistUrl} target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#E74C3C", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 14, padding: "12px 22px", borderRadius: 100 }}>
              Watch on YouTube <span style={{ fontSize: 16 }}>→</span>
            </a>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 22 }}>
            {items.map((m, i) => (
              <Reveal key={m.id} as={Link} href={`/messages/${m.id}`} delay={(i % 4) * 0.06} className="step-card" style={{ display: "block", background: "#fff", borderRadius: 8, overflow: "hidden", textDecoration: "none", color: "inherit", boxShadow: "0 1px 3px rgba(11,24,48,.08)" }}>
                <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={messageImage(m)} alt={m.title} className="step-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 54, height: 54, borderRadius: "50%", background: "rgba(255,255,255,.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#2E6BE6"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                  {m.part ? <div style={{ position: "absolute", left: 14, top: 14, background: "rgba(11,24,48,.82)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "5px 11px", borderRadius: 100 }}>{m.part}</div> : null}
                </div>
                <div style={{ padding: 22 }}>
                  <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 8px" }}>{m.shortDate || s.name}</p>
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
