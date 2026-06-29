import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Hover } from "@/components/ui/Hover";

export const metadata = { title: "New to CFC" };

const introCards = [
  {
    href: "/campuses",
    img: "/assets/img-congregation-wide.jpg",
    alt: "Service times",
    title: "Service Times & Map",
    body: "Find a campus, a time, and directions to get there.",
  },
  {
    href: "#sunday",
    img: "/assets/img-worship-band.jpg",
    alt: "What to expect",
    title: "What to Expect",
    body: "Modern worship, a real message, and a warm welcome.",
  },
  {
    href: "/contact",
    img: "/assets/img-host-welcome.jpg",
    alt: "Plan your visit",
    title: "Plan Your Visit",
    body: "Let us know you’re coming and we’ll look out for you.",
  },
];

const sundaySteps = [
  { n: "01", title: "Arrive & Park", body: "Friendly hosts will meet you at the door." },
  { n: "02", title: "Check In Kids", body: "A safe, fun space built just for them." },
  { n: "03", title: "Worship & Word", body: "About 75 minutes of worship and a message." },
  { n: "04", title: "Let’s Connect", body: "Grab a coffee and meet the team." },
];

export default function NewToCFCPage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="new" overlay />

      {/* HERO */}
      <PageHero
        image="/assets/img-baby-dedication.jpg"
        eyebrow="New to CFC"
        title="You’re Welcome Here."
        subtitle="Walking into a church for the first time takes courage. We’ll make the rest easy."
        minHeight="70vh"
        gradient="linear-gradient(100deg, rgba(7,15,33,.82), rgba(7,15,33,.4))"
      />

      {/* 3 INTRO CARDS */}
      <section style={{ background: "#fff", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,40px)" }}>
        <div
          style={{
            maxWidth: 1340,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))",
            gap: 24,
          }}
        >
          {introCards.map((c, i) => (
            <Reveal
              key={c.title}
              as={Link}
              href={c.href}
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
              <div style={{ aspectRatio: "16 / 11", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: 28 }}>
                <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 22, margin: "0 0 10px" }}>
                  {c.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--slate)", lineHeight: 1.55, margin: 0 }}>{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHAT A SUNDAY LOOKS LIKE */}
      <section id="sunday" style={{ background: "#0B1830", color: "#fff", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
            <p
              style={{
                fontFamily: "var(--font-archivo)",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: "#9DBDF7",
                margin: "0 0 16px",
              }}
            >
              Your First Sunday
            </p>
            <h2
              style={{
                fontFamily: "var(--font-archivo)",
                fontWeight: 800,
                fontSize: "clamp(28px,4.2vw,48px)",
                lineHeight: 1.04,
                letterSpacing: "-.02em",
                margin: 0,
              }}
            >
              Here’s how it goes
            </h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18 }}>
            {sundaySteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <span style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: 56, color: "#2E6BE6", display: "block", lineHeight: 1 }}>
                  {s.n}
                </span>
                <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 19, margin: "14px 0 8px" }}>{s.title}</h3>
                <p style={{ fontSize: 14.5, color: "rgba(255,255,255,.6)", lineHeight: 1.55, margin: 0 }}>{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PASTORAL WELCOME */}
      <section style={{ background: "#F4F5F7", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,40px)" }}>
        <Reveal
          className="split"
          style={{
            maxWidth: 1080,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: "clamp(28px,4vw,60px)",
            alignItems: "center",
          }}
        >
          <div style={{ borderRadius: 8, overflow: "hidden", aspectRatio: "4 / 5", boxShadow: "0 30px 60px -30px rgba(11,24,48,.45)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/pastors-wolmarans.jpg"
              alt="Apostle Theo and Dr Beverley Wolmarans"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          <div>
            <svg width="46" height="46" viewBox="0 0 24 24" fill="#2E6BE6" style={{ opacity: 0.25, marginBottom: 6 }}>
              <path d="M9.5 6C6 7 4 10 4 13.5V18h5.5v-5.5H7c0-2 1.2-3.5 3-4L9.5 6Zm9 0c-3.5 1-5.5 4-5.5 7.5V18h5.5v-5.5H16c0-2 1.2-3.5 3-4L18.5 6Z" />
            </svg>
            <p
              style={{
                fontFamily: "var(--font-archivo)",
                fontWeight: 700,
                fontSize: "clamp(22px,2.8vw,32px)",
                lineHeight: 1.3,
                letterSpacing: "-.01em",
                color: "#11203F",
                margin: "0 0 26px",
              }}
            >
              “Whoever you are and whatever you’ve walked through, you’re not here by accident. There’s a place for you in this family.”
            </p>
            <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 17, margin: 0 }}>
              Apostle Theo & Dr Beverley Wolmarans
            </p>
            <p style={{ fontSize: 14.5, color: "var(--slate)", margin: "4px 0 0" }}>
              Founding & Senior Pastors, Christian Family Church
            </p>
          </div>
        </Reveal>
      </section>

      {/* NEXT STEP CTA */}
      <section style={{ background: "#fff", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,40px)" }}>
        <Reveal style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-archivo)",
              fontWeight: 800,
              fontSize: "clamp(30px,4.6vw,54px)",
              lineHeight: 1.03,
              letterSpacing: "-.02em",
              margin: "0 0 32px",
            }}
          >
            Ready to take a next step?
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Hover
              as={Link}
              href="/growth-track"
              style={{ background: "#2E6BE6", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 16, padding: "17px 38px", borderRadius: 100, transition: "background .2s,transform .2s" }}
              hoverStyle={{ background: "#1f54c4", transform: "translateY(-2px)" }}
            >
              Growth Track
            </Hover>
            <Hover
              as={Link}
              href="/connect"
              style={{ background: "#fff", color: "#11203F", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "17px 36px", borderRadius: 100, border: "1px solid #d4d8e0", transition: "border-color .2s" }}
              hoverStyle={{ borderColor: "#2E6BE6" }}
            >
              Connect with Us
            </Hover>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
