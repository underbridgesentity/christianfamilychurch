import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Hover } from "@/components/ui/Hover";
import { campuses } from "@/lib/campuses";

export const metadata = { title: "Campuses" };

export default function CampusesPage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="campuses" overlay />

      {/* HERO */}
      <PageHero
        image="/assets/img-crowd-spotlights.jpg"
        eyebrow="Campuses"
        title="Find Your Campus"
        subtitle="One church, many locations across Johannesburg."
        align="center"
        gradient="linear-gradient(100deg, rgba(7,15,33,.85), rgba(7,15,33,.45))"
      />

      {/* CAMPUS CARDS */}
      <section style={{ background: "#F4F5F7", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <div
          style={{
            maxWidth: 1340,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
            gap: 28,
          }}
        >
          {campuses.map((c, i) => (
            <Reveal
              key={c.slug}
              delay={i * 0.06}
              className="step-card"
              style={{
                background: "#fff",
                borderRadius: 10,
                overflow: "hidden",
                boxShadow: "0 1px 3px rgba(11,24,48,.08)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={c.name}
                  className="step-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: 18,
                    left: 18,
                    background: "rgba(255,255,255,.92)",
                    color: "#11203F",
                    fontFamily: "var(--font-archivo)",
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    padding: "7px 14px",
                    borderRadius: 100,
                  }}
                >
                  {c.suburb}
                </span>
              </div>
              <div style={{ padding: 30, display: "flex", flexDirection: "column", flex: 1 }}>
                <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 27, margin: "0 0 16px" }}>
                  {c.name}
                </h3>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 11, marginBottom: 10, color: "var(--ink-soft)", fontSize: 15 }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2E6BE6" strokeWidth="1.8" style={{ flexShrink: 0, marginTop: 2 }}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  <span>{c.times}</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 11, marginBottom: 24, color: "var(--ink-soft)", fontSize: 15 }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#2E6BE6" strokeWidth="1.8" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8z" />
                    <circle cx="12" cy="10" r="2.6" />
                  </svg>
                  <span>{c.address}</span>
                </div>
                <Hover
                  as={Link}
                  href={`/campuses/${c.slug}`}
                  style={{
                    marginTop: "auto",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 9,
                    background: "var(--accent)",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: 700,
                    fontSize: 15,
                    padding: "15px 28px",
                    borderRadius: 100,
                    transition: "background .2s",
                  }}
                  hoverStyle={{ background: "var(--accent-dark)" }}
                >
                  Visit This Campus →
                </Hover>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ALL LOCATIONS MAP */}
      <section style={{ background: "#fff", padding: "0 0 clamp(64px,8vw,110px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
          <Reveal style={{ marginBottom: 32 }}>
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
              All Locations
            </p>
            <h2
              style={{
                fontFamily: "var(--font-archivo)",
                fontWeight: 800,
                fontSize: "clamp(26px,3.4vw,40px)",
                lineHeight: 1.05,
                letterSpacing: "-.02em",
                margin: 0,
              }}
            >
              Across Johannesburg
            </h2>
          </Reveal>
          <div
            style={{
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 1px 3px rgba(11,24,48,.1)",
              height: "clamp(320px,46vw,520px)",
              filter: "saturate(.9)",
            }}
          >
            <iframe
              title="CFC campuses map"
              src="https://www.google.com/maps?q=Johannesburg,South+Africa&z=10&output=embed"
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
