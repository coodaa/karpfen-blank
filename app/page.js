"use client";

export default function Home() {
  const handleBuy = () => {
    window.open("https://www.paypal.com/ncp/payment/FMUUF5AXMEPBY", "_blank");
  };

  return (
    <main
      style={{
        minHeight: "200vh",
        backgroundImage: "url('/karpfenblank.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        textAlign: "center",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* GLOBAL STYLES (ANIMATIONS + MOBILE FIXES) */}
      <style jsx global>{`
        @keyframes wiggle {
          0% {
            transform: rotate(-10deg) translateY(0);
          }
          50% {
            transform: rotate(-8deg) translateY(-2px);
          }
          100% {
            transform: rotate(-10deg) translateY(0);
          }
        }
        @keyframes floaty {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes shine {
          0% {
            transform: translateX(-120%) rotate(18deg);
            opacity: 0;
          }
          15% {
            opacity: 0.35;
          }
          45% {
            opacity: 0.25;
          }
          70% {
            opacity: 0;
          }
          100% {
            transform: translateX(220%) rotate(18deg);
            opacity: 0;
          }
        }
        @keyframes pulseRing {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 122, 0, 0.55);
          }
          70% {
            box-shadow: 0 0 0 22px rgba(255, 122, 0, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 122, 0, 0);
          }
        }

        @media (max-width: 520px) {
          .heroCard {
            padding: 1.1rem 1rem 1.3rem !important;
            border-radius: 22px !important;
          }
          .ctaBtn {
            width: 100% !important;
            padding: 1.15rem 1.2rem !important;
          }
          .ctaMain {
            font-size: 1.25rem !important;
          }
        }
      `}</style>

      {/* HERO OVERLAY (makes everything pop + readable) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(1200px 700px at 50% 60%, rgba(0,0,0,0.10), rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.85) 100%), linear-gradient(135deg, rgba(255,80,80,0.20), rgba(255,150,0,0.18))",
          pointerEvents: "none",
        }}
      />

      {/* SALE STICKER – comic-ish */}
      <div
        style={{
          position: "fixed",
          top: "calc(env(safe-area-inset-top, 0px) + 18px)",
          left: "18px",
          zIndex: 50,
          transform: "rotate(-10deg)",
          animation: "wiggle 1.8s ease-in-out infinite",
          filter: "drop-shadow(0 12px 22px rgba(0,0,0,0.45))",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))",
            color: "black",
            borderRadius: "18px",
            padding: "0.85rem 1.05rem",
            border: "2px solid rgba(0,0,0,0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ fontWeight: 950, letterSpacing: "0.06em" }}>
            🔥 SALE
          </div>
          <div
            style={{
              fontSize: "1.15rem",
              fontWeight: 950,
              marginTop: "0.1rem",
            }}
          >
            19,99 €
          </div>
          <div style={{ fontSize: "0.78rem", opacity: 0.75, fontWeight: 700 }}>
            inkl. Versand (DE)
          </div>

          {/* tiny sparkles */}
          <div
            style={{
              position: "absolute",
              right: "-16px",
              top: "-16px",
              width: "48px",
              height: "48px",
              background: "rgba(255,90,0,0.18)",
              borderRadius: "999px",
            }}
          />
        </div>
      </div>

      {/* HERO */}
      <section
        style={{
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1rem 4rem",
          paddingTop: "clamp(2rem, 6vh, 6rem)",
          position: "relative",
          width: "100%",
        }}
      >
        {/* BIG TITLE with pop shadow */}
        <h1
          style={{
            fontSize: "clamp(4.2rem, 14vw, 16rem)",
            fontWeight: 900,
            lineHeight: 0.85,
            margin: 0,
            textTransform: "uppercase",
            whiteSpace: "pre-line",
            letterSpacing: "0.03em",
            textShadow: "0 18px 45px rgba(0,0,0,0.55), 0 2px 0 rgba(0,0,0,0.2)",
          }}
        >
          Karpfen{"\n"}Blank
        </h1>

        {/* GLASS CARD = the “ad panel” */}
        <div
          className="heroCard"
          style={{
            marginTop: "2.2rem",
            width: "min(820px, 92vw)",
            borderRadius: "28px",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.08))",
            border: "1px solid rgba(255,255,255,0.22)",
            boxShadow:
              "0 24px 70px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.18)",
            backdropFilter: "blur(10px)",
            padding: "1.35rem 1.4rem 1.6rem",
            animation: "floaty 4s ease-in-out infinite",
          }}
        >
          <p style={{ margin: 0, opacity: 0.92, fontSize: "1.2rem" }}>
            Zwölf Menschen. Zwölf Orte. Ein Stoffkarpfen.
          </p>

          <p style={{ margin: "0.75rem 0 0", fontSize: "1.25rem" }}>
            Neues Jahr schon halb vorbei?{" "}
            <strong style={{ fontWeight: 900 }}>Dann jetzt: billig.</strong>
          </p>

          {/* ULTRA CTA */}
          <button
            className="ctaBtn"
            onClick={handleBuy}
            style={{
              marginTop: "1.15rem",
              width: "min(560px, 92vw)",
              border: "none",
              borderRadius: "999px",
              padding: "1.35rem 1.6rem",
              cursor: "pointer",
              color: "white",
              position: "relative",
              overflow: "hidden",
              background: "linear-gradient(135deg,#ff2d55,#ff9500)",
              boxShadow:
                "0 18px 40px rgba(0,0,0,0.5), 0 0 0 6px rgba(255,255,255,0.08)",
              transform: "translateZ(0)",
              animation: "pulseRing 1.6s infinite",
              transition: "transform 140ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.99)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
            }}
          >
            {/* shine sweep */}
            <span
              aria-hidden
              style={{
                position: "absolute",
                top: "-40%",
                left: "-40%",
                width: "55%",
                height: "180%",
                background: "rgba(255,255,255,0.35)",
                transform: "translateX(-120%) rotate(18deg)",
                animation: "shine 2.8s ease-in-out infinite",
              }}
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                lineHeight: 1.1,
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                className="ctaMain"
                style={{ fontSize: "1.65rem", fontWeight: 950 }}
              >
                👉 Jetzt kaufen – 19,99 €
              </div>
              <div
                style={{
                  marginTop: "0.35rem",
                  fontSize: "0.92rem",
                  opacity: 0.9,
                }}
              >
                inkl. Versand (DE) • Nur solange Vorrat reicht
              </div>
            </div>
          </button>

          <p style={{ marginTop: "0.9rem", opacity: 0.85 }}>
            Versand ausschließlich innerhalb Deutschlands.
          </p>

          <p style={{ marginTop: "0.9rem", opacity: 0.9 }}>
            Kontakt:{" "}
            <a
              href="mailto:hi@karpfen-blank.de"
              style={{ color: "white", textDecoration: "underline" }}
            >
              hi@karpfen-blank.de
            </a>
          </p>
        </div>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/karpfen.blank/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "2.6rem",
            width: "64px",
            height: "64px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.14)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" />
          </svg>
        </a>
      </section>

      {/* SHOP + TEXT */}
      <section
        style={{
          minHeight: "100vh",
          width: "100%",
          padding: "4rem 1rem",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.75), rgba(0,0,0,0.6))",
            backdropFilter: "blur(2px)",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: "900px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/shop.png"
            alt="Karpfen Blank Kalender 2026 – Produktfoto"
            style={{
              width: "clamp(250px, 70vw, 700px)",
              borderRadius: "18px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          />

          <h2 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", marginTop: "2rem" }}>
            Karpfen Kalender 2026
          </h2>

          <div
            style={{
              marginTop: "1rem",
              background:
                "linear-gradient(135deg, rgba(255,45,85,0.18), rgba(255,149,0,0.16))",
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: "16px",
              padding: "0.9rem 1.1rem",
              width: "min(760px, 92vw)",
              boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
            }}
          >
            <p style={{ margin: 0, fontSize: "1.25rem", opacity: 0.95 }}>
              <strong>SALE:</strong> Jetzt nur{" "}
              <strong>19,99 € inkl. Versand (DE)</strong> – keine Ausreden.
            </p>
          </div>

          <p
            style={{
              fontSize: "1.2rem",
              marginTop: "2rem",
              lineHeight: 1.7,
              opacity: 0.92,
              textAlign: "justify",
              textAlignLast: "center",
              maxWidth: "760px",
            }}
          >
            <strong>Karpfen Blank 2026</strong> ist ein A3-Wandkalender aus
            Berlin. Zwölf Fotografien, aufgenommen an zwölf verschiedenen Orten
            mit zwölf Menschen. Der Kalender erscheint in einer limitierten
            Auflage und eignet sich ideal als Geschenk oder für alle, die
            besondere Fotoprojekte schätzen.
          </p>

          <button
            onClick={handleBuy}
            style={{
              marginTop: "2.2rem",
              background: "linear-gradient(135deg,#ff2d55,#ff9500)",
              color: "white",
              border: "none",
              borderRadius: "999px",
              padding: "1.1rem 3.2rem",
              fontSize: "1.25rem",
              fontWeight: 950,
              cursor: "pointer",
              boxShadow: "0 18px 45px rgba(0,0,0,0.55)",
            }}
          >
            Jetzt kaufen – 19,99 € (inkl. Versand)
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          width: "100%",
          textAlign: "center",
          padding: "2rem 1rem",
          fontSize: "0.9rem",
          opacity: 0.9,
          background: "rgba(0,0,0,0.75)",
          borderTop: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <a href="/impressum" style={{ margin: "0 1rem", color: "white" }}>
          Impressum
        </a>
        <a href="/datenschutz" style={{ margin: "0 1rem", color: "white" }}>
          Datenschutz
        </a>
        <a href="/widerruf" style={{ margin: "0 1rem", color: "white" }}>
          Widerruf
        </a>
      </footer>
    </main>
  );
}
