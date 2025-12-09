"use client";

export default function KalenderPage() {
  const handleBuy = () => {
    window.open("https://www.paypal.com/ncp/payment/FMUUF5AXMEPBY", "_blank");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "4rem 1.5rem",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(3rem, 8vw, 5rem)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Karpfen Kalender 2026
      </h1>

      {/* EINLEITUNG – neu formuliert */}
      <p
        style={{
          marginTop: "1.5rem",
          maxWidth: "800px",
          lineHeight: 1.7,
          fontSize: "1.2rem",
          opacity: 0.95,
        }}
      >
        Der <strong>Karpfen Blank Kalender 2026</strong> ist unsere erste
        Ausgabe. Zwölf Menschen, zwölf Orte – verbunden durch einen
        Stoffkarpfen, der ein Jahr lang durch Berlin gewandert ist. Die Fotos
        sind spontan entstanden, ohne Studio, ohne Set-Design und ohne große
        Vorbereitung. Jede Seite zeigt einen echten Moment.
      </p>

      <img
        src="/shop.png"
        alt="Karpfen Blank Kalender 2026"
        style={{
          marginTop: "3rem",
          width: "clamp(250px, 70vw, 700px)",
          borderRadius: "12px",
          boxShadow: "0 0 30px rgba(0,0,0,0.6)",
        }}
      />

      {/* PRODUKTDETAILS – neu strukturiert */}
      <p
        style={{
          marginTop: "2rem",
          fontSize: "1.1rem",
          maxWidth: "800px",
          lineHeight: 1.6,
          opacity: 0.95,
        }}
      >
        Gedruckt wird der Kalender im hochwertigen{" "}
        <strong>A3-Format (297 × 420 mm)</strong>. Die Erstauflage erscheint in
        begrenzter Stückzahl. Perfekt für Küche, Atelier, Studio oder jeden Ort,
        der ein bisschen Berlin verträgt.
      </p>

      <p
        style={{
          marginTop: "1.5rem",
          fontSize: "1.05rem",
          opacity: 0.9,
        }}
      >
        <strong>Preis:</strong> 35 €
        <br />
        <strong>Versand:</strong> beginnt Anfang Dezember.
      </p>

      {/* BUTTON */}
      <button
        onClick={handleBuy}
        style={{
          background: "white",
          color: "black",
          borderRadius: "999px",
          border: "none",
          padding: "1rem 3rem",
          fontSize: "1.3rem",
          cursor: "pointer",
          marginTop: "2rem",
        }}
      >
        Jetzt bestellen – 35 €
      </button>

      {/* BACK-LINK */}
      <a
        href="/"
        style={{
          marginTop: "3rem",
          textDecoration: "underline",
          fontSize: "1rem",
          opacity: 0.9,
          color: "white",
        }}
      >
        Zurück zur Startseite
      </a>
    </main>
  );
}
