import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Karpfen Blank 2026 – Karpfen Kalender aus Berlin",
  description:
    "A3-Kalender 2026 aus Berlin: zwölf Menschen, zwölf Orte, ein Stoffkarpfen. Limitierte Auflage. Jetzt bestellen.",
  keywords: [
    "Karpfen Kalender",
    "Berlin Kalender",
    "Kalender 2026 kaufen",
    "A3 Kalender",
    "Fotokalender Berlin",
    "Wandkalender Berlin",
    "Kalender Geschenkidee",
    "Karpfen Blank",
    "Karpfen Blank 2026",
    "Monatskalender 2026",
  ],
  metadataBase: new URL("https://www.karpfen-blank.de"),
  openGraph: {
    title: "Karpfen Blank 2026 – Kalender aus Berlin",
    description:
      "A3-Fotokalendar aus Berlin. Zwölf Menschen, zwölf Orte und ein Stoffkarpfen. Limitierte Auflage.",
    url: "https://www.karpfen-blank.de",
    siteName: "Karpfen Blank",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Karpfen Blank Kalender 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karpfen Blank 2026 – Kalender aus Berlin",
    description:
      "A3-Kalender 2026 aus Berlin. Zwölf Menschen. Ein Stoffkarpfen. Limitierte Auflage.",
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
        {/* GLOBAL OVERLAY */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(2px)",
            zIndex: -1,
          }}
        />

        {/* ORGANIZATION SCHEMA */}
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

        {/* PRODUCT SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Karpfen Blank Kalender 2026",
              image: ["https://www.karpfen-blank.de/shop.png"],
              description:
                "A3-Wandkalender aus Berlin. Zwölf Motive, zwölf Orte, ein Stoffkarpfen. Limitierte Auflage.",
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

        {/* FAQ SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Wann wird der Kalender verschickt?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Der Versand beginnt Anfang Dezember.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie groß ist der Kalender?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Der Kalender hat A3-Format (297 × 420 mm).",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wie viele Exemplare gibt es?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Die Auflage ist begrenzt.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Wo wird der Kalender produziert?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Der Kalender wird in Berlin gedruckt.",
                  },
                },
              ],
            }),
          }}
        />

        {/* REVIEW / RATING SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Karpfen Blank Kalender 2026",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "7",
              },
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
