import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/navbarComponents/navbar";
import Footer from "./_components/Footer";
import ErrorBoundary from "./_components/ErrorBoundary";
import LoadingBar from "./_components/LoadingBar";

export const metadata: Metadata = {
  title: "Used Slot Shop - Quality Slot Machines",
  description: "Premium used slot machines at bargain prices. Browse 300+ vetted, refurbished slot machines with nationwide shipping and expert setup.",
  keywords: "used slot machines, slot machines for sale, casino equipment, gaming machines, bar slot machines",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Used Slot Shop - Quality Slot Machines",
    description: "Premium used slot machines at bargain prices",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <ErrorBoundary>
          <LoadingBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
