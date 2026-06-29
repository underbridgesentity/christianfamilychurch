import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { ministries } from "@/lib/ministries";

export const metadata = { title: "Ministries" };

export default function MinistriesPage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="next" overlay />

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "60vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/img-baby-dedication.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(7,15,33,.84), rgba(7,15,33,.44))" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1340, width: "100%", margin: "0 auto", padding: "150px clamp(20px,4vw,40px) 90px" }}>
          <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "var(--accent-lighter)", margin: "0 0 22px" }}>Ministries</p>
          <h1 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(38px,6.4vw,86px)", lineHeight: 0.98, letterSpacing: "-.03em", color: "#fff", margin: 0, maxWidth: 780 }}>
            Built for Every Season of Life
          </h1>
        </div>
      </section>

      {/* MINISTRIES GRID */}
      <section style={{ background: "#F4F5F7", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))", gap: 26 }}>
          {ministries.map((m, i) => (
            <Reveal key={m.slug} delay={i * 0.06} className="step-card" style={{ background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 3px rgba(11,24,48,.08)", display: "flex", flexDirection: "column" }}>
              <div style={{ aspectRatio: "16 / 10", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.image} alt={m.title} className="step-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: 28, display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 23, margin: "0 0 10px" }}>{m.title}</h3>
                <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.55, margin: "0 0 22px", flex: 1 }}>{m.desc}</p>
                <Link href={`/ministries/${m.slug}`} style={{ alignSelf: "flex-start", color: "var(--accent)", textDecoration: "none", fontWeight: 600, fontSize: 15, borderBottom: "2px solid var(--accent)", paddingBottom: 3 }}>
                  Learn More →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
