import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Hover } from "@/components/ui/Hover";

export const metadata = { title: "Dream Team" };

const teams = [
  { name: "Hosting", desc: "Welcome people and make every guest feel at home.", img: "/assets/img-host-welcome.jpg" },
  { name: "Kids", desc: "Shape the next generation in a fun, safe space.", img: "/assets/img-baby-dedication.jpg" },
  { name: "Youth", desc: "Walk with teenagers as they find faith and friendship.", img: "/assets/img-dreamteam.jpg" },
  { name: "Production", desc: "Run sound, lights and screens that carry the message.", img: "/assets/img-congregation-screens.jpg" },
  { name: "Worship", desc: "Lead the room into God’s presence through music.", img: "/assets/img-worship-vocalist.jpg" },
  { name: "Outreach", desc: "Take love and practical help into the community.", img: "/assets/img-crowd-spotlights.jpg" },
];

export default function DreamTeamPage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden", fontFamily: "var(--font-hanken)", color: "#11203F", background: "#fff" }}>
      <Nav active="next" overlay />

      <PageHero
        image="/assets/img-dreamteam.jpg"
        eyebrow="Dream Team"
        title="Use Your Gifts"
        subtitle="You were made to make a difference. Find a team and serve alongside this family."
        minHeight="62vh"
        gradient="linear-gradient(100deg, rgba(7,15,33,.82), rgba(7,15,33,.4))"
      />

      <section style={{ background: "#fff", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto" }}>
          <Reveal style={{ marginBottom: 44 }}>
            <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: "#2E6BE6", margin: "0 0 14px" }}>Where You Can Serve</p>
            <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.04, letterSpacing: "-.02em", margin: 0 }}>Find your team</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 24 }}>
            {teams.map((t, i) => (
              <Reveal
                key={t.name}
                as={Link}
                href="#join"
                delay={i * 0.06}
                className="step-card"
                style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", borderRadius: 8, overflow: "hidden", aspectRatio: "5 / 4", textDecoration: "none", color: "#fff" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.img} alt={t.name} className="step-img" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,15,33,.92) 8%, rgba(7,15,33,.1) 65%)" }} />
                <div style={{ position: "relative", padding: 28 }}>
                  <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 24, margin: "0 0 8px" }}>{t.name}</h3>
                  <p style={{ fontSize: 14.5, color: "rgba(255,255,255,.75)", lineHeight: 1.5, margin: 0 }}>{t.desc}</p>
                  <span className="step-cta" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 14, fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 12.5, letterSpacing: ".04em", color: "#fff" }}>
                    Get involved <span style={{ fontSize: 16 }}>→</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="join" style={{ position: "relative", overflow: "hidden", background: "#0B1830" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/img-dreamteam.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(8,18,38,.92), rgba(11,24,48,.72))" }} />
        <Reveal style={{ position: "relative", maxWidth: 720, margin: "0 auto", padding: "clamp(72px,10vw,130px) clamp(20px,4vw,40px)", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(30px,5vw,56px)", lineHeight: 1.04, letterSpacing: "-.02em", color: "#fff", margin: "0 0 18px" }}>Ready to join a team?</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,.72)", lineHeight: 1.6, margin: "0 0 34px" }}>Tell us where you’d love to serve and a team leader will be in touch.</p>
          <Hover
            as={Link}
            href="/contact"
            style={{ display: "inline-block", background: "#2E6BE6", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 16, padding: "18px 44px", borderRadius: 100, transition: "background .2s,transform .2s" }}
            hoverStyle={{ background: "#1f54c4", transform: "translateY(-2px)" }}
          >
            Join a Team
          </Hover>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
