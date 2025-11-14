export default function Impressum() {
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

      <h1 style={{ marginBottom: "1.5rem", marginTop: "2rem" }}>Impressum</h1>

      <p>
        Angaben gemäß § 5 TMG
        <br />
        <br />
        Florian Schneider
        <br />
        Gasteiner Straße 30
        <br />
        10717 Berlin
      </p>

      <p>
        E-Mail: hi@karpfen-blank.de
        <br />
        USt-ID: DE354424800
      </p>

      <p>
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Florian Schneider
      </p>
    </main>
  );
}
