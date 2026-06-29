import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HeroVideo } from "@/components/ui/HeroVideo";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { Reveal } from "@/components/ui/Reveal";
import { Hover } from "@/components/ui/Hover";
import { campuses } from "@/lib/campuses";
import { site } from "@/lib/site";

const eyebrow: React.CSSProperties = {
  fontFamily: "var(--font-archivo)",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: ".22em",
  textTransform: "uppercase",
  color: "var(--accent)",
  margin: "0 0 16px",
};

const h2: React.CSSProperties = {
  fontFamily: "var(--font-archivo)",
  fontWeight: 800,
  fontSize: "clamp(30px,4.4vw,52px)",
  lineHeight: 1.03,
  letterSpacing: "-.02em",
  margin: 0,
};

const quickLinks = [
  { href: "/campuses", title: "Service Times", sub: site.serviceTimes, icon: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6F9CF0" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
  ) },
  { href: "/watch", title: "Watch Online", sub: "Live & on demand", icon: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6F9CF0" strokeWidth="1.7"><rect x="2" y="4" width="20" height="15" rx="2.5" /><path d="M10 9l5 2.5-5 2.5z" fill="#6F9CF0" stroke="none" /></svg>
  ) },
  { href: "/giving", title: "Give", sub: "Partner with us", icon: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6F9CF0" strokeWidth="1.6"><path d="M20 12v8H4v-8" /><path d="M2 7.5h20V12H2z" /><path d="M12 7.5V20" /><path d="M12 7.5C11 4 9.2 3.4 8 4.1 6.3 5 7 7.5 9 7.5zM12 7.5c1-3.5 2.8-4.1 4-3.4 1.7.9 1 3.4-1 3.4z" /></svg>
  ) },
  { href: "/new", title: "New to CFC", sub: "Start here", icon: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6F9CF0" strokeWidth="1.7"><path d="M12 12a4 4 0 100-8 4 4 0 000 8z" /><path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" /></svg>
  ) },
];

const nextSteps = [
  { href: "/growth-track", label: "Discover Purpose", title: "Growth Track", img: "/assets/img-host-welcome.jpg" },
  { href: "/small-groups", label: "Find Community", title: "Small Groups", img: "/assets/img-baby-dedication.jpg" },
  { href: "/dream-team", label: "Use Your Gifts", title: "Dream Team", img: "/assets/img-dreamteam.jpg" },
];

const family = [
  { href: "/ministries/childrens-world", title: "Children’s World", img: "/assets/img-baby-dedication.jpg" },
  { href: "/ministries/youth", title: "Youth Ministry", img: "/assets/img-dreamteam.jpg" },
  { href: "/ministries/marriage", title: "Marriage", img: "/assets/img-worship-band.jpg" },
  { href: "/ministries/missions", title: "Missions", img: "/assets/img-crowd-spotlights.jpg" },
];

