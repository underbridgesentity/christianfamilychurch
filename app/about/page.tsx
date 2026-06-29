import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { leaders, seniorPastors } from "@/lib/leadership";

export const metadata = { title: "About" };

const eyebrow: React.CSSProperties = {
  fontFamily: "var(--font-archivo)",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: ".22em",
  textTransform: "uppercase",
  color: "#2E6BE6",
  margin: "0 0 16px",
};

const purpose = [
  { no: "01", title: ["Know", "God"], bg: "#fff", color: "#11203F", noColor: "#cfd5e0", delay: 0 },
  { no: "02", title: ["Find", "Freedom"], bg: "#0B1830", color: "#fff", noColor: "#3a517f", delay: 0.07 },
  { no: "03", title: ["Discover", "Purpose"], bg: "#fff", color: "#11203F", noColor: "#cfd5e0", delay: 0.14 },
  { no: "04", title: ["Make a", "Difference"], bg: "#2E6BE6", color: "#fff", noColor: "#9DBDF7", delay: 0.21 },
];

export default function AboutPage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "#11203F", background: "#fff" }}>
      <Nav active="about" overlay />

      <PageHero
        image="/assets/img-congregation-screens.jpg"
        eyebrow="About CFC"
        title="Who We Are"
        align="center"
        minHeight="64vh"
        gradient="linear-gradient(100deg, rgba(7,15,33,.84), rgba(7,15,33,.45))"
      />

      {/* PURPOSE STATEMENT */}
      <section style={{ background: "#fff", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={eyebrow}>Our Purpose</p>
            <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.1, letterSpacing: "-.02em", margin: 0, color: "#5A6478" }}>
              Four simple commitments shape everything we do.
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 1, background: "#e6e8ee", border: "1px solid #e6e8ee", borderRadius: 8, overflow: "hidden" }}>
            {purpose.map((p) => (
              <Reveal key={p.no} delay={p.delay} style={{ background: p.bg, padding: "44px 32px" }}>
                <span style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: 15, color: p.noColor }}>{p.no}</span>
                <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(24px,2.6vw,32px)", lineHeight: 1.05, letterSpacing: "-.02em", margin: "18px 0 0", color: p.color }}>
                  {p.title[0]}<br />{p.title[1]}
                </h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section style={{ background: "#F4F5F7", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(48px,7vw,96px)" }}>
          <Reveal className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px,4vw,60px)", alignItems: "center" }}>
            <div style={{ borderRadius: 8, overflow: "hidden", aspectRatio: "4 / 3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/img-pastor-preaching.jpg" alt="Our story" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <p style={eyebrow}>Our Story</p>
              <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(26px,3.2vw,38px)", lineHeight: 1.08, letterSpacing: "-.02em", margin: "0 0 18px" }}>A family that started small</h3>
              <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "#3a4660", margin: 0 }}>
                What began as a handful of people with a big vision has become a multi-campus family across Johannesburg - still driven by the same heart to reach people and build lives.
              </p>
            </div>
          </Reveal>
          <Reveal className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px,4vw,60px)", alignItems: "center" }}>
            <div style={{ order: 2, borderRadius: 8, overflow: "hidden", aspectRatio: "4 / 3" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/img-worship-band.jpg" alt="Our vision" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ order: 1 }}>
              <p style={eyebrow}>Where We’re Going</p>
              <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(26px,3.2vw,38px)", lineHeight: 1.08, letterSpacing: "-.02em", margin: "0 0 18px" }}>Reaching the whole city</h3>
              <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "#3a4660", margin: 0 }}>
                We’re planting campuses across Johannesburg so that everyone, everywhere, has a church home within reach - a place to belong, grow, and serve.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SENIOR PASTORS */}
      <section style={{ background: "#fff", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,40px)" }}>
        <Reveal className="split" style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "clamp(28px,4vw,60px)", alignItems: "center" }}>
          <div style={{ borderRadius: 8, overflow: "hidden", aspectRatio: "4 / 5", boxShadow: "0 30px 60px -30px rgba(11,24,48,.45)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={seniorPastors.image} alt="Apostle Theo and Dr Beverley Wolmarans" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>
          <div>
            <p style={eyebrow}>Founding &amp; Senior Pastors</p>
            <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(28px,3.6vw,44px)", lineHeight: 1.05, letterSpacing: "-.02em", margin: "0 0 16px" }}>Apostle Theo &amp; Dr Beverley Wolmarans</h3>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "#3a4660", margin: 0 }}>
              Apostle Theo and Dr Beverley Wolmarans founded Christian Family Church with a heart to reach people and build lives. Decades on, they still lead the family with the same passion to see people know God, find freedom and discover their purpose.
            </p>
          </div>
        </Reveal>
      </section>

      {/* LEADERSHIP */}
      <section style={{ background: "#0B1830", color: "#fff", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal style={{ marginBottom: 48 }}>
            <p style={{ ...eyebrow, color: "#9DBDF7" }}>Our Team</p>
            <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.04, letterSpacing: "-.02em", margin: 0 }}>Leadership Team</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
            {leaders.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.05} style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 8, padding: 30, textAlign: "center" }}>
                <div style={{ width: 84, height: 84, borderRadius: "50%", margin: "0 auto 18px", background: "linear-gradient(135deg,#2E6BE6,#1c3f8f)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 26, color: "#fff" }}>{p.initials}</div>
                <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 17, margin: "0 0 5px" }}>{p.name}</h3>
                <p style={{ fontSize: 13.5, color: "rgba(255,255,255,.55)", margin: 0 }}>{p.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT OF FAITH TEASER */}
      <section style={{ background: "#fff", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <Reveal style={{ marginBottom: 40 }}>
            <p style={eyebrow}>What We Believe</p>
            <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.04, letterSpacing: "-.02em", margin: "0 0 24px" }}>Statement of Faith</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "#3a4660", margin: "0 0 28px" }}>
              We hold to the historic Christian faith, anchored in the Scriptures of the Old and New Testaments as the supreme and final authority for faith and life.
            </p>
            <Link href="/about/statement-of-faith" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#2E6BE6", textDecoration: "none", fontWeight: 700, fontSize: 15, borderBottom: "2px solid #2E6BE6", paddingBottom: 3 }}>
              Read our full Statement of Faith <span style={{ fontSize: 17 }}>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
