import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { Hover } from "@/components/ui/Hover";
import { ministries, getMinistry } from "@/lib/ministries";

export function generateStaticParams() {
  return ministries.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ministry = getMinistry(slug);
  return { title: ministry ? ministry.title : "Ministry" };
}

/* Warm, voice-consistent extras keyed by slug. Falls back to generic copy. */
const extras: Record<
  string,
  {
    purpose: string;
    whatWeDo: { title: string; img: string }[];
    events: { day: string; mon: string; name: string; meta: string }[];
  }
> = {
  "childrens-world": {
    purpose:
      "We exist to help every child know Jesus, build real friendships, and discover the plan God has for their life. From their very first visit, your kids are safe, loved and having fun.",
    whatWeDo: [
      { title: "Sunday Kids Church", img: "/assets/img-baby-dedication.jpg" },
      { title: "Midweek Clubs", img: "/assets/img-dreamteam.jpg" },
      { title: "Holiday Programmes", img: "/assets/img-worship-band.jpg" },
    ],
    events: [
      { day: "15", mon: "Feb", name: "Kids Worship Morning", meta: "CFC Johannesburg · 9:00 AM" },
      { day: "08", mon: "Mar", name: "Family Fun Day", meta: "CFC South · 10:00 AM" },
    ],
  },
  youth: {
    purpose:
      "We exist to see this generation of teenagers fall in love with Jesus, find a place to belong, and grow into who God made them to be. It is loud, it is fun, and everyone is welcome.",
    whatWeDo: [
      { title: "Friday Night Youth", img: "/assets/img-dreamteam.jpg" },
      { title: "Small Groups", img: "/assets/img-host-welcome.jpg" },
      { title: "Camps & Conferences", img: "/assets/img-crowd-spotlights.jpg" },
    ],
    events: [
      { day: "21", mon: "Feb", name: "Youth Night", meta: "CFC Johannesburg · 6:30 PM" },
      { day: "12", mon: "Apr", name: "Youth Camp Weekend", meta: "Away · All weekend" },
    ],
  },
  "young-adults": {
    purpose:
      "We exist to help 20–35s build a faith of their own, find genuine friendship, and live on purpose in this season of life. Whether you are studying, working or figuring it out, there is a place for you here.",
    whatWeDo: [
      { title: "Connect Nights", img: "/assets/img-dreamteam.jpg" },
      { title: "Life Groups", img: "/assets/img-host-welcome.jpg" },
      { title: "Socials & Outreach", img: "/assets/img-crowd-spotlights.jpg" },
    ],
    events: [
      { day: "28", mon: "Feb", name: "Young Adults Connect", meta: "CFC Johannesburg · 6:30 PM" },
      { day: "21", mon: "Mar", name: "Friday Social", meta: "CFC Johannesburg · 7:00 PM" },
    ],
  },
  marriage: {
    purpose:
      "We exist to help couples build strong, healthy marriages and homes that last. Whether you are newly engaged or decades in, there is always more grace and growth ahead.",
    whatWeDo: [
      { title: "Marriage Course", img: "/assets/img-host-welcome.jpg" },
      { title: "Date Nights", img: "/assets/img-worship-band.jpg" },
      { title: "Couples Mentoring", img: "/assets/img-congregation-screens.jpg" },
    ],
    events: [
      { day: "14", mon: "Feb", name: "Valentine's Date Night", meta: "CFC Johannesburg · 7:00 PM" },
      { day: "05", mon: "Apr", name: "Marriage Course Begins", meta: "CFC South · 6:00 PM" },
    ],
  },
  missions: {
    purpose:
      "We exist to take the love of Jesus across our city and beyond, serving practical needs and sharing real hope. When we go together, lives and communities are changed.",
    whatWeDo: [
      { title: "Local Outreach", img: "/assets/img-crowd-spotlights.jpg" },
      { title: "Global Partners", img: "/assets/img-congregation-screens.jpg" },
      { title: "Mission Trips", img: "/assets/img-dreamteam.jpg" },
    ],
    events: [
      { day: "01", mon: "Mar", name: "Community Outreach Day", meta: "Across Johannesburg · 8:00 AM" },
      { day: "19", mon: "Apr", name: "Missions Sunday", meta: "All Campuses · Services" },
    ],
  },
  "bible-college": {
    purpose:
      "We exist to train, grow and equip you for a lifetime of ministry. Be grounded in the Word, stretched in your gifts, and sent out ready to make a difference wherever God leads.",
    whatWeDo: [
      { title: "Full-Time Programme", img: "/assets/img-congregation-screens.jpg" },
      { title: "Evening Classes", img: "/assets/img-host-welcome.jpg" },
      { title: "Leadership Track", img: "/assets/img-dreamteam.jpg" },
    ],
    events: [
      { day: "03", mon: "Feb", name: "Open Evening", meta: "CFC Johannesburg · 6:30 PM" },
      { day: "10", mon: "Mar", name: "New Term Begins", meta: "Campus · 9:00 AM" },
    ],
  },
  significance: {
    purpose:
      "We exist to honour and connect our senior generation, celebrating a lifetime of faith and keeping everyone woven into the life of the church. Your story still matters here.",
    whatWeDo: [
      { title: "Monthly Gatherings", img: "/assets/img-worship-band.jpg" },
      { title: "Coffee Mornings", img: "/assets/img-host-welcome.jpg" },
      { title: "Outings & Trips", img: "/assets/img-crowd-spotlights.jpg" },
    ],
    events: [
      { day: "18", mon: "Feb", name: "Significance Tea", meta: "CFC Johannesburg · 10:00 AM" },
      { day: "22", mon: "Mar", name: "Spring Outing", meta: "Meet at Campus · 9:30 AM" },
    ],
  },
};

