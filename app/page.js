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
      }}
    >
      <h1
        style={{
          fontSize: "clamp(4rem, 12vw, 10rem)",
          fontWeight: 600,
          lineHeight: 1,
          textTransform: "uppercase",
          margin: 0,
          whiteSpace: "pre-line",
        }}
      >
        Karpfen{"\n"}Blank
      </h1>
      <p
        style={{
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          marginTop: "1rem",
          fontWeight: 300,
        }}
      >
        Coming soon
      </p>
    </main>
  );
}
