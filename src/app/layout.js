import { Montserrat } from "next/font/google";

import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Configure Montserrat with all weights (variable) and styles (normal + italic)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL("https://finsparkaccounting.co.uk"),
  title: {
    default: "Finspark Accounting | Accountants in London",
    template: "%s | Finspark Accounting",
  },
  description:
    "Finspark Accounting and Business Services Limited provides bookkeeping, VAT, company accounts, self assessment and tax support in London. Led by FCCA partners Asif Chaudhry and Asim Malik.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
