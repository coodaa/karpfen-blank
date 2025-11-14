export default function Widerruf() {
  return (
    <main
      style={{
        padding: "4rem 1.5rem",
        maxWidth: "800px",
        margin: "0 auto",
        position: "relative",
        lineHeight: 1.7,
        color: "white",
      }}
    >
      {/* BACK LINK */}
      <a
        href="/"
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "white",
          fontSize: "1.1rem",
          textDecoration: "underline",
          opacity: 0.9,
        }}
      >
        ← Zurück zur Startseite
      </a>

      <h1 style={{ marginBottom: "1.5rem", marginTop: "2rem" }}>
        Widerrufsbelehrung
      </h1>

      <h2 style={{ marginTop: "2rem" }}>1. Widerrufsrecht</h2>
      <p>
        Du hast das Recht, den Kaufvertrag innerhalb von 14 Tagen ohne Angabe
        von Gründen zu widerrufen.
      </p>

      <h2 style={{ marginTop: "2rem" }}>2. Widerrufsfrist</h2>
      <p>Die Frist beträgt 14 Tage ab Erhalt der Ware.</p>

      <h2 style={{ marginTop: "2rem" }}>3. Widerruf an</h2>
      <p>
        Florian Schneider
        <br />
        Gasteiner Straße 30
        <br />
        10717 Berlin
        <br />
        E-Mail: hi@karpfen-blank.de
      </p>

      <h2 style={{ marginTop: "2rem" }}>4. Folgen des Widerrufs</h2>
      <p>
        Nach Eingang erstatten wir dir alle Zahlungen binnen 14 Tagen.
        Rücksendekosten trägst du selbst.
      </p>

      <h2 style={{ marginTop: "2rem" }}>5. Ausschlüsse</h2>
      <p>Bereits geöffnete Kalender sind aus hygienischen Gründen ausgeschlossen.</p>
    </main>
  );
}
