"use client";

import Link from "next/link";
import { useState, CSSProperties } from "react";

const baseInput: CSSProperties = {
  width: "100%",
  background: "#F4F5F7",
  border: "1px solid #e6e8ee",
  borderRadius: 10,
  padding: "14px 16px",
  fontSize: 15,
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color .2s, background .2s",
};

const focusInput: CSSProperties = { borderColor: "#2E6BE6", background: "#fff" };

const label: CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  color: "#11203F",
  marginBottom: 8,
};

export default function SignInPage() {
  const [focused, setFocused] = useState<string | null>(null);
  const [btnHover, setBtnHover] = useState(false);

  const inputStyle = (key: string): CSSProperties => ({
    ...baseInput,
    ...(focused === key ? focusInput : {}),
  });

  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-hanken)",
        color: "#11203F",
        padding: "100px 20px 50px",
        overflow: "hidden",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/img-congregation-screens.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(140deg, rgba(7,15,33,.92), rgba(11,24,48,.82))" }} />

      <Link
        href="/"
        style={{
          position: "absolute",
          top: 30,
          left: "clamp(20px,4vw,40px)",
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          gap: 13,
          textDecoration: "none",
          color: "#fff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/mark-white.png" alt="CFC" style={{ height: 36 }} />
        <span style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 14, letterSpacing: ".12em" }}>CHRISTIAN FAMILY CHURCH</span>
      </Link>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 440,
          background: "#fff",
          borderRadius: 16,
          padding: "clamp(32px,4vw,48px)",
          boxShadow: "0 40px 80px -30px rgba(0,0,0,.5)",
        }}
      >
        <h1 style={{ fontFamily: "var(--font-archivo)", fontWeight: 800, fontSize: 30, letterSpacing: "-.02em", margin: "0 0 8px" }}>Welcome back</h1>
        <p style={{ fontSize: 15, color: "#5A6478", margin: "0 0 30px" }}>Sign in to your CFC account.</p>

        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div>
            <label htmlFor="email" style={label}>Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@email.com"
              style={inputStyle("email")}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
            />
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <label htmlFor="password" style={{ fontSize: 12, fontWeight: 600, color: "#11203F" }}>Password</label>
              <Link href="#" style={{ fontSize: 12.5, color: "#2E6BE6", textDecoration: "none", fontWeight: 600 }}>Forgot password?</Link>
            </div>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              style={inputStyle("password")}
              onFocus={() => setFocused("password")}
              onBlur={() => setFocused(null)}
            />
          </div>
          <button
            type="submit"
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              textAlign: "center",
              background: btnHover ? "#1f54c4" : "#2E6BE6",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              fontWeight: 700,
              fontSize: 16,
              padding: 16,
              borderRadius: 100,
              transition: "background .2s",
              marginTop: 4,
            }}
          >
            Sign In
          </button>
        </form>

        <p style={{ textAlign: "center", fontSize: 14.5, color: "#5A6478", margin: "26px 0 0" }}>
          New here? <Link href="/register" style={{ color: "#2E6BE6", textDecoration: "none", fontWeight: 700 }}>Create an account</Link>
        </p>
      </div>
    </main>
  );
}
