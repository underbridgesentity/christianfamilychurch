import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { leaders, seniorPastors } from "@/lib/leadership";

export const metadata = { title: "Our Leadership" };

export default function LeadershipPage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "#11203F", background: "#fff" }}>
      <Nav active="about" overlay />

      <PageHero
        image="/assets/img-crowd-spotlights.jpg"
        eyebrow="About CFC"
        title="Our Leadership"
        minHeight="58vh"
        gradient="linear-gradient(to top, rgba(7,15,33,.92), rgba(7,15,33,.3) 70%)"
      />

      {/* SENIOR PASTORS */}
      <section style={{ background: "#fff", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <Reveal className="split" style={{ maxWidth: 1080, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "clamp(28px,4vw,60px)", alignItems: "center" }}>
          <div style={{ borderRadius: 10, overflow: "hidden", aspectRatio: "4 / 5", boxShadow: "0 30px 60px -30px rgba(11,24,48,.45)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={seniorPastors.image} alt="Apostle Theo and Dr Beverley Wolmarans" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>
          <div>
            <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: "#2E6BE6", margin: "0 0 16px" }}>{seniorPastors.role}</p>
            <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(28px,3.6vw,44px)", lineHeight: 1.05, letterSpacing: "-.02em", margin: "0 0 16px" }}>{seniorPastors.name}</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "#3a4660", margin: 0 }}>{seniorPastors.bio}</p>
          </div>
        </Reveal>
      </section>

      {/* LEADERSHIP TEAM */}
      <section style={{ background: "#0B1830", color: "#fff", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal style={{ marginBottom: 48 }}>
            <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: "#9DBDF7", margin: "0 0 16px" }}>Our Team</p>
            <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.04, letterSpacing: "-.02em", margin: 0 }}>The Leadership Team</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
            {leaders.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.05} style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: 30, textAlign: "center" }}>
                <div style={{ width: 84, height: 84, borderRadius: "50%", margin: "0 auto 18px", background: "linear-gradient(135deg,#2E6BE6,#1c3f8f)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 26, color: "#fff" }}>{p.initials}</div>
                <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 17, margin: "0 0 5px" }}>{p.name}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,.55)", margin: 0, lineHeight: 1.4 }}>{p.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
