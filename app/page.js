export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        backgroundImage: "url('/karpfenblank.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
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
          letterSpacing: "-0.03em",
        }}
      >
        Karpfen{"\n"}Blank
      </h1>

      <p
        style={{
          fontSize: "clamp(2rem, 5vw, 4rem)", // 🔥 größer & weiterhin flexibel
          marginTop: "2rem",
          fontWeight: 300,
        }}
      >
        Coming soon
      </p>
    </main>
  );
}
