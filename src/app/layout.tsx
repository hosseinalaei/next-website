import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "./_components/header/header";
import { Footer } from "./_components/footer/footer";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const vazir = localFont({
  src: [
    {
      path: "../../public/fonts/vazir/Vazir-FD-WOL.woff",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-vazir",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" className={`dark ${figtree.variable} ${vazir.variable}`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <div className="flex-1 flex">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
