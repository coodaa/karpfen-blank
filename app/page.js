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

        {/* Instagram Icon Link */}
        <a
          href="https://www.instagram.com/karpfen.blank/?igsh=MXdra3NrOGlocDg0Nw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px", // 👈 größerer Button
            height: "64px", // 👈 größerer Button
            borderRadius: "999px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(4px)",
            marginTop: "2rem",
            textDecoration: "none",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32" // 👈 größeres Icon
            height="32" // 👈 größeres Icon
            fill="white"
            viewBox="0 0 24 24"
          >
            <path
              d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757
    2.243 5 5 5h10c2.757 0 5-2.243
    5-5V7c0-2.757-2.243-5-5-5H7zm10
    2c1.654 0 3 1.346 3
    3v10c0 1.654-1.346 3-3
    3H7c-1.654 0-3-1.346-3-3V7c0-1.654
    1.346-3 3-3h10zm-5
    3a5 5 0 100 10 5
    5 0 000-10zm0 2a3 3 0 110
    6 3 3 0 010-6zm4.5-.9a1.1 1.1
    0 11-2.2 0 1.1 1.1 0
    012.2 0z"
            />
          </svg>
        </a>
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
              width: "clamp(250px, 70vw, 700px)",
              borderRadius: "12px",
              boxShadow: "0 0 30px rgba(0,0,0,0.5)",
              marginTop: "4rem", // Abstand von oben
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
            Der Kalender erscheint als hochwertige <strong>A3-EDITION</strong>
            (297 × 420 mm) auf stabilem Qualitätsdruck. Jede Ausgabe ein kleines
            Objekt – bewusst in LIMITIERTER AUFLAGE.
            <br />
            <br />
            {/* (Spende-Zeile wurde entfernt) */}
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
          style={{
            margin: "0 1rem",
            textDecoration: "underline",
            color: "white",
          }}
        >
          Impressum
        </a>
        <a
          href="/datenschutz"
          style={{
            margin: "0 1rem",
            textDecoration: "underline",
            color: "white",
          }}
        >
          Datenschutz
        </a>
        <a
          href="/widerruf"
          style={{
            margin: "0 1rem",
            textDecoration: "underline",
            color: "white",
          }}
        >
          Widerruf
        </a>
      </footer>
    </main>
  );
}
