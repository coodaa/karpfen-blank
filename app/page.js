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
      {/* HERO SECTION */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1rem",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(6rem, 18vw, 20rem)",
            fontWeight: 700,
            lineHeight: 1,
            textTransform: "uppercase",
            margin: 0,
            whiteSpace: "pre-line",
            letterSpacing: "0.05em",
          }}
        >
          Karpfen{"\n"}Blank
        </h1>

        <p
          style={{
            marginTop: "2rem",
            opacity: 0.9,
            fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
          }}
        >
          Zwölf Menschen. Zwölf Orte. Ein Stoffkarpfen.
        </p>

        {/* TOP BUY BUTTON */}
        <button
          onClick={handleBuy}
          style={{
            background: "white",
            color: "black",
            border: "none",
            borderRadius: "999px",
            padding: "1rem 3rem",
            fontSize: "1.5rem",
            cursor: "pointer",
            marginTop: "2.5rem",
            transition: "transform 0.3s ease",
          }}
        >
          Jetzt kaufen – 35 €
        </button>

        <p
          style={{
            marginTop: "2rem",
            opacity: 0.8,
            fontSize: "1.3rem",
          }}
        >
          Kontakt:{" "}
          <a
            href="mailto:hi@karpfen-blank.de"
            style={{ color: "white", textDecoration: "underline" }}
          >
            hi@karpfen-blank.de
          </a>
        </p>
      </section>

      {/* SHOP SECTION */}
      <section
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 1rem",
          position: "relative",
          color: "white",
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(2px)",
            zIndex: 0,
          }}
        ></div>

        {/* CONTENT */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "900px",
            width: "100%",
            padding: "0 1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/shop.png"
            alt="Karpfen Blank Kalender 2026 – Produktfoto"
            style={{
              width: "clamp(250px, 60vw, 500px)",
              borderRadius: "12px",
              boxShadow: "0 0 30px rgba(0,0,0,0.5)",
              marginTop: "4rem", // 👈 Abstand von oben
            }}
          />

          <h2
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              marginTop: "2rem",
              letterSpacing: "0.03em",
              textAlign: "center",
            }}
          >
            Karpfen Kalender 2026
          </h2>

          {/* TYPOGRAFISCHER TEXT */}
          <p
            style={{
              fontSize: "1.3rem",
              marginTop: "2rem",
              lineHeight: 1.7,
              opacity: 0.95,
              textAlign: "justify",
              textAlignLast: "center",
              hyphens: "auto",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              maxWidth: "95vw",
              letterSpacing: "0.03em",
            }}
          >
            <strong>Karpfen Blank 2026</strong> ist ein unabhängiges Fotoprojekt
            aus Berlin. Ein Jahr lang haben wir einen Stoffkarpfen mit zwölf
            unterschiedlichen Menschen zusammengebracht – spontan, ehrlich und
            ohne großes Set-Design. Ein Kalender, irgendwo zwischen PORTRÄT,
            ALLTAG, KUNST und leichtem CHAOS.
            <br />
            <br />
            Der Kalender erscheint als hochwertige <strong>
              A3-EDITION
            </strong>{" "}
            (297 × 420 mm) auf stabilem Qualitätsdruck. Jede Ausgabe ein kleines
            Objekt – bewusst in LIMITIERTER AUFLAGE.
            <br />
            <br />
            <span style={{ color: "#6EC8FF", fontWeight: 600 }}>
              Pro Kalender spenden wir 10 € an den BERLINER KÄLTEBUS.
            </span>
            <br />
            Die gesammelten Spenden werden am Ende der Verkaufsphase überwiesen
            und öffentlich dokumentiert.
            <br />
            <br />
            Der Versand startet <strong>ANFANG DEZEMBER</strong>, damit der
            Kalender rechtzeitig vor Weihnachten bei dir ist.
          </p>

          <button
            onClick={handleBuy}
            style={{
              background: "white",
              color: "black",
              border: "none",
              borderRadius: "999px",
              padding: "1rem 3rem",
              fontSize: "1.3rem",
              cursor: "pointer",
              marginTop: "2.5rem",
              transition: "transform 0.3s ease",
            }}
          >
            Jetzt kaufen – 35 €
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
          opacity: 0.8,
          background: "rgba(0,0,0,0.7)",
          marginTop: "auto",
        }}
      >
        <a
          href="/impressum"
          style={{ margin: "0 1rem", textDecoration: "underline" }}
        >
          Impressum
        </a>
        <a
          href="/datenschutz"
          style={{ margin: "0 1rem", textDecoration: "underline" }}
        >
          Datenschutz
        </a>
        <a
          href="/widerruf"
          style={{ margin: "0 1rem", textDecoration: "underline" }}
        >
          Widerruf
        </a>
      </footer>
    </main>
  );
}
