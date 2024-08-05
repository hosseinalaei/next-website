import "./globals.css";

import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "./_components/footer/footer";
import { Header } from "./_components/header";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "700", "800", "900"],
});

const vazir = localFont({
  src: [
    {
      path: "../../public/fonts/vazir/Vazir-FD-WOL.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-FD-WOL.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-FD-WOL.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-FD-WOL.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-FD-WOL.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/vazir/Vazir-FD-WOL.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" className={`${vazir.variable} ${figtree.variable} dark`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
