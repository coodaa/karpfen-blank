import { Anton } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Karpfen Blank",
  description: "Coming soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={anton.className}>{children}</body>
    </html>
  );
}
