import Link from "next/link";
import { footerNav } from "@/lib/navigation";
import { campuses } from "@/lib/campuses";
import { site } from "@/lib/site";

const colTitle: React.CSSProperties = {
  fontFamily: "var(--font-archivo)",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: ".16em",
  textTransform: "uppercase",
  color: "var(--accent-light)",
  margin: "0 0 18px",
};

const linkStyle: React.CSSProperties = {
  display: "block",
  color: "rgba(255,255,255,.72)",
  textDecoration: "none",
  fontSize: 14.5,
  padding: "6px 0",
};

const social: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 40,
  height: 40,
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,.16)",
  color: "#fff",
};

export function Footer() {
  return (
    <footer style={{ background: "#081226", color: "#fff", fontFamily: "var(--font-hanken)" }}>
      <div style={{ maxWidth: 1340, margin: "0 auto", padding: "clamp(56px,7vw,88px) clamp(20px,4vw,40px) 40px" }}>
        <div className="grid-5" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr", gap: "48px 32px" }}>
          <div style={{ minWidth: 240 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 22 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/mark-white.png" alt="CFC" style={{ height: 42 }} />
              <span style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 15, letterSpacing: ".1em" }}>
                CHRISTIAN FAMILY CHURCH
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 21, lineHeight: 1.15, letterSpacing: "-.01em", margin: "0 0 14px" }}>
              {site.tagline}
            </p>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,.6)", maxWidth: 300, margin: 0 }}>
              {site.purpose}
            </p>
          </div>

          {(Object.keys(footerNav) as Array<keyof typeof footerNav>).map((col) => (
            <div key={col}>
              <h4 style={colTitle}>{col}</h4>
              {footerNav[col].map((l) =>
                l.href.startsWith("http") ? (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener" style={linkStyle}>
                    {l.label}
                  </a>
                ) : (
                  <Link key={l.label} href={l.href} style={linkStyle}>
                    {l.label}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 56, paddingTop: 30, borderTop: "1px solid rgba(255,255,255,.1)", display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-archivo)", fontSize: 12, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--accent-light)" }}>
            Our Campuses
          </span>
          {campuses.map((c) => (
            <Link
              key={c.slug}
              href={`/campuses/${c.slug}`}
              style={{ color: "rgba(255,255,255,.82)", textDecoration: "none", fontSize: 14.5, fontWeight: 500, padding: "8px 18px", border: "1px solid rgba(255,255,255,.16)", borderRadius: 100 }}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto", padding: "22px clamp(20px,4vw,40px)", display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", color: "rgba(255,255,255,.5)", fontSize: 13.5 }}>
            <span>© {site.copyrightYear} Christian Family Church</span>
            <Link href="/privacy" style={{ color: "rgba(255,255,255,.5)", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: "rgba(255,255,255,.5)", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href={site.social.facebook} target="_blank" rel="noopener" aria-label="Facebook" style={social}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" /></svg>
            </a>
            <a href={site.social.instagram} target="_blank" rel="noopener" aria-label="Instagram" style={social}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5.5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href={site.social.youtube} target="_blank" rel="noopener" aria-label="YouTube" style={social}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2s-.2-1.37-.8-1.97c-.76-.8-1.6-.8-2-.85C16 4.1 12 4.1 12 4.1h-.02s-4 0-6.8.28c-.4.05-1.24.05-2 .85-.6.6-.8 1.97-.8 1.97S2 8.8 2 10.4v1.5c0 1.6.2 3.2.2 3.2s.2 1.37.8 1.97c.76.8 1.76.77 2.2.86 1.6.15 6.8.2 6.8.2s4 0 6.8-.29c.4-.05 1.24-.05 2-.85.6-.6.8-1.97.8-1.97s.2-1.6.2-3.2v-1.5c0-1.6-.2-3.2-.2-3.2ZM9.94 14.5V8.9l5.2 2.8-5.2 2.8Z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
