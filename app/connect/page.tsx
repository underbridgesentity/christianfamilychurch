import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata = { title: "Connect" };

const cards = [
  { title: "Join CFC", label: "Become a Member", img: "/assets/img-congregation-screens.jpg", href: "/growth-track" },
  { title: "Water Baptism", label: "Take the Plunge", img: "/assets/other/baptism-1.jpg", href: "/events" },
  { title: "Small Groups", label: "Find Your People", img: "/assets/img-baby-dedication.jpg", href: "/small-groups" },
  { title: "Growth Track", label: "Discover Purpose", img: "/assets/img-host-welcome.jpg", href: "/growth-track" },
  { title: "Dream Team", label: "Use Your Gifts", img: "/assets/img-dreamteam.jpg", href: "/dream-team" },
  { title: "Events", label: "What’s Happening", img: "/assets/img-crowd-spotlights.jpg", href: "/events" },
];

export default function ConnectPage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden", fontFamily: "var(--font-hanken)", color: "#11203F", background: "#fff" }}>
      <Nav active="next" overlay />

      <PageHero
        image="/assets/img-worship-band.jpg"
        eyebrow="Connect"
        title="Get Connected"
        subtitle="Church was never meant to be done alone. Here’s how to take your next step."
        minHeight="56vh"
        gradient="linear-gradient(100deg, rgba(7,15,33,.84), rgba(7,15,33,.45))"
      />

      <section style={{ background: "#F4F5F7", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          {cards.map((c, i) => (
            <Reveal
              key={c.title}
              as={Link}
              href={c.href}
              delay={i * 0.06}
              className="step-card"
              style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", borderRadius: 8, overflow: "hidden", aspectRatio: "4 / 3", textDecoration: "none", color: "#fff" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.title} className="step-img" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,15,33,.9) 6%, rgba(7,15,33,.15) 60%)" }} />
              <div style={{ position: "relative", padding: 30 }}>
                <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 11.5, letterSpacing: ".2em", textTransform: "uppercase", color: "#9DBDF7", margin: "0 0 9px" }}>{c.label}</p>
                <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 26, margin: 0 }}>{c.title}</h3>
                <span className="step-cta" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 13, fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 12.5, letterSpacing: ".04em", color: "#fff" }}>
                  Explore <span style={{ fontSize: 16 }}>→</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
