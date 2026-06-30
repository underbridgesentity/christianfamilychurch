import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { Hover } from "@/components/ui/Hover";

export const metadata = {
  title: "Giving | Christian Family Church",
};

const cardLabel: React.CSSProperties = {
  fontFamily: "var(--font-archivo)",
  fontWeight: 700,
  fontSize: 10.5,
  letterSpacing: ".14em",
  textTransform: "uppercase",
  color: "#9DBDF7",
  margin: "0 0 4px",
};

const cardValue: React.CSSProperties = { fontSize: 15, margin: 0 };

// CFC "Tithes and Offerings" Zapper payment page
const ZAPPER_URL =
  "https://www.zapper.com/payWithZapper/?qr=http%3A%2F%2F2.zap.pe%3Ft%3D6%26i%3D28389%3A29990%3A7%5B34%7C0%2C33n%7C%7C%7CTithes%20and%20Offerings%3A10%5B39%7CZAR%2C38%7CC.F.C%20Tithes%20and%20Offerings";

export default function GivingPage() {
  return (
    <main style={{ width: "100%", overflowX: "hidden", color: "var(--ink)", background: "#fff" }}>
      <Nav active="give" overlay />

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "56vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/img-worship-band.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg, rgba(7,15,33,.86), rgba(7,15,33,.5))" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1340, width: "100%", margin: "0 auto", padding: "150px clamp(20px,4vw,40px) 80px" }}>
          <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: 13, letterSpacing: ".24em", textTransform: "uppercase", color: "#9DBDF7", margin: "0 0 22px" }}>Giving</p>
          <h1 style={{ fontFamily: "var(--font-archivo)", fontWeight: 900, fontSize: "clamp(42px,7.5vw,100px)", lineHeight: 0.96, letterSpacing: "-.03em", color: "#fff", margin: "0 0 22px" }}>Partner with Us</h1>
          <p style={{ fontSize: "clamp(17px,2vw,22px)", fontWeight: 300, lineHeight: 1.55, color: "rgba(255,255,255,.86)", maxWidth: 560, margin: 0 }}>
            Your generosity builds the church and changes lives across our city. Thank you for giving with a willing heart.
          </p>
        </div>
      </section>

      {/* GIVING OPTIONS */}
      <section style={{ background: "#F4F5F7", padding: "clamp(64px,8vw,110px) clamp(20px,4vw,40px)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, alignItems: "stretch" }}>

          {/* Online / PayFast */}
          <Reveal style={{ display: "flex", flexDirection: "column", background: "#fff", borderRadius: 12, padding: "34px 30px", boxShadow: "0 1px 3px rgba(11,24,48,.08)" }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, background: "#eef3fe", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E6BE6" strokeWidth="1.8"><rect x="2" y="5" width="20" height="14" rx="2.5" /><path d="M2 10h20" /></svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 22, margin: "0 0 10px" }}>Online</h3>
            <p style={{ fontSize: 14.5, color: "#5A6478", lineHeight: 1.55, margin: "0 0 24px", flex: 1 }}>Give securely online using card, EFT, or instant payment.</p>
            <Hover as="a" href="#" style={{ display: "block", textAlign: "center", background: "#2E6BE6", color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: 15, padding: 15, borderRadius: 100, marginBottom: 18, transition: "background .2s" }} hoverStyle={{ background: "#1f54c4" }}>
              Give Now
            </Hover>
            <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", opacity: 0.6 }}>
              <span style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 13, letterSpacing: ".02em", color: "#11203F" }}>Pay</span>
              <span style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 13, color: "#E2231A" }}>Fast</span>
              <span style={{ fontSize: 11, color: "#9aa3b5", marginLeft: 4 }}>secure checkout</span>
            </div>
          </Reveal>

          {/* Zapper */}
          <Reveal delay={0.07} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", background: "#fff", borderRadius: 12, padding: "34px 30px", boxShadow: "0 1px 3px rgba(11,24,48,.08)" }}>
            <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 22, margin: "0 0 18px", alignSelf: "flex-start" }}>Zapper</h3>
            <Hover as="a" href={ZAPPER_URL} target="_blank" rel="noopener" aria-label="Pay CFC Tithes and Offerings with Zapper" style={{ display: "block", background: "#fff", border: "1px solid #eceef2", borderRadius: 12, padding: 12, marginBottom: 18, transition: "box-shadow .2s, transform .2s" }} hoverStyle={{ boxShadow: "0 8px 22px rgba(11,24,48,.14)", transform: "translateY(-2px)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/zapper-card.png" alt="CFC Tithes and Offerings Zapper QR code" style={{ width: 220, height: "auto", display: "block" }} />
            </Hover>
            <p style={{ fontSize: 14.5, color: "#5A6478", lineHeight: 1.55, margin: "0 0 18px", flex: 1 }}>Scan the code in your Zapper app, or tap it to pay online.</p>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 22, height: 22, borderRadius: 6, background: "#3FB54A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3"><path d="M4 12l5 5L20 6" /></svg>
              </span>
              <span style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 14, color: "#3FB54A" }}>zapper</span>
            </div>
          </Reveal>

          {/* EFT / Bank Transfer */}
          <Reveal delay={0.14} style={{ display: "flex", flexDirection: "column", background: "#0B1830", color: "#fff", borderRadius: 12, padding: "34px 30px" }}>
            <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 22, margin: "0 0 22px" }}>EFT / Bank Transfer</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
              <div>
                <p style={cardLabel}>Account Name</p>
                <p style={cardValue}>Christian Family Church</p>
              </div>
              <div style={{ display: "flex", gap: 24 }}>
                <div>
                  <p style={cardLabel}>Bank</p>
                  <p style={cardValue}>ABSA Bank, Centurion</p>
                </div>
                <div>
                  <p style={cardLabel}>Branch Code</p>
                  <p style={cardValue}>632 005</p>
                </div>
              </div>
              <div>
                <p style={cardLabel}>Tithes &amp; Offering — Account No.</p>
                <p style={cardValue}>4059457357</p>
              </div>
              <div>
                <p style={cardLabel}>Welfare Programme — Account No.</p>
                <p style={cardValue}>4059458882</p>
              </div>
              <div>
                <p style={cardLabel}>Reference</p>
                <p style={cardValue}>Your name + giving type (e.g. Tithe, Offering)</p>
              </div>
            </div>
          </Reveal>

          {/* In Service */}
          <Reveal delay={0.21} style={{ display: "flex", flexDirection: "column", background: "#fff", borderRadius: 12, padding: "34px 30px", boxShadow: "0 1px 3px rgba(11,24,48,.08)" }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, background: "#eef3fe", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E6BE6" strokeWidth="1.7"><path d="M12 2v4M10 4h4" /><path d="M4 21V9.5l8-4.5 8 4.5V21" /><path d="M9.5 21v-5h5v5" /></svg>
            </div>
            <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 22, margin: "0 0 10px" }}>In Service</h3>
            <p style={{ fontSize: 14.5, color: "#5A6478", lineHeight: 1.55, margin: "0 0 20px", flex: 1 }}>
              You’re welcome to give during any of our Sunday services. Offering takes place across all campuses.
            </p>
            <Link href="/campuses" style={{ color: "#2E6BE6", textDecoration: "none", fontWeight: 600, fontSize: 14.5, borderBottom: "2px solid #2E6BE6", paddingBottom: 3, alignSelf: "flex-start" }}>
              Find a Campus →
            </Link>
          </Reveal>
        </div>

        <Reveal style={{ maxWidth: 760, margin: "clamp(48px,6vw,80px) auto 0", textAlign: "center" }}>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "#5A6478", margin: 0 }}>
            “Each of you should give what you have decided in your heart to give - for God loves a cheerful giver.” Thank you for stewarding what God has entrusted to you.
          </p>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
