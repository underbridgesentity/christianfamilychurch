import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { Reveal } from "@/components/ui/Reveal";
import { Hover } from "@/components/ui/Hover";
import { site } from "@/lib/site";
import { messages, getMessage, messageImage } from "@/lib/messages";

export function generateStaticParams() {
  return messages.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const m = getMessage(id);
  return { title: m ? m.title : "Message" };
}

export default async function MessagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const m = getMessage(id);
  if (!m) notFound();

  const related = messages.filter((r) => r.series === m.series && r.id !== m.id).slice(0, 3);

  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="watch" />

      {/* VIDEO PLAYER */}
      <section style={{ background: "#05101f", paddingTop: 78 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <YouTubeEmbed
            videoId={m.youtubeId}
            playlistId={m.youtubeId ? undefined : site.youtube.uploadsPlaylist}
            title={m.title}
            rounded={false}
          />
        </div>
      </section>

      {/* META */}
      <section style={{ background: "#fff", padding: "clamp(40px,5vw,64px) clamp(20px,4vw,40px) clamp(56px,7vw,90px)" }}>
        <div style={{ maxWidth: 1080, margin: "0 auto" }}>
          <Link href={`/watch/series/${m.series}`} style={{ display: "inline-block", fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 14px", textDecoration: "none" }}>{m.seriesName}{m.part ? ` · ${m.part}` : ""}</Link>
          <h1 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(30px,4.6vw,56px)", lineHeight: 1.02, letterSpacing: "-.03em", margin: "0 0 20px" }}>{m.title}</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", color: "var(--slate)", fontSize: 15, paddingBottom: 30, borderBottom: "1px solid #eceef2" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E6BE6" strokeWidth="1.8"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></svg>
              {m.speaker}
            </span>
            {m.date ? (
              <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E6BE6" strokeWidth="1.8"><rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M3 9h18M8 2.5v4M16 2.5v4" /></svg>
                {m.date}
              </span>
            ) : null}
            <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E6BE6" strokeWidth="1.8"><path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8z" /><circle cx="12" cy="10" r="2.4" /></svg>
              {m.campus}
            </span>
            <span style={{ display: "flex", gap: 10, marginLeft: "auto" }}>
              <Hover as="a" href={site.youtube.channel} target="_blank" rel="noopener" aria-label="Share" style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--ink)", textDecoration: "none", fontWeight: 600, fontSize: 14, border: "1px solid #d4d8e0", padding: "9px 18px", borderRadius: 100, transition: "border-color .2s" }} hoverStyle={{ borderColor: "var(--accent)" }}>
                Share
              </Hover>
            </span>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section style={{ background: "#F4F5F7", padding: "clamp(56px,7vw,96px) clamp(20px,4vw,40px)" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <Reveal style={{ marginBottom: 32 }}>
              <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 14px" }}>More From This Series</p>
              <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(24px,3.2vw,38px)", lineHeight: 1.05, letterSpacing: "-.02em", margin: 0 }}>{m.seriesName}</h2>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 22 }}>
              {related.map((r, i) => (
                <Reveal key={r.id} as={Link} href={`/messages/${r.id}`} delay={i * 0.06} className="lift" style={{ display: "block", background: "#fff", borderRadius: 8, overflow: "hidden", textDecoration: "none", color: "inherit", boxShadow: "0 1px 3px rgba(11,24,48,.08)" }}>
                  <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={messageImage(r)} alt={r.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 54, height: 54, borderRadius: "50%", background: "rgba(255,255,255,.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#2E6BE6"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                  <div style={{ padding: 20 }}>
                    <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#9aa3b5", margin: "0 0 7px" }}>{r.shortDate}</p>
                    <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 17, lineHeight: 1.2, margin: 0 }}>{r.title}</h3>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
