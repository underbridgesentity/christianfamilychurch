import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Hover } from "@/components/ui/Hover";

export const metadata = { title: "Our Story" };

const eyebrow: React.CSSProperties = {
  fontFamily: "var(--font-archivo)",
  fontWeight: 700,
  fontSize: 12,
  letterSpacing: ".2em",
  textTransform: "uppercase",
  color: "#2E6BE6",
  margin: "0 0 14px",
};

const chapterHeading: React.CSSProperties = {
  fontFamily: "var(--font-archivo)",
  fontWeight: 800,
  fontSize: "clamp(24px,3vw,34px)",
  lineHeight: 1.08,
  letterSpacing: "-.02em",
  margin: "0 0 16px",
};

const chapterBody: React.CSSProperties = { fontSize: 16.5, lineHeight: 1.7, color: "#3a4660", margin: 0 };

const chapters = [
  {
    img: "/assets/img-pastor-preaching.jpg",
    alt: "The beginning",
    eyebrow: "The Beginning",
    title: "Founded on faith",
    body: "Apostle Theo and Dr Beverley Wolmarans planted Christian Family Church with a conviction that the local church is the hope of the world. What started small has grown into a thriving family that calls Johannesburg home.",
    reversed: false,
  },
  {
    img: "/assets/img-worship-band.jpg",
    alt: "Growing together",
    eyebrow: "Today",
    title: "A family on mission",
    body: "Across our campuses, thousands gather each weekend to worship, grow in small groups, serve on Dream Team, and reach our city. We are one church in many locations, living life together.",
    reversed: true,
  },
  {
    img: "/assets/img-crowd-spotlights.jpg",
    alt: "The future",
    eyebrow: "The Future",
    title: "Reaching the whole city",
    body: "We are believing for more campuses, more leaders, and more lives changed, so that everyone, everywhere has a church home within reach.",
    reversed: false,
  },
];

export default function OurStoryPage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "#11203F", background: "#fff" }}>
      <Nav active="about" overlay />

      <PageHero
        image="/assets/img-congregation-screens.jpg"
        eyebrow="About CFC"
        title="Our Story"
        minHeight="62vh"
        gradient="linear-gradient(to top, rgba(7,15,33,.92), rgba(7,15,33,.3) 70%)"
      />

      {/* LEAD STATEMENT */}
      <section style={{ background: "#fff", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <Reveal style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(24px,3.4vw,38px)", lineHeight: 1.28, letterSpacing: "-.01em", color: "#11203F", margin: 0 }}>
            From a handful of people with a God-sized vision to a multi-campus family across Johannesburg, the heart of CFC has never changed: reach people and build lives.
          </p>
        </Reveal>
      </section>

      {/* CHAPTERS */}
      <section style={{ background: "#F4F5F7", padding: "clamp(56px,7vw,96px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(40px,6vw,80px)" }}>
          {chapters.map((c) => (
            <Reveal key={c.title} className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "clamp(28px,4vw,60px)", alignItems: "center" }}>
              <div style={{ order: c.reversed ? 2 : undefined, borderRadius: 10, overflow: "hidden", aspectRatio: "4 / 3" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ order: c.reversed ? 1 : undefined }}>
                <p style={eyebrow}>{c.eyebrow}</p>
                <h3 style={chapterHeading}>{c.title}</h3>
                <p style={chapterBody}>{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0B1830", color: "#fff", padding: "clamp(72px,10vw,130px) clamp(20px,4vw,40px)", textAlign: "center" }}>
        <Reveal style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(30px,5vw,54px)", lineHeight: 1.04, letterSpacing: "-.02em", margin: "0 0 30px" }}>Be part of the story</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Hover as={Link} href="/new" style={{ background: "#2E6BE6", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 16, padding: "17px 38px", borderRadius: 100, transition: "background .2s,transform .2s" }} hoverStyle={{ background: "#1f54c4", transform: "translateY(-2px)" }}>
              Plan Your Visit
            </Hover>
            <Hover as={Link} href="/about/leadership" style={{ background: "transparent", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "17px 36px", borderRadius: 100, border: "1px solid rgba(255,255,255,.3)", transition: "background .2s" }} hoverStyle={{ background: "rgba(255,255,255,.1)" }}>
              Meet Our Team
            </Hover>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
