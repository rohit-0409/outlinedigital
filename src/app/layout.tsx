import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteNavigation } from "@/components/SiteNavigation";
import { agency } from "@/config/agency";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(agency.websiteUrl),
  title: {
    default: agency.name + " — Digital design & development",
    template: "%s | " + agency.name,
  },
  description: agency.description,
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: agency.name,
    title: agency.name + " — Digital design & development",
    description: agency.description,
    images: [{ url: "/images/estate-exterior.jpg", alt: "A considered digital experience for an independent estate agency" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteNavigation />
        {children}
      </body>
    </html>
  );
}
