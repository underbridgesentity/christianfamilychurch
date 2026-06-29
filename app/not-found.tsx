import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <main style={{ background: "#fff" }}>
      <Nav overlay={false} />
      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "140px 24px 100px",
          background: "#0B1830",
          color: "#fff",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-archivo)",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: ".24em",
            textTransform: "uppercase",
            color: "var(--accent-lighter)",
            margin: "0 0 18px",
          }}
        >
          Page not found
        </p>
        <h1
          style={{
            fontFamily: "var(--font-archivo)",
            fontWeight: 900,
            fontSize: "clamp(40px,7vw,84px)",
            lineHeight: 1,
            letterSpacing: "-.03em",
            margin: "0 0 20px",
          }}
        >
          There’s still a place for you here.
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,.7)", maxWidth: 460, margin: "0 0 34px" }}>
          We couldn’t find that page, but we’d still love to help you find your next step.
        </p>
        <Link
          href="/"
          style={{
            background: "var(--accent)",
            color: "#fff",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: 16,
            padding: "16px 40px",
            borderRadius: 100,
          }}
        >
          Back Home
        </Link>
      </section>
      <Footer />
    </main>
  );
}
