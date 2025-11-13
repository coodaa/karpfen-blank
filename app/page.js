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

      {/* SHOP SECTION – Overlay über demselben Hintergrund */}
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
        {/* GRAUER SCHLEIER ÜBER DEM BILD */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(2px)",
            zIndex: 0,
          }}
        ></div>

        {/* INHALT */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "700px",
            textAlign: "center",
            padding: "0 1rem",
          }}
        >
          <img
            src="/shop.png"
            alt="Karpfen Blank Kalender 2026 – Produktfoto"
            style={{
              width: "clamp(250px, 60vw, 500px)",
              borderRadius: "12px",
              boxShadow: "0 0 30px rgba(0,0,0,0.5)",
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

          <p
            style={{
              fontSize: "1.25rem",
              marginTop: "1.5rem",
              lineHeight: 1.55,
              opacity: 0.95,
              textAlign: "justify",
              textAlignLast: "center",
              hyphens: "auto",
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            <strong>Karpfen Blank 2026</strong> ist ein unabhängiges Fotoprojekt
            aus Berlin. Ein Jahr lang haben wir einen Stoffkarpfen mit zwölf
            unterschiedlichen Menschen zusammengebracht – spontan, ehrlich und
            ohne Set-Design.
            <br />
            <br />
            Die Motive sind eine Mischung aus Porträt, Alltag, Kunst und Chaos.
            Sie zeigen Orte, an denen man vorbeigeht und Menschen, die man
            vielleicht nie getroffen hätte.
            <br />
            <br />
            Mit jedem Kauf unterstützt du nicht nur dieses Projekt, sondern
            spendest auch <strong>10 € an den Berliner Kältebus</strong>, der
            jeden Winter Menschen ohne Unterkunft hilft.
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
    </main>
  );
}