export default async function MinistryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ministry = getMinistry(slug);
  if (!ministry) notFound();

  const extra = extras[slug] ?? {
    purpose: `${ministry.desc} There is a place for you here, whatever your story.`,
    whatWeDo: [
      { title: "Weekend Gatherings", img: ministry.image },
      { title: "Connect & Grow", img: "/assets/img-host-welcome.jpg" },
      { title: "Serve Together", img: "/assets/img-dreamteam.jpg" },
    ],
    events: [
      { day: "15", mon: "Feb", name: "Gathering", meta: "CFC Johannesburg · 9:00 AM" },
      { day: "08", mon: "Mar", name: "Connect Event", meta: "CFC South · 10:00 AM" },
    ],
  };

  // Prefer the ministry's real photos for the "What We Do" cards (hero uses gallery[0]).
  const whatWeDo = extra.whatWeDo.map((w, i) => ({
    ...w,
    img: ministry.gallery?.[i + 1] ?? w.img,
  }));

  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="next" overlay />

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "62vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={ministry.image} alt={ministry.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(7,15,33,.92), rgba(7,15,33,.28) 70%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1340, width: "100%", margin: "0 auto", padding: "0 clamp(20px,4vw,40px) 60px" }}>
          <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "var(--accent-lighter)", margin: "0 0 16px" }}>Ministry</p>
          <h1 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(40px,7vw,94px)", lineHeight: 0.95, letterSpacing: "-.03em", color: "#fff", margin: 0 }}>
            {ministry.title}
          </h1>
        </div>
      </section>

      {/* PURPOSE */}
      <section style={{ background: "#fff", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <Reveal style={{ maxWidth: 840, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(24px,3.4vw,38px)", lineHeight: 1.3, letterSpacing: "-.01em", color: "var(--ink)", margin: 0 }}>
            {extra.purpose}
          </p>
        </Reveal>
      </section>

      {/* WHAT WE DO */}
      <section style={{ background: "#F4F5F7", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto" }}>
          <Reveal style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 14px" }}>What We Do</p>
            <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(26px,3.6vw,44px)", lineHeight: 1.04, letterSpacing: "-.02em", margin: 0 }}>Every Sunday & beyond</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 24 }}>
            {whatWeDo.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08} className="tile" style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 1px 3px rgba(11,24,48,.08)" }}>
                <div style={{ aspectRatio: "16 / 11", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.img} alt={w.title} className="tile-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 20, margin: 0 }}>{w.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section style={{ background: "#fff", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 880, margin: "0 auto" }}>
          <Reveal style={{ marginBottom: 32 }}>
            <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--accent)", margin: "0 0 14px" }}>Coming Up</p>
            <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(26px,3.6vw,42px)", lineHeight: 1.05, letterSpacing: "-.02em", margin: 0 }}>Upcoming Events</h2>
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {extra.events.map((e, i) => (
              <Reveal key={`${e.day}-${e.name}`} delay={i * 0.08}>
                <Hover as={Link} href="/events" style={{ display: "flex", alignItems: "center", gap: 22, background: "#F4F5F7", borderRadius: 8, padding: "22px 26px", textDecoration: "none", color: "inherit", transition: "background .2s" }} hoverStyle={{ background: "#eef1f6" }}>
                  <div style={{ textAlign: "center", flexShrink: 0 }}>
                    <span style={{ display: "block", fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: 26, color: "var(--accent)", lineHeight: 1 }}>{e.day}</span>
                    <span style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: "#9aa3b5" }}>{e.mon}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 18, margin: "0 0 4px" }}>{e.name}</h3>
                    <p style={{ fontSize: 14, color: "var(--slate)", margin: 0 }}>{e.meta}</p>
                  </div>
                  <span style={{ color: "var(--accent)", fontSize: 20 }}>→</span>
                </Hover>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section style={{ background: "#0B1830", color: "#fff", padding: "clamp(72px,10vw,130px) clamp(20px,4vw,40px)", textAlign: "center" }}>
        <Reveal style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: "clamp(30px,5vw,54px)", lineHeight: 1.04, letterSpacing: "-.02em", margin: "0 0 30px" }}>Get involved</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Hover as={Link} href="/dream-team" style={{ background: "var(--accent)", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 16, padding: "17px 38px", borderRadius: 100, transition: "background .2s,transform .2s" }} hoverStyle={{ background: "var(--accent-dark)", transform: "translateY(-2px)" }}>
              Join the Team
            </Hover>
            <Hover as={Link} href="/contact" style={{ background: "transparent", color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: 16, padding: "17px 36px", borderRadius: 100, border: "1px solid rgba(255,255,255,.3)", transition: "background .2s" }} hoverStyle={{ background: "rgba(255,255,255,.1)" }}>
              Ask a Question
            </Hover>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
