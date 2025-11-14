import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Karpfen Blank 2026 – Alternativer Kunstkalender aus Berlin",
  description:
    "Karpfen Blank 2026 ist ein unabhängiger Kunstkalender aus Berlin. Zwölf Menschen. Ein Stoffkarpfen. Limitierte Auflage. 10 € Spende an den Berliner Kältebus.",
  keywords: [
    "Karpfen Kalender",
    "Berlin Kalender 2026",
    "Kunstkalender Berlin",
    "alternativer Kalender",
    "Independent Kalender",
    "Berlin Kunstprojekt",
    "Karpfen Blank",
  ],
  metadataBase: new URL("https://www.karpfen-blank.de"),
  openGraph: {
    title: "Karpfen Blank 2026 – Kunstkalender aus Berlin",
    description:
      "Ein alternativer Kalender aus Berlin. Zwölf Menschen. Ein Stoffkarpfen. Kleine Auflage, 10 € Spende an den Berliner Kältebus.",
    url: "https://www.karpfen-blank.de",
    siteName: "Karpfen Blank",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Karpfen Blank Kalender 2026 – Titelmotiv",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karpfen Blank 2026 – Kunstkalender aus Berlin",
    description:
      "Alternativer Berlin-Kunstkalender in kleiner Auflage. 10 € Spende an den Berliner Kältebus.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={anton.className}
        style={{
          minHeight: "100vh",
          backgroundImage: "url('/karpfenblank.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "white",
          position: "relative",
        }}
      >
        {/* GLOBAL OVERLAY – für gute Lesbarkeit auf ALLEN Seiten */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(2px)",
            zIndex: -1,
          }}
        ></div>

        {/* STRUCTURED DATA: PRODUCT + ORGANIZATION */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Karpfen Blank",
              url: "https://www.karpfen-blank.de",
              email: "hi@karpfen-blank.de",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "Karpfen Blank Kalender 2026",
              image: ["https://www.karpfen-blank.de/shop.png"],
              description:
                "Limitierter Kunstkalender aus Berlin. Zwölf Motive, ein Stoffkarpfen. 10 € Spende an den Berliner Kältebus.",
              brand: "Karpfen Blank",
              offers: {
                "@type": "Offer",
                url: "https://www.karpfen-blank.de",
                priceCurrency: "EUR",
                price: "35.00",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />

        {/* PAGE CONTENT */}
        {children}
      </body>
    </html>
  );
}
