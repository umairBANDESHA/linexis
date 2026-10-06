import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cursor from "../public/components/Cursor";

const stats = [
  { num: "189+", label: "Schools nationwide" },
  { num: "20.7K", label: "Students tracked" },
  { num: "749+", label: "Teachers on platform" },
  { num: "4", label: "User roles, one system" },
];

const roles = [
  {
    num: "01",
    name: "Super Admin",
    desc: "Full network oversight. Manages all schools, directors, principals, and teachers. Access to every report and invoice across the entire operation.",
  },
  {
    num: "02",
    name: "Regional Director",
    desc: "Manages all schools in their region. Creates and tracks invoices for book sales — grade-wise quantities, discounts, payment status, and PDF export.",
  },
  {
    num: "03",
    name: "Principal",
    desc: "School-level management. Views all teachers and their classes. Downloads school-wide and class-wise assessment reports in one tap.",
  },
  {
    num: "04",
    name: "Teacher",
    desc: "Manages student assessments across 22 STEM projects. Tracks individual performance across 9 skill dimensions. Generates branded PDF reports per student.",
  },
];

export default function Stemp21() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting)
            setTimeout(() => e.target.classList.add("on"), i * 80);
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Stemp21 — Case Study | Linexis Studio</title>
        <meta
          name="description"
          content="How Linexis Studio built a nationwide education management system for 189+ schools, 749 teachers, and 20,700+ students."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Cursor />

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.4rem 5vw",
          background: "rgba(8,10,11,0.97)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.5rem",
            letterSpacing: "0.12em",
            color: "var(--white)",
            textDecoration: "none",
          }}
        >
          <span style={{ color: "var(--teal)" }}>LINEXIS</span> STUDIO
        </Link>
        <Link
          href="/#work"
          style={{
            fontSize: "0.78rem",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted)",
            textDecoration: "none",
          }}
        >
          ← All Work
        </Link>
      </nav>

      {/* HERO */}
      <section
        style={{
          minHeight: "75vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 5vw 6vh",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 60% 80% at 80% 40%, rgba(58,158,173,0.06) 0%, transparent 60%)`,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
              opacity: 0,
              animation: "up 0.8s 0.2s forwards",
            }}
          >
            <div style={{ width: 40, height: 1, background: "var(--teal)" }} />
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--teal)",
              }}
            >
              Case Study — 01
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.5rem, 9vw, 8rem)",
              lineHeight: 0.9,
              letterSpacing: "0.02em",
              color: "var(--white)",
              opacity: 0,
              animation: "up 0.8s 0.35s forwards",
              marginBottom: "2.5rem",
            }}
          >
            STEMP<span style={{ color: "var(--teal)" }}>21</span>
            <br />
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                color: "transparent",
              }}
            >
              EDUCATION
            </span>
            <br />
            PLATFORM
          </h1>

          <div
            style={{
              display: "flex",
              gap: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--line)",
              opacity: 0,
              animation: "up 0.8s 0.5s forwards",
              flexWrap: "wrap",
            }}
          >
            {[
              ["Client", "Stemp21"],
              ["Type", "Mobile App + Web Platform"],
              ["Industry", "Education"],
              ["Stack", "Flutter · Firebase · Node.js"],
              ["Delivered", "Play Store + Web"],
            ].map(([label, value]) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "var(--white)",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          borderBottom: "1px solid var(--line)",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              padding: "3rem",
              borderRight: i < 3 ? "1px solid var(--line)" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "var(--white)",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}
            >
              {stat.num.replace("+", "").replace("K", "")}
              <span style={{ color: "var(--teal)" }}>
                {stat.num.includes("+")
                  ? "+"
                  : stat.num.includes("K")
                    ? "K"
                    : ""}
              </span>
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "var(--muted)",
                letterSpacing: "0.05em",
                lineHeight: 1.5,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* BODY */}
      <div
        style={{
          padding: "8rem 5vw",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "8rem",
          alignItems: "start",
        }}
      >
        {/* SIDEBAR */}
        <div>
          <div
            style={{
              fontSize: "0.68rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--teal)",
              marginBottom: "2rem",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
            }}
          >
            <div style={{ width: 30, height: 1, background: "var(--teal)" }} />{" "}
            Project Info
          </div>
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--white)",
              lineHeight: 0.95,
              marginBottom: "3rem",
              letterSpacing: "0.03em",
            }}
          >
            THE
            <br />
            BRIEF
          </div>

          <div
            style={{ borderTop: "1px solid var(--line)", marginBottom: "3rem" }}
          >
            {[
              ["Platform", "Android + Web"],
              ["Framework", "Flutter / Dart"],
              ["Backend", "Firebase"],
              ["Auth", "RBAC (4 roles)"],
              ["Reports", "PDF Generation"],
              ["Billing", "Invoice + Payments"],
              ["Distribution", "Google Play Store"],
            ].map(([key, val]) => (
              <div
                key={key}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem 0",
                  borderBottom: "1px solid var(--line)",
                  fontSize: "0.82rem",
                }}
              >
                <span
                  style={{ color: "var(--muted)", letterSpacing: "0.05em" }}
                >
                  {key}
                </span>
                <span
                  style={{
                    color: "var(--white)",
                    fontWeight: 500,
                    textAlign: "right",
                  }}
                >
                  {val}
                </span>
              </div>
            ))}
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.stamp.stemp"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "var(--teal)",
              color: "#000",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "0.9rem 2rem",
              borderRadius: 1,
            }}
          >
            View on Play Store ↗
          </a>
        </div>

        {/* MAIN CONTENT */}
        <div>
          <div className="reveal" style={{ marginBottom: "5rem" }}>
            <div
              style={{
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--teal)",
                marginBottom: "1.2rem",
              }}
            >
              The Problem
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                color: "var(--white)",
                letterSpacing: "0.03em",
                marginBottom: "1.5rem",
                lineHeight: 1,
              }}
            >
              SCATTERED DATA ACROSS 189 SCHOOLS
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text)",
                lineHeight: 1.85,
                marginBottom: "1.2rem",
              }}
            >
              Stemp21 runs a nationwide STEM education program spanning 189
              schools, 10 regional directors, 749 teachers, and over 20,000
              students across KPK, Punjab, Sindh, and Gilgit-Baltistan.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text)",
                lineHeight: 1.85,
                marginBottom: "1.5rem",
              }}
            >
              Before this system, everything was manual. Reports required
              contacting each school individually. Invoices for regional book
              sales were handled informally. Student assessment data lived
              across spreadsheets and paper records — impossible to track at
              this scale.
            </p>
            <div
              style={{
                background: "var(--bg2)",
                borderLeft: "3px solid var(--teal)",
                border: "1px solid var(--line-teal)",
                padding: "2rem 2.5rem",
                borderRadius: 2,
              }}
            >
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                What used to require{" "}
                <strong style={{ color: "var(--teal)" }}>
                  chasing 189 schools individually
                </strong>{" "}
                for data is now centralized in one system, accessible by every
                role in real time.
              </p>
            </div>
          </div>

          <div className="reveal" style={{ marginBottom: "5rem" }}>
            <div
              style={{
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--teal)",
                marginBottom: "1.2rem",
              }}
            >
              The Solution
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                color: "var(--white)",
                letterSpacing: "0.03em",
                marginBottom: "1.5rem",
                lineHeight: 1,
              }}
            >
              ONE SYSTEM. FOUR ROLES.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text)",
                lineHeight: 1.85,
                marginBottom: "2rem",
              }}
            >
              We designed a unified cross-platform application with role-based
              access control. Each user type gets exactly the tools they need —
              nothing more, nothing less.
            </p>

            <div style={{ borderTop: "1px solid var(--line)" }}>
              {roles.map((role) => (
                <div
                  key={role.num}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.5rem",
                    padding: "1.5rem 0",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1rem",
                      color: "var(--teal)",
                      minWidth: 30,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {role.num}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "var(--white)",
                        marginBottom: "0.25rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {role.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--muted)",
                        lineHeight: 1.6,
                      }}
                    >
                      {role.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" style={{ marginBottom: "5rem" }}>
            <div
              style={{
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--teal)",
                marginBottom: "1.2rem",
              }}
            >
              The Outcome
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                color: "var(--white)",
                letterSpacing: "0.03em",
                marginBottom: "1.5rem",
                lineHeight: 1,
              }}
            >
              WHAT CHANGED
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text)",
                lineHeight: 1.85,
                marginBottom: "1.2rem",
              }}
            >
              Regional directors create and track invoices from their phone.
              Principals download school-wide reports in seconds. Teachers track
              22 projects per student across 9 skill categories and generate
              professional branded PDF reports without leaving the app.
            </p>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text)",
                lineHeight: 1.85,
                marginBottom: "1.5rem",
              }}
            >
              The platform is live on Google Play Store and accessible via web —
              same codebase, same RBAC architecture, deployed across both
              platforms.
            </p>
            <div
              style={{
                background: "var(--bg2)",
                borderLeft: "3px solid var(--teal)",
                border: "1px solid var(--line-teal)",
                padding: "2rem 2.5rem",
                borderRadius: 2,
              }}
            >
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text)",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                A system built for{" "}
                <strong style={{ color: "var(--teal)" }}>
                  189 schools operating nationwide
                </strong>{" "}
                — shipped, live, and in daily use.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEXT */}
      <Link
        href="/#work"
        style={{
          padding: "5rem 5vw",
          borderTop: "1px solid var(--line)",
          background: "var(--bg2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: "1rem",
            }}
          >
            Back to Work
          </div>
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "var(--white)",
              letterSpacing: "0.03em",
              lineHeight: 1,
            }}
          >
            VIEW ALL
            <br />
            CASE STUDIES
          </div>
        </div>
        <div style={{ fontSize: "3rem", color: "var(--teal)" }}>→</div>
      </Link>

      <footer
        style={{
          borderTop: "1px solid var(--line)",
          padding: "2rem 5vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "0.78rem",
          color: "var(--muted)",
        }}
      >
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.2rem",
            letterSpacing: "0.1em",
            color: "var(--white)",
          }}
        >
          <span style={{ color: "var(--teal)" }}>LINEXIS</span> STUDIO
        </div>
        <div>© 2025 — All Rights Reserved</div>
      </footer>
    </>
  );
}
