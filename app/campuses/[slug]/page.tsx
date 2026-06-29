import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { Hover } from "@/components/ui/Hover";
import { campuses, getCampus } from "@/lib/campuses";

export function generateStaticParams() {
  return campuses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const campus = getCampus(slug);
  return { title: campus ? campus.name : "Campus" };
}

// Representative campus happenings + announcements (prototype content).
const events = [
  { name: "21 Days of Prayer", date: "05 - 24 Jan", img: "/assets/img-pastor-preaching.jpg" },
  { name: "Baby Dedication", date: "Sun 09 Feb", img: "/assets/img-baby-dedication.jpg" },
  { name: "Worship Night", date: "Fri 21 Feb", img: "/assets/img-worship-band.jpg" },
];

const news = [
  { title: "New parking entrance", body: "Use the Silver Wings Boulevard gate for easier access on Sunday mornings." },
  { title: "Kids check-in opens 30 min early", body: "Beat the queue and settle your little ones before the service starts." },
  { title: "Growth Track this month", body: "Our next Growth Track runs the first Sunday - register at the Welcome Desk." },
];

const eyebrow = (text: string): React.ReactElement => (
  <p
    style={{
      fontFamily: "var(--font-archivo)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: ".22em",
      textTransform: "uppercase",
      color: "var(--accent)",
      margin: "0 0 14px",
    }}
  >
    {text}
  </p>
);

const h2: React.CSSProperties = {
  fontFamily: "var(--font-archivo)",
  fontWeight: 800,
  fontSize: "clamp(26px,3.6vw,44px)",
  lineHeight: 1.04,
  letterSpacing: "-.02em",
  margin: 0,
};

