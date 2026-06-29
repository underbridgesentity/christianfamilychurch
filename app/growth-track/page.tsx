import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Hover } from "@/components/ui/Hover";

export const metadata = { title: "Growth Track" };

const steps = [
  {
    no: "01",
    label: "Know God",
    title: "Discover the heart of CFC",
    desc: "Meet the team, hear our story, and discover what we believe and where we’re going.",
    img: "/assets/img-congregation-screens.jpg",
    bg: "#fff",
    body: "#3a4660",
    num: "#eef1f6",
    kicker: "#2E6BE6",
    imgOrder: 1,
    txtOrder: 2,
  },
  {
    no: "02",
    label: "Find Freedom",
    title: "Discover how you’re wired",
    desc: "Uncover your unique design - your personality, gifts and the way God made you to thrive.",
    img: "/assets/img-worship-band.jpg",
    bg: "#F4F5F7",
    body: "#3a4660",
    num: "#e6e8ee",
    kicker: "#2E6BE6",
    imgOrder: 2,
    txtOrder: 1,
  },
  {
    no: "03",
    label: "Make a Difference",
    title: "Discover your place to serve",
    desc: "Find the Dream Team that fits your gifts and start making a difference this week.",
    img: "/assets/img-dreamteam.jpg",
    bg: "#fff",
    body: "#3a4660",
    num: "#eef1f6",
    kicker: "#2E6BE6",
    imgOrder: 1,
    txtOrder: 2,
  },
];

const dates = [
  { day: "02", mon: "Feb", campus: "CFC Johannesburg", time: "After the 10:30 AM service" },
  { day: "09", mon: "Feb", campus: "CFC South", time: "After the 10:30 AM service" },
  { day: "01", mon: "Mar", campus: "CFC Johannesburg", time: "After the 10:30 AM service" },
];

export default function GrowthTrackPage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden", fontFamily: "var(--font-hanken)", color: "#11203F", background: "#fff" }}>
      <Nav active="next" overlay />

      <PageHero
        image="/assets/img-host-welcome.jpg"
        eyebrow="Growth Track"
        title="Discover Your Purpose"
        subtitle="Three simple steps to discover who you are and find your place in the family."
        minHeight="62vh"
        gradient="linear-gradient(100deg, rgba(7,15,33,.84), rgba(7,15,33,.42))"
      />

      {/* 3 STEPS */}
      {steps.map((s) => (
        <section key={s.no} style={{ background: s.bg, color: "#11203F" }}>
          <Reveal
            className="split"
            style={{ maxWidth: 1180, margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(20px,4vw,40px)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px,4vw,64px)", alignItems: "center" }}
          >
            <div style={{ order: s.imgOrder, borderRadius: 8, overflow: "hidden", aspectRatio: "4 / 3", boxShadow: "0 30px 60px -30px rgba(11,24,48,.4)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt={s.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ order: s.txtOrder }}>
              <span style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(56px,9vw,104px)", lineHeight: 0.85, letterSpacing: "-.04em", color: s.num, display: "block" }}>{s.no}</span>
              <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: s.kicker, margin: "20px 0 10px" }}>{s.label}</p>
              <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(26px,3.4vw,40px)", lineHeight: 1.06, letterSpacing: "-.02em", margin: "0 0 14px" }}>{s.title}</h2>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: s.body, margin: 0, maxWidth: 420 }}>{s.desc}</p>
            </div>
          </Reveal>
        </section>
      ))}

      {/* DATES */}
      <section style={{ background: "#F4F5F7", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 44 }}>
            <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: "#2E6BE6", margin: "0 0 14px" }}>Schedule</p>
            <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(26px,3.6vw,42px)", lineHeight: 1.05, letterSpacing: "-.02em", margin: 0 }}>Upcoming Growth Track</h2>
          </Reveal>
          <Reveal style={{ background: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 3px rgba(11,24,48,.08)" }}>
            {dates.map((d, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, padding: "24px 28px", borderBottom: "1px solid #eceef2", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <div style={{ textAlign: "center", flexShrink: 0 }}>
                    <span style={{ display: "block", fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: 26, color: "#2E6BE6", lineHeight: 1 }}>{d.day}</span>
                    <span style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#9aa3b5" }}>{d.mon}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 17, margin: "0 0 4px" }}>{d.campus}</h3>
                    <p style={{ fontSize: 14, color: "#5A6478", margin: 0 }}>{d.time}</p>
                  </div>
                </div>
                <Hover
                  as={Link}
                  href="#register"
                  style={{ color: "#2E6BE6", textDecoration: "none", fontWeight: 600, fontSize: 14.5, border: "1px solid #cfdcf7", padding: "9px 20px", borderRadius: 100, transition: "all .2s" }}
                  hoverStyle={{ background: "#2E6BE6", color: "#fff", borderColor: "#2E6BE6" }}
                >
                  Register
                </Hover>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="register" style={{ background: "#0B1830", color: "#fff", padding: "clamp(72px,10vw,130px) clamp(20px,4vw,40px)", textAlign: "center" }}>
        <Reveal style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(30px,5vw,56px)", lineHeight: 1.04, letterSpacing: "-.02em", margin: "0 0 18px" }}>Take your first step</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,.72)", lineHeight: 1.6, margin: "0 0 34px" }}>Reserve your spot at the next Growth Track at your campus.</p>
          <Hover
            as={Link}
            href="/sign-in"
            style={{ display: "inline-block", background: "#2E6BE6", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 16, padding: "18px 44px", borderRadius: 100, transition: "background .2s,transform .2s" }}
            hoverStyle={{ background: "#1f54c4", transform: "translateY(-2px)" }}
          >
            Register Now
          </Hover>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
