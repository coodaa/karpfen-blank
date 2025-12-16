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
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1rem 4rem",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(6rem, 18vw, 20rem)",
            fontWeight: 700,
            lineHeight: 1,
            margin: 0,
            textTransform: "uppercase",
            whiteSpace: "pre-line",
            letterSpacing: "0.05em",
          }}
        >
          Karpfen{"\n"}Blank
        </h1>

        <p style={{ marginTop: "2rem", opacity: 0.9, fontSize: "1.3rem" }}>
          Zwölf Menschen. Zwölf Orte. Ein Stoffkarpfen.
        </p>

        <button
          onClick={handleBuy}
          style={{
            background: "white",
            color: "black",
            border: "none",
            borderRadius: "999px",
            padding: "1.1rem 3.2rem",
            marginTop: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            lineHeight: 1.2,
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: "1.5rem", fontWeight: 600 }}>
            Jetzt kaufen – 29 €
          </span>
          <span style={{ fontSize: "0.85rem", opacity: 0.65 }}>
            inkl. Versand (DE)
          </span>
        </button>

        <p style={{ marginTop: "1rem", opacity: 0.75, fontSize: "1.25rem" }}>
          Versand ausschließlich innerhalb Deutschlands.
        </p>

        <p style={{ marginTop: "2rem", opacity: 0.85, fontSize: "1.25rem" }}>
          Kontakt:{" "}
          <a
            href="mailto:hi@karpfen-blank.de"
            style={{ color: "white", textDecoration: "underline" }}
          >
            hi@karpfen-blank.de
          </a>
        </p>

        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/karpfen.blank/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "3rem",
            width: "64px",
            height: "64px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
            background: "rgba(0,0,0,0.55)",
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
              borderRadius: "12px",
              boxShadow: "0 0 30px rgba(0,0,0,0.5)",
            }}
          />

          <h2 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", marginTop: "2rem" }}>
            Karpfen Kalender 2026
          </h2>

          {/* PRODUKTBESCHREIBUNG */}
          <p
            style={{
              fontSize: "1.25rem",
              marginTop: "2rem",
              lineHeight: 1.7,
              opacity: 0.95,
              textAlign: "justify",
              textAlignLast: "center",
            }}
          >
            <strong>Karpfen Blank 2026</strong> ist ein A3-Wandkalender aus
            Berlin. Zwölf Fotografien, aufgenommen an zwölf verschiedenen Orten
            mit zwölf Menschen. Der Kalender erscheint in einer limitierten
            Auflage und eignet sich ideal als Geschenk oder für alle, die
            besondere Fotoprojekte schätzen.
            <br />
            <br />
            Bei Bestellung bis zum <strong>20.12.</strong> kommt der Kalender
            rechtzeitig vor Weihnachten bei dir an.
          </p>

          <h3 style={{ marginTop: "3rem", fontSize: "1.6rem" }}>
            Über den Karpfen Blank Kalender
          </h3>

          {/* PROJEKT / IDEE */}
          <p
            style={{
              fontSize: "1.25rem",
              marginTop: "1.5rem",
              lineHeight: 1.6,
              opacity: 0.9,
              textAlign: "justify",
              textAlignLast: "center",
            }}
          >
            Karpfen Blank entsteht aus Begegnungen. Der Stoffkarpfen reist durch
            Berlin und taucht dort auf, wo Menschen bereit sind, sich auf den
            Moment einzulassen. Ohne Inszenierung, ohne Kulisse – direkt,
            zufällig, echt.
            <br />
            <br />
            Der Kalender erscheint 2026 zum ersten Mal und wird ausschließlich
            in kleiner Stückzahl produziert.
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
              marginTop: "2.5rem",
              cursor: "pointer",
            }}
          >
            Jetzt kaufen – 29 €
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