export default async function CampusPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const campus = getCampus(slug);
  if (!campus) notFound();

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(campus.mapQuery)}&z=14&output=embed`;

  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="campuses" overlay />

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "66vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={campus.heroImage}
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,15,33,.92), rgba(7,15,33,.3) 70%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1340, width: "100%", margin: "0 auto", padding: "0 clamp(20px,4vw,40px) 64px" }}>
          <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "var(--accent-lighter)", margin: "0 0 16px" }}>
            {campus.suburb}
          </p>
          <h1 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(42px,7.5vw,98px)", lineHeight: 0.95, letterSpacing: "-.03em", color: "#fff", margin: 0 }}>
            {campus.name}
          </h1>
        </div>
      </section>

      {/* INFO BAR */}
      <section style={{ background: "#0B1830", color: "#fff" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 1, background: "rgba(255,255,255,.08)" }}>
            <div style={{ background: "#0B1830", padding: "30px clamp(16px,2vw,28px)", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6F9CF0" strokeWidth="1.7" style={{ flexShrink: 0, marginTop: 2 }}>
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              <div>
                <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--accent-lighter)", margin: "0 0 6px" }}>Service Times</p>
                <p style={{ fontSize: 14.5, color: "rgba(255,255,255,.85)", margin: 0, lineHeight: 1.5 }}>{campus.times}</p>
              </div>
            </div>
            <div style={{ background: "#0B1830", padding: "30px clamp(16px,2vw,28px)", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6F9CF0" strokeWidth="1.7" style={{ flexShrink: 0, marginTop: 2 }}>
                <path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8z" />
                <circle cx="12" cy="10" r="2.6" />
              </svg>
              <div>
                <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--accent-lighter)", margin: "0 0 6px" }}>Address</p>
                <p style={{ fontSize: 14.5, color: "rgba(255,255,255,.85)", margin: 0, lineHeight: 1.5 }}>
                  {campus.addressLines.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < campus.addressLines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div style={{ background: "#0B1830", padding: "30px clamp(16px,2vw,28px)", display: "flex", gap: 14, alignItems: "flex-start" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6F9CF0" strokeWidth="1.7" style={{ flexShrink: 0, marginTop: 2 }}>
                <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L7.6 9.8a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
              </svg>
              <div>
                <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 11, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--accent-lighter)", margin: "0 0 6px" }}>Phone &amp; Email</p>
                <p style={{ fontSize: 14.5, color: "rgba(255,255,255,.85)", margin: 0, lineHeight: 1.5 }}>
                  {campus.phone}
                  <br />
                  {campus.email}
                </p>
              </div>
            </div>
            <div style={{ background: "var(--accent)", padding: "30px clamp(16px,2vw,28px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Link href="/new" style={{ color: "#fff", textDecoration: "none", fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 15, display: "inline-flex", alignItems: "center", gap: 9 }}>
                Plan Your Visit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS PASTOR */}
      {campus.pastor && (
        <section style={{ background: "#fff", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
          <Reveal style={{ maxWidth: 880, margin: "0 auto", display: "flex", alignItems: "center", gap: "clamp(24px,4vw,48px)", flexWrap: "wrap" }}>
            {campus.pastor.image && (
              <div style={{ width: 140, height: 140, borderRadius: "50%", overflow: "hidden", flexShrink: 0, boxShadow: "0 16px 36px -16px rgba(11,24,48,.4)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={campus.pastor.image} alt={campus.pastor.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            )}
            <div style={{ flex: 1, minWidth: 240 }}>
              <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 10px" }}>
                {campus.pastor.role}
              </p>
              <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(24px,3vw,32px)", margin: "0 0 12px" }}>
                {campus.pastor.name}
              </h3>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-soft)", margin: 0 }}>
                “{campus.pastor.welcome}”
              </p>
            </div>
          </Reveal>
        </section>
      )}

      {/* WHAT'S HAPPENING */}
      <section style={{ background: "#F4F5F7", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto" }}>
          <Reveal style={{ marginBottom: 40 }}>
            {eyebrow("At This Campus")}
            <h2 style={h2}>What’s Happening</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {events.map((e, i) => (
              <Reveal
                key={e.name}
                as={Link}
                href="/events"
                delay={i * 0.06}
                className="lift"
                style={{
                  display: "block",
                  background: "#fff",
                  borderRadius: 8,
                  overflow: "hidden",
                  textDecoration: "none",
                  color: "inherit",
                  boxShadow: "0 1px 3px rgba(11,24,48,.08)",
                }}
              >
                <div style={{ aspectRatio: "16 / 10", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={e.img} alt={e.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: 24 }}>
                  <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 10px" }}>
                    {e.date}
                  </p>
                  <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 20, margin: 0 }}>{e.name}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS */}
      <section style={{ background: "#fff", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <Reveal style={{ marginBottom: 32 }}>
            {eyebrow("Stay in the Loop")}
            <h2 style={{ ...h2, fontSize: "clamp(26px,3.6vw,40px)" }}>Campus Announcements</h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {news.map((n, i) => (
              <Reveal
                key={n.title}
                delay={i * 0.05}
                style={{ display: "flex", gap: 18, alignItems: "flex-start", background: "#F4F5F7", borderRadius: 8, padding: "24px 26px" }}
              >
                <span style={{ flexShrink: 0, width: 10, height: 10, borderRadius: "50%", background: "var(--accent)", marginTop: 7 }} />
                <div>
                  <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 18, margin: "0 0 6px" }}>{n.title}</h3>
                  <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.55, margin: 0 }}>{n.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIRECTIONS / MAP */}
      <section style={{ background: "#F4F5F7", padding: "0 0 clamp(64px,8vw,110px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px) 0" }}>
          <Reveal style={{ marginBottom: 32 }}>
            {eyebrow("Getting Here")}
            <h2 style={{ ...h2, fontSize: "clamp(26px,3.6vw,40px)" }}>Directions &amp; Parking</h2>
          </Reveal>
          <div style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 3px rgba(11,24,48,.1)", height: "clamp(320px,42vw,480px)" }}>
            <iframe
              title={`${campus.name} map`}
              src={mapSrc}
              style={{ width: "100%", height: "100%", border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
