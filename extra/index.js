import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Cursor from "../public/components/Cursor";
import services from "../public/data/services";
import projects from "../public/data/projects";

export default function Home() {
  const [activeService, setActiveService] = useState(null);
  const revealsRef = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("on"), i * 80);
          }
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeService ? "hidden" : "";
  }, [activeService]);

  const s = activeService
    ? services.find((s) => s.num === activeService)
    : null;

  return (
    <>
      <Head>
        <title>Linexis Studio — Digital Product Studio</title>
        <meta
          name="description"
          content="Linexis Studio builds mobile apps, web platforms, ERP systems, and AI-integrated products. Based in Pakistan, working globally."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Cursor />

      {/* NAV */}
      <NavBar />

      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 5vw 8vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse 80% 60% at 100% 50%, rgba(58,158,173,0.07) 0%, transparent 60%),
                       radial-gradient(ellipse 50% 80% at 0% 100%, rgba(58,158,173,0.04) 0%, transparent 50%)`,
          }}
        />

        {/* Circuit lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            opacity: 0.3,
          }}
        >
          <svg
            viewBox="0 0 1400 900"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            style={{ width: "100%", height: "100%" }}
          >
            <line
              x1="200"
              y1="0"
              x2="200"
              y2="400"
              stroke="#3a9ead"
              strokeWidth="0.5"
              opacity="0.4"
            />
            <line
              x1="200"
              y1="400"
              x2="600"
              y2="400"
              stroke="#3a9ead"
              strokeWidth="0.5"
              opacity="0.4"
            />
            <circle cx="200" cy="400" r="4" fill="#3a9ead" opacity="0.6" />
            <circle cx="600" cy="400" r="4" fill="#3a9ead" opacity="0.6" />
            <line
              x1="600"
              y1="400"
              x2="600"
              y2="200"
              stroke="#3a9ead"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <line
              x1="600"
              y1="200"
              x2="900"
              y2="200"
              stroke="#3a9ead"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <circle cx="900" cy="200" r="3" fill="#3a9ead" opacity="0.5" />
            <line
              x1="1100"
              y1="200"
              x2="1100"
              y2="600"
              stroke="#3a9ead"
              strokeWidth="0.5"
              opacity="0.2"
            />
            <line
              x1="400"
              y1="600"
              x2="1100"
              y2="600"
              stroke="#3a9ead"
              strokeWidth="0.5"
              opacity="0.15"
            />
            <circle
              cx="1100"
              cy="600"
              r="6"
              fill="none"
              stroke="#3a9ead"
              strokeWidth="0.5"
              opacity="0.4"
            />
          </svg>
        </div>

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
              Digital Product Studio — Est. 2024
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(5rem, 14vw, 13rem)",
              lineHeight: 0.88,
              letterSpacing: "0.02em",
              color: "var(--white)",
              opacity: 0,
              animation: "up 0.8s 0.35s forwards",
            }}
          >
            WE BUILD
            <br />
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                color: "transparent",
              }}
            >
              DIGITAL
            </span>
            <br />
            <span style={{ color: "var(--teal)" }}>PRODUCTS</span>
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--line)",
              opacity: 0,
              animation: "up 0.8s 0.5s forwards",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            <p
              style={{
                maxWidth: 420,
                fontSize: "1rem",
                color: "var(--muted)",
                lineHeight: 1.75,
              }}
            >
              <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                Linexis Studio
              </strong>{" "}
              designs and builds software that runs real operations — mobile
              apps, web platforms, ERP systems, and AI-integrated tools. We take
              ownership of the full product, from first screen to deployed
              system.
            </p>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  background: "var(--teal)",
                  color: "#000",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  padding: "0.9rem 2rem",
                  borderRadius: 1,
                  transition: "background 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--teal2)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--teal)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Start a Project →
              </a>
              <a
                href="#work"
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: "var(--muted)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--white)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                See Our Work ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div
        style={{
          overflow: "hidden",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "1.2rem 0",
          background: "var(--bg2)",
        }}
      >
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "marquee 30s linear infinite",
          }}
        >
          {[
            "Mobile Apps",
            "Web Platforms",
            "ERP Systems",
            "AI Integration",
            "Flutter & React Native",
            "Offline-first Apps",
            "Cross-Platform",
            "PWA",
            "Full Stack",
            "Mobile Apps",
            "Web Platforms",
            "ERP Systems",
            "AI Integration",
            "Flutter & React Native",
            "Offline-first Apps",
            "Cross-Platform",
            "PWA",
            "Full Stack",
          ].map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "0 2rem",
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1rem",
                letterSpacing: "0.15em",
                color: "var(--muted)",
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: "var(--teal)",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section
        id="services"
        style={{ padding: "10rem 5vw", position: "relative" }}
      >
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "5rem",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--teal)",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{ width: 30, height: 1, background: "var(--teal)" }}
              />
              What We Do
            </div>
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                letterSpacing: "0.03em",
                lineHeight: 0.95,
                color: "var(--white)",
              }}
            >
              OUR
              <br />
              SERVICES
            </div>
          </div>
          <div style={{ maxWidth: 360, flexShrink: 0, paddingTop: "1rem" }}>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--muted)",
                lineHeight: 1.8,
              }}
            >
              We build end-to-end digital products — mobile, web, desktop, and
              everything in between. Click any service to see what's included.
            </p>
          </div>
        </div>

        <div className="reveal" style={{ borderTop: "1px solid var(--line)" }}>
          {services.map((service) => (
            <div
              key={service.num}
              onClick={() => setActiveService(service.num)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "2.5rem 0",
                borderBottom: "1px solid var(--line)",
                gap: "2rem",
                cursor: "pointer",
                transition: "padding-left 0.3s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.paddingLeft = "1.5rem";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.paddingLeft = "0";
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  color: "var(--muted)",
                  minWidth: 60,
                }}
              >
                {service.num}
              </div>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  letterSpacing: "0.05em",
                  color: "var(--white)",
                  flex: 1,
                }}
              >
                {service.name}
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  maxWidth: 300,
                  lineHeight: 1.5,
                  flexShrink: 0,
                }}
              >
                {service.short}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  justifyContent: "flex-end",
                  maxWidth: 220,
                  flexShrink: 0,
                }}
              >
                {service.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      padding: "0.3rem 0.7rem",
                      border: "1px solid var(--line-teal)",
                      color: "var(--teal)",
                      borderRadius: 1,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div
                style={{
                  fontSize: "1.5rem",
                  color: "var(--teal)",
                  opacity: 0.6,
                }}
              >
                →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" style={{ padding: "0 5vw 10rem" }}>
        <div
          className="reveal"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "5rem",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--teal)",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{ width: 30, height: 1, background: "var(--teal)" }}
              />
              Selected Work
            </div>
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                letterSpacing: "0.03em",
                lineHeight: 0.95,
                color: "var(--white)",
              }}
            >
              CASE
              <br />
              STUDIES
            </div>
          </div>
          <div style={{ maxWidth: 360, flexShrink: 0, paddingTop: "1rem" }}>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--muted)",
                lineHeight: 1.8,
              }}
            >
              Real products built for real clients. Every project delivered with
              full ownership from concept to deployment.
            </p>
          </div>
        </div>

        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5px",
            background: "var(--line)",
            border: "1px solid var(--line)",
          }}
        >
          {projects.map((p, i) => (
            <WorkCard key={p.slug} project={p} featured={p.featured} />
          ))}
        </div>
      </section>

      {/* STUDIO / WHO WE ARE */}
      <section
        id="studio"
        style={{
          padding: "10rem 5vw",
          background: "var(--bg2)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8rem",
          alignItems: "center",
        }}
      >
        <div className="reveal">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--teal)",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ width: 30, height: 1, background: "var(--teal)" }} />
            The Studio
          </div>
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 5vw, 4.5rem)",
              letterSpacing: "0.03em",
              lineHeight: 0.95,
              color: "var(--white)",
              marginBottom: "2.5rem",
            }}
          >
            HOW
            <br />
            WE WORK
          </div>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.9,
              color: "var(--text)",
              marginBottom: "1.5rem",
            }}
          >
            Linexis Studio is a software development studio that takes projects
            from brief to deployed product. We work with businesses that need
            software built properly — not patched together, not handed off in
            pieces.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.85,
              color: "var(--muted)",
              marginBottom: "1.5rem",
            }}
          >
            We handle the full scope: architecture, development, testing, and
            deployment. You bring the problem; we figure out the solution and
            build it. No committees, no hand-holding required — just a clear
            brief and a working product at the end.
          </p>
          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.85,
              color: "var(--muted)",
            }}
          >
            Our work runs in production at scale — systems managing hundreds of
            schools, thousands of users, live business operations. That's the
            standard we hold every project to.
          </p>
        </div>
        <div
          className="reveal"
          style={{ display: "flex", flexDirection: "column", gap: 0 }}
        >
          {[
            { num: "5+", label: "Products shipped to production" },
            { num: "20K+", label: "End users across deployed systems" },
            { num: "6", label: "Core technologies in active use" },
            { num: "24h", label: "Response time on all projects" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "2.5rem 0",
                borderBottom: "1px solid var(--line)",
                borderTop: i === 0 ? "1px solid var(--line)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  color: "var(--white)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {stat.num.replace("+", "")}
                <span style={{ color: "var(--teal)" }}>
                  {stat.num.includes("+") ? "+" : ""}
                </span>
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "10rem 5vw",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(58,158,173,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="reveal"
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              fontSize: "0.72rem",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--teal)",
              marginBottom: "1.5rem",
            }}
          >
            Get In Touch
          </div>
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(4rem, 10vw, 9rem)",
              letterSpacing: "0.03em",
              lineHeight: 0.9,
              color: "var(--white)",
              margin: "1.5rem 0 2rem",
            }}
          >
            START
            <br />
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.2)",
                color: "transparent",
              }}
            >
              A
            </span>
            <br />
            PROJECT
          </div>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--muted)",
              maxWidth: 480,
              margin: "0 auto 3.5rem",
              lineHeight: 1.8,
            }}
          >
            Tell us what you're building. We'll tell you how we'd approach it,
            what it would take, and whether we're the right fit.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5px",
              background: "var(--line)",
              border: "1px solid var(--line)",
              textAlign: "left",
            }}
          >
            {[
              {
                icon: "✉",
                title: "Email",
                desc: "Send us a brief overview of your project.",
                href: "mailto:contact@linexisstudio.com",
                link: "contact@linexisstudio.com",
              },
              {
                icon: "💬",
                title: "WhatsApp",
                desc: "Prefer a direct conversation? We respond fast.",
                href: "https://wa.me/923xxxxxxxxx",
                link: "Message on WhatsApp ↗",
              },
              {
                icon: "in",
                title: "LinkedIn",
                desc: "See our updates and connect professionally.",
                href: "https://linkedin.com/company/linexis-studio",
                link: "Linexis Studio ↗",
              },
              {
                icon: "📍",
                title: "Location",
                desc: "Islamabad, Pakistan — working globally, remote-first.",
                href: null,
                link: null,
              },
            ].map((item, i) => (
              <ContactOption key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid var(--line)",
          padding: "2rem 5vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "0.78rem",
          color: "var(--muted)",
          flexWrap: "wrap",
          gap: "1rem",
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
        <div>Turning Ideas into Digital Products</div>
        <div>© 2025 — All Rights Reserved</div>
      </footer>

      {/* SERVICE DETAIL OVERLAY */}
      {activeService && s && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 800,
            display: "flex",
            alignItems: "flex-end",
            opacity: 1,
            transition: "opacity 0.3s",
          }}
          onClick={() => setActiveService(null)}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(8,10,11,0.88)",
              backdropFilter: "blur(4px)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              background: "var(--bg2)",
              borderTop: "1px solid var(--line-teal)",
              width: "100%",
              padding: "4rem 5vw 3rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "4rem",
              alignItems: "start",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveService(null)}
              style={{
                position: "absolute",
                top: "2rem",
                right: "5vw",
                background: "none",
                border: "1px solid var(--line)",
                color: "var(--muted)",
                fontSize: "0.85rem",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                fontFamily: "'Outfit', sans-serif', transition: 'color 0.2s'",
              }}
            >
              ✕ Close
            </button>

            <div>
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--teal)",
                  marginBottom: "1rem",
                }}
              >
                Service {s.num}
              </div>
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "var(--white)",
                  letterSpacing: "0.03em",
                  lineHeight: 0.95,
                  marginBottom: "1.5rem",
                }}
              >
                {s.name.toUpperCase()}
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                {s.desc}
              </p>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--muted)",
                  fontStyle: "italic",
                  marginBottom: "1.5rem",
                }}
              >
                Examples: {s.examples}
              </p>
              <a
                href="#contact"
                onClick={() => setActiveService(null)}
                style={{
                  display: "inline-block",
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
                Start This Project →
              </a>
            </div>

            <div>
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
                What&apos;s included
              </div>
              <div style={{ borderTop: "1px solid var(--line)" }}>
                {s.includes.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      padding: "0.9rem 0",
                      borderBottom: "1px solid var(--line)",
                      fontSize: "0.85rem",
                      color: "var(--text)",
                    }}
                  >
                    <span style={{ color: "var(--teal)", fontSize: "0.75rem" }}>
                      →
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
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
                Typical timeline
              </div>
              <div style={{ borderTop: "1px solid var(--line)" }}>
                {s.timeline
                  .split(". ")
                  .filter(Boolean)
                  .map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.8rem",
                        padding: "0.9rem 0",
                        borderBottom: "1px solid var(--line)",
                        fontSize: "0.85rem",
                        color: "var(--text)",
                      }}
                    >
                      <span
                        style={{ color: "var(--teal)", fontSize: "0.75rem" }}
                      >
                        →
                      </span>
                      {item}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
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
        background: scrolled ? "rgba(8,10,11,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--line)" : "none",
        transition: "background 0.3s, border-bottom 0.3s",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "1.5rem",
          letterSpacing: "0.12em",
          color: "var(--white)",
          textDecoration: "none",
        }}
      >
        <span style={{ color: "var(--teal)" }}>LINEXIS</span> STUDIO
      </a>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2.5rem",
          listStyle: "none",
        }}
      >
        {[
          ["#services", "Services"],
          ["#work", "Work"],
          ["#studio", "Studio"],
          ["#contact", "Start a Project"],
        ].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              style={{
                color:
                  label === "Start a Project" ? "var(--teal)" : "var(--muted)",
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                border:
                  label === "Start a Project"
                    ? "1px solid var(--line-teal)"
                    : "none",
                padding: label === "Start a Project" ? "0.5rem 1.25rem" : "0",
                borderRadius: 1,
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                if (label === "Start a Project") {
                  e.currentTarget.style.background = "var(--teal)";
                  e.currentTarget.style.color = "#000";
                } else e.currentTarget.style.color = "var(--white)";
              }}
              onMouseLeave={(e) => {
                if (label === "Start a Project") {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--teal)";
                } else e.currentTarget.style.color = "var(--muted)";
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function WorkCard({ project, featured }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      href={`/work/${project.slug}`}
      style={{
        background: hovered ? "var(--bg2)" : "var(--bg)",
        padding: "3rem",
        position: "relative",
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit",
        display: "block",
        gridColumn: featured ? "1 / -1" : "auto",
        transition: "background 0.3s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "var(--teal)",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s ease",
        }}
      />

      <div
        style={{
          display: featured ? "grid" : "block",
          gridTemplateColumns: featured ? "1fr 1fr" : "1fr",
          gap: featured ? "3rem" : 0,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "3.5rem",
                color: hovered ? "var(--teal-glow)" : "var(--line)",
                lineHeight: 1,
                transition: "color 0.3s",
              }}
            >
              {project.index}
            </div>
            <div
              style={{
                fontSize: "0.7rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--teal)",
                background: "var(--teal-glow)",
                padding: "0.3rem 0.8rem",
                borderRadius: 1,
              }}
            >
              {project.type}
            </div>
          </div>
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "2rem",
              letterSpacing: "0.05em",
              color: "var(--white)",
              marginBottom: "0.75rem",
              lineHeight: 1.1,
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              fontSize: "0.875rem",
              color: "var(--muted)",
              lineHeight: 1.75,
              marginBottom: "1.5rem",
            }}
          >
            {project.desc}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {project.stack.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  padding: "0.2rem 0.55rem",
                  background: "var(--bg3)",
                  color: "var(--muted)",
                  borderRadius: 1,
                  border: "1px solid var(--line)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {featured && project.stats && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              background: "var(--line)",
              border: "1px solid var(--line)",
            }}
          >
            {project.stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: "var(--bg3)",
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "2rem",
                    color: "var(--teal)",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  {stat.num}
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--muted)",
                    letterSpacing: "0.05em",
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          right: "2rem",
          fontSize: "1.2rem",
          color: "var(--muted)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translate(0,0)" : "translate(4px,-4px)",
          transition: "opacity 0.3s, transform 0.3s",
        }}
      >
        ↗
      </div>
    </Link>
  );
}

function ContactOption({ icon, title, desc, href, link }) {
  const [hovered, setHovered] = useState(false);
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href || undefined}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      style={{
        background: hovered && href ? "var(--bg3)" : "var(--bg2)",
        padding: "2.5rem",
        textDecoration: "none",
        color: "inherit",
        transition: "background 0.3s",
        position: "relative",
        overflow: "hidden",
        display: "block",
        cursor: href ? "pointer" : "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "var(--teal)",
          transform: hovered && href ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s",
        }}
      />
      <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{icon}</div>
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "1.4rem",
          letterSpacing: "0.05em",
          color: "var(--white)",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "0.82rem",
          color: "var(--muted)",
          lineHeight: 1.6,
          marginBottom: link ? "0.8rem" : 0,
        }}
      >
        {desc}
      </div>
      {link && (
        <div
          style={{
            fontSize: "0.78rem",
            color: "var(--teal)",
            letterSpacing: "0.05em",
          }}
        >
          {link}
        </div>
      )}
      {href && (
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "2rem",
            color: "var(--teal)",
            fontSize: "1.1rem",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        >
          ↗
        </div>
      )}
    </Tag>
  );
}