export default function HomePage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav overlay />

      {/* HERO */}
      <HeroVideo src="/assets/hero.mp4" poster="/assets/welcome-banner.jpg">
        <h1 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(38px,6.6vw,88px)", lineHeight: 1, letterSpacing: "-.03em", color: "#fff", margin: "0 0 22px" }}>
          Living Life Together
        </h1>
        <p style={{ fontSize: "clamp(18px,2.1vw,24px)", fontWeight: 300, lineHeight: 1.55, color: "rgba(255,255,255,.84)", maxWidth: 840, margin: "0 auto 38px" }}>
          A church for everyone, across Johannesburg.<br />
          Whoever you are, wherever you’ve been -<br />
          there’s a place for you here.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
          <Hover as={Link} href="/new" style={{ background: "var(--accent)", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 16, padding: "17px 38px", borderRadius: 100, transition: "background .2s,transform .2s" }} hoverStyle={{ background: "var(--accent-dark)", transform: "translateY(-2px)" }}>
            Plan Your Visit
          </Hover>
          <Hover as={Link} href="/watch" style={{ background: "rgba(255,255,255,.1)", backdropFilter: "blur(6px)", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "17px 36px", borderRadius: 100, border: "1px solid rgba(255,255,255,.32)", transition: "background .2s" }} hoverStyle={{ background: "rgba(255,255,255,.2)" }}>
            Watch Online
          </Hover>
        </div>
      </HeroVideo>

      {/* QUICK LINKS */}
      <section style={{ background: "#0B1830" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 clamp(20px,4vw,40px)" }}>
          <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "rgba(255,255,255,.08)" }}>
            {quickLinks.map((q) => (
              <Hover key={q.title} as={Link} href={q.href} style={{ display: "flex", alignItems: "center", gap: 16, padding: "30px clamp(18px,2.5vw,34px)", background: "#0B1830", textDecoration: "none", color: "#fff", transition: "background .25s" }} hoverStyle={{ background: "#13244a" }}>
                {q.icon}
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 16 }}>{q.title}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,.55)" }}>{q.sub}</span>
                </span>
              </Hover>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST MESSAGE */}
      <section style={{ background: "#fff", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Reveal className="split" style={{ display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: "clamp(28px,4vw,56px)", alignItems: "center" }}>
            <YouTubeEmbed playlistId={site.youtube.uploadsPlaylist} title="Latest CFC message" />
            <div>
              <p style={eyebrow}>Latest Message</p>
              <h2 style={{ ...h2, fontSize: "clamp(30px,4vw,46px)", lineHeight: 1.04, margin: "0 0 14px" }}>Straight from Sunday</h2>
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-soft)", margin: "0 0 30px", maxWidth: 440 }}>
                Press play and catch the latest message from Christian Family Church, streamed fresh from our weekend services every week.
              </p>
              <Hover as={Link} href="/watch" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#11203F", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: 15, padding: "15px 30px", borderRadius: 100, transition: "background .2s" }} hoverStyle={{ background: "var(--accent)" }}>
                More Messages <span style={{ fontSize: 18 }}>→</span>
              </Hover>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAMPUSES */}
      <section style={{ background: "#F4F5F7", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto" }}>
          <Reveal style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
            <div>
              <p style={eyebrow}>Our Campuses</p>
              <h2 style={h2}>Find a Campus<br />Near You</h2>
            </div>
            <Link href="/campuses" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600, fontSize: 15, borderBottom: "2px solid var(--accent)", paddingBottom: 3 }}>
              View All Campuses →
            </Link>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 24 }}>
            {campuses.map((c, i) => (
              <Reveal key={c.slug} as={Link} href={`/campuses/${c.slug}`} delay={i * 0.06} className="lift" style={{ display: "block", background: "#fff", borderRadius: 8, overflow: "hidden", textDecoration: "none", color: "inherit", boxShadow: "0 1px 3px rgba(11,24,48,.08)" }}>
                <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "26px 26px 30px" }}>
                  <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 11.5, letterSpacing: ".18em", textTransform: "uppercase", color: "#9aa3b5", margin: "0 0 8px" }}>{c.suburb === "Boksburg" ? "Parkhaven, Boksburg" : "Johannesburg South"}</p>
                  <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 24, margin: "0 0 10px" }}>{c.name}</h3>
                  <p style={{ fontSize: 14.5, color: "var(--slate)", lineHeight: 1.55, margin: 0 }}>{c.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section style={{ background: "#fff", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
            <p style={eyebrow}>Your Next Step</p>
            <h2 style={{ ...h2, margin: "0 0 18px" }}>There’s always a next step</h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--slate)", margin: 0 }}>
              No matter where you are on the journey, we’d love to help you take your next one.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
            {nextSteps.map((s, i) => (
              <Reveal key={s.title} as={Link} href={s.href} delay={i * 0.08} className="step-card" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", borderRadius: 8, overflow: "hidden", aspectRatio: "3 / 4", textDecoration: "none", color: "#fff" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.title} className="step-img" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,15,33,.9) 8%, rgba(7,15,33,.1) 65%)" }} />
                <div style={{ position: "relative", padding: 32 }}>
                  <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 11.5, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent-lighter)", margin: "0 0 10px" }}>{s.label}</p>
                  <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 28, margin: 0 }}>{s.title}</h3>
                  <span className="step-cta" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 14, fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 12.5, letterSpacing: ".04em", color: "#fff" }}>
                    Take this step <span style={{ fontSize: 16 }}>→</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FOR YOUR FAMILY */}
      <section style={{ background: "#F4F5F7", padding: "clamp(72px,9vw,120px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto" }}>
          <Reveal style={{ marginBottom: 48 }}>
            <p style={eyebrow}>For Your Family</p>
            <h2 style={h2}>Built for every season</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {family.map((f, i) => (
              <Reveal key={f.title} as={Link} href={f.href} delay={i * 0.06} className="tile" style={{ position: "relative", display: "flex", alignItems: "flex-end", borderRadius: 8, overflow: "hidden", aspectRatio: "1 / 1", textDecoration: "none", color: "#fff" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.img} alt={f.title} className="tile-img" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,15,33,.85), transparent 60%)" }} />
                <h3 style={{ position: "relative", fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 21, margin: 0, padding: 24 }}>{f.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SMALL GROUPS CTA */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0B1830" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/img-baby-dedication.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.28 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(8,18,38,.92), rgba(11,24,48,.7))" }} />
        <Reveal style={{ position: "relative", maxWidth: 820, margin: "0 auto", padding: "clamp(80px,11vw,150px) clamp(20px,4vw,40px)", textAlign: "center" }}>
          <p style={{ ...eyebrow, color: "var(--accent-lighter)", margin: "0 0 22px" }}>Small Groups</p>
          <h2 style={{ ...h2, fontSize: "clamp(30px,5vw,58px)", lineHeight: 1.04, color: "#fff", margin: "0 0 34px" }}>
            Life is better when we do it together.
          </h2>
          <Hover as={Link} href="/small-groups" style={{ display: "inline-block", background: "var(--accent)", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 16, padding: "18px 46px", borderRadius: 100, transition: "background .2s,transform .2s" }} hoverStyle={{ background: "var(--accent-dark)", transform: "translateY(-2px)" }}>
            Find a Group
          </Hover>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
