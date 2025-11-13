"use client";

export default function Home() {

  const handleBuy = () => {
    window.open(
      "https://www.paypal.com/ncp/payment/YOUR_PAYPAL_LINK",
      "_blank"
    );
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

      {/* -------------------- HERO SECTION -------------------- */}
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
            fontSize: "clamp(7.5rem, 18vw, 20rem)",
            fontWeight: 700,
            lineHeight: 1,
            textTransform: "uppercase",
            margin: 0,
            whiteSpace: "pre-line",
            letterSpacing: "0.05em",
            color: "white",
          }}
        >
          Karpfen{"\n"}Blank
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.6rem)",
            maxWidth: "750px",
            marginTop: "2rem",
            fontWeight: 300,
            lineHeight: 1.6,
            opacity: 0.92,
          }}
        >
          Zwölf Menschen. Zwölf Orte. Ein Stoffkarpfen.
        </p>

        {/* TOP-BUY-BUTTON */}
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
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
        >
          Jetzt kaufen – 35 €
        </button>

        <p
          style={{
            marginTop: "2rem",
            opacity: 0.8,
            fontSize: "1rem",
          }}
        >
          Fragen? Schreib uns an{" "}
          <a
            href="mailto:hi@karpfen-blank.de"
            style={{
              color: "white",
              textDecoration: "underline",
              fontWeight: 500,
            }}
          >
            hi@karpfen-blank.de
          </a>
        </p>

        <footer
          style={{
            position: "absolute",
            bottom: "2rem",
            fontSize: "1rem",
            opacity: 0.7,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Berlin 2025 © Karpfen Blank
        </footer>
      </section>

      {/* -------------------- SHOP SECTION -------------------- */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem 1rem",
          background: "white",
          width: "100%",
          color: "black",
        }}
      >
        <img
          src="/shop.png"
          alt="Karpfen Blank Kalender 2026"
          style={{
            width: "clamp(250px, 60vw, 500px)",
            borderRadius: "12px",
            boxShadow: "0 0 30px rgba(0,0,0,0.15)",
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
            marginTop: "1rem",
            maxWidth: "650px",
            lineHeight: 1.5,
            opacity: 0.9,
          }}
        >
          Der Karpfenkalender ist streng limitiert und wird in einer kleinen
          Auflage gedruckt.
          <br />
          <br />
          Mit deinem Kauf unterstützt du ein unabhängiges Berliner Kunstprojekt
          und spendest automatisch{" "}
          <strong>10 € an den Berliner Kältebus</strong>.
          <br />
          <br />
          Preis: <strong>35 €</strong>
        </p>

        <button
          onClick={handleBuy}
          style={{
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "999px",
            padding: "1rem 3rem",
            fontSize: "1.3rem",
            cursor: "pointer",
            marginTop: "2rem",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
        >
          Jetzt kaufen – 35 €
        </button>
      </section>
    </main>
  );
}
