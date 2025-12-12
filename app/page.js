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

        {/* BUY BUTTON */}
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
          Jetzt kaufen – 29 € (inkl. Versand DE)
        </button>

        {/* Versandinfo */}
        <p
          style={{
            marginTop: "1rem",
            opacity: 0.75,
            fontSize: "1.1rem",
          }}
        >
          Versand ausschließlich innerhalb Deutschlands.
        </p>

        {/* Kontakt */}
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

        {/* INSTAGRAM ICON */}
        <a
          href="https://www.instagram.com/karpfen.blank/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(4px)",
            marginTop: "2rem",
            textDecoration: "none",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path
              d="M7 2C4.243 2 2 4.243 2 7v10c0
              2.757 2.243 5 5 5h10c2.757 0 5-2.243
              5-5V7c0-2.757-2.243-5-5-5H7zm10
              2c1.654 0 3 1.346 3
              3v10c0 1.654-1.346 3-3
              3H7c-1.654 0-3-1.346-3-3V7c0-1.654
              1.346-3 3-3h10zm-5
              3a5 5 0 100 10 5
              5 0 000-10zm0 2a3 3 0 110
              6 3 3 0 010-6zm4.5-.9a1.1 1.1
              0 11-2.2 0 1.1 1.1
              0 012.2 0z"
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
        />

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
              marginTop: "4rem",
            }}
          />

          <h2
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              marginTop: "2rem",
              letterSpacing: "0.03em",
            }}
          >
            Karpfen Kalender 2026
          </h2>

          {/* SEO-Text */}
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
              maxWidth: "95vw",
              letterSpacing: "0.03em",
            }}
          >
            <strong>Karpfen Blank 2026</strong> ist ein A3-Wandkalender aus
            Berlin, fotografiert an zwölf Orten mit zwölf verschiedenen
            Menschen. Der Kalender erscheint in einer limitierten Auflage und
            eignet sich ideal als Geschenk oder für alle, die besondere
            Fotoprojekte lieben.
            <br />
            <br />
            Der Versand startet <strong>Anfang Dezember</strong>, damit der
            Kalender rechtzeitig vor Weihnachten bei dir ankommt.
            <br />
            <br />
            Preis: <strong>29 € inkl. Versand innerhalb Deutschlands</strong>.
            Wir versenden ausschließlich innerhalb Deutschlands.
          </p>

          {/* Zusatz-SEO */}
          <h3
            style={{
              marginTop: "3rem",
              fontSize: "1.6rem",
              letterSpacing: "0.04em",
            }}
          >
            Über den Karpfen Blank Kalender
          </h3>

          <p
            style={{
              fontSize: "1.2rem",
              marginTop: "1.5rem",
              opacity: 0.92,
              lineHeight: 1.6,
              textAlign: "justify",
              textAlignLast: "center",
            }}
          >
            Karpfen Blank erscheint 2026 zum ersten Mal. Der Kalender zeigt
            zwölf Begegnungen an echten Berliner Orten – spontan, direkt und
            ohne künstliche Inszenierung. Gedruckt im A3-Format und nur in
            begrenzter Stückzahl erhältlich.
            <br />
            <br />
            Preis: <strong>29 € inkl. Versand innerhalb Deutschlands</strong>.
            Kein internationaler Versand.
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
            Jetzt kaufen – 29 € (inkl. Versand DE)
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
          opacity: 0.85,
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

        <a
          href="/kalender-2026"
          style={{
            margin: "0 1rem",
            textDecoration: "underline",
            color: "white",
            fontWeight: 600,
            letterSpacing: "0.02em",
          }}
        >
          Kalender
        </a>
      </footer>
    </main>
  );
}
// sdf/
