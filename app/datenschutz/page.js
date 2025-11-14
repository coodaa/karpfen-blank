export default function Datenschutz() {
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
        Datenschutzerklärung
      </h1>

      <p>
        Der Schutz deiner Daten ist uns wichtig. Diese Webseite verarbeitet
        personenbezogene Daten nur im technisch notwendigen Umfang.
      </p>

      <h2 style={{ marginTop: "2rem" }}>1. Verantwortlicher</h2>
      <p>
        Florian Schneider
        <br />
        Gasteiner Straße 30
        <br />
        10717 Berlin
        <br />
        E-Mail: hi@karpfen-blank.de
      </p>

      <h2 style={{ marginTop: "2rem" }}>2. Hosting bei Vercel</h2>
      <p>
        Diese Website wird bei Vercel Inc. (USA) gehostet. Vercel speichert
        Server-Logs für Sicherheitszwecke.
      </p>

      <h2 style={{ marginTop: "2rem" }}>3. Zahlungsabwicklung via PayPal</h2>
      <p>
        Beim Kauf wirst du zu PayPal weitergeleitet. Dort gelten die
        Datenschutzbestimmungen von PayPal.
      </p>

      <h2 style={{ marginTop: "2rem" }}>4. Kontaktaufnahme</h2>
      <p>
        Wir speichern E-Mails nur so lange, wie es notwendig ist.
      </p>

      <h2 style={{ marginTop: "2rem" }}>5. Rechte der Nutzer</h2>
      <p>Du hast jederzeit das Recht auf Auskunft, Löschung und Berichtigung.</p>

      <h2 style={{ marginTop: "2rem" }}>6. Keine Cookies, kein Tracking</h2>
      <p>Diese Webseite verwendet keine Cookies und kein Analytics.</p>
    </main>
  );
}
